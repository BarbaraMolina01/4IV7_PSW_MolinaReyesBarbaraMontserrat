const formulario = document.getElementById('forms1');
const inputs = document.querySelectorAll('#forms1 input');
const pantalla = document.getElementById('pantalla');

formulario.addEventListener('submit', (e) => {
	var elementos = document.getElementByName('periodo');

	for(var i=0; i<elementos.length; i++) {
  		if(elementos[i].checked){
  			var periodo = elementos[i].value;
  		} 
	}

	if(document.getElementById('valorauto').value>100000 && document.getElementById('valorauto').value<1000000 && document.getElementById('cuota')>document.getElementById('valorauto')*0.10) {
		var cuotafinal = document.getElementById('valorauto').value*(1+document.getElementById('interes').value/100)^periodo;
	}

	pantalla.innerHTML = "Pago final mensual: "+cuotafinal;
})