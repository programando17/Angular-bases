import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = 'Ironman';
  public age: number = 45;
  //public metodo: string = '';
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name} - ${ this.age }`;
  }

  ;  changeHero(): void {
    this.name = 'Spiderman';
  }


  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;
  }

}
