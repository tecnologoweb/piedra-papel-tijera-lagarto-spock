function aleatorio(minimo, maximo){
	return Math.floor(Math.random()*(maximo - minimo + 1) + minimo);
}

function ejecutar (){
	var opciones = ["piedra", "papel", "tijera", "Lagarto", "spock"];
	var piedra = 0;
	var papel = 1;
	var tijera = 2;
	var Lagarto = 3;
	var spock = 4;
	var opcionusuario;
	var opcionmaquina = aleatorio(0,5);

	opcionusuario = prompt ("¿que Opción eliges? \nPiedra: 0 \n Papel: 1 \n Tijera: 2 \n Lagarto: 3 \n Spock: 4", 0);

	if (opcionusuario >= 0 && opcionusuario <=4) {
		alert("elegiste " + opciones[opcionusuario]);

	  	alert("la maquina eligio " + opciones[opcionmaquina]);
	}
	

	if(opcionusuario == piedra)
	{
		if (opcionmaquina == piedra)
		{
			 alert("Empate!");
		}
		else if (opcionmaquina == papel)
		{
			alert("Perdiste porque el papel arropa la piedra");
		}
		else if(opcionmaquina == tijera)
		{
			alert("ganaste porque la piedra aplasta la tijera");
		}		
		else if(opcionmaquina == Lagarto)
		{
			alert("ganaste porque la piedra aplasta el Lagarto");	
		}
		else if(opcionmaquina == spock)
		{
			alert("Perdiste porque el spock vaporiza la piedra");
		}
	}
	else if(opcionusuario == papel)
	{
		if (opcionmaquina == piedra)
		{
			 alert("ganaste porque el papel arropa la piedra");
		}
		else if (opcionmaquina == papel)
		{
			alert("Empate");
		}
		else if(opcionmaquina == tijera)
		{
			alert("Perdiste porque las tijera rompe el papel");
		}
		else if(opcionmaquina == Lagarto)
		{
			alert("Perdiste porque el lagarto se come el papel");
		}		
		else if(opcionmaquina == spock)
		{
			alert("ganaste porque el papel refuta a spock");	
		}
	}
	else if(opcionusuario == tijera)
	{
		if (opcionmaquina == piedra)
		{
			 alert("Perdiste porque la piedra aplasta a la tijera");
		}
		else if (opcionmaquina == papel)
		{
			alert("ganaste porque la tijera corta el papel");
		}
		else if(opcionmaquina == tijera)
		{
			alert("Empate!");
		}
		else if(opcionmaquina == Lagarto)
		{
			alert("ganaste porque la tijera decapita el lagarto");
		}
		else if(opcionmaquina == spock)
		{
			alert("Perdiste porque el spock destroza las tijeras");
		}
	}
	else if(opcionusuario == Lagarto)
	{
		if (opcionmaquina == piedra)
		{
			 alert("Perdiste porque la piedra aplasta el lagarto");
		}
		else if (opcionmaquina == papel)
		{
			alert("ganaste porque el Lagarto se come el papel");
		}
		else if(opcionmaquina == tijera)
		{
			alert("Perdiste porque la tijera decapita el lagarto");
		}
		else if(opcionmaquina == Lagarto)
		{
			alert("Empate");
		}
		else if(opcionmaquina == spock)
		{
			alert("ganaste porque el Lagarto envenena a spock");
		}
	}
	else if(opcionusuario == spock)
	{
		if (opcionmaquina == piedra)
		{
			 alert("ganaste porque spock vaporiza la piedra");
		}
		else if (opcionmaquina == papel)
		{
			alert("Perdiste porque el papel refuta a spock");
		}
		else if(opcionmaquina == tijera)
		{
			alert("ganaste porque spock destroza la tijera");
		}
		else if(opcionmaquina == Lagarto)
		{
			alert("Perdiste porque el Lagarto envenena a spock");
		}
		else if(opcionmaquina == spock)
		{
			alert("Empate");
		}
	}
	else
	{
		alert("elegiste una opcion no valida!")
	}
}


