import { NgModule, ModuleWithProviders } from '@angular/core';
import { SafehtmlPipe } from './pipe/safehtml.pipe';

@NgModule({
  declarations: [
    SafehtmlPipe
  ],
  exports: [
    SafehtmlPipe
  ]
})
export class SharingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharingModule,
      providers: []
    };
  }
}