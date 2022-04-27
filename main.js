const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){

state = {}
showTextNode(1)

}

function showTextNode(textNodeIndex) {

       const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) 
       textElement.innerText = textNode.text
       while (optionButtonElement.firstChild) {
           optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)

       }

       textNode.options.forEach(option => {
           if (showOption(option)) {
               const button = document.createElement('button')
               button.innerText = option.text
               button.classList.add('btn')
               button.addEventListener('click', () => selectOption(option))
               optionsButtonsElement.appendChild(button)
            
           }

       }) 

}

function selectOption(option) {
    return true
}

function selectOption(option){

}

const textNodes = [
    {
        id: 1,
        text: 'You hear your alarm going off, you overslept! It is 30 mins to your first Lecture',
        options: [
           {
               text: 'Wake Up!',
               setState: { sleep: false},
               nextText: 2
           },
           {
               text: 'Hit Snooze',
               setState: { sleep: true},
               nextText: 2
    
           } 
        ]
    },
    {
        id: 2,
        text: 'Looks like your efforts were useless. You look at the clock again and you have missed your first lecture.',
        options: [
            {
                text: 'Wake up for your second class',
                requiredState : (currentState) => currentState.sleep,
                setState: { sleep: false, college: true},
                nextText: 3
            },
            {
                text: 'Just go back to sleep',
                requiredState : (currentState) => currentState.sleep,
                setState: { sleep: false, college: true},
                nextText: 4
            }
        ]
    }

]

startGame()