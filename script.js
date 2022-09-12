const btn = document.querySelector("#inputCPF");

btn.addEventListener('click',function(e) {
	e.preventDefault();

	const numero = document.querySelector("#inputA");

	const value = numero.value;
	alert(
	validarCpf(value));
	
	console.log(value);
})
/* 
document.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		const btn = document.querySelector("#inputCPF");
	
		btn.click();
	}
	alert(cpfValido);
}); */

function validarPrimeiroDigito(cpf) {
	let sum = 0;
	for (let i = 0; i < 9; i++) {
	  sum += cpf[i] * (10 - i);
	}
	const resto = (sum * 10) % 11;
	if (resto < 10) {
	  return cpf[9] == resto;
	}
	return cpf[9] == 0;
  }
  
  function validarSegundoDigito(cpf) {
	let sum = 0;
	for (let i = 0; i < 10; i++) {
	  sum += cpf[i] * (11 - i);
	}
	const resto = (sum * 10) % 11;
	if (resto < 10) {
	  return cpf[10] == resto;
	}
	return cpf[10] == 0;
  }
  
  function validarRepetido(cpf) {
	const primeiro = cpf[0];
	let diferente = false;
	for(let i = 1; i < cpf.length; i++) {
	  if(cpf[i] != primeiro) {
		diferente = true;
	  }
	}
	return diferente;
  }
  
  function validarCpf(cpf) {
	if (cpf.length != 11) {
	  return 'Você não existe!';
	}
	if(!validarRepetido(cpf)) {
	  return 'Você não existe!';
	}
	if (!validarPrimeiroDigito(cpf)) {
	  return 'Você não existe!';
	}
	if (!validarSegundoDigito(cpf)) {
	  return 'Você não existe!';
	}
	return 'Você existe parabéns!';
  }

  
  