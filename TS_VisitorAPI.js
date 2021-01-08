<script src="EY\Documents\EY\Cookieless POC\AppMeasurement_JavaScript-2.22.0/TS_Appmeasurement.js"></script>
<script>
	if (typeof AppMeasurement === "undefined") {
		var omni = document.createElement("script");
		omni.src = "https://chartorg.io/tm/AppMeasurement_v2.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(omni, s);
	}

	/************************** CONFIG SECTION **************************/
    var s_account="ageo1xxpnwcookielesspoc";
    var s=s_gi(s_account);
    s.trackDownloadLinks = false;
    s.trackExternalLinks = false;
    s.trackInlineStats = true;
    s.linkInternalFilters = "Javascript:,ticketmaster.com";
    s.linkLeaveQueryString = false;
    s.linkTrackVars = "None";
    s.linkTrackEvents = "None";
    s.currencyCode = "USD";
    s.visitorNamespace = "CookielessPOC";
    s.trackingServer = "eymeasurement.sc.omtrdc.net";
    //s.trackingServerSecure = "VISITORNAMSPACE.112.2o7.net";
    s.usePlugins = false;

    /************************* CUSTOM PAGE SECTION **************************/

    if (/EDP/.test("TM_US: CCP Artist: Off Sale")) {
        s.events = "event14";
    }
    
    s.pageName = "tm_test: " + "$page_name$";
    s.pageURL = "$document_href$";

    
    /************************* CALL VISITOR **************************/

    //Call Visitor ID Service for Analytics
//getInstance returns a visitor ID object for the specified Experience Cloud organization ID. This is required to initialize the visitor ID object provided to AppMeasurement through s.visitor.
        s.visitor = Visitor.getInstance("0F6446D257BEE2D57F000101@AdobeOrg");
        
    //Call Visitor ID Service
    var visitor = Visitor.getInstance("0F6446D257BEE2D57F000101@AdobeOrg", {
        trackingServer: "eymeasurement.sc.omtrdc.net", // same as s.trackingServer
        //trackingServerSecure: "eymeasurement.com.sc.omtrdc.net", // same as s.trackingServerSecure
        // To enable CNAME support, add the following configuration variables
        // If you are not using CNAME, DO NOT include these variables
        //marketingCloudServer: "INSERT-TRACKING-SERVER-HERE",
        //marketingCloudServerSecure: "INSERT-SECURE-TRACKING-SERVER-HERE" // same as s.trackingServerSecure
        idSyncAttachIframeOnWindowLoad: true
    });

    //Global call for getQueryParams - only use URL path after "?", not entire URL
   

function getQueryParams(qs) {
        qs = String(qs);
        qs = qs.replace(/\+/g, " ");
        var params = {}
            , re = /[?&]?([^=]+)=([^&]*)/g
            , tokens;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]).toLowerCase();
        }
        return params;
    }

    //Get RID
var setrid = getQueryParams(document.location.search).rid;    
var setcid = getQueryParams(document.location.search).cid;   
var tmpageURL = "$document_href$";
        tmpageURL = tmpageURL.split("?")[1];
    var rid = typeof getQueryParams(tmpageURL).rid != "undefined" ? getQueryParams(tmpageURL).rid : "";
// if the value of tmPageURL is not undefined, get the RID query Param
    var ecid = typeof s.visitor.getMarketingCloudVisitorID() != "undefined" ? s.visitor.getMarketingCloudVisitorID() : "";
//getMarketingCloudVisitorID returns the Experience Cloud visitor ID.
    //Set Customer IDs
    visitor.setCustomerIDs({
        "ecid":{
            "id": ecid,
            "authState":0
        },
        "rid":{
            "id": rid,
            "authState":0
        }
    });

    /************************* TRIGGER ANALYTICS **************************/
    var s_code = s.t();
    if (s_code) document.write(s_code);
</script>
