export type ResultArrowsProps = {
    TopLeft?: PlayerArrow
    TopRight?: PlayerArrow
    TopBottom?: PlayerArrow

    LeftTop?: PlayerArrow
    LeftRight?: PlayerArrow
    LeftBottom?: PlayerArrow

    RightTop?: PlayerArrow
    RightLeft?: PlayerArrow
    RightBottom?: PlayerArrow

    BottomTop?: PlayerArrow
    BottomLeft?: PlayerArrow
    BottomRight?: PlayerArrow
}

export type PlayerArrow = {
    points: number
    withRiichi: boolean
    withPao: boolean
}