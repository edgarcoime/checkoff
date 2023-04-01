import { fail, redirect } from '@sveltejs/kit';

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function hash(slug: string) {
  return slug;
}

export const actions ={
  register: async ({ request, cookies, url }) => {
    const data = await request.formData();
    const email = data.get('email')
    const password = data.get('password')
    const confirmPassword = data.get("confirmPassword")

    // Validate form values
    if (!email) {
      return fail(400, { email, missing: true })
    }
    if (!password) {
      return fail(400, { password, missing: true })
    }
    if (!confirmPassword) {
      return fail(400, { confirmPassword, missing: true })
    }

    // Fetch user
    const user = {
      email: "sample@email.com",
      password: "asdf"
    }

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