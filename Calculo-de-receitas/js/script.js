
//Dados para adicionar na tabela
const ingrediente = document.querySelector('.ingrediente');
const quantidade = document.querySelector('.quantidade');
const unidadeMedida = document.querySelector('.unidade-medida');
const pesoEmbalagem = document.querySelector('.peso-embalagem');
const precoEmbalagem = document.querySelector('.preco-embalagem');
const btnAdicionar = document.querySelector('button');
const tbody = document.querySelector('tbody');
const boxResultado = document.querySelector('.boxreultado');

var custoReceita = 0;


function adicionar(e){
    e.preventDefault();

    if(!ingrediente.value || !quantidade.value || !unidadeMedida.value ||!pesoEmbalagem.value || !precoEmbalagem.value){
        alert('Preencha todos os campos.')
    } 

    if(ingrediente.value && quantidade.value && unidadeMedida.value && pesoEmbalagem.value && precoEmbalagem.value){
    
        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let qtde = document.createElement('th');
        qtde.innerHTML = Number(quantidade.value);

        let unid = document.createElement('th');
        unid.innerHTML = unidadeMedida.value;

        let produto = document.createElement('th');
        produto.innerHTML = ingrediente.value;

        let peso = document.createElement('th');
        peso.innerHTML = Number(pesoEmbalagem.value);

        let preco = document.createElement('th');
        preco.innerHTML = "R$ "+ Number(precoEmbalagem.value);

        var custo = document.createElement('th');
        custo.innerHTML = "R$ "+((precoEmbalagem.value/pesoEmbalagem.value) * quantidade.value).toFixed(2);

        custoReceita += ((precoEmbalagem.value/pesoEmbalagem.value) * quantidade.value);   

        
        let btnRemover = document.createElement('button');
        btnRemover.innerHTML = "Remover";

        
        tr.appendChild(qtde);
        tr.appendChild(unid);
        tr.appendChild(produto);
        tr.appendChild(peso);
        tr.appendChild(preco);
        tr.appendChild(custo);
        tr.appendChild(btnRemover);

        btnRemover.onclick = ()=>{
            tbody.removeChild(tr);
        }   
        
        limpaCampos();
        
    }
}

function limpaCampos(){
    ingrediente.value = "";
    quantidade.value = "";
    unidadeMedida.value = "";
    unidadeMedida.value = "";
    pesoEmbalagem.value = "";
    precoEmbalagem.value = "";
}

btnAdicionar.onclick = adicionar;

//Calcular Receita

//Dados contabeis
const porcentagemInsumo = document.querySelector('.porcentagem-insumo');
const custoFuncionarios = document.querySelector('.custo-funcionarios');
const diasTrabalhados = document.querySelector('.dias-trabalhados');
const horasTrabalhadas = document.querySelector('.horas-trabalhadas');
const valorHora = document.querySelector('.valor-hora');
const lucroPretendido = document.querySelector('.lucro-pretendido');
const horasReceita = document.querySelector('.horas-receita')


function calcular(){     
    var insumos = (custoReceita * (porcentagemInsumo.value/100));
    var funcionarios = custoFuncionarios.value;
    var diasDeTrabalho = diasTrabalhados.value;
    var horasDeTrabalho = horasTrabalhadas.value;
    var valorDaHora = (funcionarios/diasDeTrabalho)/horasDeTrabalho;
    var porcentageLucro = lucroPretendido.value/100;
    var horasNaReceita = horasReceita.value;
    var maoDeObra = funcionarios/diasDeTrabalho/horasDeTrabalho*horasNaReceita; 
    var lucro = (custoReceita + insumos + maoDeObra) * (porcentageLucro);
    var totatlReceita =  custoReceita + insumos + maoDeObra + lucro;

    valorHora.value = valorDaHora.toFixed(2);
    
    // Adicionar resultados

    let tbody = document.querySelector('.boxResultado');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    
    let thCustoReceita = document.createElement('th');
    thCustoReceita.innerHTML = custoReceita.toFixed(2);

    let thInsumos = document.createElement('th');
    thInsumos.innerHTML = insumos.toFixed(2);

    let thMaoDeObra = document.createElement('th');
    thMaoDeObra.innerHTML = maoDeObra.toFixed(2);

    let thLucro = document.createElement('th');
    thLucro.innerHTML = lucro.toFixed(2);

    let thTotalReceita = document.createElement('th');
    thTotalReceita.innerHTML = totatlReceita.toFixed(2);

    tr.appendChild(thCustoReceita);
    tr.appendChild(thInsumos);
    tr.appendChild(thMaoDeObra);
    tr.appendChild(thLucro);
    tr.appendChild(thTotalReceita);

};

const btnCalcular = document.querySelector('.calcular');
btnCalcular.addEventListener("click", calcular)
