// defining a class
class FacebookPage {
    //Constructors
    constructor (private fbid:string, public Name : string, public Address : string, private email : string,private phoneNo:string,public Birthdate:string,private birthyear : number,public Gender : string,public InsteredIn : string,public language : string[],public AboutYou:string,public quote:string,public Hometown:string){
       this.fbid=fbid;
       this.Name = Name;
       this.Address = Address;
       this.email = email;
       this.phoneNo = phoneNo;
       this.Birthdate = Birthdate;
       this.birthyear = birthyear;
       this.Gender=Gender;
       this.InsteredIn=InsteredIn;
       this.language=language;
       this.AboutYou=AboutYou;
       this.quote=quote;
       this.Hometown=Hometown;
    }// end constructor
    
    // methods.
    //get current address 
    getAddress = ()=>{
        return this.Address;
    }
    //set current address
    setAddress = (location:string):string=>{
        return this.Address=location;
    }

    // get email
    getemail = ()=>{
        return this.email;
    }

    //get phone no
    getPhoneNo = ()=>{
        return this.phoneNo;
    }
    //get birthdate
    getBirthdate = ()=>{
        return this.Birthdate;
    }

    //get birth year
    getbirthyear = ()=>{
        return this.birthyear;
    }

    //get gender
    getGender = ()=>{
        return this.Gender;
    }

    //get interest
    getInsteredIn = ()=>{
        return this.InsteredIn;
    }
    //set interest
    setInsteredIn = (interestedin:string):string=>{
        return this.InsteredIn=interestedin;
    }

    //get known languages
    getlanguage = ()=>{
        return this.language;
    }
    //get about you 
    getAboutYou = ()=>{
        return this.AboutYou;
    }
    //set about you
    setAboutYou = (about:string):string=>{
        return this.AboutYou=about;
    }

    //get quote
    getquote=()=>{
       return this.quote;
   }

   //get hometown
   getHometown=()=>{   
    return this.Hometown;
   }
    
    }// end class 
    
    //object of class VedioPage
     let FacebookProfile = new FacebookPage("https://www.facebook.com/nisha.yadav.73345048","Nisha Yadav","Kota Rajasthan","ny@gmail.com","9876543212","8 may",1993,"Female","Men",["English","Hindi"],"Hi!","Be the strongest","Haryana")
     
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
    
   