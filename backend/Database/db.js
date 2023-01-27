import mongoose from 'mongoose'

async function connect(){
    await mongoose.connect(
        `mongodb+srv://anuragverma:anuragv@cluster0.vl0s4jg.mongodb.net/?retryWrites=true&w=majority`
    
    )
    console.log(`MONGODB CONNECTED SUCCESSFULLY`)
}
export default connect;