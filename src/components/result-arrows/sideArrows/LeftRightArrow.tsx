import * as React from 'react';
import {PlayerArrow, PlayerSide, ResultArrowsProps} from '../../../screens/table/base/ResultArrowsProps';
import {Direction, Point, ArrowList} from '../base';
import {getAngleForCurve, getCurvePoint, getPayment} from '../utils';
import {ArrowPath} from '../base-components/ArrowPath';
import {RiichiBet, RiichiBetByCurve} from '../base-components/RiichiBet';
import {
    ARROW_BACKGROUND_WIDTH, ARROW_HEIGHT,
    RIICHI_HEIGHT, RIICHI_POINT_RADIUS,
    RIICHI_STROKE,
    RIICHI_WIDTH, START_ARROWS_OFFSET,
    TEXT_HEIGHT,
    TEXT_PATH_OFFSET,
} from '../vars';
import {ArrowEnd, ArrowEndByAnge} from '../base-components/ArrowEnd';

type IProps = {
    width: number
    height: number
    arrows: ArrowList
}

export const LeftRightArrow = React.memo(function LeftRightArrow(props: IProps) {
    const {width, height, arrows} = props
    const arrow = arrows.LeftRight || arrows.RightLeft

    if (!arrow) {
        return null
    }

    const fromLeftToRight = arrow.start === PlayerSide.LEFT;
    let getTextAnchor = (fromStart) => fromStart ? 'start' : 'end';
    let getStartOffset = (fromStart) => fromStart ? '5%' : '95%';
    const riichiOffsetX = width * 0.05 + RIICHI_WIDTH / 2
    const riichiOffsetY = height / 2 + RIICHI_HEIGHT / 2 + TEXT_PATH_OFFSET

    const payment = getPayment(arrow);
    const id = 'left-right';

    return (
        <g>
            <path id={id} d={`M ${0} ${height/2} H ${width}`} stroke="currentColor" fill="none"/>
            {!fromLeftToRight && (
                <ArrowEndByAnge offset={new Point(0, height/2)} angle={0} />
            )}
            {fromLeftToRight && (
                <ArrowEndByAnge offset={new Point(width, height/2)} angle={180} />
            )}

            <text transform={`translate(${0} ${-TEXT_PATH_OFFSET})`}>
                <textPath xlinkHref={'#'+id} startOffset={getStartOffset(!fromLeftToRight)} textAnchor={getTextAnchor(!fromLeftToRight)} fill="currentColor">
                    {payment}
                </textPath>
            </text>
            {arrow.withRiichi && (
                <RiichiBet offsetX={riichiOffsetX} offsetY={riichiOffsetY} angle={0} />
            )}

            {arrow.withPao && (
                <text transform={`translate(${0} ${-TEXT_PATH_OFFSET})`}>
                    <textPath xlinkHref={'#'+id} startOffset={getStartOffset(fromLeftToRight)} textAnchor={getTextAnchor(fromLeftToRight)} fill="currentColor">
                        pao
                    </textPath>
                </text>
            )}
        </g>
    );
})
