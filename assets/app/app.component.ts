import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages : Message[] = [
        new Message('hello world 1', 'Akash1'),
        new Message('hello world 2', 'Akash2'),
        new Message('hello world 3', 'Akash3')
    ]
}