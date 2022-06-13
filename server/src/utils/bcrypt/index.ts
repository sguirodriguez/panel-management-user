import bcrypt from 'bcrypt'

const encrypt = async (data:string)=>{
    return await bcrypt.hash(data, 10)
}

export { encrypt }



