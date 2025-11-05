import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="auth-container">
      <div class="card">
        <h2>Sign in</h2>
        <p class="muted">This is a placeholder login screen.</p>
        <button class="primary" (click)="login()">Mock Login</button>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 70vh;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, rgba(59,130,246,0.05), rgba(243,244,246,0.6));
      padding: 2rem;
    }
    .card {
      background: #ffffff;
      color: #111827;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 2rem 2.5rem;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -4px rgba(0,0,0,0.06);
    }
    h2 {
      margin-bottom: 0.5rem;
      color: #1f2937;
    }
    .muted {
      color: #64748b;
      margin-bottom: 1.25rem;
    }
    .primary {
      background-color: #3b82f6;
      color: #fff;
      border: none;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      cursor: pointer;
    }
    .primary:hover {
      background-color: #2563eb;
    }
  `]
})
export class LoginComponent {
  private auth = inject(AuthService);
  login() {
    // Mock login for scaffolding. Replace with real login flow.
    this.auth.setSession('mock-token', undefined, ['ADMIN']);
  }
}
