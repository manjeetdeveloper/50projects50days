const insert = document.getElementById('insert')


// this event key is denotye by  after click any where press keyboard  then work 
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <b>event.key</b>
</div>

<div class="key">
  ${event.keyCode}
  <b>event.keyCode</b>
</div>

<div class="key">
  ${event.code}
  <b>event.code</b>
</div>
  `
})