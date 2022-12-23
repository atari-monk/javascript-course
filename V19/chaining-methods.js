'use strict'

import { logVar } from "../Index/tool.js";
import { movements } from "../Data/s2Data.js"

logVar({ movements });
const eurToUsd = 1.1;

// The Magic of Chaining Methods
// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
logVar({ totalDepositsUSD });

//debug step
const totalDepositsUSD2 = movements
  .filter(mov => mov < 0)
  .map((mov, _, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);