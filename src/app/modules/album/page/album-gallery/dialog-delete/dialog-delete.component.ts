import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog-delete',
  templateUrl: 'dialog-delete.component.html',
})
export class DialogDelete {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDelete);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content-delete.component.html',
})
export class DialogContentDelete {}
