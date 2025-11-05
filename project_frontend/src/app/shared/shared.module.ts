import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * SharedModule
 * Reusable components, directives and pipes should live here.
 * Import this module in feature modules as needed.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [
    // example shared components/directives/pipes can be added here
  ],
  exports: [
    CommonModule,
    // export shared declarations here
  ],
})
export class SharedModule {}
