
import { BodyInjectorService } from './../../../services/body-injector.service';
import { ModalComponent } from './../modal.component';
import { ModalConfig } from './../interfaces/modal-config';
import { ModalRef } from '../models/modal-ref';
import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  Injector,
  ComponentRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeApoRoot(componentRef);
    console.log('open called');
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }
}
