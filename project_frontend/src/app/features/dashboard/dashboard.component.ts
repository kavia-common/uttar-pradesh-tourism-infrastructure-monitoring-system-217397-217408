import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to UP Tourism Infrastructure Monitoring System.</p>
      <div class="grid">
        <div class="card">Projects</div>
        <div class="card">Tenders</div>
        <div class="card">Funds</div>
        <div class="card">Reports</div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 1.5rem;
    }
    h2 { color: #1f2937; }
    .grid {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1rem;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 1rem;
      color: #111827;
      box-shadow: 0 4px 6px -4px rgba(0,0,0,0.06);
    }
  `]
})
export class DashboardComponent {}
