class Heroi {
    constructor(nome, idade, tipo, ataque = 'espada') {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

const fenxus = new Heroi('Fenxus', 23, 'guerreiro')

fenxus.atacar()