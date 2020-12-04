const pegaInput = document.querySelector("input");
const btnCadastrar = document.querySelector('button');
const ul = document.querySelector('ul');

//O que será executado ao clicar no botão cadastrar
function cadastrar(){

    if(pegaInput.value){
        
        const textElemento = document.createElement('span');
        textElemento.innerHTML = pegaInput.value

        const btnRemover = document.createElement('button');
        btnRemover.innerHTML = "remover";

        const li = document.createElement('li');
        li.appendChild(textElemento) ;
        li.appendChild(btnRemover)
        
        //Removendo item da lista
        btnRemover.onclick = ()=>{
            ul.removeChild(li);
        }

        ul.appendChild(li);
        pegaInput.value = "";

        // Adicionando com a tecla enter
        pegaInput.addEventListener("keypress", (e)=>{
            if(e.key === "Enter"){
                if(pegaInput.value){
        
                    const textElemento = document.createElement('span');
                    textElemento.innerHTML = pegaInput.value
            
                    const btnRemover = document.createElement('button');
                    btnRemover.innerHTML = "remover";
            
                    const li = document.createElement('li');
                    li.appendChild(textElemento) ;
                    li.appendChild(btnRemover)
                    
                    //Removendo item da lista
                    btnRemover.onclick = ()=>{
                        ul.removeChild(li);
                    }            
                    ul.appendChild(li);
                    pegaInput.value = "";
                }
            
            }
        })
    }
}


btnCadastrar.onclick = cadastrar;