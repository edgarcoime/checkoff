import { redirect } from '@sveltejs/kit'

export async function load({ cookies, url }) {
  if (!cookies.get('logged_in')) {
    throw redirect(307, `/login?redirectTo=${url.pathname}`)
  }
}