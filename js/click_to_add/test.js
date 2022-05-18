// const myElement = document.getElementById("p-test")

// console.log('aaa')

//myElement.textContent = 'ppp'

// myElement.addEventListener('click', ()=>{console.log('clicked');}
    
// )

window.onload = function() {
    const myElement = document.getElementById('p1')

    document.addEventListener('click', ()=>{
        console.log('clicked')
        myElement.innerHTML += 'D'
    })

}