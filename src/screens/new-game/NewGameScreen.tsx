import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";
import {PlayerDropdown} from '../../components/dropdown/PlayerDropdown';

export class NewGameScreen extends React.Component {
    render() {
        return (
            <div className="page-new-game">
                <TopPanel />
                <div className="page-new-game__inner">
                    <div className="page-new-game__players">
                        <PlayerDropdown wind="東" player={{displayName: "Random player 1"}}/>
                        <PlayerDropdown wind="南" />
                        <PlayerDropdown wind="西" />
                        <PlayerDropdown wind="北" />

                        <div className="page-new-game__buttons">
                            <div className="flat-btn flat-btn--medium">
                                <svg>
                                    <use xlinkHref="#shuffle"></use>
                                </svg>
                            </div>
                            <div className="flat-btn flat-btn--medium">
                                <svg>
                                    <use xlinkHref="#save"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}