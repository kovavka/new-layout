import * as React from "react";
import { BottomPanel } from "../../components/bottom-panel/BottomPanel";
import { PlayerTop } from "../../components/players/PlayerTop";
import { PlayerBottom } from "../../components/players/PlayerBottom";
import { PlayerLeft } from "../../components/players/PlayerLeft";
import { PlayerRight } from "../../components/players/PlayerRight";


export class TableScreen extends React.Component {
    render() {
        return (
            <div className="flex-container page-table">
                <div className="flex-container__content flex-container">
                    <div className="flex-container__top">
                        <PlayerTop />
                    </div>
                    <div className="flex-container__content">
                        <PlayerLeft />
                        <PlayerRight />
                    </div>
                    <div className="flex-container__bottom">
                        <PlayerBottom />
                    </div>
                </div>
                <div className="flex-container__bottom">
                    <BottomPanel />
                </div>
            </div>
        )
    }
}