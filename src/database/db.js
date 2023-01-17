import mongoose from "mongoose";

const connetcDatabase = () => {
    console.log("Wait connecting to the darabase")

    mongoose.connect(process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

export default connetcDatabase;