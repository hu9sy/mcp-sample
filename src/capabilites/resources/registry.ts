import { z, ZodType } from 'zod';

export interface Resource<TSchema extends ZodType = ZodType> {
    uri: string;
    name: string;
    title: string;
    description: string;
    mineType: string;
    inputSchema: TSchema;
    callback: (input: z.infer<TSchema>) => Promise<any>;
}
