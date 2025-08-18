/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 * @param {number} chapter_count 
 * @param {number} subsection_count 
 * @param {number} task_count 
 * @param {number} description_count 
 */
function generateFTBLangKey(ctx,path,chapter_count,subsection_count,task_count,description_count){
    const json = createJsonObject()

    for(let i = 1; i <= chapter_count; i ++){
        addToJsonObject(json,"rod.c" + i + ".title","")
        for(let m = 1; m <= subsection_count; m ++){
            addToJsonObject(json,"rod.c" + i + ".s" + m + ".title","")
            for(let n = 1; n <= task_count; n ++){
                addToJsonObject(json,"rod.c" + i + ".s" + m + "." + n + ".title","")
                addToJsonObject(json,"rod.c" + i + ".s" + m + "." + n + ".subtitle","")
                for(let h = 0; h < description_count; h ++){
                    addToJsonObject(json,"rod.c" + i + ".s" + m + "." + n + ".description" + h,"")
                }
            }
        }
    }

    JsonIO.write(path,json)
}