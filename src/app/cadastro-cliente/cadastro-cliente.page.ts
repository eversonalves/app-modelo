import { Form } from '@angular/forms';
// Importações básicas do Angula e módulos necessários

import { Component, isStandalone } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";

// Importações dos componentes Ion que são usados na tela

import {
  IonHeader, IonTabBar, IonTitle, IonContent, IonItem,
  IonLabel, IonInput, IonButton, IonList, IonButtons, IonMenuButton, IonCard, IonToolbar, IonCardHeader, IonCardTitle, IonFooter } from '@ionic/angular/standalone';

// Definição do componente Standalone (Sem NgModule)

@Component({
  selector: 'app-cadastro-cliente', // seletor do componente
  standalone: true, // Indica que não usa (NgModule)
  templateUrl: './cadastro-cliente.page.html', // Tamplate de interface (View - nossa tela)
  styleUrl: './cadastro-cliente.page.scss', // Style opcionais 
  imports: [IonFooter, IonCardTitle, IonCardHeader, IonToolbar, IonCard, 
    IonHeader, IonTabBar, IonTitle, IonContent, IonItem,
    IonLabel, IonInput, IonButton, IonList, IonButtons, IonMenuButton, CommonModule, ReactiveFormsModule
  ]
})

export class CadastroClientePage{
  // formBuilder injeção para criação de formulários
  constructor(private fb: FormBuilder){}

  // Criação do formulário reativo com validações
  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(30)]],
    email:['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(9)]]
  });

  // Array para armazenar clientes cadastrados temporariamente
  clientes: any[] = [];
  
  // Método chamado ao clicar em "Salvar cliente"
  salvar(){

    // Somente adicionado se o formulário estiver válido
    if(this.form.valid){
      this.clientes.push(this.form.value); // Adiciona o cliente na lista
      this.form.reset(); // Limpa os campos do formulário após salvar
    }
  }

  // Remove o cliente da lista
  remover(i: number){
    this.clientes.splice(i,1);
  }

}

