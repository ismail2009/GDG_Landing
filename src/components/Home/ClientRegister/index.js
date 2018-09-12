import React, { Component } from 'react';
import Register from '../../elements/Form';

class RegistrationForm extends Component {
     state = {
       firstName: '',
       lastName: '',
       phone: '',
       age: 0,
       reason: '',
       valid: {
         firstName: true,
         lastName: true,
         phone: true,
         age: true,
       },
       touched: {
         firstName: false,
         lastName: false,
         phone: false,
         age: false,
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

    validate = (firstName, lastName, phone, age) => ({
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      phone: phone.length === 0,
      age: age.length === 0,
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
        firstName, lastName, phone, age,
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
        firstName, lastName, phone, age,
      } = this.state;
      const errors = this.validate(firstName, lastName, phone, age);
      const { touched } = this.state;

      const shouldMarkError = (field) => {
        const hasError = errors[field];
        const shouldShow = touched[field];
        return hasError ? shouldShow : false;
      };

      return (
        <Register>
          <Register.Title>انشاء حساب جديد</Register.Title>
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
                رقم الجوال
                <Register.Input
                  placeholder="رقم الجوال"
                  type="text"
                  name="phone"
                  className={shouldMarkError('phone') ? 'error' : ''}
                  onChange={e => this.handleChange(e, 'phone')}
                />
              </Register.Label>
              <Register.RequiredFeild required={this.requiredStyle('phone')}>{this.errorMessages('رقم الجوال')}</Register.RequiredFeild>
            </div>

            <div className="form_item">
              <Register.Label>
                العمر
                <Register.Input
                  placeholder="العمر"
                  type="number"
                  value={age}
                  name="age"
                  className={shouldMarkError('age') ? 'error' : ''}
                  onChange={e => this.handleChange(e, 'age')}
                />
              </Register.Label>
              <Register.RequiredFeild className="required-field" required={this.requiredStyle('العمر')}>{this.errorMessages('age')}</Register.RequiredFeild>
            </div>

            <div className="form_item">
              <Register.Label>
                سبب الزيارة
                <textarea
                  placeholder="سبب الزيارة"
                  name="reason"
                />
              </Register.Label>
              <Register.RequiredFeild className="required-field" required={this.requiredStyle('سبب الزيارة')}>{this.errorMessages('email')}</Register.RequiredFeild>
            </div>

            <div className="form_item">
              <Register.Label>
                التاريخ
                <div className="form_item_input">
                  <Register.Input
                    type="date"
                    name="date"
                  />
                </div>
              </Register.Label>
              <Register.RequiredFeild className="required-field" required={this.requiredStyle('تاريخ الحجز')}>{this.errorMessages('email')}</Register.RequiredFeild>
            </div>

            <div className="form_item">
              <Register.Label>
                الموعد
                <div className="form_item_input">

                  <Register.Input
                    type="time"
                    name="date"
                  />
                </div>
              </Register.Label>
              <Register.RequiredFeild className="required-field" required={this.requiredStyle('تاريخ الحجز')}>{this.errorMessages('email')}</Register.RequiredFeild>
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

            <div className="sb-btn">
              <button type="button" onClick="ga('send', 'event', 'Finish Register', 'As Patient', 'success');">سجل و احجز موعد</button>
            </div>
          </form>
        </Register>
      );
    }
}


export default RegistrationForm;
