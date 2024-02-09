import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { OrderDataService } from '../order-data.service';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})

export class SummaryComponent {

  step: number = 0;

  isOrderMonthly: boolean = false;
  monthlyPlanPrices: number[] = [9, 12, 12];
  yearlyPlanPrices: number[] = [90, 120, 150];
  monthlyAddOnsPrices: number[] = [1, 2, 2];
  yearlyAddOnsPrices: number[] = [10, 20, 20];
  totalPrice: number = 0;

  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  ngOnInit() {
    this.checkOrderDuration();
    this.calculateTotalPrice();
  }

  planType = this.orderDataService.orderData.planType;
  timeDuration = this.orderDataService.orderData.timeDuration;
  addonOnline = this.orderDataService.orderData.addonOnline;
  addonStorage = this.orderDataService.orderData.addonStorage;
  addonProfile = this.orderDataService.orderData.addonProfile;

  checkOrderDuration() {
    if (this.timeDuration === 'monthly') {
      this.isOrderMonthly = true;
    } else {
      this.isOrderMonthly = false;
    }
  }

  goBack() {
    this.stepService.changeStep(3);
  }

  nextStep() {
    this.stepService.changeStep(5);
  }

  calculateTotalPrice(): void {
    this.totalPrice = 0;
    if (!this.isOrderMonthly) {
      switch (this.planType) {
        case 'arcade':
          this.totalPrice += this.yearlyPlanPrices[0];
          break;
        case 'advanced':
          this.totalPrice += this.yearlyPlanPrices[1];
          break;
        case 'pro':
          this.totalPrice += this.yearlyPlanPrices[2];
          break;
        default:
          break;
      }
      this.totalPrice += this.addonOnline ? 10 : 0;
      this.totalPrice += this.addonProfile ? 20 : 0;
      this.totalPrice += this.addonStorage ?20 : 0;
    } else {
      switch (this.planType) {
        case 'arcade':
          this.totalPrice += this.monthlyPlanPrices[0];
          break;
        case 'advanced':
          this.totalPrice += this.monthlyPlanPrices[1];
          break;
        case 'pro':
          this.totalPrice += this.monthlyPlanPrices[2];
          break;
        default:
          break;
      }
      this.totalPrice += this.addonOnline ? 1 : 0;
      this.totalPrice += this.addonProfile ? 2 : 0;
      this.totalPrice += this.addonStorage ? 2 : 0;
    }
  }

  changePlanDuration(){
    this.isOrderMonthly = !this.isOrderMonthly;
    
    if (this.orderDataService.orderData.timeDuration === 'monthly') {
      this.orderDataService.orderData.timeDuration = 'yearly'
      this.timeDuration = 'yearly'
    }else{
      this.orderDataService.orderData.timeDuration = 'monthly'
      this.timeDuration = 'monthly'
    }

    this.calculateTotalPrice();
  }

}
