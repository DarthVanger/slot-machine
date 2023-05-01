let spinnersContainer = document.querySelector('#spinners-container')
console.log('hello');

const imgArray = [ 'cherry.png', 'dimond.png', 'lemon.png', 'pumpkin.png', 'seven.png', ];
let i = 0;
function drawRow() {
    let row = document.createElement('div')
    i++;
    row.className = 'row'
    row.id = `row-${i}`
    spinnersContainer.append(row)
    imgArray.forEach(drawFigure);
    function drawFigure(figure) {
        const figureElement = document.createElement('div');
        figureElement.className = 'figure-element';
        figureElement.innerHTML = `<img src='${figure}'/>`
        row.append(figureElement);
    }
}
const ri4ag = document.querySelector('#ri4ag');
let spinnersContainerTop = 0

ri4ag.addEventListener('click', krytVert);
function krytVert() {
  spinnersContainerTop -= 500;
  spinnersContainer.style.top = spinnersContainerTop + 'px';
  drawFiveRow()
}

drawFiveRow()

function drawFiveRow() {
  drawRaw();
  drawRaw();
  drawRaw();
  drawRaw();
  drawRaw();
}

function drawRaw() {
  const randomIndex = Math.floor(Math.random() * 4);
  //imgArray[randomIndex] = imgArray[randomIndex + 1];
  drawRow();
}