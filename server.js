const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://bayramyaxiyaev7:v14rDD30Et7EBQp7@cluster0.ex0pa.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 5007;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully  on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
