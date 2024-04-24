import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Dressdata } from  '../dressdata';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrl: './dresses.component.css'
  
})

export class DressesComponent implements OnInit {
  dress=Dressdata;
  constructor() {
}

  ngOnInit(): void { 
  }
}
