// {
//     let $nextmake = document.querySelector('.gather-create-butten-before');
//
//     $nextmake.addEventListener('click',function (){
//         location.href=`/member/debatemake`;
//     })
// }






{
    let $slider = document.querySelector('.gather-group');
    let $output = document.querySelector('.gather-value');
$output.innerHTML=$slider.value;
$slider.oninput=function (){
    $output.innerHTML=this.value;
}
    let $sliderD = document.querySelector('.gather-group-d');
    let $outputD = document.querySelector('.gather-value-d');
    $outputD.innerHTML=$sliderD.value;
    $sliderD.oninput=function (){
        $outputD.innerHTML=this.value;
    }


}
