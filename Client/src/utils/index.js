// resuable function 

import {surpriseMePrompts} from "../constant"

export function getRandomPrompt(prompt){

      const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length)

      const randomPrompt=surpriseMePrompts[randomIndex]
      
       if(randomPrompt===prompt)getRandomPrompt(prompt)  


      return randomPrompt

}