import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { NgClass, NgIf } from '@angular/common';
import { OrderDataService } from '../order-data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css'
})
export class SelectPlanComponent {
  step!: number;
  // planType: string = '' || 'arcade' || 'advanced' || 'pro';
  planType?: string = this.orderDataService.orderData.planType;
  timeFrame?: string = this.orderDataService.orderData.timeDuration;
  totalCost: number = 0;
  checked = false;
  checkForm!: FormGroup


  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  ngOnInit() {
    this.checkForm = new FormGroup({
      toggle: new FormControl(this.orderDataService.orderData.toggle),
    })
  }

  getToggle() {
    return this.checkForm.get('toggle');
  }


  toggleDuration() {
    console.log(this.checkForm.get('toggle')?.value)

    this.checked = !this.checked;
    if (this.checked === false) {
      this.timeFrame = 'monthly'
      this.checkForm.setValue({
        toggle: false,
      })
      this.orderDataService.orderData.toggle = false

    }

    if (this.checked === true) {
      this.timeFrame = 'yearly';
      this.checkForm.setValue({
        toggle: true,
      })
      this.orderDataService.orderData.toggle = true;
    }



  }




  choosePlan(planType: string) {
    if (this.planType === planType) {
      this.planType = ''
    }
    else {
      this.planType = planType;
    }
  }

  nextStep() {
    this.orderDataService.orderData.timeDuration = this.timeFrame;
    this.orderDataService.orderData.planType = this.planType;
    this.stepService.changeStep(3)
  }

  goBack() {
    this.stepService.changeStep(1)
  }

}