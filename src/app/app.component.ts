import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  	var config = {
	    apiKey: "AIzaSyAXT3QkGG1GQQOGe4LFFZPv59uwofmJOBE",
	    authDomain: "biblio-angular-firebase.firebaseapp.com",
	    databaseURL: "https://biblio-angular-firebase.firebaseio.com",
	    projectId: "biblio-angular-firebase",
	    storageBucket: "biblio-angular-firebase.appspot.com",
	    messagingSenderId: "414004546213"
  	};
  firebase.initializeApp(config);
  }
}
