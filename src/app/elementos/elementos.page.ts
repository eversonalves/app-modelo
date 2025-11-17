import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
   IonMenuButton, IonButtons, IonBackButton, IonFooter, 
   IonInput, IonItem, IonList, IonCard, IonCardHeader, 
   IonCardTitle, IonCardSubtitle, IonCardContent, IonCheckbox,
   IonButton, IonAlert, IonDatetimeButton, IonModal, IonDatetime, IonAvatar, IonLoading } from '@ionic/angular/standalone';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.page.html',
  styleUrls: ['./elementos.page.scss'],
  standalone: true,
  imports: [IonLoading, IonAvatar, IonDatetime, IonModal, IonDatetimeButton, IonAlert, IonButton, IonCheckbox, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonFooter, IonInput, IonItem, IonList, RouterLinkActive]
})
export class ElementosPage implements OnInit {
alertButtons: any;

  constructor() { }

  ngOnInit() {
  }

}