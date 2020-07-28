import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface IAuth {
    email: string;
    password: string;
}

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    auth: IAuth = { email: '', password: '' };
    constructor(
        private authS: AuthService,
        private router: Router
    ) { }

    ngOnInit() {

    }

    async onLogin() {
        this.authS.authentification(this.auth).subscribe((res: any) => {
            if (res.login) {
                localStorage.setItem('user_id', res.user_id);
                this.router.navigate(['/home']);
            } else {
                alert("no hay accesso");
            }
        }, error => {
            alert(error.message);
        });
    }

}
