import { z, ZodType } from 'zod';

export interface Prompt<TSchema extends ZodType = ZodType> {
    name: string;
    title: string;
    description: string;
    schema: TSchema;
    handler: (input: z.infer<TSchema>) => Promise<any>;
}
