import { Component, Output, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogData } from 'src/app/models/dialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}
}
