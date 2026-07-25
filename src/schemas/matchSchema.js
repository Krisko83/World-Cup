import * as z from 'zod'

export const CreateMatchSchema = z.object({
    homeTeam: z.string()
        .min(2, { error: 'Home team must be at least 2 characters long' }),
    awayTeam: z.string()
        .min(2, { error: 'Away team must be at least 2 characters long' }),
    homeGoals: z.coerce.number()
        .nonnegative({ error: 'Goals must be equal or more then 0!' }),
    awayGoals: z.coerce.number()
        .nonnegative( { error: 'Goals must be equal or more then 0!' }),
    stage: z.enum(['Group Stage', 'Round of 16', 'Round of 8', 'Quarter-final', 'Semi-final', 'Final'],
        { error: 'Stage must be ane of these options Group Stage, Round of 16, Round of 8, Quarter-final, Semi-final, Final' }),
    venue: z.string()
        .min(5, { error: 'Venue team must be at least 5 characters long' }),
    date: z.string()
        .min(8, { error: 'Date team must be at least 8 characters long' }),
    imageUrl: z.string()
        .regex(/^https?:\/\//, { error: 'ImageUrl must start with http:// or https://' }),
    description: z.string()
        .min(10, { error: 'Description team must be at least 10 characters long' })
});
