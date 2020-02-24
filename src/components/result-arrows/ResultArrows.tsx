import * as React from "react";
import './result-arrows.less'
import {StateService} from '../../services/StateService'

const START_ARROWS_OFFSET = 20;
const TEXT_PATH_OFFSET = 12;
const TEXT_INVERTED_PATH_OFFSET = 4;
const ARROW_BACKGROUND_WIDTH = 11;
const ARROW_HEIGHT = 7;

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
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

    private renderPath(id: string, start: Point, center: Point, end: Point, xOffset: number, yOffset: number, textStartOffset: number) {

        return (
            <g>
                <path d={`M ${start.x},${start.y} Q${center.x},${center.y} ${end.x},${end.y} `} stroke="currentColor" fill="none"></path>

                <defs>
                    <path id={id} d={`M ${start.x + xOffset},${start.y + yOffset} Q${center.x + xOffset},${center.y + yOffset} ${end.x + xOffset},${end.y + yOffset} `} stroke="currentColor" fill="none"></path>
                </defs>
                <text>
                    <textPath xlinkHref={'#'+id} startOffset={textStartOffset+'%'} textAnchor="middle">
                        6400 + 300
                    </textPath>
                </text>

            </g>
        );
    }

    private renderArrow() {
        return (
            <>
                <rect x="-1" y={-ARROW_HEIGHT/2} width={ARROW_BACKGROUND_WIDTH} height={ARROW_HEIGHT} fill="currentColor"/>
                <path
                    d="m 0,0 12.693819,-3.57903 c -1.499915,3.09366 -0.947277,5.02928 0,7.17478 l -12.693819,-3.59575"
                    fill="currentColor"
                />
            </>
        );
    }

    // private renderCurve(start: Point, center: Point, end: Point, ) {
    //
    // }


    private getAngle(start: Point, center: Point, end: Point) {
        let t = 0.08;

        //Quadratic Bezier curve
        let b = (p0, p1, p2) => (1 - t)*(1 - t) * p0 +  2 * t * (1 - t) * p1 + t * t * p2;
        let bx = b(start.x, center.x, end.x);
        let by = b(start.y, center.y, end.y);

        let l1 = bx - start.x;
        let m1 = start.y - by;
        let l2 = 1;
        let m2 = 0;

        let cosA = (l1 * l2 + m1 * m2) / (Math.sqrt(l1 * l1 + m1 * m1) * Math.sqrt(l2 * l2 + m2 * m2));
        let angle =  Math.acos(cosA) * 180 / Math.PI;
        return angle;
    }

    private renderLeftBottom(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = true;
        const fromBottomToLeft = false;

        let start = new Point(0, height/2 + START_ARROWS_OFFSET);
        let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, height);


        let angle1 = this.getAngle(start, center, end);
        let angle2 = -this.getAngle(end, center, start);

        return (
            <g>
                {this.renderPath('left-bottom', start, center, end, -TEXT_PATH_OFFSET, TEXT_PATH_OFFSET, 36)}

                {fromBottomToLeft && (
                    <g transform={`translate(${start.x} ${start.y})`}>
                        <g transform={`rotate(${angle1})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromLeftToBottom && (
                    <g transform={`translate(${end.x} ${end.y})`}>
                        <g transform={`rotate(${angle2})`}>
                                {this.renderArrow()}
                        </g>
                    </g>
                )}
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

        let angle1 = -this.getAngle(start, center, end);
        let angle2 = this.getAngle(end, center, start);

        return (
            <g>
                {this.renderPath('left-top', start, center, end, -TEXT_INVERTED_PATH_OFFSET, -TEXT_INVERTED_PATH_OFFSET, 36)}

                {fromTopToLeft && (
                    <g transform={`translate(${start.x} ${start.y})`}>
                        <g transform={`rotate(${angle1})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromLeftToTop && (
                    <g transform={`translate(${end.x} ${end.y})`}>
                        <g transform={`rotate(${angle2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
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

        let angle1 = -this.getAngle(start, center, end);
        let angle2 = this.getAngle(end, center, start);

        return (
            <g>
                {this.renderPath('right-bottom', start, center, end, TEXT_PATH_OFFSET, TEXT_PATH_OFFSET, 64)}

                {fromRightToBottom && (
                    <g transform={`translate(${start.x} ${start.y})`}>
                        <g transform={`rotate(${angle1})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToRight && (
                    <g transform={`translate(${end.x} ${end.y})`}>
                        <g transform={`rotate(${angle2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
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

        let angle1 = this.getAngle(start, center, end);
        let angle2 = -this.getAngle(end, center, start);

        return (
            <g>
                {this.renderPath('right-top', start, center, end, TEXT_INVERTED_PATH_OFFSET, -TEXT_INVERTED_PATH_OFFSET, 64)}

                {fromRightToTop && (
                    <g transform={`translate(${start.x} ${start.y})`}>
                        <g transform={`rotate(${angle1})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromTopToRight && (
                    <g transform={`translate(${end.x} ${end.y})`}>
                        <g transform={`rotate(${angle2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
            </g>
        );
    }

    private renderHorizontal() {
        const {width, height} = this.state;
        const fromLeftToRight = true;
        const fromRightToLeft = false;

        return (
            <g>
                <path d={`M ${0} ${height/2} H ${width}`} stroke="currentColor" fill="none"/>
                {fromRightToLeft && (
                    <g transform={`translate(0 ${height/2})`}>
                        {this.renderArrow()}
                    </g>
                )}
                {fromLeftToRight && (
                    <g transform={`translate(${width} ${height/2})`}>
                        <g transform={`rotate(180)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
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

                {fromTopToBottom && (
                    <g transform={`translate(${width/2} 0)`}>
                        <g transform={`rotate(90)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToTop && (
                    <g transform={`translate(${width/2} ${height})`}>
                        <g transform={`rotate(-90)`}>
                            {this.renderArrow()}
                       </g>
                    </g>
                )}
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>

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