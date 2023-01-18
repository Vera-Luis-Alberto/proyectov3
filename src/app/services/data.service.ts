import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lvl: number = 0;
  lvlName: string = '';

  constructor() { 
  }
}
