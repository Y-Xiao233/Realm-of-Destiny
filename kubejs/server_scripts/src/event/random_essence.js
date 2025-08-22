ItemEvents.rightClicked('kubejs:random_essence',event =>{
    const {player, hand, item} = event
    if(hand.name() !== "MAIN_HAND") return
    var random = [
		"mysticalagriculture:air_essence",
		"mysticalagriculture:earth_essence",
		"mysticalagriculture:water_essence",
		"mysticalagriculture:fire_essence",
		"mysticalagriculture:stone_essence",
		"mysticalagriculture:dirt_essence",
		"mysticalagriculture:wood_essence",
		"mysticalagriculture:cow_essence",
		"mysticalagriculture:chicken_essence",
		"mysticalagriculture:pig_essence",
		"mysticalagriculture:amethyst_essence",
		"mysticalagriculture:honey_essence",
		"mysticalagriculture:coral_essence",
		"mysticalagriculture:coal_essence",
		"mysticalagriculture:nether_essence",
		"mysticalagriculture:dye_essence",
		"mysticalagriculture:nature_essence",
		"mysticalagriculture:deepslate_essence",
		"mysticalagriculture:ice_essence",
		"mysticalagriculture:sheep_essence",
		"mysticalagriculture:squid_essence",
		"mysticalagriculture:fish_essence",
		"mysticalagriculture:slime_essence",
		"mysticalagriculture:turtle_essence",
		"mysticalagriculture:rubber_essence",
		"mysticalagriculture:silicon_essence",
		"mysticalagriculture:sulfur_essence",
		"mysticalagriculture:aluminum_essence",
		"mysticalagriculture:saltpeter_essence",
		"essence",
		"mysticalagriculture:apatite_essence",
		"mysticalagriculture:limestone_essence",
		"mysticalagriculture:iron_essence",
		"mysticalagriculture:copper_essence",
		"mysticalagriculture:nether_quartz_essence",
		"mysticalagriculture:glowstone_essence",
		"mysticalagriculture:redstone_essence",
        "mysticalagriculture:obsidian_essence",
		"mysticalagriculture:prismarine_essence",
		"mysticalagriculture:zombie_essence",
		"mysticalagriculture:skeleton_essence",
		"mysticalagriculture:creeper_essence",
		"mysticalagriculture:spider_essence",
		"mysticalagriculture:rabbit_essence",
		"mysticalagriculture:tin_essence",
		"mysticalagriculture:bronze_essence",
		"mysticalagriculture:zinc_essence",
		"mysticalagriculture:brass_essence",
		"mysticalagriculture:silver_essence",
		"mysticalagriculture:lead_essence",
		"mysticalagriculture:blizz_essence",
		"mysticalagriculture:blitz_essence",
		"mysticalagriculture:basalz_essence",
		"mysticalagriculture:sky_stone_essence",
		"mysticalagriculture:certus_quartz_essence",
		"mysticalagriculture:gold_essence",
		"mysticalagriculture:lapis_lazuli_essence",
		"mysticalagriculture:end_essence",
		"mysticalagriculture:experience_essence",
		"mysticalagriculture:blaze_essence",
		"mysticalagriculture:ghast_essence",
		"mysticalagriculture:enderman_essence",
		"mysticalagriculture:steel_essence",
		"mysticalagriculture:nickel_essence",
		"mysticalagriculture:constantan_essence",
		"mysticalagriculture:electrum_essence",
		"mysticalagriculture:invar_essence",
		"mysticalagriculture:uranium_essence",
		"mysticalagriculture:ruby_essence",
		"mysticalagriculture:sapphire_essence",
		"mysticalagriculture:peridot_essence",
        "mysticalagriculture:blazing_crystal_essence",
		"mysticalagriculture:diamond_essence",
		"mysticalagriculture:emerald_essence",
		"mysticalagriculture:netherite_essence",
		"mysticalagriculture:wither_skeleton_essence",
		"mysticalagriculture:platinum_essence",
		"mysticalagriculture:iridium_essence",
		"mysticalagriculture:enderium_essence",
		"mysticalagriculture:niotic_crystal_essence",
		"mysticalagriculture:spirited_crystal_essence",
		"mysticalagriculture:uraninite_essence",
		"mysticalagriculture:nether_star_essence",
		"mysticalagriculture:dragon_egg_essence",
		"mysticalagriculture:nitro_crystal_essence",
		"mysticalagriculture:energized_steel_essence",
		"mysticalagriculture:fluix_essence",
		"mysticalagriculture:fluorite_essence",
		"mysticalagriculture:refined_glowstone_essence",
		"mysticalagriculture:refined_obsidian_essence",
		"mysticalagriculture:signalum_essence",
		"mysticalagriculture:lumium_essence",
		"mysticalagriculture:osmium_essence",
		"mysticalagriculture:soulium_essence"
    ]
    var i = Math.floor(Math.random() * random.length)
	var e = Item.of(random[0])
	var c = 1
	if(random[i] == "essence"){
		var r = Math.random()
		var temp = null
		if(r <= 0.1){
			temp = 'mysticalagriculture:awakened_supremium_essence'
		}else if(r <= 0.15){
			temp = 'mysticalagriculture:supremium_essence'
		}else if(r <= 0.5){
			temp = 'mysticalagriculture:imperium_essence'
		}else if(r <= 0.55){
			temp = 'mysticalagriculture:inferium_essence'
		}else if(r <= 0.6){
			temp = 'mysticalagriculture:tertium_essence'
		}else{
			temp = 'mysticalagriculture:prudentium_essence'
		}
		e = Item.of(temp)
		c = Math.floor(Math.random() * e.getMaxStackSize() / 4)
	}else{
		e = Item.of(random[i])
		c = Math.floor(Math.random() * e.getMaxStackSize())
		c = 48
	}
    if(player.isFake()){
        let itemEntity = player.block.createEntity("item")
        itemEntity.item = e.copyWithCount(c)
        itemEntity.x+=0.5
        itemEntity.z+=0.5
        itemEntity.y+=0.5
        itemEntity.spawn()
    }else{
        player.give(e.copyWithCount(c))
    }
    item.count --
})