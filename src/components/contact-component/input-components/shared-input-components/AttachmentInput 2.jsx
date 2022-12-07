import React from 'react'

const AttachmentInput = ({setAttachment}) => {
  return (
    <input type="file" name="attachment-input" id="attachment-input" onChange={(e) => setAttachment(e.target.files[0])} />
  )
}

export default AttachmentInput