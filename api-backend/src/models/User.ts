import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-nodejs";

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

/**
 *  Password hash middleware.
 */
userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.toJSON = function() {
  const user = this.toObject();
  // user.password = null;
  delete user.password;
  return user;
};

const User = mongoose.model('User', userSchema);
export default User;
