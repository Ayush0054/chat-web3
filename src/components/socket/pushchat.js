import { createSocketConnection, EVENTS } from "@pushprotocol/socket";


//creating a socket connection 
const pushSDKSocket = createSocketConnection({
    user: '0x72666686A71CF3F4Ece71Fbde1589C557353DD68',  //wallet address will be there
    env: 'staging',
    apiKey: 'jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0',
    socketType: 'chat',
    socketOptions: { autoConnect: true, reconnectionAttempts: 3 }
});

//connecting the socket
pushSDKSocket.connect()