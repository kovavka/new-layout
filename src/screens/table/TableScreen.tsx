import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";
import { BottomPanel } from "../../components/bottom-panel/BottomPanel";


export class TableScreen extends React.Component {
    render() {
        return (
            <div className="page-setting">
                <div className="page-setting__max-content">

                </div>
                <div className="page-setting__bottom">
                    <BottomPanel />
                </div>
            </div>
        )
    }
}