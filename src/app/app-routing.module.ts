import { NgModule } from "@angular/core";
import { NoFileScreenComponent } from "./screens/no-file-screen/no-file-screen.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: "**", component: NoFileScreenComponent}
] 

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}