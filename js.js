function carregarPagina(pagina) {
  fetch('paginas/' + pagina)
    .then(resposta => resposta.text())
    .then(html => {
      document.getElementById('conteudo').innerHTML = html;
    })
    .catch(erro => {
      document.getElementById('conteudo').innerHTML = '<p>Erro ao carregar página.</p>';
      console.error('Erro:', erro);
    });
}
