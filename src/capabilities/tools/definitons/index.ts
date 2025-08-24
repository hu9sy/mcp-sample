import type { Tool } from '../types';

import { currentWeatherTool } from './current-weather';

// Export all tools as an array for easy iteration
export const definitions: Tool<any>[] = [
    currentWeatherTool,
];
