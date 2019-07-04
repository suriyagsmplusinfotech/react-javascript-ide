### Given Task
Build / Utilize (any third party module) the integrated development environment (IDE – JavaScript) and
one can be able to code in it for JavaScript.
Also, the code should be posted using API and save it to DB.

* Build a component to render IDE ( Like https://ace.c9.io/ )
* Should have clear and submit buttons with their action functionality

### React Javascript IDE (Frontend)

I have developed a react app that renders Javascript IDE and stores the code to the DB through API and also fetch the saved code from DB when the page is loaded. It also shows the last saved data in the editor.
    
### Validation done
* Created a validation for ensuring empty code.
* Enabled the post call on submit action only when the code is updated or modified.

### Installation 
`npm install`

## Functionality
* Clear button - It helps to clear the content in the editor.
* Submit button -It triggers a post call to store the data to DB and this button is disabled when the editor is empty with the value remains unchanged.

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
You will also see any errors in the console.



