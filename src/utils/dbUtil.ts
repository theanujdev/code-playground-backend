import mongoose from "mongoose";

const database = {
  connectToDB(url: string) {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Connected to DB.");
      })
      .catch((err) => {
        console.log("DB error : ", err);
      });
  },
};

export default database;
