function meuescopo(){
    const form = document.querySelector("form");
    const cadastro = document.querySelector(".cadastro");
    const alunos = [];

        function cadastrar(evento){
            evento.preventDefault(); //evita atualização da pagina após enviar cadastro
            let nome = form.querySelector('.nome');            
            let telefone = form.querySelector('.telefone');
            let modalidade = form.querySelector('.modalidade');
            let inicio = form.querySelector('.inicio');

            alunos.push({
                nome: nome.value, 
                telefone: telefone.value, 
                modalidade: modalidade.value, 
                inicio: inicio.value 
            });
            cadastro.innerHTML += `<tr> <td> ${nome.value}</td> <td> ${telefone.value}</td> <td> ${modalidade.value}</td> <td> ${inicio.value}</td> </tr>`

            console.log(alunos[nome]);
            
        }

    form.addEventListener('submit', cadastrar);
}
meuescopo();