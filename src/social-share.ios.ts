"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("tns-core-modules/utils/utils");
var ui_1 = require("tns-core-modules/ui");
var application = require("tns-core-modules/application");
function share(thingsToShare) {
    var activityController = UIActivityViewController.alloc()
        .initWithActivityItemsApplicationActivities(thingsToShare, null);
    var presentViewController = activityController.popoverPresentationController;
    if (presentViewController) {
        var page = ui_1.Frame.topmost().currentPage;
        if (page && page.ios.navigationItem.rightBarButtonItems &&
            page.ios.navigationItem.rightBarButtonItems.count > 0) {
            presentViewController.barButtonItem = page.ios.navigationItem.rightBarButtonItems[0];
        }
        else {
            presentViewController.sourceView = page.ios.view;
        }
    }
    var app = UIApplication.sharedApplication;
    var window = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows[0]);
    var rootController = window.rootViewController;
    application.getRootView().ios.presentViewControllerAnimatedCompletion(activityController, true, null);
}
function shareImage(image) {
    share([image]);
}
exports.shareImage = shareImage;
function shareText(text) {
    share([text]);
}
exports.shareText = shareText;
function shareUrl(url, text) {    
    const thingsToShare = [NSURL.URLWithString(url)];
    if (text !== undefined) {
        thingsToShare.push(text);
    }
    share(thingsToShare);
}
exports.shareUrl = shareUrl;
//# sourceMappingURL=social-share.ios.js.map