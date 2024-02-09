import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { StepsService } from '../steps.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderDataService } from '../order-data.service';


@Component({
  selector: 'app-pick-add-ons',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './pick-add-ons.component.html',
  styleUrl: './pick-add-ons.component.css'
})
export class PickAddOnsComponent {

  step!: number;
  addon!: string;
  addonsForm!: FormGroup;
  orderDataServiceOnlineAddon = this.orderDataService.orderData.addonOnline;
  orderDataServiceProfileAddon = this.orderDataService.orderData.addonProfile;
  orderDataServiceStorageAddon = this.orderDataService.orderData.addonStorage;
  

  constructor(private stepService: StepsService, private orderDataService: OrderDataService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  ngOnInit() {
    this.addonsForm = new FormGroup({
      online: new FormControl(this.orderDataServiceOnlineAddon),
      profile: new FormControl(this.orderDataServiceProfileAddon),
      storage: new FormControl(this.orderDataServiceStorageAddon),
    })
  }

  timeDuration = this.orderDataService.orderData.timeDuration;

  chooseAddons(addon: string) {
    if (this.addon === addon) {
      this.addon = ''
    }
    else {
      this.addon = addon;
    }
  }

  // chooseAddons() {
  //   this.orderDataServiceOnlineAddon = this.addonsForm.get('online')?.value;
  //   console.log(this.addonsForm.get('online')?.value);
  //   this.orderDataService.orderData.addonStorage = this.addonsForm.get('storage')?.value;
  //   this.orderDataService.orderData.addonProfile = this.addonsForm.get('profile')?.value;
  // }


  goBack() {
    this.stepService.changeStep(2)
  }

  nextStep() {
    console.log(this.orderDataService.orderData)
    this.orderDataService.orderData.addonOnline = this.addonsForm.get('online')?.value;
    this.orderDataService.orderData.addonStorage = this.addonsForm.get('storage')?.value;
    this.orderDataService.orderData.addonProfile = this.addonsForm.get('profile')?.value;

    this.stepService.changeStep(4)
  }
}
