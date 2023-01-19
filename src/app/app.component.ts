import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngcalculator';
  ishide:boolean=false;
  spinner:boolean=true
  constructor(public dialog: MatDialog){

  }
  ngOnInit(): void {
    
   
    setTimeout(() => {
 
      this.ishide=false;
    }, 300);
    setTimeout(() => {
      this.spinner=false
      this.ishide=true;
    }, 2000);

  
  }
 
  openAlertDialog() {
    // this.ishide=false;
    const dialogRef = this.dialog.open(CalculatorComponent,{
      data:{
        message: 'calculator',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
  
}
