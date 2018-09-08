import React, { Component } from 'react';
import Register from '../elements/Form';
import Wrapper from '../elements/Wrapper';
import Container from '../elements/Container';

class RegistrationForm extends Component {
     state = {
       firstName: '',
       lastName: '',
       email: '',
       phone: '',
       reason: '',
       valid: {
         firstName: true,
         lastName: true,
         email: true,
         phone: true,
       },
       touched: {
         firstName: false,
         lastName: false,
         email: false,
         phone: false,
       },
     };

    rexExpMap = {
      firstName: /^[\u0600-\u06FF]+$/,
      lastName: /^[\u0600-\u06FF]+$/,
      phone: /05(9[987542]|6[9872])\d{6}$/,
      city: /^[\u0600-\u06FF]+$/,
      age: /\d/,
      email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    };

    handleChange = (e, name) => {
      const inputName = this.state;
      this.setState({ [e.target.name]: e.target.value }, () => {
        this.checkData(this.rexExpMap[name], inputName[name], inputName.valid[name], name);
      });
    }

    checkData = (regExp, stateName, stateValid, name) => {
      const { valid } = this.state;
      const { touched } = this.state;
      this.setState({
        touched: { ...touched, [name]: true },
      });
      if (regExp.test(stateName)) {
        this.setState({
          valid: { ...valid, [name]: true },
        });
      } else {
        this.setState({
          valid: { ...valid, [name]: false },
        });
      }
    }

    validate = (firstName, lastName, email, phone, age) => ({
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      phone: phone.length === 0,
    })

    requiredStyle = (name) => {
      const inputName = this.state;
      const { valid } = this.state;
      const { touched } = this.state;
      const show = (inputName[name] === '' || !valid[name]) && touched[name];
      return { display: show ? 'flex' : 'none' };
    }

    errorMessages = (name) => {
      const inputName = this.state;
      const { valid } = this.state;
      const requiredStr = 'مطلوب تعبئة الحقل';
      const invalidStr = `ادخل ${name} بشكل صحيح `;
      return !valid[name] && inputName[name] !== '' ? invalidStr : requiredStr;
    }

    checkOnSubmit = () => {
      const { valid } = this.state;
      const {
        firstName, lastName, email, phone, age,
      } = this.state;
      const formFilled = !(firstName === '' || lastName === '' || phone === '' || age === '');
      const formInvalid = Object.keys(valid).some(x => !valid[x]);
      const formHasErrors = !formFilled || formInvalid;

      if (!formHasErrors) {
        this.toggleModal();
      }
      this.setState({
        touched: {
          firstName: true,
          lastName: true,
          phone: true,
          age: true,
        },
      });
    }

    toggleModal= () => {
      this.setState(prevState => ({
        modalisOpen: !prevState.modalisOpen,
      }));
    }

