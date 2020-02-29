import * as React from "react";
import './result-arrows.less'
import {StateService} from '../../services/StateService'

const START_ARROWS_OFFSET = 20;
const TEXT_PATH_OFFSET = 4;
const TEXT_HEIGHT = 8;
const ARROW_BACKGROUND_WIDTH = 11;
const ARROW_HEIGHT = 7;
const RIICHI_STROKE = 1;
const RIICHI_POINT_RADIUS = 1.8;
const RIICHI_WIDTH = 42;
const RIICHI_HEIGHT = 7;
const TEXT_START_OFFSET_PERCENT = 12; //todo пересчитать с косинусами и использовать px, а не проценты
const TEXT_END_OFFSET_PERCENT = 84;

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
        StateService.instance.frameHeightChanged.add(this.onFrameHeightChanged, this);


    }

    componentWillUnmount(): void {
        StateService.instance.frameHeightChanged.remove(this.onFrameHeightChanged, this);
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

    /*
    * inverted - text below curve -> need to add text height to offset
    * */
    private renderPath(id: string, start: Point, center: Point, end: Point, inverted: boolean, offsetDirection: Direction) {
        let paymentOffset = TEXT_PATH_OFFSET + (inverted ? TEXT_HEIGHT : 0);
        let paoOffset = TEXT_PATH_OFFSET + (inverted ? 0 : TEXT_HEIGHT);

        let paymentOffsetX = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(offsetDirection) ? paymentOffset : -paymentOffset;
        let paymentOffsetY = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(offsetDirection) ? paymentOffset : -paymentOffset;

        let paoOffsetX = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(offsetDirection) ? -paoOffset : paoOffset;
        let paoOffsetY = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(offsetDirection) ? -paoOffset : paoOffset;

        let paymentTextStartOffset = TEXT_START_OFFSET_PERCENT;
        let paoTextStartOffset = TEXT_END_OFFSET_PERCENT;

        return (
            <g>
                <path id={id} d={`M ${start.x},${start.y} Q${center.x},${center.y} ${end.x},${end.y} `} stroke="currentColor" />

                {/*<text transform={`translate(${paymentOffsetX} ${paymentOffsetY})`}>*/}
                {/*    <textPath xlinkHref={'#'+id} startOffset={paymentTextStartOffset+'%'} textAnchor="start" fill="currentColor">*/}
                {/*        16000 + 1200*/}
                {/*    </textPath>*/}
                {/*</text>*/}
                {/*<text transform={`translate(${paymentOffsetX} ${paymentOffsetY})`}>*/}
                {/*    <textPath xlinkHref={'#'+id} startOffset={paoTextStartOffset+'%'} textAnchor="end" fill="currentColor">*/}
                {/*        pao*/}
                {/*    </textPath>*/}
                {/*</text>*/}
            </g>
        );
    }

    private renderRiichiBet(start: Point, center: Point, end: Point, direction: Direction) {
        let curvePoint1 = this.getCurvePoint(start, center, end, 0.36);
        let curvePoint2 = this.getCurvePoint(start, center, end, 0.38);
        let angle = this.getAngleForCurve(curvePoint1, curvePoint2);

        let lx = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(direction) ? -1 : 1;
        let ly = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(direction) ? -1 : 1;
        let pathOffset = TEXT_PATH_OFFSET + RIICHI_HEIGHT / 2;
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

    private renderText(text: string, pathId: string, offset: Point, renderAtStart: boolean) {
        let textAnchor = renderAtStart ? 'start' : 'end';
        let startOffset = renderAtStart ? TEXT_START_OFFSET_PERCENT : TEXT_END_OFFSET_PERCENT;

        return (
            <text transform={`translate(${offset.x} ${offset.y})`}>
                <textPath xlinkHref={'#'+pathId} startOffset={startOffset+'%'} textAnchor={textAnchor} fill="currentColor">
                    {text}
                </textPath>
            </text>
        )
    }

    private getCurvePoint(start: Point, center: Point, end: Point, t: number): Point {
        //Quadratic Bezier curve
        let b = (p0, p1, p2) => (1 - t)*(1 - t) * p0 +  2 * t * (1 - t) * p1 + t * t * p2;
        let bx = b(start.x, center.x, end.x);
        let by = b(start.y, center.y, end.y);
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

    private renderLeftBottom(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = true;
        const showRiichi = true;
        const showPao = true;
        const payment = '16000';
        const id = 'left-bottom';

        let start = new Point(0, height/2 + START_ARROWS_OFFSET);
        let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, height);


        let angle1 = this.getArrowAngle(start, center, end);
        let angle2 = -this.getArrowAngle(end, center, start);


        let paymentOffset = TEXT_PATH_OFFSET + TEXT_HEIGHT;
        let paymentOffsetX = -paymentOffset;
        let paymentOffsetY = paymentOffset;

        let textOffset = new Point(paymentOffsetX, paymentOffsetY);

        return (
            <g>
                {this.renderPath(id, start, center, end, true, Direction.BOTTOM_LEFT)}

                {!fromLeftToBottom && this.renderArrow(start, angle1)}
                {fromLeftToBottom && this.renderArrow(end, angle2)}

                {this.renderText(payment, id, textOffset, !fromLeftToBottom)}

                {showRiichi && this.renderRiichiBet(start, center, end, Direction.BOTTOM_LEFT)}
                {showPao && this.renderText('pao', id, textOffset, fromLeftToBottom)}
            </g>
        )
    }

    private renderLeftTop(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToTop = false;
        const fromTopToLeft = true;


        let start =  new Point(0, height/2 - START_ARROWS_OFFSET);
        let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 - START_ARROWS_OFFSET - offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, 0);

        let angle1 = -this.getArrowAngle(start, center, end);
        let angle2 = this.getArrowAngle(end, center, start);

        return (
            <g>
                {this.renderPath('left-top', start, center, end, false, Direction.TOP_LEFT)}

                {fromTopToLeft && this.renderArrow(start, angle1)}
                {fromLeftToTop && this.renderArrow(end, angle2)}
            </g>
        )
    }

    private renderRightBottom(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromRightToBottom = false;
        const fromBottomToRight = true;

        let start = new Point(width/2 + START_ARROWS_OFFSET, height);
        let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
        let end = new Point(width, height/2 + START_ARROWS_OFFSET);

        let angle1 = -this.getArrowAngle(start, center, end);
        let angle2 = this.getArrowAngle(end, center, start);

        return (
            <g>
                {this.renderPath('right-bottom', start, center, end, true, Direction.BOTTOM_RIGHT)}

                {fromRightToBottom && this.renderArrow(start, angle1)}
                {fromBottomToRight && this.renderArrow(end, angle2)}

            </g>
        );
    }

    private renderRightTop(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromRightToTop = true;
        const fromTopToRight = false;

        let start = new Point(width/2 + START_ARROWS_OFFSET, 0);
        let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 - START_ARROWS_OFFSET - offsetY);
        let end = new Point(width, height/2 - START_ARROWS_OFFSET);

        let angle1 = this.getArrowAngle(start, center, end);
        let angle2 = -this.getArrowAngle(end, center, start);

        return (
            <g>
                {this.renderPath('right-top', start, center, end, false, Direction.TOP_RIGHT)}

                {fromRightToTop && this.renderArrow(start, angle1)}
                {fromTopToRight && this.renderArrow(end, angle2)}

            </g>
        );
    }

    private renderHorizontal() {
        const {width, height} = this.state;
        const fromLeftToRight = true;
        const fromRightToLeft = false;

        let offsetDirection = Direction.TOP_RIGHT;
        let id = 'hor';
        let paymentOffset = TEXT_PATH_OFFSET + (false ? TEXT_HEIGHT : 0);
        let paoOffset = TEXT_PATH_OFFSET + (false ? 0 : TEXT_HEIGHT);

        let paymentOffsetX = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(offsetDirection) ? paymentOffset : -paymentOffset;
        let paymentOffsetY = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(offsetDirection) ? paymentOffset : -paymentOffset;

        let paoOffsetX = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT].includes(offsetDirection) ? -paoOffset : paoOffset;
        let paoOffsetY = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT].includes(offsetDirection) ? -paoOffset : paoOffset;

        let paymentTextStartOffset = 15;
        let paoTextStartOffset = TEXT_END_OFFSET_PERCENT;

        return (
            <g>
                <path id={id} d={`M ${0} ${height/2} H ${width}`} stroke="currentColor" fill="none"/>
                {fromRightToLeft && this.renderArrow(new Point(0, height/2), 0)}
                {fromLeftToRight && this.renderArrow(new Point(width, height/2), 180)}


                {/*<text transform={`translate(${paymentOffsetX} ${paymentOffsetY})`}>*/}
                {/*    <textPath xlinkHref={'#'+id} startOffset={paymentTextStartOffset+'%'} textAnchor="start" fill="currentColor">*/}
                {/*        16000 + 1200 */}
                {/*    </textPath>*/}
                {/*</text>*/}
                {/*<text transform={`translate(${paoOffsetX} ${paoOffsetY})`}>*/}
                {/*    <textPath xlinkHref={'#'+id} startOffset={paoTextStartOffset+'%'} textAnchor="end" fill="currentColor">*/}
                {/*        pao*/}
                {/*    </textPath>*/}
                {/*</text>*/}
            </g>
        );
    }

    private renderVertical() {
        const {width, height} = this.state;
        const fromTopToBottom = true;
        const fromBottomToTop = false;

        return (
            <g>
                <path d={`M ${width/2} ${0} V ${height}`} stroke="currentColor" fill="none"/>

                {fromTopToBottom && this.renderArrow(new Point(width / 2, 0), 90)}
                {fromBottomToTop && this.renderArrow(new Point(width / 2, height), -90)}
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
                        {this.renderRightBottom(offsetX, offsetY)}
                        {this.renderRightTop(offsetX, offsetY)}
                        {this.renderHorizontal()}
                        {this.renderVertical()}



                    </svg>


                </div>
            </div>
        );
    }
}