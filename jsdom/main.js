const getFormInfo= () =>{
    const inputCollection= document.getElementsByTagName ("input")
    console.log (inputCollection[0].value)
    const name= inputCollection[0].value
    
    const nodoAddress= document.getElementById ("user-address")
    console.log (nodoAddress.value)
    const address= nodoAddress.value 

    const inputsByName= document.getElementsByName ("user")
    console.log (inputsByName[2].value)
    const phone= inputsByName[2].value

    const infoObject= {
        name, 
        address,
        phone,
    
    }
    console.log (infoObject)
}

const nameInput= document.getElementById ("user-name")
const printLetters= (event) =>{
    console.log (event.target.value)
}
nameInput.addEventListener("keypress", printLetters)

const addressInput= document.getElementById ("user-address")
addressInput.addEventListener ("keypress", printLetters)

const phoneInput= document.getElementById ("user-phone")
phoneInput.addEventListener ("keypress", printLetters)

/* 
var inputCollection= document.querySelectiorAll ("input")
console.log(inputCollection)

inputCollection.forEach( element => {
    console.log(element)
    element.addEventListener("keyup", ( event )=> {
        let inputValue= event.target.value
        console.log(inputValue)
    })
})
insertBefore
remove
appendChild
childNodes
createElement
CreateTextNote
replaceChild: reemplazar un nodo específico con otro nodo específico. 

event.preventdefault (event)- evita el funcionamiento por default de algún evento

*/


