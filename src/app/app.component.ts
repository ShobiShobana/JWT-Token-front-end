import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NbSidebarService } from '@nebular/theme';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table!: boolean;
  DashBoard: string | undefined;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public authService: AuthService,
    // public table:TableComponent
     ) { }
  logout() {
    this.authService.doLogout()
    console.log('logout')
  }

}