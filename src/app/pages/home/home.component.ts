// home.component.ts
import { HeaderComponent } from '../header/header.component';
import {Component} from "@angular/core";
import {NgStyle} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgStyle, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  request: FormGroup;
  selectedDevice: string = '';
  constructor(private formBuilder: FormBuilder) {
    this.request = this.formBuilder.group({
      name: [''],
      email: [''],
      device: [''],
      deviceProblem: [''],
      description: [''],
    });
  }
  onDeviceChange(device: string): void {
    this.selectedDevice = device;
  }
}