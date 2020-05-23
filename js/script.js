document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    var enviar = document.getElementById("enviar");
    let tipo_incidente = document.getElementById("tipo_incidente");
    let dispositivo_afectado = document.getElementById("dispositivo_afectado");
    let iluminaria = document.getElementById("iluminaria");
    var fases = document.getElementById("fases");

    document.addEventListener('change', function() {

        if (tipo_incidente.value == "sin_servicio") {
            fases.style.display = "flex";
            document.getElementById("fases_afectadas_tr").style.display = "table-row";
        } else {
            fases.style.display = "none";
            document.getElementById("fases_afectadas_tr").style.display = "none";
        }
        if (tipo_incidente.value == "alumbrado_publico") {
            iluminaria.removeAttribute("hidden");
            iluminaria.setAttribute("selected", "");
            dispositivo_afectado.setAttribute("disabled", "");
        } else {
            iluminaria.setAttribute("hidden", "");
            dispositivo_afectado.removeAttribute("disabled");
            iluminaria.removeAttribute("selected");
        }
    });

    dispositivo_afectado.addEventListener('change', function() {

        tipo_incidente = document.getElementById("tipo_incidente");
        if (dispositivo_afectado.value == "iluminaria") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Luminarias afectadas";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Luminarias afectadas";
        } else if (dispositivo_afectado.value == "codigo") {
            document.getElementById("onchange_dispositivo").innerHTML = "Codigo de Puesto";
            document.getElementById("dispositivo_table").innerHTML = "Codigo de Puesto";
        } else if (dispositivo_afectado.value == "puente") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Poste";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Poste";
        } else if (dispositivo_afectado.value == "poste") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Poste";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Poste";
        } else if (dispositivo_afectado.value == "trafo") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Trafo";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Trafo";
        } else {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Dispositivo";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Dispositivo";
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
        let fases_afectadas = document.getElementById("fases_afectadas").value;
        let fecha = document.getElementById("fecha");
        let hora = document.getElementById("hora");
        let causa = document.getElementById("causa_incidente");
        let causa_text = causa.options[causa.selectedIndex].text;
        let componente = document.getElementById("componente_falla");
        let componente_text = componente.options[componente.selectedIndex].text;
        let detalle = document.getElementById("detalle_problema");
        let detalle_text = detalle.options[detalle.selectedIndex].text;
        let otro_detalle = document.getElementById("otro_detalle");
        let comentario = document.getElementById("comentario_informe").value;

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
        document.getElementById("fases_afectadas_table").innerHTML = `<p>${fases_afectadas}</p>`;
        document.getElementById("fecha_hora_table").innerHTML = `<p>Fecha ${fecha.value} <br> <br>Hora ${hora.value}</p>`;
        document.getElementById("causa_table").innerHTML = `<p>${causa_text}</p>`;
        document.getElementById("componente_table").innerHTML = `<p>${componente_text}</p>`;
        document.getElementById("detalle_table").innerHTML = `<p>${detalle_text}</p>`;
        document.getElementById("comentario_table").innerHTML = `<p>${comentario}</p>`;

    });

});