    render() {
      const {
        firstName, lastName, phone, email, age,
      } = this.state;
      const errors = this.validate(firstName, lastName, email, phone, age);
      const { touched } = this.state;

      const shouldMarkError = (field) => {
        const hasError = errors[field];
        const shouldShow = touched[field];
        return hasError ? shouldShow : false;
      };

      return (
        <Wrapper>
          <Container>
            <Register className="doctor">
              <form>
                <div className="form_item">
                  <Register.Label>
                الاسم الاول
                    <Register.Input
                      placeholder="الاسم الأول"
                      type="text"
                      value={firstName}
                      name="firstName"
                      id="firstName"
                      className={shouldMarkError('firstName') ? 'error' : ''}
                      onChange={e => this.handleChange(e, 'firstName')}
                    />
                  </Register.Label>
                  <Register.RequiredFeild required={this.requiredStyle('firstName')}>{this.errorMessages('الاسم الاول')}</Register.RequiredFeild>
                </div>

                <div className="form_item">
                  <Register.Label>
                الاسم الأخير
                    <Register.Input
                      placeholder="الاسم الأخير"
                      type="text"
                      value={lastName}
                      name="lastName"
                      id="lastName"
                      className={shouldMarkError('lastName') ? 'error' : ''}
                      onChange={e => this.handleChange(e, 'lastName')}
                    />
                  </Register.Label>

                  <Register.RequiredFeild required={this.requiredStyle('lastName')}>{this.errorMessages('الاسم الاخير')}</Register.RequiredFeild>
                </div>
                <div className="form_item">
                  <Register.Label>
                العمر
                    <Register.Input
                      placeholder="العمر"
                      type="number"
                      name="age"
                      required
                    />
                  </Register.Label>
                </div>

                <div className="form_item">
                  <Register.Label>
                الايميل
                    <Register.Input
                      placeholder="الايميل"
                      type="email"
                      value={email}
                      name="email"
                      id="email"
                      className={shouldMarkError('email') ? 'error' : ''}
                      onChange={e => this.handleChange(e, 'email')}
                    />
                  </Register.Label>

                  <Register.RequiredFeild required={this.requiredStyle('lastName')}>{this.errorMessages('الايميل')}</Register.RequiredFeild>
                </div>
                <div className="form_item">
                  <Register.Label>
                رقم الجوال
                    <Register.Input
                      placeholder="رقم الجوال"
                      type="text"
                      name="phone"
                      required
                    />
                  </Register.Label>
                  <Register.RequiredFeild className="required-field" required={this.requiredStyle('phone')}>{this.errorMessages('email')}</Register.RequiredFeild>

                </div>

                <div className="form_item">
                  <Register.Label>
                اسم العيادة
                    <Register.Input
                      placeholder="اسم العيادة"
                      type="text"
                      name="clincName"
                      required
                    />
                  </Register.Label>
                </div>
                <div className="form_item">
                  <Register.Label>
                المدينة
                    <Register.Input
                      placeholder="المدينة"
                      type="text"
                      name="city"
                      required
                    />
                  </Register.Label>
                </div>

                <div className="form_item">
                  <Register.Label>
              الجنس
                  </Register.Label>
                </div>

                <div className="form_item">
                  <Register.Label className="radio">
                    <input
                      type="radio"
                      name="sex"
                      value="male"
                      required
                    />
                ذكر
                  </Register.Label>
                </div>
                <div className="form_item">
                  <Register.Label className="radio">

                    <input
                      type="radio"
                      name="sex"
                      value="female"
                    />
              أنثى
                  </Register.Label>
                </div>
                <div className="form_doc_certification">
                  <div className="form_item">
                    <Register.Label>
                ملف الشهادة
                      <div className="form_item_input">
                        <Register.Input
                          type="file"
                          name="certification"
                          required
                        />
                      </div>
                    </Register.Label>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('certification')}>{this.errorMessages('email')}</Register.RequiredFeild>

                  </div>
                  <div className="form_item">
                    <Register.Label>
                الدرجة العلمية
                      <Register.Input
                        placeholder="المعدل"
                        type="text"
                        name="degree"
                        required
                      />
                    </Register.Label>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('degree')}>{this.errorMessages('email')}</Register.RequiredFeild>
                  </div>
                  <div className="form_item">
                    <Register.Label>
                سنة التخرج
                      <div className="form_item_input">
                        <Register.Input
                          type="date"
                          name="date"
                          required
                        />
                      </div>
                    </Register.Label>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('date')}>{this.errorMessages('email')}</Register.RequiredFeild>
                  </div>
                  <div className="form_item">
                    <Register.Label>
                اسم الجامعة
                      <Register.Input
                        placeholder="اسم الجامعة"
                        type="text"
                        name="university"
                        required
                      />
                    </Register.Label>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('university')}>{this.errorMessages('email')}</Register.RequiredFeild>
                  </div>
                </div>
                <div className="sb-btn">
                  <button type="button" onClick={this.checkOnSubmit}>انضم الآن</button>
                </div>
              </form>
            </Register>
          </Container>
        </Wrapper>
      );
    }
}


export default RegistrationForm;
