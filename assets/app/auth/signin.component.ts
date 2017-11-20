import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-signin',
    templateUrl : './signin.Component.html'
})
export class SigninComponent implements OnInit{
    myForm : FormGroup;
    
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
    
    ngOnInit(){
        this.myForm = new FormGroup({
            email : new FormControl(null, Validators.required),
            password : new FormControl(null, Validators.required),
        });
    }
}