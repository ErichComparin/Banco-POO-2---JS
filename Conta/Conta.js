// Abstract class
export class Conta{
    
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Conta é uma classe abstrata e não deve ser instanciada");
        }
 
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Abstract method
    sacar(valor){
        throw new Error("Conta.sacar é um método abstrato e não deve ser utilizado")
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0)
            return;
        
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        conta.depositar(this._sacar(valor, 1));
    }

}