'use strict'

import { logVar } from "../Index/tool.js"
import { movements } from "../Data/s2Data.js"

// Sorting Arrays

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
logVar({ owners });
const ownersSorted = owners.sort();
logVar({ ownersSorted });
logVar({ owners });

// Numbers
logVar({ movements });
const numSortedAsStr = movements.sort();
logVar({ numSortedAsStr });

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// Ascending
const movementsAscending = movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
logVar({ movementsAscending });

const movementsAscending2 = movements.sort((a, b) => a - b);
logVar({ movementsAscending2 });

// Descending
const movementDescending = movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
logVar({ movementDescending });

const movementDescending2 = movements.sort((a, b) => b - a);
logVar({ movementDescending2 });