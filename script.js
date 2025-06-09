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
function createPopup(content='') {
    popups_id++
    var popup = {
        id: popups_id,
        content: content,
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
        show: function(posTop=0, posLeft=0) {
            if (!this.visible) {
                let popup = document.getElementById(`popup-error-${this.id}`)
                popup.style.display = 'flex'
                popup.style.left = `${posLeft+50}px`
                popup.style.top = `${posTop + 10}px`
                this.visible = true
            }

            
        }
        
    }
    popup.create()

    return popup
}

//ERROS
const error_blank_space = createPopup("EI! Espaços não são permitidos!!")
const error_max_characters = createPopup("EI! O máximo de caracteres é 20!!")


// INPUT USERNAME
const inputUsername = document.getElementById("username-signup")
inputUsername.addEventListener("input", (event) => {
    let valorAtual = inputUsername.value
    let hasError = false

    //Verifica se não tem espaços
    if (verifyString(valorAtual)) {
        hasError = true
        error_blank_space.show(inputUsername.getBoundingClientRect().top, inputUsername.getBoundingClientRect().left)

    } else { 
        error_blank_space.hide()
    }
    
    //verifica o tamanho máximo de caracteres
    if (valorAtual.length > 20) {
        hasError = true
        error_max_characters.show(inputUsername.getBoundingClientRect().top, inputUsername.getBoundingClientRect().left)
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
    let hasError = false
    let valorAtual = inputEmail.value
    console.log(`valor atual: ${valorAtual}`)

    if (verifyString(valorAtual) ) {
        hasError = true
        error_blank_space.show(inputEmail.getBoundingClientRect().top, inputEmail.getBoundingClientRect().left)
    } else {
        error_blank_space.hide()
    }

    if (hasError) {
        inputEmail.style.backgroundColor = 'rgb(255, 98, 98)'
        inputEmail.classList.add("shake")
    } else {
        inputEmail.style.backgroundColor = 'white'
        inputEmail.classList.remove("shake")
    }
} )


// Verifica a senha
const inputPassword = document.getElementById("password-signup")
inputPassword.addEventListener("input", function(event) {
    console.log(`senha: ${inputPassword.value}`)
    let valorAtual = inputPassword.value

    let digits = document.getElementById("digits")
    if (valorAtual.length <= 8) {
        digits.style.color = 'red'
    } else {
        digits.style.color = 'limegreen'
    }

    

})