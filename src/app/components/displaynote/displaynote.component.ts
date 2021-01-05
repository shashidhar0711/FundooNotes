import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  @Input() AllNotes: any

  ngOnInit() {
  }

  openDialog(card): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: {note: card}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
