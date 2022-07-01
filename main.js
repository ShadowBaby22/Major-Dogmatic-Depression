const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
state = {}
showTextNode(1)

}

function showTextNode(textNodeIndex) {

       const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) 
       textElement.innerText = textNode.text
       while (optionButtonsElement.firstChild) {
           optionButtonsElement.removeChild(optionButtonsElement.firstChild)

       }

       textNode.options.forEach(option => {
           if (showOption(option)) {
               const button = document.createElement('button')
               button.innerText = option.text
               button.classList.add('btn')
               button.addEventListener('click', () => selectOption(option))
               optionButtonsElement.appendChild(button)
            
           }

       }) 

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }

const textNodes = [
    {
      id: 1,
      text: 'You hear your alarm going off, you overslept! It is 30 mins to your first Lecture.',
      options: [
        {
          text: 'Wake Up!',
          //setState: { sleep: true },
          nextText: 2
        },
        {
          text: 'Hit Snooze',
          nextText: 2
        }
      ]
    },
    {
      id: 2,
      text: 'Looks like your efforts were useless. You look at the clock again and you have missed your first lecture',
      options: [
        {
          text: 'Wake up for your second class',
          //requiredState: (currentState) => currentState.sleep,
          setState: { sleep: false, wake: true },
          nextText: 4
        },
        {
          text: 'Just go back to sleep',
          //requiredState: (currentState) => currentState.sleep,
          setState: { sleep: true, wake: false },
          nextText: 5
        },
        {
          text: 'Smash the alarm clock against the wall',
          setState: { sleep: true, wake: false },
          nextText: 3
        }
      ]
    },

    {
        id: 3,
        text: 'You keep sleeping thorughout the day, and you have missed all your classes. You are unable to get out of bed :(',
        options: [
            {
              text: 'Restart',
              nextText: -1
            },

          ]
        
        
      },
      {
        id: 4,
        text: 'You rush out, skipping breakfast (like always), and you catch the metro. You end up dosing off on the metro, missing your station. You are woken up by the train conduct',
        options: [
            {
              text: 'Take the train back to attend your last lecture',
              nextText: 6
            },
            {
              text: 'Go back home, because what is the point anyway now?',
              nextText: 7
            },
           
          ]
      },


      {
        id: 5,
        text: 'You are woken up by your guardian, telling you that you have skipped enough classes and that you will have to repeat the semester. ',
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
           
           
          ]
      },


      
      {
        id: 6,
        text: 'You barely make it to class. You feel so drained and your vision become blurry... You pass out due to exhaustion ',
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
           
           
          ]
      },

      

]



startGame()