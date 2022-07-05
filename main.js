function buscacep() {
  var cep = document.getElementById("Cep").value;
  // console.log(cep);

  const busca = new Request("http://viacep.com.br/ws/" + cep + "/json/");
  let dados;

  if (!cep) alert("Digite um CEP");
  else {
    fetch(busca)
      .then((response) => response.json())
      .then((json) => {
        dados = json;

        if (dados.erro) alert("CEP não encontrado");
        else {
          // console.log(dados.logradouro);
          document.getElementById("logradouro").value = dados.logradouro;
          document.getElementById("bairro").value = dados.bairro;
          document.getElementById("cidade").value = dados.localidade;
          document.getElementById("uf").value = dados.uf;
          document.getElementById("ibge").value = dados.ibge;
        }
      });
  }
}

function limpar() {
  document.getElementById("Cep").value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("ibge").value = "";
}
