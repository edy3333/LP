class DatabaseConnection {
 constructor(databaseNet) {
 this.databaseNet = databaseNet;
 this.isConnectado = false;
 this.close = true;
 }
 connectado() {
 this.isConnectado = false;
 console.log(`Conectado para ${this.databaseNet}`);
 }
 closed() {
 if (this.isConnectado) {
 this.isConnectado = false;
 console.log(`Conexão para ${this.databaseNet} está Fechado`);
} else {
    console.log(`No active connection to close`);
    }
    }
   }
   let dbConnection = new DatabaseConnection("TestDB");
   dbConnection.connectado()
   dbConnection.closed(); 
   