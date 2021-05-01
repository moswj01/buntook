import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  form: FormGroup;
  img: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  
  }

  createForm() {
    this.form = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  changfileImage(event) {
    if (event) {
      this.img = event.target.files[0];
    } 
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.img);
  }

}
