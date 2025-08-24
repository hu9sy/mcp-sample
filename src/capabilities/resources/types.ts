import { z } from 'zod';
import type { ReadResourceResult } from '@modelcontextprotocol/sdk/types.js';

/**
 * Utility type for functions that may or may not return a Promise
 */
type MaybePromise<T> = T | Promise<T>;

/**
 * Tool definition interface for type-safe tool registration
 */
export interface Resource<T extends Record<string, z.ZodType> = Record<string, z.ZodType>> {
    uri: string;
    name: string;
    title: string;
    description: string;
    mimeType: string;
    inputSchema: T;
    handler: (args: z.infer<z.ZodObject<T>>) => MaybePromise<ReadResourceResult>;
}
