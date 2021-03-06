import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Card } from '../top10/attractions.interface';
import { FavouritesPage } from '../favourites/favourites';
import { HomePage } from '../home/home';
import { VisitedPage } from '../visited/visited';
import { SearchPage } from '../search/search';

/**
 * Generated class for the AttractionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attraction-detail',
  templateUrl: 'attraction-detail.html',
})
export class AttractionDetailPage {
  attraction: Card;
  comments: Array<string> = new Array();
  commentString: string;
  exampleUser: string = "Ola Nordmann:  ";
  length: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.attraction = navParams.get('attraction');
    this.comments.push('This attraction is super awesome!');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionDetailPage');
 
  }

  onCommentChange( ev: any ) {
     const val = ev.target.value;
     this.commentString = val;
  }

  commentEnterKey(){
    length = this.comments.push( this.commentString )
    this.commentString = "";
    for(let i in this.comments){
      console.log( this.comments[i] );
    }
  }

  btnHome(){
    this.navCtrl.push( HomePage );
  }
  
  btnSearch(){
    this.navCtrl.push( SearchPage );
  }
  isTop10(attraction: Card) {
    return attraction.tags.includes( 'Top 10' );
  }

  changeFavourite( attraction: Card ) {
    if ( attraction.favourite ) {
      attraction.favourite = false;
    } else {
      attraction.favourite = true;
    }
  };

  changeSeen( attraction: Card ) {
    if ( attraction.seen ) {
      attraction.seen = false;
    } else {
      attraction.seen = true;
    }
  }

  btnFavourites(){
    this.navCtrl.push( FavouritesPage );
  }

  btnSeen(){
    this.navCtrl.push( VisitedPage );
  }
  

}
