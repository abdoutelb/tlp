import { Utilits } from '../utilits';

const utilitsModule = new Utilits();

describe('Utilits Module', () => {
  it('functions should be defined', () => {
    expect(utilitsModule.usage).toBeDefined();
    expect(utilitsModule.header).toBeDefined();
    expect(utilitsModule.stopTask).toBeDefined();
    expect(utilitsModule.getStatus).toBeDefined();
    expect(utilitsModule.getReport).toBeDefined();
    expect(utilitsModule.addTask).toBeDefined();
    expect(utilitsModule.errorLog).toBeDefined();
  });
});
