class livro {
    constructor(titulo,autor,ano,genero){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano
        this.genero = genero
    }
    displayInfo(){
        console.log(`titulo: ${this.titulo}`);
        console.log(`autor: ${this.autor}`);
        console.log(`ano: ${this.ano}`);
        console.log(`genero: ${this.genero}`);
    }
}
const livro1 = new livro("As Branquelas" ,"Keenen Ivory Wayans" , 2004, "Comédia")
const livro2 = new livro("O Guia do Mochileiro das Galaxias", "Douglas Adams" , 1979,"Comédia")
livro1.displayInfo();
livro2.displayInfo();
