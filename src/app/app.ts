import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserInputComponent } from './user-input/user-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected title = 'Investment Calculator';
}
