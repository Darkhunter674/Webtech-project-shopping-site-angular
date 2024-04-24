import { NgModule } from '@angular/core';
import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DressesComponent } from "../dresses/dresses.component";
import { FormComponent } from '../form/form.component';
import { NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';


@Component({
    selector: 'app-main',
    
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
})
export class MainComponent {
    @ViewChild('containerElement') containerElement!: ElementRef;

    constructor(private renderer: Renderer2) { }
    ngOnInit(): void {
      setTimeout(() => {
        this.renderer.setStyle(this.containerElement.nativeElement, 'display', 'none');
      }, 3000);
    }
}
