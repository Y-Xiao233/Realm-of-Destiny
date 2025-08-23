StartupEvents.registry("item",event =>{
    /**
     * 
     * @param {string} prefix 
     * @param {string[]} list 
     */
    function infinities_cell(prefix,list){
        event.create("infinity_cell_" + prefix,"meinfinitycell:infinities_cell").setName(Text.translate("infinities_cell.rod." + prefix)).setKeys(KeyList.of().adds(keys =>{
            var temp = []
            list.forEach(id =>{
                temp.push(AEKeyHelper.item(id))
            })
            keys.addAll(temp)
        })).texture("kubejs:item/infinity_cell")
    }

    /**
     * 
     * @param {string} prefix 
     * @param {$Consumer_<$ArrayList_<$Supplier_<$AEKey_>>>} callback 
     */
    function special_infinities_cell(prefix,callback){
        event.create("infinity_cell_" + prefix,"meinfinitycell:infinities_cell").setName(Text.translate("infinities_cell.rod." + prefix)).setKeys(KeyList.of().adds(keys =>{
            callback(keys)
        })).texture("kubejs:item/infinity_cell")
    }

    infinities_cell("1",s1)
    infinities_cell("2",s2)
    infinities_cell("3",s3)
    infinities_cell("4",s4)
    infinities_cell("5",s5)
    infinities_cell("6",s6)
    infinities_cell("7",s7)
    infinities_cell("d1",d1)
    infinities_cell("d2",d2)
    infinities_cell("d3",d3)
    infinities_cell("c1",c1)
    infinities_cell("c2",c2)
    infinities_cell("c3",c3)
    infinities_cell("c4",c4)
    infinities_cell("c5",c5)
    infinities_cell("m1",m1)
})