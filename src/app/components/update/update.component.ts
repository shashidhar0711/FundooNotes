import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from '../../services/noteService/note.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  title;
  description;
  id;
  constructor(
    private noteService: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(" note data in update", data);
    this.title = data.note.title,
      this.description = data.note.description
      this.id=data.note.id
  }
  ngOnInit() {
  }
  updateNote(data1) {

    let data = {
      noteId: this.id,
      // title: card.card.title,
      title: this.title,
      description: this.description,
    }

    console.log("prunting ", data );
    this.noteService.updateNote(data).subscribe((response) => {
      console.log(" updated successfull", response);
      this.onNoClick();

    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
