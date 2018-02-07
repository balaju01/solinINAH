'use strict';
 
angular.module('solin').controller('SolinController',['$scope','$log','$http','$base64','$rootScope','$location','$filter',function($scope,$log,$http,$base64,$rootScope,$location,$filter) {
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

  $scope.item = $rootScope.solin;
  $scope.saldo = $rootScope.solin.monto;
  $scope.item.user = $rootScope.users.name;
  $scope.item.cargoCr = $rootScope.users.cargo;


  var req = {
    method:"GET",
      url: $rootScope.ruta+"proyectos/periodo/"+$rootScope.date.id+"/departamento/"+$rootScope.users.departamento_id,  
    };
    var req1 = {
    method:"GET",
    url: $rootScope.ruta+"solins/departamento/"+$rootScope.users.departamento_id
  }
    //peticion para recuperar todos los proyectos por departamentos y solines por departamento
  var init = function(){

    for (var i = 0; i < $rootScope.proyectos.length; i++) {
      if ($rootScope.proyectos[i].proyecto_id == $scope.item.proyecto_id) 
      {
        console.log($rootScope.proyectos[i]);
        $scope.saldoActual = $rootScope.proyectos[i].saldoProyecto;
        console.log($scope.saldoActual);
      }
    }

    var response=$http(req);

    response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
        $scope.data = data[0];
        console.log($scope.data);
        
      });
      response.error(function(data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:"+status);
      });

    var response1=$http(req1);

    response1.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
        $scope.data1 = data[0];
        console.log($scope.data1);
        //console.log($base64.encode('admin:admin'));
      });
      response1.error(function(data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:"+status);
      });
  };
  init();



  $scope.crear = function(){
    console.log($rootScope.ruta+"solins");
    //aqui hay que agregar una llamada al end point ContSolinPeriodo para que traiga el numero de columnas y agregarlo al folio
    var fol = $scope.data[0].seudonimo + $scope.item.proyecto_id+'-'+$filter('date')(new Date(),'yyyy')+'-'+($rootScope.solines+1);
    console.log($scope.item);
    $scope.saldoActual = $scope.saldoActual - $scope.item.monto;

    var pdf = new jsPDF();
    
    
    req = {
          method: 'POST',
          url: $rootScope.ruta+"solins",
          data: {
            folio: fol,
            proyecto_id: $scope.item.proyecto_id,
            usuario_cr_id: $rootScope.users.id,
            usuario_c_id: 1,
            usuario_a_id: 1,
            periodo_id: $rootScope.date.id,
            monto: $scope.item.monto,
            montoL: $scope.item.montoL,
            descripcion: $scope.item.descripcion,
            pago: $scope.item.pago,
            n_pago: $scope.item.n_pago,
            status: 0,
            comprobantes: $scope.item.comprobantes
          }
      }
      $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/');
          pdf.setFontSize(22);
          pdf.text(60,20,"SOLICITUD DE GASTOS");
          //pdf.addImage(../../img/mna.png, 'JPEG', 10, 10, 50, 50);
          pdf.setFontSize(14);
          pdf.text(20,40,fol);
          pdf.text(90,40,$scope.data[0].nameDepartamento);
          pdf.text(170,40,$filter('date')(new Date(),'dd-MM-yyyy'));

          pdf.setFontSize(12);
          pdf.text(20,60,"SOLICITO A USTED AUTORIZACION POR LA CANTIDAD DE:  " + $scope.item.monto);
          pdf.text(10,80,"CANTIDAD CON LETRA:  " + $scope.item.montoL);
          pdf.text(20,100,"DESCRIPCION DEL GASTO: " + $scope.item.descripcion);
          pdf.text(20,120,"TIPO DE GASTO: " + $scope.item.proyecto_id);
          pdf.text(20,140,"SOLICITADO POR: " + $scope.item.user);
          pdf.text(20,160,"CARGO: " + $scope.item.cargoCr);
          pdf.text(120,160,"FIRMA:_________________");
          pdf.text(20,180,"COMPROBANTES ENTREGADOS: " + $scope.item.comprobantes);
          pdf.text(20,200,"FORMA DE PAGO: " + $scope.item.pago);
          pdf.text(20,220,"A NOMBRE DE: " + $scope.item.n_pago);
          pdf.text(20,260,"RECIBI EFECTIVO");
          pdf.text(90,260,"AUTORIZO");
          pdf.text(140,260,"FIRMA Y SELLO DE RECIBIDO");
          pdf.save('mipdf.pdf');
        })
        .error(function (response){
          console.log(response);
          $location.path('/');
          alert("Ha fallado la petición. Estado HTTP:"+status);
        });
    console.log($scope.item);

    req1 = {
            method: 'PATCH',
            url:$rootScope.ruta+"proyectos/"+$scope.item.proyecto_id,
            
            data: {
              
              saldo: $scope.saldoActual
              
            }
        }
        $http(req1)
          .success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            //$location.path('/proyecto');
            
          })
          .error(function (response){
            console.log(response);
            alert("Ha fallado la petición. Estado HTTP:"+status);
            $location.path('/proyecto');
          });
  
  };

  $scope.update = function(){
    console.log($scope.item);
    console.log($scope.saldoActual);
    console.log($scope.item.monto);
    console.log($scope.saldo);
    $scope.saldoActual = $scope.saldoActual - $scope.item.monto + $scope.saldo;
    console.log($scope.saldoActual);
    
    req1 = {
            method: 'PATCH',
            url:$rootScope.ruta+"proyectos/"+$scope.item.proyecto_id,
            
            data: {
              
              saldo: $scope.item.saldoActual
              
            }
        }
        $http(req1)
          .success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            //$location.path('/proyecto');
            
          })
          .error(function (response){
            console.log(response);
            alert("Ha fallado la petición. Estado HTTP:"+status);
            $location.path('/proyecto');
          });

    req = {
          method: 'PATCH',
          url:$rootScope.ruta+"solins/"+$scope.item.id,
          
          data: {
            proyecto_id: $scope.item.proyecto_id,
            usuario_cr_id: $rootScope.users.id,
            usuario_c_id: 1,
            usuario_a_id: 1,
            monto: $scope.item.monto,
            montoL: $scope.item.montoL,
            descripcion: $scope.item.descripcion,
            pago: $scope.item.pago,
            n_pago: $scope.item.n_pago,
            status: 0,
            comprobantes: $scope.item.comprobantes
          }
      }
      $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          $location.path('/');
        });
  };

  $scope.verificarMonto = function(num)
  {
    console.log($scope.saldoActual)
    if(num < $scope.saldoActual)
    {
      $scope.saldoVigente = num;
      NumeroALetras(num);
      $scope.aut = 0;
    }
    else
    {
      console.log("El monto solicitado supera el saldo del Proyecto");
      $scope.aut = 1;
    }
  };

  $scope.verificar = function()
  {
    console.log($scope.item.proyecto_id);
    for (var i = 0; i < $rootScope.proyectos.length; i++) {
      if ($rootScope.proyectos[i].proyecto_id == $scope.item.proyecto_id) 
      {
        console.log($rootScope.proyectos[i]);
        $scope.saldoActual = $rootScope.proyectos[i].saldoProyecto;
        console.log($scope.saldoActual);
      }
    }
    
  };




  function Unidades(num){

    switch(num)
    {
        case 1: return "UN";
        case 2: return "DOS";
        case 3: return "TRES";
        case 4: return "CUATRO";
        case 5: return "CINCO";
        case 6: return "SEIS";
        case 7: return "SIETE";
        case 8: return "OCHO";
        case 9: return "NUEVE";
    }

    return "";
}//Unidades()

