import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector : 'app-message-input',
    templateUrl : './message-input.component.html'
})

export class MessageInputComponent implements OnInit{
    message : Message;

    constructor(private messageService : MessageService){ }
    
    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message : Message) => this.message = message
        );
    }

    onSubmit(form : NgForm){
        if(this.message){
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data)
                );
            this.message = null;
        }else {
            const message = new Message(form.value.content, 'akash');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );    
        }
        //  data => console.log(data) -> this Es6 typescript ayntax
        //subscribe will get three callbacks
        // 1. success callback
        // 2. error callback
        // 3. observable completion callback (if getting data from request is comoplete)

        form.resetForm();
    }

    onClear(form : NgForm){
        this.message = null;
        form.resetForm();
    }
}