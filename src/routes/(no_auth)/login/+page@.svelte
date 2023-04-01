<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import AuthFormContainer from "$components/forms/AuthFormContainer.svelte";

  let submitting = false;

  export let form;
</script>

<AuthFormContainer title="Login">
  <form 
      method="POST" 
      action="?/login"
      use:enhance={({}) => {
        submitting = true;

        return async ({ update, result }) => {
          await update();
          await applyAction(result);
          submitting = false;
        }
      }}
  >
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
      <input 
        type="email"
        id='email'
        name='email'
        placeholder="john@checkoff.com" 
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

    <button disabled={submitting} type="submit" class="disabled:bg-gray-500 mt-8 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-full">
      Submit
    </button>
  </form>

  {#if form?.success}
    <p>Succesfully logged in! Welcome back!</p>
  {/if}
</AuthFormContainer>