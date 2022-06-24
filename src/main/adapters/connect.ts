import makeWASocket, { useSingleFileAuthState } from '@adiwajshing/baileys'

import pino from 'pino'

const state = useSingleFileAuthState('./auth.json')
const sock = makeWASocket({
    logger: pino({ level: 'silent'}),
    version: [2, 2204, 13],
    printQRInTerminal: true,
   /*  auth: state */
    })
    
export { sock }
