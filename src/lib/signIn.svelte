<script>
    import { PUBLIC_CLIENT_ID } from "$env/static/public"
    
    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
        client_id: PUBLIC_CLIENT_ID,
        redirect_uri: "http://127.0.0.1:5173/signin",
        response_type: "token",
        scope: "https://mail.google.com",
        include_granted_scopes: "true",
        state: "pass-through value",
    };
</script>

<form action='https://accounts.google.com/o/oauth2/v2/auth' method="GET">
    {#each Object.entries(params) as [key, value]}
        <input type="hidden" name={key} value={value}>
    {/each}
    <input type="submit" class="p-2 rounded bg-blue-600 text-white font-semibold cursor-pointer" value="Log in with Google">
</form>
