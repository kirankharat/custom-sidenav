import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public isClick = new BehaviorSubject(false);
  constructor() { }
}
