import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Message } from './message.model'


@Injectable()
export class MessageService {
    private messages : Message[] = [];

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
        return this.messages;
    }

    deleteMessage(message : Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}