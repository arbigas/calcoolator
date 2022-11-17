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

    let mediaCpFormat = media1CPs;

    let mediaSem1 = (media1CPs * 0.4) + (gs * 0.6);

    let somaAnual1 = mediaSem1 * 0.4;


    const sem1 = [];
    sem1.push(disci, mediaCpFormat, gs, mediaSem1, somaAnual1);

    const tr = document.createElement('tr');

    sem1.forEach(e => {
        const td = document.createElement('td');
        td.textContent = e;

        tr.appendChild(td);
    });

    tbody.appendChild(tr);
    this.reset();
});