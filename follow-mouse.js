window.addEventListener('load', () => {
    const block = document.querySelector('#childBlock')
    window.addEventListener('mousemove', (event) => {
        block.style.left = `${event.clientX}px`
        block.style.top = `${event.clientY}px`
    })
})