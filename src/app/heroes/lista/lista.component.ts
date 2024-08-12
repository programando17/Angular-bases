import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public heroeNombres: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public eliminarHeroe?: string;

  eliminarUltimoHeroe(): void {
    this.eliminarHeroe = this.heroeNombres.pop();

  }



}
