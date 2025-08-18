/**
 * @param {string} name 
 * @param {string} path 
 * @returns {string[]}
 */
function readConst(path,name){
    const json = JsonIO.readJson(path).getAsJsonObject()
    const elements = json.getAsJsonArray(name).asList()
    let list = []
    elements.forEach(/**@param {$JsonElement_} element*/ element =>{
        const id = element.getAsString()
        list.push(id)
    })
    return list
}

/**
 * 通过物品id获取对应的langKey并作为文本内容返回
 * @param { String } element
 */
function getLangKey(element){
    return Text.translate('information.rod.' + element.substring(0,element.indexOf(':')) + '.' +  element.substring(element.indexOf(':') + 1))
}


/**
 * 
 * @param {$ItemTooltipEventJS_} tooltip
 * @param {string} item 
 * @param {string} type 
 * @param {function($List$Type<any>,$ItemStack_):void} texture_items_callback 
 */
function addTextureTooltip(tooltip,item,type,texture_items_callback){
    let key0 = "tooltip.rod.package"
    let key1 = "tooltip.rod.package.shift"
    if(type == "tome"){
        key0 = "tooltip.rod.tome"
        key1 = "tooltip.rod.tome.shift"
    }
    tooltip.addAdvanced(item,(item, advanced ,tooltips) =>{
        tooltips.add(Text.translate(key0))
        if(type == "package"){
            tooltips.add(Text.translate("tooltip.rod.package.increase_chance"))
            if(item.hasNBT() && item.getNbt().contains("chance")){
                var factor = item.getNbt().getInt("chance")
                var chance = factor
                chance = chance.toString().substring(0,4)
                tooltips.add(Text.translate("tooltip.rod.package_increase",chance).append("%").lightPurple())
            }
        }
        if(tooltip.shift){
            texture_items_callback(tooltips,item)
            if(tooltip.ctrl && type == "package"){
                tooltips.add(Text.of("================="))
            }
        }else{
            tooltips.add(Text.translate(key1))
        }
        if(tooltip.ctrl){
            if(type == "package"){
                special_item_tip(tooltips)
            }
        }else{
            if(type == "package"){
                tooltips.add(Text.translate("tooltip.rod.ctrl.chance"))
            }
        }
    })
}

/**
 * 
 * @param {$List$Type<any>} tooltips 
 * @param {string} item 
 * @param {string} char_code 
 */
function getTextureContext(tooltips,item,char_code){
    tooltips.add(Text.white("").append({text:char_code,font:'kubejs:texture_font'}).append(Text.of(' | ').append(Text.translate(Item.of(item).getDescriptionId()))))
}

/**
 * 
 * @param {$List$Type<any>} tooltips 
 * @param {$ItemStack_} item 
 * @param {$ItemStack_} raw_item 
 * @param {string} char_code 
 * @param {float} chance
 * @param {float} prefix_chance
 */
function getChanceTextureContext(tooltips,raw_item,item,char_code,chance,prefix_chance){
    var raw = chance
    var color = Color.WHITE
    if(prefix_chance !== undefined && prefix_chance !== null && prefix_chance !== 0){
        if(prefix_chance < 0){
            color = Color.RED
        }else{
            color = Color.GREEN
        }

        if(chance + prefix_chance < 0){
            chance = 0
        }else{
            chance = (chance + prefix_chance) * 100
            chance = chance.toString().substring(0,4)
        }
    }else{
        chance = chance * 100
    }
    if(raw_item.hasNBT() && raw_item.getNbt().contains("chance")){
        var factor = raw_item.getNbt().getInt("chance")
        chance = Number.parseFloat(chance) * (1 + factor / 100)
        if(chance >= raw){
            color = Color.GREEN
        }else{
            color = Color.RED
        }
        chance = chance.toString().substring(0,4)
    }
    const count = item.getCount()
    if(count == 1){
        tooltips.add(Text.white("").append({text:char_code,font:'kubejs:texture_font'}).append(Text.of(' | ').append(Text.translate(item.getDescriptionId())).append(' | ').append(Text.of("Chance: " + chance + "%").color(color))))
    }else{
        tooltips.add(Text.white("").append({text:char_code,font:'kubejs:texture_font'}).append(Text.of(' | ' + count + "x ").append(Text.translate(item.getDescriptionId())).append(' | ').append(Text.of("Chance: " + chance + "%").color(color))))
    }
}

/**
 * 
 * @param {string[]} task_ids
 * @param {float} factor 
 * @returns {float[]}
 */
function getTaskPrefixChances(task_ids,factor){
    if(factor == null || factor <= 0){
        factor = 0.1
    }
    var prefix = []
    for(let n = 0; n < task_ids.length; n ++){
        prefix.push(0)
    }
    var data = FTBQuests.getServerDataFromPlayer(Client.player)
    for(let i = 0; i < task_ids.length; i ++){
        if(data.isCompleted(task_ids[i])){
            for(let m = 0; m < task_ids.length; m ++){
                if(m <= i){
                    prefix[m] -= factor * (Math.abs(i - m) + 1)
                }else{
                    prefix[m] += factor * (Math.abs(i - m) + 1)
                }
            }
        }
    }
    return prefix
}

/**
 * 
 * @param {$List$Type<any>} tooltips 
 */
function special_item_tip(tooltips){
    const values = [
        [Item.of('ifeu:dragon_star'),"\u1023",5,80],
        [Item.of('ars_nouveau:source_gem_block'),"\u1025",1,40],
        [Item.of('minecraft:diamond'),"\u1026",2,60]
    ]
    values.forEach(([item,code,chance,limit]) =>{
        tooltips.add(Text.white("").append({text:code,font:'kubejs:texture_font'}).append(Text.of(' | ').append(Text.translate(item.getDescriptionId())).append(' | ').append(Text.of("+ " + chance + "%,").append(Text.translate("tooltip.rod.limit")).append(" " + limit + "%"))))
    })
}