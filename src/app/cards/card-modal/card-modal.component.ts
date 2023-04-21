import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  formGroup!: FormGroup

  constructor(
    private fb: FormBuilder, 
    private cardService: CardService,
    private dialogRef: DialogRef<CardModalComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card
    ){}

  ngOnInit(){
    this.formGroup = this.fb.group({
      title: [this.data.title || '', Validators.maxLength(255)],
      name: [this.data.name || '', [Validators.required, Validators.maxLength(50)]],
      email: [this.data.email || '', [Validators.required, Validators.email, Validators.maxLength(50)]],
      phone: [this.data.phone || '', Validators.maxLength(20)],
      address: [this.data.address || '', Validators.maxLength(255)]
    })    
  }
  addCard(){
    this.cardService.postCards(this.formGroup.value)
    .subscribe(res => {
      if(typeof res === 'string'){
        this._snackBar.open(res, '', {
          duration: 2000
        })
      }
      this.dialogRef.close(this)
    })
  }
}
