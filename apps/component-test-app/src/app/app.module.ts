import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AngularComponentsModule } from '@stencil-angular-nx/angular-components';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AngularComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
