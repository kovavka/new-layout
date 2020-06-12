export type YakuItem = {
    name: string
    onClick: () => void
    disabled?: boolean
    clicked?: boolean
}

export type YakuGroup = YakuItem[]


export enum ArrowState {
    UNAVAILABLE,
    AVAILABLE,
    DISABLED,
}

export enum SelectHandActiveTab {
    YAKU = 'Yaku',
    TOTAL = 'Total',
}
