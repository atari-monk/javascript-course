'use strict'

import { restaurant, weekdays } from './restaurant.js';
import { getPause, getCode } from './tool.js';

const contentEl = document.getElementById('content');

let content = `${getCode('')}${getPause()}`;
content += '';

contentEl.innerHTML = content;