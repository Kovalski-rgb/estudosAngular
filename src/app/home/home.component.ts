import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuth: boolean;
  constructor(private router : Router, private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.loggedIn;
    this.authService.getIsAuthEmitter().subscribe((isAuth:boolean) => this.isAuth = isAuth);
  }
  
  onLoadServers(id: number){
   this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: "Loading"}) 
  }

  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }

}
