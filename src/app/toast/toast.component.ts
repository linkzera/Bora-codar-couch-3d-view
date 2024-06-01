import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})

export class ToastComponent implements OnInit {  
  toastMessage = 'This is a toast'; // This is the string the template is already bound to  
  showsToast = true; // This is what toggles the component to show or hide  ﻿

  constructor() { }  

  ngOnInit(): void {  }
}
