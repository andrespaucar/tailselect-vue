<template>
  <div id="app" style="display:flex;width:100%;justify-content:center;">
    <div >
        <label>TailSelect</label>
        <div style="width:450px;margin-top:.5rem">
            <VueTailSelect search  multiple  v-model="selectedopt" :options="{locale:'en'}">
                <option v-for="(optionsselect,index) in optionsselects" 
                    :key="index" :value="optionsselect.value">{{optionsselect.name}}
                </option>
            </VueTailSelect>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      selectedopt:[3],
      optionsselects : []
    }
  },
  mounted(){
    this.optionsselects = [
        {value:'1', name: 'Value 1'},
        {value:'2', name: 'Value 2'},
        {value:'3', name: 'Value 3'},
        {value:'4', name: 'Value 4'},
        {value:'5', name: 'Value 5'}
    ]
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
