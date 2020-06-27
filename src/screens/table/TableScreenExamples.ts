import {TableInfoProps} from './base/TableInfoProps';

export function getTopPlayerBase() {
    return {
        name: "Random player",
        wind: "東",
        rotated: false,
    }
}

export function getLeftPlayerBase() {
    return {
        name: "Bla Blabla",
        wind: "南",
        rotated: false,
    }
}

export function getRightPlayerBase() {
    return {
        name: "Test Testov",
        wind: "北",
        rotated: false,
    }
}

export function getBottomPlayerBase() {
    return {
        name: "Super long long long name",
        wind: "西",
        rotated: false,
    }
}


export function getTableInfoBase(): TableInfoProps {
    return {
        round: '東 1',
        riichiCount: 1,
        honbaCount: 2,
        currentTime: '47:25',
        tableNumber: 4,
    } as TableInfoProps;
}
