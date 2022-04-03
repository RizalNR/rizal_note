import moment from "moment";

export const editData = async(e)=>{
    e.preventDefault();
    try {
        let {id,title,content} = await e.target;

        let prevData = await localStorage.getItem("rama_note") //string
        let prevDataParse = await JSON.parse(prevData) // js array
        let editData = await prevDataParse.filter((x)=>{
            return x.id == id.value // array
        })
        let findIndex = await prevDataParse.indexOf(editData[0])
        
        prevDataParse[findIndex] = {
            ...prevDataParse[findIndex], // clone data sebelumnya
            id : id.value,
            title : title.value,
            content : content.value,
            createdAt : moment().format("dddd DD/MM/YYYY hh:mm")
        }

        const storeToLocal = await localStorage.setItem("rama_note", JSON.stringify(prevDataParse))

        window.location.reload()

        return true
        

    } catch (error) {
        return error
    }
}