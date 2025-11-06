import { Home } from "./components/home/home";
import { Cine } from "./components/cine/cine";
import { Musica } from "./components/musica/musica";
import { Notfound } from "./components/notfound/notfound";
//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR ROUTER
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Numerodoble } from "./components/numerodoble/numerodoble";
import { Tablamultiplicarrouting } from "./components/tablamultiplicarrouting/tablamultiplicarrouting";

//NECESITAMOS UN ARRAY DE RUTAS y sera de tipo Routes
const appRoutes: Routes = [
    {path: '', component: Home},
    {path: 'cine', component: Cine},
    {path: 'musica', component: Musica},
    {path: 'numerodoble', component: Numerodoble},
    {path: 'numerodoble/:numero', component: Numerodoble},
    {path: 'tablamultiplicar/:numero', component: Tablamultiplicarrouting},
    {path: '**', component: Notfound},
];

//DESDE ESTA CLASE DEBEMOS EXPORTAR NUESTRO ARRAY DE RUTAS
export const appRoutingProvider: any [] = [];
//LAS PROPIAS RUTAS A EXPORTAR
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
