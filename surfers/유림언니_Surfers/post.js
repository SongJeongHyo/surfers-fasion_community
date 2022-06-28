/*
document.getElementById('post_date').value=localStorage.getItem("time");
document.getElementById('photo').ssrc=localStorage.getItem("picture");
document.getElementById('my_profile').src=localStorage.getItem("profile");
document.getElementById('my_id').value=localStorage.getItem("id");
document.getElementById('friend_profile').src=localStorage.getItem("fprofile");
document.getElementById('heart').src=localStorage.getItem("heart");
document.getElementById('text').value=localStorage.getItem("text");
document.getElementById('fid').value=localStorage.getItem("fid");
document.getElementById('comment_date').value=localStorage.getItem("comment_date");
document.querySelector("#reply").value=localStorage.getItem("reply");
*/

function upload_comment(){
    /*var set=document.createElement('div');
    set.setAttribute("id",document.getElementById('my_id').value);
    document.getElementById('@@').appendChild(set);*/
    const comment=document.getElementById('commenting').value;
    localStorage.setItem("comment",comment);
    var test=document.getElementById('comment');
    var test1=test.cloneNode(true);
    var sss=document.getElementById('my_id').value;
    document.getElementById('@@').appendChild(test1);
    //document.getElementById('fid').value=localStorage.getItem("id");
    //document.getElementById('comment_date').value=localStorage.getItem("comment_date");
    //document.getElementById("comment").value=localStorage.getItem("comment");
}


