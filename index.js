'use strict';

/**
 * Makes your sentences squanchy again!
 * @param {string} req
 * @param {string} result
 * @return {string}
 */

 function Squanch(req = '', result) {
   let text =  req.split(" ");
  
   let rng = 0;
   rng = Math.floor((Math.random() * 7) + rng);

   let squanched = ''; 
   if(text.length < 2)
   {
       squanched = "squanch";
   }
   else{
        for (let i = 0; i < text.length; i++)
        {
            if(i == rng)
            {
                var regLetterPattern = /^[a-zA-Z]+$/; 
                //var regAplhNumPattern = /^[0-9a-zA-Z]+$/; 

                let p = '';
                let pre = '';
                let s = 'squanch';

                if(text[i].length < 4)
                {
                        rng++;
                        squanched += `${text[i]} `;
                }
                else if(!text[i].substr(1, text[i].length - 2).match(regLetterPattern))
                {
                    rng++;
                    squanched += `${text[i]} `;
                }
                else {
                    if(!text[i].substr(text[i].length - 1).match(regLetterPattern))
                    {
                        p = text[i].substr(text[i].length - 1);
                    }
                    
                    if(i != (text.length - 1))
                        p = p + " ";

                     if(!text[i].substr(0, 1).match(regLetterPattern))
                    {
                        pre = text[i].substr(0, 1);
                    }
                    
                    
                    if(text[i].toUpperCase() === text[i])
                        s = 'SQUANCH';
                    else if (text[i].substr(0,1).toUpperCase() === text[i].substr(0,1))
                        s= 'Squanch';

                    if(text[i].substr(text[i].length - 2) == "ed")
                            squanched += `${pre}${s}ed${p}`;
                        else if (text[i].substr(text[i].length - 3) == "ing")
                            squanched += `${pre}${s}ing${p}`;
                        else if (text[i].substr(text[i].length - 2) == "ly")
                            squanched += `${pre}${s}ly${p}`;
                        else if (text[i].substr(text[i].length - 1) == "y")
                            squanched += `${pre}${s}y${p}`;
                        else
                        {
                            if((rng % 3 == 0) == true)
                                squanched += `${pre}${s}y${p}`;
                            else
                                squanched += `${pre}${s}${p}`;
                        }
                        

                        rng += Math.floor((Math.random() * 7) + 1);
                }
            }
            else
                squanched += `${text[i]} `;
        }
    }
    return squanched;
};


console.log(Squanch('#RickandMortyForHundredYears# #HundredYearsRandM# #RickandMortyForHundredYears# #HundredYearsRandM# #RickandMortyForHundredYears# #YearsRandM#'));

module.exports = Squanch;