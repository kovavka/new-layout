import * as React from "react";
import {OutcomeTableMode} from '../../types/OutcomeTypes';
import {ArrowState, SelectHandActiveTab, YakuGroup} from './YakuTypes';
import './page-set-hand.less'
import {Tab} from '../../components/tab/Tab';
import {SelectYakuPanel} from './SelectYakuPanel';
import {BottomPanel} from '../../components/bottom-panel/BottomPanel';

type IProps = {
    playerName: string
    yakuGroups: YakuGroup[]
    outcome: OutcomeTableMode
    canGoNext: boolean
    leftArrowState: ArrowState
    rightArrowState: ArrowState
    activeTab: SelectHandActiveTab
}

const getTabItems = (activeTab) => [
    {
        caption: SelectHandActiveTab.YAKU,
        isActive: activeTab === SelectHandActiveTab.YAKU,
        onClick: () => {}
    },
    {
        caption: SelectHandActiveTab.TOTAL,
        isActive: activeTab === SelectHandActiveTab.TOTAL,
        onClick: () => {}
    },
];

export class SelectHandScreen extends React.Component<IProps> {

    render() {
        const {playerName, leftArrowState, rightArrowState, activeTab, yakuGroups, outcome, canGoNext} = this.props;

        return (
            <div className="flex-container page-select-hand">
                <div className="page-select-hand__top-panel top-panel top-panel--between">
                    <div className="page-select-hand__top-panel-arrow">
                        {leftArrowState === ArrowState.UNAVAILABLE && (
                            <div className="svg-button svg-button--xsmall">
                                <svg>
                                    <use xlinkHref="#arrow-left"></use>
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="page-select-hand__player-name">{playerName}</div>
                    <div className="page-select-hand__top-panel-arrow">
                        {rightArrowState === ArrowState.UNAVAILABLE && (
                            <div className="svg-button svg-button--xsmall">
                                <svg>
                                    <use xlinkHref="#arrow-right"></use>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
                <Tab items={getTabItems(activeTab)}/>
                <SelectYakuPanel yakuGroups={yakuGroups} />
                <div className="flex-container__bottom">
                    <BottomPanel
                        text={outcome}
                        showBack={true}
                        showNext={true}
                        isNextDisabled={!canGoNext}
                    />
                </div>
            </div>
        );
    }
}