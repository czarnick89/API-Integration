const displayDuck = (imgURL) => {
    console.log(imgURL)
    const duckContain = document.getElementById('duck-container')
    const newImg = document.createElement('img')
    newImg.src = imgURL
    newImg.classList.add('duck-image');
    duckContain.appendChild(newImg)
}

const getDuck = async () => {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://random-d.uk/api/v2/random');;
        const data = await response.json();
        //console.log(data);
        imgURL = data.url
        displayDuck(imgURL)
    } catch (error) {
        console.log('Error: ', error);
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    let userInput = document.getElementById('input')
    //console.log(userInput.value);
    getDuck();
};

const myForm = document.getElementById('form');
myForm.addEventListener('submit', handleSubmit);

