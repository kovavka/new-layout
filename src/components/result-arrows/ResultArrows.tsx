import * as React from "react";
import './result-arrows.less'
// import {StateService} from '../../services/StateService'

const START_ARROWS_OFFSET = 20;
const TEXT_PATH_OFFSET = 4;
const TEXT_HEIGHT = 8;
const ARROW_BACKGROUND_WIDTH = 11;
const ARROW_HEIGHT = 7;
const RIICHI_STROKE = 1;
const RIICHI_POINT_RADIUS = 1.8;
const RIICHI_WIDTH = 42;
const RIICHI_HEIGHT = 7;

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

enum Direction {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
}

type IProps = {
}

type IState = {
    width: number
    height: number
}

export class ResultArrows extends React.Component<IProps, IState> {
    state = {
        width: 0,
        height: 0,
    };

    containerRef = React.createRef<HTMLDivElement>();

    componentDidMount(): void {
        this.onFrameHeightChanged();
        // StateService.instance.frameHeightChanged.add(this.onFrameHeightChanged, this);
    }

    componentWillUnmount(): void {
        // StateService.instance.frameHeightChanged.remove(this.onFrameHeightChanged, this);
    }

    private onFrameHeightChanged() {
        let svgContainer = this.containerRef.current;
        if (svgContainer) {
            this.setState({
                width: svgContainer.clientWidth,
                height: svgContainer.clientHeight,
            });
        }
    }

    private renderPath(id: string, start: Point, center: Point, end: Point) {
      return (
            <g>
                <path id={id} d={`M ${start.x},${start.y} Q${center.x},${center.y} ${end.x},${end.y} `} stroke="currentColor" />
            </g>
        );
    }

    private renderRiichiBet(start: Point, center: Point, end: Point, inverted: boolean, direction: Direction) {
        let t = inverted ? 0.5 : 0.5;
        let curvePoint1 = this.getCurvePoint(start, center, end, t);
        let curvePoint2 = this.getCurvePoint(start, center, end, t + 0.02);

        let la = [Direction.TOP_RIGHT, Direction.BOTTOM_LEFT].includes(direction) ? 1 : -1;
        let angle = this.getAngleForCurve(curvePoint1, curvePoint2) * la;

        let lx = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(direction) ? -1 : 1;
        let ly = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(direction) ? -1 : 1;
        let pathOffset = 6;
        let offsetX = curvePoint1.x + pathOffset * lx;
        let offsetY = curvePoint1.y + pathOffset * ly;

        return (
            <g transform={`translate(${offsetX} ${offsetY})`}>
                <g transform={`rotate(${angle})`}>
                    <rect width={RIICHI_WIDTH} height={RIICHI_HEIGHT} x={RIICHI_STROKE / 2 - RIICHI_WIDTH / 2} y={RIICHI_STROKE / 2 - RIICHI_HEIGHT / 2} rx="4" ry="4" stroke="currentColor" strokeWidth={RIICHI_STROKE} />
                    <circle r={RIICHI_POINT_RADIUS} cx={RIICHI_STROKE / 2} cy={RIICHI_STROKE / 2} style={{fill: "var(--color-danger)"}}  />
                </g>
            </g>
        )
    }

    private renderArrow(offset: Point, angle: number) {
        return (
            <g transform={`translate(${offset.x} ${offset.y})`}>
                <g transform={`rotate(${angle})`}>
                    <rect x="-1" y={-ARROW_HEIGHT/2} width={ARROW_BACKGROUND_WIDTH} height={ARROW_HEIGHT} style={{fill: "var(--bg-color)"}}/>
                    <path
                        d="m 0,0 12.693819,-3.57903 c -1.499915,3.09366 -0.947277,5.02928 0,7.17478 l -12.693819,-3.59575"
                        fill="currentColor" />
                </g>
            </g>
        );
    }

    private renderText(payment: string, pathId: string, withPao: boolean, isTextAbove: boolean, direction: Direction) {
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
    }

    private getBezierCurveCoordinate(p0: number, p1: number, p2: number, t: number) {
        //Quadratic Bezier curve
        return (1 - t)*(1 - t) * p0 +  2 * t * (1 - t) * p1 + t * t * p2;
    }

    private getCurvePoint(start: Point, center: Point, end: Point, t: number): Point {
        let bx = this.getBezierCurveCoordinate(start.x, center.x, end.x, t);
        let by = this.getBezierCurveCoordinate(start.y, center.y, end.y, t);
        return new Point(bx, by);
    }

