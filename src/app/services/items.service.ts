import { Injectable } from '@angular/core';
import { ANFIBIOS } from '../mocks/anfibios_es';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Array<any> = ANFIBIOS;

  constructor() {   }

  getAllItems(){
    return [...this.items];
  }

  getItem(itemId: String){
    return {
      ...this.items.find( item => {
        return item.id === itemId;
      })
    }
  }



}
