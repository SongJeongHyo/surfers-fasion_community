/*$('#input').keyup(function (e) {
    let content = $(this).val();
    // 글자수 세기 
    if (content.length == 0 || content == '') {
        $('.textCount').text('0자');
    } else { $('.textCount').text(content.length + '자'); } // 글자수 제한 
    if (content.length > 200) {
        // 200자 부터는 타이핑 되지 않도록 
        $(this).val($(this).val().substring(0, 200));
        // 200자 넘으면 알림창 뜨도록 
        alert('글자수는 200자까지 입력 가능합니다.');
    };
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {//이미지가 로드된 경우
            const previewImage = document.getElementById("preview").src
            previewImage = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);//reader가 이미지 읽기
    } else {
        document.getElementById('preview').src = "";
    }
}
const inputImage = document.getElementById("upload_file")
inputImage,addEventListener("change", e =>{readURL(e.target)})

var submit = document.getElementById('upload_file');
submit.onclick=showImage;

function showImage(){
    var newImage = document.getElementById('photo');
}*/
const BackForm=document.querySelector('#formform');
const HIDDEN_CLASSNAME = "hidden";
// 모달 열기
function modalOpen(event) {
    event.preventDefault();
    document.querySelector('.modal_hidden').style.display = 'block';
    document.querySelector('.bg').style.display = 'block';
    BackForm.classList.remove(HIDDEN_CLASSNAME);

}

// 모달 끄기
function modalClose(event) {
    event.preventDefault();
    document.querySelector('.modal_hidden').style.display = 'none';
    document.querySelector('.bg').style.display = 'none';
    BackForm.classList.add(HIDDEN_CLASSNAME);
}

//버튼 클릭리스너 달기
document.querySelector('#firstdelete').addEventListener('click', modalOpen);
document.querySelector('.close').addEventListener('click', modalClose);

//내용 저장
const upload=document.querySelector('#upload');
const set_private = document.querySelector('#check_open');
var check_box = document.querySelector('#cb1');
function submitContent(event){
    event.preventDefault();
    const text=document.querySelector('#textarea').value;
    localStorage.setItem("text",text);
    if(!(document.querySelector('#photo img')===null)){
        const picture = document.querySelector('#photo img').src;
        localStorage.setItem("picture",picture); 
    }
    
    var check=0;
    if(check_box.checked===true){
        check=1;
    }
    localStorage.setItem("checked",check);
    var time= new Date();
    localStorage.setItem("time",time);
}
upload.addEventListener("submit", submitContent);

//document.getElementById('id').value=localStorage.getItem("id");
//document.getElementById('my_profile').src=localStorage.getItem("profile");



/*var newImage=document.querySelector('#photo img');
if((!(textarea.value===null))&&(newImage.onload)){
    console.log("dd");
    upload.disabled=false;
}*/
/*사진 업로드*/
function setPhoto(event){
    event.preventDefault();
    var reader = new FileReader;
    reader.onload = function(event){
        var img=document.createElement("img");
        img.setAttribute("src",event.target.result);
        document.querySelector("#photo").appendChild(img);
    };
    reader.readAsDataURL(event.target.files[0]);
    document.querySelector('#photo1').remove();
}
upload.addEventListener("submit", submitContent);

/*사진 바꾸기
const change_Picture = document.querySelector('#photo img');
const photodiv = document.getElementById('#photo');
function change_Picturef(event){
    event.preventDefault();
    document.querySelector('#photo img').remove();
}
*/
/*
const savedText= localStorage.getItem("text");
const savedpicture= localStorage.getItem("picture");
if((savedText===null)&&(savedpicture===null)){
    localStorage.clear();
    upload.addEventListener("submit", submitContent);
} else{
    wclose();
}*/
/*나가기*/
function wclose(){
    window.open('','_self').close();
}
