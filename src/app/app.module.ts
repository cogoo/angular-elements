import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { AngularElementComponent } from './angular-element/angular-element.component';


@NgModule({
  declarations: [
    AngularElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AngularElementComponent
  ],
  providers: [
  ]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
  }

  ngDoBootstrap() {
    const el = createCustomElement(AngularElementComponent, { injector: this.injector });
    customElements.define('angular-element', el);
  }
}
