let country=document.querySelector("#country");
let matches=document.querySelector("#matches");
let runs=document.querySelector("#runs");
let fifties=document.querySelector("#fifties");
let hundreds=document.querySelector("#hundreds");
let average=document.querySelector("#average");
let image=document.querySelector("#im");
async function display() {
    let name1=document.querySelector("#val1").value;
    let name2=document.querySelector("#val2").value;
    const url1=`https://api.cricapi.com/v1/players?apikey=b191f696-c461-4037-9fe7-6f7cb72dfab7&offset=0&search=${name1}%20${name2}`;
    let data1=await fetch(url1);
    let realData1=await data1.json();
    let id1=realData1.data[0].id;
    const url2=`https://api.cricapi.com/v1/players_info?apikey=b191f696-c461-4037-9fe7-6f7cb72dfab7&id=${id1}`;
    let data2=await fetch(url2);
    let realData2=await data2.json();
    country.innerText=` Country: ${realData2.data.country}`;
    if(realData2.data.stats[0].matchtype!='test'){
        matches.innerText=` Matches: 0`;
        runs.innerText=` Runs: 0`;
        fifties.innerText=` Fifties: 0`;
        hundreds.innerText=` Hundreds: 0`;
        average.innerText=` Average: 0`;
        let newsrc=realData2.data.playerImg;
        image.src=newsrc;
    }
    else{
        matches.innerText=` Matches: ${realData2.data.stats[0].value}`;
        runs.innerText=` Runs: ${realData2.data.stats[3].value}`;
        fifties.innerText=` Fifties: ${realData2.data.stats[10].value}`;
        hundreds.innerText=` Hundreds: ${realData2.data.stats[8].value}`;
        average.innerText=` Average: ${realData2.data.stats[5].value}`;
        let newsrc=realData2.data.playerImg;
        image.src=newsrc;
    }
}
const btn= document.querySelector("#btn1");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    display();
});