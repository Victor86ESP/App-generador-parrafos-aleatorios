
const paragraphs = ['Mantén siempre actualizado tu sistema operativo y programas. Las actualizaciones no solo traen mejoras, sino también correcciones de seguridad que te protegen de amenazas.','Realiza copias de seguridad de forma regular. Usa dispositivos externos o servicios en la nube para guardar tus archivos más importantes y evitar pérdidas inesperadas.','Utiliza contraseñas seguras y únicas para cada cuenta. Una combinación de letras, números y símbolos aumenta la seguridad. Considera usar un gestor de contraseñas para almacenarlas.','Ten un antivirus confiable y mantén sus definiciones al día. Un sistema de protección en tiempo real ayuda a detectar y eliminar amenazas antes de que afecten tu equipo.','Evita abrir enlaces o descargar archivos de correos desconocidos. Este es uno de los métodos más comunes para distribuir malware y robar información.','Limpia regularmente tu dispositivo de archivos temporales, caché y programas innecesarios. Esto mejora el rendimiento y libera espacio en tu disco.','Apaga el Bluetooth y el Wi-Fi cuando no los necesites. Esto no solo ahorra batería, sino que también reduce las posibilidades de que alguien acceda a tu dispositivo sin permiso.'];


const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){
	let currentIndex = array.length;
	let randomIndex;
	
	while(currentIndex != 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		
		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]
	];
	}		
	return array;
}

function generate(){
	if(item.value == 0){
		alert("El valor NO puede ser 0(CERO)");
	}else if(item.value > paragraphs.length){
		const randomIndex = Math.floor(Math.random() * paragraphs.length);
		dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
		}else{
			const shuffleParagraphs = paragraphs;
			shuffle(paragraphs);
			
			const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
			paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
			dataContainer.innerHTML = paragraphsHTML
		}
	
}