document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
  if (event.target.dataset.type === 'edit') {
    var years = prompt('Введите новое название');
    const id = event.target.dataset.id
    if (years) {
      edit(id, { title: years }).then(() => {
        event.target.closest('li').childNodes[0].nodeValue = years;
      })
    } else { alert("Изменение отменено") }

  }
})


async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function edit(id, content) {
  await fetch(`/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(content)
  })
}
