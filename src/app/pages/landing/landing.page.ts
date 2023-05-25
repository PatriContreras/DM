import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  loginForm!: FormGroup<any>;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      user: new FormControl(''),
      email: new FormControl('')
    })
  }

  submit(){
    console.log(this.loginForm)
  }

}
