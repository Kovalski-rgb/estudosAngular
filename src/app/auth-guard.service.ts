import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard {

    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        return this.authService.isAauthenticated()
            .then(
                (authenticated : boolean) => {
                    if(authenticated) {
                        return true
                    }
                   this.router.navigate(['/']);
                   return false;
                }
            )
    }
}