import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkerInfoComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<MarkerInfoComponent>,
  						@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
