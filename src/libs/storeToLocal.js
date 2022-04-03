export const storeToLocal = async (data)=>{
    try {
        const lastData = await localStorage.getItem("rama_note")

        if(!lastData){
            console.info("Belum ada data yang di buat")
            let createLocal = localStorage.setItem("rama_note", "[]" )
        }
        let prevArray = await JSON.parse(localStorage.getItem("rama_note"))
        let storeNewData = await prevArray.push(data)
        let newData = await localStorage.setItem("rama_note", JSON.stringify(prevArray))

    } catch (error) {
        return error
    }
}