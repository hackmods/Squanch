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
                if(text[i].length < 4)
                {
                        rng++;
                        squanched += `${text[i]} `;
                }
                else {
                    let s = 'squanch';
                    if(text[i].toUpperCase() === text[i])
                        s = 'SQUANCH';
                    else if (text[i].substr(0,1).toUpperCase() === text[i].substr(0,1))
                        s= 'Squanch';

                    if(text[i].substr(text[i].length - 2) == "ed")
                            squanched += `${s}ed `;
                        else if (text[i].substr(text[i].length - 3) == "ing")
                            squanched += `${s}ing `;
                        else if (text[i].substr(text[i].length - 2) == "ly")
                            squanched += `${s}ly `;
                        else if (text[i].substr(text[i].length - 1) == "y")
                            squanched += `${s}y `;
                        else
                        {
                            if((rng % 3 == 0) == true)
                                squanched += `${s}y `;
                            else
                                squanched += `${s} `;
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