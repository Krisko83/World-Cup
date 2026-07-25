import * as z from 'zod'

export const CreateMatchSchema = z.object({
    homeTeam: z.string(),
    awayTeam: z.string(),
    homeGoals: z.coerce.number().min(0, { error: 'Goals must be equal or more then 0!' }),
    awayGoals: z.coerce.number().min(0, { error: 'Goals must be equal or more then 0!' }),
    stage: z.enum(['Group Stage', 'Round of 16', 'Round of 8', 'Quarter-final', 'Semi-final', 'Final']),
    venue: z.string(),
    date: z.string(),
    imageUrl: z.string().regex(/^https?:\/\//, { error: 'ImageUrl must start with http:// or https://' }),
    description: z.string()
});


// ['Group Stage', 'Round of 16', 'Round of 8', 'Quarter-final', 'Semi-final', 'Final']

// ['group-stage', 'round-of-16', 'round-of-8', 'quarter-final', 'semi-final', 'final']