import * as fromEmploye from './employe.actions';

describe('loadEmployes', () => {
  it('should return an action', () => {
    expect(fromEmploye.loadEmployes().type).toBe('[Employe] Load Employes');
  });
});
