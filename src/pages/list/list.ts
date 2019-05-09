import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, icon: string}>;
  list;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['laptop', 'flask', 'contact','logo-bitcoin', 'git-merge', 'create', 'build'];

    this.items = [];
    this.list = ['Full Stack Engineer', 'Data Scientist', 'CRM Admin', 'Blockchain Engineer', 'Cyber Security Tech', 'English + Digital Litercy', 'Architecture & Engineering Tech']
    for(let i = 0; i < this.list.length; i++) {
      this.items.push({
        title: this.list[i],
        icon: this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
