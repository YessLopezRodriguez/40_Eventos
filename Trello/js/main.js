function creaNombreLista() {
	document.getElementById("formulario").setAttribute("class", "formulario-Lista");
	idInputAnadir.style.background= "#F2F2F2";
	
	var btnAgregarTarjeta = document.createElement("button");
	formulario.appendChild(btnAgregarTarjeta);
	btnAgregarTarjeta.setAttribute("class", "btn-success");
	btnAgregarTarjeta.innerHTML="Guardar";
	btnAgregarTarjeta.setAttribute("onclick", "guardarNombreLista()");
	
	var iconoEliminar = document.createElement("span");
	iconoEliminar.setAttribute("class", "glyphicon glyphicon-remove");
	formulario.appendChild(iconoEliminar);
}

function guardarNombreLista() {
	document.getElementById("idInputAnadir").setAttribute("class", "input-anadir");
	var divuno =  document.createElement("div");
	divuno.setAttribute("class", "divuno pull-left");
	document.body.appendChild(divuno);
	divuno.innerHTML='<p class="nombreLista">' + idInputAnadir.value + '</p>';

	var lista = document.createElement("ul");
	divuno.appendChild(lista);
	lista.setAttribute("id", "idTarjeta");


	var nombreTarjeta = document.createElement("p");
	divuno.appendChild(nombreTarjeta);
	nombreTarjeta.setAttribute("id", "anadeTarjeta");
	nombreTarjeta.innerHTML = "Añadir una Tarjeta ...";
	nombreTarjeta.setAttribute("onclick", "creaTarjeta()");
	idInputAnadir.value="";
}

function creaTarjeta() {
	var tarjeta = document.createElement("li");
	document.getElementById("idTarjeta").appendChild(tarjeta);
	tarjeta.setAttribute("id", "tarjeta");

	var contenidoTarjeta = document.createElement("textarea");
	tarjeta.appendChild(contenidoTarjeta);
	contenidoTarjeta.setAttribute("id", "contenidoTarjeta");
	contenidoTarjeta.setAttribute("class", "txtContenidoTarjeta");

	var btnContenidoTarjeta = document.createElement("button");
	tarjeta.appendChild(btnContenidoTarjeta);
	btnContenidoTarjeta.setAttribute("class", "btn-success");
	btnContenidoTarjeta.setAttribute("id", "btnContenido");
	btnContenidoTarjeta.innerHTML = "Añadir";
	btnContenidoTarjeta.setAttribute("onclick", " anadirTarjeta()");

	var iconoEliminarTarjeta = document.createElement("span");
	iconoEliminarTarjeta.setAttribute("class", "glyphicon glyphicon-remove");
	iconoEliminarTarjeta.setAttribute("id", "span");
	tarjeta.appendChild(iconoEliminarTarjeta);
	document.getElementById("anadeTarjeta").style.visibility="hidden";
}

function anadirTarjeta() {
	var txtcontenidoT = contenidoTarjeta.value;
	tarjeta.removeChild(contenidoTarjeta);
	tarjeta.removeChild(btnContenido);
	tarjeta.removeChild(span);
	document.getElementById("anadeTarjeta").style.visibility="visible";
	var tareaTarjeta = document.createElement("div");
	tarjeta.appendChild(tareaTarjeta);
	tareaTarjeta.setAttribute("class", "tareaTarjeta");
	tareaTarjeta.innerHTML = '<p>' + txtcontenidoT + '</p>';
}
