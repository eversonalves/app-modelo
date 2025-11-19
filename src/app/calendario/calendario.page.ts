import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonFooter, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonCardSubtitle, IonCard, IonCardTitle, IonCardHeader, IonLabel, IonCardContent, IonItem, IonDatetime, IonList, IonListHeader, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [IonAlert, IonList, IonDatetime, IonItem, IonCardContent, IonLabel, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle,
    IonButton,
    IonFooter,
    IonMenuButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule, IonListHeader],
})
export class CalendarioPage implements OnInit {
alertButtons: any;
onClick() {
throw new Error('Method not implemented.');
}
  constructor() {}

  dataSelecionada: string = '';
  listaDatas: Date[] = [];

  // Função para adicionar a data selecionada a lista

  adicionarData() {
    if (this.dataSelecionada) {
      const nova = new Date(this.dataSelecionada);
      const existe = this.listaDatas.some(
        (d) => d.toDateString() === nova.toDateString() // 1 = (atribuição) 2 == (compara valor) 3 === (compara tipo e valor)
      );
      if (!existe) this.listaDatas.push(nova);
    }
  }

  removerData(i: number) {
    this.listaDatas.slice(i, 1);
  }

  ngOnInit() {}
}
