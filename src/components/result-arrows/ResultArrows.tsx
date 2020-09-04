import * as React from 'react';
import './result-arrows.less';
import {PlayerSide, ResultArrowsProps} from '../../screens/table/base/ResultArrowsProps';
import {START_ARROWS_OFFSET} from './vars';
import {BottomLeftArrow} from './sideArrows/BottomLeftArrow';
import {ArrowList} from './base';
import {BottomRightArrow} from './sideArrows/BottomRightArrow';
import {TopBottomArrow} from './sideArrows/TopBottomArrow';
import {LeftRightArrow} from './sideArrows/LeftRightArrow';
import {TopLeftArrow} from './sideArrows/TopLeftArrow';
import {TopRightArrow} from './sideArrows/TopRightArrow';

declare var frame: any;

type IState = {
    width: number
    height: number
}

export class ResultArrows extends React.PureComponent<ResultArrowsProps, IState> {
    state = {
        width: 0,
        height: 0,
    };

    containerRef = React.createRef<HTMLDivElement>();

    componentDidMount(): void {
        this.onFrameHeightChanged();
        frame.addEventListener('resize', this.onFrameHeightChanged.bind(this));
    }

    componentWillUnmount(): void {
        frame.removeEventListener('resize', this.onFrameHeightChanged.bind(this));
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

    render() {
        const {width, height} = this.state;
        const {arrows} = this.props;
        let offsetX = 0.1 * (width / 2 - START_ARROWS_OFFSET * 2);
        let offsetY = 0.1 * (height / 2 - START_ARROWS_OFFSET * 2);

        let arrowList: ArrowList = {}
        arrows.forEach(arrow => {
            let start = PlayerSide[arrow.start].toLowerCase()
            start = start[0].toUpperCase() + start.slice(1)
            let end = PlayerSide[arrow.end].toLowerCase()
            end = end[0].toUpperCase() + end.slice(1)
            arrowList[start+end] = arrow
        })

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
                        <BottomLeftArrow offsetX={offsetX} offsetY={offsetY} arrows={arrowList} width={width} height={height} />
                        <BottomRightArrow offsetX={offsetX} offsetY={offsetY} arrows={arrowList} width={width} height={height} />
                        <TopLeftArrow offsetX={offsetX} offsetY={offsetY} arrows={arrowList} width={width} height={height} />
                        <TopRightArrow offsetX={offsetX} offsetY={offsetY} arrows={arrowList} width={width} height={height} />
                        <TopBottomArrow arrows={arrowList} width={width} height={height} />
                        <LeftRightArrow arrows={arrowList} width={width} height={height} />
                    </svg>
                </div>
            </div>
        );
    }
}