import { HandledError } from './errorUtils';

describe('errorUtils', () => {
  it('handledError', () => {
    const handled_error = new HandledError('MESSAGE', { test: 'test' });
    expect(handled_error).toEqual({ message: 'MESSAGE', data: { test: 'test' } });
  });
});
