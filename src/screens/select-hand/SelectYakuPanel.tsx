import * as React from "react";
import {OutcomeTableMode} from '../../types/OutcomeTypes';
import {ArrowState, SelectHandActiveTab, YakuGroup} from './YakuTypes';
import './page-set-hand.less'
import {Tab} from '../../components/tab/Tab';
import {classNames} from '../../services/ReactUtils';

type IProps = {
    yakuGroups: YakuGroup[]
}

export class SelectYakuPanel extends React.Component<IProps> {

    render() {
        const {yakuGroups} = this.props;

        return (
            <div className="select-yaku-panel">
                {yakuGroups.map((yakuGroup, i) => (
                    <div key={i} className="select-yaku-panel__group">
                        {yakuGroup.map((yaku, j) => (
                            <div key={j}
                                 className={classNames(
                                     'select-yaku-panel__button',
                                     {'select-yaku-panel__button--clicked': yaku.clicked},
                                     {'select-yaku-panel__button--disabled': yaku.disabled},
                                 )}
                            >
                                {yaku.name}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}