import { test as baseTest, expect } from '@playwright/test';
import { uiFixtures } from './ui-fixtures';
import { apiFixtures } from './api-fixtures';
import { MyFixtures } from './types';

export const test = baseTest.extend<MyFixtures>({
  ...uiFixtures,
  ...apiFixtures,
});
export { expect };
