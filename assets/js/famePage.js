//url contains applink share through app script deployment
const url = 'https://script.google.com/macros/s/AKfycbxP6Eicv_oF9Qa0Ku3s64KN0EkX2Y2zunZjvsppDbLw5QbB9CYoJ7jN2ANiDFGMo1MNuA/exec';
const loading = document.getElementById("loader");
loadData();
// console.log("newURL",newURL)
function loadData() {
    const sheet = "top_std_of_week";
    const sheet2 = "overall_top_std";
    const newURL = url + '?data=' + sheet;
    const newURL2 = url + '?data=' + sheet2;
    fetch(newURL).then((rep) => rep.json()).then((data) => {
        loading.remove();
        const top_std_of_week = data.data;
        // console.log("top_std_of_week",top_std_of_week)
        mapThroughData(top_std_of_week, "top_std_of_week")
    })
    fetch(newURL2).then((rep) => rep.json()).then((data) => {
        loading.remove();
        const overall_top_std = data.data;
        // console.log("overall_top_std",overall_top_std)
        mapThroughData(overall_top_std, "overall_top_std")
    })
}

function mapThroughData(data, container) {
    // console.log("data:::", data)

    data.map(item => {
        // console.log("item inside map::",item)
        createContent(item, container)
    })
}

function createContent(item, container) {
    // console.log("item::", item.student_name)
    let parentDiv = document.getElementById(container);
        let fameDiv = document.createElement("div");
        fameDiv.classList.add("staffer");
        const divContainer =
            `<img class="staffer-image" src="/assets/images/students/${item.image ? item.image : "placeholder.jpg"}" alt="user-image">
            <div>
                <h3 class="staffer-name">
                    ${item.student_name}
                </h3>
                ${item.student_email ? `<p><a href="mailto:${item.email}">${item.student_email}</a></p>` : ""}
                <p>${ item.week ? item.week : "" }</p>
            </div>`
            fameDiv.innerHTML = divContainer;
        parentDiv.appendChild(fameDiv);
}