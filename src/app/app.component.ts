import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAss';
  isLogin:boolean=false;
  constructor(private route: Router) {  }
  ngOnInit (): void {
    
  }
  isLoggedin() {
    this.isLogin = sessionStorage.getItem('token')? true: false;
  }
  logout() {
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}

