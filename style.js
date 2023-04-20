let textarea = document.querySelector('.textarea')
let block = document.querySelector('.block')
textarea.addEventListener('input', inputData)
function inputData() {
   let a = textarea.value
   let carSum = a.length
   let totalWords = a.split(/\s+/).length
   let totalParagraph = a.replace(/\n$/gm, '').split(/\n/).length
   let b = (totalWords * 60) / 200
   let readingTime = b / 60
   inputHtml(carSum, totalWords, totalParagraph, readingTime)
}


function inputHtml(carSum, totalWords, totalParagraph, readingTime) {
   let zero = (carSum == undefined) ? 0 : ''
   let list = `
   <p>Caracters: ${carSum || zero} </p>
   <p>Total words: ${totalWords || zero}</p>
   <p>Paragraphs: ${totalParagraph || zero}</p>
   <p>Reading time(words in minute): ${readingTime || zero}</p>
   `
   block.innerHTML = list
}
inputHtml()








