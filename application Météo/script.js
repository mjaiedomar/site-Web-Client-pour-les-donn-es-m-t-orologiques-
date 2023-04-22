
fetch('temperatures_2022.json')
    .then(result => { return result.json() })
    .then(data /*objet JSON en mémoire*/ => {
        // date d'aujourd'hui
        let date = new Date();
        //trouver le jour en 2 digits
        let day = date.getDate()
        if (date.getDate() < 10)
            day = '0' + date.getDate()
        //trouver le mois en 2 digits
        let month = date.getMonth() + 1
        if (date.getMonth() < 10)
            month = '0' + (date.getMonth() + 1)

        let today = date.getFullYear() + '-' + month + '-' + day

        //bloc d'affichage d'aujourd'hui
        for (let index = 0; index < data.temperatures.length; index++) {
            if (data.temperatures[index].DateDuJour == today) {

                document.getElementById('tempToday').innerHTML = 'Nous sommes le : ' + today
                    + ", Température : " + data.temperatures[index].Temp + " °C "
                    + ",Température Min : " + data.temperatures[index].MinTemp + " °C "
                    + ",Température Max : " + data.temperatures[index].MaxTemp + " °C "
                    +  "<tr><td><img bg-warning src='" + getImage(data.temperatures[index].Temp) + "'</td>" +
                    "</tr>";
            }

        }
    });

let table = document.createElement('table')
let thead = document.createElement('thead');
let estm = document.createElement('p');
let estm2 = document.createElement('p');
// fonction pour prevision de 3 jours
function previsions3jours() {
    fetch('temperatures_2022.json')
        .then(result => { return result.json() })
        .then(data /*objet JSON en mémoire*/ => {
            //traitement
            // date d'aujourd'hui
            let date = new Date();
            //trouver le jour en 2 digits
            let day = date.getDate()
            if (date.getDate() < 10)
                day = '0' + date.getDate()
            //trouver le mois en 2 digits
            let month = date.getMonth() + 1
            if (date.getMonth() < 10)
                month = '0' + (date.getMonth() + 1)

            let today = date.getFullYear() + '-' + month + '-' + day

            //bloc de previsions 3 jours
            let div3Jours = document.getElementById('previsions3jours')
            var icones = document.getElementsByName('icone')
            //chercher la temperature d'aujourd'hui
            for (let j = 0; j < table.rows.length + 31; j++) {
                table.deleteRow(-1)
            }
             estm.remove()
             estm2.remove()
            for (let index = 0; index < data.temperatures.length; index++) {

                if (data.temperatures[index].DateDuJour == today) {
                    var tempJour = data.temperatures[index].Temp;
                    document.getElementById('tempToday').innerHTML = 'Nous sommes le : ' + today
                        + ", Température : " + data.temperatures[index].Temp + " °C "
                        + ",Température Min : " + data.temperatures[index].MinTemp + " °C "
                        + ",Température Max : " + data.temperatures[index].MaxTemp + " °C " 
                        +  "<tr><td><img bg-warning src='" + getImage(data.temperatures[index].Temp) + "'</td>" +
                        "</tr>";
                    //insérer dynamiquement 3 nouvelles prévisions
                    thead = "<tr><th>" + 'Date de jour' + "</th>" +

                        "<th>" + 'Temperature' + "</th>" +

                        "<th>" + 'MaxTemp' + "</th>" +

                        "<th>" + 'MinTemp' + "</th>" +

                        "<th>image</th>" +

                        "</tr>";
                    table.innerHTML += thead;
                    for (let i = 0; i < 3; i++) {
                        //créer un paragraphe
                        //nom de la balise à créer

                        var tempJour = data.temperatures[index + i + 1].DateDuJour

                        var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +

                            "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +

                            "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +

                            "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +

                            "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +

                            "</tr>";

                        table.innerHTML += row;
                        div3Jours.appendChild(table)

                    }
                    break

                }
            }
        }

        )
}
//fonction pour afficher l'econe de météo
function getImage(TempJ) {

    if (TempJ <= 0) {
        let image = document.createElement('img')
        return 'imgs/neige.jpg'
    } else if (0 < TempJ && TempJ <= 10) {
        let image = document.createElement('img')
        return 'imgs/pluie.jpg'
    } else if (10 < TempJ && TempJ < 20) {
        let image = document.createElement('img')
        return 'imgs/nuage.jpg'
    } else {
        let image = document.createElement('img')
        return 'imgs/soleil.jpg'
    }
}

