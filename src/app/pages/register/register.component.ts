import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  allYears:any;
  allIndianStates:any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.allIndianStates = indianStates;
    this.allYears = new Array();
    for(let i=1900; i<2023;i++){
      this.allYears.push(`${i}`);
    }
    this.initForm();
  }

  choosePhoto() {
    this.fileInput.nativeElement.click();
  }

  onSubmit() {
    let formData = this.memberForm.value;
    console.log('formData', formData);
  }

  selectPhoto(event:any){
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
        firstName: [''],
        middleName: [''],
        lastName: ['']
      }),
      sex: ['Male'],
      dateOfBirth: [''],
      placeOfBirth: this.fb.group({
        village: [''],
        taluk: [''],
        district: [''],
        state: [''],
        country: ['']
      }),
      // MbbsOrPg
      mbbsOrPg: this.fb.group({
        startDate: [''],
        endDate: [''],
        institutionName: [''],
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
      guardianFullName: [''],
      spouseFullName: [''],
      isSpouseDoctor: [false],
      isAlumni: [false],
      yearOrStudy: [''],
      collegeOfStudy: [''],
      presentDesignation: [''],
      presentAddress: this.fb.group({
        locality: [''],
        town: [''],
        pin: [''],
        state: [''],
        country: [''],
        mobileNo: [''],
        emailAddress: ['']
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
      captcha: ['']
    });
  }

  onVerify(token: string) {
    // The verification process was successful.
    // You can verify the token on your server now.
    console.log('token',token);
  }

  onExpired(response: any) {
    // The verification expired.
  }

  onError(error: any) {
    // An error occured during the verification process.
  }
}
