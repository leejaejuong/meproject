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
}
