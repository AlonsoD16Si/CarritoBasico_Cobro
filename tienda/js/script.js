const ventaForm = document.getElementById('venta-form');
const subtotalElement = document.getElementById('subtotal');
const ivaElement = document.getElementById('iva');
const totalElement = document.getElementById('total');
const nuevaVentaButton = document.getElementById('venta-nueva');

let subtotal = 0;
let iva = 0;
let total = 0;

ventaForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const producto = ventaForm.producto.value;
    const precio = parseFloat(ventaForm.precio.value);
    const cantidad = parseInt(ventaForm.cantidad.value);
    const metodoPago = ventaForm['metodo-pago'].value;

    subtotal = precio * cantidad;

    if (metodoPago === 'credito' || metodoPago === 'debito') {
        iva = subtotal * 0.16;
    } else {
        iva = 0;
    }
    //Alonso Daniel Lopez Silva//

    total = subtotal + iva;

    subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    ivaElement.textContent = `IVA (16%): $${iva.toFixed(2)}`;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;

});

    nuevaVentaButton.addEventListener('click', function () {

        subtotal = 0;
        iva = 0;
        total = 0;

        subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        ivaElement.textContent = `IVA (16%): $${iva.toFixed(2)}`;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        
        ventaForm.reset();
    });
