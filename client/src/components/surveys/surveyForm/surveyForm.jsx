import React from 'react'
import { Link } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import SurveyField from '../surveyField/surveyField';
import { validateEmail } from '../../../utils/validateEmail';
import formFields from '../formField'
const SurveyForm = (props) => {
  return (
    <>
      <div>
        <form onSubmit={props.handleSubmit(()=>props.onSurveySubmit())}>
          {formFields.map(({name,label})=><Field key={name} type="text" name={name} label={label} component={SurveyField}/>)}
          {/* <Field type="text" name="title" label="Survey Title" component={SurveyField}/> */}
          <Link to="/surveys" className="red btn-flat white-text">CANCEL</Link>
          <button type="submit" className="teal btn-flat right white-text">Next <i className="material-icons right">done</i></button>
        </form>
      </div>
    </>
  )

}

const validate=(values)=>{
  const errors={};

  errors.recipients= validateEmail(values.recipients || '');
  formFields.forEach(({name}) => {
    if(!values[name]){
      errors[name]='You must provide a value';
    }
  });
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
