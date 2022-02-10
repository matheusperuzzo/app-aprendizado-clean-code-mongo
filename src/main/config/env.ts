/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
export default {
  mongoUrl:
    process.env.MONGO_URL ||
    "mongodb+srv://db_user:Matheus061218@cluster0.qumge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  port: process.env.PORT || 5050,
};
