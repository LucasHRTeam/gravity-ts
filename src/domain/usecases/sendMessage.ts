export interface ISendMessage {
  sendMessage: async (from: string, idWa: string | type { text: string; contextInfo?: any[]; }, ...aditionalParams?: any[]) => Promise<any>
}
