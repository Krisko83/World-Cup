import * as z from 'zod';

export function getErrorMessage(err) {
    let error = {}

    if(err instanceof z.ZodError) {
        const errors = z.flattenError(err).fieldErrors;
        error = Object.values(errors).flat().at(0);
    } else {
        error = err.message;
    }

    return error;
}