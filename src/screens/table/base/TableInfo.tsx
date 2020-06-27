import * as React from 'react';
import './page-table.less'
import {TableInfoProps} from './TableInfoProps';

export class TableInfo extends React.Component<TableInfoProps> {
    render() {
        const {
            showRoundInfo,
            showTableNumber,
            showTimer,
            gamesLeft,
            round,
            honbaCount,
            riichiCount,
            currentTime,
            tableNumber,
        } = this.props;

        if (!showRoundInfo || showTableNumber) {
            return null
        }

        return (
            <div className="table-info">
                {showRoundInfo && (
                    <>
                        {!!round && (
                            <div className="table-info__round">
                                {round}
                            </div>
                        )}
                        {!!riichiCount && this.renderTebou('riichi-small', riichiCount)}
                        {!!honbaCount && this.renderTebou('honba', honbaCount)}
                        {showTimer && (
                            <div className="table-info__timer">
                                {currentTime}
                            </div>
                        )}
                        {gamesLeft && (
                            <div className="table-info__games-left">
                                <div className="table-info__games-left-count">
                                    {gamesLeft}
                                </div>
                                <div className="table-info__games-left-caption">
                                    max games left
                                </div>
                            </div>
                        )}
                    </>
                )}
                {showTableNumber && (
                    <>
                        <div className="table-info__table-caption">
                            Table
                        </div>
                        <div className="table-info__table-number">
                            #{tableNumber}
                        </div>
                    </>
                )}
            </div>
        );
    }

    private renderTebou(icon: string, count: number) {
        return (
            <div className="table-info__tenbou">
                <div className="svg-button">
                    <svg>
                        <use xlinkHref={`#${icon}`}></use>
                    </svg>
                </div>
                <div className="table-info__tenbou-count">
                    {count}
                </div>
            </div>
        )
    }
}