import { TestBed } from '@angular/core/testing';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzNotificationPlacement } from 'ng-zorro-antd/notification';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    const nzNotificationServiceStub = () => ({
      create: (type: any, title: any, content: any, object: any) => ({}),
    });
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub,
        },
      ],
    });
    service = TestBed.inject(NotificationService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
