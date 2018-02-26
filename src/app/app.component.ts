import {Component} from '@angular/core';

@Component({
  // tslint:disable:component-selector
  selector: 'app-root-__AppLoaderDynamicId__',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;

  increase(): void {
    this.count++;
  }
}
