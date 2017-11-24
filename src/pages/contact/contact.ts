import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

    public suggestion: {email: string, fullname: string, suggestion: string} = <any>{};
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContactPage');
    }

    public onsubmit(form) {
        this.storage.get('suggestions').then((suggestions: {}[]) =>
            {
                if (!Array.isArray(suggestions))
                    suggestions = [];
                suggestions.push({...{}, ...this.suggestion});
                this.storage.set('suggestions', suggestions);

                this.suggestion.email = "";
                this.suggestion.fullname = "";
                this.suggestion.suggestion = "";
            });
    }

}
