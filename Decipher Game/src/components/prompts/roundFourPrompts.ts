interface CipherPrompt {
  reference: string;
  message: string;
  incorrectIndexes: number[];
}

export const roundFourPrompts: CipherPrompt[] = [
  {
    reference: "The autumn leaves dance in the gentle breeze.",
    message: "Lgt qjxxmr jqftx ymzjx fn lgt zfjkxr wqtjx.",
    incorrectIndexes: [4, 10, 15, 20, 25, 30, 35],
  },
  {
    reference: "Moonlight reflects off the calm lake surface.",
    message: "Rfjgtxr ykjfmr qzx lgt xkvt yxmj xtqjxr.",
    incorrectIndexes: [0, 7, 13, 18, 23, 28, 34],
  },
  {
    reference: "Fresh snow blankets the sleeping forest.",
    message: "Hjfmz xgzb wqtjmr lgt xjlmrp fgxmr.",
    incorrectIndexes: [0, 5, 9, 15, 20, 26, 31],
  },
  {
    reference: "A river flows calmly through the dense forest.",
    message: "Y qzxvr yltlx fjxmr gm lgt jqxlx fgxmr.",
    incorrectIndexes: [1, 6, 12, 17, 22, 28, 33],
  },
  {
    reference: "The beach sparkles under the bright sunshine.",
    message: "Lgt jqfxt fqxtmr fgxt lgt zfxmr lxfmrj.",
    incorrectIndexes: [0, 5, 10, 15, 21, 26, 30],
  },
  {
    reference: "Raindrops glisten on the window after the storm.",
    message: "Jljxqfxl hjxmtr fg lgt xjfxtp xmzjr lgt yjxmz.",
    incorrectIndexes: [0, 6, 11, 17, 23, 29, 34],
  },
  {
    reference: "A quiet walk in the forest calms the mind.",
    message: "Y jqxtj lxfj fg lgt fgxmr zlmr lgt lxqmr.",
    incorrectIndexes: [1, 5, 9, 15, 20, 26, 31],
  },
  {
    reference: "Golden rays filter through the autumn trees.",
    message: "Qltjr yjxf hjqjmr gmzqvj lgt qjxxmr xjlxr.",
    incorrectIndexes: [0, 6, 12, 18, 22, 28, 33],
  },
  {
    reference: "The dawn breaks over the silent mountains.",
    message: "Lgt xjzl yktjr xmwx lgt qfxmr zfjkxbxmr.",
    incorrectIndexes: [1, 6, 11, 16, 21, 26, 30],
  },
  {
    reference: "Birds chirp happily as the sun rises.",
    message: "Qjlxr yqtjm hjzjmr yx lgt xvm yktjr.",
    incorrectIndexes: [0, 5, 11, 15, 20, 25, 29],
  },
  {
    reference: "Leaves flutter in the wind as autumn arrives.",
    message: "Jzftx jqxfxr fg lgt hjft yx qjxxmr lfjxrj.",
    incorrectIndexes: [1, 7, 13, 19, 24, 28, 32],
  },
  {
    reference: "The ocean shimmers under the bright sun.",
    message: "Lgt qzxmr hjxfxrt fgxt lgt zfxmr yktjr.",
    incorrectIndexes: [2, 7, 12, 17, 22, 27, 31],
  },
  {
    reference: "A gentle breeze rustles the autumn leaves.",
    message: "Y jfmfx jqfxmj jltmr lgt qjxxmr jqftx.",
    incorrectIndexes: [1, 6, 10, 16, 21, 26, 30],
  },
  {
    reference: "Fresh flowers bloom in the garden each spring.",
    message: "Hjfmz qfxxmrj yltlj fg lgt jqfxgmr fjxt lxtjr.",
    incorrectIndexes: [0, 5, 11, 17, 22, 28, 34],
  },
  {
    reference: "The forest awakens with the morning light.",
    message: "Lgt fgxmr jqftjx zkft lgt rfjgtxr xjglk.",
    incorrectIndexes: [3, 8, 14, 19, 24, 30, 35],
  },
  {
    reference: "Raindrops fall gently on the silent lake.",
    message: "Qjlxqfxl jxtj qfjfm fx lgt qfxmr xkxtjr.",
    incorrectIndexes: [1, 5, 10, 15, 21, 27, 32],
  },
  {
    reference: "Sunlight filters softly through the dense trees.",
    message: "Lxfmrj hjmtrxt qfjfmyp gmzqvj lgt jqfxgmr xjlxr.",
    incorrectIndexes: [0, 6, 12, 18, 23, 28, 34],
  },
  {
    reference: "The sky glows as the sun begins to set.",
    message: "Lgt xjlqz hjxmr yx lgt yktjr fjxtj gm qfj.",
    incorrectIndexes: [1, 7, 11, 17, 22, 28, 32],
  },
  {
    reference: "Morning dew sparkles on the forest leaves.",
    message: "Rfjtqx hjxtmtr jqfxmrj fg lgt fgxmr jqftx.",
    incorrectIndexes: [2, 6, 12, 17, 22, 28, 33],
  },
  {
    reference: "A calm lake mirrors the blue sky above.",
    message: "Y xjmj xljf fxpxtmr lgt jqzx xjlqz xjf.",
    incorrectIndexes: [1, 5, 10, 16, 21, 27, 31],
  },
  {
    reference: "Snow covers the mountain peaks in winter.",
    message: "Xgzb jqftmr lgt zfjkxbxmr yjxtx fg hjfxtxr.",
    incorrectIndexes: [0, 6, 12, 18, 23, 28, 32],
  },
  {
    reference: "The evening sky turns shades of orange and pink.",
    message: "Lgt qfjmr xjlqz jqnt xfqlmr fn qzxjr yxjkj.",
    incorrectIndexes: [2, 7, 12, 18, 22, 28, 33],
  },
  {
    reference: "A gentle river flows peacefully through the meadow.",
    message: "Y jfmfx qzxvr yltjx zlfrtmyp gmzqvj lgt wqjfx.",
    incorrectIndexes: [1, 6, 13, 18, 23, 29, 35],
  },
  {
    reference: "A quiet moment in nature soothes the soul.",
    message: "Y jqxtj zfxjtj fg qtxfmr xlmr lgt tjxr.",
    incorrectIndexes: [0, 6, 11, 15, 20, 27, 31],
  },
  {
    reference: "The full moon shines brightly in the sky.",
    message: "Lgt hjxt zfjxr qfxmrltmr fg lgt xjlqz.",
    incorrectIndexes: [1, 7, 13, 18, 23, 28, 33],
  },
  {
    reference: "Autumn leaves fall gracefully in the park.",
    message: "Qjxxmr jqftx jxtj jtlfgmfxmr fg lgt zfrx.",
    incorrectIndexes: [2, 8, 13, 19, 24, 29, 34],
  },
  {
    reference: "A forest path leads to hidden waterfalls.",
    message: "Y fgxmr yltj jltjx gm qfxfx jlfjzqxmr.",
    incorrectIndexes: [1, 5, 10, 15, 20, 26, 30],
  },
  {
    reference: "The river reflects the beauty of the forest.",
    message: "Lgt qzxvr ykjfrx lgt zfxmr fn lgt fgxmr.",
    incorrectIndexes: [1, 7, 12, 17, 23, 28, 33],
  },
  {
    reference: "Snow-capped peaks glisten in the sunlight.",
    message: "Xgzb-xflfx jxtjx hjxmtr fg lgt lxfmrj.",
    incorrectIndexes: [1, 5, 9, 14, 20, 25, 29],
  },
  {
    reference: "The lake sparkles in the early morning sun.",
    message: "Lgt xljf fqxtmrj fg lgt jqfxr rfjgtxr yktjr.",
    incorrectIndexes: [1, 6, 11, 16, 22, 27, 32],
  },
];
