const colorInput = document.querySelector('.colorInput')

colorInput.addEventListener('input', () => {
   
    document.querySelector('body').style.backgroundColor = colorInput.value
})
document.querySelector('.btn').addEventListener('click', () => {
    const docs = document.querySelectorAll(`.animation_cube`);
    for (let i = 0; i < docs.length; i++) {
        const doc = docs[i];
       
        doc.classList.toggle(`animation_cube_moved`);
        
        doc.style.transitionDelay = `${200 * i}ms`
    }
})
