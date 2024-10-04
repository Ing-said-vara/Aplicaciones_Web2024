 // Obtener el valor del parametro URL
        const ParametroURL = new URLSearchParams(window.location.search);
        const id_producto = parseInt(ParametroURL.get('id_producto'), 10);
        //Datos del producto 
        const productos = {
            1: {
                nombre: "Calzado casual juvenil",
                imagen: "assets/images/producto1.jpg",
                descripcion: "Descripcion del producto 1",
                precio: "$1,200"
            },
            2: {
                nombre: "Calzado deportivo azul",
                imagen: "assets/images/producto2.jpg",
                descripcion: "Descripcion del producto 2 ",
                precio: "$1,499MX"
            },
            3: {
                nombre: "Calzado atletismo",
                imagen: "assets/images/producto3.jpg",
                descripcion: "Descripcion del producto 3",
                precio: "$1,299 MX"
            },
            4: {
                nombre: "Running basic's unisex",
                imagen: "assets/images/producto4.jpg",
                descripcion: "Descripcion del producto 4",
                precio: "$1,499"
            },
            5: {
                nombre: "Sport Premium Shoes",
                imagen: "assets/images/producto5.jpg",
                descripcion: "Descripcion del producto 5",
                precio: "$999.00 MX"
            },
            6: {
                nombre: "Aerodynamic sport shoes",
                imagen: "assets/images/producto6.jpg",
                descripcion: "Descripcion del producto 6",
                precio: "$1,699.00 MX"
            },
        };

        //Actualizar etiquetas de texto HTML segun el producto
       if (productos[id_producto]){
        document.getElementById("nombre_producto").textContent=productos[id_producto].nombre;
        document.getElementById("img_pto").src=productos[id_producto].imagen;
        document.getElementById("descripcion_pto").textContent=productos[id_producto].descripcion;
        document.getElementById("precio_pto").textContent=productos[id_producto].precio;
    }else{
        document.getElementById("nombre_producto").textContent="el producto no existe";
        document.getElementById("img_pto").style.display="none";
        document.getElementById("descripcion_pto").textContent="NULL";
        document.getElementById("precio_pto").textContent="NULL";
    }