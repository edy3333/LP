class DatabaseConnection {
    constructor(databaseName) {
      console.log(`Conectando ao banco de dados: ${databaseName}`);
    }
  
    query(sql) {
      console.log(`Executando a consulta: ${sql}`);
      return { rows: [{ id: 1, name: 'John Doe' }] }; 
    }
    finalize() {
      console.log('Fechando a conexão com o banco de dados');
    }
  }
  const db = new DatabaseConnection('myDatabase');
  db.query('SELECT * FROM users');
  db.finalize();