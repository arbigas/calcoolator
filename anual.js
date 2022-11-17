const tbody = document.querySelector('tbody');
// console.log(tbody);

document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();

    const disci = document.querySelector("#disci").value
    const cp1 = Number(document.querySelector("#cp1").value);
    const cp2 = Number(document.querySelector("#cp2").value);
    const cp3 = Number(document.querySelector("#cp3").value);
    const sprint1 = Number(document.querySelector("#sprint1").value);
    const sprint2 = Number(document.querySelector("#sprint2").value);
    const gs = Number(document.querySelector("#gs").value);


    //verificando a menor nota dos CP's;
    const cp = [cp1, cp2, cp3];
    if (cp1 < cp2 && cp1 < cp3) {
        cp.splice(0, 1);
    } else if (cp2 < cp3) {
        cp.splice(1, 1);
    } else {
        cp.splice(2, 1);
    }

    //acrescentando no array cp as notas dos Sprints e gerando a média entre eles;
    cp.push(sprint1, sprint2);

    let somaCPs = 0;
    for (let i = 0; i < cp.length; i++) {
        somaCPs = +cp[i] + somaCPs;
    }
    let media1CPs = somaCPs / 4;    

    let mediaSem1 = (media1CPs * 0.4) + (gs * 0.6);

    let somaAnual1 = mediaSem1 * 0.4;


    //2° Semestre;
    const cp4 = Number(document.querySelector("#cp4").value);
    const cp5 = Number(document.querySelector("#cp5").value);
    const cp6 = Number(document.querySelector("#cp6").value);
    const sprint3 = Number(document.querySelector("#sprint3").value);
    const sprint4 = Number(document.querySelector("#sprint4").value);
    const gs2 = Number(document.querySelector("#gs2").value);



    //verificando a menor nota dos CP's;
    const CP = [cp4, cp5, cp6];
    if (cp4 < cp5 && cp4 < cp6) {
        CP.splice(0, 1);
    } else if (cp5 < cp6) {
        CP.splice(1, 1);
    } else {
        CP.splice(2, 1);
    }

    //acrescentando no array cp as notas dos Sprints e gerando a média entre eles;
    CP.push(sprint3, sprint4);

    let soma2CPs = 0;
    for (let i = 0; i < CP.length; i++) {
        soma2CPs = +CP[i] + soma2CPs;
    }
    let media2CPs = soma2CPs / 4;

    let mediaSem2 = (media2CPs * 0.4) + (gs2 * 0.6);

    let somaAnual2 = mediaSem2 * 0.6;

    // console.log(somaAnual1, somaAnual2);
    let mediaAnual = somaAnual1 + somaAnual2;
    mediaAnual.toFixed(1);

    const sem1 = [];
    sem1.push(disci, media1CPs, gs, mediaSem1, somaAnual1, media2CPs, gs2, mediaSem2, somaAnual2, mediaAnual);

    // console.log(cp1, cp2, cp3, cp4, cp5, cp6, sprint1, sprint2, sprint3, sprint4, gs, gs2);

    const tr = document.createElement('tr');

    sem1.forEach(e => {
        const td = document.createElement('td');
        td.textContent = e;

        tr.appendChild(td);
    });

    tbody.appendChild(tr);
    this.reset();
});