import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInfoComponent } from './components/data-info/data-info.component';

const routes: Routes = [

  { path: "dataInfo", component: DataInfoComponent },
  { path: "**", pathMatch: "full", redirectTo: "dataInfo" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
