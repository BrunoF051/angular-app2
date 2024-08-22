import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RandomUserService } from './random-user.service';

describe('RandomUserService', () => {
  let service: RandomUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RandomUserService],
    });
    service = TestBed.inject(RandomUserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`randomUserUrl has default value`, () => {
    expect(service.randomUserUrl).toEqual(`https://api.randomuser.me/`);
  });
});
