<script lang="ts">
import { onMount } from 'svelte';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { z } from 'zod';
import Header from './components/Header.svelte'
  import Button from './components/Button.svelte';

let searchValue = ""
let isVaccinated = true

const PetSchema = z.object({
  name: z.string(),
  animal: z.string(),
  isVaccinated: z.boolean(),
});

const ClientSchema = z.object({
  name: z.string(),
  pets: PetSchema.array(),
});

const dataSchema = ClientSchema.array();

type Pet = z.infer<typeof PetSchema>;
type Client = z.infer<typeof ClientSchema>;
type Data = z.infer<typeof dataSchema>;

onMount(async () => {
  const response = await client.get("api/vet/clients", { params: {search: name}});
    console.log(response.data)
    return response;
})

const getClient = async (name?: string): Promise<AxiosResponse | null> => {
  try {
    const response = await client.get("api/vet/clients", { params: {search: name}});
    console.log(response.data)
    return response;
  } catch (error) {
    return (error as AxiosError).response || null;
  }
};



const search = () => {}

const toggle = () => {
  isVaccinated = !isVaccinated
}

 
</script>

<main>
  <Header>Veterinarian admin - clients</Header>
  <input type="text" bind:value={searchValue}>
  <Button on:click={search}>Search</Button>
  
  {#each pets as pet}
   <p>{pet.name}</p> 
   <p>{pet.animal}</p> 
   <p>{pet.isVaccinated}</p> 
   <Button on:click={toggle}>Toggle</Button>
    
  {/each}

</main>



<style>
 
</style>
