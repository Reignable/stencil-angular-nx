import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './generated';
import { defineCustomElements } from '@stencil-angular-nx/loader';

@NgModule({
  declarations: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
  exports: [...DIRECTIVES],
})
export class AngularComponentsModule {}
