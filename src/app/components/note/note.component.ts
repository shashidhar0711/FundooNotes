import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteService/note.service'
import { DataService} from '../../services/dataService/data.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService, private dataservice:DataService) { }
  notes = []
  note=[]
  ngOnInit() {
    this.getAllNotes();
    this.dataservice.currentMessage.subscribe((msg)=>{
      console.log(" message ", msg);
      this.getAllNotes();
    })
  }

  receiveMessage($event){
    console.log(" message get all notee from create note",$event);
    this.getAllNotes();
  }
  getAllNotes() {

    this.noteService.getAllNotes().subscribe((response) => {
      console.log(response);
      this.note = response['data'].data
      this.notes= this.note.filter((ele)=>{
        console.log(ele.isDeleted);
        return ele.isDeleted == false
      })
      console.log(" flitered array ");
      console.log(this.notes);
    })
  }
}
