'use strict';

/**
 * Makes your sentences squanchy again!
 * @param {string} req
 * @param {string} result
 * @return {string}
 */

module.exports = function(req = '', result) {
   let text =  req.split(" ");
  
   let rng = 0;
   rng = Math.floor((Math.random() * 5) + rng);

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
                if(text[i].length > 4)
                {
                        rng++;
                }
                else {
                    if(text[i].substr(text[i].length - 2) == "ed")
                            squanched += `squanched`;
                        else if (text[i].substr(text[i].length - 3) == "ing")
                            squanched += `squanching`;
                        else if (text[i].substr(text[i].length - 3) == "y")
                            squanched += `squanchy`;
                        else
                        {
                            if((rng % 2 == 0) == true)
                                squanched += `squanch `;
                            else
                                squanched += `squanchy`;
                        }
                        

                        rng = Math.floor((Math.random() * 5) + rng);
                }
            }
                else
                    squanched += `${text[i]} `;
        }
    }
    return squanched;
};