// defining a class
var FacebookPage = /** @class */ (function () {
    //Constructors
    function FacebookPage(fbid, Name, Address, email, phoneNo, Birthdate, birthyear, Gender, InsteredIn, language, AboutYou, quote, Hometown) {
        var _this = this;
        this.fbid = fbid;
        this.Name = Name;
        this.Address = Address;
        this.email = email;
        this.phoneNo = phoneNo;
        this.Birthdate = Birthdate;
        this.birthyear = birthyear;
        this.Gender = Gender;
        this.InsteredIn = InsteredIn;
        this.language = language;
        this.AboutYou = AboutYou;
        this.quote = quote;
        this.Hometown = Hometown;
        // methods.
        //get current address 
        this.getAddress = function () {
            return _this.Address;
        };
        //set current address
        this.setAddress = function (location) {
            return _this.Address = location;
        };
        // get email
        this.getemail = function () {
            return _this.email;
        };
        //get phone no
        this.getPhoneNo = function () {
            return _this.phoneNo;
        };
        //get birthdate
        this.getBirthdate = function () {
            return _this.Birthdate;
        };
        //get birth year
        this.getbirthyear = function () {
            return _this.birthyear;
        };
        //get gender
        this.getGender = function () {
            return _this.Gender;
        };
        //get interest
        this.getInsteredIn = function () {
            return _this.InsteredIn;
        };
        //set interest
        this.setInsteredIn = function (interestedin) {
            return _this.InsteredIn = interestedin;
        };
        //get known languages
        this.getlanguage = function () {
            return _this.language;
        };
        //get about you 
        this.getAboutYou = function () {
            return _this.AboutYou;
        };
        //set about you
        this.setAboutYou = function (about) {
            return _this.AboutYou = about;
        };
        //get quote
        this.getquote = function () {
            return _this.quote;
        };
        //get hometown
        this.getHometown = function () {
            return _this.Hometown;
        };
        this.fbid = fbid;
        this.Name = Name;
        this.Address = Address;
        this.email = email;
        this.phoneNo = phoneNo;
        this.Birthdate = Birthdate;
        this.birthyear = birthyear;
        this.Gender = Gender;
        this.InsteredIn = InsteredIn;
        this.language = language;
        this.AboutYou = AboutYou;
        this.quote = quote;
        this.Hometown = Hometown;
    } // end constructor
    return FacebookPage;
}()); // end class 
//object of class VedioPage
var FacebookProfile = new FacebookPage("https://www.facebook.com/nisha.yadav.73345048", "Nisha Yadav", "Kota Rajasthan", "ny@gmail.com", "9876543212", "8 may", 1993, "Female", "Men", ["English", "Hindi"], "Hi!", "Be the strongest", "Haryana");
//public properties accessible through objects
console.log(FacebookProfile.Name);
console.log(FacebookProfile.Address);
console.log(FacebookProfile.Birthdate);
console.log(FacebookProfile.Gender);
console.log(FacebookProfile.InsteredIn);
console.log(FacebookProfile.language);
console.log(FacebookProfile.AboutYou);
console.log(FacebookProfile.quote);
console.log(FacebookProfile.Hometown);
//methods calling through objects
console.log(FacebookProfile.setAddress("Pune"));
console.log(FacebookProfile.getAddress());
console.log(FacebookProfile.getemail());
console.log(FacebookProfile.getPhoneNo());
console.log(FacebookProfile.getbirthyear());
console.log(FacebookProfile.setAboutYou("i am cute"));
