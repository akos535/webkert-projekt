import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UppercasePipe } from "../../../assets/pipes/uppercase";
import { HoverBackgroundDirective } from "../../directives/hover.directive";
import { map, Observable } from "rxjs";
import { AuthService } from "../../../assets/services/auth.service";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [
        CommonModule,
        RouterLink,
        UppercasePipe,
        HoverBackgroundDirective,
    ],
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    userEmail$: Observable<string | null>;

    constructor(private authService: AuthService) {
        this.isLoggedIn$ = this.authService.isLoggedIn().pipe(
            map(user => !!user)
        );
        this.userEmail$ = this.authService.getCurrentUserEmail();
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.signOut().then(() => {
            console.log('User logged out');
        }).catch(error => {
            console.error('Logout failed', error);
        });
    }
}

