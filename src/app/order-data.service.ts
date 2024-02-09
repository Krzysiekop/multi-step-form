import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { orderModel } from './model/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  orderData: orderModel = {
    name: '',
    phone: '',
    email: '',
    timeDuration: 'monthly',
    planType: 'arcade',
    addonOnline: false,
    addonStorage: false,
    addonProfile: false,
    toggle: false,
  }


  // private personSource = new BehaviorSubject<personalInfoModel>(this.person);
  // currentPerson = this.personSource.asObservable();

  // constructor() { }

  // changeQuantity(person: personalInfoModel) {
  //   this.personSource.next(person);
  // }

}
