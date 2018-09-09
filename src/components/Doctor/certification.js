import React from 'react';

const Certifiction = (props) => {
  return (
        <div className="form_item">
          <DocLabel>
      ملف الشهادة
            <div className="form_item_input">
              <Register.Input
                type="file"
                name="certification"
                required
              />
            </div>
          </DocLabel>
          <Register.RequiredFeild className="required-field" required={this.requiredStyle('certification')}>{this.errorMessages('email')}</Register.RequiredFeild>

        </div>
        <div className="form_item">
          <DocLabel>
      الدرجة العلمية
            <Register.Input
              placeholder="المعدل"
              type="text"
              name="degree"
              required
            />
          </DocLabel>
          <Register.RequiredFeild className="required-field" required={this.requiredStyle('degree')}>{this.errorMessages('email')}</Register.RequiredFeild>
        </div>
        <div className="form_item">
          <DocLabel>
      سنة التخرج
            <div className="form_item_input">
              <Register.Input
                type="date"
                name="date"
                required
              />
            </div>
          </DocLabel>
          <Register.RequiredFeild className="required-field" required={this.requiredStyle('date')}>{this.errorMessages('email')}</Register.RequiredFeild>
        </div>
        <div className="form_item">
          <DocLabel>
      اسم الجامعة
            <Register.Input
              placeholder="اسم الجامعة"
              type="text"
              name="university"
              required
            />
          </DocLabel>
          <Register.RequiredFeild className="required-field" required={this.requiredStyle('university')}>{this.errorMessages('email')}</Register.RequiredFeild>
        </div>
  )
}
