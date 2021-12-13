import { Dates } from '../dates';

const dateModule = new Dates();

describe('Dates Module', () => {
  it('functions should be defined', () => {
    expect(dateModule.humanDate).toBeDefined();
    expect(dateModule.getDiffrenceFromNow).toBeDefined();
  });
});
