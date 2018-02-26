import {BrowserModule} from '@angular/platform-browser';
import {NgModule, PlatformRef} from '@angular/core';

import {AppComponent} from './app.component';
import {exportPlatformInstance} from './utils/app-controller';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private platformRef: PlatformRef) {
    exportPlatformInstance(platformRef);
    platformRef.onDestroy(() => {
      console.log('app1 destroyed');
    });
  }
}
