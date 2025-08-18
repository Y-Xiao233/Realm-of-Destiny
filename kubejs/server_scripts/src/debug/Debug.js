let default_output_path = "./kubejs/debug_output.json"
const $StringArgumentType = Java.loadClass("com.mojang.brigadier.arguments.StringArgumentType")
const tests = [
    {
        name:"writeAllToCustomEMC0",
        func: (ctx,context) => writeAllToCustomEMC0(ctx,context),
        special:true
    },
    {
        name:"outputModItems",
        func:(ctx,context) => outputModItems(ctx,context,default_output_path),
        special:true
    },
    {
        name:"informationLangKey",
        func:(ctx) => generateInformationLangKey(ctx,getInformationList("./kubejs/const.json"),"./kubejs/generate_lang.json")
    },
    {
        name:"FTBLangKey",
        func:(ctx) => generateFTBLangKey(ctx,default_output_path,5,3,15,5)
    },
    {
        name:"hotBarItems",
        func:(ctx) => generateHotBarItems(ctx,default_output_path)
    },
    {
        name:"developmentTools",
        func:(ctx) => getDevelopmentTools(ctx)
    },
    {
        name:"shapedRecipe",
        func:(ctx) => generateShapedRecipe(ctx,default_output_path)
    },
    {
        name:"precisionShapedRecipe",
        func:(ctx) => generatePrecisionShapedRecipe(ctx,default_output_path)
    },
    {
        name:"precisionShapelessRecipe",
        func:(ctx) => generatePrecisionShapelessRecipe(ctx,default_output_path)
    },
    {
        name:"fluidShapedRecipe",
        func:(ctx) => generateFluidShapedRecipe(ctx,default_output_path)
    },
    {
        name:"inventoryItems",
        func:(ctx) => generateInventoryItems(ctx,default_output_path)
    },
    {
        name:"textureFont",
        func:(ctx) => generateTextureFont(ctx,19,default_output_path)
    },
    {
        name:"energizingRecipe",
        func:(ctx) => generateEnergizingRecipe(ctx,default_output_path)
    },
    {
        name:"codeTest",
        func:(ctx) => CodeTest(ctx)
    }
]

ServerEvents.commandRegistry(event =>{
    const {commands} = event
    const debug = commands.literal("kjs_debug")
    const test = debug.then(commands.argument("func",$StringArgumentType.string())
        .suggests((ctx, builder) =>{
            tests.forEach(suggest =>{
                builder.suggest(suggest.name)
            })
            return builder.buildFuture()
        })
        .executes(ctx =>{
            const func = $StringArgumentType.getString(ctx,"func")
            const index = find(func)
            if(index !== -1){
                if(special(func)){
                    ctx.source.sendFailure(Text.translate("debug.rod.extra_parameter").red())
                    return 0
                }else{
                    tests[index].func(ctx)
                    ctx.source.sendSuccess(Text.translate("debug.rod.success").green(),false)
                    return 1
                }
            }else{
                ctx.source.sendFailure(Text.translate("debug.rod.not_found").red())
                return 0
            }
        })
        .then(commands.argument("context",$StringArgumentType.string())
            .executes(ctx =>{
                const func = $StringArgumentType.getString(ctx,"func")
                const context = $StringArgumentType.getString(ctx,"context")
                const index = find(func)
                if(index !== -1){
                    if(!special(func)){
                        ctx.source.sendFailure(Text.translate("debug.rod.no_extra_parameter").red())
                        return 0
                    }else{
                        tests[index].func(ctx,context)
                        ctx.source.sendSuccess(Text.translate("debug.rod.success").green(),false)
                        return 1
                    }
                }else{
                    ctx.source.sendFailure(Text.translate("debug.rod.not_found").red())
                    return 0
                }
            })
        )
    )
    event.register(test)
})

/**
 * 
 * @param {string} name 
 * @returns {number}
 */
function find(name){
    for(let i = 0; i < tests.length; i ++){
        var obj = tests[i]
        if(obj.name == name){
            return i
        }
    }
    return -1
}

/**
 * 
 * @param {string} name
 * @returns {boolean} 
 */
function special(name){
    const func = tests[find(name)]
    if(func.special !== undefined && func.special !== null && func.special){
        return true
    }else{
        return false
    }
}