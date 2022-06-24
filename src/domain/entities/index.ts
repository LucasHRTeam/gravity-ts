import { ISendMessage } from '../usecases'

class DomainBot implements ISendMessage {
  constructor(private readonly sendMessage: ISendMessage) {}
  async sendMessage(from: string, idWa: string, message: any, ...aditionalParams: any[]): Promise<any> => {
  try {
      return this.sendMessage
    } catch (e) {
      console.log(e)
    }
  }
}

export { DomainBot }
