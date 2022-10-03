//url contains applink share through app script deployment
const url = 'https://script.google.com/macros/s/AKfycbxP6Eicv_oF9Qa0Ku3s64KN0EkX2Y2zunZjvsppDbLw5QbB9CYoJ7jN2ANiDFGMo1MNuA/exec';
const sheet = "week_data";
const loading = document.getElementById("loader");
const newURL = url + '?data=' + sheet;
loadData();
// console.log("newURL",newURL)
function loadData() {
    fetch(newURL).then((rep) => rep.json()).then((data) => {
        loading.remove();
        // console.log("this is somethins", data.data.map(e => e))
        const listData = data.data;
        mapThroughData(listData)
    })
}

function mapThroughData(data) {
    // console.log("data inside mapThroughData 23:::", data)
    data.map(item => {
        createContent(item)
    })
}

function createContent(item) {

    let announcementDiv = document.getElementById("announcement_container");
    let announcementContainer = document.createElement("div");
    announcementContainer.classList.add("announcement");

    let announcementCard =
        `${item.visible == "y" ? `
        <h2>${item.week} - Announcement</h2>
        <span class="announcement-meta">${item.announcement_date} &middot; 0 min read</span>
        <ol style="margin: 8px 0px 0px">
            ${item.lab_a == "n" || item.lab_a == "" ? "" : `<li>${item.week} ${item.lab_a} : Deadline <span style="color: #7253ed; font-style: italic "> ${item.lec_a_date}, ${item.lab_a_deadline_time}. </span> </li>`}
            ${item.lab_b == "n" || item.lab_b == "" ? "" : `<li>${item.week} ${item.lab_b} : Deadline <span style="color: #7253ed; font-style: italic "> ${item.lec_b_date}, ${item.lab_b_deadline_time}. </span> </li>`}
            ${item.assignment_no == "n" || item.assignment_no == "" ? "" : `<li>${item.week} ${item.assignment_no} : Deadline <span style="color: #7253ed; font-style: italic "> ${item.assignment_date}, ${item.assign_deadline_time}. </span> </li>`}
            <li> Quiz in both lectures</li>
            <li> Details of them are available in calendar section</li>
        </ol>
        <p>Late submissions </p>
        <ul style="margin:0px 0px 16px">
            <li>Labs with 75% maximum credit till 11:59 pm of same day, No late submission after that.</li>
            <li>No late submissions acceptable for assignment.</li>
        </ul>
    ` : ""}`

    announcementContainer.innerHTML = announcementCard;
    announcementDiv.appendChild(announcementContainer);

}


