import { Component, ViewChild } from '@angular/core';
import { AlertController, MenuController, Nav, NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild(Nav) nav: Nav;
  constructor(private alertCtrl: AlertController, public menu: MenuController,public navCtrl: NavController) {
    this.pages = [
        { title: '', component:  ItemDetailsPage},
      ];
  }
  
  rootPage = ItemDetailsPage;
  pages: Array<{title: string, component: any}>;

  
  openUrl() {
    // let browser = this.iab.create('https://goo.gl/maps/2yaKz2CjR8esWWDb6/','_self',{location:'no'});
    window.open('https://goo.gl/maps/2yaKz2CjR8esWWDb6/','_blank')
  }   
  
  openPage(page) {
    page = this.pages[0]
    console.log(page,'here');
    
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }


  presentAlert1() {
    let alert = this.alertCtrl.create({
      title: 'Become a Software Developer in 4 Months',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }

  presentAlert2() {
    let alert = this.alertCtrl.create({
        title: 'Phase 1 = 1 month, 6 days per week, 8 hours per day \n Phase 2 = 3 months, 6 days per week, 12 hours per day',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }

  presentAlert3() {
    let alert = this.alertCtrl.create({
      title: 'Guaranteed job for those committing 100%',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }

  presentAlert4() {
    let alert = this.alertCtrl.create({
        title: `
        Technical skills include: 
        <ul>
            <li>Computer science concepts</li>
            <li>Javascript, frameworks, libraries & databases (React, Angular, Redux, MongoDB, NodeJS)</li>
            <li>Silicon Valley best practices (Git workflow, Agile/Scrum, Kanban)</li>
        </ul>
        `,
      cssClass: 'alertDanger'  
    });
    alert.present();
  }

  presentAlert5() {
    let alert = this.alertCtrl.create({
        title: `
        Non-Technical skills include:
        <ul>
            <li>English fluency</li>
            <li>Soft skills</li>
            <li>Professionalism</li>
            <li>Problem solving & working logic</li>
            <li>Self-learning ability</li>
        </ul>
        `,
        cssClass: 'alertDanger'   
    });
    alert.present();
  }

  presentAlert6() {
    let alert = this.alertCtrl.create({
      title: 'Tuition includes 3 meals per day during Phase 2.',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }
  
  presentAlert7() {
    let alert = this.alertCtrl.create({
      title: 'Tuition includes transportation during Phase 2',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }
 
  presentAlert8() {
    let alert = this.alertCtrl.create({
      title: 'Midday activities include exercise, meditation, yoga, walk with industry professionals and more',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }
  
  presentAlert9() {
    let alert = this.alertCtrl.create({
      title: 'Tuition is $8,000 USD. Financial aid and scholarships available',
      cssClass: 'alertDanger'  
    });
    alert.present();
  }
}
