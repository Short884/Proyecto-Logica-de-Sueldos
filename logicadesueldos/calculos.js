function calcularAumento1() {
    const sueldo = parseFloat(document.getElementById('sueldo1').value);
    let nuevoSueldo = sueldo;

    if (sueldo < 1000) {
        nuevoSueldo = sueldo + (sueldo * 0.15);
    }

    document.getElementById('resultado1').innerText = `Nuevo Sueldo: $${nuevoSueldo.toFixed(2)}`;
}

function calcularAumento2() {
    const sueldo = parseFloat(document.getElementById('sueldo2').value);
    let nuevoSueldo;

    if (sueldo < 1000) {
        nuevoSueldo = sueldo + (sueldo * 0.15);
    } else {
        nuevoSueldo = sueldo + (sueldo * 0.12);
    }

    document.getElementById('resultado2').innerText = `Nuevo Sueldo: $${nuevoSueldo.toFixed(2)}`;
}

function calcularAumento3() {
    const sueldo = parseFloat(document.getElementById('sueldo3').value);
    const categoria = parseInt(document.getElementById('categoria').value);
    let nuevoSueldo = sueldo;

    switch (categoria) {
        case 1:
            nuevoSueldo = sueldo + (sueldo * 0.15);
            break;
        case 2:
            nuevoSueldo = sueldo + (sueldo * 0.12);
            break;
        case 3:
            nuevoSueldo = sueldo + (sueldo * 0.10);
            break;
        case 4:
            nuevoSueldo = sueldo + (sueldo * 0.08);
            break;
        default:
            alert("Categoría inválida. Ingrese un número entre 1 y 4.");
            return;
    }

    document.getElementById('resultado3').innerText = `Nuevo Sueldo: $${nuevoSueldo.toFixed(2)}`;
}
