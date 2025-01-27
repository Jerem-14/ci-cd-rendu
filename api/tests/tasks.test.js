// tests/tasks.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Tasks API', () => {
  describe('GET /api/tasks', () => {
    it('should return an empty array initially', async () => {
      const res = await request(app).get('/api/tasks');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBe(0);
    });
  });

  describe('POST /api/tasks', () => {
    it('should create a new task', async () => {
      const task = {
        title: 'Test task',
        description: 'Test description'
      };

      const res = await request(app)
        .post('/api/tasks')
        .send(task);

      expect(res.statusCode).toBe(201);
      expect(res.body.title).toBe(task.title);
      expect(res.body.description).toBe(task.description);
      expect(res.body.completed).toBe(false);
      expect(res.body.id).toBe(1);
    });

    it('should return 400 if title is missing', async () => {
      const task = {
        description: 'Test description'
      };

      const res = await request(app)
        .post('/api/tasks')
        .send(task);

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe('Title is required');
    });
  });
});