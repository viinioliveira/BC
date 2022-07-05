function buscacep() {
  var cep = document.getElementById("Cep").value;

  if (!cep) return alert("insira um cep");
  const busca = new Request("http://viacep.com.br/ws/" + cep + "/json/");
  let dados;
  fetch(busca)
    .then((response) => response.json())
    .then((json) => {
      dados = json;
      console.log(dados.logradouro);
      document.getElementById("logradouro").value = dados.logradouro;
      document.getElementById("bairro").value = dados.bairro;
      document.getElementById("cidade").value = dados.localidade;
      document.getElementById("uf").value = dados.uf;
      document.getElementById("ibge").value = dados.ibge;
    });
}

function limpar() {
  document.getElementById("Cep").value = null;
  document.getElementById("logradouro").value = null;
  document.getElementById("bairro").value = null;
  document.getElementById("cidade").value = null;
  document.getElementById("uf").value = null;
  document.getElementById("ibge").value = null;
}
