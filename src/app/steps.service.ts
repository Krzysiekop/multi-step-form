import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {


  private stepSource = new BehaviorSubject<number>(1);
  currentStep = this.stepSource.asObservable();

  constructor() { }

  changeStep(step: number) {
    this.stepSource.next(step);
  }


  
}
