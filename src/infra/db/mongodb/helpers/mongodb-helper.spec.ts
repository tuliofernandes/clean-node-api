import { MongoHelper as sut } from './mongodb-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await sut.connect(process.env.MONGO_URL!)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = await sut.getCollection('account')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getCollection('account')
    expect(accountCollection).toBeTruthy()
  })
})
