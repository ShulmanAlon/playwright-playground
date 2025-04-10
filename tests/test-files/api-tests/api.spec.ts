import { test, expect } from '../../fixtures/fixtures';

test.describe('API tests', () => {
  test('API get call test', async ({ request }) => {
    const response = await request.get(
      '/static/media/red-onesie-1200x1500.2ec615b2.jpg'
    );

    await expect(response).toBeOK();
  });
});
