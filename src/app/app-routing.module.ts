import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
    loadChildren: () =>
      import('./pages/game-list/game-list.module').then(
        (m) => m.GameListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