    private getAngleForCurve(start: Point, point: Point): number {
        let l1 = point.x - start.x;
        let m1 = start.y - point.y;
        let l2 = 1;
        let m2 = 0;

        let cosA = (l1 * l2 + m1 * m2) / (Math.sqrt(l1 * l1 + m1 * m1) * Math.sqrt(l2 * l2 + m2 * m2));
        let angle =  Math.acos(cosA) * 180 / Math.PI;
        return angle;
    }

    private getArrowAngle(start: Point, center: Point, end: Point): number {
        let t = 0.08;
        let point = this.getCurvePoint(start, center, end, t);

        let angle = this.getAngleForCurve(start, point);
        return angle;
    }

    private renderArrows(start: Point, center: Point, end: Point, inverted: boolean, direction: Direction) {
        let l1 = [Direction.TOP_RIGHT, Direction.BOTTOM_LEFT].includes(direction) ? 1 : -1;
        let l2 = [Direction.TOP_LEFT, Direction.BOTTOM_RIGHT].includes(direction) ? 1 : -1;

        let angle1 = this.getArrowAngle(start, center, end) * l1;
        let angle2 = this.getArrowAngle(end, center, start) * l2;

        return (
            <>
                {inverted && this.renderArrow(start, angle1)}
                {!inverted && this.renderArrow(end, angle2)}
            </>
        )
    }

    private getTForCurve(p0: number, p1: number, p2: number, value: number) {
        let a = p0 - 2 * p1 + p2;
        let b = -2 * p0 + 2 * p1;
        let c = p0 - value;

        let d = b * b - 4 * a * c;
        let t1 = (-b + Math.sqrt(d)) / (2 * a);
        let t2 = (-b - Math.sqrt(d)) / (2 * a);

        let t = (t1 > 0 && t1 < 1) ? t1 : t2;
        return t;
    }

    private getYFor(start: Point, center: Point, end: Point, x: number) {
        let t = this.getTForCurve(start.x, center.x, end.x, x);
        let y = this.getBezierCurveCoordinate(start.y, center.y, end.y, t);
        return y;
    }

    private getXFor(start: Point, center: Point, end: Point, y: number) {
        let t = this.getTForCurve(start.y, center.y, end.y, y);
        let x = this.getBezierCurveCoordinate(start.x, center.x, end.x, t);

        return x;
    }

    private getCrossPoint(a1: Point, a2: Point, b1: Point, b2: Point) : Point{
        let la = a2.x - a1.x;
        let ma = a2.y - a1.y;
        let lb = b2.x - b1.x;
        let mb = b2.y - b1.y;

        let xa = a1.x;
        let ya = a1.y;
        let xb = b1.x;
        let yb = b1.y;

        let q1 = -yb * lb / mb + ya * la / ma + xb - xa;
        let q2 = la / ma - lb / mb;

        let y = q1 / q2;
        let x = (y - ya) * la / ma + xa;

        return new Point(x, y);
    }

    private renderLeftBottom(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = true;
        const showRiichi = true;
        const showPao = false;
        const payment = '1000 + 300';
        const id = 'left-bottom';
        const direction = Direction.BOTTOM_LEFT;

        let start = new Point(0, height/2 + START_ARROWS_OFFSET);
        let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, height);

