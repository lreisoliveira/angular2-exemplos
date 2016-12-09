import {Component} from 'angular2/core';
import {CepPipe} from './cep-pipe';

@Component({
  selector: 'meu-app',
  template: `
  	<h1>Angular 2 - Aula 4</h1>
  	<p>Caixa alta: {{texto | uppercase}}</p>
  	<p>Caixa baixa: {{texto | lowercase}}</p>
  	<p>Valor: {{valor | currency:'BRL':true}}</p>
  	<p>Data: {{dataAtual | date:'dd/MM/yyyy'}}</p>
  	<p>Data dinâmica: {{dataAtual | date:formatar}}</p>
  	<p><button (click)="mudarFormato()">Mudar formato</button></p>
  	<p>CEP: {{cep | cep}}</p>
  	`,
  pipes: [CepPipe]
})
export class AppComponent{
	texto: string = 'Curso de Angular 2.';
	valor: number = 1096.87;
	dataAtual: Date = new Date();
	formato: boolean = true;
	cep: string = '09454435';

	get formatar() {
		return this.formato ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yy';
	}

	mudarFormato() {
		this.formato = !this.formato;
	}
}
