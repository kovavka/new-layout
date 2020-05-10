import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";

export class HomeScreen extends React.Component<{}> {

    render() {
        return (
            <div className="flex-container page-home">
                <div className="flex-container__content">
                    <div className="top-panel top-panel--between">
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#refresh"></use>
                            </svg>
                        </div>
                        <div className="svg-button">
                            <svg>
                                <use xlinkHref="#settings"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="page-home__title">Pantheon testdrive</div>
                </div>
            </div>
        );
    }
}