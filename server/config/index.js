import mongoose from "mongoose";
const PORT = process.env.PORT || 5000;

const URI = 'mongodb+srv://admin:hOmEthSrQsVI2QFd@cluster0.posaqkk.mongodb.net/?retryWrites=true&w=majority'

export const connect = (app)=>{
    mongoose
.connect(URI)
.then(() => {

    console.log('connected to DB');
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });

}).catch((err) => {
    console.log('err', err);
}) 
}