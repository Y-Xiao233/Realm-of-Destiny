import {$OutputItem} from "packages/dev/latvian/mods/kubejs/item/$OutputItem";

function translate(key){
    return Text.translate(key)
}

/**
 * 
 * @param {$Block_} block 
 * @param {Item} item 
 */
function summon_item(block, item){
    let itemEntity = block.createEntity("item")
    itemEntity.item = item
    itemEntity.x+=0.5
    itemEntity.z+=0.5
    itemEntity.y+=0.5
    itemEntity.spawn()
}


/**
 * 
 * @param {String} item 
 * @param {float} chance 
 * @param {$List_<String>} rolls 
 * @returns 
 */
function crops_outputs(item,chance,rolls){
    let output = Item.of(item).withChance(chance).withRolls(rolls[0],rolls[1])
    return output
}

//Lychee Util
/**
 * @param {string} type -lychee合成类型,开头必须为lychee:,且该字符串必须在引号内,"block_interacting";"block_clicking";"item_inside";"item_burning";"item_exploding";"block_exploding","lightning_channeling"
 * @param {string} post -另一个函数,默认支持最多4个不同的输出
 * @param {string} item_in -输入的物品/手持的物品,若所选类型没有此项，请填入false
 * @param {string} block_in -所需要的方块,若所选类型没有此项，请填入false
 * @param {boolean} ghost -是否是假的合成,默认为false,若要调用请先将前面剩余没用到的post全填为false
 * @param {boolean} hide_in_player -是否隐藏于玩家,默认为false,若要调用请先将前面剩余没用到的post全填为false
*/

