import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Register from '../elements/Form';
import Wrapper from '../elements/Wrapper';
import Container from '../elements/Container';
import DocLabel from './FormDoc';
ReactGA.initialize('UA-125030175-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class RegistrationForm extends Component {
     state = {
       firstName: '',
       lastName: '',
       email: '',
       phone: '',
       age: '',
       clinicName: '',
       city: '',
       gender: '',
       certification: '',
       degree: '',
       graduateYear:'',
       university: '',
       valid: {
         firstName: true,
         lastName: true,
         email: true,
         phone: true,
         age: true,
         clinicName: true,
         city: true,
         degree: true,
         graduateYear: true,
         university: true,
       },
       touched: {
         firstName: false,
         lastName: false,
         email: false,
         phone: false,
         age: false,
         clinicName: false,
         city: false,
         degree: false,
         graduateYear: false,
         university: false,
       },
       certif: [],
       count: 1,
       registerSuccess: false,
       submitForm: false,
     };

    rexExpMap = {
      firstName: /^[\u0600-\u06FF]+$/,
      lastName: /^[\u0600-\u06FF]+$/,
      clinicName: /^[\u0600-\u06FF]+$/,
      gender: /^(male | female)$/,
      phone: /(05).(9[987542] || 6[987542]).(\d){6}/,
      city: /^[\u0600-\u06FF]+$/,
      age: /\d/,
      degree: /\d/,
      graduateYear: /^((19|20)?[0-9]{2})*$/,
      university: /^[\u0600-\u06FF]+$/,
      email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    };

    handleChange = (e, name) => {
      const inputName = this.state;
      if(name !== 'certification' && name !== 'phone' ) {
      this.setState({ [e.target.name]: e.target.value }, () => {
          this.checkData(this.rexExpMap[name], inputName[name], inputName.valid[name], name);
      });
    } else {
      this.setState({ [e.target.name]: e.target.files[0] })
      }
    }

    checkData = (regExp, stateName, stateValid, name) => {
      const { valid } = this.state;
      const { touched } = this.state;
      this.setState({
        touched: { ...touched, [name]: true },
      });
      let bool = regExp.test(stateName);
      if (bool) {
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
      email: email.length === 0,
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
        firstName, lastName, phone, email, age, clinicName,
        city,
        gender,
        certification,
        degree,
        graduateYear,
        university,
      } = this.state;
      const formFilled = !(firstName === '' || lastName === '' || email === '' || phone === '' || age === '');
      const formInvalid = Object.keys(valid).some(x => !valid[x]);
      const formHasErrors = !formFilled || formInvalid;

      this.setState({
        touched: {
          firstName: true,
          lastName: true,
          phone: true,
          age: true,
          email: true,
        },
      });
      const Data = {
          firstname:firstName,
          lastname:lastName,
          email,
          phone,
          age,
          clinicName,
          city,
          gender,
          degree,
          graduateYear,
          university,  }

          fetch('https://thawing-caverns-41616.herokuapp.com/registerdoctor', {
             method: 'post',
             body: JSON.stringify(Data),
             headers: {
          "Content-Type": "application/json"
                },
           }).then(response => response.json()).then(() => {
             this.setState({
               submitForm: true,
               registerSuccess: true
             });
           } ).catch((err) => { this.setState({
              submitForm: true,
              registerSuccess: false
            });
          });
      ReactGA.ga('send', 'event', 'doctor register', 'As Doctor', 'success');
    }

    addCertification = () => {
      const { count } = this.state;
      let countCopy = count;
      let NewCount = countCopy++;
      const { certif } = this.state;
      let newCertif = certif.slice();
      newCertif.push({ key: count, name: count });
      this.setState({
        certif: newCertif,
      })
      this.setState({
        count: NewCount,
      })
    }

    render() {
      const {
        firstName, lastName, phone, email, age, certif
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
                  <DocLabel>
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
                  </DocLabel>
                  <Register.RequiredFeild required={this.requiredStyle('firstName')}>{this.errorMessages('الاسم الاول')}</Register.RequiredFeild>
                </div>

                <div className="form_item">
                  <DocLabel>
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
                  </DocLabel>

                  <Register.RequiredFeild required={this.requiredStyle('lastName')}>{this.errorMessages('الاسم الاخير')}</Register.RequiredFeild>
                </div>
                <div className="form_item">
                  <DocLabel>
                العمر
                    <Register.Input
                      placeholder="العمر"
                      type="number"
                      name="age"
                      onChange={e => this.handleChange(e, 'age')}
                      required
                    />
                  </DocLabel>
                </div>

                <div className="form_item">
                  <DocLabel>
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
                  </DocLabel>

                  <Register.RequiredFeild required={this.requiredStyle('email')}>{this.errorMessages('الايميل')}</Register.RequiredFeild>
                </div>
                <div className="form_item">
                  <DocLabel>
                رقم الجوال
                    <Register.Input
                      placeholder="رقم الجوال"
                      type="text"
                      name="phone"
                      required
                    />
                  </DocLabel>
                  <Register.RequiredFeild className="required-field" required={this.requiredStyle('phone')}>{this.errorMessages('رقم الجوال')}</Register.RequiredFeild>

                </div>

                <div className="form_item">
                  <DocLabel>
                اسم العيادة
                    <Register.Input
                      placeholder="اسم العيادة"
                      type="text"
                      name="clinicName"
                      onChange={e => this.handleChange(e, 'clinicName')}
                      required
                    />
                  </DocLabel>
                </div>
                <div className="form_item">
                  <DocLabel>
                المدينة
                    <Register.Input
                      placeholder="المدينة"
                      type="text"
                      name="city"
                      onChange={e => this.handleChange(e, 'city')}
                      required
                    />
                  </DocLabel>
                </div>


                <div className="form_item" id="radio">
                  الجنس
                  <div className="col-s2">
                  <DocLabel className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={e => this.handleChange(e, 'gender')}
                      required
                    />
                ذكر
                  </DocLabel>
                  <DocLabel className="radio">

                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={e => this.handleChange(e, 'gender')}
                    />
              أنثى
                  </DocLabel>
                </div>
              </div>

                <div className="form_doc_certification">
                  <div className="form_item">
                    <DocLabel>
                      الدرجة العلمية
                      <Register.Input
                        placeholder="الدرجة العلمية"
                        type="text"
                        name="degree"
                        onChange={e => this.handleChange(e, 'degree')}
                        required
                      />
                    </DocLabel>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('degree')}>{this.errorMessages('الدرجة العلمية')}</Register.RequiredFeild>
                  </div>
                  <div className="form_item">
                    <DocLabel>
                سنة التخرج
                        <Register.Input
                          type="number"
                          placeholder="YYYY"
                          name="graduateYear"
                          onChange={e => this.handleChange(e, 'graduateYear')}
                          required
                        />

                    </DocLabel>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('date')}>{this.errorMessages('سنة التخرج')}</Register.RequiredFeild>
                  </div>
                  <div className="form_item">
                    <DocLabel>
                اسم الجامعة
                      <Register.Input
                        placeholder="اسم الجامعة"
                        type="text"
                        name="university"
                        onChange={e => this.handleChange(e, 'university')}
                        required
                      />
                    </DocLabel>
                    <Register.RequiredFeild className="required-field" required={this.requiredStyle('university')}>{this.errorMessages('اسم الجامعة')}</Register.RequiredFeild>
                  </div>
                </div>

                <div className="sb-btn">
                  <button type="button" onClick={this.handleSubmit}>انضم الآن</button>
                </div>
                { this.state.submitForm ? this.state.registerSuccess   ? <div className="form_alert success"> التسجيل ناجح </div> : <div className="form_alert failed">يرجى ادخال البيانات بشكل صحيح</div> : null }
              </form>
            </Register>
          </Container>
        </Wrapper>
      );
    }
}


export default RegistrationForm;
