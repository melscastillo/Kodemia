const saveButton = document.getElementById("saveButton")
form = document.querySelectorAll(".form-group")
cardContainer = document.querySelectorAll(".card")
const getFormData = () => {
    let infoPost = {}
    let dataForm = document.querySelectorAll('.post-data')
    dataForm.forEach(input => {
        infoPost[input.name] = input.value
    })
    return infoPost
}
const post = () => {
    let formData = getFormData()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText)
            createPost(response.name, formData)
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/9/posts/.json", true)
    xhttp.send(JSON.stringify(formData))
}
const deletepost = (cardIdDelete) => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    }
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/9/posts/${cardIdDelete}/.json`, true)
    xhttp.send()
}
const getPost = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let post = JSON.parse(this.responseText)
            for (const key in post) {
                createPost(key, post[key])
            }
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/9/posts/.json", true)
    xhttp.send()
}
const createPost = (cardId, post) => {
    let cards = cardContainer[0].innerHTML
    console.log(cards)
    let { title, date, content } = post
    let cardPost = `
      <div class="card-body">
                      <h5 class="card-title">${title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                      <p class="card-text">${content}</p>                     
                      <button data-post-id="${cardId}" class="btn btn-danger mt-3 btn-sm">Delete</button> 
                    </div>`
    cardContainer[0].innerHTML = cards + cardPost
}
const clickDelete = (event) => {
    let postId = event.target.getAttribute("data-post-id")
    if (postId !== null) {
        deletepost(postId)
        event.target.parentElement.remove()
    }
}
getPost()
saveButton.addEventListener("click", post)
cardContainer[0].addEventListener("click", clickDelete)