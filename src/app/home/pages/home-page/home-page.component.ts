import { ChangeDetectionStrategy, Component, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ConnectionButtonComponent } from 'src/app/shared/components/connection-button/connection-button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavbarComponent,
    ConnectionButtonComponent,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  public hasToken = signal<boolean>(false)

  ngOnInit(): void {
    if(this.hasToken()!=true){
      this.checkToken()
    }
  }

  checkToken(){
    if(!localStorage.getItem('token')) return;
    this.hasToken.set(true)
  }

  check(hasToken:boolean){
    this.hasToken.set(false)
    localStorage.clear()
  }

}
