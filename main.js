
const loadData = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data)
    const inData = data.data;
    displayData(inData);

}
const displayData = (data) => {
    const allData = document.getElementById('all-data');
    // console.log(data);
    const errorId = document.getElementById('error-id');
    errorId.textContent = '';
    allData.textContent = '';

    if (data.length === 0) {
        const createError = document.createElement('div');

        createError.innerHTML = `
        <div class="flex flex-col justify-center items-center pt-10 gap-4 ">
            <div>
                <img class="mx-auto" src="./Icon.png" alt="">
                

            </div>
            <h1 class="text-center text-2xl font-bold"> Ooops Sorry!! <br> There is no content here...</h1>
        </div>
        `;
        errorId.appendChild(createError);
    }


    else {
        const shouldSort = allData.getAttribute('data-sort') === 'true';

        if (shouldSort) {
            data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views));
        }

        data.forEach(element => {
            // console.log(element);
            const authorsInfo = element.authors;
            const title = element.title;
            const view = element.others.views;
            const getPostedDate = element.others.posted_date;
            const getSeconds = getPostedDate;

            const cY = Math.floor(getSeconds / 31536000);
            const cD = Math.floor((getSeconds %31536000) / 86400);
            const cH = Math.floor((getSeconds % 864000) / 3600);
            const cM = Math.floor((getSeconds % 3600) / 60);
            // const output =(cY ? `${cY}Y ` : '') + (cD ? `${cD}D ` : '') + (cH ? `${cH}hrs ` : '') + (cM ? `${cM}min` : '');
            let output = '';
            if(cY && cD){
                output =(cY ? `${cY} yrs ` : '') + (cD ? `${cD} ds ` : '');
            }
            else{
                output =(cH ? `${cH} hrs ` : '') + (cM ? `${cM} min` : '');
            }
            authorsInfo.forEach(element2 => {
                const proPic = element2.profile_picture;
                const proName = element2.profile_name;
                const badge = element2.verified;
                // console.log(badge)

                const craeteDiv = document.createElement('div');
                craeteDiv.classList = `card w-72 h-80 bg-base-100`;
                craeteDiv.innerHTML = `
                <figure class=" w-72 h-72 relative">
                    <img class="rounded-lg w-full h-full" src="${element.thumbnail}" alt="">
                    <div class="absolute py-1 px-2 top-[87%] left-[63%] rounded-lg bg-gray-700 text-[11px] text-white">
                        <h1>${output ? output + ' ago' : ''}</h1>
                    </div>
                </figure>
                
                <div class="flex flex-row gap-2 mt-4">
                    <div><img class="w-10 h-10 rounded-full" src="${proPic}" alt=""></div>
                
                    <div>
                        <h1 class="text-xl font-extrabold mb-1">${title}</h1>
                        <p class="text-sm mb-1 flex flex-row gap-1">${proName}   ${badge ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_13_959)">
                        <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                        <path d="M12.7094 7.20637L9.14065 10.7751L7.29065 8.92669C6.88909 8.52512 6.23752 8.52512 5.83596 8.92669C5.4344 9.32825 5.4344 9.97981 5.83596 10.3814L8.43127 12.9767C8.8219 13.3673 9.45627 13.3673 9.8469 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.761 6.80481 13.111 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_13_959">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        ` : ''}</p>
                        <p class="text-sm"><span class="text-base">${view}</span> Views</p>
                    </div>
                </div>
            `;
                allData.appendChild(craeteDiv);
            });
        });
    }
}

const handleSort = () => {
    const allData = document.getElementById('all-data');
    const btnAtribute = allData.setAttribute('data-sort', 'true'); // Set the data attribute to 'true' when the "Sort" button is clicked
    loadData(1000); // Load data, and it will be sorted if the data attribute is 'true'

    const btn = document.getElementById('btn-id');
    btn.style.backgroundColor = 'blue'; // Set the background color to blue
    btn.style.color = 'white';
};
loadData(1000)
