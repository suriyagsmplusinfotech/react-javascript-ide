/*

@author   S.Suriya
@company  GSM Plus Infotech

*/

import React, { PureComponent } from 'react';

//It creates an instance of the Ace Editor.

import Editor from 'react-ace';

// provide the modes and themes at the same paths that ace's setMode and setTheme use (just replace 'ace' with 'brace').

import 'brace/ext/language_tools';
import "brace/mode/javascript";
import "brace/theme/textmate";

// axios is used to make an api request to server.

import axios from 'axios';


// react-toastify is third party package for showing notification.
// this toasty stands for 5 seconds

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../config/config'


class Main extends PureComponent {

    state = {
        editorValue: '',
        initialValue: ''
    }

    // onChange () - it update the state when we type in editor.
    onChange = (code) => {
        this.setState({
            editorValue: code
        })
    }

    // clearEditor() - Clear a content in editor.

    clearEditor = () => {
        this.setState({
            editorValue: '',
        })
    }

    // submitEditor() - is responsible for post call to store whatever we typed on editor.

    submitEditor = () => {
        const code = { code: this.state.editorValue };
        axios.post(`${api}/api/file`, code).then(res => {
            const text = res.data.data.code.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            this.setState({
                editorValue: text,
                initialValue: text
            })
            toast.success("Code submitted");
        })
    }

    //componentDidMount() - Is a react lifecycle hooks 
    // once a component will mount then get request is triggered and get a data from server and update the state.

    componentDidMount() {
        axios.get(`${api}/api/file`).then(res => {
            const text = res.data.data.text_code.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            this.setState({
                editorValue: text,
                initialValue: text
            })
        })
    }

    disableSubmitButton = () => {
        if (this.state.editorValue === null || this.state.editorValue === '') {
            return true
        } else {
            return false;
        }
    }

    render() {
        const disableSubmitButton = () => {
            if (this.state.editorValue === '') {
                return true;
            } else if (this.state.initialValue === this.state.editorValue) {
                return true;
            } else {
                return false;
            }
        }
        return (
            <React.Fragment>
                <Editor
                    placeholder="Code here...!"
                    mode="javascript"
                    theme="textmate"
                    name="js-ide"
                    height="300px"
                    onLoad={this.onLoad}
                    onChange={(e) => this.onChange(e)}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.state.editorValue}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2
                    }}
                    editorProps={{
                        $blockScrolling: Infinity
                    }}
                >
                </Editor>
                <ToastContainer
                    position="top-right"
                    hideProgressBar={true}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                />
                <button onClick={this.submitEditor} disabled={disableSubmitButton()} className="btn-submit">Submit</button>
                <button onClick={this.clearEditor} className="btn-clear">Clear</button>
            </React.Fragment>
        )
    }
}

export default Main;
