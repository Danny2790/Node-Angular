import  { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector : 'app-message-list',
    template : `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
            [message] = "message" 
            (editClicked)= "message.content = $event"
            *ngFor="let message of messages">
            </app-message>
        </div>
    `
})
export class MessageListComponent {
    messages : Message[] = [
        new Message('hello world 1', 'Akash1'),
        new Message('hello world 2', 'Akash2'),
        new Message('hello world 3', 'Akash3')
    ]
}