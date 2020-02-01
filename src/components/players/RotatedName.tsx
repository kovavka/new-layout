import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_PRIMARY, FONT_SIZE_PRIMARY_PX} from '../../Variables';

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
    };

    componentDidMount(): void {
        // setTimeout(() => {
        //     this.setState({
        //         maxNameHeight: this.calcMaxNameHeight()
        //     })
        // }, 100)
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<ISate>): void {
        // let maxNameHeight = this.calcMaxNameHeight();
        //
        // if (maxNameHeight !== prevState.maxNameHeight) {
        //     this.setState({
        //         maxNameHeight: maxNameHeight
        //     })
        // }
    }

    private calcMaxNameHeight() {
        let textElement: any = document.getElementById(this.props.id);
        let textBox = textElement.getBBox();
        return textBox.width;
    }

    render() {
        const {name, id} = this.props;

        return (
            <div>
                {name}
            </div>
        )
    }
}