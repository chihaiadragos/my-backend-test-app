import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RequestCardComponent } from '../request-card/request-card.component';
import { ResponseCardComponent } from '../response-card/response-card.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatGridListModule, RequestCardComponent, ResponseCardComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
}
