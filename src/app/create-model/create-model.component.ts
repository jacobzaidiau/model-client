import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModelService } from '../model.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../model.model';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css'],
})
export class CreateModelComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CreateModelComponent>,
    public service: ModelService,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (true) this.resetForm();
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    if (this.data.modelId == null) {
      this.service.formData = {
        id: 0,
        name: '',
      };
    } else {
      this.service
        .getModel(this.data.modelId)
        .then((res) => (this.service.formData = res as Model));
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) {
      this.service.createModel().then((res) => res);
    } else {
      this.service.updateModel(this.service.formData.id).then((res) => res);
    }
    this.service.formData = { id: 0, name: '' };
    this.dialogRef.close();
  }
}
