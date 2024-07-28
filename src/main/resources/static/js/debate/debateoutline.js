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
{//글자수 세기
    let $textrea = document.querySelector('.title-box');
    let $textcount = document.querySelector('.title-count');

    $textrea.addEventListener('keyup', onkeyup)
    function onkeyup() {
        const inputText = $textrea.value;
        $textcount.innerText = inputText.length;
    }

}
{ //range 바
    let $slider = document.querySelector('.gather-group');
    let $output = document.querySelector('.gather-value');
    $output.innerHTML = $slider.value;
    $slider.oninput = function () {
        $output.innerHTML = this.value;
    }
    let $sliderD = document.querySelector('.gather-group-d');
    let $outputD = document.querySelector('.gather-value-d');
    $outputD.innerHTML = $sliderD.value;
    $sliderD.oninput = function () {
        $outputD.innerHTML = this.value;
    }
}