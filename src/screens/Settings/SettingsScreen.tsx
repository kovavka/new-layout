import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";

export class SettingsScreen extends React.Component {
    stateService: StateService = StateService.instance

    render() {
        return (
            <div className="">
                <TopPanel />
                <div>Super long long long name</div>
            </div>
        )
    }
}