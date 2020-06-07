import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";
import {HomeScreen} from '../home/HomeScreen';

export class HomeScreenExample extends React.Component<{}> {

    render() {
        return (
            <HomeScreen canStartGame={true} hasStartedGame={false} hasPrevGame={true} canSeeOtherTables={true} hasStat={true} />
        );
    }
}