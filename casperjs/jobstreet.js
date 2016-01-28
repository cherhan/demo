phantom.casperTest = true;

var casper = require('casper').create({   
    verbose: true, 
    // logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
    this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
    this.echo("Page Error: " + msg, "ERROR");
});

//var url = 'http://www.jobstreet.com.my/';

// var url = "https://myjobstreet.jobstreet.com.my/home/login.php";
var url = "https://www.nba.com";

casper.start(url, function() {
     this.echo(this.getTitle());

    // search for 'casperjs' from facebook form
    // this.fill('form#login', {
    //     login_id: 'andy.qut@gmail.com',
    //     password: 'a12875883'
    // }, true);
    this.exit();
});

// casper.start(url, function() {
//    // search for 'casperjs' from google form
//    console.log("page loaded");
//    this.test.assertExists('form#frmLogin', 'form is found');
//    this.fill('form#frmLogin', { 
//         login_id: 'andy.qut@gmail.com', 
//         password:  'a12875883'
//     }, true);
// });

// casper.thenEvaluate(function(){
//    console.log("Page Title " + document.title);
//    console.log("Your name is " + document.querySelector('.headerTinymanName').textContent ); 
// });

casper.run();
