import { Component, Input, Output, EventEmitter }  from '@angular/core';

import { Message } from "./message.model";

@Component({
    selector : 'app-message',
    templateUrl : './message.Component.html',
    styles : [` 
        .config : {
            display : inline-block;
            text-align : right;
            font-size : 12px;
            width : 19%;
        }
    `]
})

export class MessageComponent {
    @Input() message : Message;
    @Output() editClicked = new EventEmitter<string>();

    color = "red";

    onEdit(){
        this.editClicked.emit("set new value to text");
    }
}