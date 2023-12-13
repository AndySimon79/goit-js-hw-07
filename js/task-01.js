// Count and display the number of categories
const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);

// Display information for each category
categories.forEach((category) => {
  const categoryName = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
