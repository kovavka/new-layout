import * as React from "react";
import {HomeScreenStateless} from './HomeScreenStateless';

export class HomeScreen extends React.Component<{}> {
    render() {
        return (
            <HomeScreenStateless canStartGame={true} hasStartedGame={false} hasPrevGame={true} canSeeOtherTables={true} hasStat={true} />
        );
    }
}