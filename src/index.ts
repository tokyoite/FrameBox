import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameBoxComponent } from './framebox.component';
import { FrameBoxSelectionComponent } from './framebox-selection.component';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      FrameBoxComponent,
      FrameBoxSelectionComponent
  ],
  exports: [
      FrameBoxComponent,
      FrameBoxSelectionComponent
  ]
})
export class FrameBoxModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: FrameBoxModule
    };
  }
}