function lychee(type,item_in,block_in,post1,post2,post3,post4,ghost,hide_in_player){
    post2 = typeof post2 !="undefined"?post2:false
    post3 = typeof post3 !="undefined"?post3:false
    post4 = typeof post4 !="undefined"?post4:false
    ghost = typeof ghost !="undefined"?ghost:false
    hide_in_player = typeof hide_in_player !="undefined"?hide_in_player:false
    let post_key = "post"
    let posts = {}
    let block_in_key = {}
    let item_in_key = {}
    if(type == "lychee:block_interacting"||"lychee:block_clicking"||"lychee:item_inside"){
        block_in_key = "block_in",
        item_in_key = "item_in"
    }
    else if(type == "lychee:item_burning"||"lychee:item_exploding"){
        item_in_key = "item_in"
    }
    else if(type == "lychee:block_exploding"){
        block_in_key = "block_in"
    }

    if((post1 != false)&&(post2 == false)){
        posts = [post1]
    }
    else if((post2 != false)&&(post3 == false)){
        posts = [post1,post2]
    }
    else if((post3 != false)&&(post4 == false)){
        posts = [post1,post2,post3]
    }
    else if(post4 != false){
        posts = [post1,post2,post3,post4]
    }

    let lychee_function = {
        "type":type,
        "ghost":ghost,
        "hide_in_viewer":hide_in_player
    }

    Object.defineProperty(lychee_function,post_key,{value:posts,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(lychee_function,block_in_key,{value:block_in,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(lychee_function,item_in_key,{value:{"item":item_in},writable:true,enumerable:true,configurable:true})
    return lychee_function
}

/**
* @param {string} posts_type - 输出类型，可以是"drop_item"或"place"
* @param {string} output_item - 输出物品
* @param {number} output_count - 输出物品数量,当后面添加条件时不能为空,默认为1
* @param {string} contextual_type - 条件类型，可以是 "chance"、"execute" 或 false,默认为false
* @param {string|boolean} contextual - 具体条件，根据 contextual_type 的不同含义不同,默认为false
*/

function posts(posts_type,output_item,output_count,contextual_type,contextual){
    contextual_type = typeof contextual_type != "undefined"?contextual_type:false
    contextual = typeof contextual != "undefined"?contextual:false
    output_count = typeof output_count != "undefined"?output_count:1
    let contextual_types = {}
    let contextual_form_key = {}
    let post_form_key = {}

    if(contextual_type == "chance"){
        contextual_form_key = "contextual"
        contextual_types = [{"type":"chance","chance":contextual}]
    }
    else if(contextual_type == "execute"){
        contextual_form_key = "contextual"
        contextual_types = [{"type":"execute","command":contextual}]
    }
    else if(contextual_type == false){
    }

    if(posts_type =="drop_item"){
        post_form_key = "item"
    }else{
        post_form_key = "block"
    }

    let post = {
        "type":posts_type,
        "count":output_count
    }
    
    Object.defineProperty(post,contextual_form_key,{value:contextual_types,writable:true,enumerable:true,configurable:true})
    Object.defineProperty(post,post_form_key,{value:output_item,writable:true ,enumerable:true,configurable:true})

    return post
}


//caged mobs Util

/**
 * 
 * @param {string} entity 
 * @param {$EnvironmentData_} environments 
 * @param {integer} time 
 */
function CagedMobsEntityData(entity,environments,time) {
    this.type = "cagedmobs:entity_data"
    this.entity = entity
    this.environments = [environments]
    this.growTicks = time != undefined ? time : 2400
    this.results = []
}

CagedMobsEntityData.prototype = {
    /**
     * 
     * @param {Function} output 
     * @returns 
     */
    addOutput : function(output){
        this.results.push(output)
        return this
    },
    /**
     * 
     * @param {integer} tier 
     * @returns 
     */
    samplerTier : function (tier){
        this.samplerTier = tier
        return this
    },
    /**
     * 
     * @param {integer} time 
     * @returns 
     */
    time : function (time){
        this.growTicks = time
        return this
    }
}

/**
 * 
 * @param {float} chance 
 * @param {Item} item 
 * @param {integer} minAmount 
 * @param {integer} maxAmount 
 * @returns 
 */
function cagedmobs_output(chance, item, minAmount, maxAmount){
    return {
        "chance": chance,
        "output": {
            "item":item
        },
        "minAmount": minAmount,
        "maxAmount": maxAmount
    }
}


/**
 * 
 * @param {string} categories 
 */
function CagedMobsEnvironmentsData(categories) {
    this.type = "cagedmobs:environment_data"
    this.categories = [categories]
}

CagedMobsEnvironmentsData.prototype = {
    /**
     * 
     * @param {Item} input 
     * @returns 
     */
    setInput : function(input){
        this.input = {"item": input}
        this.render = input
        return this
    },
    /**
     * 
     * @param {float} growModifier 
     * @returns 
     */
    growModifier : function(growModifier){
        this.growModifier = growModifier
        return this
    },
    /**
     * 
     * @param {Item} render 
     * @returns 
     */
    setRender : function(render){
        this.render = render
        return this
    }
}

//Json Util

/**
 * 
 * @param {String} key 
 * @param {*} value 
 * @returns {$JsonObject_}
 */
function asJsonObject(key,value){
    /**
     * @type {$JsonObject_}
     */
    const obj = new $JsonObject()
    obj.add(key,value)
    return obj
}

/**
 * 
 * @param {$JsonObject_} obj 
 * @param {String} key 
 * @param {*} value 
 * @returns {void}
 */
function addToJsonObject(obj,key,value){
    obj.add(key,value)
}

/**
 * 
 * @param {$JsonObject_} obj 
 * @param {String[]} keys
 * @param {*[]} values  
 * @returns {void}
 */
function addsToJsonObject(obj,keys,values){
    for(let i = 0; i < keys.length; i ++){
        if(i < values.length){
            addToJsonObject(obj,keys[i],values[i])
        }
    }
}


/**
 * 
 * @returns {$JsonObject_}
 */
function createJsonObject(){
    return new $JsonObject()
}

/**
 * 
 * @param {String} key 
 * @param {*} value 
 * @returns {$JsonObject_}
 */
function createDefaultJsonObject(key,value){
    var json = createJsonObject()
    addToJsonObject(json,key,value)
    return json
}

/**
 * 
 * @returns {$JsonArray_}
 */
function createJsonArray(){
    return new $JsonArray()
}


/**
 * 
 * @param {$JsonArray_} array 
 * @param {*} value 
 */
function addToJsonArray(array,value){
    array["add(com.google.gson.JsonElement)"](value)
}

/**
 *
 * @param {$JsonArray_} array
 * @param {*[]} values
 */
function addsToJsonArray(array,values){
    values.forEach(value => {
        addToJsonArray(array,value)
    })
}


//ProjectE Util, Used as Shop

/**
 * 
 * @param {$Player} player
 * @returns {$IKnowledgeProvider_}
 */
function getProvider(player){
    return player.getCapability($PECapabilities.KNOWLEDGE_CAPABILITY).resolve().orElse(null)
}
/**
 * 
 * @param {$Player} player
 * @param {String} item 
 */
function learnItem(player,item){
    let provider = getProvider(player)
    if(provider !== null){
        if(!provider.hasKnowledge(item)){
            provider.addKnowledge(item)
            provider.syncKnowledgeChange(player,$NBTManager.getPersistentInfo($ItemInfo.fromStack(item)),true)
        }
    }
}


/**
 * 
 * @param {$Player} player
 * @param {string[]} list 
 */
function learnAllItems(player,list){
    let provider = getProvider(player)
    if(provider !== null){
        list.forEach(item =>{
            if(!provider.hasKnowledge(item)){
                provider.addKnowledge(item)
                provider.syncKnowledgeChange(player,$NBTManager.getPersistentInfo($ItemInfo.fromStack(item)),true)
            }
        })
    }
}

/**
 * 
 * @param {$Player} player
 */
function clearAllKnowledges(player){
    let provider = getProvider(player)
    provider.clearKnowledge()
}


//Utils
/**
 * 
 * @param {number[]} entries 
 * @param {number[]} weights 
 * @returns 
 */

function getWeightedRandom(entries, weights) {
    let cumulativeWeights = []
    weights.reduce((acc, weight, i) => {
        acc += weight
        cumulativeWeights[i] = acc
        return acc
    }, 0)
    const random = Math.random() * cumulativeWeights[cumulativeWeights.length - 1]
    for (let i = 0; i < cumulativeWeights.length; i++) {
        if (random < cumulativeWeights[i]) {
            return entries[i]
        }
    }
    return entries[entries.length - 1]
}


//cognition

/**
 * 
 * @param {$ItemStack_[]} inputs 
 * @param {$ItemStack_} output 
 * @param {number} cost
 * @param {number} time  
 * @returns {$JsonObject_}
 */
function metamorp(inputs,output,cost,time){
    const json = createDefaultJsonObject("type","experienceobelisk:molecular_metamorphosis")
    for(let i = 1; i <= 3; i ++){
        var input = inputs[i - 1]
        let ingredient = createDefaultJsonObject("item",input.id)
        if(input.hasNBT()){
            addToJsonObject(ingredient,"nbt",input.getNbt())
        }
        addToJsonObject(json,"ingredient" + i,ingredient)
        addToJsonObject(json,"count" + i,input.getCount())
    }
    const result = createDefaultJsonObject("item",output.id)
    if(output.hasNBT()){
        addToJsonObject(result,"nbt",""+output.getNbt())
    }
    addToJsonObject(result,"count",output.getCount())
    addToJsonObject(json,"result",result)
    addToJsonObject(json,"cost",cost)
    addToJsonObject(json,"processTime",time)

    return json
}