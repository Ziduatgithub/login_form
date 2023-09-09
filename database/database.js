const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user1:alloweduser@ziduclusterone.l42fox2.mongodb.net/login-signup?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const credentialsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const credentialsModel = new mongoose.model("ccredentials", credentialsSchema);

module.exports = credentialsModel;
