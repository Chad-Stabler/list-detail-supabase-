export function renderBoss(boss) {
    const newEl = document.createElement('a');
    const bossDiv = document.createElement('div');
    const imageEl = document.createElement('img');
    const textEl = document.createElement('p');
    
    newEl.classList.add('boss');

    imageEl.src = boss.image;

    textEl.textContent = boss.name;

    newEl.href = `./detail/index.html?id=${boss.id}`;

    bossDiv.append(imageEl, textEl);

    newEl.append(bossDiv);

    return newEl;
}