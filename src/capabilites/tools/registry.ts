import { z, type ZodRawShape } from 'zod';

export type Tool<InputSchema extends ZodRawShape = ZodRawShape> = {
    name: string;
    description: string;
    inputSchema: InputSchema;
    handler: (input: z.infer<InputSchema>) => Promise<unknown>;
};
