class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
    return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

// Exemplo de uso da classe Heroi
const meuHeroi = new Heroi("Herói", 25, "ninja");
meuHeroi.atacar();
