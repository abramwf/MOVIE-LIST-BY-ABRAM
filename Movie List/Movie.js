fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json))

console.log(
{ id: 1, title: 'Merah Putih Memanggil' /* ... */ },
{ id: 2, title: 'Black hawk Down' /* ... */ },
{ id: 3, title: 'K-ON' /* ... */ },
{ id: 3, title: 'Into the Fire' /* ... */ },
{ id: 3, title: 'PANFILOVS 28 MEN' /* ... */ },)

