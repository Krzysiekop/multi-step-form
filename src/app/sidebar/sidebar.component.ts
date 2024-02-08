import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  step: number = 1;

  constructor(private stepService: StepsService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

}
