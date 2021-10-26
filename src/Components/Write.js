import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from "react-router-dom"
import axios from 'axios'
import "../Styles/Write.css"
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';



function Write() {
let history = useHistory()
let {id} = useParams()
const [schoolrev, setschoolrev] = useState("")



useEffect(() => {
 axios.get(`https://full-stack-api-layti.herokuapp.com/schools/id/${id}`).then((response) => {
  setschoolrev(response.data)
  })
},[])// eslint-disable-line react-hooks/exhaustive-deps




const initalValues = {
  schoolId: id,
  house: 0,
  bar: 0,
  safety: 0,
  overall: 0,
  recommend: "",
  reviews: "",
}

const validationSchema = Yup.object().shape({
  schoolId: Yup.number(id),
  house: Yup.string().required("You have to add a rating"),
  bar: Yup.string().required("You have to add a rating"),
  safety: Yup.string().required("You have to add a rating"),
  overall: Yup.string().required("You have to add a rating"),
  recommend: Yup.string().required("You cannot leave this blank"),
  reviews: Yup.string().required("You have to add text"),
});
const submit = (data) => {
  axios.post("http://localhost:3001/reviews", data).then((response) => {
    history.push(`/schools/${id}`)
    
  });
};

function valuetext(value) {
  return `${value}°C`;
}


 return (<div className="rev">
 <div className="line"></div>
  <div className="reviews">
  Nightlife at {schoolrev.name} 
  </div>
  <div className="questions">
  <Formik
  initialValues={initalValues}
  onSubmit={submit}
  validationSchema={validationSchema}
  >
  {({ setFieldValue, values }) => (
  <Form>
    <h4>Rate the house parties out of 5</h4>
    <Box sx={{ width: 300 }}>
      <Slider
        className="slider"
        style={{color: '#8c52ff'}}
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        name="house"
        onChange={(event, value) => setFieldValue('house', value)}
      />
    </Box>
    <h4>Rate the bars out of 5</h4>
    <Box sx={{ width: 300 }}>
      <Slider
        className="slider"
        style={{color: '#8c52ff'}}
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        name="bar"
        onChange={(event, value) => setFieldValue('bar', value)}
      />
    </Box>
    <ErrorMessage className="err" name="bar" component="span" />
    <h4>Rate how safe you feel on a typical night out of 5</h4>
    <Box sx={{ width: 300 }}>
      <Slider
        className="slider"
        style={{color: '#8c52ff'}}
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        name="safety"
        onChange={(event, value) => setFieldValue('safety', value)}
      />
    </Box>
    <ErrorMessage className="err" name="bar" component="span" />
    <h4>Rate the <span className="colorchange">overall</span> nightlife scene out of 5</h4>
    <Box sx={{ width: 300 }}>
      <Slider
        className="slider"
        style={{color: '#8c52ff'}}
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        name="overall"
        onChange={(event, value) => setFieldValue('overall', value)}
      />
    </Box>
    <ErrorMessage className="err" name="bar" component="span" />
    <h4>Would you recommend the nightlife to incoming students</h4>
   <div className="options">
   <div className="options1">
   <div>Yes</div>
   <Field name="recommend" type="radio" value="Yes" 
     as={Radio}
   />
   </div>
   <div className="options1">
   <div>No</div>
   <Field name="recommend" type="radio" value="No" 
   as={Radio}
   />
   </div>
   </div>
   <ErrorMessage className="err" name="recommend" component="span" />
    <h4>Leave a review</h4>
    <div>Current and prospective students want to hear your taughts!</div>
    <Field
    className="box"
    name="reviews"
    placeholder="Share your experience"
    />
   <button type="submit" className="revbtn">Submit</button>
   <ErrorMessage className="err" name="reviews" component="span" />
   </Form>
  )}
   </Formik>
  </div>
  </div>
 )
}

export default Write
