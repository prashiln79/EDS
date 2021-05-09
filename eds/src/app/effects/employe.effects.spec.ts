import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EmployeEffects } from './employe.effects';

describe('EmployeEffects', () => {
  let actions$: Observable<any>;
  let effects: EmployeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EmployeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
