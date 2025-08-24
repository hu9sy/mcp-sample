import { type Tool } from './registry';
import { env } from '../../utils/env';
import axios from 'axios';
import { z } from 'zod';

const url = 'https://api.openweathermap.org/data/2.5/weather';

const inputSchema = z.object({
    latitude: z.number().min(-90).max(90).describe('Latitude of location'),
    longitude: z.number().min(-180).max(180).describe('Longitude of location'),
});

export const currentWeatherTool: Tool = {
    name: 'current-weather',
    description: 'Fetch current weather data for a given location',
    inputSchema: inputSchema,
    handler: async (input) => {
        const { latitude, longitude } = input;
        try {
            const response = await axios.get(url, {
                params: {
                    appId: env.MCP_API_KEY,
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
    },
};
