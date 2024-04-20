import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ResponseCardComponent } from '../response-card/response-card.component';
import { DataService } from './data.service';
@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ResponseCardComponent],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  title: string = "Create person";
  displayVal: string = "";
  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
    this.dataService.setData(this.displayVal);
  }
  constructor(private dataService: DataService) { }
}
