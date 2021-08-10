// botão da página inicial para agendar consulta
        var botaoCadastro = document.querySelector("#cadastrarConsultas"); 

        botaoCadastro.addEventListener("click",function(event){

        event.preventDefault();


    })

    
// botão da página inicial para agendar banho
        var botaoCadastroBanhos = document.querySelector("#cadastrarBanhos"); 

        botaoCadastroBanhos.addEventListener("click",function(event){

        event.preventDefault();



    })

// função da página consultas para enviar formulário de consulta
       

    function cadastrarNome(nomeDoResp, NomeDopet, veterinario, data, servico){
            
        var tb = document.querySelector("table");
        var quantidadeLinhas = tb.rows.length;
        var linha = tb.insertRow(quantidadeLinhas);
    
        var cellCodigo = linha.insertCell(0);
        var cellNome = linha.insertCell(1);
        var cellPet = linha.insertCell(2);
        var cellVet = linha.insertCell(3);
        var cellData = linha.insertCell(4);
        var cellServ = linha.insertCell(5);
    
        cellCodigo.innerHTML = quantidadeLinhas;
        cellNome.innerHTML = nomeDoResp;
        cellPet.innerHTML = NomeDopet;
        cellVet.innerHTML = veterinario;
        cellData.innerHTML = data;
        cellServ.innerHTML = servico;
    
    }

// botão da página consultas para enviar formulário de banho
    var enviarBanho = document.querySelector("#cadastrarNovosBanhos");

        enviarBanho.addEventListener("click", function(event){

        event.preventDefault();
  
    })
    
// função para cadastrar banhos


function cadastrarBanhos(banhonomeDoResp, banhoNomeDopet, banhogroomer, banhodata, banhoservico){
            
    var tb = document.getElementById("tableBanho");
    var quantidadeLinhas = tb.rows.length;
    var linha = tb.insertRow(quantidadeLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellPet = linha.insertCell(2);
    var cellGroomer = linha.insertCell(3);
    var cellData = linha.insertCell(4);
    var cellServ = linha.insertCell(5);

    cellCodigo.innerHTML = quantidadeLinhas;
    cellNome.innerHTML = banhonomeDoResp;
    cellPet.innerHTML = banhoNomeDopet;
    cellGroomer.innerHTML = banhogroomer;
    cellData.innerHTML = banhodata;
    cellServ.innerHTML = banhoservico;

}
