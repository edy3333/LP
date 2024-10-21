class BancoConta {
    #saldo = 0;constructor() {
    }
  depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.#saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.#saldo}`);
      } else {
        console.log("Saldo insuficiente ou valor de saque inválido.");
      }
    }get saldo() {
      return this.#saldo;
    }aplicarJuros(taxa) {
      if (taxa > 0) {
        const juros = this.#saldo * taxa / 100;
        this.#saldo += juros;
        console.log(`Juros de ${taxa}% aplicados. Novo saldo: R$ ${this.#saldo}`);
      } else {
        console.log("Taxa de juros inválida.");
      }
    }
  }
  const minhaConta = new BancoConta();
  minhaConta.depositar(1000);
  minhaConta.sacar(200);
  console.log("Saldo atual:", minhaConta.saldo);
  minhaConta.aplicarJuros(5);