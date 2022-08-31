
//extrallendo texto del imput
			var input=document.querySelector("textarea"); 
			//funcion para encriptar el texto extraido
			/*las llaves utilizadas son:
				a=ai, e=enter, i=imes, o=ober, u=ufat.
			*/
			function encriptar (){
				var frase=input.value; 
				var fraseEncriptada=[];
				for (var i in frase){
					var letra=frase[i];
					if (frase[i]=="a") {
						letra ="ai";
						fraseEncriptada.push(letra);
					}
					if (frase[i]=="e") {
						letra ="enter";
						fraseEncriptada.push(letra);
					}	
					if (frase[i]=="i") {
						letra ="imes";
						fraseEncriptada.push(letra);
					}
					if (frase[i]=="o") {
						letra ="ober";
						fraseEncriptada.push(letra);
					}
					if (frase[i]=="u") {
						letra ="ufat";
						fraseEncriptada.push(letra);
					}
					if (frase[i]!="a"&&frase[i]!="e"&&frase[i]!="i"&&frase[i]!="o"&&frase[i]!="u") {
						fraseEncriptada.push(letra);
					}
				}
				fraseEncriptada=fraseEncriptada.join("");
				document.getElementById("f").value=fraseEncriptada;
			}

			function reiniciar (){
				document.getElementById("f").value="Ningun texto encontrado...";
				document.getElementById("input").value="";
			}
			function copiar(){
				var contenido=document.getElementById("f");
				contenido.select();
				document.execCommand("copy");
			}
			function desencriptar(){
				frase=input.value;
				var regA=/ai/g
				var regE=/enter/g
				var regI=/imes/g
				var regO=/ober/g
				var regU=/ufat/g
				fraseN=frase.replace(regA,"a");
				fraseN=fraseN.replace(regE,"e");
				fraseN=fraseN.replace(regI,"i");
				fraseN=fraseN.replace(regO,"o");
				fraseN=fraseN.replace(regU,"u");
				document.getElementById("f").value=fraseN;
			}
