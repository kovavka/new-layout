import * as React from 'react';
import './result-arrows.less';
import {PlayerArrow, PlayerSide, ResultArrowsProps} from '../../screens/table/base/ResultArrowsProps';
import {Direction, Point, ArrowList} from './base';
import {getAngleForCurve, getCurvePoint} from './utils';
import {ArrowText} from './ArrowText';
import {ArrowPath} from './ArrowPath';
import {RiichiBet} from './RiichiBet';
import {
    ARROW_BACKGROUND_WIDTH, ARROW_HEIGHT,
    RIICHI_HEIGHT, RIICHI_POINT_RADIUS,
    RIICHI_STROKE,
    RIICHI_WIDTH, START_ARROWS_OFFSET,
    TEXT_HEIGHT,
    TEXT_PATH_OFFSET,
} from './vars';
import {ArrowEnd} from './ArrowEnd';

type IProps = {
    offsetX: number
    offsetY: number
    width: number
    height: number
    arrows: ArrowList
}

export const BottomLeftArrow = React.memo(function BottomLeftArrow(props: IProps) {
    const {offsetX, offsetY, width, height, arrows} = props
    const arrow = arrows.BottomLeft || arrows.LeftBottom

    if (!arrow) {
        return null
    }

    const fromLeftToBottom = arrow.start === PlayerSide.LEFT;
    const showRiichi = arrow.withRiichi;
    const payment = arrow.honbaPoints ? `${arrow.points} + ${arrow.honbaPoints}` : arrow.points.toString();
    const id = 'left-bottom';
    const direction = Direction.BOTTOM_LEFT;

    let start = new Point(0, height/2 + START_ARROWS_OFFSET);
    let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
    let end = new Point(width/2 - START_ARROWS_OFFSET, height);

    console.log(start, center, end)
    return (
        <g>
            <ArrowPath id={id} start={start} center={center} end={end} />
            <ArrowEnd start={start} center={center} end={end} inverted={!fromLeftToBottom} direction={direction} />

            {showRiichi && (
                <RiichiBet start={start} center={center} end={end} inverted={!fromLeftToBottom} direction={direction} />
            )}
            <ArrowText payment={payment} pathId={id} withPao={arrow.withPao} isTextAbove={false} direction={direction} />
        </g>
    )
})
