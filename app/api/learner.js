// /////////Fetching Data

// //////////Caching Data
// fetch('https://...', { cache: 'force-cache' })


// //////////Revalidation
// //  is the process of purging the Data Cache and re-fetching the latest data. 
// //Time-based Revalidation
// fetch('https://...', { next: { revalidate: 3600 } })

// //On-demand Revalidation
// // Data can be revalidated on-demand by path (revalidatePath) or by cache tag (revalidateTag) inside a Server Action or Route Handler.
// export default async function Page() {
//   const res = await fetch('https://...', { next: { tags: ['collection'] } })
//   const data = await res.json()
//   // ...
// }
// 'use server'
// import { revalidateTag } from 'next/cache'
// export default async function action() {
//   revalidateTag('collection')
// }
// // allow you to create custom request handlers for a given route using the Web Request and Response APIs.
// //cached by default when using the GET method with the Response object.

// // can opt out of caching by:
// // Using the Request object with the GET method.
// // Using any of the other HTTP methods.
// // Using Dynamic Functions like cookies and headers.
// // The Segment Config Options manually specifies dynamic mode.




// ///Route handlers
// //Revalidating Cached Data
// export async function GET() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     next: { revalidate: 60 }, // Revalidate every 60 seconds
//   })
//   const data = await res.json()
 
//   return Response.json(data)
// }
// export async function POST(request: Request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const email = formData.get('email')
//   return Response.json({ name, email })
// }
// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const query = searchParams.get('query')
//   // query is "hello" for /api/search?query=hello
// }

// //app/items/[slug]/route.js	->url-> /items/a	params->{ slug: 'a' }
// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug // 'a', 'b', or 'c'
// }


// //Updating data
// ////Server Actions/Invoking Server Functions and Mutations
// //asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.
// //There are two main ways you can invoke a Server Function:
//     // Forms in Server and Client Components
//     // Event Handlers and useEffect in Client Components
// //Remote Procedure Call (RPC) in Next.js is a pattern for calling server-side functions directly from the client-side code as if they were local functions, simplifying client-server communication.
// //  Next.js facilitates this primarily through its built-in Server Actions feature, or via specialized libraries like tRPC

// // Server Component
// export default function Page() {
//   // Server Action
//   async function create() {
//     'use server'
 
//     // ...
//   }
 
//   return (
//     // ...
//   )
// }

// //Client Components
// //Client Components can only import actions that use the module-level "use server" directive.
// //Server Actions are not limited to <form> and can be invoked from event handlers, useEffect, third-party libraries, and other form elements like <button>.
// 'use server'
// export async function create() {
//   // ...
// }
// import { create } from '@/app/actions'
// export function Button() {
//   return (
//     // ...
//   )
// }

// <ClientComponent updateItem={updateItem} />    //Server Action as prop
// 'use client'
// export default function ClientComponent({ updateItem }) {
//   return <form action={updateItem}>{/* ... */}</form>
// }

// //Revalidatiion
// 'use server'
// import { revalidatePath } from 'next/cache'
// export async function createPost() {
//   try {
//     // ...
//   } catch (error) {
//     // ...
//   }
 
//   revalidatePath('/posts')
// }


// //Server-side validation and error handling
// 'use server'
// import { z } from 'zod'
// const schema = z.object({
//   email: z.string({
//     invalid_type_error: 'Invalid Email',
//   }),
// })
// export default async function createUser(formData: FormData) {
//   const validatedFields = schema.safeParse({
//     email: formData.get('email'),
//   })
 
//   // Return early if the form data is invalid
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }
//   // Mutate data
// }

// //Once the fields have been validated on the server, you can return a serializable object in your action and use the React useFormState hook to show a message to the user.
// 'use server' 
// export async function createUser(prevState: any, formData: FormData) {
//   // ...
//   return {
//     message: 'Please enter a valid email',
//   }
// }

// 'use client'
// import { useFormState } from 'react-dom'
// import { createUser } from '@/app/actions'
// const initialState = {
//   message: '',
// }
// export function Signup() {
//   const [state, formAction] = useFormState(createUser, initialState) //useActionState
 
//   return (
//     <form action={formAction}>
//       <label htmlFor="email">Email</label>
//       <input type="text" id="email" name="email" required />
//       {/* ... */}
//       <p aria-live="polite" className="sr-only">
//         {state?.message}
//       </p>
//       <button>Sign up</button>
//     </form>
//   )
// }

