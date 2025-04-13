// contacts.component.ts
import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
    selector: 'app-contacts',
    standalone: true, // Mark as standalone
    templateUrl: './contacts.component.html',
    imports: [
        HeaderComponent
    ],
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent { }