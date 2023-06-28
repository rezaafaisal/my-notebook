export default function getDatetime(){
    const d = new Date()
    
    const p = d.getFullYear()
    
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const monthName = months[d.getMonth()+1]
    
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
    const dayName = days[d.getDay()]
    
    return  dayName + ", "+d.getDate()+" "+monthName+" "+p

}