// fonction pour prevision de 7 jours
function previsions7jours() {
    fetch('temperatures_2022.json')
        .then(result => { return result.json() })
        .then(data /*objet JSON en mémoire*/ => {
            //traitement
            // date d'aujourd'hui
            let date = new Date();
            //trouver le jour en 2 digits
            let day = date.getDate()
            if (date.getDate() < 10)
                day = '0' + date.getDate()
            //trouver le mois en 2 digits
            let month = date.getMonth() + 1
            if (date.getMonth() < 10)
                month = '0' + (date.getMonth() + 1)

            let today = date.getFullYear() + '-' + month + '-' + day

            let div7Jours = document.getElementById('previsions3jours')
            var icones = document.getElementsByName('icone')
            //chercher la temperature d'aujourd'hui
            for (let j = 0; j < table.rows.length + 31; j++) {
                table.deleteRow(-1)
            }
            estm.remove()
            estm2.remove()
            for (let index = 0; index < data.temperatures.length; index++) {

                if (data.temperatures[index].DateDuJour == today) {
                    var tempJour = data.temperatures[index].Temp;
                    document.getElementById('tempToday').innerHTML = 'Nous sommes le : ' + today
                        + ", Température : " + data.temperatures[index].Temp + " °C "
                        + ",Température Min : " + data.temperatures[index].MinTemp + " °C "
                        + ",Température Max : " + data.temperatures[index].MaxTemp + " °C "
                        +  "<tr><td><img bg-warning src='" + getImage(data.temperatures[index].Temp) + "'</td>" +
                        "</tr>";
                    thead = "<tr><th>" + 'Date de jour' + "</th>" +

                        "<th>" + 'Temperature' + "</th>" +

                        "<th>" + 'MaxTemp' + "</th>" +

                        "<th>" + 'MinTemp' + "</th>" +

                        "<th>image</th>" +

                        "</tr>";
                    table.innerHTML += thead;
                    for (let i = 0; i < 7; i++) {
                        //créer un paragraphe
                        //nom de la balise à créer
                        var tempJour = data.temperatures[index + i + 1].DateDuJour

                        var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +

                            "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +

                            "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +

                            "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +

                            "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +

                            "</tr>";

                        table.innerHTML += row;

                        div7Jours.appendChild(table)

                    }
                    break

                }
            }
        }

        )
}
// fonction pour prevision de 14 jours
function previsions14jours() {
    fetch('temperatures_2022.json')
        .then(result => { return result.json() })
        .then(data /*objet JSON en mémoire*/ => {
            //traitement
            // date d'aujourd'hui
            let date = new Date();
            //trouver le jour en 2 digits
            let day = date.getDate()
            if (date.getDate() < 10)
                day = '0' + date.getDate()
            //trouver le mois en 2 digits
            let month = date.getMonth() + 1
            if (date.getMonth() < 10)
                month = '0' + (date.getMonth() + 1)

            let today = date.getFullYear() + '-' + month + '-' + day

            let div14Jours = document.getElementById('previsions14jours')
            var icones = document.getElementsByName('icone')
            //chercher la temperature d'aujourd'hui
            for (let j = 0; j < table.rows.length + 31; j++) {
                table.deleteRow(-1)
            }
            estm.remove()
            estm2.remove()
            for (let index = 0; index < data.temperatures.length; index++) {

                if (data.temperatures[index].DateDuJour == today) {
                    var tempJour = data.temperatures[index].Temp;
                    document.getElementById('tempToday').innerHTML = 'Nous sommes le : ' + today
                        + ", Température : " + data.temperatures[index].Temp + " °C "
                        + ",Température Min : " + data.temperatures[index].MinTemp + " °C "
                        + ",Température Max : " + data.temperatures[index].MaxTemp + " °C "
                        +  "<tr><td><img bg-warning src='" + getImage(data.temperatures[index].Temp) + "'</td>" +
                        "</tr>";
                    thead = "<tr><th>" + 'Date de jour' + "</th>" +

                        "<th>" + 'Temperature' + "</th>" +

                        "<th>" + 'MaxTemp' + "</th>" +

                        "<th>" + 'MinTemp' + "</th>" +

                        "<th>image</th>" +

                        "</tr>";
                    table.innerHTML += thead;
                    for (let i = 0; i < 14; i++) {
                        //créer un paragraphe
                        //nom de la balise à créer

                        var tempJour = data.temperatures[index + i + 1].DateDuJour

                        var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +

                            "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +

                            "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +

                            "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +

                            "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +

                            "</tr>";

                        table.innerHTML += row;

                        div14Jours.appendChild(table)

                    }
                    break

                }
            }
        }

        )
}


