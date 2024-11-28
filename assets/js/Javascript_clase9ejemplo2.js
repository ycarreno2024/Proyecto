function loadpage(page){
	let content = document.getElementById("page-content");

	if (page === 'inicio') {
		content.innerHTML = '<h1>BIENVENIDO A LA PÁGINA DE INICIO</h1><p>Este es el contenido de la página de inicio. Haz click en los enlaces de la parte superior para navegar entre las páginas</p>';
	}
	else if (page === 'acercade') {
		content.innerHTML = '<h1>ACERCA DE NOSOTROS</h1><p>Somos una empresa dedicada a crear páginas web</p>';
	}
	else if (page === 'servicios') {
		content.innerHTML = '<h1>SERVICIOS</h1><p>Ofrecemos una variedad de servicios que incluye personalización de páginas con CSS y Javascript</p>';
	}
	else if (page === 'contacto') {
		content.innerHTML = '<h1>CONTACTO</h1><p>Para más información. Llámenos al 310 xxxxxx</p>';
	}

}