'use server'
import { serverClient } from "../server"


export async function loginUserAction(creds: { email: string, password: string }) {
  try {
    const result = await serverClient.auth.login(creds);
    return { success: true, data: result };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}