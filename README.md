### Given Task
Build / Utilize (any third party module) the integrated development environment (IDE – JavaScript) and
one can be able to code in it for JavaScript.
Also, the code should be posted using API and save it to DB.

* Build a component to render IDE ( Like https://ace.c9.io/ )
* Should have clear and submit buttons with their action functionality

### React Javascript IDE (Frontend)

    Develop a react app that renders Javascript IDE and stores the code to DB through API and also fetch data from DB when the page is loaded. It shows the last saved data in the editor.
    
### Validating done
* Check empty data
* Check existing data

### Installing
`npm install`
## Functionality
* Clear - Clear the content in the editor.
* Submit - Make post call to store the data to DB. This button disabled when the editor is empty and the value was unchanged.
### Prerequisites
    NPX v6.2
    Node v10.8.0
    React V16.8.6

### Packages Used
* [ReactAce](https://www.npmjs.com/package/react-ace) - Ace Editor NPM
* [ReactToasty](https://www.npmjs.com/package/react-toastify) - Used to Show Notification
* [Axios](https://www.npmjs.com/package/axios) - Make http requests from node.js

### API Config

```javascript
const setting = {
    api_end_point: 'http://192.168.168.94:8085'
}
```
* To Connect with API_END_POINT  `src/config/config.js` file contain api URL.
* You can change the API_END_POINT if you need.

### Run Application

**`npm start`**
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.



