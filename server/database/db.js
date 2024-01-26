import mongoose from 'mongoose';


export const Connection = async (username, password) =>{
    const URL =`mongodb+srv://anuragkum135:ntfmt6qcCxxtJFfW@cluster0.ogtus6l.mongodb.net/?retryWrites=true&w=majority`;
    try{
      await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
      console.log("DataBase connected successfully");
    } catch(error){
        console.log('Error: ', error.message);
    }
}

export default Connection;