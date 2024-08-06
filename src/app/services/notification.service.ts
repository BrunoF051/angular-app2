import { Injectable } from '@angular/core';
import {
  NzNotificationService,
  NzNotificationPlacement,
} from 'ng-zorro-antd/notification';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  createNotification(
    type: NotificationType = 'info',
    title: string = 'Title',
    content: string = 'Content',
    position: NzNotificationPlacement = 'topRight',
    duration: number = 4500,
  ): void {
    this.notification.create(type, title, content, {
      nzPlacement: position,
      nzDuration: duration,
    });
  }
}
