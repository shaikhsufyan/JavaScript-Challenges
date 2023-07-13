
// let card = document.querySelector(".card");
let crd = document.querySelector(".crd");
let head = document.querySelector(".head")
let para = document.querySelector(".para")
let ids = document.querySelector(".id")
let check = document.querySelector(".head")

// console.log(para);


function delay() {
    crd.style.display = "block"
    setTimeout(function () {

        async function getting() {
            let get = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            let json = await get.json();
            console.log(json);
            let title = json.title;
            let id = json.id;
            let complete = json.completed;

            ids.innerHTML = id;
            para.innerHTML = title;
            check.innerHTML = complete;



        }
        getting()


        head.style.backgroundColor = "white"
        head.style.color = "black"

        para.style.backgroundColor = "white"
        para.style.color = "black"

        ids.style.backgroundColor = "white"
        ids.style.color = "black"




    }, 2000)




}
delay()
