import React from 'react';
import Register from '../elements/Form';
import DocLabel from './FormDoc';

const Certifiction = ({ name }) => {
  return (
    <div >
        <div className="form_item">
          <DocLabel>
      الدرجة العلمية
            <Register.Input
              placeholder="المعدل"
              type="text"
              name={`degree${name}`}
              required
            />
          </DocLabel>
        </div>
        <div className="form_item">
          <DocLabel>
      سنة التخرج
            <div className="form_item_input">
              <Register.Input
                type="date"
                name={`date${name}`}
                required
              />
            </div>
          </DocLabel>
        </div>
        <div className="form_item">
          <DocLabel>
      اسم الجامعة
            <Register.Input
              placeholder="اسم الجامعة"
              type="text"
              name={`university${name}`}
              required
            />
          </DocLabel>
        </div>
      </div>
  )
}

export default Certifiction;
