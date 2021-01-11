const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    authType: {
        type: String
    },
    username: {
        type: String,
        unique: true,
        required: true,
    }
});

UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password)
}

UserSchema.pre('save', function (next) {
    if (this.authType !== "google") {
        return bcrypt.genSalt(10).then(salt => {
            return bcrypt.hash(this.password, salt)
        }).then(hash => {
            this.password = hash
            return Promise.resolve()
        })
    } else {
        return Promise.resolve()
    }
});

// UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;

