const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function () {
    alert('gracias mi tefita, hoy a distancia y en un futuro en persona,que tengas un lindo dia amorcito y que sepas que te amo mucho <3')
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',"translate(-${randomX}%,-${randomY}%)");
})
