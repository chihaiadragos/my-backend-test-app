import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>('');

  setData(data: string): void {
    this.dataSubject.next(data);
  }

  getData(): Observable<string> {
    return this.dataSubject.asObservable();
  }

}