import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Message } from './message.model'


@Injectable()
export class MessageService {
    private messages : Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http : Http){}
    
    // return the observable
    // this is just observable, request wont be send to sever unless and until we subscribe to this observable
    // headers : by default data goes as plain/text we need to change the content-type
    addMessage(message : Message){
        this.messages.push(message);
        console.log(this.messages);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        return this.http.post('http://localhost:3000/message',body, {headers : headers})
            .map((response: Response) => response.json()) 
            // to send the observable with response as jsontype 
            .catch((error : Response) => Observable.throw(error.json()));
            //catch by default doesnt send obervable so we need to explicitly send observale throw with error as json 
    }

    getMessages(){
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        return this.http.get('http://localhost:3000/message',{headers : headers})
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for(let message of messages){
                    transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            }) 
            // to send the observable with response as jsontype 
            .catch((error : Response) => Observable.throw(error.json()));
            //catch by default doesnt send obervable so we need to explicitly send observale throw with error as json
            //return this.messages;
    }
    
    editMessage(message : Message){
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message : Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}