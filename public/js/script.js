var valueMult = 8;
var numElement = 40;

document.addEventListener('DOMContentLoaded', function () {
    var btnTools = document.querySelector('#btn-tools');
    var contentTools = document.querySelector('#content-tools');
    
    btnTools.addEventListener('click', function () {
        contentTools.classList.toggle('active')
    });

    createResults(0);
    initEvents();
});

function createResults(valueSearch) {
    var elementBase = document.querySelector('.mui-multiplo__element.base');
    var elementNew = document.querySelectorAll('.mui-multiplo__element.new');
    var elementContent= document.querySelector('.mui-multiplo__content');
    var indexInput = 0;

    if (elementNew.length > 0) {
        for (let index = 0; index < elementNew.length; index++) {
            elementNew[index].remove();
        }
    }

    for (let index = 0; index < numElement; index++) {
        const element = numElement[index];
        let elementClone = elementBase.cloneNode(true);
        const indexPlus = index + 1;
        const newMultiplo = indexPlus * valueMult;

        if (valueSearch !== 0 && (newMultiplo > valueSearch - (valueMult * 2) && indexInput < 4) || valueSearch === 0) {
            elementClone.querySelector('.mui-multiplo__index').innerHTML = indexPlus;
            elementClone.querySelector('.mui-multiplo__value').innerHTML = indexPlus * valueMult;
            elementClone.classList.remove('base')
            elementClone.classList.remove('mui-visually-hidden')
            elementClone.classList.add('new')

            elementContent.append(elementClone);
            indexInput++;
        }
    }
}

function initEvents() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var values = document.querySelectorAll(".mui-multiplo__value");
    var searchValue = document.querySelector('#search-value');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
        // do this
        console.log('Checked');
        } else {
        // do that
        console.log('Not checked');
        }
    });



    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        element.addEventListener("click", function () {
            var textArea = document.createElement("textarea");
            textArea.value = element.innerHTML;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
        });
    }

    searchValue.addEventListener('keyup', function (event) {
        const inputValue = event.currentTarget.value;
        createResults(parseInt(inputValue));
        initEvents();
    })
}