function Decenas(num){

    var decena = Math.floor(num/10);
    var unidad = (num) - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return "DIEZ";
                case 1: return "ONCE";
                case 2: return "DOCE";
                case 3: return "TRECE";
                case 4: return "CATORCE";
                case 5: return "QUINCE";
                default: return "DIECI" + Unidades(unidad);
            }
        case 2:
            switch(unidad)
            {
                case 0: return "VEINTE";
                default: return "VEINTI" + Unidades(unidad);
            }
        case 3: return DecenasY("TREINTA", unidad);
        case 4: return DecenasY("CUARENTA", unidad);
        case 5: return DecenasY("CINCUENTA", unidad);
        case 6: return DecenasY("SESENTA", unidad);
        case 7: return DecenasY("SETENTA", unidad);
        case 8: return DecenasY("OCHENTA", unidad);
        case 9: return DecenasY("NOVENTA", unidad);
        case 0: return Unidades(unidad);
    }
}//Unidades()

function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
    return strSin + " Y " + Unidades(numUnidades)

    return strSin;
}//DecenasY()

function Centenas(num) {
    var centenas = Math.floor(num / 100);
    var decenas = (num) - (centenas * 100);

    switch(centenas)
    {
        case 1:
            if (decenas > 0)
                return "CIENTO " + Decenas(decenas);
            return "CIEN";
        case 2: return "DOSCIENTOS " + Decenas(decenas);
        case 3: return "TRESCIENTOS " + Decenas(decenas);
        case 4: return "CUATROCIENTOS " + Decenas(decenas);
        case 5: return "QUINIENTOS " + Decenas(decenas);
        case 6: return "SEISCIENTOS " + Decenas(decenas);
        case 7: return "SETECIENTOS " + Decenas(decenas);
        case 8: return "OCHOCIENTOS " + Decenas(decenas);
        case 9: return "NOVECIENTOS " + Decenas(decenas);
    }

    return Decenas(decenas);
}//Centenas()

function Seccion(num, divisor, strSingular, strPlural) {
    var cientos = Math.floor(num / divisor)
    var resto = (num) - (cientos * divisor)

    var letras = "";

    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + " " + strPlural;
        else
            letras = strSingular;

    if (resto > 0)
        letras += "";

    return letras;
}//Seccion()

function Miles(num) {
    var divisor = 1000;
    var cientos = Math.floor(num / divisor)
    var resto = (num) - (cientos * divisor)

    var strMiles = Seccion(num, divisor, "UN MIL", "MIL");
    var strCentenas = Centenas(resto);

    if(strMiles == "")
        return strCentenas;

    return strMiles + " " + strCentenas;
}//Miles()

function Millones(num) {
    var divisor = 1000000;
    var cientos = Math.floor(num / divisor)
    var resto = (num) - (cientos * divisor)

    var strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    var strMiles = Miles(resto);

    if(strMillones == "")
        return strMiles;

    return strMillones + " " + strMiles;
}//Millones()

 var NumeroALetras = function(num) {
    var data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
        letrasMonedaPlural: 'PESOS 00/100 M. N.',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
        letrasMonedaSingular: 'PESOS 00/100 M. N.', //"PESO", 'Dólar', 'Bolivar', 'etc'

        letrasMonedaCentavoPlural: "CENTAVOS",
        letrasMonedaCentavoSingular: "CENTAVO"
    };

    if (data.centavos > 0) {
        data.letrasCentavos = "CON " + (function (){
            if (data.centavos == 1)
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
            else
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
            })();
    };

    if(data.enteros == 0){
      console.log("CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos);
      $scope.item.montoL = "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
        return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    }
    if (data.enteros == 1){
      console.log(Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos);
      $scope.item.montoL = Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
        return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
    }
    else{
      console.log(Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos);
      $scope.item.montoL = Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
        return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    }
}//NumeroALetras()

}]);