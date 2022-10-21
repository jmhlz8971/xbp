import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcelService } from './excel-service.service';
import { Game } from './game';
import { GameViewComponent } from './game-view/game-view.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  title = 'XBP';

  filter: string = '';

  gameList: Array<Game> = [];

  constructor(public dialog: MatDialog, private excelService: ExcelService) {}

  ngOnInit() {
    this.excelService.getGames().subscribe((games) => (this.gameList = games));
  }

  public filterGamesByTitle() {
    return this.gameList.filter((f) =>
      f.Title!.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  openDialog(game: Game) {
    this.dialog.open(GameViewComponent, {
      data: game,
    });
  }
}
