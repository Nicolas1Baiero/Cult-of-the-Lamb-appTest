const imgjogo = document.querySelector(".imgjogo")
const imgpq = document.querySelectorAll(".imgpequena")
const preco = document.querySelector("#preco")

imgpq.forEach(imgpequena => {
    imgpequena.addEventListener("click", e =>{
        imgjogo.src = e.target.src
        if (e.target.src == imgpq[0].src){
            imgjogo.src = "https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg?t=1686863929"
            preco.innerText = "R$65,00"

        }

        else if(e.target.src == imgpq[1].src){
            preco.innerText = "R$76,99"
        }

        else if(e.target.src == imgpq[2].src){
            preco.innerText = "R$80,00"
        }
    })
})
