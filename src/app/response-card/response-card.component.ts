import { Component, Input, OnInit } from '@angular/core';
import { RequestCardComponent } from '../request-card/request-card.component';
import { DataService } from '../request-card/data.service';

@Component({
  selector: 'app-response-card',
  standalone: true,
  imports: [RequestCardComponent],
  templateUrl: './response-card.component.html',
  styleUrl: './response-card.component.css'
})
export class ResponseCardComponent implements OnInit{
  receivedData: string ="";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.receivedData = data;
    });
}
}