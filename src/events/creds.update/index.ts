import { useSingleFileAuthState } from '@adiwajshing/baileys'
import { sock } from '../../connect'

const { saveState } = useSingleFileAuthState('./auth.json')
const creds = (): any => sock.ev.on('creds.update', saveState)

export { creds }

