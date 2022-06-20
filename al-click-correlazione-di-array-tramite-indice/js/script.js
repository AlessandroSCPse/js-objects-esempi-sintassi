const allClickableElements = document.querySelectorAll('.list-clickable a');
const allTextsElements = document.querySelectorAll('.list-text li');
console.log(allClickableElements);
console.log(allTextsElements);

for(let i = 0; i < allClickableElements.length; i++) {
    const thisClickableElement = allClickableElements[i];

    thisClickableElement.addEventListener('click', function() {
        // Al click su a (che sta dentro allClickableElements)
        // mi prendo il relativo elemento di allTextsElements
        const relatedText = allTextsElements[i];
        // console.log(relatedText);
        relatedText.classList.add('red');
    });
}
