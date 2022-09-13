
const data = [
    { 
        id: 1,
        nombre: 'motoedge20',
        marca: 'motorola',
        precio: 75000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 3,
        img: '/img/motoedge20.jpg'
    },

    { 
        id: 2,
        nombre: 'motog60s',
        marca: 'motorola',
        precio: 60000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 5,
        img: '/img/motog60s.jpg'
    },

    { 
        id: 3,
        nombre: 'motog71',
        marca: 'motorola',
        precio: 65000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 4,
        img: '/img/motog71.jpg'
    },

    { 
        id: 4,
        nombre: 'samsunga53',
        marca: 'samsung',
        precio: 70000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 6,
        img: '/img/samsunga53.jpg'
    },

    { 
        id: 5,
        nombre: 'samsungs22',
        marca: 'samsung',
        precio: 65000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 5,
        img: '/img/samsungs22.jpg'
    },

    { 
        id: 6,
        nombre: 'samsungzflip',
        marca: 'samsung',
        precio: 85000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 2,
        img: '/img/samsungzflip.jpg'
    },

    { 
        id: 7,
        nombre: 'tcl20',
        marca: 'tcl',
        precio: 25000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 8,
        img: '/img/tcl20.jpg'
    },

    { 
        id: 8,
        nombre: 'tcl30',
        marca: 'tcl',
        precio: 30000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 7,
        img: '/img/tcl30.jpg'
    },

    { 
        id: 9,
        nombre: 'zteblade',
        marca: 'zte',
        precio: 35000,
        descripcion: '4 ram cámara: 64px pantalla: 6.4',
        stock: 5,
        img: '/img/zteblade.jpg'
    }
]

const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    if(condition){
        setTimeout(() => {
            resolve(data);
        }, 2000);
    }
    else{
        reject(console.log('No data'));
    }
})

export default getFetch;