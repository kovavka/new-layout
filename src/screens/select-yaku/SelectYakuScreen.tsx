import * as React from "react";
import {OutcomeTableMode} from '../../types/OutcomeTypes';

enum YakuId {
    __OPENHAND = 'Open hand',
    TOITOI = 'Toitoi',
    HONROTO = 'Homroto',
    SANANKOU = 'Sanankou',
    SANSHOKUDOUKOU = 'Sanshoku douku',
    SANKANTSU = 'Sankantsu',
    SUUKANTSU = 'Suukantsu',
    SUUANKOU = 'Suuankou',
    PINFU = 'Pinfu',
    IIPEIKOU = 'Iipeikou',
    RYANPEIKOU = 'Ryanpeikou',
    SANSHOKUDOUJUN = 'Sanshoku',
    ITTSU = 'Ittsu',
    YAKUHAI1 = 'Yakuhai x1',
    YAKUHAI2 = 'Yakuhai x2',
    YAKUHAI3 = 'Yakuhai x3',
    YAKUHAI4 = 'Yakuhai x4',
    SHOSANGEN = 'Shosangen',
    DAISANGEN = 'Daisangen',
    SHOSUUSHII = 'Shosuushii',
    DAISUUSHII = 'Daisuushi',
    TSUUIISOU = 'Tsuuiisou',
    TANYAO = 'Tanyao',
    CHANTA = 'Chanta',
    JUNCHAN = 'Junchan',
    CHINROTO = 'Chinroto',
    HONITSU = 'Honitsu',
    CHINITSU = 'Chinitsu',
    CHUURENPOUTO = 'Chuurenpouto',
    RYUUIISOU = 'Ryuiisou',
    CHIITOITSU = 'Chitoitsu',
    KOKUSHIMUSOU = 'Kokushimusou',
    RIICHI = 'Riichi',
    DOUBLERIICHI = 'Double riichi',
    IPPATSU = 'Ippatsu',
    MENZENTSUMO = 'Menzentsumo',
    HAITEI = 'Haitei',
    RINSHANKAIHOU = 'Rinshankaihou',
    TENHOU = 'Tenhou',
    CHIHOU = 'Chihou',
    HOUTEI = 'Houtei',
    CHANKAN = 'Chankan',
    RENHOU = 'Renhou',
    OPENRIICHI = 'Open riichi',
}

export const yakuGroups = [
    [YakuId.__OPENHAND],
    [
        YakuId.RIICHI,
        YakuId.IPPATSU,
        YakuId.MENZENTSUMO,
    ],
    [
        YakuId.PINFU,
        YakuId.TANYAO,
    ],
    [
        YakuId.YAKUHAI1,
        YakuId.YAKUHAI2,
        YakuId.YAKUHAI3,
    ],
    [
        YakuId.ITTSU,
        YakuId.HONITSU,
        YakuId.CHINITSU,
    ],
    [
        YakuId.TOITOI,
        YakuId.CHIITOITSU,
    ],
    [
        YakuId.CHANTA,
        YakuId.JUNCHAN,
    ],
    [
        YakuId.SANSHOKUDOUJUN,
        YakuId.IIPEIKOU,
    ],
    [
        YakuId.DOUBLERIICHI,
        YakuId.OPENRIICHI,
    ],
    [
        YakuId.HONROTO,
        YakuId.SHOSANGEN,
        YakuId.YAKUHAI4,
    ],
    [
        YakuId.SANANKOU,
        YakuId.SANSHOKUDOUKOU,
        YakuId.SANKANTSU,
    ],
    [
        YakuId.RYANPEIKOU,
    ],
    [
        YakuId.HAITEI,
        YakuId.HOUTEI,
        YakuId.RINSHANKAIHOU,
    ],
    [
        YakuId.CHANKAN,
        YakuId.RENHOU,
    ],
    [
        YakuId.TENHOU,
        YakuId.CHIHOU,
    ],
    [
        YakuId.DAISANGEN,
        YakuId.DAISUUSHII,
        YakuId.SHOSUUSHII,
    ],
    [
        YakuId.SUUANKOU,
        YakuId.SUUKANTSU,
    ],
    [
        YakuId.CHINROTO,
        YakuId.TSUUIISOU,
        YakuId.KOKUSHIMUSOU,
    ],
    [
        YakuId.RYUUIISOU,
        YakuId.CHUURENPOUTO,
    ],
];

type IProps = {
    playerName: string
    selectedYaku: string[]
    disabledYaku: string[]
    outcome: OutcomeTableMode
    canGoNext: boolean
}

export class SelectYakuScreen extends React.Component<IProps> {

    render() {
        const {playerName, selectedYaku, disabledYaku} = this.props;

        return (
            <div className="flex-container page-select-yaku">
                <div className="top-panel top-panel--between">
                    {/*<div className="svg-button svg-button--small">*/}
                    {/*    <svg>*/}
                    {/*        <use xlinkHref="#refresh"></use>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                    <div className="page-select-yaku__player-name">{playerName}</div>
                    {/*<div className="svg-button svg-button--small">*/}
                    {/*    <svg>*/}
                    {/*        <use xlinkHref="#settings"></use>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                </div>
                <div className="flex-container__content page-select-yaku__content">

                </div>
            </div>
        );
    }
}