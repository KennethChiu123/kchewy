import React, { Component } from 'react';
import PropTypes from 'prop-types';





class ContactForm extends Component {
  
  propTypes: {
    value: PropTypes.object.isRequired
  }

  onNameChange(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
  }
  
  onEmailChange(e) {
    this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
  }
  
  onDescriptionChange(e) {
    this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
        React.createElement('div', {className: 'container'},
        React.createElement('div', {className: 'content-contact'},

          React.createElement('form', {className: 'ContactForm'},
            React.createElement('input', {
              type: 'text',
              placeholder: 'Name (required)',
              //value: this.props.value.name,
            }),
            React.createElement('input', {
              type: 'email',
              placeholder: 'Email',
              //value: this.props.value.email,
            }),
            React.createElement('input', {
              type: 'subject',
              placeholder: 'Subject',
              //value: this.props.value.subject,
            }),
            React.createElement('textarea', {
              placeholder: 'Description',
              //value: this.props.value.description,
            }),
            React.createElement('button', {type: 'submit'}, "Add Contact")
          )
        )
        )
    )
  }
};





export default ContactForm
