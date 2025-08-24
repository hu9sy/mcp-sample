import { z, ZodType } from 'zod';

export type Prompt<TSchema extends ZodType = ZodType> = {
    name: string;
    title: string;
    description: string;
    schema: TSchema;
    handler: (input: z.infer<TSchema>) => Promise<any>;
};
