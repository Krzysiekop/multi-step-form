import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { OrderDataService } from '../order-data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})

export class SummaryComponent {

  step: number = 0;



  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  planType = this.orderDataService.orderData.planType;
  timeDuration = this.orderDataService.orderData.timeDuration;
  addonOnline = this.orderDataService.orderData.addonOnline;
  addonStorage = this.orderDataService.orderData.addonStorage;
  addonProfile = this.orderDataService.orderData.addonProfile;


  goBack() {
    this.stepService.changeStep(3);
  }

  nextStep() {
    this.stepService.changeStep(5);
  }

}
