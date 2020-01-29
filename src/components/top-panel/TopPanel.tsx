import * as React from "react";

export class TopPanel extends React.Component {
    render() {
        return (
            <div className="top-panel">
                <div className="svg-button">
                    <svg viewBox={'0 0 32 32'}
                         className={'tile__drawing tile__drawing--hand'}>
                        <use xlinkHref="#back"></use>
                    </svg>
                </div>
            </div>
        )
    }
}