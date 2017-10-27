import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Stateless component / Functional component
const Field = (props) => (
  <div>
  {/*}
    <label>{props.label}</label>
    */}
    <input
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
    />
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};


class Button extends Component {
  // Info on React PropTypes:
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      subject: PropTypes.string,
      message: PropTypes.string
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.validateData = this.validateData.bind(this);
  }

  validateData(event) {
    if (this.props.formValues.name.replace(/ /g,'') == ""){
      console.log("no name")
      this.setState({ errors: {name: true} });
    }
      console.log('Form Values', this.props.formValues.name);
      console.log('Form Values', this.props.formValues);
      this.setState({ isClicked: true });
  }


  render() {
    return (
      <button
        disabled={this.state.isClicked}
        onClick={this.validateData}
      >
        Contact Us
      </button>
    );
  }
}











class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name:"",
      email:"",
      subject:"",
      message:"",
      errors:{}
    }
    this.updateField = this.updateField.bind(this);
  }

  updateField (field, value) {
    this.setState({ [field]: value});
  }

  render() {
    var errors = this.state.errors || {};
    return (
        React.createElement('div', {className: 'container'},
        React.createElement('div', {className: 'content-contact'},

          React.createElement('form', {className: 'ContactForm'},
            React.createElement(Field, {
              type: 'text',
              className: errors.name && 'ContactForm-error',
              placeholder: 'Name (required)',
              label: 'Name (required)',
              value: this.state.name,
              onChange:(event) => this.updateField('name', event.target.value),
            }),
            React.createElement(Field, {
              type: 'email',
              className: errors.email && 'ContactForm-error',
              placeholder: 'Email (required)',
              label: 'Email (required)',
              value: this.state.email,
              onChange: (event) => this.updateField('email', event.target.value),
            }),
            React.createElement(Field, {
              type: 'subject',
              className: errors.subject && 'ContactForm-error',
              placeholder: 'Subject',
              label: 'Subject',
              value: this.state.subject,
              onChange: (event) => this.updateField('subject', event.target.value),
            }),
            React.createElement(Field, {
              placeholder: 'Message',
              className: errors.message && 'ContactForm-error',
              label: 'Message',
              value: this.state.message,
              textarea: true,
              onChange: (event) => this.updateField('message', event.target.value),
            }),
            React.createElement(Button, {type: 'submit', formValues:this.state, email:"blalhi.com"}, "Send Message")
          )
        )
        )
    )
  }
};





export default ContactForm
