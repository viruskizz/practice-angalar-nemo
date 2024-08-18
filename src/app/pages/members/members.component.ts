import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [RouterModule, CommonModule, SharedModule],
  templateUrl: './members.component.html',
})
export class MembersComponent {
  timer = 0;
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    // this.timer = this.timerService.current;
    this.timerService.current.subscribe(val => {
      this.timer = val;
    })
  }
}
