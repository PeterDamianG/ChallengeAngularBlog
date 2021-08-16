import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog-delete',
  templateUrl: 'dialog-delete.component.html',
})
export class DialogDelete {
  @Input() deleteIMG: (id: number) => void = () => null;
  @Input() imgID: number = 0;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDelete);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.deleteIMG(Number(this.imgID));
      else console.log('Delete Image Cancel!');
    });
  }
}

@Component({
  selector: 'app-dialog-content-delete',
  templateUrl: 'dialog-content-delete.component.html',
})
export class DialogContentDelete {}
