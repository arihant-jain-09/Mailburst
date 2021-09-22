import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { submitSurvey } from '../../../redux/survey/survey.actions';
import formFields from '../formField'
import {useHistory} from 'react-router-dom';
const SurveyFormReview = ({onCancel}) => {
  const form=useSelector(state => state.form.surveyForm.values);
  const dispatch = useDispatch();
  const history=useHistory();
  return (
    <>
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        {formFields.map(({label,name})=>{
          return <div key={name}>
            <label>{label}</label>
          <div>{form[name]}</div></div>
        })} 
        </div> 
      <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>Back</button>
      <button className="green white-text btn-flat right" onClick={()=>dispatch(submitSurvey({form,history}))}>Send Survey <i className="material-icons right">email</i></button>
    </div>
    </>
  )
}

export default SurveyFormReview
