import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateModelComponent } from '../create-model/create-model.component';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit {
  modelList;

  constructor(private service: ModelService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getModels().then((res) => (this.modelList = res));
  }

  AddOrEditModel(modelId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { modelId };
    this.dialog
      .open(CreateModelComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.service.getModels().then((res) => (this.modelList = res));
      });
  }

  modelDelete(id: number) {
    if (confirm('Confirm delete of ' + id + '?')) {
      this.service.deleteModel(id).then((res) => {
        this.service.getModels().then((res) => (this.modelList = res));
      });
    }
  }
}
