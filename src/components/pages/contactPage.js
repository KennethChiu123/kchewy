import React, { Component } from 'react';

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import contactImg from './../../images/contact1.jpg';






class ContactForm extends Component {


  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    subject: "",
    subjectError: "",
    message: "",
    messageError: "",
    messageSent:false
  };

  updateField (field, value) {
    this.setState({ [field]: value});
  }



  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: "",
      subjectError: "",
      messageError: ""
    };

    if (this.state.name.length < 1) {
      isError = true;
      errors.nameError = "Requires valid Name";
    }

    if (!/.+@.+\..+/.test(this.state.email)) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      console.log("Our Submitted Data");
      console.log(this.state);
      //submit data
      //lets email data
      fetch("https://formspree.io/ken88there@gmail.com", {
        method: 'post',
        body: {message: "hello!"}
      });
      console.log("success")
      //then
      // clear form
      this.setState({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        subject: "",
        subjectError: "",
        message: "",
        messageError: "",
        messageSent:true
      });
    }
  };

  render() {
    var contactStatus = this.state.sentContact ? "Thank you for your message." :'Contact'
    return (
      <div className="content-contact">
        <div className="container">

        <div className="contactBlock1">
          <div>
            <div className="contactL">
              <img src={contactImg} alt="Contact Pic" />
            </div>
            <div className="contactR">
                <div>
                  <h3 className="contactTitle">{contactStatus}</h3>
                </div>
                <div className="contactTitle">
                    <MuiThemeProvider>
                    <form>
                      <TextField
                        name="name"
                        floatingLabelText="Name"
                        value={this.state.name}
                        fullWidth={true}
                        onChange= {(event) => this.updateField('name', event.target.value)}
                        errorText={this.state.nameError}
                        floatingLabelFixed
                      />
                      <br />
                      <TextField
                        name="email"
                        floatingLabelText="Email"
                        value={this.state.email}
                        fullWidth={true}
                        onChange= {(event) => this.updateField('email', event.target.value)}
                        errorText={this.state.emailError}
                        floatingLabelFixed
                      />
                      <br />
                      <TextField
                        name="subject"
                        floatingLabelText="Subject"
                        value={this.state.subject}
                        fullWidth={true}
                        onChange= {(event) => this.updateField('subject', event.target.value)}
                        errorText={this.state.usernameError}
                        floatingLabelFixed
                      />
                      <br />
                      <TextField
                        name="message"
                        floatingLabelText="Message"
                        value={this.state.message}
                        multiLine={true}
                        style={{textAlign: 'left'}}
                        rows={1}
                        rowsMax={8}
                        fullWidth={true}
                        onChange= {(event) => this.updateField('message', event.target.value)}
                        errorText={this.state.messageError}
                        floatingLabelFixed
                      />
                      <br />
                      <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
                    </form>
                    </MuiThemeProvider>

                </div>
            </div>  
            </div>  
        <div className="contactBlock2">
        </div>
        <hr/>
        </div>


      
      </div>
      </div>
    );
  }
}





export default ContactForm
