
export const deleteData = async (id)=>{
    try {
        let prevData = localStorage.getItem("rama_note")
        prevData = JSON.parse(prevData)
    
        let deleteData = await prevData.filter((e)=>{
            return e.id !== id
        })

        let storeToLocal = await localStorage.setItem("rama_note", JSON.stringify(deleteData))
    
        return true

    } catch (error) {
        return error
    }
    
    
}