
function getRotatedNameHeight() {
    return document.querySelector('.page-table__center')!.clientHeight + 'px';
}

export function getTopPlayerBase() {
    return {
        name: "Random player",
        wind: "東",
        rotated: false,
        nameWidth: undefined,
    }
}

export function getLeftPlayerBase() {
    return {
        name: "Bla Blabla",
        wind: "南",
        rotated: false,
        nameWidth: getRotatedNameHeight(),
    }
}

export function getRightPlayerBase() {
    return {
        name: "Test Testov",
        wind: "北",
        rotated: false,
        nameWidth: getRotatedNameHeight(),
    }
}

export function getBottomPlayerBase() {
    return {
        name: "Super long long long name",
        wind: "西",
        rotated: false,
        nameWidth: undefined,
    }
}