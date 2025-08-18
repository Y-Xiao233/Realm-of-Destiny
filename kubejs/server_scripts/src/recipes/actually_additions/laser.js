var $JsonObject = Java.loadClass("com.google.gson.JsonObject")
var $JsonArray = Java.loadClass('com.google.gson.JsonArray')
ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/actuallyadditions/laser/'
    const recipes = [
        {
            input:'industrialforegoing:dissolution_chamber',
            output:'ifeu:infuser',
            energy:10000,
            id:"infuser"
        },
        {
            input:'mysticalagriculture:diamond_essence',
            output:'actuallyadditions:diamatine_crystal',
            energy:937,
            id:"diamatine_crystal_block"
        },
    ]



    recipes.forEach(recipe =>{
        /**
         * @type {String}
         */
        const input = recipe.input
        const key = "item"
        if(input.startsWith("#")){
            input = input.replace("#","")
            key = "tag"
        }
        const obj = createJsonObject()
        addToJsonObject(obj,"type","actuallyadditions:laser")
        addToJsonObject(obj,"energy",recipe.energy)
        addToJsonObject(obj,"ingredient",asJsonObject(key,input))
        addToJsonObject(obj,"result",asJsonObject("item",recipe.output))
        event.custom(obj).id(id_prefix + recipe.id)
    })
})