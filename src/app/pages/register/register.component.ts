import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import { indianStates } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  memberForm!: FormGroup;
  isCaptchaVerified = false;
  captchaCode: string = "";
  showConfirmation: boolean = false;
  allYears: any;
  allIndianStates: any;

  constructor(private fb: FormBuilder, private membersService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.allIndianStates = indianStates;
    this.allYears = new Array();
    for (let i = 1900; i < 2023; i++) {
      this.allYears.push(`${i}`);
    }
    this.initForm();
  }

  choosePhoto() {
    this.fileInput.nativeElement.click();
    return false;
  }

  onSubmit() {
    let formData = this.memberForm.value;
    const that = this;

    that.membersService.addNewMember(formData).subscribe((res: any) => {
      that.router.navigate(['/register-confirm']);
    });
  }

  selectPhoto(event: any) {
    this.readLargeFileAsBase64(event.target.files[0]);
  }

  readLargeFileAsBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      this.memberForm.patchValue({
        passportSizePhoto: base64String,
      });
    };
    reader.readAsDataURL(file);
  }

  initForm() {
    this.memberForm = this.fb.group({
      passportSizePhoto: [''],
      fullName: this.fb.group({
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required]
      }),
      sex: ['Male'],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: this.fb.group({
        village: ['', Validators.required],
        taluk: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      }),
      // MbbsOrPg
      mbbsOrPg: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        institutionName: ['', Validators.required],
      }),

      // HouseSurgency
      houseSurgency: this.fb.group({
        startDate: [''],
        endDate: [''],
        institutionName: [''],
      }),

      // Diploma
      diploma: this.fb.group({
        startDate: [''],
        endDate: [''],
        institutionName: [''],
      }),

      // Degree
      degree: this.fb.group({
        startDate: [''],
        endDate: [''],
        institutionName: [''],
      }),

      // PostDoctoral
      postDoctoral: this.fb.group({
        startDate: [''],
        endDate: [''],
        institutionName: [''],
      }),
      guardianFullName: ['', Validators.required],
      spouseFullName: [''],
      isSpouseDoctor: [false],
      isAlumni: [false],
      yearOrStudy: [''],
      collegeOfStudy: [''],
      presentDesignation: [''],
      presentAddress: this.fb.group({
        locality: ['', Validators.required],
        town: ['', Validators.required],
        pin: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        mobileNo: ['', Validators.required],
        emailAddress: ['', Validators.required]
      }),
      permanentAddress: this.fb.group({
        locality: [''],
        town: [''],
        pin: [''],
        state: [''],
        country: [''],
        mobileNo: [''],
        emailAddress: ['']
      }),
      paymentReferenceInformation: [''],
    });
  }

  onVerify(token: string) {
    // The verification process was successful.
    // You can verify the token on your server now.
    console.log('token', token);
  }

  onExpired(response: any) {
    // The verification expired.
  }

  onError(error: any) {
    // An error occured during the verification process.
  }
}
