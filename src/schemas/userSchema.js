import * as z from 'zod';

export const CreateUserSchema = z.object({
    email: z.email({ error: 'Invalid email' }),
    password: z.string().min(6, { error: 'Password must be at least 6 characters long!' }),
    rePassword: z.string()
}).refine((data) => data.password === data.rePassword, {
    error: 'Passwords do not match!',
    path: ['rePassword']
}).transform(({ rePassword, ...data }) => data)