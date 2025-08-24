import { z } from 'zod';

/**
 * Utility type for functions that may or may not return a Promise
 */
type MaybePromise<T> = T | Promise<T>;

/**
 * Tool response content types
 */
type TextContent = {
    type: "text";
    text: string;
};

type ImageContent = {
    type: "image";
    data: string;
    mimeType?: string;
};

/**
 * Tool response type
 */
type Response = {
    content: Array<TextContent | ImageContent>;
    isError?: boolean;
};

/**
 * Tool definition interface for type-safe tool registration
 */
export interface Tool<T extends Record<string, z.ZodType> = Record<string, z.ZodType>> {
    name: string;
    title: string;
    description: string;
    inputSchema: T;
    handler: (args: z.infer<z.ZodObject<T>>) => MaybePromise<Response>;
}
