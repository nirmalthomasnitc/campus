<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    onMount(() => {
        const href = $page.url.hash
        const params = href.split("&");
        let res = params.reduce((acc, curr) => {
            const [key, value] = curr.split("=");
            acc[key] = value;
            return acc;
        }, {});
        document.cookie = `access_token=${res.access_token};`
        goto('/')
    });
</script>

<main>Please Wait you will be redirected shortly</main>
