import * as React from 'react';
import './result-arrows.less';
import {Direction} from './base';
import {TEXT_HEIGHT, TEXT_PATH_OFFSET} from './vars';

type IProps = {
    payment: string
    pathId: string
    withPao: boolean
    isTextAbove: boolean
    direction: Direction
}

export const ArrowText = React.memo(function ArrowText(props: IProps) {
    const {payment, pathId, withPao, isTextAbove, direction} = props

    let textOffset = TEXT_PATH_OFFSET + (isTextAbove ? 0 : TEXT_HEIGHT);

    let lx = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(direction) ? 1 : -1;
    let ly = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(direction) ? 1 : -1;

    let offsetX = textOffset * lx;
    let offsetY = textOffset * ly;

    let text = payment + (withPao ? ' (pao)' : '');

    return (
        <text transform={`translate(${offsetX} ${offsetY})`}>
            <textPath xlinkHref={'#'+pathId} startOffset={50+'%'} textAnchor="middle" fill="currentColor">
                {text}
            </textPath>
        </text>
    )
})
