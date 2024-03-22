import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  template:
    '<app-success-alert></app-success-alert><app-warning-alert></app-warning-alert>',
})
export class AlertComponent {}
