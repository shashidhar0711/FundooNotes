import { Component, Input, OnInit } from '@angular/core';
import {NoteService} from '../../services/noteService/note.service';
import {DataService} from '../../services/dataService/data.service'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService: NoteService,private dataService: DataService) { }
  
  ngOnInit() {
  }

  @Input() note:any

  deleteNote(){
    console.log(this.note);
    
    let data = {
    
      noteIdList: [this.note.id],
      isDeleted: true
    }


    this.noteService.deleteNotes(data).subscribe((response)=>{
      console.log(" dleted successfyull ");
      this.dataService.changeMessage("deleted")
      
    });
  }

}
