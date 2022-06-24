import { ISendMessage } from '../../usecase'

class DomainBot {
  constructor(private readonly sendMessage: ISendMessage) {}
  async sendMessage(from: string, idWa: string, message: any, ...aditionalParams: any[]): Promise<any> => {
  try {
      return this.sendMessage
    } catch (e) {
      console.log(e)
    }
  }
}
