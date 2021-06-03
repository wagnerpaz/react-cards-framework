// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Suit } from '../types/Suit';

import { ReactComponent as AceSpade } from '../../res/AS.svg';
import { ReactComponent as TwoSpade } from '../../res/2S.svg';
import { ReactComponent as ThreeSpade } from '../../res/3S.svg';
import { ReactComponent as FourSpade } from '../../res/4S.svg';
import { ReactComponent as FiveSpade } from '../../res/5S.svg';
import { ReactComponent as SixSpade } from '../../res/6S.svg';
import { ReactComponent as SevenSpade } from '../../res/7S.svg';
import { ReactComponent as EightSpade } from '../../res/8S.svg';
import { ReactComponent as NineSpade } from '../../res/9S.svg';
import { ReactComponent as TenSpade } from '../../res/TS.svg';
import { ReactComponent as JackSpade } from '../../res/JS.svg';
import { ReactComponent as QueenSpade } from '../../res/QS.svg';
import { ReactComponent as KingSpade } from '../../res/KS.svg';

import { ReactComponent as AceClub } from '../../res/AC.svg';
import { ReactComponent as TwoClub } from '../../res/2C.svg';
import { ReactComponent as ThreeClub } from '../../res/3C.svg';
import { ReactComponent as FourClub } from '../../res/4C.svg';
import { ReactComponent as FiveClub } from '../../res/5C.svg';
import { ReactComponent as SixClub } from '../../res/6C.svg';
import { ReactComponent as SevenClub } from '../../res/7C.svg';
import { ReactComponent as EightClub } from '../../res/8C.svg';
import { ReactComponent as NineClub } from '../../res/9C.svg';
import { ReactComponent as TenClub } from '../../res/TC.svg';
import { ReactComponent as JackClub } from '../../res/JC.svg';
import { ReactComponent as QueenClub } from '../../res/QC.svg';
import { ReactComponent as KingClub } from '../../res/KC.svg';

import { ReactComponent as AceHeart } from '../../res/AH.svg';
import { ReactComponent as TwoHeart } from '../../res/2H.svg';
import { ReactComponent as ThreeHeart } from '../../res/3H.svg';
import { ReactComponent as FourHeart } from '../../res/4H.svg';
import { ReactComponent as FiveHeart } from '../../res/5H.svg';
import { ReactComponent as SixHeart } from '../../res/6H.svg';
import { ReactComponent as SevenHeart } from '../../res/7H.svg';
import { ReactComponent as EightHeart } from '../../res/8H.svg';
import { ReactComponent as NineHeart } from '../../res/9H.svg';
import { ReactComponent as TenHeart } from '../../res/TH.svg';
import { ReactComponent as JackHeart } from '../../res/JH.svg';
import { ReactComponent as QueenHeart } from '../../res/QH.svg';
import { ReactComponent as KingHeart } from '../../res/KH.svg';

import { ReactComponent as AceDiamond } from '../../res/AD.svg';
import { ReactComponent as TwoDiamond } from '../../res/2D.svg';
import { ReactComponent as ThreeDiamond } from '../../res/3D.svg';
import { ReactComponent as FourDiamond } from '../../res/4D.svg';
import { ReactComponent as FiveDiamond } from '../../res/5D.svg';
import { ReactComponent as SixDiamond } from '../../res/6D.svg';
import { ReactComponent as SevenDiamond } from '../../res/7D.svg';
import { ReactComponent as EightDiamond } from '../../res/8D.svg';
import { ReactComponent as NineDiamond } from '../../res/9D.svg';
import { ReactComponent as TenDiamond } from '../../res/TD.svg';
import { ReactComponent as JackDiamond } from '../../res/JD.svg';
import { ReactComponent as QueenDiamond } from '../../res/QD.svg';
import { ReactComponent as KingDiamond } from '../../res/KD.svg';

const cards = {
  AceSpade,
  TwoSpade,
  ThreeSpade,
  FourSpade,
  FiveSpade,
  SixSpade,
  SevenSpade,
  EightSpade,
  NineSpade,
  TenSpade,
  JackSpade,
  QueenSpade,
  KingSpade,
  AceClub,
  TwoClub,
  ThreeClub,
  FourClub,
  FiveClub,
  SixClub,
  SevenClub,
  EightClub,
  NineClub,
  TenClub,
  JackClub,
  QueenClub,
  KingClub,
  AceHeart,
  TwoHeart,
  ThreeHeart,
  FourHeart,
  FiveHeart,
  SixHeart,
  SevenHeart,
  EightHeart,
  NineHeart,
  TenHeart,
  JackHeart,
  QueenHeart,
  KingHeart,
  AceDiamond,
  TwoDiamond,
  ThreeDiamond,
  FourDiamond,
  FiveDiamond,
  SixDiamond,
  SevenDiamond,
  EightDiamond,
  NineDiamond,
  TenDiamond,
  JackDiamond,
  QueenDiamond,
  KingDiamond
};

const Card: React.FC<CardProps> = ({ suit, number, flipped = false }) => {
  const Svg = getSvg({ suit, number, flipped });
  return <Svg />;
};

interface CardProps {
  suit: Suit;
  number: number;
  flipped?: boolean;
}

function getSvg({ suit, number, flipped }: CardProps) {
  const suitMap = {
    [Suit.SPADE]: 'Spade',
    [Suit.CLUB]: 'Club',
    [Suit.HEART]: 'Heart',
    [Suit.DIAMOND]: 'Diamond'
  };

  const numberMap = {
    1: 'Ace',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Jack',
    12: 'Queen',
    13: 'King'
  };

  if (!flipped) {
    console.log(`${numberMap[number]}${suitMap[suit]}`);
    return cards[`${numberMap[number]}${suitMap[suit]}`];
  }
}

export default Card;
