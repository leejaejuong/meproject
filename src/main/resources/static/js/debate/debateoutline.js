{
    let modal = document.querySelector('.book-modal');
    let modalbtn = document.querySelector('.gather-create-book');
    let modalbtnclose = document.querySelector('.book-modal-body-close');



    modalbtn.addEventListener("click",()=>{
        modal.style.display="flex";
    })
    modalbtnclose.addEventListener("click",()=>{
        modal.style.display="none";
    })
    console.log(sessionStorage.getItem('debateType'));
    console.log(sessionStorage.getItem('meetingType'));

}
{ //버튼처리
    let $typeRemove = document.querySelector('.type-remove')
    $typeRemove.addEventListener("click",function (){
        location.href = `/member/debatetype`;
    });
}
