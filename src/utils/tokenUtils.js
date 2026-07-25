import jwt from 'jsonwebtoken';

export function createAuthToken(user) {
    const payload = { id: user.id, email: user.email };

    const token = jwt.sign(payload, process.env.AUTH_SECRET, { expiresIn: '2h'});

    return token;
}