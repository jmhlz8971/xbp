import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../game';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
})
export class GameViewComponent {
  dialogGame: Game;

  constructor(
    public dialogRef: MatDialogRef<GameViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game
  ) {
    this.dialogGame = data;
  }
}
