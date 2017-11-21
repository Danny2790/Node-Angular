import { MessageService } from './message.service';
import { Component, Input}  from '@angular/core';

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
    color = "red";

    constructor(private messageService: MessageService){}

    onEdit(){
        this.messageService.editMessage(this.message);
    }

    onDelete(){
        this.messageService.deleteMessage(this.message);
    }
}