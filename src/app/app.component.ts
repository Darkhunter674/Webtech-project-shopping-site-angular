import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anubhav';
   
  constructor(private router: Router) { }

  isLoginPage(): boolean {
    return this.router.url.includes('login');
  }
  issignupPage(): boolean {
    return this.router.url.includes('signup');
  }
  ngOnInit(): void {}

  isLoggedIn(): boolean {
    // Check if user is logged in (e.g., check token existence)
    return !!localStorage.getItem('token');
  }
  
  // getUsername(): string {
  //   // Get username from session or wherever it's stored
  //   // For demonstration, let's assume username is stored in local storage
  //   return localStorage.getItem('username') || '';
  // }
  getUsername(): string {
    // Retrieve username from wherever it's stored, for example, local storage
    const username = localStorage.getItem('username');
    return username ? username : ''; // Return empty string if username is null or undefined
  }
  logout(): void {
    // Clear token and any other user-related data
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
  