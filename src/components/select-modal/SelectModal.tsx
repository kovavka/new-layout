import * as React from "react";
import {ItemSelect} from './ItemSelect';
import ReactDOM from "react-dom";
import './select-modal.less'

type IProps = {
    items: ItemSelect[]
}

export class SelectModal extends React.Component<IProps> {
    element: HTMLDivElement
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.element);
    }

    componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(
            this.renderModal(),
            this.element
        );
    }

    private renderModal() {
        const {items} = this.props;

        return (
            <div className="modal">

                <div className="modal__bg" />
                <div className="modal__content select-modal">
                    <div className="select-modal__pointer" />

                    <div className="select-modal__items">
                        {items.map(item => (
                            <div className="select-modal__item">
                                {item.text}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )
    }
}