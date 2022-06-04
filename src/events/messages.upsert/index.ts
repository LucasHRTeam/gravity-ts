import { IMessagesUpsert } from '../../models/IMessagesUpsert'
import { sock } from '../../connect'

const messages = (): any => sock.ev.on('messages.upsert', async (m: any): Promise<any> => {
    console.log(JSON.stringify(m, undefined, 2))
    const msg = m.message[0]
    console.log('replying to', msg.key.remoteJid)
    await sock.sendMessage(msg.key.remoteJid!, { text: 'Hello there!' })
})

export { messages }
