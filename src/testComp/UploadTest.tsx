import React from 'react';

function UploadTest() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(files){
      const file = files[0]
      const formData = new FormData()
      formData.append('file', file.type)
      console.log(formData, 'formData', file)
    }
  }
  return (
    <div style={{margin: 100}}>
      <input type="file" name="myFile" onChange={handleFileChange} />
    </div>
  );
}

export default UploadTest