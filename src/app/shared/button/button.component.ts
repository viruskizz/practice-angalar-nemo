import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  btn = "w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
  @Input() type = ''
  @Output() dif = new EventEmitter<number>();

  onClick(): any {
    if (this.type === '+') {
      this.dif.emit(1);
    } else if (this.type === '-') {
      this.dif.emit(-1);
    } else {
      this.dif.emit(0);
    }
  }
}
