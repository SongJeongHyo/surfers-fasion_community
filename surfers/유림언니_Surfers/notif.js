/*const modal = document.querySelector('#window');
const notif = document.querySelector('.notification');

const HIDDEN_CLASSNAME = "hidden";

function modalOpen(event) {
    event.preventDefault();
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.background').style.display = 'block';
    modal.classList.remove(HIDDEN_CLASSNAME);
}
document.querySelector('#open').addEventListener('clickopen', modalOpen);

function modalClose(event) {
    event.preventDefault();
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.background').style.display = 'none';
    modal.classList.add(HIDDEN_CLASSNAME);
}
window.addEventListener('clickclose',modalClose);*/
//document.getElementById('date').value=localStorage.getItem("date");
//document.querySelector("#friend_profile img").src=localStorage.getItem("fprofile");
//document.querySelector(".fid").value=localStorage.getItem("fid");
//document.querySelector("#reply").value=localStorage.getItem("reply");
//document.querySelector('.post img').src=localStorage.getItem("picture");

function divqq(event){
    event.preventDefault();
    var div1=document.createElement('div');
    div1.setAttribute("id","!!");
    document.querySelector('.background').prepend(div1);
    var input1=document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("value",localStorage.getItem("comment_date"));
    input1.setAttribute("id","date");
    document.querySelector('#!!').appendChild(input1); 
    var test=document.getElementsByClassName('qq');
    var test1=test.cloneNode(true);
    document.querySelector('#!!').appendChild(test1); 
    document.querySelector("#!! #friend_profile img").src=localStorage.getItem("fprofile");
    document.querySelector('#!! .post img').src=localStorage.getItem("picture");
    document.querySelector('#!! #reply').value=localStorage.getItem("reply");
    document.querySelector('#!! #time').value=localStorage.getItem("comment_time");
    document.querySelector("#!! .fid").value=localStorage.getItem("fid");
    document.querySelector('#!! #my_id').value=localStorage.getItem("id");

}
/* 좋아요 */
function divqq1(event){
    event.preventDefault();
    var div1=document.createElement('div');
    div1.setAttribute("id","$$");
    document.querySelector('.background').prepend(div1);
    var input1=document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("value",localStorage.getItem("comment_date"));
    input1.setAttribute("id","date");
    document.querySelector('#$$').appendChild(input1); 
    var test=document.getElementsByClassName('qq');
    var test1=test.cloneNode(true);
    document.querySelector('#$$').appendChild(test1);     
    document.querySelector("#$$ #friend_profile img").src=localStorage.getItem("fprofile");
    document.querySelector('#$$ .post img').src=localStorage.getItem("picture");
    document.querySelector('#$$ #time').value=localStorage.getItem("comment_time");
    document.querySelector("#$$ .fid").value=localStorage.getItem("fid");
}
