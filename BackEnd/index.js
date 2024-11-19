const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book.route.js");
const userRoute = require("./routes/user.route.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

mongoose
  .connect("mongodb://localhost:27017/bookStoreApp")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error("Error in Code:", err.message);
  });

// Define a schema for the form data
const formSchema = new mongoose.Schema({
  name: String,
  phoneNo: String,
  businessName: String,
  productName: String,
  productWeight: String,
  selectedProducts: [String],
  address: String,
});

const FormData = mongoose.model("FormData", formSchema);

app.post("/api/submit", async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
