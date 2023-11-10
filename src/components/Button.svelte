<script lang="ts">
let disabled = false
    
const disable = () => {
    disabled = !disabled
}

</script>
  
  
<main>
    <div class="flex justify-center p-4">
        <h1 class="text-white text-3xl">
            <slot></slot>
        </h1>

    </div>
   
  
   
      
</main>
  
<style scoped>
  
</style>