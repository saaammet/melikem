const texts = [
"Çoyk bayık dutcam bugün ehehe",
"Aa çen... MEYABAAA",
"Çonyaa öyye oldu işte. Geyeceğini biyiyoydum 😎😎 Çana biy şıy veyiçem ama önce göbüşüyü doyuyy",
"Ooh iyi doyduk",
"Şimdi... Ciddileşme vakti.",
"Normalde bi abi burda oturmak istiyodu ama omas dedi ağladı onun yerine ben geldim",
"Off nereye koydummm",
"Allah Allahh...",
"BULDUUMMMMMM!",
"Buyrun açın okuyun nütfenn",
"Bu arada o abi çok şanslıymış. Çok güzel bir hanımefendisiniz."
];

let index = 0;

const img = document.getElementById("character");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const paperText = document.getElementById("paperText");

const normalIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
width="22" height="22" viewBox="0 0 24 24"
fill="none" stroke="currentColor"
stroke-width="2.5"
stroke-linecap="round"
stroke-linejoin="round">
<path d="M5 12h14"/>
<path d="m12 5 7 7-7 7"/>
</svg>
`;

nextBtn.innerHTML = normalIcon;

updateUI();

nextBtn.onclick = () => {

    index++;

    if(index < 11){

        img.src = `images/${index+1}.png`;
        text.innerText = texts[index];

        updateUI();

    } else {

    window.location.href = "index2.html";
}
};


function updateUI(){

    handleFoodButton();
    handlePaperText();
}

function handleFoodButton(){

    if(index === 2){

        nextBtn.innerHTML = "Yemek Ye";
        nextBtn.classList.add("foodBtn");

        nextBtn.style.position = "absolute";
        nextBtn.style.top = "15px";
        nextBtn.style.right = "15px";
        nextBtn.style.zIndex = "10";

    } else {

        nextBtn.innerHTML = normalIcon;
        nextBtn.classList.remove("foodBtn");

        nextBtn.style.position = "static";
        nextBtn.style.marginTop = "15px";
    }
}


function handlePaperText(){

    if(index === 10 && paperText){

        paperText.style.display = "block";

    } else if(paperText){

        paperText.style.display = "none";
    }
}


document.getElementById("continueBtn").onclick = () => {

    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
};