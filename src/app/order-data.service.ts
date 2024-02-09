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
  price: number = 0;

  private dataSource = new BehaviorSubject<orderModel>(this.orderData);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(order: orderModel) {
    this.dataSource.next(order);
  }

  priceAll(){
    if( this.orderData.timeDuration === 'monthly'){
        this.price += 12;
    }
    if( this.orderData.timeDuration === 'yearly'){
      this.price += 120;
  }

  }


}
