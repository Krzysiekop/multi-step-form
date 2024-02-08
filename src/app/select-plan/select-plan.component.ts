import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { NgClass, NgIf } from '@angular/common';
import { OrderDataService } from '../order-data.service';


@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css'
})
export class SelectPlanComponent {
  step!: number;
  // planType: string = '' || 'arcade' || 'advanced' || 'pro';
  planType?: string = this.orderDataService.orderData.planType;
  timeFrame?: string = this.orderDataService.orderData.timeDuration ;
  totalCost: number = 0;
  checked? : boolean;

  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  toggleDuration() {
    this.checked = !this.checked;
    if (this.checked === false) {
      this.timeFrame = 'monthly'

    }
    if (this.checked === true) {
      this.timeFrame = 'yearly';

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
    console.log(this.orderDataService.orderData)
    this.stepService.changeStep(3)
  }

  goBack() {
    this.stepService.changeStep(1)
  }

}