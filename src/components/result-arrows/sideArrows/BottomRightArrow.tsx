import * as React from 'react';
import {PlayerArrow, PlayerSide, ResultArrowsProps} from '../../../screens/table/base/ResultArrowsProps';
import {Direction, Point, ArrowList} from '../base';
import {getAngleForCurve, getCurvePoint, getPayment} from '../utils';
import {ArrowText} from '../base-components/ArrowText';
import {ArrowPath} from '../base-components/ArrowPath';
import {RiichiBetByCurve} from '../base-components/RiichiBet';
import {
    ARROW_BACKGROUND_WIDTH, ARROW_HEIGHT,
    RIICHI_HEIGHT, RIICHI_POINT_RADIUS,
    RIICHI_STROKE,
    RIICHI_WIDTH, START_ARROWS_OFFSET,
    TEXT_HEIGHT,
    TEXT_PATH_OFFSET,
} from '../vars';
import {ArrowEnd} from '../base-components/ArrowEnd';

type IProps = {
    offsetX: number
    offsetY: number
    width: number
    height: number
    arrows: ArrowList
}

export const BottomRightArrow = React.memo(function BottomRightArrow(props: IProps) {
    const {offsetX, offsetY, width, height, arrows} = props
    const arrow = arrows.BottomRight || arrows.RightBottom

    if (!arrow) {
        return null
    }

    const fromBottomToRight = arrow.start === PlayerSide.BOTTOM;
    const payment = getPayment(arrow);
    const id = 'bottom-right';
    const direction = Direction.BOTTOM_RIGHT;

    let start = new Point(width/2 + START_ARROWS_OFFSET, height);
    let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
    let end = new Point(width, height/2 + START_ARROWS_OFFSET);

    return (
        <g>
            <ArrowPath id={id} start={start} center={center} end={end} />
            <ArrowEnd start={start} center={center} end={end} inverted={!fromBottomToRight} direction={direction} />

            {arrow.withRiichi && (
                <RiichiBetByCurve start={start} center={center} end={end} inverted={!fromBottomToRight} direction={direction} />
            )}
            <ArrowText payment={payment} pathId={id} withPao={arrow.withPao} isTextAbove={false} direction={direction} />
        </g>
    );
})
