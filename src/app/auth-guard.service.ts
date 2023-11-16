import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router){

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
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