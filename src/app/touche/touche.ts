import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-touche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './touche.html',
})
export class Touche {
  @Input() value!: string;
  @Output() cliquer = new EventEmitter<string>();

  onClick() {
    this.cliquer.emit(this.value);
  }
}
