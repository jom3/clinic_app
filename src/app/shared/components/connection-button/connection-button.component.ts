import { Component, EventEmitter, Input, Output, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './connection-button.component.html',
  styleUrls: ['./connection-button.component.css']
})
export class ConnectionButtonComponent {

  @Input() public isLogged!:boolean;

  @Output() newLoggedOutEvent = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isLogged)
  }

  // public isLogged = signal<boolean>(false);

  private route = inject(Router)


  onLogin(){
    this.route.navigate(['/login'])
  }

  onLogout(){
    this.newLoggedOutEvent.emit(false)
  }
}
