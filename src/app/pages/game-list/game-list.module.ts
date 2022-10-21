import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListComponent } from './game-list.component';
import { GameViewComponent } from './game-view/game-view.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
  ],
  declarations: [GameListComponent, GameViewComponent],
})
export class GameListModule {}
