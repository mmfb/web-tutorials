
let base= new Date("2023/01/01");

function calc() {
    let horas = 0;
    for (let i=2; i<=6; i++ ) {
        let manha = diffHoras("im"+i,"fm"+i);
        let tarde = diffHoras("it"+i,"ft"+i);
        let totalDia = manha+tarde;
        document.getElementById("tot"+i).value = new Date(base.getTime()+totalDia).toLocaleTimeString();
        horas+=totalDia;    
    }
    document.getElementById("total").value = getTime(horas);
    let dias = document.getElementById("dias").value;
    let tempoDia = Date.parse("2023-01-01T"+document.getElementById("horas").value) - base;
    let todo = dias*tempoDia;
    let faltam = todo-horas;

    document.getElementById("faltam").value = getTime(faltam);
}


function getTime(milli) {
    let hours = Math.trunc(milli / 3600000);
    let mins = Math.abs((milli % 3600000) / 60000);
    let shours = hours.toFixed(0).padStart(2,"0");
    let smins = mins.toFixed(0).padStart(2,"0");
    return shours+":"+smins;
}



function diffHoras(idIni,idFim) {
    let ini = document.getElementById(idIni).value;
    let fim = document.getElementById(idFim).value;
    let diff = 0;
    if (ini && fim) {
        let dateIni = Date.parse("2023-01-01T"+ini);
        let dateFim = Date.parse("2023-01-01T"+fim);
        diff = dateFim - dateIni;
    }
    return diff;
}