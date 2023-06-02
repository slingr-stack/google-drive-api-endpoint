# Javascript API

The Javascript API of the googledrive endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PATCH` requests to the [googledrive API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.googledrive.get('/files')
var response = app.endpoints.googledrive.post('/files/:fileId/permissions', body)
var response = app.endpoints.googledrive.post('/files/:fileId/permissions')
var response = app.endpoints.googledrive.delete('/files/:fileId/permissions/:permissionId')
var response = app.endpoints.googledrive.patch('/files/:fileId/comments/:commentId', body)
var response = app.endpoints.googledrive.patch('/files/:fileId/comments/:commentId')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/about'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.about.get()
```
---
* API URL: '/changes'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.changes.get()
```
---
* API URL: '/changes/startPageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.changes.startPageToken.get()
```
---
* API URL: '/files/:fileId/comments'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.get()
```
---
* API URL: '/files/:fileId/comments/:commentId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.get(fileId)
```
---
* API URL: '/drives'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.get()
```
---
* API URL: '/drives/:driveId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.get()
```
---
* API URL: '/files/:fileId/export'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.export.get(fileId)
```
---
* API URL: '/files/generateIds'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.generateIds.get()
```
---
* API URL: '/files'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.get()
```
---
* API URL: '/files/:fileId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.get()
```
---
* API URL: '/files/:fileId/listLabels'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.listLabels.get(fileId)
```
---
* API URL: '/files/:fileId/permissions'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.permissions.get()
```
---
* API URL: '/files/:fileId/permissions/:permissionId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.permissions.get(fileId)
```
---
* API URL: '/files/:fileId/comments/:commentId/replies'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.replies.get(fileId)
```
---
* API URL: '/files/:fileId/comments/:commentId/replies/:replyId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.replies.get(fileId, commentId)
```
---
* API URL: '/files/:fileId/revisions'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.revisions.get()
```
---
* API URL: '/files/:fileId/revisions/:revisionId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.revisions.get(fileId)
```
---
* API URL: '/channels/stop'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.channels.stop.post(body)
```
---
* API URL: '/changes/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.changes.watch.post(body)
```
---
* API URL: '/files/:fileId/comments'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.post(fileId, body)
```
---
* API URL: '/drives'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.post(body)
```
---
* API URL: '/drives/:driveId/hide'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.hide.post(driveId, body)
```
---
* API URL: '/drives/:driveId/unhide'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.unhide.post(driveId, body)
```
---
* API URL: '/files/:fileId/copy'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.copy.post(fileId, body)
```
---
* API URL: '/files'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.post(body)
```
---
* API URL: '/files/:fileId/modifyLabels'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.modifyLabels.post(fileId, body)
```
---
* API URL: '/files/:fileId/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.watch.post(fileId, body)
```
---
* API URL: '/files/:fileId/permissions'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.permissions.post(fileId, body)
```
---
* API URL: '/files/:fileId/comments/:commentId/replies'
* HTTP Method: 'POST'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.replies.post(fileId, commentId, body)
```
---
* API URL: '/files/:fileId/comments/:commentId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.delete(fileId, commentId)
```
---
* API URL: '/drives/:driveId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.delete(driveId)
```
---
* API URL: '/files/:fileId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.delete(fileId)
```
---
* API URL: '/files/trash'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.trash.delete()
```
---
* API URL: '/files/:fileId/permissions/:permissionId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.permissions.delete(fileId, permissionId)
```
---
* API URL: '/files/:fileId/comments/:commentId/replies/:replyId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.replies.delete(fileId, commentId, replyId)
```
---
* API URL: '/files/:fileId/revisions/:revisionId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.revisions.delete(fileId, revisionId)
```
---
* API URL: '/files/:fileId/comments/:commentId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.patch(fileId, commentId, body)
```
---
* API URL: '/drives/:driveId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.drives.patch(driveId, body)
```
---
* API URL: '/files/:fileId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.patch(fileId, body)
```
---
* API URL: '/files/:fileId/permissions/:permissionId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.permissions.patch(fileId, permissionId, body)
```
---
* API URL: '/files/:fileId/comments/:commentId/replies/:replyId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.comments.replies.patch(fileId, commentId, replyId, body)
```
---
* API URL: '/files/:fileId/revisions/:revisionId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/drive/api/reference/rest/v3
```javascript
app.endpoints.googledrive.files.revisions.patch(fileId, revisionId, body)
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,DELETE,PATCH</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/about<br>/changes<br>/changes/startPageToken<br>/files/{fileId}/comments<br>/files/{fileId}/comments/{commentId}<br>/drives<br>/drives/{driveId}<br>/files/{fileId}/export<br>/files/generateIds<br>/files<br>/files/{fileId}<br>/files/{fileId}/listLabels<br>/files/{fileId}/permissions<br>/files/{fileId}/permissions/{permissionId}<br>/files/{fileId}/comments/{commentId}/replies<br>/files/{fileId}/comments/{commentId}/replies/{replyId}<br>/files/{fileId}/revisions<br>/files/{fileId}/revisions/{revisionId}<br>/channels/stop<br>/changes/watch<br>/files/{fileId}/comments<br>/drives<br>/drives/{driveId}/hide<br>/drives/{driveId}/unhide<br>/files/{fileId}/copy<br>/files<br>/files/{fileId}/modifyLabels<br>/files/{fileId}/watch<br>/files/{fileId}/permissions<br>/files/{fileId}/comments/{commentId}/replies<br>/files/{fileId}/comments/{commentId}<br>/drives/{driveId}<br>/files/{fileId}<br>/files/trash<br>/files/{fileId}/permissions/{permissionId}<br>/files/{fileId}/comments/{commentId}/replies/{replyId}<br>/files/{fileId}/revisions/{revisionId}<br>/files/{fileId}/comments/{commentId}<br>/drives/{driveId}<br>/files/{fileId}<br>/files/{fileId}/permissions/{permissionId}<br>/files/{fileId}/comments/{commentId}/replies/{replyId}<br>/files/{fileId}/revisions/{revisionId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*