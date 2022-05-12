import { renderDetailPage } from '../render-utils.js';
import { getBoss } from '../fetch-utils.js';

const details = document.getElementById('detail-section');
const params = new URLSearchParams(window.location.search);

async function renderDetails() {
    const boss = await getBoss(params.get('id'));

    const newDiv = renderDetailPage(boss);
    details.append(newDiv);
}

renderDetails();
