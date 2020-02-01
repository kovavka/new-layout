import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_PRIMARY} from "../../Variables";

type ISate = {
    maxNameHeight: number
}

type IProps = {
    id: string
    name: string
}

export class RotatedName extends React.Component<IProps, ISate> {
    state = {
        maxNameHeight: 100
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({
                maxNameHeight: this.calcMaxNameHeight()
            })
        }, 100)
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<ISate>): void {
        let maxNameHeight = this.calcMaxNameHeight()

        if (maxNameHeight !== prevState.maxNameHeight) {
            this.setState({
                maxNameHeight: maxNameHeight
            })
        }
    }

    private calcMaxNameHeight() {
        let textElement: any = document.getElementById(this.props.id)
        let textBox = textElement.getBBox()
        return textBox.width
    }

    render() {
        const {name, id} = this.props

        return (
           <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 18 ${this.state.maxNameHeight}`}>
               <g>
                   <text id={id} fill="currentColor" fontSize={FONT_SIZE_PRIMARY}>{name}</text>
               </g>
           </svg>
        )
    }
}