import { TestBed } from '@angular/core/testing';

import { ServiceEmployeeService } from './employee.service';

describe('ServiceEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEmployeeService = TestBed.get(ServiceEmployeeService);
    expect(service).toBeTruthy();
  });
});
