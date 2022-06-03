import { sock } from './connect';
import { connection, creds, messages } from './events'

async function connectToWhatsApp(): any {
    console.log('iniciando...', sock)
    connection()
    creds()
    messages()
}

connectToWhatsApp()
