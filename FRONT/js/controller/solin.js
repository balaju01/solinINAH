'use strict';
 
angular.module('solin').controller('SolinController',['$scope','$log','$http','$base64','$rootScope',function($scope,$log,$http,$base64,$rootScope) {
	$scope.item = {
      id: "",
      folio: "",
      proyecto_id: "",
      usuario_cr_id: "",
      usuario_c_id: "",
      usuario_a_id: "",
      periodo_id: "",
      monto: "",
      montoL: "",
      descripcion: "",
      pago: "",
      n_pago: "",
      status: "",
      user: "",
      cargo: "",
      comprobante: ""
    };

  var req = {
    method:"GET",
    url: $rootScope.ruta+"solins/departamento/"+$rootScope.users.departamento_id
  }

  var response=$http(req);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data[0];
      console.log($scope.data);
      //console.log($base64.encode('admin:admin'));
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});


  $scope.crear = function(){
    req = {
          method: 'POST',
          url: $rootScope.ruta+"solins/",
          data: {
            folio: "DepInf-2017-3",
            proyecto_id: $scope.item.proyecto_id,
            usuario_cr_id: 2,
            usuario_c_id: 1,
            usuario_a_id: 1,
            periodo_id: 2,
            monto: $scope.item.monto,
            descripcion: $scope.item.descripcion,
            pago: $scope.item.pago,
            n_pago: $scope.item.n_pago,
            status: 0            
          }
      }
      $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
        });
    console.log($scope.item);

  };


  $scope.NumerosaLetras = function(cantidad) {
    console.log(cantidad)
    if (cantidad == "0.00" || cantidad == "0") {
      return "CERO PESOS 00/100 M. N.";
    } 
    else {
      var ent = cantidad;
      console.log(ent);
      var arreglo = str_split(ent[0]);
      var longitud = count(arreglo);
      var numero = "";
      switch (longitud) {
        case 1:
          numero = unidades(arreglo[0]);
          break;
        case 2:
          numero = decenas(arreglo[0], arreglo[1]);
          break;
        case 3:
          numero = centenas(arreglo[0], arreglo[1], arreglo[2]);
          break;
        case 4:
          numero = unidadesdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3]);
          break;
        case 5:
          numero = decenasdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4]);
          break;
      }
    return numero + "  PESOS " + ent[1] + "/100 M. N.";
    }
  }

  var unidades = function(unidad) {
    var unidade = {1 : 'UN ',
      2 : 'DOS ',
      3 : 'TRES ',
      4 : 'CUATRO ',
      5 : 'CINCO ',
      6 : 'SEIS ',
      7 : 'SIETE ',
      8 : 'OCHO ',
      9 : 'NUEVE '};
    return unidades[unidad];
  }

  var decenas = function(decena, unidad) {
    var diez = {1 : 'ONCE',
      2 : 'DOCE',
      3 : 'TRECE',
      4 : 'CATORCE',
      5 : 'QUINCE',
      6 : 'DIECISEIS',
      7 : 'DIECISIETE',
      8 : 'DIECIOCHO',
      9 : 'DIECINUEVE'
    };
    var decenas = {1 : 'DIEZ',
      2 : 'VEINTE',
      3 : 'TREINTA ',
      4 : 'CUARENTA ',
      5 : 'CINCUENTA ',
      6 : 'SESENTA ',
      7 : 'SETENTA ',
      8 : 'OCHENTA ',
      9 : 'NOVENTA '};
    if (decena == 1) {
      if (unidad == 0) {
        return decenas[decena];
      } 
      else {
        return diez[unidad];
      }
    } 
    else if (decena == 2) {
      if (unidad == 0) {
        return decenas[decena];
      } 
      else {
        return veinte = "VEINTI" + unidades(unidad);
      }
    } 
    else {
      return decenas[decena] + " Y " + unidades(unidad);
    }
  }

  var centenas = function(centena, decena, unidad) {
    var centenas = {1 : "CIENTO ",
      2 : "DOSCIENTOS ",
      3 : "TRESCIENTOS ",
      4 : "CUATROCIENTOS ",
      5 : "QUINIENTOS ",
      6 : "SEISCIENTOS ",
      7 : "SETECIENTOS ",
      8 : "OCHOCIENTOS ",
      9 : "NOVECIENTOS "};

    if (centena == 1 && decena == 0 && unidad == 0) {
      return "CIEN ";
    }
    if (decena == 0) {
      numero = centenas[centena] + "" + decenas(decena, unidad);
      return str_replace(" Y ", " ", numero);
    } 
    else {
      return centenas[centena] + "" + decenas(decena, unidad);
    }
  }

  var unidadesdemillar = function(unimill, centena, decena, unidad) {
    numero = unidades(unimill) + " MIL " + centenas(centena, decena, unidad);
    numero = str_replace("UN  MIL ", "MIL ", numero);
    if (unidad == 0) {
      return str_replace(" Y ", " ", numero);
    } 
    else {
      return numero;
    }
  }

  var decenasdemillar = function(decemill, unimill, centena, decena, unidad) {
    numero = decenas(decemill, unimill) + " MIL " + centenas(centena, decena, unidad);
    return numero;
  }

}]);