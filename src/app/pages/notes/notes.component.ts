import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];

  constructor(private _sharedSvc: SharedService, private _notesSvc: NotesService) {
    this._sharedSvc.changeNotesEmitted$.subscribe(notes => {
      this.notes = notes;
    });
  }

  ngOnInit(): void {
    this._notesSvc.getNotes();
  }
  addNote () {
    this._notesSvc.addNote();
  };
  saveNote(event, note) {
    this._notesSvc.updateNote({ id: note.id, content: event.target.innerText })
  }
  deleteNote(event, note){
    this._notesSvc.deleteNote(note.id)
 }
}
