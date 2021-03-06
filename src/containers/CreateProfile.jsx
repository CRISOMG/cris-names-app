/* eslint-disable react/prop-types */
import React from 'react';

import ProfileForm from '../components/ProfileForm';

const CreateProfile = (props) => (
  <section className='create-profile'>
    <ProfileForm redirect={() => props.history.push('/')} />
  </section>
);

export default CreateProfile;
