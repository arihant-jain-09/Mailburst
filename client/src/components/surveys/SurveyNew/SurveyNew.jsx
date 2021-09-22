import React,{useState} from 'react'
import SurveyForm from '../surveyForm/surveyForm'
import SurveyFormReview from '../surveyFormReview/SurveyFormReview';
import { reduxForm } from 'redux-form';
//Survey New shows SurveyForm and SurveyReview
const SurveyNew = () => {
    const [showFormReview,setShowFormReview]=useState(false);
    
    return (
        <>
        {showFormReview ? <SurveyFormReview onCancel={()=>{
            setShowFormReview(false);
        }}/> : <SurveyForm onSurveySubmit={()=>{
            setShowFormReview(true);
        }}/>}
        </>
    )
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
