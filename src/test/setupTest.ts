import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { query_client } from './utils';
import { server } from '@/mocks/api/server';

jest.mock('next/image', () => require('./mock/nextImage'));

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

afterEach(() => {
  server.resetHandlers();
  query_client.clear();
  cleanup();
});

afterAll(() => server.close());
