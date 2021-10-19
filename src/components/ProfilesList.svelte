<script>
    import { ProfileStore } from "../stores.js";
    import {fade, scale} from "svelte/transition";
    import ProfileCard from "./ProfileCard.svelte"
</script>

<ul class="profiles-list">
    {#each $ProfileStore as profile (profile.id)}
        <li animate:fade >
            <ProfileCard {profile} />
        </li>
    {/each}
</ul>

<style>
    
    ul{
        display: flex;
        justify-content: space-evenly;
        gap: 3rem;
        max-width: 60%;
        min-height: 250px;
        margin: 0 auto;
    }

    @media (max-width: 700px) {
        ul {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* margin: 0 auto; */
            min-height: 0;
        }
    }

</style>