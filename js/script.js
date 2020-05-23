document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    var enviar = document.getElementById("enviar");
    let tipo_incidente = document.getElementById("tipo_incidente");
    let dispositivo_afectado = document.getElementById("dispositivo_afectado");
    var fases = document.getElementById("fases");

    document.addEventListener('change', function() {
        if (tipo_incidente.value == "sin_servicio") {

            fases.style.display = "flex";

        } else {
            fases.style.display = "none";
        }
        if (tipo_incidente.value == "alumbrado_publico") {

            dispositivo_afectado.innerHTML = "<option value='iluminaria'>Iluminaria</option>";

        }
    });

    dispositivo_afectado.addEventListener('change', function() {

        tipo_incidente = document.getElementById("tipo_incidente");
        if (dispositivo_afectado.value == "iluminaria") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Luminarias afectadas";
        } else if (dispositivo_afectado.value == "codigo") {
            document.getElementById("onchange_dispositivo").innerHTML = "Codigo de Puesto";
        } else if (dispositivo_afectado.value == "puente") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Poste";
        } else if (dispositivo_afectado.value == "poste") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Poste";
        } else if (dispositivo_afectado.value == "trafo") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Trafo";
        } else {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Dispositivo";
        }
    });

    enviar.addEventListener('click', function() {

        let numero_incidente = document.getElementById("numero_incidente").value;
        let comentario_incidente = document.getElementById("incidente_asociado").value;
        let incidentes = comentario_incidente.split(" ");
        tipo_incidente = document.getElementById("tipo_incidente");
        let text_accidente = tipo_incidente.options[tipo_incidente.selectedIndex].text;
        dispositivo_afectado = document.getElementById("dispositivo_afectado");
        let text_dispositivo = dispositivo_afectado.options[dispositivo_afectado.selectedIndex].text;
        let nombre_dispositivo = document.getElementById("nombre_dispositivo").value;
        let fecha = document.getElementById("fecha");
        let hora = document.getElementById("hora");
        let causa = document.getElementById("causa_incidente");
        let detalle = document.getElementById("detalle_problema");
        let otro_detalle = document.getElementById("otro_detalle");
        let comentario = document.getElementById("comentario_informe");

        document.getElementById("no_incidente_table").innerHTML = `<p>${numero_incidente}</p>`;

        for (let i = 0; i < incidentes.length; i++) {
            let text = document.createTextNode(incidentes[i]);
            let incidente = document.createElement("p");
            incidente.appendChild(text);
            document.getElementById("incidentes_asociados_table").appendChild(incidente);
        }

        document.getElementById("tipo_incidente_table").innerHTML = `<p>${text_accidente}</p>`;
        document.getElementById("dispositivo_afectado_table").innerHTML = `<p>${text_dispositivo}</p>`;
        document.getElementById("no_dispositivo_table").innerHTML = `<p>${nombre_dispositivo}</p>`;

    });

});