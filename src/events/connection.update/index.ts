import { IConnection } from '../../models/IConnection'
import { sock } from '../../connect'
import { Boom } from '@hapi/boom'

const connection = (): any => sock.ev.on('connection.update', (update: IConnection): any => {
    const { connection, lastDisconnect } = update
    if(connection === 'close') {
        const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut
        console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
        // reconnect if not logged out
        if(shouldReconnect) {
            process.exit()
        }
    } else if(connection === 'open') {
        console.log('opened connection')
    }
})

export { connection }
