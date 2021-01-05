import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpserviceService) { }
  
  createNote(data) {
    return this.http.post('notes/addNotes', data)
  }

  getAllNotes(){
    return this.http.get('notes/getNotesList');
  }

  updateNote(data){
   return this.http.post('notes/updateNotes',data)
  }

  deleteNotes(data){
    return this.http.post('notes/trashNotes',data)
  }
}
