import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {

  errorDetail?: string
  constructor(@Inject(MAT_DIALOG_DATA) public data: { errorData: any }) {
    this.errorDetail = data.errorData.error.message
  }

}
