var $AllGuiTextures = Java.loadClass('com.simibubi.create.foundation.gui.AllGuiTextures')
var $AnimatedKinetics = Java.loadClass('com.simibubi.create.compat.jei.category.animations.AnimatedKinetics')
var $Axis = Java.loadClass('com.mojang.math.Axis')
var $DoubleItemIcon = Java.loadClass('com.simibubi.create.compat.jei.DoubleItemIcon')
var $RecipeIngredientRole = Java.loadClass('mezz.jei.api.recipe.RecipeIngredientRole')
var $AnimatedBlazeBurner = Java.loadClass("com.simibubi.create.compat.jei.category.animations.AnimatedBlazeBurner")
var $HeatCondition = Java.loadClass("com.simibubi.create.content.processing.recipe.HeatCondition")
var $VanillaTypes = Java.loadClass("mezz.jei.api.constants.VanillaTypes")
var $Minecraft = Java.loadClass("net.minecraft.client.Minecraft")

let id = new ResourceLocation("realmofdestiny","blaze_burner")
let heat_level = {
    heated:{name:"heated",color:15237888,lang_key:"rod.heat_level.heated"},
    superheated:{name:"superheated",color:6067176,lang_key:"rod.heat_level.superheated"}
}

JEIAddedEvents.registerRecipeCatalysts(event =>{
    const {data} = event
    const jeiHelpers = data.getJeiHelpers()
    let type = jeiHelpers.getRecipeType(id).get()
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of("create:blaze_burner"), type)
})

JEIAddedEvents.registerRecipes(event => {
    let recipeBuilder = event.custom(id)
    recipeBuilder.add({
        below_block: 'powah:thermo_generator_starter',
        below_tag: "#powah:thermo",
        heat_level: heat_level.heated,
        time: 10 * 20,
        energy: 10000,
        type:"thermo"
    })

    // recipeBuilder.add({
    //     below_block: 'minecraft:oak_log',
    //     heat_level: heat_level.superheated,
    //     time: 60 * 20,
    //     energy: 0,
    //     type:"consum_block"
    // })
})


JEIAddedEvents.registerCategories(event => {
 
    const { data } = event
    const jeiHelpers = data.getJeiHelpers()
    const guiHelper = jeiHelpers.getGuiHelper()
 
    event.custom(id, category => {
        category.title(Text.translate("rod.jei.categories.blaze_burner"))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
 
        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:blaze_burner'),
                () => Item.of('powah:thermo_generator_starter')
            )
        })

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            if(recipe.data.below_tag == null || recipe.data.below_tag == undefined){
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 65, 49)
                    .addIngredient($VanillaTypes.ITEM_STACK,Item.of(recipe.data.below_block))
            }else{
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 65, 49)
                .addIngredients($VanillaTypes.ITEM_STACK,Ingredient.of(recipe.data.below_tag).getStacks().toList())
            }
        })

 
        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 80, 60)
            const heatBar = $AllGuiTextures.JEI_HEAT_BAR
            heatBar.render(graphics,4,48)
            graphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)']($Minecraft.getInstance().font,Text.translate(recipe.data.heat_level.lang_key).getString(),9,53,recipe.data.heat_level.color,false)
            graphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)']($Minecraft.getInstance().font,recipe.data.time + " tick",130,53,1184274,false)
            if(recipe.data.type == "thermo"){
                graphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)']($Minecraft.getInstance().font,Text.translate("rod.jei.blaze_burner.consum",recipe.data.energy).getString(),8,38,16720896,false)
            }else if(recipe.data.type == "consum_block"){
                graphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)']($Minecraft.getInstance().font,Text.translate("rod.jei.blaze_burner.consum_block").getString(),8,38,16720896,false)
            }


            let matrixStack = graphics.pose()
 
            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
 
            $AnimatedKinetics.defaultBlockElement(Block.getBlock(recipe.data.below_block).defaultBlockState())
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.6, 3.6)
                .scale(24.0)
                .render(graphics)
            matrixStack.popPose()


            matrixStack.pushPose()
            const animated_burner = new $AnimatedBlazeBurner()
            let condition = $HeatCondition.HEATED
            if(recipe.data.heat_level.name == "superheated"){
                condition = $HeatCondition.SUPERHEATED
            }
            animated_burner.withHeat(condition.visualizeAsBlazeBurner()).draw(graphics, category.getCategoryBackground().getWidth() / 2 + 90, 5);
            matrixStack.popPose()
        })
    })
})