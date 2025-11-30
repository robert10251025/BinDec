// ----------  DOM REFERENCES  ------------
let number;
const gridRemainders = document.querySelector('.grid-remainders');
const replaceBtn = document.querySelector('.replace-btn');
const gridPowers = document.querySelector('.grid-powers');
let sumToNumber = document.querySelector('.sum');

// function that returns array of remainders
function getRemainders(num) {
    let result = [];
    do {
        result.push([num, num % 2]);
        num = Math.floor(num / 2);
    } while (num != 0);
    result.push([0, 0]);
    return result;
}

// all calculation after click button Zamień
replaceBtn.addEventListener('click', () => {
    number = document.querySelector('.form-input input').value * 1;
    const remaindersTab = getRemainders(number);
    let binTab = [];
    let sumToText = '';
    let sumNum = 0;

    // reset site
    gridRemainders.innerHTML = '';
    gridPowers.innerHTML = '';

    // remainders handle
    remaindersTab.forEach((val) => {
        const div1 = document.createElement('div');
        div1.textContent = val[0];
        gridRemainders.appendChild(div1);
        if (val[0] != 0) {
            const div2 = document.createElement('div');
            div2.textContent = val[1];
            gridRemainders.appendChild(div2);

            binTab.unshift(val[1]);
        }
    });

    // binary and powers handle
    binTab.forEach((num, ind) => {
        const div1 = document.createElement('div');
        div1.classList.add('row-1');
        div1.textContent = num;
        gridPowers.appendChild(div1);

        const div2 = document.createElement('div');
        div2.classList.add('row-2');
        div2.innerHTML = `2<sup>${binTab.length - 1 - ind}</sup>`;
        gridPowers.appendChild(div2);

        const div3 = document.createElement('div');
        num === 0 ? div3.classList.add('row-3-zero') : div3.classList.add('row-3');
        div3.textContent = 2 ** (binTab.length - 1 - ind);
        gridPowers.appendChild(div3);

        if (num != 0) {
            sumToText += `${2 ** (binTab.length - 1 - ind)} + `;
            sumNum += 2 ** (binTab.length - 1 - ind);
        }
    });

    // show number with sum
    let newSumToText = sumToText.slice(0, -2) + '= ' + sumNum;
    sumToNumber.textContent = newSumToText;
});
