import { z } from 'zod';
import { test, expect } from '../../common/fixtures/fixtures';
import { step } from '../../common/decorators/step';

const apiBase = process.env.API_BASE_URL!;

test.describe('API tests', () => {
  step();
  test('API get specific todo using match object', async ({ request }) => {
    const response = await request.get(`${apiBase}/todos/1`);
    await expect(response).toBeOK();
    const body = await response.json();

    await expect(response).toBeOK();
    expect(body).toMatchObject({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });

  step();
  test('API get of post using match object', async ({ request }) => {
    const response = await request.get(`${apiBase}/posts/1`);
    await expect(response).toBeOK();
    const body = await response.json();
    expect(body).toMatchObject({
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto',
    });
  });

  step();
  test('API post of post using match object', async ({ request }) => {
    const payload = { data: { title: 'foo', bar: 'bar' } };
    const response = await request.post(`${apiBase}/posts`, payload);
    await expect(response).toBeOK();
    const body = await response.json();
    expect(body).toMatchObject({ title: 'foo', bar: 'bar', id: 101 });
  });

  step();
  test('API put of post using schema validation', async ({ request }) => {
    const payload = {
      data: { id: 1, title: 'foo', body: 'bar', userId: 1 },
    };
    const response = await request.put(`${apiBase}/posts/1`, payload);
    await expect(response).toBeOK();
    const body = await response.json();

    const schema = z.object({
      id: z.number(),
      title: z.string(),
      body: z.string(),
      userId: z.number(),
    });

    expect(() => {
      schema.parse(body);
    }).not.toThrow();
  });

  step();
  test('API patch of post using schema validation', async ({ request }) => {
    const payload = {
      data: { title: 'foo', newPropertyArray: ['foo', 'bar', 'bla'] },
    };
    const response = await request.patch(`${apiBase}/posts/1`, payload);
    await expect(response).toBeOK();
    const body = await response.json();

    const schema = z.object({
      userId: z.number(),
      id: z.number(),
      title: z.string(),
      body: z.string(),
      newPropertyArray: z.array(z.string()),
    });

    expect(() => {
      schema.parse(body);
    }).not.toThrow();
  });

  step();
  test('API delete of post', async ({ request }) => {
    const response = await request.delete(`${apiBase}/posts/1`);
    await expect(response).toBeOK();
    const body = await response.json();
  });
});
