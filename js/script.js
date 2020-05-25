document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let informe = document.getElementById("informe_container");
    let formulario = document.getElementById("main_form");
    let nuevo_informe = document.getElementById("nuevo_informe");
    let modificar_informe = document.getElementById("modificar_informe");
    var enviar = document.getElementById("enviar");
    let tipo_incidente = document.getElementById("tipo_incidente");
    let dispositivo_afectado = document.getElementById("dispositivo_afectado");
    let componente = document.getElementById("componente_falla");
    let detalle = document.getElementById("detalle_problema");
    let causa = document.getElementById("causa_incidente");
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
            document.getElementById("dispositivo_table").innerHTML = "Numero de Luminarias afectadas";
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Luminarias afectadas";
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
        } else if (dispositivo_afectado.value == "medidor_dispositivo") {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Medidor";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Medidor";
        } else {
            document.getElementById("onchange_dispositivo").innerHTML = "Numero de Dispositivo";
            document.getElementById("dispositivo_table").innerHTML = "Numero de Dispositivo";
        }

        if (dispositivo_afectado.value == "otro") {
            document.getElementById("otro_dispositivo").style.display = "flex";
        } else {
            document.getElementById("otro_dispositivo").style.display = "none";
        }
    });

    causa.addEventListener('change', function() {
        if (causa.value == "otro") {
            document.getElementById("otra_causa").style.display = "flex";
        } else {
            document.getElementById("otra_causa").style.display = "none";
        }
    });

    componente.addEventListener('change', function() {
        if (componente.value == "otro") {
            document.getElementById("otro_componente").style.display = "flex";
        } else {
            document.getElementById("otro_componente").style.display = "none";
        }
    });

    detalle.addEventListener('change', function() {
        if (detalle.value == "otro") {
            document.getElementById("otro_detalle").style.display = "flex";
        } else {
            document.getElementById("otro_detalle").style.display = "none";
        }
    });

    enviar.addEventListener('click', function() {

        formulario.style.display = "none";
        window.scrollTo(0, 0);
        informe.style.display = "block";

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
        causa = document.getElementById("causa_incidente");
        let causa_text = causa.options[causa.selectedIndex].text;
        componente = document.getElementById("componente_falla");
        let componente_text = componente.options[componente.selectedIndex].text;
        detalle = document.getElementById("detalle_problema");
        let detalle_text = detalle.options[detalle.selectedIndex].text;
        let comentario = document.getElementById("comentario_informe").value;
        let paragraph = document.createElement("p");

        document.getElementById("no_incidente_table").innerHTML = `<p>${numero_incidente}</p>`;



        enviar.addEventListener('click', function() {
            document.getElementById("incidentes_asociados_table").removeChild(paragraph);
        });

        for (let i = 0; i < incidentes.length; i++) {
            paragraph.innerHTML += incidentes[i] + "<br>";
        }

        document.getElementById("incidentes_asociados_table").appendChild(paragraph);
        document.getElementById("tipo_incidente_table").innerHTML = `<p>${text_accidente}</p>`;

        if (dispositivo_afectado.value == "otro") {
            document.getElementById("dispositivo_afectado_table").innerHTML = `<p>${document.getElementById("otro_dispositivo_text").value}</p>`;
        } else {
            document.getElementById("dispositivo_afectado_table").innerHTML = `<p>${text_dispositivo}</p>`;
        }
        document.getElementById("no_dispositivo_table").innerHTML = `<p>${nombre_dispositivo}</p>`;
        document.getElementById("fases_afectadas_table").innerHTML = `<p>${fases_afectadas}</p>`;
        document.getElementById("fecha_hora_table").innerHTML = `<p>Fecha ${fecha.value} <br> <br>Hora ${hora.value}</p>`;
        if (dispositivo_afectado.value == "otro") {
            document.getElementById("causa_table").innerHTML = `<p>${document.getElementById("otra_causa_text").value}</p>`;
        } else {
            document.getElementById("causa_table").innerHTML = `<p>${causa_text}</p>`;
        }
        document.getElementById("componente_table").innerHTML = `<p>${componente_text}</p>`;
        document.getElementById("detalle_table").innerHTML = `<p>${detalle_text}</p>`;
        document.getElementById("comentario_table").innerHTML = `<p>${comentario}</p>`;

    });

    modificar_informe.addEventListener('click', function() {

        formulario.style.display = "block";
        window.scrollTo(0, 0);
        informe.style.display = "none";

    });

    nuevo_informe.addEventListener('click', function() {

        location.reload();
        window.scrollTo(0, 0);

    });

    $boton = document.querySelector("#confirmar");

    $boton.addEventListener("click", function() {
        
        $shareWpp.href = `whatsapp://send?text= +------------------------------------+
                                                Numero Incidente = ${numero_incidente}
                                                Incidentes Asociados = ${numero_incidente}
                                                +------------------------------------+
`;

    }); 

});