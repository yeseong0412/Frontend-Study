function day(){
    var date = new Date();
    const year= date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const initDayOfWeek = date.getDay();
    let dayOfWeek;
    switch (initDayOfWeek) {
        case 1: dayOfWeek = '월'; break;
        case 2: dayOfWeek = '화'; break;
        case 3: dayOfWeek = '수'; break;
        case 4: dayOfWeek = '목'; break;
        case 5: dayOfWeek = '금'; break;
        case 6: dayOfWeek = '토'; break;
        case 7: dayOfWeek = '일'; break;
        default : dayOfWeek = '잘못된 값';
    }
    document.getElementById("day").innerHTML = `${year} / ${month} / ${day} / ${dayOfWeek}`;
}
let cnt = 0;
let jobs = [];

function doJob(cnt) {
    document.getElementById("jobs").innerHTML = `할 일 ${cnt}개 남음`;
}   
function jobList(){
    document.getElementById("jobList").innerHTML = `할 일 목록 <br> <br>  ${jobs.join('<br>')}`;
    
}
function removeJob(){
    if(jobs.length != 0){
        jobs.pop();
        cnt--;
        doJob(cnt);
        jobList();
    }
}
function addJob() {
    let job = document.getElementById("doJob").value;
    if (job !== null && job !== undefined && job !== "") {
        jobs.push(job);
        cnt+=1;
        jobList();
    }
    console.log(cnt);
    console.log(jobs);
    doJob(cnt);
}