'use strict'

import { logVar } from "../tool.js";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
  .map((mov, i, arr) => {
    (()=>console.log(arr))();
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);