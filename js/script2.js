function pegaDados2(){
    $.ajax({
        url:"api/lista2.json",
        data:"",
        success:function(retorno){
            tratarDados2(retorno)
        },
        dataType: "html"
    })
}
function tratarDados2(dados){
    dados = JSON.parse(dados)

    var lista = $('.corpo')

    $(dados).each(function(index1,valor1){

        let conteudo = `
            <tr>
                <td>${valor1.nome}</td>
                <td><img src="${valor1.imagem} " widht = 500rem; height = 100rem; onclick = "abrirModal2('${valor1.nome}','${valor1.imagem}','${valor1.autor}','${valor1.descricao}')" alt="tertertert"></td>
                <td>${valor1.autor}</td
                <td>${valor1.descricao}</td>
                <td><button type="button" class="btn btn-primary abrirModal2" onclick="abrirModal2('${valor1.nome}','${valor1.imagem}','${valor1.autor}','${valor1.descricao}')">
                Detalhes
            </button></td>
              </tr>
      `
      lista.append(conteudo);
    })
}

function abrirModal2(nome,imagem,autor,descricao){
    let conteudo = `
    <div class="col-md-12">
                <div class="card" >
                    <img src="${imagem}" class="card-img-top"  alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <h4 class="card-title">${autor}</h4>
                    <p class="card-text">${descricao}</p>
                    
                    </div>
                </div>
    </div>`
    $('.detalheItem2').html(conteudo);
    $('#exampleModal').modal('show');
}

$(function(){
    pegaDados2()
})