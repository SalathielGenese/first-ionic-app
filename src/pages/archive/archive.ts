import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';

/**
 * Generated class for the ArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {

    public suggestions: {email: string, fullname: string, suggestion: string}[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
        storage.get('suggestions').then(suggestions =>
            {
                this.suggestions.push(...suggestions);
            });
    }

    public deleteSuggestion(suggestion)
    {
        this.suggestions.splice(this.suggestions.indexOf(suggestion), 1);
        this.storage.set('suggestions', this.suggestions);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ArchivePage');
    }

}
