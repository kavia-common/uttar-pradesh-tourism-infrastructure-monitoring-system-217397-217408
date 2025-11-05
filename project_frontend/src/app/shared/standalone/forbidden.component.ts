import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="forbidden">
      <h2>Forbidden</h2>
      <p>You do not have permission to access this resource.</p>
    </section>
  `,
  styles: [`
    .forbidden {
      margin: 2rem auto;
      max-width: 640px;
      padding: 1.5rem;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      color: #111827;
      box-shadow: 0 4px 6px -4px rgba(0,0,0,0.06);
    }
    h2 { color: #ef4444; }
  `]
})
export class ForbiddenComponent {}
