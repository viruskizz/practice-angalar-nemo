import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, SharedModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'Angular Practice';
  imgUrl = 'https://wallpaperaccess.com/full/9111211.jpg';
  number = 0;

  timer = 0;

  btn = "w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"

  constructor(private timerService: TimerService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // this.timer = this.timerService.current;
    this.timerService.current.subscribe(val => {
      this.timer = val;
    })
  }

  onPress(action: '+' | '-') {
    if (action === '+') {
      this.number += 1;
    }
    if (action === '-') {
      this.number -= 1;
    }
  }

  onDif(event: any) {
    console.log('event:', event);
    this.number += event
  }
}
