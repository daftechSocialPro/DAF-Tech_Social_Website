import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DAFTechSocialWebsite';
  isInAdminDashboard: boolean = false;
  isInLogin: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route to determine if it's the admin dashboard
        this.isInAdminDashboard = event.url.includes('/client-dashboard');
        this.isInLogin = event.url.includes('/login');
      }
    });
  }
}
