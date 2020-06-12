import * as React from "react";
import {classNames} from '../../services/ReactUtils';
import {OutcomeType} from '../../types/OutcomeTypes';
import {BottomPanel} from '../../components/bottom-panel/BottomPanel';
import './page-log.less'

interface IHand {
    han?: number
    fu?: number
    isYakuman?: boolean
    yaku: string[]
    dora?: number
}

interface IRound {
    winners: number[]
    losers: number[]
    tempaiPlayers: number[]
    paoPlayer?: number
    delta: number[]
    result: number[]
    outcome: OutcomeType
    prevHonba: number
    prevRiichi: number
    riichiPlayers: number[]
    winnerHans: IHand[]
    wind: string
}

interface IPlayer {
    id: number
    name: string
}

type IProps = {
    rounds: IRound[]
    players: IPlayer[]
}

type IState = {
    selectedRound?: IRound
}

export class LogScreen extends React.Component<IProps, IState> {
    state: IState = {};

    private onRoundClick(round: IRound) {
        if (this.state.selectedRound !== round) {
            this.setState({
                selectedRound: round
            });
        } else {
            this.setState({
                selectedRound: undefined
            });
        }
    }

    private getPlayerName(id: number): string {
       return this.props.players.find(player => player.id === id)!.name;
    }

    private getNames(ids: number[]): string {
       return ids.map(winner => this.getPlayerName(winner)).join(', ');
    }

    private getHandAmount(hand: IHand): string {
        if (hand.isYakuman) {
            return 'yakuman';
        }

        let str = `${hand.han} han`;

        if (hand.han && hand.han < 5) {
            str += ` ${hand.fu} fu`;
        }
        return str;
    }

    render() {
        const {rounds, players} = this.props;
        const {selectedRound} = this.state;

        return (

            <div className="flex-container page-log">
                <div className="flex-container__content page-log__content">
                    <div className="page-log__row-container">
                        <div className="page-log__row">
                            <div className="page-log__cell page-log__cell--first"></div>
                            {players.map(player => (
                                <div key={player.id} className="page-log__cell">{player.name}</div>
                            ))}
                        </div>
                    </div>

                    {rounds.map((round, i) => (
                        <div key={i} className="page-log__row-container" onClick={() => this.onRoundClick(round)}>
                            <div className="page-log__row">
                                <div className="page-log__cell page-log__cell--first">{round.wind}</div>
                                {round.delta.map((playerDelta, i) => (
                                    <div key={i} className="page-log__cell">
                                        <div className={classNames(
                                            'page-log__delta',
                                            {'page-log__delta--success': playerDelta > 0},
                                            {'page-log__delta--danger': playerDelta < 0}
                                            )}
                                        >{playerDelta > 0 ? '+'+playerDelta : playerDelta}</div>
                                        <div className="page-log__score">{round.result[i]}</div>
                                    </div>
                                ))}
                            </div>
                            {selectedRound === round && this.renderRoundInfo(round)}
                        </div>
                    ))}

                </div>
                <div className="flex-container__bottom">
                    <BottomPanel
                        text="Log"
                        showBack={true}
                    />
                </div>
            </div>
        );
    }

    private renderRoundInfo(round: IRound) {

        return (
            <div className="page-log__info">
                {round.outcome === OutcomeType.EXHAUSTIVE_DRAW && (
                    <>
                        Exhaustive draw
                        {round.tempaiPlayers.length !== 0 && (
                            <>
                                <br/>
                                Tempai: {this.getNames(round.tempaiPlayers)}
                            </>
                        )}
                        {round.riichiPlayers.length !== 0 && (
                            <>
                                <br/>
                                Riichi bets: {this.getNames(round.riichiPlayers)}
                            </>
                        )}
                    </>
                )}
                {round.outcome === OutcomeType.ABORTIVE_DRAW && (
                    <>
                        Abortive draw
                        {round.riichiPlayers.length !== 0 && (
                            <>
                                <br/>
                                Riichi bets: {this.getNames(round.riichiPlayers)}
                            </>
                        )}
                    </>
                )}
                {round.outcome === OutcomeType.CHOMBO && (
                    <>
                        Chombo
                        {round.losers.length !== 0 && (
                            <>
                                <br/>
                                Players: {this.getNames(round.losers)}
                            </>
                        )}
                    </>
                )}
                {round.outcome === OutcomeType.NAGASHI && (
                    <>
                        Nagashi mangan
                        {round.tempaiPlayers.length !== 0 && (
                            <>
                                <br/>
                                Tempai: {this.getNames(round.tempaiPlayers)}
                            </>
                        )}
                    </>
                )}
                {round.outcome === OutcomeType.RON && (
                    <>
                        Ron, {this.getHandAmount(round.winnerHans[0])}
                        <br/>
                        {`${this.getPlayerName(round.winners[0])} from ${this.getPlayerName(round.losers[0])}`}
                        <br/>
                        {round.winnerHans[0].yaku.join(', ')}
                        {!!round.winnerHans[0].dora && <>, dora {round.winnerHans[0].dora}</>}
                        <br/>
                        {round.riichiPlayers.length !== 0 && (
                            <>
                                Riichi bets: {this.getNames(round.riichiPlayers)}
                                {!!round.prevRiichi && <> + {round.prevRiichi}</>}
                            </>
                        )}
                        {round.riichiPlayers.length === 0 && (
                            <>
                                Riichi bets: {round.prevRiichi}
                            </>
                        )}
                        <br/>
                        Honba: {round.prevHonba}
                    </>
                )}
                {round.outcome === OutcomeType.TSUMO && (
                    <>
                        Tsumo, {this.getHandAmount(round.winnerHans[0])}
                        <br/>
                        {this.getPlayerName(round.winners[0])}
                        <br/>
                        {round.winnerHans[0].yaku.join(', ')}
                        {!!round.winnerHans[0].dora && <>, dora {round.winnerHans[0].dora}</>}
                        <br/>
                        {round.riichiPlayers.length !== 0 && (
                            <>
                                Riichi bets: {this.getNames(round.riichiPlayers)}
                                {!!round.prevRiichi && <> + {round.prevRiichi}</>}
                            </>
                        )}
                        {round.riichiPlayers.length === 0 && (
                            <>
                                Riichi bets: {round.prevRiichi}
                            </>
                        )}
                        <br/>
                        Honba: {round.prevHonba}
                    </>
                )}
                {round.outcome === OutcomeType.MULTIRON && (
                    <>
                        Multiron, from {this.getPlayerName(round.losers[0])}
                        <br/>
                        <br/>
                        {round.winners.map((winner, i) => (
                            <span key={i}>
                                {this.getPlayerName(winner)}, {this.getHandAmount(round.winnerHans[i])}
                                <br/>
                                {round.winnerHans[i].yaku.join(', ')}
                                {!!round.winnerHans[i].dora && <>, dora {round.winnerHans[i].dora}</>}
                                <br/>
                                <br/>
                            </span>
                        ))}
                        {round.riichiPlayers.length !== 0 && (
                            <>
                                Riichi bets: {this.getNames(round.riichiPlayers)}
                                {!!round.prevRiichi && <> + {round.prevRiichi}</>}
                            </>
                        )}
                        {round.riichiPlayers.length === 0 && (
                            <>
                                Riichi bets: {round.prevRiichi}
                            </>
                        )}
                        <br/>
                        Honba: {round.prevHonba}
                    </>
                )}
            </div>
        )
    }
}