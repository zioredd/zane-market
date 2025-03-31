// create user schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const brycpt = require("bcrypt");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be atleast 6 characters long"],
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    picture: { type: String },
  },
  { timestamps: true }
);

// hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await brycpt.hash(this.password, 10);
  next();
});

// compare password
userSchema.methods.comparePassword = async function (password) {
  return await brycpt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
