import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `<div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="dismissModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalContent }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">OK</button>
    </div>
  `,
})
export class ModalComponent {

  modalHeader: string;
  modalContent: string;

  constructor(private activeModal: NgbActiveModal) { }

  dismissModal() {
    this.activeModal.dismiss();
  }
  closeModal() {
    this.activeModal.close();
  }
}
