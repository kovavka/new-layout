import * as React from "react";
import {HomeScreen} from '../HomeScreen';

export class HomeScreenExample extends React.Component<{}> {

    render() {
        return (
            <HomeScreen canStartGame={true} hasStartedGame={false} hasPrevGame={true} canSeeOtherTables={true} hasStat={true} />
        );
    }
}