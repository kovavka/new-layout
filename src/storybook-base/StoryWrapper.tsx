import * as React from "react";
import './storybook-base.less'
import '../index.less'
import '../components/components.less'

export class StoryWrapper extends React.Component {
    render() {
        return (
            <div className="App" id="screen">
                {this.props.children}
            </div>
        )
    }
}