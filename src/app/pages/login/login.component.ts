import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit  {
  @ViewChildren('formInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }
  
  addFocus(input: HTMLInputElement): void {
    let parent = input.parentNode?.parentNode as HTMLElement;
    if (parent) {
      parent.classList.add("focus");
    }
  }

  removeFocus(input: HTMLInputElement): void {
    let parent = input.parentNode?.parentNode as HTMLElement;
    if (parent && input.value === "") {
      parent.classList.remove("focus");
    }
  }
 ngOnInit(): void {
    // Check if token is expired when the component initializes
    this.checkTokenExpiration();
  }

  login(email: string, password: string): void {
    this.http.post<any>('http://localhost:8000/login', { email, password })
      .subscribe(
        response => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            // Redirect user to home page or any other desired page
            this.router.navigate(['/dashboard']);
          } else {
            this.handleError('Login failed. Please check your credentials and try again.');
          }
        },
        error => {
          if (error.status === 401) {
            this.handleError('Unauthorized. Please check your credentials.');
          } else {
            this.handleError('An error occurred. Please try again later.');
          }
        }
      );
  }
  private checkTokenExpiration(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = this.parseJwt(token);
      if (tokenPayload && tokenPayload.exp) {
        const expirationTime = new Date(tokenPayload.exp * 1000);
        const currentTime = new Date();
        if (currentTime > expirationTime) {
          // Token has expired, log out the user
          this.logout();
        } else {
          // Token is still valid, schedule a check for expiration
          const expiresIn = expirationTime.getTime() - currentTime.getTime();
          setTimeout(() => {
            this.checkTokenExpiration();
          }, expiresIn);
        }
      }
    }
  }
  
  logout(): void {
    // Clear token from local storage and redirect to login page
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  

  private parseJwt(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  private handleError(message: string): void {
    console.error(message);
    this.error = message;
    setTimeout(() => {
      this.error = null;
    }, 2000);
  }
}