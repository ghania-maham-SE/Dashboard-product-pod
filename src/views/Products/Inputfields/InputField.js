import React from 'react'
import {FormFeedback, FormGroup, Label, Input } from "reactstrap";
const InputField = (props) => {
  return (
    <FormGroup className="mb-2 mb-sm-0">
    <Label
        htmlFor="exampleEmail"
        className="sm-2">{props.label}</Label>
    <Input
        bsSize="sm"
        type={props.type}
        defaultValue={props.defaultValue}
        name="email"
        id="exampleName"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChangeEvent}
        invalid={props.invalid}
    />
    
   {props.errorMessage && <FormFeedback>{props.errorMessage}</FormFeedback>}
   
</FormGroup>
  )
}

export default InputField