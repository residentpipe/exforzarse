app.controller("controladorPersona",  ["$scope","servicioPersona", function controladorPersona($scope,servicioPersona) {
	$scope.personaFormulario={};
	$scope.mostrarPadres=false;
	
	$scope.agregarPersona=function(personaFormulario){
		$scope.personaRegistrar={};
		if(angular.isUndefined(personaFormulario.nombres) || angular.isUndefined(personaFormulario.ciudad)  || angular.isUndefined(personaFormulario.fechaNacimiento)  || angular.isUndefined(personaFormulario.tipoDocumento)
				|| angular.isUndefined(personaFormulario.documentoIdentidad) || angular.isUndefined(personaFormulario.cantidadHermanos) || angular.isUndefined(personaFormulario.direccion) || angular.isUndefined(personaFormulario.correo)
				|| angular.isUndefined(personaFormulario.eps) || angular.isUndefined(personaFormulario.tallaCamiseta) || angular.isUndefined(personaFormulario.tallaPantaloneta)
		){
			alert("Completa todos los campos");
			return;
		}
		else{
			if($scope.personaFormulario.tipoDocumento){
				if(angular.isUndefined(personaFormulario.nombresPadre) || angular.isUndefined(personaFormulario.ocupacionPadre) || angular.isUndefined(personaFormulario.nombresMadre) || angular.isUndefined(personaFormulario.ocupacionMadre) ){
					alert("Completa todos los campos");
					return;
				}
				else{
					personRegistrar={"id":"","nombre":personaFormulario.nombres,"lugarNacimiento":personaFormulario.ciudad,"fechaNacimiento":personaFormulario.fechaNacimiento,"tipoDocumento":"tarjetaIdentidad","numeroDocumento":personaFormulario.documentoIdentidad,
							"nombrePadre":personaFormulario.nombresPadre,"ocupacionPadre":personaFormulario.ocupacionPadre,"nombreMadre":personaFormulario.nombresMadre,"ocupacionMadre":personaFormulario.ocupacionMadre,"cantidadHermanos":personaFormulario.cantidadHermanos,
							"direccion":personaFormulario.direccion,"correo":personaFormulario.correo,"eps":personaFormulario.eps,"tallaCamiseta":personaFormulario.tallaCamiseta,"tallaPantaloneta":personaFormulario.tallaPantaloneta
					}
				}
			}
			else{
				personaRegistrar={"id":"","nombre":personaFormulario.nombres,"lugarNacimiento":personaFormulario.ciudad,"fechaNacimiento":personaFormulario.fechaNacimiento,"tipoDocumento":"cedulaCiudadania","numeroDocumento":personaFormulario.documentoIdentidad,
						"nombrePadre":"","ocupacionPadre":"","nombreMadre":"","ocupacionMadre":"","cantidadHermanos":personaFormulario.cantidadHermanos,
						"direccion":personaFormulario.direccion,"correo":personaFormulario.correo,"eps":personaFormulario.eps,"tallaCamiseta":personaFormulario.tallaCamiseta,"tallaPantaloneta":personaFormulario.tallaPantaloneta
				}
			}
		}
		
		servicioPersona.agregarPersona(personaRegistrar).then(function(message){
			if(message.data == "OK"){
				alert("Registrado con éxito");
			}
			else{
				alert("No se ha podido registrar en nuestra base de datos");
			}
		})
	}
}]);