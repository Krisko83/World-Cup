import * as z from 'zod';

export const CreateUserSchema = z.object({
    email: z.email({ error: 'Invalid email' }).min(10, { error: 'Email must be at least 10 characters long.'}),
    password: z.string().min(4, { error: 'Password must be at least 4 characters long!' }),
    rePassword: z.string()
}).refine((data) => data.password === data.rePassword, {
    error: 'Passwords do not match!',
    path: ['rePassword']
}).transform(({ rePassword, ...data }) => data)