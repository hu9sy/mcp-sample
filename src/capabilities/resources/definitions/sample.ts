import type { Resource } from '../types';

const schema = {} as const;
const uri = 'discomfort://guidelines/list';
const mimeType = 'application/json'

export const discomfortIndexResource: Resource<typeof schema> = {
    uri: uri,
    name: 'dscomfort-index',
    title: 'Discomfort index guide',
    description: 'resource discomfort index guide',
    mimeType: mimeType,
    inputSchema: schema,
    handler: async ({}) => {
        const discomfortIndexGuide = {
            "ranges": [
                {
                    min: 0,
                    max: 50,
                    feeling: "unbearably cold"
                },
                {
                    min: 50,
                    max: 55,
                    feeling: "cold"
                },
                {
                    min: 55,
                    max: 60,
                    feeling: "chilly"
                },
                {
                    min: 60,
                    max: 65,
                    feeling: "no discomfort"
                },
                {
                    min: 65,
                    max: 70,
                    feeling: "comfortable"
                },
                {
                    min: 70,
                    max: 75,
                    feeling: "some people feel discomfort"
                },
                {
                    min: 75,
                    max: 80,
                    feeling: "more than half feel discomfort"
                },
                {
                    min: 80,
                    max: 85,
                    feeling: "everyone feels discomfort"
                },
                {
                    min: 85,
                    max: 100,
                    feeling: "unbearably hot"
                }
            ]
        };
        return {
            contents: [{
                uri: uri,
                mimeType: mimeType,
                text: JSON.stringify(discomfortIndexGuide, null, 2),
            }],
        }
    }
};
