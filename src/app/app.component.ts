import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { StepsService } from './steps.service';
import { NgIf } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PersonalInfoComponent, SelectPlanComponent,PickAddOnsComponent, SummaryComponent, ThankyouComponent ,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  step: number = 0;

  constructor(private stepService: StepsService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }


}
