export interface ISendMessage {
  sendMessage: async (from: string, idWa: string, ...aditionalParams: any[]) => Promise<any>
}
