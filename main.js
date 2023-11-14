let root = document.getElementById('root');
let title = document.getElementById('title');
let body = document.getElementById('body');
let userId = document.getElementById('user-id');
let btn = document.getElementById('btn');
let form = document.getElementById('form');



    fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data =>{
    console.log(data);
    data.forEach((item) => {
        root.innerHTML += `<div class="post">
            <h1>${item.title}</h1>
            <p>${item.body}</p>
        </div>`
    })
})

btn.onclick = () => {
 if(title.value !== '' && body.value !== ''){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: userId.value
        }),
    }).then(response => console.log(response))
    .catch(error => console.log(error))
    alert('Все поля заполнены успешно')
 } else{
    alert('Поля не заполнены')
 }
}

let num = 1;

let lel = new Promise((resolve, reject) =>{
    if(num = 1){
        resolve('Нормас')
    } else{
        reject('Поля не заполнены')
    }
})
