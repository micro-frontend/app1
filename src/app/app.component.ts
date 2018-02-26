import {Component} from '@angular/core';

@Component({
  selector: 'app-root-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;

  increase(): void {
    this.count++;
  }
}
