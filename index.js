class Sala{
  capacidadInicial; // esta varible la utilizare adelante para saber la capcidad inicial del cine ya sea 30 20 o 10 
  capacidad; // esta variable la voy a utilizar para ir restando la capacidad cada vez que compren boletos 
  monto = 0; // esta variable la voy a utilzar para ir agregando el monto cada vez que alguien compre un boleto
  
  constructor(capacidad){
    this.capacidad = capacidad; // esto lo necesitamos el constructor ya que no todas las salas tienen la misma capacidad
    this.capacidadInicial = this.capacidad;  // esto es para sacar un calculo de cuantas entradas fueron vendidas con el numero inicial
  }

  // esta accion o funcion me permite comprar un boleto 
  comprarBoleto(adulto){

    // esta es una condicional, hago el llamado de la capacidad del cine y digo que si es igual a 0 osea no hay boletos entonces que termine la ejecucion
    if(this.capacidad === 0){
      console.log('no hay mas asientos en el cine')
      return;
    }

    // si hay asientos restamos la capacidad;
    this.capacidad = this.capacidad - 1;

    // verificamos si el cinefilo es niño o adulto, en caso de ser adulto se cobra 2$
    if(adulto === true){
      this.monto = this.monto + 2;
      return;
    }
    this.monto = this.monto + 1;
  }

  // esto es para saber el monto total recaudado;
  saberMonto(){
    console.log('el monto total es ', this.monto);
    return this.monto;
  }

  // esto es para saber cuantas entradas vendio la pelicula
  conocerEntradasVendidas(){
    console.log('se vendieron numero de entradas: ', this.capacidadInicial - this.capacidad);
  }
}


// OPERACIONES PARA SALA 1 ACA TENGO 2 CINEFILOS 1 NINO Y UN ADULTO
const sala1 = new Sala(30);
sala1.comprarBoleto(true);
sala1.comprarBoleto(false);
sala1.saberMonto();
sala1.conocerEntradasVendidas();

// OPERACIONES PARA SALA 2; ACA NO TENGO CINEFILOS
const sala2 = new Sala(20);

// OPERACIONES PARA SALA 3 ACA NO TENGO CINEFILOS
const sala3 = new Sala(10);

// CALCULO PARA CONOCER EL MONTO TOTAL RECAUDADO ENTRE LAS 3 SALAS

const montoTotal = sala1.saberMonto() + sala2.saberMonto() + sala3.saberMonto();

console.log(montoTotal);