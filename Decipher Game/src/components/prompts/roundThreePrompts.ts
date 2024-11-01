interface CipherPrompt {
  reference: string;
  message: string;
  incorrectIndexes: number[];
}

export const roundThreePrompts: CipherPrompt[] = [
  {
    reference: "The morning sun rises over the mountain peaks.",
    message: "Lgt rfjgtxr xvm ykjfr qzxj lgt zfjkxbxmr wqtjr.",
    incorrectIndexes: [4, 8, 12, 19, 25, 31, 35],
  },
  {
    reference: "Gentle waves crash upon the sandy shore.",
    message: "Qzxjmr xkvtmr ljpxt fwqm lgt yxmtr xtqjx.",
    incorrectIndexes: [0, 7, 13, 18, 22, 28, 33],
  },
  {
    reference: "Birds sing sweetly in the garden trees.",
    message: "jQlxr xfmr ykjfmr fn lgt qtxbmr xjlxr.",
    incorrectIndexes: [0, 5, 10, 16, 20, 27, 32],
  },
  {
    reference: "The ocean breeze is refreshing in the morning.",
    message: "Lgt qzxmr jqfxmj fa rxqfjkrp fg lgt rfjgtxr.",
    incorrectIndexes: [3, 11, 14, 23, 26, 30, 36],
  },
  {
    reference: "Leaves fall gently from trees in autumn.",
    message: "Jzftx jxtj qfjfmxp fnr xjlxr fg qjxxmr.",
    incorrectIndexes: [1, 6, 12, 18, 24, 28, 32],
  },
  {
    reference: "A beautiful sunset brings peace to the soul.",
    message: "Y qxvfxrj ltfgt xktjr zfxjr gm lgt tjxr.",
    incorrectIndexes: [2, 9, 15, 22, 27, 31, 34],
  },
  {
    reference: "Mountains stand tall and majestic against the sky.",
    message: "Zfjkxbxmr jrjy zqx fjk qztqfxjr gkfx lgt xjlqz.",
    incorrectIndexes: [3, 8, 14, 21, 26, 30, 36],
  },
  {
    reference: "Soft raindrops tap on my window at night.",
    message: "Ljr zqjxktlr fjk yx xjfxtmj yx lgt rfjgt.",
    incorrectIndexes: [1, 7, 13, 18, 23, 29, 35],
  },
  {
    reference: "Stars twinkle brightly in the night sky.",
    message: "Lfjmr fqxtwfxlt yx xjlqz fg lgt rfjgtxr.",
    incorrectIndexes: [0, 6, 12, 16, 21, 25, 30],
  },
  {
    reference: "Walking along the beach is peaceful and serene.",
    message: "Qfjxrjl ylmjr lgt jqfx fa lfjfmyp fjk qlrltj.",
    incorrectIndexes: [1, 5, 11, 18, 23, 29, 34],
  },
  {
    reference: "Clouds drift slowly across the open sky.",
    message: "Qjlxr jqfljy xljlj fnmr lgt qzxmr xjlqz.",
    incorrectIndexes: [1, 6, 10, 15, 20, 25, 29],
  },
  {
    reference: "The flowers bloom in the early spring sun.",
    message: "Lgt qfxxmrj yltlj fg lgt jqfxr fqmlt yjr.",
    incorrectIndexes: [2, 9, 13, 18, 23, 28, 34],
  },
  {
    reference: "A gentle breeze whispers through the pine trees.",
    message: "Y jfmfx jqfxmj qflmrjx gm lgt jqflj xjlxr.",
    incorrectIndexes: [0, 5, 11, 16, 21, 27, 33],
  },
  {
    reference: "Sunshine brightens the garden every morning.",
    message: "Lxfmrj yktjrmtj lgt qfxgmr zxyfg rfjgtxr.",
    incorrectIndexes: [2, 7, 13, 18, 23, 27, 31],
  },
  {
    reference: "A quiet lake reflects the blue sky above.",
    message: "Y jqxtj xljf fxpxtmr lgt jqzx xjlqz xjmz.",
    incorrectIndexes: [0, 4, 10, 15, 20, 26, 31],
  },
  {
    reference: "Wildflowers sway in the warm summer breeze.",
    message: "Ylmfxmrj fjxl fg lgt qfxmr lxtjr jqfxmj.",
    incorrectIndexes: [1, 7, 13, 18, 24, 28, 32],
  },
  {
    reference: "Birds chirp happily at the break of dawn.",
    message: "Qjlxr yqtjm hjzjlz yx lgt qztj fn xjzl.",
    incorrectIndexes: [1, 6, 12, 17, 22, 27, 32],
  },
  {
    reference: "The river flows gently under the wooden bridge.",
    message: "Lgt qzxvr yktjfn qfjfm xpfx lgt qzxxtj xkxtjr.",
    incorrectIndexes: [2, 8, 15, 20, 25, 29, 34],
  },
  {
    reference: "Waves crash loudly on the rocky shore.",
    message: "Ltfgtm jqfx hjlfmr gm lgt rlfxr xtqjx.",
    incorrectIndexes: [0, 5, 9, 15, 21, 27, 31],
  },
  {
    reference: "A mountain trail leads to breathtaking views.",
    message: "Y fjxtjr lfjxt jrjlx gm xkxtlxfn qltjxr.",
    incorrectIndexes: [1, 6, 12, 16, 22, 28, 33],
  },
  {
    reference: "The forest floor is blanketed with fallen leaves.",
    message: "Lgt fjxmr jxtfx fa xjmkrgjr zkft jxtj jqxtfx.",
    incorrectIndexes: [2, 8, 13, 18, 23, 27, 32],
  },
  {
    reference: "A gentle stream flows through the peaceful meadow.",
    message: "Y jfmfx jqxmr fjxtjr gm lgt ljfrxp wqjfx.",
    incorrectIndexes: [1, 6, 11, 16, 21, 26, 31],
  },
  {
    reference: "Flowers bloom in spring, adding color to nature.",
    message: "Qfxxmrj yltlj fg lxtjrj, hfxjmr jqxr gm qtxjxr.",
    incorrectIndexes: [1, 7, 13, 19, 25, 30, 36],
  },
  {
    reference: "Sunshine pours down on a field of flowers.",
    message: "Lxfmrj hjfxj yxr fg y zfjxt fn qfxxmrj.",
    incorrectIndexes: [1, 5, 10, 16, 21, 26, 32],
  },
  {
    reference: "Hiking up a mountain trail is exhilarating.",
    message: "Fgxtmr yk y zfjxkbxt jrjlx fa fxjltbpxmr.",
    incorrectIndexes: [1, 6, 13, 17, 23, 29, 34],
  },
  {
    reference: "A brisk walk in the cool autumn air.",
    message: "Y qjlkjr lxfj fg lgt jflr qjxxmr xjl.",
    incorrectIndexes: [1, 5, 12, 17, 22, 28, 33],
  },
  {
    reference: "The sound of rain is calming and peaceful.",
    message: "Lgt xfmr fn jqxt fa qfxmr fjk qfjfxjmr.",
    incorrectIndexes: [1, 6, 10, 16, 21, 26, 31],
  },
  {
    reference: "Leaves change colors with each passing season.",
    message: "Jzftx jxtfj qfxxj zxmr fjyt jqxfxmr jltmr.",
    incorrectIndexes: [1, 8, 13, 18, 24, 30, 35],
  },
  {
    reference: "Sunrise over the lake brings light and warmth.",
    message: "Lxfjrjl xmfg lgt xljf yktjr yjlt fjk wfxzjr.",
    incorrectIndexes: [0, 6, 12, 18, 23, 29, 33],
  },
  {
    reference: "A peaceful stroll along the sandy shoreline.",
    message: "Y lfjfmyp jqxtjr ylmjr lgt jxlr xjlqzlrjt.",
    incorrectIndexes: [1, 6, 11, 16, 21, 27, 32],
  },
  {
    reference: "Birds chirping early in the morning forest.",
    message: "Qjlxr yqtjmr yfxmr fg lgt rfjgtxr fjxmr.",
    incorrectIndexes: [1, 7, 12, 16, 22, 27, 31],
  },
];
