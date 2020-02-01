import * as React from "react";

export class BottomPanel extends React.Component {
    render() {
        return (
            <div className="bottom-panel">
                <div className="bottom-panel__inner">
                    <div className="svg-button">
                        <svg>
                            <use xlinkHref="#back"></use>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}