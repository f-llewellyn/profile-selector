<script>
    import {v4 as uuidv4} from "uuid"
    import {ProfileStore} from "../stores"

    const handleAdd = async() => {
        if ($ProfileStore.length < 3) {
            fetch("https://randomuser.me/api/?inc=gender,name,picture")
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].name.first)

                const newProfile = {
                    id: uuidv4(),
                    firstName: data.results[0].name.first,
                    lastName: data.results[0].name.last,
                    imgURL: data.results[0].picture.large
                }

                ProfileStore.update((currentProfiles) => {
                return [...currentProfiles, newProfile]
                })
            })
            .catch(error => {
                console.log(error);
                return [];
            });
        }
        
    }
</script>

<div class="btn-container">
    {#if $ProfileStore.length < 3}
        <button on:click={handleAdd}>Add Profile</button>
    {:else}
        <h3>A maximum of 3 profiles are allowed at once. If you'd like to add another, you'll have to remove an exisitng one.</h3>
    {/if}
</div>


<style>

    .btn-container {
        margin-top: 4rem;
		transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

	button {
		cursor: pointer;
		display: block;
		outline: none;
		border: none;
		background-color: #f0f4fb;
		color: #2c3e50;
		font-family: "Mulish", sans-serif;
		font-weight: bold;
		font-size: 18px;
		padding: 1rem 1.5rem;
		border-radius: 10px;
	}

	button:hover,
	button:focus {
		background-color: #2c3e50;
		color: #f0f4fb;
	}

    h3 {
        text-align: center;
        max-width: 50ch;
    }
</style>
