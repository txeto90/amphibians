import { Anfibio } from './../model/anfibio';
import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Anfibio[];
  searchText = '';

  constructor(
    private itemsService: ItemsService
  ) {}

  ngOnInit(){
    this.items = this.itemsService.getAllItems();
  }

  search(event){
    this.searchText = event.detail.value;
  }


}
