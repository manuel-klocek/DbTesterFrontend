import { Component } from '@angular/core';
import { PersistenceService } from './persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private request: PersistenceService) { }

  title = 'DbTestingFrontend';

  loadingIndicator$ = this.request._loading

}
