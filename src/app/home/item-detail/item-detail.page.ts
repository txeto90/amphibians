import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { AccordionComponent } from "src/app/components/accordion/accordion.component";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( param => {
      this.item = this.itemsService.getItem(param.get('itemId'));
    })
  }

}
