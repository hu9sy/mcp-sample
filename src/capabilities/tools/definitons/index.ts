import type { Tool } from '../types';

import { currentWeatherTool } from './sample';

// Export all tools as an array for easy iteration
export const definitions: Tool<any>[] = [
    currentWeatherTool,
];
