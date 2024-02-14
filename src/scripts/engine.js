const emojis = [
    "🎃",
    "🎃",
    "🎖️",
    "🎖️",
    "🎈",
    "🎈",
    "⚽",
    "⚽",
    "🎱",
    "🎱",
    "🏳️‍🌈",
    "🏳️‍🌈",
    "🍰",
    "🍰",
    "👑",
    "👑"
];
let openCards = [];
let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

for(let i =0;i<shuffleEmojis.length;i++){
    let box = document.createElement('div');
    box.onclick = handleClick;
    box.className='item';
    box.innerHTML = shuffleEmojis[i];
    document.querySelector('.game').appendChild(box);
}
function handleClick(){
    if(openCards.length < 2){
        this.classList.add('boxOpen');
        openCards.push(this);
        
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}
function checkMatch(){
    if(openCards[0].innerHTML !== openCards[1].innerHTML){
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }
    openCards = [];
    if(document.querySelectorAll('.boxOpen').length == shuffleEmojis.length){
        alert('Você venceu!');
    }
}