// Get a list of post components using webpack context
const context = require.context('../posts', false, /\.md$/);
export const posts = context.keys().sort().map(context);

