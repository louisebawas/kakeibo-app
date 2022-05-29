/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import styled from 'styled-components';
import { FormikProps } from 'formik';
import { get } from 'lodash';

import { Palette } from '../constants';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<Values = any> = {
  label: string;
  type: string;
  form: FormikProps<Values>;
  name: string;
};

type StyledInputProps = {
  invalid?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${ Palette.dark };
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }

  .form-feedback {
    color: red;
    font-size: 0.75rem;
    font-weight: 300;
    margin-top: 0.25rem;
    padding-left: 0.5rem;

    i {
      margin-right: 0.5rem;
    }
  }
`;

const Input = styled.input`
  background-color: ${ (props: StyledInputProps) => (props.invalid ? '#f5e9e9' : Palette.gray) };
  color: ${ (props: StyledInputProps) => (props.invalid ? '#b00404' : Palette.dark) };
  border: 0;
  border-radius: 4px;
  padding: 0 1rem;
  height: 40px;
  min-width: 350px;
`;

const FormGroupInput = (props: Props): React.ReactElement => {
  const dirty = get(props.form.touched, props.name, false);
  const value = get(props.form.values, props.name);
  const invalid = dirty && get(props.form.errors, props.name, false);

  return (
    <Wrapper>
      <label htmlFor={ `form-${ props.name }` }>{ props.label }</label>
      <Input
        id={ `form-${ props.name }` }
        invalid={ invalid as boolean }
        name={ props.name }
        type={ props.type }
        onChange={ props.form.handleChange }
        value={ value }
      />

      <div className="form-feedback">
        { invalid && (
          <>
            <i className="fa-solid fa-circle-exclamation" />
            { get(props.form.errors, props.name) }
          </>
        ) }
      </div>
    </Wrapper>
  );
};

export default FormGroupInput;
