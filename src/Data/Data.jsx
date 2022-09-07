
const data = [
    { 
        id: 1,
        nombre: 'motoedge20',
        marca: 'motorola',
        precio: 75000,
        stock: 3,
        img: 'https://medias.musimundo.com/medias/00435013-144180-144180-01-144180-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NTQwNXxpbWFnZS9qcGVnfGgzZi9oZTQvMTAzODA4OTQ4OTYxNTgvMDA0MzUwMTMtMTQ0MTgwLTE0NDE4MF8wMS0xNDQxODBfMDEuanBnX3NpemU1MTV8N2ZmMzhjZGNlM2YxZjIwMDNiYjVmZGFkZjkwN2Q5ZjJhNjk0NmE0YWFiZDIzOGQzYWU5ZGRjMWRhMDAyMTk4NA'
    },

    { 
        id: 2,
        nombre: 'motog60s',
        marca: 'motorola',
        precio: 60000,
        stock: 5,
        img: 'https://medias.musimundo.com/medias/00418007-143742-143742-01-143742-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2ODI3OHxpbWFnZS9qcGVnfGgwNi9oYzAvMTAzODA3NzU5MTU1NTAvMDA0MTgwMDctMTQzNzQyLTE0Mzc0Ml8wMS0xNDM3NDJfMDEuanBnX3NpemU1MTV8ZDUyMDBlMTI2OTk4YmQxMmRmNGUxYzA4MTQwNjJiZmYyM2U5YThjZjZlMWMxNjEyYjA1YjE4NWRmYWU0ZjkzNg'
    },

    { 
        id: 3,
        nombre: 'motog71',
        marca: 'motorola',
        precio: 65000,
        stock: 4,
        img: 'https://medias.musimundo.com/medias/00508056-145516-145516-01-145516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NzY5NHxpbWFnZS9qcGVnfGhhOC9oZTUvMTAzODE1NzI5MzE2MTQvMDA1MDgwNTYtMTQ1NTE2LTE0NTUxNl8wMS0xNDU1MTZfMDEuanBnX3NpemU1MTV8MTFlMmIxNjRhZmU0ZDIxODEwMzA5NWFkYTM3OTNmYjlmZjJiYjI2MzgzZDljMzIwMjM4ZGI0NDViMjJhMzY5Ng'
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