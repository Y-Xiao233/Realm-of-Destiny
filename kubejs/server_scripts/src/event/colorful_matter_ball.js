const $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")

function getUsedHand(player){
    const ball = "kubejs:colorful_matter_ball"
    let main_hand = false,off_hand = false
    if(player.getMainHandItem().id == ball){
        main_hand = true
    }else if(player.getOffHandItem().id == ball){
        off_hand = true
    }

    return main_hand ? "main_hand" : off_hand ? "off_hand" : "empty"
}

ItemEvents.rightClicked("kubejs:colorful_matter_ball",event =>{
    const {player} = event
    if(player.isShiftKeyDown()){
        const used_hand = getUsedHand(player)
        if(used_hand == "empty") return
        var item = player.getItemInHand(used_hand)
        var mode = 0
        if(item.hasNBT()){
            mode = item.getNbt().getInt("mode")
        }
        let tag = item.getNbt()
        if(tag == null || tag.isEmpty()){
            tag = new $CompoundTag()
        }
        tag.putInt("mode",mode == 0 ? 1 : 0);
        item.setNbt(tag)
        player.tell(Text.translatable("tip.rod.mode_change",mode == 1 ? Text.translatable("tooltip.rod.mode.use") : Text.translatable("tooltip.rod.mode.absorb")))
    }
})

PlayerEvents.tick(event =>{
    const {player} = event
    const ball = "kubejs:colorful_matter_ball"
    function dye(item,type){
        if(player.inventory.contains(`minecraft:${type}_dye`)){
            if(item.getNbt().getInt(type) >= 512){
                return false
            }
            const dye = player.inventory.getStackInSlot(player.inventory.findSlotMatchingItem(`minecraft:${type}_dye`))
            dye.count --
            const tag = item.getNbt()
            tag.putInt(type,item.getNbt().getInt(type) + 1)
            item.setNbt(tag)
            return true
        }else{
            return false
        }
    }

    /**
     * 
     * @param {$CompoundTag} tag 
     */
    function full(tag,count){
        const white = tag.getInt("white")
        const black = tag.getInt("black")
        const yellow = tag.getInt("yellow")
        const light_blue = tag.getInt("light_blue")
        const purple = tag.getInt("purple")
        if(white >= count && black >= count && yellow >= count && light_blue >= count && purple >= count){
            tag.putBoolean("full",true)
        }else{
            tag.putBoolean("full",false)
        }
        return tag
    }

    player.inventory.allItems.forEach(item =>{
        if(item.id == ball){
            if(item.hasNBT()){
                item.setNbt(full(item.getNbt(),256))
                let mode = item.getNbt().getInt("mode")
                if(mode == 1){
                    const b0 = dye(item,"white")
                    if(b0) return
                    const b1 = dye(item,"black")
                    if(b1) return
                    const b2 = dye(item,"yellow")
                    if(b2) return
                    const b3 = dye(item,"light_blue")
                    if(b3) return
                    const b4 = dye(item,"purple")
                    if(b4) return
                }
            }
        }
    })
})


BlockEvents.rightClicked(event =>{
    const {player, block, hand} = event
    const used_hand = getUsedHand(player)
    var upper_case_hand = used_hand.toUpperCase()
    if(hand.name() != upper_case_hand) return
    if(used_hand == "empty"){
        return
    }
    var item = player.getItemInHand(used_hand)

    const list = [
        ["ae2:fluix_block","ae2:fluix_block",0,0,0,4,0,1],
        ['ae2:quartz_block','ae2:quartz_block',0,0,0,0,4,1],
        ['kubejs:rainbow','kubejs:rainbow',1,1,1,1,1,0.714],
        ['minecraft:gold_block',"minecraft:iron_block",0,4,0,0,0,1],
        ["ae2:smooth_sky_stone_block",'ae2:smooth_sky_stone_block',4,0,0,0,0,1]
    ]

    /**
     * 
     * @param {$CompoundTag} nbt 
     * @param {String} type 
     */
    function consume(nbt,type,value){
        if(nbt != null || !nbt.isEmpty()){
            nbt.putInt(type,value)
            return nbt
        }else{
            var tag = new $CompoundTag()
            tag.putInt(type,value)
            return tag
        }
    }

    list.forEach(([input,output,black,white,yellow,purple,light_blue,chance]) =>{
        if(block.id == input){
            if(item.hasNBT()){
                var tag = item.getNbt()
                if(tag == null || tag.isEmpty()){
                    return
                }

                const item_black = item.getNbt().getInt("black")
                const item_white = item.getNbt().getInt("white")
                const item_yellow = item.getNbt().getInt("yellow")
                const item_purple = item.getNbt().getInt("purple")
                const item_light_blue = item.getNbt().getInt("light_blue")

                if(item_black < black) return
                if(item_white < white) return
                if(item_yellow < yellow) return
                if(item_purple < purple) return
                if(item_light_blue < light_blue) return

                item.setNbt(consume(tag,"black",item_black - black))
                item.setNbt(consume(tag,"white",item_white - white))
                item.setNbt(consume(tag,"yellow",item_yellow - yellow))
                item.setNbt(consume(tag,"purple",item_purple - purple))
                item.setNbt(consume(tag,"light_blue",item_light_blue - light_blue))

                if(block.id == input){
                    if(Math.random() < chance){
                        let itemEntity = block.createEntity("item")
                        itemEntity.item = output
                        itemEntity.x+=0.5
                        itemEntity.z+=0.5
                        itemEntity.y+=0.5
                        itemEntity.spawn()
                    }
                    block.set("minecraft:air")
                }
            }
        }
    })
})