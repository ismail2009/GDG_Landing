import React, { Component } from 'react';
import Register from '../../elements/Form';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-125030175-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class RegistrationForm extends Component {
     state = {
       firstName: '',
       lastName: '',
       phone: '',
       age: 0,
       city: '',
       gender: '',
       reservation_date: '',
       hour: '',
       why: '',
       valid: {
         firstName: true,
         lastName: true,
         phone: true,
         age: true,
         why: true,
       },
       touched: {
         firstName: false,
         lastName: false,
         phone: false,
         age: false,
         why: false,
       },
     };

    rexExpMap = {
      firstName: /^[\u0600-\u06FF]+$/,
      lastName: /^[\u0600-\u06FF]+$/,
      why: /^[\u0600-\u06FF]+$/,
      gender: /^(male | female)$/,
      reservation_date: /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
      hour: /^(1[0-2]|0?[1-9]):([0-5]?[0-9])(●?[AP]M)?$/,
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

    validate = (firstName, lastName, phone, age, city) => ({
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
      phone: phone.length === 0,
      age: age.length === 0,
      city: city.length === 0,
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

    handleSubmit = () => {
      const { valid } = this.state;
      const {
        firstName,
        lastName,
        phone,
        age,
        city,
        gender,
        reservation_date,
        hour,
        why,
      } = this.state;
      const formFilled = !(firstName === '' || lastName === '' || phone === '' || age === '' || city === '' );
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
          why: true,
          city: true,
        },
      });
      const data = {
        firstname: firstName,
        lastname: lastName,
        gender,
        phone,
        age,
        city,
        reservation_date,
        hour,
        why,
      };
          fetch('https://thawing-caverns-41616.herokuapp.com/registerpatient', {
             method: 'post',
             body: JSON.stringify(data),
             headers: {
           "Content-Type": "application/json",       },
           }).then(response => response.json()).then(() => {console.log("sdfsdfsdf")}).catch((err) => {console.log(err);});
      ReactGA.ga('send', 'event', 'Finish Register', 'As Patient', 'success');
    }

    toggleModal= () => {
      this.setState(prevState => ({
        modalisOpen: !prevState.modalisOpen,
      }));
    }

    render() {
      const {
        firstName, lastName, phone, age,city
      } = this.state;
      const errors = this.validate(firstName, lastName, phone, age, city);
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
                المدينة
                <Register.Input
                  placeholder="المدينة"
                  type="text"
                  value={city}
                  name="city"
                  className={shouldMarkError('city') ? 'error' : ''}
                  onChange={e => this.handleChange(e, 'city')}
                />
              </Register.Label>
              <Register.RequiredFeild className="required-field" required={this.requiredStyle('العمر')}>{this.errorMessages('age')}</Register.RequiredFeild>
            </div>

            <div className="form_item">
              <Register.Label>
                سبب الزيارة
                <textarea
                  placeholder="سبب الزيارة"
                  name="why"
                  onChange={e => this.handleChange(e, 'why')}
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
                    name="reservation_date"
                    onChange={e => this.handleChange(e, 'reservation_date')}
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
                    name="hour"
                    onChange={e => this.handleChange(e, 'hour')}
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
                  name="gender"
                  value="male"
                  onChange={e => this.handleChange(e, 'gender')}
                />
                ذكر
              </Register.Label>
            </div>

            <div className="form_item">
              <Register.Label className="radio">

                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={e => this.handleChange(e, 'gender')}
                />
              أنثى
              </Register.Label>
            </div>

            <div className="sb-btn">
              <button type="button" onClick={this.handleSubmit}>سجل و احجز موعد</button>
            </div>
          </form>
        </Register>
      );
    }
}


export default RegistrationForm;
