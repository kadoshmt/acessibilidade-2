import { ModalComponent } from './../modal.component';
import { ComponentRef } from "@angular/core";

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>){}

  public close(): void {
    this.componentRef.destroy();
    console.log('close called');
  }
}
