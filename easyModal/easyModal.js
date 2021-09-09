const easyModal = {
  open(text) {
    body = document.body;

    easyModalHTML = `
    <div id="easyModal">
      <div class="modal">
        <div class="content">${text}</div>
        <i class="close bi bi-x-lg"></i>
      </div>
    </div>
    `
    body.insertAdjacentHTML('beforeend', easyModalHTML)
    easyModalSeletor = document.querySelector('#easyModal')
    btnClose = easyModalSeletor.querySelector('.close')
    setTimeout(() => {
      easyModalSeletor.classList.add('show')
    }, 50);

    btnClose.addEventListener('click', () => {
      this.close(0)
    })
  }, 
  close() {
    easyModalSeletor = document.querySelector('#easyModal')
    easyModalSeletor.classList.remove('show')
    setTimeout(() => {
      easyModalSeletor.remove()
    }, 150);
  }


}