        return (
            <g>
                {this.renderPath(id, start, center, end)}
                {this.renderArrows(start, center, end, !fromLeftToBottom, direction)}

                {showRiichi && this.renderRiichiBet(start, center, end, !fromLeftToBottom, direction)}
                {this.renderText(payment, id, showPao, false, direction)}
            </g>
        )
    }

    private renderLeftTop(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToTop = false;
        const showRiichi = true;
        const showPao = false;
        const payment = '16000';
        const id = 'left-top';
        const direction = Direction.TOP_LEFT;


        let start =  new Point(0, height/2 - START_ARROWS_OFFSET);
        let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 - START_ARROWS_OFFSET - offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, 0);

        return (
            <g>
                {this.renderPath('left-top', start, center, end)}
                {this.renderArrows(start, center, end, !fromLeftToTop, direction)}

                {showRiichi && this.renderRiichiBet(start, center, end, !fromLeftToTop, direction)}
                {this.renderText(payment, id, showPao, true, direction)}
            </g>
        )
    }

    private renderBottomRight(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromBottomToRight = true;
        const showRiichi = true;
        const showPao = false;
        const payment = '16000';
        const id = 'bottom-right';
        const direction = Direction.BOTTOM_RIGHT;

        let start = new Point(width/2 + START_ARROWS_OFFSET, height);
        let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
        let end = new Point(width, height/2 + START_ARROWS_OFFSET);

        return (
            <g>
                {this.renderPath('bottom-right', start, center, end)}
                {this.renderArrows(start, center, end, !fromBottomToRight, direction)}

                {showRiichi && this.renderRiichiBet(start, center, end, !fromBottomToRight, direction)}
                {this.renderText(payment, id, showPao, false, direction)}
            </g>
        );
    }

    private renderTopRight(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromTopToRight = false;
        const showRiichi = true;
        const showPao = false;
        const payment = '12000';
        const id = 'top-right';
        const direction = Direction.TOP_RIGHT;

        let start = new Point(width/2 + START_ARROWS_OFFSET, 0);
        let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 - START_ARROWS_OFFSET - offsetY);
        let end = new Point(width, height/2 - START_ARROWS_OFFSET);

        return (
            <g>
                {this.renderPath(id, start, center, end)}
                {this.renderArrows(start, center, end, !fromTopToRight, direction)}

                {showRiichi && this.renderRiichiBet(start, center, end, !fromTopToRight, direction)}
                {this.renderText(payment, id, showPao, true, direction)}
            </g>
        );
    }

    private renderHorizontal() {
        const {width, height} = this.state;
        const fromLeftToRight = true;

        let id = 'hor';
        let paymentFromStart = !fromLeftToRight;
        let getTextAnchor = (fromStart) => fromStart ? 'start' : 'end';
        let getStartOffset = (fromStart) => fromStart ? '5%' : '95%';

        return (
            <g>
                <path id={id} d={`M ${0} ${height/2} H ${width}`} stroke="currentColor" fill="none"/>
                {!fromLeftToRight && this.renderArrow(new Point(0, height/2), 0)}
                {fromLeftToRight && this.renderArrow(new Point(width, height/2), 180)}

                <text transform={`translate(${0} ${-TEXT_PATH_OFFSET})`}>
                    <textPath xlinkHref={'#'+id} startOffset={getStartOffset(paymentFromStart)} textAnchor={getTextAnchor(paymentFromStart)} fill="currentColor">
                        16000 + 1200
                    </textPath>
                </text>
                <text transform={`translate(${0} ${-TEXT_PATH_OFFSET})`}>
                    <textPath xlinkHref={'#'+id} startOffset={getStartOffset(!paymentFromStart)} textAnchor={getTextAnchor(!paymentFromStart)} fill="currentColor">
                        pao
                    </textPath>
                </text>
            </g>
        );
    }

    private renderVertical() {
        const {width, height} = this.state;
        const fromTopToBottom = true;
        let id = 'ver';
        let paymentFromStart = fromTopToBottom;
        let getTextAnchor = (fromStart) => fromStart ? 'start' : 'end';
        let getStartOffset = (fromStart) => fromStart ? '5%' : '95%';

        return (
            <g>
                <path id={id} d={`M ${width/2} ${0} V ${height}`} stroke="currentColor" fill="none"/>
                {fromTopToBottom && this.renderArrow(new Point(width / 2, 0), 90)}
                {!fromTopToBottom && this.renderArrow(new Point(width / 2, height), -90)}

                <text transform={`translate(${TEXT_PATH_OFFSET} ${0})`}>
                    <textPath xlinkHref={'#'+id} startOffset={getStartOffset(paymentFromStart)} textAnchor={getTextAnchor(paymentFromStart)} fill="currentColor">
                        16000 + 1200
                    </textPath>
                </text>
                <text transform={`translate(${TEXT_PATH_OFFSET} ${0})`}>
                    <textPath xlinkHref={'#'+id} startOffset={getStartOffset(!paymentFromStart)} textAnchor={getTextAnchor(!paymentFromStart)} fill="currentColor">
                        pao
                    </textPath>
                </text>
            </g>
        );
    }

    render() {
        // const {} = this.props;
        const {width, height} = this.state;
        let offsetX = 0.1 * (width / 2 - START_ARROWS_OFFSET * 2);
        let offsetY = 0.1 * (height / 2 - START_ARROWS_OFFSET * 2);

        return (
            <div className="result-arrows">
                <div className="result-arrows__inner" ref={this.containerRef}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width={width}
                         height={height}
                         viewBox={`0 0 ${width} ${height}`}
                         fill="none"
                         stroke="none"
                    >

                        {this.renderLeftBottom(offsetX, offsetY)}
                        {this.renderLeftTop(offsetX, offsetY)}
                        {this.renderBottomRight(offsetX, offsetY)}
                        {this.renderTopRight(offsetX, offsetY)}
                        {this.renderHorizontal()}
                        {this.renderVertical()}



                    </svg>


                </div>
            </div>
        );
    }
}