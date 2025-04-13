import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UppercasePipe} from "../../../assets/pipes/uppercase";
import {HoverBackgroundDirective} from "../../directives/hover.directive";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [
        RouterLink,
        UppercasePipe,
        HoverBackgroundDirective,
    ],
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Application';
}