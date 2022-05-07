// uma funcao chama a outra 
//$ chama uma funcao anonima em jquery


function pegaDados(){
    $.ajax({ //FAZ REQUISIÇÕES CONFORME SOLICITADO E FORNECE UM RETORNO
        url: "api/lista.json", // CAMINHO DA API
        data: "", //PARAMETRO
        success: function(retorno){ //FUNCAO DE RETORNO
            tratarDados(retorno)
        },
        dataType: "html" 
    })
}
function teste(dados1){
    return 
}
function tratarDados(dados){
    dados = JSON.parse(dados) // CONVERTE DADOS JSON

    var lista = $('.listaItens'); //! perguntar para o professor

    $(dados).each(function(index,valor){ //foreach que percorre a lista.JSON

        JSON.stringify([valor.imagem])
        JSON.stringify([valor.nome])
        JSON.stringify([valor.descricao])
        
        let conteudo = `
        <div class="col-md-4">
                <div class="card" style="height:100%;" >
                    <img src="${valor.imagem}" class="card-img-top" onclick="abrirModal('${valor.imagem}','${valor.nome}','${valor.descricao}')" alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${valor.nome}</h5>
                    <p class="card-text" style="font-size: 100%">${valor.descricao}</p>
                    <button type="button" class="btn btn-primary abrirModal" onclick="abrirModal('${valor.imagem}','${valor.nome}','${valor.descricao}')""  >
                        Detalhes
                    </button>
                    </div>
                </div>
            </div>`;
    lista.append(conteudo); //! perguntar para o professor
    })
}

function abrirModal(imagem,nome,descricao){
    console.log(nome)
    let conteudo = `
    <div class="col-md-12">
                <div class="card" >
                    <img src="${imagem}" class="card-img-top"  alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">${descricao}</p>
                    </div>
                </div>
    </div>`;   
    $('.detalheItem').html(conteudo); //! perguntar para o professor
    $('#exampleModal').modal('show'); //!perguntar para o professor

}

$(function(){
    pegaDados()
})