import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderDataService } from '../order-data.service';


@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

  step!: number;
  personalInfoForm!: FormGroup;

  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  ngOnInit() {
    this.personalInfoForm = new FormGroup({
      name: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null),
    })

    this.personalInfoForm.setValue({
      name: this.orderDataService.orderData.name,
      phone: this.orderDataService.orderData.phone,
      email: this.orderDataService.orderData.email,
    });
  }

  getName() {
    return this.personalInfoForm.get('name');
  }

  getEmail() {
    return this.personalInfoForm.get('email');
  }

  getPhone() {
    return this.personalInfoForm.get('phone');
  }

  nextStep() {
    this.stepService.changeStep(2)
  }

  handleForm(e: Event) {
    this.orderDataService.orderData.name = this.personalInfoForm.get('name')?.value;
    this.orderDataService.orderData.email = this.personalInfoForm.get('email')?.value;
    this.orderDataService.orderData.phone = this.personalInfoForm.get('phone')?.value;

    console.log(this.orderDataService.orderData);
    e.preventDefault();
    this.nextStep();
  }

}
