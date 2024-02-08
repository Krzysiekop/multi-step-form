import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


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


  constructor(private stepService: StepsService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  ngOnInit(){
    this.personalInfoForm = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
    })
  }

  getName(){
   return this.personalInfoForm.get('name');
  }

  getEmail(){
    return this.personalInfoForm.get('email');
  }

  getPhone(){
    return this.personalInfoForm.get('phone');
  }

  nextStep(){
    this.stepService.changeStep(2)
  }

  handleForm(e :Event){
    console.log(this.getName()?.value)
    console.log(this.getEmail()?.value)
    console.log(this.getPhone()?.value)
    e.preventDefault();
    this.nextStep();
  }

}
