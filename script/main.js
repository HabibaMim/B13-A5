let currentTab= "all";
const tabActive =["bg-blue-500","text-white"];
const tabInactive =["bg-white"];

const allStat=document.getElementById("count-all");
const modal = document.getElementById("modal");

const modaltitle = document.getElementById("modaltitle");
const modalstatus = document.getElementById("modalstatus");
const modalassignee = document.getElementById("modalassignee");
const modalupdatedAt = document.getElementById("modalupdatedAt");
const modallabel0 = document.getElementById("modallabel0");
const modallabel1 = document.getElementById("modallabel1");
const description = document.getElementById("description");
const modalassignee1 = document.getElementById("modalassignee1");
const priority = document.getElementById("priority");
const assigneetitle = document.getElementById("assigneetitle");


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

const categoriesContainer =document.getElementById("all-container");
const openContainer =document.getElementById("open-section");
const closedContainer= document.getElementById("closed-section");
const LoadingSpinner=document.getElementById("loadingSpinner");

// loadCategories ();
function showLoading (){
 LoadingSpinner.classList.remove("hidden");
 categoriesContainer.innerHTML="";
}

function hideLoading(){
 LoadingSpinner.classList.add("hidden");
}

let allCardsData=[];
async function loadCards (){
    
   showLoading ();
    const res = await fetch ("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
   hideLoading();
    allCardsData=data.data;
    displayCards(allCardsData, categoriesContainer);
}

function displayCards(cards, container){
    container.innerHTML ="";
    cards.forEach((card) => {
        const card1 = document.createElement("div")
        card1.className="bg-white"
        card1.innerHTML=`  <div>
                <div class="card cursor-pointer border-t-3 ${card.status==="open" ? "border-[#00A96E]" : "border-[#A855F7]"} h-[256px] bg-white shadow-md rounded-md" onclick="openModal(${card.id})">
                    <div class="p-[16px] border-b-1 border-gray-200">
                    <div class="flex justify-between">
                        ${card.status==="open" ? `<img src="./assets/Open-Status.png" alt="">` : `<img src="./assets/Closed-Status.png" alt="">` }
                        <p class="text-[12px] ${card.priority==="high" ? "badge badge-soft badge-error": card.priority==="medium" ? "badge badge-soft badge-warning": "badge badge-soft badge-primary"}">${card.priority}</p>
                    </div>
                    <div>
                       <p class="text-[14px] font-semibold"> ${card.title}</p>
                        <p class="text-[12px] text-gray-500">${card.description}</p>
                        <div class="flex gap-[8px]">
                        <div class="text-[11px] ${card.labels[0]==="bug" ? "badge badge-soft badge-error" : card.labels[0]==="help wanted" ? "badge badge-soft badge-warning" : card.labels[0]==="enhancement" ? "badge badge-soft badge-info" : "badge badge-soft badge-success"}">${card.labels[0]}</div>
                        <div class="text-[11px] ${card.labels[1]==="bug" ? "badge badge-soft badge-error" : card.labels[1]==="help wanted" ? "badge badge-soft badge-warning" : card.labels[1]==="enhancement" ? "badge badge-soft badge-info" : card.labels[1]===undefined ? "" : "badge badge-soft badge-success"} ${card.labels[1]===undefined ? "hidden" : "block"}">${card.labels[1]}</div>
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
        container.appendChild(card1);
        updateStat();
    } )
}
   loadCards();
    


    document.getElementById("tab-open").addEventListener("click", () =>{
        showLoading ();
        categoriesContainer.classList.add("hidden");
        closedContainer.classList.add("hidden");
        openContainer.classList.remove("hidden");
        const openCards=allCardsData.filter(card => card.status ==="open");
        displayCards(openCards, openContainer);
        hideLoading();
    updateStat();});

     document.getElementById("tab-closed").addEventListener("click", () =>{
        showLoading ();
        categoriesContainer.classList.add("hidden");
        openContainer.classList.add("hidden");
        closedContainer.classList.remove("hidden");
        const closedCards=allCardsData.filter(card => card.status ==="closed");
        displayCards(closedCards, closedContainer);
        hideLoading();
    updateStat();});

     document.getElementById("tab-all").addEventListener("click", () =>{
        showLoading ();
        closedContainer.classList.add("hidden");
        openContainer.classList.add("hidden");
        categoriesContainer.classList.remove("hidden");
        displayCards(allCardsData, categoriesContainer);
        hideLoading();
    updateStat();});

    async function openModal (id){
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,);
        const data = await res.json();
        const cardDetails = data.data;
        modaltitle.textContent=cardDetails.title;
        modalstatus.textContent=cardDetails.status;
        modalstatus.className=`${cardDetails.status==="open" ? "badge badge-soft badge-success" : "badge badge-soft badge-primary"}`
        modalassignee.innerHTML=`${cardDetails.assignee==="" ? "" : cardDetails.status==="open"? `Opened by ${cardDetails.assignee}`: `Closed by ${cardDetails.assignee}`}`;
        modalupdatedAt.innerHTML=`${new Date(cardDetails.updatedAt).toLocaleDateString()}`;
        modallabel0.textContent=cardDetails.labels[0];
        modallabel0.className=`${cardDetails.labels[0]==="bug" ? "badge badge-soft badge-error" : cardDetails.labels[0]==="help wanted" ? "badge badge-soft badge-warning" : cardDetails.labels[0]==="enhancement" ? "badge badge-soft badge-info" : "badge badge-soft badge-success"}`
        modallabel1.textContent=cardDetails.labels[1];
          modallabel1.className=`${cardDetails.labels[1]==="bug" ? "badge badge-soft badge-error" : cardDetails.labels[1]==="help wanted" ? "badge badge-soft badge-warning" : cardDetails.labels[1]==="enhancement" ? "badge badge-soft badge-info" : cardDetails.labels[1]===undefined ? "" : "badge badge-soft badge-success"}`
        description.textContent=cardDetails.description;
        modalassignee1.textContent=cardDetails.assignee;
        priority.textContent=cardDetails.priority;
        priority.className=`${cardDetails.priority==="high" ? "badge badge-error" : cardDetails.priority==="medium" ? "badge badge-warning" : "badge badge-primary"}`
        assigneetitle.innerHTML=`${cardDetails.assignee==="" ? "" : "Asignee:"}`

        modal.showModal();
    }
function updateStat (){


const counts = {
    all: categoriesContainer.children.length,
    open: openContainer.children.length,
    closed: closedContainer.children.length,
};

allStat.innerText = counts[currentTab]

}

document.getElementById("btn-search").addEventListener("click",()=>{
    const input = document.getElementById("input-search");
    const searchValue =input.value.trim().toLowerCase();
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then((res)=>res.json())
    .then((data)=>{
    const allWords=data.data;
displayCards(allWords, categoriesContainer);
 const allOpenWords=allWords.filter(card => card.status ==="open");
displayCards(allOpenWords, openContainer);
 const allClosedWords=allWords.filter(card => card.status ==="closed");
displayCards(allClosedWords, closedContainer);
document.getElementById("tab-open").addEventListener("click", () =>{
    const allOpenWords=allWords.filter(card => card.status ==="open");
displayCards(allOpenWords, openContainer);
updateStat ();
});
document.getElementById("tab-closed").addEventListener("click", () =>{
    const allClosedWords=allWords.filter(card => card.status ==="closed");
displayCards(allClosedWords, closedContainer);
updateStat ();})
document.getElementById("tab-all").addEventListener("click", () =>{
    displayCards(allWords, categoriesContainer);
    updateStat ();})
});
});
