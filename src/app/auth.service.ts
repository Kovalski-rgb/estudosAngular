import { EventEmitter } from "@angular/core";

export class AuthService {
    loggedIn = false;
    private isAuth : EventEmitter<boolean> = new EventEmitter();

    isAauthenticated(){
        const promise = new Promise (
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 10);
            }
        );
        return promise;
    }
    getIsAuthEmitter() : EventEmitter<boolean>{
        return this.isAuth;
    }
    login(){
        this.loggedIn = true;
        this.isAuth.emit(this.loggedIn);
    }
    logout(){
        this.loggedIn = false;
        this.isAuth.emit(this.loggedIn);
    }
}