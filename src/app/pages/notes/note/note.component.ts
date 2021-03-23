import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    @Output() dismiss = new EventEmitter();
    @Output() focusout = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    onDismiss(event) {
        this.dismiss.emit(event);
    }
    
    onFocusOut(event) {
        this.focusout.emit(event)
    }

}
