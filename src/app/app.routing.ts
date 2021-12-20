import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

const APP_ROUTES: Routes = [
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:id', component: CursoDetalheComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);