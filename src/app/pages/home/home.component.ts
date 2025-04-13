// home.component.ts
import { HeaderComponent } from '../header/header.component';
import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}