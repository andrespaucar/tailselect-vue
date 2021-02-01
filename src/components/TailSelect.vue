<template>
    <select class="w-full tail-select" ref="tailRefSelect" :multiple="multiple"
        @change="updateValue" v-model="selected">
        <slot></slot>
    </select>
</template>

<script>
import TailSelect from "tail.select";

export default {
    props:{
        options:{
            type:Object, 
            default(){return {};},
            required:false
        },
        search:{required:false,default:false,type:Boolean},
        placeholder:{required:false,default:false},
        multiple:{required:false},
        value:{
            type: [String, Number, Array],
            default: null,
        }
    },
    model:{event:'change'},
    data(){
        return {
            selected: this.value,
            // tailSelect : null
        }
    },
    mounted(){
        let el = this.$refs.tailRefSelect;
        if(this.options.locale == undefined){
            this.options.locale = 'es'
        }
        if(this.options.height == undefined){
            this.options.height = 270
        }
        if(this.search !== undefined){
            this.options.search = this.search;
        }
        this.options.classNames = el.classList.value; // w-full
        if(this.placeholder){
            this.options.placeholder = this.placeholder
        }
        if(this.multiple !== undefined){
            this.options.descriptions = true;
            this.options.hideSelected = true;
            this.options.hideDisabled = true;
            this.options.multiLimit = 15;
            this.options.multiShowCount = false;
            this.options.multiContainer = true;
        }
        // this.$tailSelect(el, this.options).reload(true);
        TailSelect(el, this.options);
    },
    updated(){
        // this.$tailSelect(this.$refs.tailselectsimple,this.options).reload(true)
        this.selected = this.value
        TailSelect(this.$refs.tailRefSelect, this.options).reload()
        
    },
    methods:{
        updateValue() {
            // Emitting a `change` event with the new
            // value of the `<select>` field, updates
            // all values bound with `v-model`.
            this.$emit('change', this.selected);
        },
    },
}
</script>

<style lang="scss">
@import "~tail.select/css/default/tail.select-light";
.w-full{
    width: 100%;
}
.tail-select{
    vertical-align: top;
    margin: 0px;

    input[type="text"] {
        padding: 8px 10px;
        user-select: text;
        font-size: 0.875rem;
        line-height: 1.25rem;
        border-width: 1px;
        border-color: rgba(226, 232, 240,1);
    
        &:focus {
            color: rgba(45, 55, 72, 1);
            border-width: 1px;
            border-color: rgba(226, 232, 240, 1);
            border-radius: 0.25rem;
        }
    }
    mark {
        background-color: rgba(211, 41, 41, 1);
        border-radius: 0.25rem;
    }
    &:hover .select-label,
    &.idle .select-label,
    &.active .select-label {
        box-shadow: none;
    }
    .select-label {
        padding: 7.5px 32px 7.5px 12px;
        box-shadow: none;   
        border-width: 1px;
        border-color: rgba(226, 232, 240, 1);
        border-radius: 0.375rem;
        color: rgba(45, 55, 72, 1);

        
        &:after {
            border-top-color: #444;
            border-right: 4px solid transparent;
            border-left: 4px solid transparent;
        }
        &.tail-select-container {
            padding: 5.5px 25px 5.5px 8px;
            .select-handle {
                margin-top: 1.5px;
                margin-bottom: 1.5px;
                margin-right: 5px;
                padding: 0.2em 0.6em 0.3em 1.6em;
                background-color: rgba(226, 232, 240, 1);
                margin-left: 0px;
                font-weight: 400;
                font-size: 0.875rem;
                line-height: 1.25rem;
                
                &:before {
                    content: "×";
                    margin-left: 8px;
                    height: 100%;
                    height: 100%;
                    display: flex;   
                    position:absolute; 
                    align-items: center;
                    align-items: center;    
                    top: 0px;
                    left: 0px;
                    color: rgba(74, 85, 104, 1); 
                }
                &:hover {
                &:before {
                    color: rgba(45, 55, 72, 1);
                }
            }
        }
        .label-inner {
            padding: 1.3px 4px;
        }
        }
    }
    .select-dropdown {
        box-shadow: none;
        border-width: 1px;
        border-color: rgba(226, 232, 240, 1);
        border-radius: 0.25rem; 
        .dropdown-inner {
            padding: 0px;
        }
        .dropdown-empty {
            text-transform: capitalize;
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: rgba(113, 128, 150,1);
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }
        .dropdown-search {
            box-shadow: none;
            border-color: rgba(226, 232, 240,1);
            padding: 0.25rem; 
        }
        ul li {
            padding: 9px 13px;
             font-size: 0.875rem;
            line-height: 1.25rem;
            &:first-of-type {
                margin-top: 0px;

                &.selected {
                    border-top-left-radius: 0.25rem;
                    border-top-right-radius: 0.25rem;
                    border-top-width: 1px;
                    border-color: rgba(226, 232, 240, 1);
                }
            }
            &:last-of-type {
                margin-bottom: 0px;
                &.selected {
                    border-bottom-right-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-width: 1px;
                    border-color: rgba(226, 232, 240,1);
                }
            }
            &.dropdown-option {
                &:before {
                    display: none;
                }
                &.selected {
                    background-color: rgba(28, 63, 170, 1);
                    color: rgba(255, 255, 255, 1);
                &:before {
                    opacity: 0.8;
                }
                }
            }
            &.optgroup-title {
                color: rgba(45, 55, 72, 1);
            }
        }
    }
}

.dark{
    input[type="text"] {
        background-color: rgba(49, 58, 85, 1);
        border-color: rgba(30, 37, 51, 1);
        border-color: rgba(30, 37, 51, 1);
        color:white !important;
    }
    .select-labe{
        background-color: rgba(35, 42, 59, 1);
        border-color: rgba(30, 37, 51, 1);
        color: rgba(255, 255, 255, 1) !important;
        &:after {
             border-color: rgba(113, 128, 150, 1);
            border-right-color: transparent;
            border-left-color: transparent;
        }
        &.tail-select-container .select-handle {
            background-color: rgba(41, 49, 69, 1);
            color: rgba(255, 255, 255, 1) !important; 
            &:before {
                color: rgba(160, 174, 192, 1);
            }
            &:hover {
                &:before {
                    color: rgba(203, 213, 224, 1);
                }
            }
        }
    }
    .select-dropdown{
        background-color: rgba(35, 42, 59,1);
        border-color: rgba(30, 37, 51, 1);
        color: rgba(255, 255, 255,1) !important;
        ul li {
            color: rgba(255, 255, 255, 1) !important;

        &.optgroup-title {
            color: rgba(160, 174, 192,1);

        }
        &:hover:not(.selected):not(.optgroup-title) {
            background-color: rgba(30, 37, 51, 1);
            color: rgba(255, 255, 255, 1) !important;
        }
        &:first-of-type.selected {
            border-color: rgba(30, 37, 51, 1);
        }
        &:last-of-type.selected {
          border-color: rgba(30, 37, 51, 1);    
        }
      }
      .dropdown-search {
        border-color: rgba(30, 37, 51, 1);  
      }

    }
}
</style>