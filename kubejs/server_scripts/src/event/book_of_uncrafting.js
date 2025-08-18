const $HashMap = Java.loadClass("java.util.HashMap")
const $RecipeUtil = Java.loadClass("com.hrznstudio.titanium.util.RecipeUtil")
const $RecipeType = Java.loadClass("net.minecraft.world.item.crafting.RecipeType")

/**
 * 
 * @param {$NonNullList_<$Ingredient_>} ingredients 
 * @returns {$ItemStack_[]}
 */
function getItemsFromIngredients(ingredients){
    /**
     * @type {$HashMap<string,number>}
     */
    const map = new $HashMap()
    const items = []
    ingredients.forEach(/**@param {$Ingredient_} ingredient*/ingredient =>{
        var id = ingredient.getItemIds()[0]
        if(map.containsKey(id)){
            map.put(id,map.get(id) + 1)
        }else{
            map.put(id,1)
        }
    })

    map.forEach((key,value) =>{
        items.push(Item.of(key).withCount(value))
    })
    return items
}



ItemEvents.rightClicked(event =>{
    const {hand, player, level, server, item} = event
    if(hand.name() !== "MAIN_HAND") return
    if(item.id !== 'kubejs:book_of_uncrafting') return
    if(player.isFake()) return

    const offHandItem = player.offHandItem
    const recipes = $RecipeUtil.getRecipes(level,$RecipeType.CRAFTING)
    var found = false
    recipes.forEach(/**@param {$CraftingRecipe_} recipe*/recipe =>{
        if(recipe.getResultItem(server.registryAccess()).id == offHandItem.id && !found){
            var count = recipe.getResultItem(server.registryAccess()).count
            if(offHandItem.count >= count){
                found = true
                getItemsFromIngredients(recipe.getIngredients()).forEach(item =>{
                    player.give(item)
                })
                if(!player.isCreative()){
                    player.getCooldowns().addCooldown(item.getIdLocation(),2000)
                }
                offHandItem.setCount(offHandItem.count - count)
                item.count --
                player.tell(Text.translate("message.rod.success_uncrafting").green())
            }
        }
    })
    if(!found){
        player.tell(Text.translate("message.rod.cannot_uncrafting").red())
    }
})