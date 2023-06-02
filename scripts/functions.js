////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.about = {};

endpoint.channels = {};

endpoint.channels.stop = {};

endpoint.changes = {};

endpoint.changes.startPageToken = {};

endpoint.changes.watch = {};

endpoint.files = {};

endpoint.files.comments = {};

endpoint.drives = {};

endpoint.drives.hide = {};

endpoint.drives.unhide = {};

endpoint.files.copy = {};

endpoint.files.trash = {};

endpoint.files.export = {};

endpoint.files.generateIds = {};

endpoint.files.listLabels = {};

endpoint.files.modifyLabels = {};

endpoint.files.watch = {};

endpoint.files.permissions = {};

endpoint.files.comments.replies = {};

endpoint.files.revisions = {};

endpoint.about.get = function(httpOptions) {
    var url = parse('/about');
    sys.logs.debug('[googledrive] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.channels.stop.post = function(httpOptions) {
    var url = parse('/channels/stop');
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.changes.get = function(httpOptions) {
    var url = parse('/changes');
    sys.logs.debug('[googledrive] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.changes.startPageToken.get = function(httpOptions) {
    var url = parse('/changes/startPageToken');
    sys.logs.debug('[googledrive] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.changes.watch.post = function(httpOptions) {
    var url = parse('/changes/watch');
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.comments.post = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/comments', [fileId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.comments.delete = function(fileId, commentId, httpOptions) {
    if (!fileId || !commentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,commentId].');
        return;
    }
    var url = parse('/files/:fileId/comments/:commentId', [fileId, commentId]);
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.files.comments.get = function(fileId, commentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/files/:fileId/comments', [fileId]);
			break;
		case 2:
			url = parse('/files/:fileId/comments/:commentId', [fileId, commentId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googledrive] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.files.comments.patch = function(fileId, commentId, httpOptions) {
    if (!fileId || !commentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,commentId].');
        return;
    }
    var url = parse('/files/:fileId/comments/:commentId', [fileId, commentId]);
    sys.logs.debug('[googledrive] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.drives.post = function(httpOptions) {
    var url = parse('/drives');
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.drives.get = function(driveId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/drives');
			break;
		case 1:
			url = parse('/drives/:driveId', [driveId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googledrive] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.drives.delete = function(driveId, httpOptions) {
    if (!driveId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [driveId].');
        return;
    }
    var url = parse('/drives/:driveId', [driveId]);
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.drives.hide.post = function(driveId, httpOptions) {
    if (!driveId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [driveId].');
        return;
    }
    var url = parse('/drives/:driveId/hide', [driveId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.drives.unhide.post = function(driveId, httpOptions) {
    if (!driveId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [driveId].');
        return;
    }
    var url = parse('/drives/:driveId/unhide', [driveId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.drives.patch = function(driveId, httpOptions) {
    if (!driveId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [driveId].');
        return;
    }
    var url = parse('/drives/:driveId', [driveId]);
    sys.logs.debug('[googledrive] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.files.copy.post = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/copy', [fileId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.post = function(httpOptions) {
    var url = parse('/files');
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.delete = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId', [fileId]);
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.files.trash.delete = function(httpOptions) {
    var url = parse('/files/trash');
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.files.export.get = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/export', [fileId]);
    sys.logs.debug('[googledrive] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.files.generateIds.get = function(httpOptions) {
    var url = parse('/files/generateIds');
    sys.logs.debug('[googledrive] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.files.get = function(fileId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/files');
			break;
		case 1:
			url = parse('/files/:fileId', [fileId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googledrive] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.files.listLabels.get = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/listLabels', [fileId]);
    sys.logs.debug('[googledrive] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.files.modifyLabels.post = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/modifyLabels', [fileId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.patch = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId', [fileId]);
    sys.logs.debug('[googledrive] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.files.watch.post = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/watch', [fileId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.permissions.post = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/files/:fileId/permissions', [fileId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.permissions.delete = function(fileId, permissionId, httpOptions) {
    if (!fileId || !permissionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,permissionId].');
        return;
    }
    var url = parse('/files/:fileId/permissions/:permissionId', [fileId, permissionId]);
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.files.permissions.get = function(fileId, permissionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/files/:fileId/permissions', [fileId]);
			break;
		case 2:
			url = parse('/files/:fileId/permissions/:permissionId', [fileId, permissionId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googledrive] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.files.permissions.patch = function(fileId, permissionId, httpOptions) {
    if (!fileId || !permissionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,permissionId].');
        return;
    }
    var url = parse('/files/:fileId/permissions/:permissionId', [fileId, permissionId]);
    sys.logs.debug('[googledrive] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.files.comments.replies.post = function(fileId, commentId, httpOptions) {
    if (!fileId || !commentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,commentId].');
        return;
    }
    var url = parse('/files/:fileId/comments/:commentId/replies', [fileId, commentId]);
    sys.logs.debug('[googledrive] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.files.comments.replies.delete = function(fileId, commentId, replyId, httpOptions) {
    if (!fileId || !commentId || !replyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,commentId,replyId].');
        return;
    }
    var url = parse('/files/:fileId/comments/:commentId/replies/:replyId', [fileId, commentId, replyId]);
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.files.comments.replies.get = function(fileId, commentId, replyId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/files/:fileId/comments/:commentId/replies', [fileId, commentId]);
			break;
		case 3:
			url = parse('/files/:fileId/comments/:commentId/replies/:replyId', [fileId, commentId, replyId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googledrive] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.files.comments.replies.patch = function(fileId, commentId, replyId, httpOptions) {
    if (!fileId || !commentId || !replyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,commentId,replyId].');
        return;
    }
    var url = parse('/files/:fileId/comments/:commentId/replies/:replyId', [fileId, commentId, replyId]);
    sys.logs.debug('[googledrive] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.files.revisions.delete = function(fileId, revisionId, httpOptions) {
    if (!fileId || !revisionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,revisionId].');
        return;
    }
    var url = parse('/files/:fileId/revisions/:revisionId', [fileId, revisionId]);
    sys.logs.debug('[googledrive] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.files.revisions.get = function(fileId, revisionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/files/:fileId/revisions', [fileId]);
			break;
		case 2:
			url = parse('/files/:fileId/revisions/:revisionId', [fileId, revisionId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googledrive] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.files.revisions.patch = function(fileId, revisionId, httpOptions) {
    if (!fileId || !revisionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId,revisionId].');
        return;
    }
    var url = parse('/files/:fileId/revisions/:revisionId', [fileId, revisionId]);
    sys.logs.debug('[googledrive] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}