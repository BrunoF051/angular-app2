import { Component, Input, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface ModalConfig {
  title?: string | TemplateRef<{}>;
  description?: string | TemplateRef<any>;
  onConfirm?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  okType?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
  okDanger?: boolean;
}

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css'],
  standalone: true,
})
export class ModalConfirmComponent {
  @Input() confirmConfig: ModalConfig = {
    title: 'Confirm this thing?',
    description: 'Are you sure you want to do this?',
    onConfirm: () => {},
  };

  @Input() deleteConfig: ModalConfig = {
    title: 'Delete?',
    description: 'Are you sure you want to do this?',
    onConfirm: () => {},
    onCancel: () => {},
    okText: 'Yes',
    cancelText: 'No',
    okType: 'primary',
    okDanger: true,
  };
  modalRef: NzModalRef | null = null;

  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.modalRef = this.modal.confirm({
      nzTitle: $localize`${this.confirmConfig?.title}`,
      nzContent: $localize`${this.confirmConfig.description}`,
      nzOnOk: this.confirmConfig.onConfirm,
      nzOkText: $localize`${this.confirmConfig.okText}`,
      nzCancelText: $localize`${this.confirmConfig.cancelText}`,
      nzOkType: this.confirmConfig.okType,
      nzOkDanger: this.confirmConfig.okDanger,
    });
  }

  showDeleteConfirm(): void {
    this.modalRef = this.modal.confirm({
      nzTitle: $localize`${this.deleteConfig.title}`,
      nzContent: $localize`${this.deleteConfig.description}`,
      nzOnOk: this.deleteConfig.onConfirm,
      nzOnCancel: this.deleteConfig.onCancel,
      nzOkText: $localize`${this.deleteConfig.okText}`,
      nzCancelText: $localize`${this.deleteConfig.cancelText}`,
      nzOkType: this.deleteConfig.okType,
      nzOkDanger: this.deleteConfig.okDanger,
    });
  }

  destroyModal(): void {
    if (this.modalRef) {
      this.modalRef.destroy();
    }
  }
}
