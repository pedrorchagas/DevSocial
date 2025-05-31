/*
    REGRAS DOS INPUT
    USERNAME - Não pode ter espaços em branco
    EMAIL- Deve ser um email válido (@email.com)
    SENHA - + de 8 digitos, não pode conter sequencias, não pode ter o nome do usário na senha

*/


const wordsBlackList = [" "]
function verifyString(value = '') {
    value = value.toLocaleLowerCase()
    for (let i = 0; i < wordsBlackList.length; i++) {
        if (value.includes(wordsBlackList[i]) ) return true
        else false
    }

}

const popupArea = document.getElementById("popups")
let popups_id = 0
function createPopup(content='', posTop=0, posLeft=0) {
    popups_id++
    var popup = {
        id: popups_id,
        content: content,
        posTop: posTop,
        posLeft: posLeft,
        visible: false,
        hide: function(){
            if (this.visible) {
                let popup = document.getElementById(`popup-error-${this.id}`)
                popup.style.display = 'none'
                this.visible = false
            }

        },
        create: function() {
            popupArea.innerHTML += `<div class="popup-error" id="popup-error-${this.id}">
                                        <div class="popup-content" id="popup-content-${this.id}">
                                            <h2>${this.content}</h2>
                                        </div>
                                    </div>`
        },
        show: function() {
            if (!this.visible) {
                let popup = document.getElementById(`popup-error-${this.id}`)
                popup.style.display = 'flex'
                popup.style.left = `${this.posLeft+50}px`
                popup.style.top = `${this.posTop + 10}px`
                this.visible = true
            }

            
        }
        
    }
    popup.create()

    return popup
}


//
const inputUsername = document.getElementById("username-signup")
let error_blank_space = createPopup("EI! Espaços não são permitidos!!", inputUsername.getBoundingClientRect().top, inputUsername.getBoundingClientRect().bottom)
let error_max_characters = createPopup("EI! O máximo de caracteres é 20!!", inputUsername.getBoundingClientRect().top, inputUsername.getBoundingClientRect().bottom)
inputUsername.addEventListener("input", (event) => {
    let valorAtual = inputUsername.value
    let hasError = false

    //Verifica se não tem espaços
    if (verifyString(valorAtual)) {
        hasError = true
        error_blank_space.show()

    } else { 
        error_blank_space.hide()
    }
    
    //verifica o tamanho máximo de caracteres
    if (valorAtual.length > 20) {
        hasError = true
        error_max_characters.show()
    } else {
        error_max_characters.hide()
    }

    //coloca a animação se tiver algum erro
    if (hasError) {
        inputUsername.style.backgroundColor = 'rgb(255, 98, 98)'
        inputUsername.classList.add("shake")
    } else {
        inputUsername.style.backgroundColor = 'white'
        inputUsername.classList.remove("shake")
    }
    
})

// verifica a entra do email
const inputEmail = document.getElementById("email-signup")
inputEmail.addEventListener("input", (event) => {

    if (verifyString(valorAtual) ) {
        inputUsername.style.backgroundColor = 'rgb(255, 98, 98)'
        inputUsername.classList.add("shake")
        popup.style.display = 'flex';
        popupContent.innerHTML = "<h2>EI! Espaços não são permitidos!! </h2>"
        popup.style.left = `${inputUsername.getBoundingClientRect().left+50}px`
        popup.style.top = `${inputUsername.getBoundingClientRect().top + 10}px`
    } else {
        popup.style.display = 'none';
        inputUsername.style.backgroundColor = 'white'
        inputUsername.classList.remove("shake")
    }
} )
