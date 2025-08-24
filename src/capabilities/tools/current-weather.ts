import { z } from 'zod';
import { env } from '../../utils/env';
import axios from 'axios';
import type { Tool } from './registry';

const schema = {
    latitude: z.number().min(-90).max(90).describe('Latitude of location'),
    longitude: z.number().min(-180).max(180).describe('Longitude of location'),
} as const;

export const currentWeatherTool: Tool<typeof schema> = {
    name: "current-weather",
    title: "Current Weather",
    description: "Fetch current weather by location",
    inputSchema: schema,
    handler: async ({ latitude, longitude }) => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    appid: env.MCP_API_KEY,
                    lat: latitude,
                    lon: longitude,
                    units: 'metric',
                }
            });
            return {
                content: [{
                    type: "text" as const,
                    text: JSON.stringify(response.data, null, 2)
                }]
            };
        } catch (error) {
            return {
                content: [{
                    type: "text" as const,
                    text: `Failed to fetch weather data: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
                isError: true
            };
        }
    }
};
