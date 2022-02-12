const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  username: {
    type: String,
    required: [true, "Please Enter username"],
    trim: true,
    lowercase: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength:5,
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  website: {
    type: String,
    required: true,
    validate: function(value){
      var webRegrex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      return webRegrex.test(value)
    }
  },
  phone: {
    type: String,
    required: true,
    validate: function(value){
      var phoneRegrex = /(^\d{1}-\d{3}-\d{3}-\d{4}$)/;
      return phoneRegrex.test(value)
    }
  },
  address:{
    type:Object,
    street:{
      type:String,
      required:true
    },
    suite:{
      type:String,
      required:true
    },
    street:{
      type:String,
      required:true
    },
    city:{
      type: String,
      required: true,
      trim: true,
      validate: function(value) {
        var cityRegex = /^[a-zA-Z ]*$/;
        return cityRegex.test(value);
      }
    },
    zipcode: {
      type: Number,
      required: true,
      validate: function(value){
        var zipRegrex = /(^\d{5}-\d{4}$)/;
        return zipRegrex.test(value)
      }
    },
    geo:{
      type:Object,
      lat:{
        type:String,
        required:true
      },
      ling:{
        type:String,
        required:true
      }
    }
  },
  company:{
    type:Object,
    name:{
      type:String,
      required:true
    },
    catchPhrase:{
      type:String,
      required:true
    },
    bs:{
      type:String,
      required:true
    }
  }
});

//Create Model
const User = mongoose.model("User", UserSchema);
module.exports = User;