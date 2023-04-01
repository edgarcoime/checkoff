import { delay, getTestUser, hash } from '$functions/util';
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
  login: async ({ request, cookies, url}) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    // Validate form values
    if (!email) {
      return fail(400, { email, missing: true })
    }
    if (!password) {
      return fail(400, { password, missing: true })
    }

    // Fetch user
    const user = getTestUser();
    await delay(1000);

    // Validate user password
    if (!user || user.password !== hash(password.toString())) {
      return fail(400, { email, incorrect: true })
    }

    if (url.searchParams.has('redirectTo')) {
      throw redirect(303, url.searchParams.get('redirectTo')?.toString() ?? '/')
    }

    // get user from db and set cookie

    return { success: true };
  }
}