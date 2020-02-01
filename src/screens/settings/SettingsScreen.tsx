import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";

type IState = {
    switched: boolean
}

export class SettingsScreen extends React.Component<{}, IState> {
    stateService: StateService = StateService.instance;

    state = {switched: false};

    private onSingleDeviceModeToggle() {
        this.setState({
            switched: !this.state.switched
        });
    }

    render() {
        return (
            <div className="flex-container page-setting">
                <div className="flex-container__content">
                    <TopPanel />
                    <div className="page-setting__name">Super long long long name</div>
                    <div className="page-setting__section">
                        <div className="page-setting__section-title">Language</div>
                        <div className="page-setting__section-content">
                            <div className="btn btn--rounded btn--small btn--active">En</div>
                            <div className="btn btn--rounded btn--small">Ru</div>
                        </div>
                    </div>
                    <div className="page-setting__section">
                        <div className="page-setting__section-title">Theme</div>
                        <div className="page-setting__section-content">
                            <div className="theme theme--selected">
                                <div className="theme__visual">
                                    <div className="theme__visual-inner" style={{backgroundColor: "#E5E5E5"}}>
                                        <div className="theme__secondary-color" style={{backgroundColor: "#B8C0D1"}}></div>
                                        <div className="theme__text-color" style={{backgroundColor: "#000000"}}></div>
                                        <div className="theme__primary-color" style={{backgroundColor: "#1565C0"}}></div>
                                    </div>
                                </div>
                                <div className="theme__name">Day</div>
                            </div>
                            <div className="theme">
                                <div className="theme__visual">
                                    <div className="theme__visual-inner" style={{backgroundColor: "#282C34"}}>
                                        <div className="theme__secondary-color" style={{backgroundColor: "#37445C"}}></div>
                                        <div className="theme__text-color" style={{backgroundColor: "#E6E6E6"}}></div>
                                        <div className="theme__primary-color" style={{backgroundColor: "#1565C0"}}></div>
                                    </div>
                                </div>
                                <div className="theme__name">Night</div>
                            </div>
                        </div>
                    </div>
                    <div className="page-setting__section">
                        <div className="switch-setting">
                            <Switch switched={this.state.switched} onToggle={this.onSingleDeviceModeToggle.bind(this)} />
                            <div className="switch-setting__description">
                                <div className="switch-setting__caption">Single device mode</div>
                                <div className="switch-setting__info">Turn on if you use one device on table during the game</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-container__bottom page-setting__bottom">
                    <div className="link">Log out</div>
                </div>
            </div>
        );
    }
}