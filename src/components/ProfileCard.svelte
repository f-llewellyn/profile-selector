<script>
	import {ProfileStore} from "../stores.js"
	export let profile;

	$: name = `${profile.firstName} ${profile.lastName}`;

    const handleDelete = (profileId) => {
        ProfileStore.update((currentProfile) => {
            return currentProfile.filter(profile => profile.id != profileId)
        })
        console.log(`Attempting to delete profileID: ${profileId}`)
    }
</script>

<div class="outer">
	<div class="content shadow">
		<img src={profile.imgURL} alt="profile" />
		<h3>{name}</h3>
		<div class="menu">
			<svg
				width="30"
				height="30"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g id="background">
					<rect
						x="20"
						width="20"
						height="20"
						rx="5"
						transform="rotate(90 20 0)"
						fill="#F0F4FB"
					/>
				</g>
				<path
					id="Vector"
					d="M9.16665 9.99996C9.16665 10.4602 9.53974 10.8333 9.99998 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99996C10.8333 9.53972 10.4602 9.16663 9.99998 9.16663C9.53974 9.16663 9.16665 9.53972 9.16665 9.99996Z"
					fill="#2C3E50"
					stroke="#2C3E50"
					stroke-width="1.25"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="Vector_2"
					d="M3.33333 9.99996C3.33333 10.4602 3.70643 10.8333 4.16667 10.8333C4.6269 10.8333 5 10.4602 5 9.99996C5 9.53972 4.6269 9.16663 4.16667 9.16663C3.70643 9.16663 3.33333 9.53972 3.33333 9.99996Z"
					fill="#2C3E50"
					stroke="#2C3E50"
					stroke-width="1.25"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					id="Vector_3"
					d="M15 9.99996C15 10.4602 15.3731 10.8333 15.8334 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 9.99996C16.6667 9.53972 16.2936 9.16663 15.8334 9.16663C15.3731 9.16663 15 9.53972 15 9.99996Z"
					fill="#2C3E50"
					stroke="#2C3E50"
					stroke-width="1.25"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<div class="menu-content shadow">
				<button>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M3.33334 16.6666H6.66668L15.4167 7.91663C15.8587 7.47461 16.107 6.87509 16.107 6.24997C16.107 5.62485 15.8587 5.02533 15.4167 4.5833C14.9746 4.14127 14.3751 3.89294 13.75 3.89294C13.1249 3.89294 12.5254 4.14127 12.0833 4.5833L3.33334 13.3333V16.6666Z"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><path
							d="M11.25 5.41663L14.5833 8.74996"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
					>
					Edit
				</button>
				<button on:click={() => handleDelete (profile.id)}
					><svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.33334 5.83337H16.6667"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8.33334 9.16663V14.1666"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11.6667 9.16663V14.1666"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.16666 5.83337L4.99999 15.8334C4.99999 16.2754 5.17558 16.6993 5.48815 17.0119C5.80071 17.3244 6.22463 17.5 6.66666 17.5H13.3333C13.7754 17.5 14.1993 17.3244 14.5118 17.0119C14.8244 16.6993 15 16.2754 15 15.8334L15.8333 5.83337"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333"
							stroke="#2C3E50"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>Delete
                </button>
			</div>
		</div>
	</div>
</div>

<style>
	.outer {
		display: grid;
		place-items: center;
		background-color: #f0f4fb;
		z-index: -1;
		aspect-ratio: 1/1;
		min-width: 250px;
		border-radius: 15px;
	}

	.content {
		background-color: #fff;
		text-align: center;
		aspect-ratio: 1/1;
		min-width: 80%;
		border-radius: 15px;
		position: relative;
	}

	.content > * {
		margin: 0.5rem 0;
	}

	img {
		aspect-ratio: 1/1;
		width: 70px;
		border-radius: 50%;
	}

	.menu {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.menu:hover .menu-content,
	.menu:focus .menu-content {
		display: flex;
	}

	.menu-content {
		display: none;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		background-color: #fff;
		min-width: 120px;
		border-radius: 5px;
		padding: 0.5rem 0;
		position: absolute;
		top: 30px;
		z-index: 1;
	}

	svg {
		cursor: pointer;
	}

	svg #background {
		opacity: 0;
		transition: all 0.2s ease;
	}

	svg:hover #background,
	svg:focus #background {
		opacity: 1;
	}

	button {
		display: flex;
		align-items: center;
        gap: 5px;
		border-radius: 5px;
		max-width: 80%;
		flex-shrink: 0;
		min-width: 80%;
		transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        background-color: #fff;
	}

	button:hover,
	button:focus {
		background-color: #f0f4fb;
	}

	@media (max-width: 700px) {
		
		.outer {
			aspect-ratio: auto;
			min-width: 100%;
		}
		
		.content {
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 0;
			aspect-ratio: auto;
		}
	}
</style>
