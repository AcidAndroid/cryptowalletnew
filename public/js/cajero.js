/*
input html
filtrar solo los que pudieran ser billetes mexicanos 10,20,50,100,200,500(es decir solo lo que cabe entre 10)
representar con las denominaciones de billetes minimas que se necesita para obtener las cantidades
enviar a cesar.gutz93@gmail.com
*/

//Billete disponibles 
const billetes = [500, 200, 100, 50, 20, 10]

//Filtra los monto que solo son validos
const filtrarValidos = a =>
    a.filter(valor => valor % 10 === 0)

let montosValidados = filtrarValidos([50, 130, 430, 1, 10, 80, 55, 200, 478.6, 4896.4, 10300, 600, 100, 800, 140, 47, 488, 521])
    //console.log(filtrarValidos([1, 10, 80, 55, 200, 478.6, 4896.4, 10300]))

//realiza la entrega de los billetes segun el monto ingresado
module.exports.entrega = (montosDesaados) => {
    //return montosValidados.map((valor, indice) => {
    return filtrarValidos(montosDesaados).map((valor, indice) => {
        return representacion(valor)
    });
}

//Clase para representar el desglose de los billetes
class Desglose {
    constructor(cantidadBilletes, valorBillete, resto) {
        this._cantidadBilletes = cantidadBilletes;
        this._valorBillete = valorBillete
        this._resto = resto;
    }

}
//Representa con cuantos billetes se puede representar el monto solicitado
const representacion = (monto) => {
    let _cantidad = 0
    let resto = monto
    let desgloseBilletes = []

    billetes.map((billete, indiceBilletes) => {

        //console.log(`Monto: ${monto} Billete actual: ${billete} en el indice ${indiceBilletes}`)
        _cantidad = Math.floor(monto / billete)


        //En caso de que la division del monto entre billetes de un numero entero
        if (_cantidad > 0) {
            var obj = new Desglose(_cantidad, billete, monto % billete)
                // obj.cantidadBilletes = _cantidad
                // obj.valorBillete = billete
                // obj.resto = monto % billete
            monto = obj._resto;
            //console.log(obj);
            desgloseBilletes.push(obj);
            // console.log(desgloseBilletes.length)
        }


    });
    return desgloseBilletes;
}




//console.log(representacion(5000))
// console.log('Otro monto')
// console.log(Representacion(5280))

//console.log(montosValidados)
//console.log(entrega([4720]))
// module.exports.filtrarValidos = filtrarValidos()
// module.exports.entrega = entrega()