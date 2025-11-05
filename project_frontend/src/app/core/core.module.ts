import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * CoreModule
 * Holds singleton services and should be imported only once in the application root.
 * Do not import this module in any lazy-loaded feature modules.
 */
@NgModule({
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppComponent bootstrap only.');
    }
  }
}
