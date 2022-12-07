import React from 'react';
import AttachmentInput from '../shared-input-components/AttachmentInput';
import FeedbackBodyTextarea from '../shared-input-components/FeedbackBodyTextarea';
import UserInfoInputs from '../shared-input-components/UserInfoInputs';
import SubmitButton from '../shared-input-components/SubmitButton';

const ImprovementInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, feedbackBody, setFeedbackBody, setAttachment, handleSubmit }) => {
  return (
    <div className='contact-form-container'>
      <form onSubmit={handleSubmit} className='improvements-form contact-form'>
        <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} />
        <FeedbackBodyTextarea id='improvements-textarea' placeholder='Enter details about your proposed improvements to the engineering center' setFeedbackBody={setFeedbackBody} value={feedbackBody} />
        <AttachmentInput setAttachment={setAttachment} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default ImprovementInputs;