// //Forms
// 'use server'
 
// export async function createPost(formData: FormData) {
//   const title = formData.get('title')
//   const content = formData.get('content')
 
//   // Update data
//   // Revalidate cache
// }
// import { createPost } from '@/app/actions'
 
// export function Form() {
//   return (
//     <form action={createPost}>
//       <input type="text" name="title" />
//       <input type="text" name="content" />
//       <button type="submit">Create</button>
//     </form>
//   )
// }

// //Event Handlers
// 'use client'
 
// import { incrementLike } from './actions'
// import { useState } from 'react'
 
// export default function LikeButton({ initialLikes }: { initialLikes: number }) {
//   const [likes, setLikes] = useState(initialLikes)
 
//   return (
//     <>
//       <p>Total Likes: {likes}</p>
//       <button
//         onClick={async () => {
//           const updatedLikes = await incrementLike()
//           setLikes(updatedLikes)
//         }}
//       >
//         Like
//       </button>
//     </>
//   )
// }


// //Showing a pending state
// 'use client'
 
// import { useActionState, startTransition } from 'react'
// import { createPost } from '@/app/actions'
// import { LoadingSpinner } from '@/app/ui/loading-spinner'
 
// export function Button() {
//   const [state, action, pending] = useActionState(createPost, false)
 
//   return (
//     <button onClick={() => startTransition(action)}>
//       {pending ? <LoadingSpinner /> : 'Create Post'}
//     </button>
//   )
// }

// //useEffect
// 'use client'
 
// import { incrementViews } from './actions'
// import { useState, useEffect, useTransition } from 'react'
 
// export default function ViewCount({ initialViews }: { initialViews: number }) {
//   const [views, setViews] = useState(initialViews)
//   const [isPending, startTransition] = useTransition()
 
//   useEffect(() => {
//     startTransition(async () => {
//       const updatedViews = await incrementViews()
//       setViews(updatedViews)
//     })
//   }, [])
 
//   // You can use `isPending` to give users feedback
//   return <p>Total Views: {views}</p>
// }



// //tRPC + actions
// // .
// // ├── src
// // │   ├── app               <-- New App Router
// // │   │   ├── layout.tsx
// // │   │   └── page.tsx
// // │   ├── server
// // │   │   ├── index.ts      <-- The "Caller" we discussed
// // │   │   └── routers       <-- Your tRPC logic (stays the same!)
// // │   └── actions.ts        <-- The Server Action file

// // The Code He Wants (The "Caller" Pattern)
// // He likely wants you to use the "Server Caller" pattern. This allows you to "call" your tRPC procedures directly inside a Server Action or Server Component as if they were normal functions.

// // Step 1: Create your Router (Standard tRPC)
// // server/routers/user.ts
// import { z } from 'zod';
// import { publicProcedure, router } from '@/server/trpc';

// export const userRouter = router({
//   createUser: publicProcedure
//     .input(z.object({ name: z.string() }))
//     .mutation(async ({ input, ctx }) => {
//       return await ctx.db.user.create({ data: input });
//     }),
// });

// export const appRouter = router({
//   user: userRouter,
// });
// // Step 2: Create the "Caller" (The Magic Link)
// // This is the file that bridges tRPC and Server Actions. server/index.ts
// import { appRouter } from './routers/app';
// import { createCallerFactory } from './trpc'; // standard tRPC factory
// import { createContext } from './context'; 

// // This helper creates a "caller" for every request
// const createCaller = createCallerFactory(appRouter);

// export const serverClient = async () => {
//   const ctx = await createContext();
//   return createCaller(ctx);
// }
// // Step 3: The Server Action (What he asked for)
// // Instead of the client calling trpc.user.create.useMutation(), you create a Server Action that calls the logic directly. actions.ts
// 'use server'
// import { serverClient } from '@/server'
// import { revalidatePath } from 'next/cache'

// export async function createTodoAction(formData: FormData) {
//   const name = formData.get('name') as string;

//   // 1. Get the tRPC caller
//   const trpc = await serverClient();

//   // 2. Call the procedure DIRECTLY (No HTTP fetch!)
//   // This runs validation and the mutation logic defined in your router
//   await trpc.user.createUser({ name });

//   revalidatePath('/');
// }