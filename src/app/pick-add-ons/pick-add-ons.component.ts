import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { StepsService } from '../steps.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderDataService } from '../order-data.service';


@Component({
  selector: 'app-pick-add-ons',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './pick-add-ons.component.html',
  styleUrl: './pick-add-ons.component.css'
})
export class PickAddOnsComponent {

  step!: number;
  addon!: string;

  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  chooseAddons(addon: string) {
    if (this.addon === addon) {
      this.addon = ''
    }
    else {
      this.addon = addon;
    }

    if(this.addon === 'online'){
      this.orderDataService.orderData.addonOnline = true;
    }
    if(this.addon === 'profile'){
      this.orderDataService.orderData.addonProfile = true;
    }
    if(this.addon === 'storage'){
      this.orderDataService.orderData.addonStorage = true;
    }

  }

  goBack() {
    this.stepService.changeStep(2)
  }

  nextStep() {
    console.log(this.orderDataService.orderData)
    this.stepService.changeStep(4)
  }
}
