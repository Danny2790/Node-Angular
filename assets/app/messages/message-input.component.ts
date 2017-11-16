import { Component  } from '@angular/core';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector : 'app-message-input',
    templateUrl : './message-input.component.html',
    providers : [ MessageService]
})

export class MessageInputComponent {

    constructor(private messageService : MessageService){ }

    onSave(value : string){
        console.log( value);
        const message = new Message(value, 'akash');
        this.messageService.addMessage(message);
    }
}