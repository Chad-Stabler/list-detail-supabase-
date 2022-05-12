export function renderBoss(boss) {
    const newEl = document.createElement('a');
    const bossDiv = document.createElement('div');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');
    
    newEl.classList.add('boss');

    imageEl.src = `.${boss.image_path}`;

    textEl.textContent = boss.name;

    newEl.href = `./detail/index.html?id=${boss.id}`;

    bossDiv.append(imageEl, textEl);

    newEl.append(bossDiv);

    return newEl;
}

export function renderDetailPage(boss) {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const details = document.createElement('h2');

    image.src = `.${boss.image_path}`;
    details.textContent = `This boss is ${boss.name}, you can find them while exploring around ${boss.game_of_origin}. It's a very difficult difficult boss to fight, my personal favorite attack to see when fighting it is ${boss.favorite_attack}`;

    div.append(image, details);

    return div;
}
