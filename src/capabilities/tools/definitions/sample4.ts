import { z } from 'zod';
import type { Tool } from '../types';

const schema = {
    temperature: z.number().describe('Temperature in Celsius'),
    humidity: z.number().min(0).max(100).describe('Humidity percentage (0-100)'),
} as const;

export const discomfortIndexTool: Tool<typeof schema> = {
    name: "discomfort-index",
    title: "Calculate discomfort index",
    description: "Calculate discomfort index in Celsius from temperature, humidity",
    inputSchema: schema,
    handler: async ({ temperature, humidity }) => {
        try {
            const discomfort = 0.81 * temperature + 0.01 * humidity * (0.99 * temperature - 14.3) + 46.3;

            return {
                content: [{
                    type: "text" as const,
                    text: `Discomfort index: ${discomfort.toFixed(2)} (from temperature: ${temperature}°C, humidity: ${humidity}%)`
                }]
            };
        } catch (error) {
            return {
                content: [{
                    type: "text" as const,
                    text: `Failed to calculate discomfort index: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
                isError: true
            };
        }
    }
};
