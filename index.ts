interface IFuncionario {
    trabalhar(): void;
    registrarPonto(): void;
    receberSalario(): void;
}

interface IGerencia {
    gerenciarEvento(): void;
}

interface IDev {
    escreverCodigo(): void
}

interface IFreelancer {
    escreverCodigo(): void
}

class SistemaRH {
    private funcionario: IFuncionario;

    constructor(funcionario: IFuncionario) {
        this.funcionario = funcionario;
    }

    iniciarTrabalho(): void {
        this.funcionario.trabalhar();
        this.funcionario.registrarPonto();
    }

    pagarFuncionario(): void {
        this.funcionario.receberSalario();
    }
}

class Gerente implements IFuncionario, IGerencia {
    trabalhar(): void {
        console.log("Gerente trabalhando.")
    }
    registrarPonto(): void {
        console.log("Ponto registrado.")
    }
    receberSalario(): void {
        console.log("Salário recebido.")
    }
    gerenciarEvento(): void {
        console.log("Gerenciando equipe.")
    }
}

class Desenvolvedor implements IFuncionario, IDev {
    trabalhar(): void {
        console.log("Desenvolvedor trabalhando.")
    }
    registrarPonto(): void {
        console.log("Ponto registrado.")
    }
    receberSalario(): void {
        console.log("Salário recebido.")
    }
    escreverCodigo(): void {
        console.log("Escrevendo código.")
    }
}

class Estagiario implements IFuncionario, IDev {
    trabalhar(): void {
        console.log("Estagiário trabalhando.")
    }

    registrarPonto(): void {
        console.log("Ponto registrado.")
    }

    receberSalario(): void {
        console.log("Estagiário recebe bolsa, não salário.")
    }

    escreverCodigo(): void {
        console.log("Estagiário escrevendo código.")
    }
}

class Freelancer implements IFreelancer {
    escreverCodigo(): void {
        console.log("Freelancer escrevendo código.")
    }
}

const sistema1 = new SistemaRH(new Gerente());
const sistema2 = new SistemaRH(new Desenvolvedor());
const sistema3 = new SistemaRH(new Estagiario());
const sistema4 = new SistemaRH(new Freelancer());
