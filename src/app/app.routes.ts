import { Routes } from '@angular/router';
import { PizzaAccordion } from './components/pizza-accordion/pizza-accordion';

export const routes: Routes = [
    {path:'dashboard', component: PizzaAccordion},
    {path:'',redirectTo:'/dashboard' , pathMatch:'full'},
];
