import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-admin',
  templateUrl: './data-admin.component.html',
  styleUrls: ['./data-admin.component.scss']
})
export class DataAdminComponent  {

  constructor(
    @Optional() public dialogRef: MatDialogRef<DataAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  clicker(): void {
    console.log(this.data.day);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