// liste du choix
function creerMois() {
    let tab = ["----------", "Septembre", "Octobre", "Novembre", "Décembre"]
    //le parent
    let parent = document.getElementById('liste')
    let date = new Date();
    if (parent.children.length == 0) {
        //créer les enfants options
        for (let index = 0; index < tab.length; index++) {
            let option = document.createElement('option')
            option.innerHTML = tab[index];
            parent.appendChild(option)
        }
    }
}
//fonction pour estimation mois septembre, octobre, novembre, decembre

function estimation() {
    fetch('temperatures_2022.json')
        .then(result => { return result.json() })
        .then(data /*objet JSON en mémoire*/ => {
            let div14Jours = document.getElementById('previsions14jours')
            let estmaff= document.getElementById('Statistique')
            let estmaff2= document.getElementById('Statistique1')
            let parent = document.getElementById("liste")
            let date = new Date();
            if (parent.selectedIndex == 1) {
                for (let j = 0; j < table.rows.length + 31; j++) {
                    table.deleteRow(-1)
                }
                for (let index = 0; index < data.temperatures.length; index++) {

                    if (data.temperatures[index].DateDuJour == "2022-09-01") {
                        MaxTempDay = data.temperatures[index].MaxTemp
                        MinTempDay = data.temperatures[index].MinTemp
                        thead = "<tr><th>" + 'Date de jour' + "</th>" +

                            "<th>" + 'Temperature' + "</th>" +

                            "<th>" + 'MaxTemp' + "</th>" +

                            "<th>" + 'MinTemp' + "</th>" +

                            "<th>image</th>" +

                            "</tr>";
                        table.innerHTML += thead;
                        for (let i = -1; i < 29; i++) {
                            //créer un paragraphe
                            //nom de la balise à créer

                            var tempJour = data.temperatures[index + i + 1].DateDuJour

                            var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +

                                "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +

                                "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +

                                "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +

                                "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +

                                "</tr>";

                            table.innerHTML += row;

                            div14Jours.appendChild(table)
                            if (data.temperatures[index + i + 1].MaxTemp>MaxTempDay)
                            {
                                MaxTempDay = data.temperatures[index + i + 1].MaxTemp 
                               
                                var estima = 'Le jour le plus chaux: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "
                                
                                estm.innerHTML = estima
                                estm.style.color="red"
                            }
                              estmaff.appendChild(estm)
                            if (data.temperatures[index + i + 1].MaxTemp<MinTempDay)
                            {
                               
                                MinTempDay = data.temperatures[index + i + 1].MinTemp 
                               
                                var estima2 = 'Le jour le plus froid: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "
                                estm2.innerHTML = estima2
                                estm2.style.color="blue"
                            }
                            estmaff2.appendChild(estm2)

                        }

                    }
                }

            }

            else if (parent.selectedIndex == 2) {
                for (let j = 0; j < table.rows.length + 31; j++) {
                    table.deleteRow(-1)
                }
                for (let index = 0; index < data.temperatures.length; index++) {

                    if (data.temperatures[index].DateDuJour == "2022-10-01") {
                        MaxTempDay = data.temperatures[index].MaxTemp
                        MinTempDay = data.temperatures[index].MinTemp
                        thead = "<tr><th>" + 'Date de jour' + "</th>" +

                            "<th>" + 'Temperature' + "</th>" +

                            "<th>" + 'MaxTemp' + "</th>" +

                            "<th>" + 'MinTemp' + "</th>" +

                            "<th>image</th>" +

                            "</tr>";
                        table.innerHTML += thead;
                        for (let i = -1; i < 30; i++) {
                            //créer un paragraphe

                            var tempJour = data.temperatures[index + i + 1].DateDuJour

                            var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +

                                "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +

                                "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +

                                "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +

                                "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +

                                "</tr>";

                            table.innerHTML += row;

                            div14Jours.appendChild(table)
                            if (data.temperatures[index + i + 1].MaxTemp>MaxTempDay)
                            {
                                MaxTempDay = data.temperatures[index + i + 1].MaxTemp 
                               
                                var estima = 'Le jour le plus chaux: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "

                                estm.innerHTML = estima
                                estm.style.color="red"
                            }
                              estmaff.appendChild(estm)
                            if (data.temperatures[index + i + 1].MaxTemp<MinTempDay)
                            {
                               
                                MinTempDay = data.temperatures[index + i + 1].MinTemp 
                               
                                var estima2 = 'Le jour le plus froid: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "
                                estm2.innerHTML = estima2
                                estm2.style.color="blue"
                            }
                            estmaff2.appendChild(estm2)

                        }

                    }
                }
            }
            else  if (parent.selectedIndex == 3) {
                for (let j = 0; j < table.rows.length + 31; j++) {
                    table.deleteRow(-1)
                }
               
                for (let index = 0; index < data.temperatures.length; index++) {

                    if (data.temperatures[index].DateDuJour == "2022-11-01") {
                        MaxTempDay = data.temperatures[index].MaxTemp
                        MinTempDay = data.temperatures[index].MinTemp
                        thead = "<tr><th>" + 'Date de jour' + "</th>" +

                            "<th>" + 'Temperature' + "</th>" +

                            "<th>" + 'MaxTemp' + "</th>" +

                            "<th>" + 'MinTemp' + "</th>" +

                            "<th>image</th>" +

                            "</tr>";
                        table.innerHTML += thead;
                        for (let i = -1; i < 29; i++) {
                            //créer un paragraphe
                            //nom de la balise à créer

                            var tempJour = data.temperatures[index + i + 1].DateDuJour

                            var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +

                                "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +

                                "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +

                                "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +

                                "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +

                                "</tr>";

                            table.innerHTML += row;

                            div14Jours.appendChild(table)
                            if (data.temperatures[index + i + 1].MaxTemp>MaxTempDay)
                            {
                                MaxTempDay = data.temperatures[index + i + 1].MaxTemp 
                               
                                var estima = 'Le jour le plus chaux: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "

                                estm.innerHTML = estima
                                estm.style.color="red"
                            }
                              estmaff.appendChild(estm)
                            if (data.temperatures[index + i + 1].MaxTemp<MinTempDay)
                            {
                               
                                MinTempDay = data.temperatures[index + i + 1].MinTemp 
                               
                                var estima2 = 'Le jour le plus froid: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "
                                estm2.innerHTML = estima2
                                estm2.style.color="blue"
                            }
                            estmaff2.appendChild(estm2)
                        }

                    }
                }

            }
else if (parent.selectedIndex == 4) {
                for (let j = 0; j < table.rows.length + 31; j++) {
                    table.deleteRow(-1)
                }
                estima = document.getElementById('Statistique1')
                for (let index = 0; index < data.temperatures.length; index++) {
                   
                    if (data.temperatures[index].DateDuJour == "2022-12-01") {
                        MaxTempDay = data.temperatures[index].MaxTemp
                        MinTempDay = data.temperatures[index].MinTemp
                        thead = "<tr><th>" + 'Date de jour' + "</th>" +

                            "<th>" + 'Temperature' + "</th>" +

                            "<th>" + 'MaxTemp' + "</th>" +

                            "<th>" + 'MinTemp' + "</th>" +

                            "<th>image</th>" +

                            "</tr>";
                        table.innerHTML += thead;
                        for (let i = -1; i < 30; i++) {
                            
                            //créer un paragraphe
                            var tempJour = data.temperatures[index + i + 1].DateDuJour
                            var row = "<tr><td>" + data.temperatures[index + i + 1].DateDuJour + "</td>" +
                                    "<td>" + data.temperatures[index + i + 1].Temp + " °C "+ "</td>" +
                                    "<td>" + data.temperatures[index + i + 1].MaxTemp + " °C "+ "</td>" +
                                    "<td>" + data.temperatures[index + i + 1].MinTemp + " °C "+ "</td>" +
                                    "<td><img bg-warning src='" + getImage(data.temperatures[index + i + 1].Temp) + "'</td>" +
                                 
                                "</tr>";
                            table.innerHTML += row;
                            
                            div14Jours.appendChild(table)

                            if (data.temperatures[index + i + 1].MaxTemp>MaxTempDay)
                            {
                                MaxTempDay = data.temperatures[index + i + 1].MaxTemp 
                               
                                var estima = 'Le jour le plus chaux: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "

                                estm.innerHTML = estima
                                estm.style.color="red"
                            }
                              estmaff.appendChild(estm)
                            if (data.temperatures[index + i + 1].MaxTemp<MinTempDay)
                            {
                               
                                MinTempDay = data.temperatures[index + i + 1].MinTemp 
                               
                                var estima2 = 'Le jour le plus froid: ' + data.temperatures[index + i + 1].DateDuJour
                                + ", Température : " + data.temperatures[index+ i + 1].Temp + " °C "
                                + ",Température Min : " + data.temperatures[index+ i + 1].MinTemp + " °C "
                                + ",Température Max : " + data.temperatures[index+ i + 1].MaxTemp + " °C "
                                estm2.innerHTML = estima2
                                estm2.style.color="blue"
                            }
                            estmaff2.appendChild(estm2)

                        }

                    }
                }
            }


        })

}
