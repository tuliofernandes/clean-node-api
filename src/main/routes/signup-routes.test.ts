import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .get('/api/signup')
      .send({
        name: 'Túlio Fernandes',
        email: 'tulio.fernandes@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
