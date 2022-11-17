const tbody = document.querySelector('tbody');
// console.log(tbody);

document.querySelector('form').addEventListener('submit', function (e) {
    console.log("funciona pelo menos");
    e.preventDefault();

    //2° Semestre;
    const disci = document.querySelector("#disci").value;
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
    let media2CPs = (soma2CPs / 4).toFixed(1);

    let mediaSem2 = (media2CPs * 0.4) + (gs2 * 0.6);
    mediaSem2 = mediaSem2.toFixed(1);

    let somaAnual2 = (mediaSem2 * 0.6).toFixed(1);


    const sem2 = [];
    sem2.push(disci, media2CPs, gs2, mediaSem2, somaAnual2);

    // console.log(cp1, cp2, cp3, cp4, cp5, cp6, sprint1, sprint2, sprint3, sprint4, gs, gs2);

    const tr = document.createElement('tr');

    sem2.forEach(e => {
        const td = document.createElement('td');
        td.textContent = e;

        tr.appendChild(td);
    });

    tbody.appendChild(tr);
    this.reset();
});