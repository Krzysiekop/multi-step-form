import { Component } from '@angular/core';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  step: number = 0;

  constructor(private stepService: StepsService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  goBack(){
    this.stepService.changeStep(3);

  }
  nextStep(){
    this.stepService.changeStep(5);
  }
}
