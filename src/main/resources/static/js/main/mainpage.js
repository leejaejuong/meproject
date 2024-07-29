{// 진행중인토론 스크롤
    document.addEventListener('DOMContentLoaded', () => {
        // ul 클래스 이름
        let $list = document.querySelector('#debate');
        if (!$list) {
            console.error("Element not found");
            return;
        }

        // 화면에 보이는 범위
        let $listScrollWidth = $list.scrollWidth;
        // 화면 밖까지의 전체 범위

        let $listClientWidth = $list.clientWidth;

        let startX = 0;
        let nowX = 0;
        let endX = 0;
        let listX = 0;
        // 현재 스크롤 위치

        const getClientX = (e) => {
            return e.touches ? e.touches[0].clientX : e.clientX;
        };

        const getTranslateX = () => {
            const transformMatrix = getComputedStyle($list).transform;
            if (transformMatrix !== 'none') {
                return parseInt(transformMatrix.split(/[^\-0-9]+/g)[5]);
            }
            return 0;
        };

        const setTranslateX = (x) => {
            $list.style.transform = `translateX(${x}px)`;
        };

        const onScrollStart = (e) => {
            startX = getClientX(e);
            listX = getTranslateX();
            window.addEventListener('mousemove', onScrollMove);
            window.addEventListener('touchmove', onScrollMove);
            window.addEventListener('mouseup', onScrollEnd);
            window.addEventListener('touchend', onScrollEnd);
        };


        const onScrollMove = (e) => {
            nowX = getClientX(e);
            let newX = listX + nowX - startX;
            if (newX > 0) {
                newX = 0;
            } else if (newX < (($listClientWidth - 800) * -1)) {
                newX = (($listClientWidth - 800) * -1);
            }
            setTranslateX(newX);
        };
        const onScrollEnd = (e) => {
            window.removeEventListener('mousemove', onScrollMove);
            window.removeEventListener('touchmove', onScrollMove);
            window.removeEventListener('mouseup', onScrollEnd);
            window.removeEventListener('touchend', onScrollEnd);
        };

        const onClick = (e) => {
            if (startX - endX !== 0) {
                e.preventDefault();
            }
        };

        const bindEvents = () => {
            $list.addEventListener('mousedown', onScrollStart);
            $list.addEventListener('touchstart', onScrollStart);
            $list.addEventListener('click', onClick);
        };

        bindEvents();
    });
}
{
    document.addEventListener('DOMContentLoaded', () => {
        // ul 클래스 이름
        let $list = document.querySelector('#offline');
        if (!$list) {
            console.error("Element not found");
            return;
        }

        // 화면에 보이는 범위
        let $listScrollWidth = $list.scrollWidth;
        // 화면 밖까지의 전체 범위
        let $listClientWidth = $list.clientWidth;

        let startX = 0;
        let nowX = 0;
        let endX = 0;
        let listX = 0;
        // 현재 스크롤 위치

        const getClientX = (e) => {
            return e.touches ? e.touches[0].clientX : e.clientX;
        };

        const getTranslateX = () => {
            const transformMatrix = getComputedStyle($list).transform;
            if (transformMatrix !== 'none') {
                return parseInt(transformMatrix.split(/[^\-0-9]+/g)[5]);
            }
            return 0;
        };

        const setTranslateX = (x) => {
            $list.style.transform = `translateX(${x}px)`;
        };

        const onScrollStart = (e) => {
            startX = getClientX(e);
            listX = getTranslateX();
            window.addEventListener('mousemove', onScrollMove);
            window.addEventListener('touchmove', onScrollMove);
            window.addEventListener('mouseup', onScrollEnd);
            window.addEventListener('touchend', onScrollEnd);
        };


        const onScrollMove = (e) => {
            nowX = getClientX(e);
            let newX = listX + nowX - startX;
            if (newX > 0) {
                newX = 0;
            } else if (newX < (($listClientWidth - 800) * -1)) {
                newX = (($listClientWidth - 800) * -1);
            }
            setTranslateX(newX);
        };
        const onScrollEnd = (e) => {
            window.removeEventListener('mousemove', onScrollMove);
            window.removeEventListener('touchmove', onScrollMove);
            window.removeEventListener('mouseup', onScrollEnd);
            window.removeEventListener('touchend', onScrollEnd);
        };

        const onClick = (e) => {
            if (startX - endX !== 0) {
                e.preventDefault();
            }
        };

        const bindEvents = () => {
            $list.addEventListener('mousedown', onScrollStart);
            $list.addEventListener('touchstart', onScrollStart);
            $list.addEventListener('click', onClick);
        };

        bindEvents();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // ul 클래스 이름
    let $list = document.querySelector('#post');
    if (!$list) {
        console.error("Element not found");
        return;
    }

    // 화면에 보이는 범위
    let $listScrollWidth = $list.scrollWidth;
    // 화면 밖까지의 전체 범위
    let $listClientWidth = $list.clientWidth;

    let startX = 0;
    let nowX = 0;
    let endX = 0;
    let listX = 0;
    // 현재 스크롤 위치

    const getClientX = (e) => {
        return e.touches ? e.touches[0].clientX : e.clientX;
    };

    const getTranslateX = () => {
        const transformMatrix = getComputedStyle($list).transform;
        if (transformMatrix !== 'none') {
            return parseInt(transformMatrix.split(/[^\-0-9]+/g)[5]);
        }
        return 0;
    };

    const setTranslateX = (x) => {
        $list.style.transform = `translateX(${x}px)`;
    };

    const onScrollStart = (e) => {
        startX = getClientX(e);
        listX = getTranslateX();
        window.addEventListener('mousemove', onScrollMove);
        window.addEventListener('touchmove', onScrollMove);
        window.addEventListener('mouseup', onScrollEnd);
        window.addEventListener('touchend', onScrollEnd);
    };


    const onScrollMove = (e) => {
        nowX = getClientX(e);
        let newX=listX + nowX - startX;
        if(newX > 0){
            newX=0;
        }else if(newX < (($listClientWidth-800)*-1)){
            newX=(($listClientWidth-800)*-1);
        }
        setTranslateX(newX);
    };
    const onScrollEnd = (e) => {
        window.removeEventListener('mousemove', onScrollMove);
        window.removeEventListener('touchmove', onScrollMove);
        window.removeEventListener('mouseup', onScrollEnd);
        window.removeEventListener('touchend', onScrollEnd);
    };

    const onClick = (e) => {
        if (startX - endX !== 0) {
            e.preventDefault();
        }
    };

    const bindEvents = () => {
        $list.addEventListener('mousedown', onScrollStart);
        $list.addEventListener('touchstart', onScrollStart);
        $list.addEventListener('click', onClick);
    };

    bindEvents();
});
document.addEventListener('DOMContentLoaded', () => {
    // ul 클래스 이름
    let $list = document.querySelector('#book');
    if (!$list) {
        console.error("Element not found");
        return;
    }

    // 요소 복제 기존요소를 모두복제하여 리스트 끝에 추가
    let $items = Array.from($list.children);//요소들을 배열로 저장
    let itemCount = $items.length;//요소들 개수
    $items.forEach(item => {
        $list.appendChild(item.cloneNode(true));
        // 리스트 끝에 복제본 추가
        $list.insertBefore(item.cloneNode(true), $list.firstChild);
    //     리스트 시작에 복제본 추가
    });

    // 화면에 보이는 범위
    let $listScrollWidth = $list.scrollWidth;
    // 화면 밖까지의 전체 범위
    let $listClientWidth = $list.clientWidth;

    let startX = 0;
    let nowX = 0;
    let endX = 0;
    let listX = -$listScrollWidth / 2; // 시작 위치를 리스트의 중간으로 설정
    let isMouseDown = false;

    const getClientX = (e) => {
        return e.touches ? e.touches[0].clientX : e.clientX;
    };

    const getTranslateX = () => {
        const transformMatrix = getComputedStyle($list).transform;
        if (transformMatrix !== 'none') {
            return parseInt(transformMatrix.split(/[^\-0-9]+/g)[5]);
        }
        return 0;
    };

    const setTranslateX = (x) => {
        $list.style.transform = `translateX(${x}px)`;
    };

    const onScrollStart = (e) => {
        startX = getClientX(e);
        listX = getTranslateX();
        isMouseDown = true;
        window.addEventListener('mousemove', onScrollMove);
        window.addEventListener('touchmove', onScrollMove);
        window.addEventListener('mouseup', onScrollEnd);
        window.addEventListener('touchend', onScrollEnd);
    };

    const onScrollMove = (e) => {
        if (!isMouseDown) return;

        nowX = getClientX(e);
        let newX = listX + nowX - startX;

        // 순환 스크롤 논리
        if (newX > 0) {
            newX = -$listScrollWidth / 2 + (newX % ($listScrollWidth / 2));
        } else if (newX < -($listScrollWidth-2400)) {
            newX = -$listScrollWidth / 2 + (newX % ($listScrollWidth / 2));
        }
        console.log("newx"+newX);
        console.log("$listScro"+$listScrollWidth)
        console.log(-($listScrollWidth-2400))
        setTranslateX(newX);
    };

    const onScrollEnd = () => {
        isMouseDown = false;
        window.removeEventListener('mousemove', onScrollMove);
        window.removeEventListener('touchmove', onScrollMove);
        window.removeEventListener('mouseup', onScrollEnd);
        window.removeEventListener('touchend', onScrollEnd);
    };

    const onClick = (e) => {
        if (startX - endX !== 0) {
            e.preventDefault();
        }
    };

    const bindEvents = () => {
        $list.addEventListener('mousedown', onScrollStart);
        $list.addEventListener('touchstart', onScrollStart);
        $list.addEventListener('click', onClick);
    };

    setTranslateX(listX);
    bindEvents();
});

