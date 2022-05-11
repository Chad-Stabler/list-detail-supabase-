import { getBosses } from './fetch-utils.js';
import { renderBoss } from './render-utils.js';
// import functions and grab DOM elements
const bossEl = document.getElementById('boss-section');
// let state

async function displayData() {
    const bosses = await getBosses();

    for (let boss of bosses) {
        const newDiv = renderBoss(boss);
        bossEl.append(newDiv);
    }
}
displayData();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
