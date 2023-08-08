const adviceText = document.querySelector('#advicetext');
const quoteText = document.querySelector('#quotetext');

const UpdatePage = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    adviceText.innerHTML = `ADVICE #${data.slip.id}`;
    quoteText.innerHTML = data.slip.advice;
    console.log(data);
}

//Load advice on page load
UpdatePage();
//Query selector for reloads
document.querySelector('#reroll').addEventListener('click', UpdatePage);

