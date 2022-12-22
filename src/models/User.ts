import {
  prop,
  getModelForClass,
  Ref,
  ReturnModelType,
  pre,
  post,
} from "@typegoose/typegoose";
import { Role } from "./Role";
import bcrypt from "bcryptjs";

@pre<User>("save", async function () {
  console.log("User pre save");
  this.firstName = this.firstName + "something";
  this.password = await bcrypt.hash(this.password, 10);
})
@post<User>("save", () => {
  console.log("User post saved");
})
export class User {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true, trim: true, lowercase: true })
  email: string;

  @prop({ required: true, minlength: 6 })
  password: string;

  @prop({ ref: () => Role })
  roles: Ref<Role>[];

  static async findByFirstName(
    this: ReturnModelType<typeof User>,
    firstName: string
  ) {
    return this.find({ firstName });
  }

  encryptPassword(password: string) {
    return "123xyz" + password;
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
