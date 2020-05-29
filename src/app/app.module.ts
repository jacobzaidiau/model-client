import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateModelComponent } from './create-model/create-model.component';
import { ModelsComponent } from './models/models.component';
import { ModelService } from './model.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CreateModelComponent, ModelsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  entryComponents: [CreateModelComponent],
  providers: [ModelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
