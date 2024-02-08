import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { StepsService } from '../steps.service';
import { FormControl, FormGroup } from '@angular/forms';


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

  constructor(private stepService: StepsService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  chooseAddons(addon: string) {
    if (this.addon === addon) {
      this.addon = ''
    }
    else {
      this.addon = addon;
    }
  }

  goBack() {
    this.stepService.changeStep(2)
  }

  nextStep() {
    this.stepService.changeStep(4)
  }
}
