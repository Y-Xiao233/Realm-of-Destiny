/**
 * 
 * @param {$CompoundTag} nbt 
 * @param {String} type 
 */
function checkEmpty(nbt,type){
    if(nbt.getInt(type) === null){
        nbt.putInt(type,0)
    }
}

global.input_id = ""

ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/custom_machinery/pigment_injector/'

    const five_dyes = {"minecraft:white_dye":"white","minecraft:black_dye":"black","minecraft:light_blue_dye":"light_blue","minecraft:yellow_dye":"yellow","minecraft:purple_dye":"purple"}

    event.recipes.custommachinery.custom_machine("rod:pigment_injector",10)
    .requireItemTag('#rod:dyes_1',1,"input")
    .requireFunctionEachTick(/**@param {$Context_} ctx*/ctx =>{
        const {machine, block:{level}} = ctx
        const output = machine.getItemStored("output")
        if(output.id === "kubejs:colorful_matter_ball"){
            return ctx.success()
        }else{
            return ctx.error(Text.translate("error.rod.pigment_injector.ball").red())
        }
    })
    .requireFunctionToStart(/**@param {$Context_} ctx*/ctx =>{
        const {machine} = ctx
        const input = machine.getItemStored("input")
        const output = machine.getItemStored("output")
        if(input.hasTag("rod:dyes_1") && output.id === "kubejs:colorful_matter_ball"){
            global.input_id = input.id
            return ctx.success()
        }else{
            return ctx.error(Text.translate("error.rod.pigment_injector.dye_ball").red())
        }
    })
    .requireFunctionOnEnd(/**@param {$Context_} ctx*/ctx =>{
        const {machine, block:{level}} = ctx
        const output = machine.getItemStored("output")
        if(!output.hasNBT() || output.getNbt() === null){
            let tag = new $CompoundTag()
            tag.putInt("mode",0)
            tag.putBoolean("full",false)
            tag.putInt("white",0)
            tag.putInt("black",0)
            tag.putInt("liight_blue",0)
            tag.putInt("yellow",0)
            tag.putInt("purple",0)
            output.setNbt(tag)
        }
        const nbt = output.getNbt()
        checkEmpty(nbt,"white")
        checkEmpty(nbt,"black")
        checkEmpty(nbt,"liight_blue")
        checkEmpty(nbt,"yellow")
        checkEmpty(nbt,"purple")
        const dyes = {
            "minecraft:black_dye":nbt.getInt("black"),
            "minecraft:light_blue_dye":nbt.getInt("light_blue"),
            "minecraft:purple_dye":nbt.getInt("purple"),
            "minecraft:white_dye":nbt.getInt("white"),
            "minecraft:yellow_dye":nbt.getInt("yellow")
        }
        const amount = dyes[global.input_id]
        nbt.putInt(five_dyes[global.input_id],amount + 1)
        output.setNbt(nbt)
        return ctx.success()
    }).id(id_prefix + "ball_1")
})