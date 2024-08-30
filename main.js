const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.black_mini, .blue_mini, .C, .equal, .procent')
const backspaceButton = document.querySelector('.backspace')

let isResultDisplayed = false
let isPercentageMode = false

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText

        if (value === '=') {
            let expression = display.innerText.replace('×', '*').replace('÷', '/')
            if (isPercentageMode) {
                const currentValue = parseFloat(expression)
                expression = currentValue / 100
                isPercentageMode = false
            }
            if (expression) {
                display.innerText = eval(expression)
                isResultDisplayed = true;
            }
        } else if (value === 'C') {
            display.innerText = ''
            isResultDisplayed = false
            isPercentageMode = false
        } else if (value === '%') {
            const currentValue = parseFloat(display.innerText)
            if (!isNaN(currentValue)) {
                display.innerText = currentValue / 100
                isPercentageMode = true
                isResultDisplayed = true
            }
        } else {
            if (isResultDisplayed) {
                if (isPercentageMode) {
                    display.innerText += '*' + value
                    isPercentageMode = false
                } else {
                    display.innerText += value
                }
                isResultDisplayed = false
            } else {
                display.innerText += value
            }
        }
    })
})

backspaceButton.addEventListener('click', () => {
    display.innerText = display.innerText.slice(0, -1)
})

