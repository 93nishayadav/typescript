// defining a class
class VedioPage {
    
    constructor (private id:number, public url : string,public videoName : string, private noOfViews : number, private noOfComments : number,private noOfLikes:number,private noOfDislikes:number,private noOfSubscribers : number,public uploadedBy : string,public PublishingDate : string,public Description : string,public category:string,public IsInPlaylist:boolean,public AutoPlay:boolean){
       this.id=id;
       this.url=url;
       this.videoName = videoName;
       this.noOfViews = noOfViews;
       this.noOfComments = noOfComments;
       this.noOfLikes = noOfLikes;
       this.noOfDislikes = noOfDislikes;
       this.noOfSubscribers = noOfSubscribers;
       this.uploadedBy=uploadedBy;
       this.PublishingDate=PublishingDate;
       this.Description=Description;
       this.category=category;
       this.IsInPlaylist=IsInPlaylist;
       this.AutoPlay=AutoPlay;
    }// end constructor
    
    // methods.
    //get no of likes
    getLikes = ()=>{
        return this.noOfLikes;
    }
    //set no of likes when vedio is liked
    setLikes = ()=>{
        return this.noOfLikes+1;
    }

    //get no of dislikes
    getDislikes = ()=>{
        return this.noOfDislikes;
    }

    //set dislikes when disliked button is clicked
    setDisikes = ()=>{
        return this.noOfDislikes+1;
    }
    //set no of subscribers when subscriber button is clicked
    setSubscribers = ()=>{
        return this.noOfSubscribers+1;
    }

    //get number of subscribers
    getSubscribers = ()=>{
        return this.noOfSubscribers;
    }

    //set no of views when vedio is viewed
    setViewsNo = ()=>{
        return this.noOfViews+1;
    }

    //get the no of views
    getViewsNo = ()=>{
        return this.noOfViews;
    }
    //method to get the no of comments
    getCommentsNo = ()=>{
        return this.noOfComments;
    }
    //method to set the no of comments when a comment is done
    setCommentsNo = ()=>{
        return this.noOfComments+1;
    }
    //method to get ads
   getAds=()=>{
       return "advertizements";
   }
   //Method to get the related vedios ids by giving id of particular vedio as input
   getRelatedVedios=(id:number):number[]=>{
       let relatedvediosId :number[];
       relatedvediosId=[12,19,1765];
    return relatedvediosId;
   }
    

    }// end class 
    
    //object of class VedioPage
     let MyVedio = new VedioPage(31946,"https://www.youtube.com/watch?v=ToxnuakJrqE","Manmarziyaan Official Trailer | Abhishek Bachchan, Taapsee Pannu, Vicky Kaushal, Anurag Kashyap",10355976,6464,91000,5900,13000000,"Eros Now","Aug 8,2018","This September, do what the heart wants...A film by #AanandLRai and #AnuragKashyap. Watch the official trailer of #Manmarziyaan starring #AbhishekBachchan, #VickyKaushal and #TaapseePannu on #ErosNow.","Entertainment",false,false)
     
     //public properties accessible through objects
     console.log(MyVedio.url);
     console.log(MyVedio.videoName);
     console.log(MyVedio.uploadedBy);    
     console.log(MyVedio.PublishingDate);
     console.log(MyVedio.Description);
     console.log(MyVedio.category);
     console.log(MyVedio.IsInPlaylist);
     console.log(MyVedio.AutoPlay);


//methods calling through objects
     console.log(MyVedio.getLikes());
     console.log(MyVedio.setLikes());
     console.log(MyVedio.getDislikes());
     console.log(MyVedio.setDisikes());
     console.log(MyVedio.getSubscribers());
     console.log(MyVedio.setSubscribers());
     console.log(MyVedio.setViewsNo());
     console.log(MyVedio.getViewsNo());
     console.log(MyVedio.getCommentsNo());
     console.log(MyVedio.setCommentsNo());
    console.log(MyVedio.getAds());
    console.log(MyVedio.getRelatedVedios(31946));
