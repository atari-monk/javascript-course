'use strict'

import { logVar } from "../Index/tool.js";
import { movements, accounts } from "../Data/s2Data.js"

// The find Method
const firstWithdrawal = movements.find(mov => mov < 0);
logVar({movements});
logVar({firstWithdrawal});

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let xacc = {};
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    xacc = acc;
    break;
  }
}
console.log(xacc);