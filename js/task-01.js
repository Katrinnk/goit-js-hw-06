// 1
const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

// 2
categories.forEach(categories => {
    console.log(`Category: ${categories.firstElementChild.textContent}`);
    console.log(`Elements: ${categories.lastElementChild.childElementCount}`);
});