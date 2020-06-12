import * as React from "react";
import {SelectNumberModal} from './SelectNumberModal';
import './number-select.less'
import {classNames} from '../../services/ReactUtils';

type IProps = {
    value: number
    possibleValues: number[]
    onChange: (value: number) => void
}

type IState = {
    isModalShown: boolean
}

export class NumberSelect extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.checkValues();
        this.state = {isModalShown: false};
    }

    shouldComponentUpdate(): boolean {
        this.checkValues();
        return true;
    }

    private checkValues() {
        const {value, possibleValues} = this.props;
        if (possibleValues.indexOf(value) === -1) {
            throw new Error('possibleValues does not include value');
        }
    }

    private onValueClick() {
        this.setState({
            isModalShown: true
        });
    }

    private onValueSelect(value: number) {
        const {onChange} = this.props;
        this.hideModal();
        onChange(value);
    }

    private hideModal() {
        this.setState({
            isModalShown: false
        });
    }

    private get canDecrease(): boolean {
        const {value, possibleValues} = this.props;
        return value > possibleValues[0];
    }

    private get canIncrease(): boolean {
        const {value, possibleValues} = this.props;
        return value < possibleValues[possibleValues.length - 1];
    }

    private decrease() {
        if (this.canDecrease) {
            const {value, possibleValues, onChange} = this.props;
            let index = possibleValues.indexOf(value);
            let newValue = possibleValues[index - 1];
            onChange(newValue);
        }
    }

    private increase() {
        if (this.canIncrease) {
            const {value, possibleValues, onChange} = this.props;
            let index = possibleValues.indexOf(value);
            let newValue = possibleValues[index + 1];
            onChange(newValue);
        }
    }

    render() {
        const {value, possibleValues} = this.props;
        const {isModalShown} = this.state;

        return (
            <div className="number-select">
                <div
                    className={classNames(
                        'number-select__minus svg-button svg-button--xsmall',
                        {'svg-button--disabled': !this.canDecrease}
                    )}
                    onClick={this.decrease.bind(this)}
                >
                    <svg>
                        <path d="M 6 12 H 18" stroke="currentColor" strokeWidth={2} fill="none"/>
                    </svg>
                </div>
                <div className="number-select__value" onClick={this.onValueClick.bind(this)}>
                    {value}
                </div>
                <div
                    className={classNames(
                        'number-select__plus svg-button svg-button--xsmall',
                        {'svg-button--disabled': !this.canIncrease}
                        )}
                    onClick={this.increase.bind(this)}
                >
                    <svg>
                        <path d="M 6 12 H 18" stroke="currentColor" strokeWidth={2} fill="none"/>
                        <path d="M 12 6 V 18" stroke="currentColor" strokeWidth={2} fill="none"/>
                    </svg>
                </div>
                {isModalShown && (
                    <SelectNumberModal
                        onChange={this.onValueSelect.bind(this)}
                        possibleValues={possibleValues}
                        onHide={this.hideModal.bind(this)}
                    />
                )}
            </div>
        )
    }
}