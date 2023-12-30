<script>
    import { signIn } from "$lib/firebase";
    import { user } from "$lib/store";
    import { onMount } from "svelte";
    import { getRecentMail } from "$lib/gmailApi";


    const signInWithGoogle = async () => {
        console.log('signing in')
        user.set(await signIn())
    };
    let messages = []

    // onMount(async () => {
    //     if ($user) {
    //         messages = await getRecentMail($user?.uid, 10)
    //         console.log(messages)
    //     }
    // })
</script>
<h1>
    Welcome to Campus

    {#if $user}
        <p>Logged in as {$user.email}</p>

        
    {:else}
        <button on:click={signInWithGoogle}>Sign in with Google</button>
    {/if}
</h1>