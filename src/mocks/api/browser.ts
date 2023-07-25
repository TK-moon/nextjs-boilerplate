import { setupWorker } from 'msw';
import * as mockAPI from './handlers';

const handlers = Object.values(mockAPI);
export const worker = setupWorker(...handlers);
