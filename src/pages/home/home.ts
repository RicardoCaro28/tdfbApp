import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tareas2: AngularFireList<any>;
  tareas: Observable<any[]>;

  constructor(public navCtrl: NavController, public alert: AlertController, public db: AngularFireDatabase) {

    this.tareas2 = this.db.list('listaTareas');
    this.tareas = this.tareas2.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  }


