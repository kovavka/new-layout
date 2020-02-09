import * as React from "react";
import './result-arrows.less'
import {StateService} from '../../services/StateService'

const START_ARROWS_OFFSET = 20;
const TEXT_PATH_OFFSET = 12;
const TEXT_INVERTED_PATH_OFFSET = 4;
const ARROW_BACKGROUND_WIDTH = 11;
const ARROW_WIDTH = 13.91;
const ARROW_HEIGHT = 7.63;

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

    containerRef = React.createRef<HTMLDivElement>()

    componentDidMount(): void {
        this.onFrameHeightChanged();
        StateService.instance.frameHeightChanged.add(this.onFrameHeightChanged, this);


    }

    componentWillUnmount(): void {
        StateService.instance.frameHeightChanged.remove(this.onFrameHeightChanged, this);
    }

    private onFrameHeightChanged() {
        let svgContainer = this.containerRef.current
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


                {/*<path*/}
                {/*    d={`M ${p00.x} ${p00.y} C ${c00.x} ${c00.y}, ${c10.x} ${c10.y}, ${p10.x} ${p10.y}*/}
                {/*    M ${p01.x} ${p01.y} C ${c01.x} ${c01.y}, ${c11.x} ${c11.y}, ${p11.x} ${p11.y}`}*/}
                {/*    stroke="currentColor" fill="none"/>*/}

                {/*<defs>*/}
                {/*    <path*/}
                {/*        id={id}*/}
                {/*        d={`M ${p00.x + xOffset} ${p00.y + yOffset} C ${c00.x + xOffset} ${c00.y + yOffset}, ${c10.x + xOffset} ${c10.y + yOffset}, ${p10.x + xOffset} ${p10.y + yOffset}*/}
                {/*    M ${p01.x + xOffset} ${p01.y + yOffset} C ${c01.x + xOffset} ${c01.y + yOffset}, ${c11.x + xOffset} ${c11.y + yOffset}, ${p11.x + xOffset} ${p11.y + yOffset}`}*/}
                {/*        stroke="currentColor" fill="none"/>*/}
                {/*</defs>*/}
                {/*<text>*/}
                {/*    <textPath xlinkHref={'#'+id} startOffset={textStartOffset+'%'} textAnchor="middle">*/}
                {/*        6400 + 300*/}
                {/*    </textPath>*/}
                {/*</text>*/}

            </g>
        );
    }

    private renderArrow() {
        return (
            <>
                <rect x={-ARROW_WIDTH} y="0" width={ARROW_BACKGROUND_WIDTH} height={ARROW_HEIGHT} fill="currentColor"/>
                <path d={`M 0 0 l-14.18 3.902 14.097 3.877c-1.346-3.302-1.345-4.455.083-7.78z`} fill="currentColor" />
            </>
        )
    }

    private renderLeftBottom(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = false;
        const fromBottomToLeft = true;

        let start = new Point(0, height/2 + START_ARROWS_OFFSET);
        let center = new Point(width/2 - offsetX, height/2 + offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, height);

        return (
            <g>
                {/*<path d={`M0,${height/2 + START_ARROWS_OFFSET} Q${width/2 - 50},${height/2 + 30} ${width/2 - START_ARROWS_OFFSET},${height} `} stroke="currentColor" fill="none"></path>*/}

                {this.renderPath('left-bottom', start, center, end, -TEXT_PATH_OFFSET, TEXT_PATH_OFFSET, 36)}
                {fromLeftToBottom && (
                    <g transform={`translate(0 ${height/2 - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToLeft && (
                    <g transform={`translate(0 ${height/2 + START_ARROWS_OFFSET  - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0) rotate(45) translate(${ARROW_WIDTH / 2} ${ARROW_WIDTH / 2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
            </g>
        )
    }

    private renderLeftTop(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = false;
        const fromBottomToLeft = true;


        let start =  new Point(0, height/2 - START_ARROWS_OFFSET);
        let center = new Point(width/2 - START_ARROWS_OFFSET - offsetX, height/2 - START_ARROWS_OFFSET - offsetY);
        let end = new Point(width/2 - START_ARROWS_OFFSET, 0);

        return (
            <g>
                {this.renderPath('left-top', start, center, end, -TEXT_INVERTED_PATH_OFFSET, -TEXT_INVERTED_PATH_OFFSET, 36)}

                {fromLeftToBottom && (
                    <g transform={`translate(0 ${height/2 - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToLeft && (
                    <g transform={`translate(0 ${height/2 + START_ARROWS_OFFSET  - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0) rotate(45) translate(${ARROW_WIDTH / 2} ${ARROW_WIDTH / 2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
            </g>
        )
    }

    private renderRightBottom(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = false;
        const fromBottomToLeft = true;

        let start = new Point(width/2 + START_ARROWS_OFFSET, height);
        let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 + START_ARROWS_OFFSET + offsetY);
        let end = new Point(width, height/2 + START_ARROWS_OFFSET);

        return (
            <g>
                {this.renderPath('right-bottom', start, center, end, TEXT_PATH_OFFSET, TEXT_PATH_OFFSET, 64)}

                {fromLeftToBottom && (
                    <g transform={`translate(0 ${height/2 - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToLeft && (
                    <g transform={`translate(0 ${height/2 + START_ARROWS_OFFSET  - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0) rotate(45) translate(${ARROW_WIDTH / 2} ${ARROW_WIDTH / 2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
            </g>
        )
    }

    private renderRightTop(offsetX: number, offsetY: number) {
        const {width, height} = this.state;
        const fromLeftToBottom = false;
        const fromBottomToLeft = true;

        let start = new Point(width/2 + START_ARROWS_OFFSET, 0);
        let center = new Point(width/2 + START_ARROWS_OFFSET + offsetX, height/2 - START_ARROWS_OFFSET - offsetY);
        let end = new Point(width, height/2 - START_ARROWS_OFFSET);

        return (
            <g>
                {this.renderPath('right-top', start, center, end, TEXT_INVERTED_PATH_OFFSET, -TEXT_INVERTED_PATH_OFFSET, 64)}
                {fromLeftToBottom && (
                    <g transform={`translate(0 ${height/2 - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToLeft && (
                    <g transform={`translate(0 ${height/2 + START_ARROWS_OFFSET  - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0) rotate(45) translate(${ARROW_WIDTH / 2} ${ARROW_WIDTH / 2})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
            </g>
        )
    }

    private renderHorizontal() {
        const {width, height} = this.state;
        const fromLeftToRight = true;
        const fromRightToLeft = false;

        return (
            <g>
                <path d={`M ${0} ${height/2} H ${width}`} stroke="currentColor" fill="none"/>
                {fromRightToLeft && (
                    <g transform={`translate(0 ${height/2 - ARROW_HEIGHT/2})`}>
                        <g transform={`translate(${ARROW_WIDTH} 0)`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromLeftToRight && (
                    <g transform={`translate(${width - ARROW_WIDTH} ${height/2 - ARROW_HEIGHT/2})`}>
                        <g transform={`rotate(180) translate(0 -${ARROW_HEIGHT})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
            </g>
        )
    }

    private renderVertical() {
        const {width, height} = this.state;
        const fromTopToBottom = true;
        const fromBottomToTop = false;

        return (
            <g>
                <path d={`M ${width/2} ${0} V ${height}`} stroke="currentColor" fill="none"/>

                {fromTopToBottom && (
                    <g transform={`translate(${width/2 - ARROW_HEIGHT/2} 0)`}>
                        <g transform={`rotate(90) translate(${ARROW_WIDTH} -${ARROW_HEIGHT})`}>
                            {this.renderArrow()}
                        </g>
                    </g>
                )}
                {fromBottomToTop && (
                    <g transform={`translate(${width/2 - ARROW_HEIGHT/2} ${height - ARROW_WIDTH})`}>
                        <g transform={`rotate(-90)`}>
                            {this.renderArrow()}
                       </g>
                    </g>
                )}
            </g>
        )
    }

    render() {
        // const {} = this.props;
        const {width, height} = this.state;
        let offsetX = 0.32 * (width / 2 - START_ARROWS_OFFSET * 2);
        let offsetY = 0.32 * (height / 2 - START_ARROWS_OFFSET * 2);

        return (
            <div className="result-arrows">
                <div className="result-arrows__inner" ref={this.containerRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>

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