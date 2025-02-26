## TailSelect Vue Component
Si agrega como valor prop 'multiple' esta ya esta predefinido los 'options' de 'multiple' por lo que no es necesario
agregar en el valor prop de 'option'. Ahora si queremos un 'multiple' personalizado, quitamos el valor prop 'multiple' 
y ponemos en 'options' lo siguiente:
```  :options="{descriptions:true,multiShowCount:true,multiContainer:true}" ``` asi como estos valos 
hay mucho más revisar del paquete oficial Tail.Select [link](https://www.npmjs.com/package/tail.select#default-options)
> Requerda si defines como 'multiple' a la propiedad del componente TailSelect se tiene que definir en el 'v-model' un valor Array.

```js
<TailSelect  multiple  v-model="selectedopt" :options="{locale:'en'}" >
    <option value="1">Value 1</option>
    <option value="2">Value 2</option>
    <option value="3">Value 3</option>
    <option value="4">Value 4</option>
</TailSelect>
```
Config [plugin](src/VueTailSelect.js) and [component](src/components/TailSelect.vue)

Main
```js
import VueTailSelect from "./VueTailSelect"
Vue.use(VueTailSelect)
```
Template
```html
<VueTailSelect v-model="selectedopt">
    <option v-for="(optionsselect,index) in optionsselects" 
        :key="index" :value="optionsselect.value">{{optionsselect.name}}
    </option>
</VueTailSelect>
```
Script
```js
data(){
    return{
        selectedopt : 1,
        optionsselects : [
            {value:'1', name: 'Value 1'},
            {value:'2', name: 'Value 2'},
            {value:'3', name: 'Value 3'},
            {value:'4', name: 'Value 4'},
            {value:'5', name: 'Value 5'}
        ]
    }
}
```