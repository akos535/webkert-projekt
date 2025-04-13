import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeaderComponent} from "../header/header.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    standalone: true,
    imports: [
        HeaderComponent,
        MatToolbar,
        MatCard,
        MatCardHeader,
        MatCardContent,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatButton,
        MatInput
    ],
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }
}