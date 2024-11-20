import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopologyComponent } from './topology.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TopologyComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
