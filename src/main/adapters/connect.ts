Skip to content
LucasHRTeam
/
gravity-ts
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
1
Insights
Settings
We found potential security vulnerabilities in your dependencies.
Only the owner of this repository can see this message.

gravity-ts/src/connect.ts
@LucasHRTeam
LucasHRTeam refactor: changing types from connection
 1 contributor
13 lines (10 sloc)  327 Bytes
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
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
