import { setupServer } from 'msw/node';
import * as mockAPI from './handlers';

const handlers = Object.values(mockAPI);
export const server = setupServer(...handlers);
