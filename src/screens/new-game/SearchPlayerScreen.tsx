import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";
import {PlayerDropdown} from '../../components/dropdown/PlayerDropdown';

export class SearchPlayerScreen extends React.Component {

    private getNames() {
        return [
            'Random player 1',
            'Super long long name',
            'Test Testov',
            'Bla Blablah',
            'Random player 5',
            'Random player 2',
            'Random player 19',
            'Random player 3',
            'A',
            'B',
            'Superlonglonglonglonglonglonglonglong name',
            'D',
            'Random player 15',
            'Random player 12',
            'Random player 23',
        ]
    }

    render() {
        return (
            <div className="page-search-player">
                <TopPanel showSearch={true} />
                <div className="page-search-player__content">
                    {this.getNames().map(name => (
                        <div key={name} className="page-search-player__name">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}