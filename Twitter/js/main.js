(function(){
	var lista = document.getElementById("lista"), // id UL
		tareaInput = document.getElementById("tareaInput"), // id TEXTAREA
		btnNuevaTarea = document.getElementById("btn-agregar"); // id BOTON
 
	var agregarTarea = function(){
		var tarea = tareaInput.value, // Valor TEXTAREA
			nuevaTarea = document.createElement("li"), // Crea LI
			contenido = document.createTextNode(tarea); // Crea un nodo texto con el valor del TEXTAREA

 
		nuevaTarea.appendChild(contenido); // papa LI hijo valor TEXTAREA
		nuevaTarea.innerHTML += '<span class="glyphicon glyphicon-trash pull-right" onclick="eliminarTarea(this)"></span>';
		lista.appendChild(nuevaTarea); // papa UL hijo LI
		tareaInput.value = ""; // borra el texto del TEXTAREA

 
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this); //papa de LI es  UL elimina LI
			});
		}
	};

	btnNuevaTarea.addEventListener("click", agregarTarea);
}());

