import { z } from 'zod';
import type { Tool } from '../types';

const schema = {
    temperature: z.number().describe('Temperature in Celsius'),
    humidity: z.number().min(0).max(100).describe('Humidity percentage (0-100)'),
    windSpeed: z.number().min(0).describe('Wind speed in m/s'),
} as const;

export const feelLikeTemparatureTool: Tool<typeof schema> = {
    name: "feellike-temparature",
    title: "Calculate feels like temparature",
    description: "Calculate feels-like temperature in Celsius from temperature, humidity, and wind speed",
    inputSchema: schema,
    handler: async ({ temperature, humidity, windSpeed }) => {
        try {
            // Heat Index calculation (for temperatures >= 27°C)
            let feelsLike = temperature;

            if (temperature >= 27) {
                const T = temperature;
                const RH = humidity;

                // Heat Index formula
                feelsLike = -8.78469475556 +
                           1.61139411 * T +
                           2.33854883889 * RH +
                           -0.14611605 * T * RH +
                           -0.012308094 * T * T +
                           -0.0164248277778 * RH * RH +
                           0.002211732 * T * T * RH +
                           0.00072546 * T * RH * RH +
                           -0.000003582 * T * T * RH * RH;
            } else {
                // Wind Chill calculation (for temperatures < 10°C and wind speed > 4.8 km/h)
                const windSpeedKmh = windSpeed * 3.6; // Convert m/s to km/h
                if (temperature < 10 && windSpeedKmh > 4.8) {
                    feelsLike = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * temperature * Math.pow(windSpeedKmh, 0.16);
                }
            }

            return {
                content: [{
                    type: "text" as const,
                    text: `Feels-like temperature: ${feelsLike.toFixed(1)}°C (from temperature: ${temperature}°C, humidity: ${humidity}%, wind speed: ${windSpeed} m/s)`
                }]
            };
        } catch (error) {
            return {
                content: [{
                    type: "text" as const,
                    text: `Failed to calculate feels-like temperature: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
                isError: true
            };
        }
    }
};
