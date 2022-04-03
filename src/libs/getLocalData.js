
export const getLocalData = async ()=>{
    try {
        const localData = await localStorage.getItem("rama_note")
        return JSON.parse(localData)

    } catch (error) {
        return error
    }
}