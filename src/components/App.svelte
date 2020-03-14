<script>
    export let name;

    function handleClick() {
        console.log('click');
        api.cb(name);
    }
</script>

<style>
    h1 {
        color: purple;
    }

    button {
        background-color: yellow;
    }
</style>

<h1>Hello {name}!</h1>


<input type=text bind:value={name}>

<button on:click={handleClick}>click</button>
