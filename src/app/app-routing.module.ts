import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ItemAddComponent } from './admin/item-add/item-add.component';
import { ItemEditComponent } from './admin/item-edit/item-edit.component';
import { ItemListComponent } from './admin/item-list/item-list.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewComponent } from './home/view/view.component';
import { CarouselSettingsComponent } from './admin/carousel-settings/carousel-settings.component';
import { CategoryComponent } from './admin/category/category.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'ostukorv', component: CartComponent },
  {path: 'toode/:itemId', component: ViewComponent},
  {path: 'admin/lisa-ese', component: ItemAddComponent },
  {path: 'admin/karuselli-seaded', component: CarouselSettingsComponent },
  {path: 'admin/kategooriad', component: CategoryComponent },
  {path: 'admin/muuda-ese/:itemId', component: ItemEditComponent },
  {path: 'admin/esemete-list', component: ItemListComponent },
  {path: 'admin', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
