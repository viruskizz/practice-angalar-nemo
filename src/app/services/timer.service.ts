import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  // current = 0;
  current = new BehaviorSubject<number>(0);
  constructor() {
    setInterval(() => {
      const val = this.current.getValue();
      this.current.next(val + 1); 
    }, 1000);
  }
}
