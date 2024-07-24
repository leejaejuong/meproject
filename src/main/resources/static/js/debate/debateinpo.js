// {
//     let $nextmake = document.querySelector('.gather-create-butten-before');
//
//     $nextmake.addEventListener('click',function (){
//         location.href=`/member/debatemake`;
//     })
// }
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