const ul = document.querySelector("#categories");
const liItem = ul.querySelectorAll('.item');
console.log(`Number of categories: ${liItem.length}`);

liItem.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
    
    
});