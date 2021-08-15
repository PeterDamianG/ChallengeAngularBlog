import { Component, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  img: string;
}
/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog-image',
  templateUrl: 'dialog-image.component.html',
})
export class DialogImage {
  @Input() imgURL: string =
    'https://avatars.githubusercontent.com/u/43484809?v=4';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentImage, {
      data: { img: this.imgURL },
    });
  }
}

@Component({
  selector: 'app-dialog-content-image',
  templateUrl: 'dialog-content-image.component.html',
})
export class DialogContentImage {
  constructor(
    public dialogRef: MatDialogRef<DialogContentImage>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
}
