import { Component } from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

    <span>{{base}}</span>
    
    <button (click)="acumular()">Acumular</button>
    
    <span>{{numero}}</span>
    
    
    <button (click)="restar()">Reducir</button>
    `,
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 0;

    base: number = 5

    acumular(){
        this.numero += this.base
    }

    restar(){
        this.numero -= this.base
    }

}