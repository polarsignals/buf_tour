<script>
    import {PetStoreServiceClient} from '../../client/pet/v1/pet_pb_service';
    import {GetPetRequest, PutPetRequest} from '../../client/pet/v1/pet_pb';

    let name;
    const client = new PetStoreServiceClient('http://127.0.0.1:3000');

    // submitPet sends the pet name to the backend; and retrieves it from the backend
    function submitPet(e) {
    
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [k, v] = field;
            data[k] = v;
        }

        console.log(data.petname);

        const req = new PutPetRequest();
        req.setName(data.petname);
        client.putPet(req, {}, function(err, response) {
            const id = response.toObject().pet.petId;
            const getReq = new GetPetRequest();
            getReq.setPetId(id);
            client.getPet(getReq, {}, function(err, response) {
                    name = response.toObject().pet.name
            });
        });
    }

</script>

<main>
    {#if name}
        <h1>Hello {name}!</h1>
    {/if}
    <form on:submit|preventDefault={submitPet}>
        <input id="petname" name="petname">
        <button type="submit">
            Submit
        </button>
    </form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
