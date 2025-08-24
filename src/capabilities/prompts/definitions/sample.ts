import { z } from 'zod';
import type { Prompt } from '../types';

const schema = {
    location: z.string().describe('location'),
    option: z.string().describe('additional condition'),
} as const;

export const outfitAdvicePrompt: Prompt<typeof schema> = {
    name: 'advice-outfit',
    title: 'Weather-based Outfit Advice',
    description: 'Get weather information and feels-like temperature for a specified area and provide appropriate outfit advice',
    inputSchema: schema,
    handler: ({ location, option }) => {
        const prompt = promptText(location, option);
        return {
            messages: [{
                role: 'user',
                content: {
                    type: 'text',
                    text: prompt,
                }
            }]
        };
    },
};

const promptText = (location: string, option: string) => {
        return `
${location}の天気予報をもとに服装をアドバスしてください:

手順:
1. まず "${location}" の緯度経度を特定する
2. 緯度経度を元に天気情報を取得する
    - ${option} の内容に応じて current-weather または forecast-weather のどちらかを使用すること
3. 天気情報を元に feel-like-temparature で体感温度を計算する
4. 気温、湿度を元に discomfort-index で不快指数を計算する
5. 計算した不快指数から dscomfort-index で不快指数の体感を特定する
6. 天気情報および体感温度、不快指数もとに服装をアドバイスする

アドバイス形式:
- 対象エリア
- 天気情報
  - 気温
  - 湿度
  - 風速
  - 天気
  - 体感温度
  - 不快指数
- 👕 基本の服装
- 🧥 追加アイテム（必要に応じて）
- ☂️ 天候対策
- 💡 ポイント・注意事項
`.trim();
};
