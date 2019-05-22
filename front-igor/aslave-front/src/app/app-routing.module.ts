import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { StockPlacementComponent } from './stock-placement/stock-placement.component';
import { StockRemovalComponent } from './stock-removal/stock-removal.component';
import { ClassificationsComponent } from './classifications/classifications.component';
import { EntryComponent } from './entry/entry.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoas', component: PeopleComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'entradas', component: StockPlacementComponent},
  { path: 'saidas', component: StockRemovalComponent},
  { path: 'entradas', component: StockPlacementComponent},
  { path: 'classificacoes', component: ClassificationsComponent},
  { path: 'lancamentos', component: EntryComponent},
  { path: 'gerenciar', component: ManageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
