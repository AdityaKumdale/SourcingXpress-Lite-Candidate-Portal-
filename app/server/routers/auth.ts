import { router, publicProcedure ,TRPCError} from '../trpc';
import { z } from 'zod';
import { readDb } from '../../lib/db';

//(Replaces api/auth/login)
export const authRouter = router({
  login: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string() 
    }))
    .mutation(async ({ input }) => {
      const db = await readDb();
      const user = db.users.find(u => u.email === input.email && u.password === input.password);

      if (!user) {
        throw new TRPCError({ 
          code: 'UNAUTHORIZED', 
          message: 'Invalid credentials' 
        });
      }

      // Remove password
      const { password: _, ...userWithoutPass } = user;
      
      return {
        user: userWithoutPass,
        token: `fake-token-for-${user.id}`
      };
    }),
});

