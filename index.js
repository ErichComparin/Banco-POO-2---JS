import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca} from "./Conta/ContaPoupanca.js"
import { ContaSalario} from "./Conta/ContaSalario.js"

// Clientes
const cliente1 = new Cliente("Erich", 39415869046, "swordfish");
const cliente2 = new Cliente("Pedro", 15959013029, "minhasenha")

// Contas
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaPoupanca(10000, cliente1, 1002);
const conta3 = new ContaSalario(cliente2);

// Operações de contas
conta1.depositar(1500);
conta2.sacar(2500);
conta2.tranferir(1200, conta3);

// Funcionários
const diretor = new Diretor("Rodrigo", 10000, 64601477018);
const gerente = new Gerente("Ricardo", 5000, 41036679071);

diretor.cadastrarSenha("&13259@");
gerente.cadastrarSenha("#64973$");

// Autenticação
const autCliente1 = SistemaAutenticacao.login(cliente1, "swordfish"); // Ok
const autDiretor = SistemaAutenticacao.login(diretor, "&13258@"); // Fail
const autGerente = SistemaAutenticacao.login(gerente, "#64973$"); // Ok

// Saída de dados
console.log("\n##### CONTAS #####")
console.log("Conta 1: ", conta1, "\n"); // Saldo: 1500
console.log("Conta 2: ", conta2, "\n"); // Saldo: 10000 + 2500 * 1.02 - 1200 = 6250
console.log("Conta 3: ", conta3, "\n"); // Saldo: 1200

console.log("##### AUTENTICAÇÃO #####")
console.log("Cliente ", cliente1.nome, " autenticado: ", autCliente1);
console.log("Funcionário ", diretor.nome, " autenticado: ", autDiretor);
console.log("Funcionário ", gerente.nome, " autenticado: ", autGerente, "\n");