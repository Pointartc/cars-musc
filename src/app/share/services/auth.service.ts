import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    Admin: any[] = [
        {
            id: 1,
            email: 'test@Gmail.com',
            password: '123123Admin'
        }
    ]
    Users: any[] = [
        {
            id: 2,
            email: 'david@Gmail.com',
            password: '123123David'
        },
        {
            email: 'tom@Gmail.com',
            password: '123123Tom'
        }
    ]

    session: any

    constructor() {
    }

    login(email: string, password: string) {
        let user = this.Users.find((u) => email === email && password === password);
        if (user) {
            this.session = user
            localStorage.setItem('session', JSON.stringify(this.session))
        }
        return user
    }
}
