import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
names: string[];
  constructor() {
    this.names = ['ruspa', 'autocarro', 'gru', 'ruspino', 'autocarrino', 'gruino', 'martellino', 'luchino', 'moliscarsino', 'corrascarsino'];
   }

  ngOnInit() {
  }

}
