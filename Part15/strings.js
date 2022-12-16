'use strict'

import { getPause, getCode } from './tool.js';

let content = `${getCode('')}${getPause()}`;
content += '';

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;