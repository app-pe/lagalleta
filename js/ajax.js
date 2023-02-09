(function (){

	var button = document.querySelector("button");
	var divContenedor = document.getElementById("html");

	button.addEventListener("click",obtenerHtml,true);

	function obtenerHtml(e){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.status === 200){
				divContenedor.innerHTML = xhr.responseText;
			}
		}
			xhr.open("get","plantilla,html",true);
			xhr.send();
	}


})();