{
    let $debateType = document.querySelector('.nextmake')

    $debateType.addEventListener("click", function () {
        // name 을통하여 값을 가져온다
        let number = document.querySelector('input[name="meetingId"]:checked').value;

        if (number == 1 || number == 2) {
            sessionStorage.setItem('meetingType', number);
            console.log(sessionStorage.getItem('meetingType'));
            location.href = `/member/debatetype`;
        } else {
            sessionStorage.setItem('meetingType', number);
            location.href = `/member/debateoutline`;
        }

    });


}
