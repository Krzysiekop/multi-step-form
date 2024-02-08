import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css'
})
export class SelectPlanComponent {
  step: number = 0;
  // planType: string = '' || 'arcade' || 'advanced' || 'pro';
  planType: string = '';
  timeFrame: string = 'monthly' || 'yearly';
  totalCost: number = 0;
  checked = false;



  constructor(private stepService: StepsService) {
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
    this.stepService.changeStep(3)
  }

  goBack() {
    this.stepService.changeStep(1)
  }
}