import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Dressdata } from '../dressdata'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dress',

  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  dress: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert id to a number
      console.log('Dress id:', id - 1); // Log the dress id incremented by 1
      this.dress = Dressdata[id - 1];
    });
  }
  
  
}
