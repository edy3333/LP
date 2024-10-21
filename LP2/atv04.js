class Logger {
    constructor() {
        if (!Logger.instance) {
            this.logs = [];
            this.startTime = new Date(); 
            Logger.instance = this;
        }

        return Logger.instance;
    }

    addLog(message) {
        this.logs.push(message);
        console.log(`Log adicionado: ${message}`);
    }

    showLogs() {
        console.log(this.logs);
    }

    close() {
        if (this.startTime) { 
            const endTime = new Date();
            const duration = endTime - this.startTime;
            console.log(`Conexão fechada após ${duration} milissegundos.`);
            this.startTime = null;
        } else {
            console.log("Conexão já está fechada.");
        }
    }
}
