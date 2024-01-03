<script>
    import { onMount } from "svelte"
    import SignIn from "$lib/signIn.svelte";
    import MailMenu from "$lib/MailMenu.svelte";
    
    let showSignIn = false
    let accessToken = ""

    onMount(() => {
        showSignIn = !document.cookie.includes("access_token")
        accessToken = document.cookie.split("=")[2]
    })

</script>
<main>
    {#if showSignIn}
    <div class="p-2">
        <SignIn></SignIn>
    </div>
    {:else}
    <section class="p-2">
        <MailMenu />
    </section>
    {/if}
</main>

<svelte:head>
    <title>Home</title>
</svelte:head>