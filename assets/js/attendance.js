//url contains applink share through app script deployment
const url = 'https://script.google.com/macros/s/AKfycbxP6Eicv_oF9Qa0Ku3s64KN0EkX2Y2zunZjvsppDbLw5QbB9CYoJ7jN2ANiDFGMo1MNuA/exec';
const loading = document.getElementById("loader");
loadData();
// console.log("newURL",newURL)
function loadData() {
    const sheet = "attendance";
    const newURL = url + '?data=' + sheet;
    fetch(newURL).then((rep) => rep.json()).then((data) => {
        loading.remove();
        const attendanceData = data.data;
        mapThroughData(attendanceData)
    })
}
function mapThroughData(data) {
    // console.log("namecheck", data)
    data.map((item,index) => {
        createContent(item, index)
        
    })
}

function createContent(item, index) {
    // console.log("data", item)
    let parentDiv = document.getElementById("ul_container");
    let li = document.createElement("li");
    li.setAttribute('style', "border-bottom: 1px solid #ede7e7; padding: 4px 0px 4px 0px")
    // vars for conditional styling
    const labA = item.a_lab_percentage;
    const theoryA = item.a_theory_percent;
    //data into vars
    const regNo = item.registration_no;
    const name = item.std_name;
    const theory_present = item.p_theory_percent == "#REF!" ? 00 : item.p_theory_percent ;
    const theoryP = theory_present.toFixed(1);
    const lab_present = item.p_lab_percentage == "#REF!" ? 00 : item.p_lab_percentage; 
    const labP = lab_present.toFixed(1);
    const divContainer = 
    `<div style="display: flex;" > 
        <div style="flex-basis: 25%" 
        class="
        ${theoryP == 100 && labP == 100 ? "text-green-200" : ""}
        ${theoryP <= 85 && theoryA < 20 || labP <= 85 && labA < 20 ? "text-yellow-200" : ""}
        ${theoryA >= 20 || labA >= 20 ? "text-red-200" : ""}
        ">
            ${regNo}
        </div>
        <div style="flex-basis: 25%" 
        class="
        ${theoryP == 100 && labP == 100 ? "text-green-200" : ""}
        ${theoryP <= 85 && theoryA < 20 || labP <= 85 && labA < 20 ? "text-yellow-200" : ""}
        ${theoryA >= 20 || labA >= 20 ? "text-red-200" : ""}
        "> 
            ${name} 
        </div>
        <div style="flex-basis: 25%" 
            class="
            ${theoryP == 100 ? "text-green-200" : ""}
            ${theoryP <= 85 && theoryA < 20 ? "text-yellow-200" : ""}
            ${theoryA >= 20 ? "text-red-200" : ""}
            ">
                ${theoryP}%
        </div>
        <div style="flex-basis: 25%"
            class="
            ${labP == 100 ? "text-green-200" : ""}
            ${labP <= 85 && labA < 20 ? "text-yellow-200" : ""}
            ${labA >= 20 ? "text-red-200" : ""}
            ">
                ${labP}%
        </div>
    </div>`
    li.innerHTML = divContainer;
    parentDiv.appendChild(li);
}