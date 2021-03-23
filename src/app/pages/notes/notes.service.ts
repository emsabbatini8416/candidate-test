import { Injectable } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _notes: any[] = [];

  constructor(private _sharedSvc: SharedService) {
    const notes = localStorage.getItem("notes");
    if (notes) this._notes = JSON.parse(notes);
  }

  getNotes(){
    this._sharedSvc.emitNotesChange(this._notes);
  }

  addNote() {
    this._notes.push({ id: new Date().getTime(), content: '' });
    this.save();
  }

  deleteNote(id: number) {
    const index = this._notes.findIndex(n => n.id === id);
    if (index > -1) {
      this._notes.splice(index, 1)
      this.save()
    }
  }

  updateNote(note: {id: number, content: string}) {
    console.log(note  )
    const index = this._notes.findIndex(n => n.id === note.id);
    if (index > -1) {
      this._notes[index].content = note.content;
      this.save()
    }
  }

  private save() {
    localStorage.setItem("notes", JSON.stringify(this._notes))
    this._sharedSvc.emitNotesChange(this._notes);
  }

}
