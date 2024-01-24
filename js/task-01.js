const categoriesList = document.getElementById('categories');
    
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of Categories: ${categoryItems.length}\n`);

categoryItems.forEach((categoryItem) => {
    const categoryHeader = categoryItem.querySelector('h2').textContent;
    
    const categoryElements = categoryItem.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryHeader}`);

    console.log(`Elements: ${categoryElements}\n`); 
});