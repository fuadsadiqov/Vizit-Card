import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { DialogRef } from '@angular/cdk/dialog';
import { CardModalComponent } from '../card-modal/card-modal.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() cardItem!: Card
  constructor(private dialogRef: MatDialog){}

  openUpdateCardModal(card: Card): void{
    this.dialogRef.open(CardModalComponent, {
      width: '400px',
      data: card
    })
  }
}
