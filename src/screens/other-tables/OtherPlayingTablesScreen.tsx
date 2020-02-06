import * as React from "react";
import { TopPanel } from "../../components/top-panel/TopPanel";

type IProps = {
    showTableNumbers?: boolean
}

export class OtherPlayingTablesScreen extends React.Component<IProps> {

    private getTables() {
        return [
            {
                tableNumber: 1,
                round: '東4',
                players: [
                    {
                        displayName: 'Random player 1',
                        score: 21600,
                    },
                    {
                        displayName: 'Super long long name',
                        score: 54100,
                    },
                    {
                        displayName: 'Test Testov',
                        score: 32800,
                    },
                    {
                        displayName: 'Bla Blablah',
                        score: 10500,
                    },
                ],
            },
            {
                tableNumber: 2,
                round: '東3',
                players: [
                    {
                        displayName: 'Random player 5',
                        score: 100000,
                    },
                    {
                        displayName: 'Random player 2',
                        score: 0,
                    },
                    {
                        displayName: 'Random player 19',
                        score: 0,
                    },
                    {
                        displayName: 'Random player 3',
                        score: 0,
                    },
                ],
            },
            {
                tableNumber: 3,
                round: '南2',
                players: [
                    {
                        displayName: 'A',
                        score: 17600,
                    },
                    {
                        displayName: 'B',
                        score: 7400,
                    },
                    {
                        displayName: 'Superlonglonglonglonglonglonglong name',
                        score: 33300,
                    },
                    {
                        displayName: 'D',
                        score: 41700,
                    },
                ],
            },
        ]
    }

    render() {
        const {showTableNumbers} = this.props;

        return (
            <div className="page-other-tables">
                <TopPanel showSearch={true} />
                <div className="page-other-tables__content">
                    {this.getTables().map(table => (
                        <div className="page-other-tables__table">
                            {showTableNumbers && (
                                <div className="page-other-tables__table-number">
                                    Table #{table.tableNumber}
                                </div>
                            )}
                            <div className="page-other-tables__table-inner">
                                <div className="page-other-tables__table-round">
                                    {table.round}
                                </div>
                                <div className="page-other-tables__players">
                                    {table.players.map(player => (
                                        <div className="page-other-tables__player">
                                            <div className="page-other-tables__player-score">
                                                {player.score}
                                            </div>
                                            <div className="page-other-tables__player-name">
                                                {player.displayName}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}