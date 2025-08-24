import { z } from 'zod';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

/**
 * Utility type for functions that may or may not return a Promise
 */
type MaybePromise<T> = T | Promise<T>;

/**
 * Tool definition interface for type-safe tool registration
 */
export interface Tool<T extends Record<string, z.ZodType> = Record<string, z.ZodType>> {
    name: string;
    title: string;
    description: string;
    inputSchema: T;
    handler: (args: z.infer<z.ZodObject<T>>) => MaybePromise<CallToolResult>;
}
