import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { StepsService } from './steps.service';
import { NgIf } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MultiStepFormService } from './multi-step-form.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PersonalInfoComponent, SelectPlanComponent,PickAddOnsComponent, SummaryComponent ,NgIf, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  step: number = 0;

  constructor(private stepService: StepsService, private multiSteService : MultiStepFormService) {
    this.stepService.currentStep.subscribe(step => this.step = step)
  }

  multiStepForm = new FormGroup({
    personalInfoForm: new FormControl({
    name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
  }),
  payment: new FormGroup({
    plan: new FormControl(),
    timeFrame: new FormControl(),
  })
  })
  
  getForm(){
    return this.multiStepForm;
  }
}
