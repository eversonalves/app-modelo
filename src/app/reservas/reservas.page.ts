import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonFooter, IonButton, IonTabBar, IonTabButton, IonIcon, IonBadge, IonLabel, IonList, IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonDatetime, IonGrid, IonRow, IonCol, IonAlert, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [IonModal, IonDatetimeButton, IonAlert, IonCol, IonRow, IonGrid, IonDatetime, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonInput, IonItem, IonList, IonLabel, IonBadge, IonIcon, IonTabButton, IonTabBar, IonButton, IonFooter, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class ReservasPage implements OnInit {
customCounterFormatter: any;
setOpen(arg0: boolean) {
throw new Error('Method not implemented.');
}
isAlertOpen: any;
alertButtons: any;

  constructor() { }

  ngOnInit() {
  }

}
