import { COLORS, NUMBERS } from "./constants";

// text colors
export const [
    textViolet, 
    textIndigo, 
    textBlue, 
    textGreen, 
    textYellow, 
    textOrange, 
    textRed
] = COLORS.map(c => ({ color: c }));

// background colors
export const [
    bgViolet,
    bgIndigo,
    bgBlue,
    bgGreen,
    bgYellow,
    bgOrange,
    bgRed
] = COLORS.map(c => ({ backgroundColor: c }));

// border colors 
export const [
    borderViolet,
    borderIndigo,
    borderBlue,
    borderGreen,
    borderYellow,
    borderOrange,
    borderRed
] = COLORS.map(c => ({ borderColor: c }));

//
//
// padding
export const [
    p2, p4, p6, p8, p10, p12, p14, p16, p18, p20
] = NUMBERS.map(n => ({ padding: n*2 }));

// padding left
export const [
    pl2, pl4, pl6, pl8, pl10, pl12, pl14, pl16, pl18, pl20
] = NUMBERS.map(n => ({ paddingLeft: n*2 }));

// padding right
export const [
    pr2, pr4, pr6, pr8, pr10, pr12, pr14, pr16, pr18, pr20
] = NUMBERS.map(n => ({ paddingRight: n*2 }));

// padding top
export const [
    pt2, pt4, pt6, pt8, pt10, pt12, pt14, pt16, pt18, pt20
] = NUMBERS.map(n => ({ paddingTop: n*2 }));

// padding bottom 
export const [
    pb2, pb4, pb6, pb8, pb10, pb12, pb14, pb16, pb18, pb20
] = NUMBERS.map(n => ({ paddingBottom: n*2 }));

//
//
// margin 
export const [
    m2, m4, m6, m8, m10, m12, m14, m16, m18, m20
] = NUMBERS.map(n => ({ margin: n*2 }));

// margin left
export const [
    ml2, ml4, ml6, ml8, ml10, ml12, ml14, ml16, ml18, ml20
] = NUMBERS.map(n => ({ marginLeft: n*2 }));

// margin right 
export const [
    mr2, mr4, mr6, mr8, mr10, mr12, mr14, mr16, mr18, mr20
] = NUMBERS.map(n => ({ marginRight: n*2 }));

// margin top
export const [
    mt2, mt4, mt6, mt8, mt10, mt12, mt14, mt16, mt18, mt20
] = NUMBERS.map(n => ({ marginTop: n*2 }));

// margin bottom 
export const [
    mb2, mb4, mb6, mb8, mb10, mb12, mb14, mb16, mb18, mb20
] = NUMBERS.map(n => ({ margin: n*2 }));

//
//
// borders
export const [
    b1, b2, b3, b4, b5
] = NUMBERS.map(n => ({ borderWidth: n }));

//
//
// border radius
export const [
    br2, br4, br6, br8, br10, br12, br14, br16, br18, br20,
] = NUMBERS.map(n => ({ borderRadius: n*2 }));

// border top left radius 
export const [
    btlr2, btlr4, btlr6, btlr8, btlr10, btlr12, btlr14, btlr16, btlr18, btlr20,
] = NUMBERS.map(n => ({ borderTopLeftRadius: n*2 }));

// border top right radius 
export const [
    btrr2, btrr4, btrr6, btrr8, btrr10, btrr12, btrr14, btrr16, btrr18, btrr20,
] = NUMBERS.map(n => ({ borderTopRightRadius: n*2 }));

// border bottom left radius 
export const [
    bblr2, bblr4, bblr6, bblr8, bblr10, bblr12, bblr14, bblr16, bblr18, bblr20,
] = NUMBERS.map(n => ({ borderBottomLeftRadius: n*2 }));

// border bottom right radius
export const [
    bbrr2, bbrr4, bbrr6, bbrr8, bbrr10, bbrr12, bbrr14, bbrr16, bbrr18, bbrr20,
] = NUMBERS.map(n => ({ borderBottomRightRadius: n*2 }));

// border left radius 
export const [
    blr2, blr4, blr6, blr8, blr10, blr12, blr14, blr16, blr18, blr20,
] = NUMBERS.map(n => ({ borderTopLeftRadius: n*2, borderBottomLeftRadius: n*2 }));

// border top radius 
export const [
    btr2, btr4, btr6, btr8, btr10, btr12, btr14, btr16, btr18, btr20,
] = NUMBERS.map(n => ({ borderTopLeftRadius: n*2, borderTopRightRadius: n*2 }));

// border right radius
export const [
    brr2, brr4, brr6, brr8, brr10, brr12, brr14, brr16, brr18, brr20,
] = NUMBERS.map(n => ({ borderBottomRightRadius: n*2, borderTopRightRadius: n*2 }));

// border bottom radius 
export const [
    bbr2, bbr4, bbr6, bbr8, bbr10, bbr12, bbr14, bbr16, bbr18, bbr20,
] = NUMBERS.map(n => ({ borderBottomLeftRadius: n*2, borderBottomRightRadius: n*2 }));

//
//
// width in pixels 
export const [
    w100px, w200px, w300px, w400px, w500px, w600px, w700px, w800px, w900px, w1000px
] = NUMBERS.map(n => ({ width: n*100 }));

export const [
    w150px, w250px, w350px, w450px, w550px, w650px, w750px, w850px, w950px, w1050px,
] = NUMBERS.map(n => ({ width: n*100 + 50 }));

// width in percent 
export const [
    w10, w20, w30, w40, w50, w60, w70, w80, w90, w100
] = NUMBERS.map(n => ({ width: `${n*10}%` }));

export const w25 = { width: '25%' };
export const w75 = { width: '75% '};

//
//
// heights in pixels
export const [
    h100px, h200px, h300px, h400px, h500px, h600px, h700px, h800px, h900px, h1000px
] = NUMBERS.map(n => ({ height: n*100 }));

export const [
    h150px, h250px, h350px, h450px, h550px, h650px, h750px, h850px, h950px, h1050px,
] = NUMBERS.map(n => ({ height: n*100 + 50 }));

// height in percent
export const [
    h10, h20, h30, h40, h50, h60, h70, h80, h90, h100
] = NUMBERS.map(n => ({ height: `${n*10}%` }));

export const h25 = { height: '25%' };
export const h75 = { height: '75% '};

//
//
// font sizes
export const [
    fs2, fs4, fs6, fs8, fs10, fs12, fs14, fs16, fs18, fs20,
] = NUMBERS.map(n => ({ fontSize: n*2 }));

//
//
// font weights 
export const [
    fw100, fw200, fw300, fw400, fw500, fw600, fw700, fw800, fw900
] = NUMBERS.map(n => ({ fontWeight: `${n*100}`}));