<!-- https://learn.svelte.dev/tutorial/styling -->
<!-- https://kit.svelte.dev/docs/load -->
<!-- https://kit.svelte.dev/docs/form-actions -->

<script type="ts">
    import { applyAction, enhance } from '$app/forms';
    import { Result } from 'postcss';

    let email;
    let pass;
    let confPass;

    let submitting = false;

    export let data;
    export let form;
</script>

<main class="h-screen flex">
    <div class="lg:m-auto lg:max-w-screen-sm shadow-lg w-full bg-white rounded-xl">
      <!-- DO NOT TOUCH MARGIN DIV BELLOW -->
      <div class="shadow h-full px-10 py-14 rounded-xl"> 
        <h1 class="mb-8 font-semibold text-4xl lg:text-5xl text-center">Register</h1>
  
        <form 
            method="POST" 
            action="?/register"
            use:enhance={({}) => {
                submitting = true;


                return async ({ update, result }) => {
                  if (result.type === 'error') {
                    // await applyAction(result)
                  }

                  await update();
                  await applyAction(result)
                  submitting = false;
                }
            }}
        >
          {#if form?.missing}
            <p>The email field is required</p>
          {/if}
          {#if form?.incorrect}
            <p>Invalid credentials</p>
          {/if}
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input 
              disabled={submitting} value={form?.email?.toString() ?? ''} type="email" id="email" name="email" 
              placeholder="name@flowbite.com" 
              required
              class="
               bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
               disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-300
              " 
          >
          </div>
  
          <div class="mb-6">
            <label for="password" class="
              block mb-2 text-sm font-medium text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-300">Your password</label>
            <input 
              disabled={submitting} 
              type="password" 
              id="password" 
              name="password" 
              required
              class="
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-300
              " 
            >
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-300">Confirm Password</label>
            <input 
              disabled={submitting} 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              required
              class="
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-300
              " 
            >
          </div>
  
          <button disabled={submitting} type="submit" class="disabled:bg-gray-500 mt-8 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-full">
            Register
          </button>
        </form>

        {#if form?.success}
            <p>Successfully logged in! Welcome back, </p>
        {/if}
  
      </div>
    </div>
  </main>