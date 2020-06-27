import * as React from 'react';
import './page-table.less'
import {BottomPanelProps} from '../../../components/bottom-panel/BottomPanelProps';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {TableInfo} from './TableInfo';
import {TableInfoProps} from './TableInfoProps';
import {ResultArrows} from '../../../components/result-arrows/ResultArrows';
import {PlayerTop} from '../../../components/players/PlayerTop';
import {PlayerLeft} from '../../../components/players/PlayerLeft';
import {PlayerRight} from '../../../components/players/PlayerRight';
import {PlayerBottom} from '../../../components/players/PlayerBottom';
import {SelectOutcomeModal} from '../SelectOutcomeModal';
import { BottomPanel } from '../../../components/bottom-panel/BottomPanel';
import {ResultArrowsProps} from './ResultArrowsProps';

type IProps = {
    showArrows?: boolean

    topPlayer: PlayerProps
    leftPlayer: PlayerProps
    bottomPlayer: PlayerProps
    rightPlayer: PlayerProps

    tableInfo: TableInfoProps
    arrows?: ResultArrowsProps

    bottomPanel: BottomPanelProps
    showOutcomeModal?: boolean
}

export class TableScreenStateless extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer, bottomPanel, showOutcomeModal, tableInfo, arrows} = this.props;

        return (
            <div className="flex-container page-table">
                <div className="flex-container__content flex-container">
                    <div className="flex-container__top">
                        <PlayerTop {...topPlayer} />
                    </div>
                    <div className="flex-container__content page-table__center">
                        <PlayerLeft {...leftPlayer} />

                        <TableInfo {...tableInfo} />
                        {!!arrows && <ResultArrows />}

                        <PlayerRight {...rightPlayer} />
                    </div>
                    <div className="flex-container__bottom">
                        <PlayerBottom {...bottomPlayer} />
                    </div>
                </div>
                <div className="flex-container__bottom">
                    <BottomPanel {...bottomPanel} />
                </div>
                {showOutcomeModal && (
                    <SelectOutcomeModal />
                )}
            </div>
        );
    }
}
