import { swagger } from './dist/index.js';
import { describe } from 'node:test';
import assert from 'node:assert';

describe('Swagger Test', () => {
  assert.ok(typeof swagger === 'object');
  assert.ok(swagger.swagger === '2.0');
})
