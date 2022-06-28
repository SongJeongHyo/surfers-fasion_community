
function openPop(){
    document.getElementById("popup_layer").style.display = "block";
}

function closePop(){
    document.getElementById("popup_layer").style.display="none";
}


let commentInput = document.getElementsByClassName("main_comment_text")[0];
let submitBtn = document.getElementsByClassName("main_comment_submit")[0];

function submit() {
    const box = document.getElementsByClassName("main-icon-like-text-write_comment")[0];

    const comments = document.createElement("div");
    const userName=document.createElement("div");
    const mainText=document.createElement("div");


    comments.classList.add('main-icon-like-text-write_commentbox')
    userName.classList.add("userName");
    mainText.classList.add("main-icon-like-text-write-subtext")


    userName.innerHTML = "jimin"
    mainText.innerText = commentInput.value;

    comments.appendChild(userName);
    comments.appendChild(mainText);

    box.appendChild(comments);
}

submitBtn.addEventListener("click", (event)=>{
    submit()
    commentInput.value="";
})

commentInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter'){
        submit()
        commentInput.value ="";
    }
})



var feed_like = 1;
function like(){
    if(feed_like == 1){
        document.getElementById("feed_like").src = "./img/heart.png";
        feed_like-=1;
    }
    else{
        document.getElementById("feed_like").src = "./img/emptyheart.png";
        feed_like+=1;
    }
}