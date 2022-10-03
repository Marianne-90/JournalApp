


export const fileUpLoad = async( file ) => {

  if(!file) throw new Error('there is no file')
  
  const cloudUrl = 'https://api.cloudinary.com/v1_1/ddtywbvqf/upload';
  const formData = new FormData();
  formData.append('upload_preset','react-journal');
  formData.append('file', file );
  
  try {

    const resp = await fetch( cloudUrl, {
      method:'POST',
      body: formData
    });

    console.log(resp);
    if( !resp.ok )throw new Error('there was an error uploading de image');

    const cloudResp = await resp.json();
    console.log({ cloudResp })
    return cloudResp.secure_url;
    
  } catch(error) {
    console.log(error)
    throw  new Error ( error.message );
  }
  
}