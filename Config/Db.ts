import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/emailserver";

export const DbcONNECT = async () => {
  const connc = await mongoose
    .connect(url)
    .then(() => {
      console.log(`Db is connented`);
    })
    .catch((err) => {
      console.log(err);
    });
};
