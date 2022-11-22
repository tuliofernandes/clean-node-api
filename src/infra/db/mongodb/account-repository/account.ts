import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../../../db/mongodb/helpers/mongodb-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    let finalObj
    await accountCollection.insertOne(accountData)
      .then(async doc => {
        const account: any = await accountCollection.findOne({ _id: doc.insertedId })
        finalObj = MongoHelper.normalizeDocument(account)
      })
    return finalObj
  }
}
