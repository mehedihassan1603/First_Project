const loadCategory = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const dataCategory = data.data;
    // console.log(dataCategory)
    displayCategory(dataCategory); 
    
}


const displayCategory = (aaa) =>{
    const getCategoryId = document.getElementById('category');
    aaa.forEach(element => {
        const data = element.category;
        // console.log(element)
        const id = element.category_id;
        
        const createCategory = document.createElement('div');
        createCategory.classList = ``;
        createCategory.innerHTML = `
        
        <button onclick="handleId(${id})" class="px-5 py-2 rounded-md bg-slate-300">${data}</button>
        `;
        
        getCategoryId.appendChild(createCategory);
    });

   
}
const handleId = (id) =>{
    loadData(id);
}
loadCategory();
