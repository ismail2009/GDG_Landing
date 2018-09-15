import styled from 'styled-components';


const Register = styled.div`
  &.doctor {
    margin-top: 25px;
    width: 100% !important;
    border: none;
    background-color: #4cceff21;
    border-radius: 0;
    form {
      padding: 25px;
      display: flex;
      flex-direction: column;
    .form_item {
      &#radio {
        display:flex;
        justify-content: space-between;
        flex-direction: row;
        width: 20%;
      }
      align-items: flex-start;
      input {
        background-color: #FFFFFF;
          }
        }
    .sb-btn {
      justify-content: flex-start;
          }
        }
      }
  width: 350px;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid rgb(202, 202, 202);
  .form_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
  textarea {
  height: 100px;
  border: 1px solid #e5e5e5;
  padding: 0 25px
  font-size: 15px;
  }
  .form_item_input {
    display: flex;
    justify-content: center
    align-items: center;
    background-color: #ffffff;
    -webkit-appearance: none;
    padding: 0px 25px;
    border: 1px solid #e5e5e5;
    border-radius: 25px;
    height: 48px;
    input {
      width: 100%;
    }
  }
}
.sb-btn {
  display:flex;
  justify-content: center;
  button {
  background-color: #337ab7;
  color: #ffffff;
  width: 251px;
  height: 48px;
  outline: none;
  font-size: 00.8em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  margin-bottom: 15px;
  }
}
  span {
    &.required {
      display: block;
  }
}
@media (max-width: 769px) {
  width: 100%;
  padding: 30px 0 40px 0 ;
  }
}
`;

const Title = styled.div`
  padding-right:20%;
  color: #333;
  font-size: 25px;
  margin: 5px 0 0px;
  text-align: right;
  font-weight: 700;
  align-text: right;
  margin-bottom: 15px;
`;
const Label = styled.label`
  width: 250px;
  color: #333;
  text-align: right;
  display:flex;
  flex-direction: column;
  &.radio {
    display:flex;
    flex-direction: row;
    input {
      margin-left: 15px;
    }
  }

`;
const Note = styled.span`
  display: ${props => (props.helpMessage ? 'none' : 'block')};
  color: #000000;
`;
const RequiredFeild = styled.span`
  display: none;
  color: red;
  font-size: 0.7em;
  color: red;
  width: 50%;
  height: 25px;
  justify-content: center;
  align-items: center;
  ${props => props.required}
`;
const Input = styled.input`
  margin-top: 3px;
  &[type="text"],&[type="number"],&[type="email"] {
    display: block;
    -webkit-appearance: none;
    font-size: 15px;
    padding: 0px 25px;
    height: 48px;
    color: #222;
    background: transparent;
    border: 1px solid #e5e5e5;
    border-radius: 25px;
    text-align: right;
  &.error {
  border-color: red;
  }
  &:focus {
    outline: none;
  }
}
`;
Register.Title = Title;
Register.Note = Note;
Register.RequiredFeild = RequiredFeild;
Register.Input = Input;
Register.Label = Label;

export default Register;
