function calcular() {
  var input1 = document.getElementById("valor1").value;
  var input2 = document.getElementById("valor2").value;
  var input3 = document.getElementById("valor3").value;
  var input4 = document.getElementById("valor4").value;
  var input5 = document.getElementById("valor5").value;
  var preco = document.getElementById("preco").value;

  var numero1 = Number(input1);
  var numero2 = Number(input2);
  var numero3 = Number(input3);
  var numero4 = Number(input4);
  var numero5 = Number(input5);

  var soma = preco / (numero1 + numero2 + numero3 + numero4 + numero5);

  var resposta = document.getElementById("resultado");
  resposta.innerHTML = `O valor de custo-benefício é de ${soma}`;
}
