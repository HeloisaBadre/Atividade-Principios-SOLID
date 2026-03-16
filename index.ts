interface Funcionario {
    trabalhar(): void;
    registrarPonto(): void;
    receberSalario(): void;
}

interface Gerencia {
    gerenciarEvento(): void;
}

interface Dev {
    escreverCodigo(): void
}

class Gerente implements Funcionario, Gerencia {
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

class Desenvolvedor implements Funcionario, Dev {
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

class Estagiario implements Funcionario, Dev {
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
