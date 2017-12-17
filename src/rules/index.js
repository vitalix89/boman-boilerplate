import { createPermission } from 'boman';
import { createError } from 'apollo-errors';

const NotNarco = createError('NotNarco', {
  message: 'Has to be narco to access this resource',
});

export const narcoOnly = createPermission({
  error: NotNarco,
  validate: user => !user.isNarco,
});

// super simple shit ok this complicated? no boman has auth?
// boman is not about the auth, about making things simple
// we can try to attach auth
