import {YakuGroup, YakuItem} from './YakuTypes';

const OPENHAND = {
    name: 'Open hand',
    disabled: true,
    onClick: () => {}
} as YakuItem;

const TOITOI = {
    name: 'Toitoi',
    onClick: () => {}
} as YakuItem;

const HONROTO = {
    name: 'Homroto',
    onClick: () => {}
} as YakuItem;

const SANANKOU = {
    name: 'Sanankou',
    onClick: () => {}
} as YakuItem;

const SANSHOKUDOUKOU = {
    name: 'Sanshoku douku',
    onClick: () => {}
} as YakuItem;

const SANKANTSU = {
    name: 'Sankantsu',
    onClick: () => {}
} as YakuItem;

const SUUKANTSU = {
    name: 'Suukantsu',
    onClick: () => {}
} as YakuItem;

const SUUANKOU = {
    name: 'Suuankou',
    onClick: () => {}
} as YakuItem;

const PINFU = {
    name: 'Pinfu',
    onClick: () => {}
} as YakuItem;

const IIPEIKOU = {
    name: 'Iipeikou',
    onClick: () => {}
} as YakuItem;

const RYANPEIKOU = {
    name: 'Ryanpeikou',
    onClick: () => {}
} as YakuItem;

const SANSHOKUDOUJUN = {
    name: 'Sanshoku',
    onClick: () => {}
} as YakuItem;

const ITTSU = {
    name: 'Ittsu',
    onClick: () => {}
} as YakuItem;

const YAKUHAI1 = {
    name: 'Yakuhai x1',
    onClick: () => {}
} as YakuItem;

const YAKUHAI2 = {
    name: 'Yakuhai x2',
    onClick: () => {}
} as YakuItem;

const YAKUHAI3 = {
    name: 'Yakuhai x3',
    onClick: () => {}
} as YakuItem;

const YAKUHAI4 = {
    name: 'Yakuhai x4',
    onClick: () => {}
} as YakuItem;

const SHOSANGEN = {
    name: 'Shosangen',
    onClick: () => {}
} as YakuItem;

const DAISANGEN = {
    name: 'Daisangen',
    onClick: () => {}
} as YakuItem;

const SHOSUUSHII = {
    name: 'Shosuushii',
    onClick: () => {}
} as YakuItem;

const DAISUUSHII = {
    name: 'Daisuushi',
    onClick: () => {}
} as YakuItem;

const TSUUIISOU = {
    name: 'Tsuuiisou',
    onClick: () => {}
} as YakuItem;

const TANYAO = {
    name: 'Tanyao',
    onClick: () => {}
} as YakuItem;

const CHANTA = {
    name: 'Chanta',
    onClick: () => {}
} as YakuItem;

const JUNCHAN = {
    name: 'Junchan',
    onClick: () => {}
} as YakuItem;

const CHINROTO = {
    name: 'Chinroto',
    onClick: () => {}
} as YakuItem;

const HONITSU = {
    name: 'Honitsu',
    onClick: () => {}
} as YakuItem;

const CHINITSU = {
    name: 'Chinitsu',
    onClick: () => {}
} as YakuItem;

const CHUURENPOUTO = {
    name: 'Chuurenpouto',
    onClick: () => {}
} as YakuItem;

const RYUUIISOU = {
    name: 'Ryuiisou',
    onClick: () => {}
} as YakuItem;

const CHIITOITSU = {
    name: 'Chitoitsu',
    onClick: () => {}
} as YakuItem;

const KOKUSHIMUSOU = {
    name: 'Kokushimusou',
    onClick: () => {}
} as YakuItem;

const RIICHI = {
    name: 'Riichi',
    clicked: true,
    onClick: () => {}
} as YakuItem;

const DOUBLERIICHI = {
    name: 'Double riichi',
    onClick: () => {}
} as YakuItem;

const IPPATSU = {
    name: 'Ippatsu',
    onClick: () => {}
} as YakuItem;

const MENZENTSUMO = {
    name: 'Menzentsumo',
    onClick: () => {}
} as YakuItem;

const HAITEI = {
    name: 'Haitei',
    onClick: () => {}
} as YakuItem;

const RINSHANKAIHOU = {
    name: 'Rinshankaihou',
    onClick: () => {}
} as YakuItem;

const TENHOU = {
    name: 'Tenhou',
    onClick: () => {}
} as YakuItem;

const CHIHOU = {
    name: 'Chihou',
    onClick: () => {}
} as YakuItem;

const HOUTEI = {
    name: 'Houtei',
    onClick: () => {}
} as YakuItem;

const CHANKAN = {
    name: 'Chankan',
    onClick: () => {}
} as YakuItem;

const RENHOU = {
    name: 'Renhou',
    onClick: () => {}
} as YakuItem;

const OPENRIICHI = {
    name: 'Open riichi',
    onClick: () => {}
} as YakuItem;


export const defaultYakuGroups: YakuGroup[] = [
    [OPENHAND],
    [
        RIICHI,
        IPPATSU,
        MENZENTSUMO,
    ],
    [
        PINFU,
        TANYAO,
    ],
    [
        YAKUHAI1,
        YAKUHAI2,
        YAKUHAI3,
    ],
    [
        ITTSU,
        HONITSU,
        CHINITSU,
    ],
    [
        TOITOI,
        CHIITOITSU,
    ],
    [
        CHANTA,
        JUNCHAN,
    ],
    [
        SANSHOKUDOUJUN,
        IIPEIKOU,
    ],
    [
        DOUBLERIICHI,
        OPENRIICHI,
    ],
    [
        HONROTO,
        SHOSANGEN,
        YAKUHAI4,
    ],
    [
        SANANKOU,
        SANSHOKUDOUKOU,
        SANKANTSU,
    ],
    [
        RYANPEIKOU,
    ],
    [
        HAITEI,
        HOUTEI,
        RINSHANKAIHOU,
    ],
    [
        CHANKAN,
        RENHOU,
    ],
    [
        TENHOU,
        CHIHOU,
    ],
    [
        DAISANGEN,
        DAISUUSHII,
        SHOSUUSHII,
    ],
    [
        SUUANKOU,
        SUUKANTSU,
    ],
    [
        CHINROTO,
        TSUUIISOU,
        KOKUSHIMUSOU,
    ],
    [
        RYUUIISOU,
        CHUURENPOUTO,
    ],
];
