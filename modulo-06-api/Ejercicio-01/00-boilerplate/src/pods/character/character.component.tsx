import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
    character: Character;
    onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
    const { character, onSave } = props;

    return (
        <Formik onSubmit={onSave} initialValues={character} enableReinitialize={true} validate={formValidation.validateForm}>
{() => (
    <Form className={classes.root}>
      <TextFieldComponent name="name" label="Name" value={character.name}/>
      <TextFieldComponent name="status" label="Status" value={character.status}/>
      <TextFieldComponent name="species" label="Species" value={character.species}/>
      <TextFieldComponent name="type" label="Type" value={character.type}/>
      <TextFieldComponent name="gender" label="Gender" value={character.gender}/>
      <TextFieldComponent  name="originName" label="Origin Name" value={character.origin.name}/>
      <TextFieldComponent name="originLink" label="Origin Link" value={character.origin.link}/>
      <TextFieldComponent name="locationName" label="Location Name" value={character.location.name}/>
      <TextFieldComponent name="locationLink" label="Location Link" value={character.location.link}/>
      <TextFieldComponent name="image" label="Image URL" value={character.image}/>
      <TextFieldComponent name="episode" label="Episode URL" value={character.episode}/>
      <TextFieldComponent name="url" label="Character URL" value={character.url}/>
      <TextFieldComponent name="created" label="Created" value={character.created}/>
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </Form>
  )}
    </Formik>
);
}
