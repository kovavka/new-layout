import * as React from "react";

export class TopPanel extends React.Component {
    render() {
        return (
            <div className="top-panel">
                <div className="svg-button">
                    <svg>
                        <use xlinkHref="#back"></use>
                    </svg>
                </div>
            </div>
        )
    }
}