// defining a class
var VedioPage = /** @class */ (function () {
    function VedioPage(id, url, videoName, noOfViews, noOfComments, noOfLikes, noOfDislikes, noOfSubscribers, uploadedBy, PublishingDate, Description, category, IsInPlaylist, AutoPlay) {
        var _this = this;
        this.id = id;
        this.url = url;
        this.videoName = videoName;
        this.noOfViews = noOfViews;
        this.noOfComments = noOfComments;
        this.noOfLikes = noOfLikes;
        this.noOfDislikes = noOfDislikes;
        this.noOfSubscribers = noOfSubscribers;
        this.uploadedBy = uploadedBy;
        this.PublishingDate = PublishingDate;
        this.Description = Description;
        this.category = category;
        this.IsInPlaylist = IsInPlaylist;
        this.AutoPlay = AutoPlay;
        // methods.
        //get no of likes
        this.getLikes = function () {
            return _this.noOfLikes;
        };
        //set no of likes when vedio is liked
        this.setLikes = function () {
            return _this.noOfLikes + 1;
        };
        //get no of dislikes
        this.getDislikes = function () {
            return _this.noOfDislikes;
        };
        //set dislikes when disliked button is clicked
        this.setDisikes = function () {
            return _this.noOfDislikes + 1;
        };
        //set no of subscribers when subscriber button is clicked
        this.setSubscribers = function () {
            return _this.noOfSubscribers + 1;
        };
        //get number of subscribers
        this.getSubscribers = function () {
            return _this.noOfSubscribers;
        };
        //set no of views when vedio is viewed
        this.setViewsNo = function () {
            return _this.noOfViews + 1;
        };
        //get the no of views
        this.getViewsNo = function () {
            return _this.noOfViews;
        };
        //method to get the no of comments
        this.getCommentsNo = function () {
            return _this.noOfComments;
        };
        //method to set the no of comments when a comment is done
        this.setCommentsNo = function () {
            return _this.noOfComments + 1;
        };
        //method to get ads
        this.getAds = function () {
            return "advertizements";
        };
        //Method to get the related vedios ids by giving id of particular vedio as input
        this.getRelatedVedios = function (id) {
            var relatedvediosId;
            relatedvediosId = [12, 19, 1765];
            return relatedvediosId;
        };
        this.id = id;
        this.url = url;
        this.videoName = videoName;
        this.noOfViews = noOfViews;
        this.noOfComments = noOfComments;
        this.noOfLikes = noOfLikes;
        this.noOfDislikes = noOfDislikes;
        this.noOfSubscribers = noOfSubscribers;
        this.uploadedBy = uploadedBy;
        this.PublishingDate = PublishingDate;
        this.Description = Description;
        this.category = category;
        this.IsInPlaylist = IsInPlaylist;
        this.AutoPlay = AutoPlay;
    } // end constructor
    return VedioPage;
}()); // end class 
//object of class VedioPage
var MyVedio = new VedioPage(31946, "https://www.youtube.com/watch?v=ToxnuakJrqE", "Manmarziyaan Official Trailer | Abhishek Bachchan, Taapsee Pannu, Vicky Kaushal, Anurag Kashyap", 10355976, 6464, 91000, 5900, 13000000, "Eros Now", "Aug 8,2018", "This September, do what the heart wants...A film by #AanandLRai and #AnuragKashyap. Watch the official trailer of #Manmarziyaan starring #AbhishekBachchan, #VickyKaushal and #TaapseePannu on #ErosNow.", "Entertainment", false, false);
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
