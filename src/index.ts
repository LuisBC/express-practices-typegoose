import mongoose from "mongoose";
import User from "./models/User";
import Product from "./models/Product";
import Role from "./models/Role";

async function connectDB() {
  const db = await mongoose
    .set("strictQuery", true)
    .connect("mongodb://localhost/express-practices-typegoose");
  console.log("Database is connected to", db.connection.db.databaseName);
}

connectDB();

async function execute() {
  //   const user = new User({
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@gmail.com",
  //     password: "johndoe",
  //   });
  //   await user.save();
  //   console.log(user);
  //
  //   const users = await User.find({}, { firstName: 1, _id: 0 });
  //   console.log(users);
  //   const user = await User.findById("63a46e4fe0152e96badccc9c", {
  //     firstName: 1,
  //     _id: 0,
  //   });
  //   console.log(user);
  //
  //   const user = await User.findOneAndUpdate(
  //     { _id: "63a46e4fe0152e96badccc9c" },
  //     { firstName: "Luis" },
  //     { new: true }
  //   );
  //   console.log(user);
  //
  //   const user = await User.findByIdAndDelete("63a46e4fe0152e96badccc9c");
  //   const user = await User.findOneAndDelete({ email: "johndoe@gmail.com" });
  //   const user = await User.deleteMany({ email: "johndoe@gmail.com" });
  //   console.log(user);
  //
  //   const product = await Product.create({
  //     name: "Product 1",
  //     price: 100,
  //     url: "product-1",
  //     tags: ["tag1", "tag2"],
  //     comments: [{ text: "comment 1" }, { text: "comment 2" }],
  //     owner: "63a47a1d9f8df2a9eee28222",
  //   });
  //   await product.save();
  //   console.log(product);
  //
  //   const product = await Product.findById("63a47ab9ec9b3297ca38bcd2").populate(
  //     "owner"
  //   );
  //   console.log(product);
  //
  //   const roles = await Role.insertMany([
  //     { name: "admin" },
  //     { name: "user" },
  //     { name: "moderator" },
  //   ]);
  //   console.log(roles);
  //
  //   const user = new User({
  //     firstName: "Luis",
  //     lastName: "Barriga",
  //     email: "luisbarriga@gmail.com",
  //     password: "luisbarriga",
  //     roles: ["63a47cf98ca7b2e4362ec7aa", "63a47cf98ca7b2e4362ec7ab"],
  //   });
  //   await user.save();
  //   const userSaved = await User.findById("63a47d981a23e64d0f168b31").populate(
  //     "roles",
  //     "name -_id" // -_id means exclude _id
  //   );
  //   console.log(userSaved);
  //
  //   const user = await User.findByFirstName("Luis");
  //   console.log(user);
  //
  //   const user = new User({
  //     firstName: "Maria",
  //     lastName: "Faustina",
  //     email: "mariafaustina@gmail.com",
  //     password: "mariafaustina",
  //   });
  //   user.password = user.encryptPassword("mariafaustina");
  //   await user.save();
  //   console.log(user);
}

execute();
