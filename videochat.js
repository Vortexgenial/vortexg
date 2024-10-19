class Celular {
    constructor(element) {
        this.element = element
        this.chat = this.element.querySelector(".chat")
        this.username = this.element.querySelector('.user-username')
        this.form = this.element.querySelector("form")
        this.modal = this.element.querySelector(".modal")
        this.inputText = this.form[0]
        this.inputFile = this.form[2]
        this.image = false
        this.imageURL = ''
        this.changeName = true
        this.username.ondblclick = () => {
          if (this.changeName) {
          this.changeName = false
          this.username.innerHTML = `<input 
          class="input-username"
          value="${this.username.innerHTML}"
          >`
          this.username.children[0].focus()
          this.username.children[0].select()
          this.username.onkeyup = (evt) => {
            if (evt.key == 'Enter') {
              this.username.innerHTML = this.username.children[0].value
              this.changeName = true
            }
          }
          }
        }
  }
 
  
    borrarModal() {
        this.modal.innerHTML = ''
        this.modal.classList.remove('modal-display')
        this.image = false
    }

    mandarMensaje(receptor) {
        if (!this.image) {
            if (this.inputText.value !== "") {
                let newMsjEmisor = document.createElement('div'),
                    newMsjReceptor = document.createElement('div')
                newMsjEmisor.innerHTML = `<p class="msj msj-emisor">${this.inputText.value}</p>`
                newMsjReceptor.innerHTML = `<p class="msj msj-receptor">${this.inputText.value}</p>`
                this.chat.appendChild(newMsjEmisor)
                receptor.appendChild(newMsjReceptor)
                this.inputText.value = ""
                this.chat.scrollTo(0, this.chat.scrollHeight)
                receptor.scrollTo(0, receptor.scrollHeight)
            }
        } else {
            let newMsjEmisor = document.createElement('div'),
                newMsjReceptor = document.createElement('div')
            newMsjEmisor.innerHTML = `<div class="msj msj-emisor">
            <img src="${this.imageURL}" class="imagen-msj">
            <p>${this.inputText.value}</p>
            </div>`
            newMsjReceptor.innerHTML = `<div class="msj msj-receptor">
            <img src="${this.imageURL}" class="imagen-msj">
            <p>${this.inputText.value}</p>
            </div>`
            this.chat.appendChild(newMsjEmisor)
            receptor.appendChild(newMsjReceptor)
            this.inputText.value = ""
            this.chat.scrollTo(0, this.chat.scrollHeight)
            receptor.scrollTo(0, receptor.scrollHeight)
            this.borrarModal()
        }
    }

    subirImagen(receptor) {
      let types = ['image/jpg','image/png','image/jpeg']
      for (let i = 0; i < types.length ; i++) {
        if (this.inputFile.files[0].type === types[i] ) {
        this.modal.innerHTML = `
          <img src="https://i.dlpng.com/static/png/512041_preview.png" class="imagen-modal">
          <button class="cerrar-modal">X</button>`
        this.modal.classList.add('modal-display')
        let img = this.modal.querySelector('.imagen-modal'),
            cerrar = this.modal.querySelector('.cerrar-modal'),
            count = 0,
            intervalo = setInterval(() => {
                img.style.transform = `rotate(${count += 30}deg)`
            }, 100)
        cerrar.onclick = () => {
            this.borrarModal()
            file.onload = ''
            clearTimeout(timeOut)
            this.form[1].removeAttribute('disabled')
            this.inputFile.removeAttribute('disabled')
            this.inputFile.value = ''
        }
        this.form[1].setAttribute('disabled', '')
        this.inputFile.setAttribute('disabled', '')
        let file = new FileReader(),
            timeOut
        file.readAsDataURL(this.inputFile.files[0])
        file.onload = () => {
            timeOut = setTimeout(() => {
                clearInterval(intervalo)
                img.src = file.result
                this.form[1].removeAttribute('disabled')
                this.inputFile.removeAttribute('disabled')
                img.style.transform = `rotate(0deg)`
                this.inputFile.value = ""
                this.image = true;
                this.imageURL = file.result
            }, Math.random() * 4000)
        }
          }
      }
    }

}
let celularUno = new Celular(document.querySelector('.__one')),
    celularDos = new Celular(document.querySelector('.__two'))
celularUno.form.onsubmit = (evt) => {
    evt.preventDefault()
    celularUno.mandarMensaje(celularDos.chat)
}
celularDos.form.onsubmit = (evt) => {
    evt.preventDefault()
    celularDos.mandarMensaje(celularUno.chat)
}

celularUno.form.onclick = (evt) => {
    let target = evt.target
    if (target.classList[1] == "icon-submit") {
        celularUno.mandarMensaje(celularDos.chat)
    }
}
celularDos.form.onclick = (evt) => {
    let target = evt.target
    if (target.classList[1] == "icon-submit") {
        celularDos.mandarMensaje(celularUno.chat)
    }
}

celularUno.form.onchange = () => {
    if (celularUno.inputFile.files[0]) {
        celularUno.subirImagen(celularDos.chat)
    }
}
celularDos.form.onchange = () => {
    if (celularDos.inputFile.files[0]) {
        celularDos.subirImagen(celularUno.chat)
    }
}
