# [Next.js](https://nextjs.org/) Starter Pack

This starter pack provides a comprehensive Next.js setup, built on top of `create-next-app`, and includes additional features such as:

### Auth Provider

- **[Clerk](https://clerk.com/docs/quickstarts/overview)**: For authentication and user management.

### Database - ORM

- **[Prisma](https://www.prisma.io/docs/getting-started/quickstart)**: For database access and ORM.

### State Managment

- **[TanStack Query](https://tanstack.com/)**: For powerful data fetching and state management.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: For global state management.

### Type safery and validation

- **[Zod](https://zod.dev/)**: For type-safe validation and parsing.

### Styling

- **[Shadcn](https://ui.shadcn.com/)**: A collection of components for beautiful UI.
- **[ESLint](https://eslint.org/) Configuration**: Basic ESLint setup for code quality.
- **[Prettier](https://prettier.io/) Configuration**: Code formatting for consistency.

## How to run the project

1. **Install Node.js** version `^20.16.0` or later: [Node.js](https://nodejs.org/en/download/)
2. **Install pnpm** version `^9.0.0` or later: `npm install -g pnpm@9.6.0`
3. **Install project dependencies** - `pnpm install`
4. **Create a `.env` file** in the root of the project and add the environment variables which is provided in `.env.example` file.:
5. **Generate prisma client** - `pnpm prisma generate`
6. **Sync database** - `pnpm prisma migrate dev`
7. **Run the application** - `pnpm dev`

## Additional Information

Once the application is running, you can start developing with a powerful setup already configured. For more details on customizing your environment or extending the starter pack, refer to the documentation of each included tool.

Happy Coding!
