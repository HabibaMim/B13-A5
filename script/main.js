let currentTab= "all";
const tabActive =["bg-blue-500","text-white"];
const tabInactive =["bg-white"];

function switchTab(tab){
    const tabs=["all", "open", "closed"];
    currentTab=tab;
    
    for (const t of tabs){
    const tabName = document.getElementById("tab-"+t);

    if (t === tab){
        tabName.classList.remove(...tabInactive)
        tabName.classList.add(...tabActive)}

        else{
        tabName.classList.remove(...tabActive)
        tabName.classList.add(...tabInactive)
        
            }
    }}
    switchTab(currentTab);

// // const categoriesContainer =document.getElementById("categoriesContainer")

// // async function loadCategories (){
// //     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues",);
// //     const data = await res.json();
// //     console.log(data);
// //     data.data.forEach((category)=>{
// //         const btn = document.createElement("button");
// //         btn.className= "w-[120px] py-[5px] px-[20px] rounded-md border-gray-100 border-[1px] transition-all duration-200";
// //         btn.innerHTML =category.status;
// //         categoriesContainer.appendChild(btn);
// //     })
    
// //     }
    

const categoriesContainer =document.getElementById("all-container")

// loadCategories ();

async function loadCards (){
    const res = await fetch ("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    displayCards(data.data);
}

function displayCards(cards){
    cards.forEach((card) => {
        const card1 = document.createElement("div")
        card1.className="bg-white"
        card1.innerHTML=`  <div>
                <div class="border-1 h-[256px] border-gray-200 bg-white shadow-md rounded-md">
                    <div class="p-[16px] border-b-1 border-gray-200">
                    <div class="flex justify-between">
                        <img src="./assets/Open-Status.png" alt="">
                        <p class="text-[12px]">${card.priority}</p>
                    </div>
                    <div>
                       <p class="text-[14px] font-semibold"> ${card.title}</p>
                        <p class="text-[12px] text-gray-500">${card.description}</p>
                        <div class="flex gap-[8px]">
                        <div class="text-[11px] badge badge-soft badge-error">${card.labels[0]}</div>
                        <div class="text-[11px] badge badge-soft badge-warning">${card.labels[1]}</div>
                        </div>
                    </div>
                    </div>
                    <div class="p-[16px]">
                        <div>
                            <p class="text-[12px] text-gray-500">#1 by ${card.author}</p>
                            <p class="text-[12px] text-gray-500">${new Date(card.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
        categoriesContainer.appendChild(card1);
    } )
}
   loadCards();