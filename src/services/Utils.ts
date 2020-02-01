export function isMobile() {
    return !!(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i));
}

export function isIos() {
    return navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
}

export function preventIosAutoZoom() {
    if (isIos) {
        document.addEventListener(
            'dblclick',
            (e: any) => {
                    e.preventDefault()
                    e.stopPropagation();
                    return false;
            },
            {passive: false}
        )
    }
}