import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouscommiteeComponent } from './previouscommitee.component';

describe('PreviouscommiteeComponent', () => {
  let component: PreviouscommiteeComponent;
  let fixture: ComponentFixture<PreviouscommiteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviouscommiteeComponent]
    });
    fixture = TestBed.createComponent(PreviouscommiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
