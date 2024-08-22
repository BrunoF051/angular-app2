import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { GeneralFetcherService } from "./general-fetcher.service";

describe("GeneralFetcherService", () => {
  let service: GeneralFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeneralFetcherService]
    });
    service = TestBed.inject(GeneralFetcherService);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
  });
});
