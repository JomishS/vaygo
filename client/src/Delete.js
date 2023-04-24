import React, {useState} from 'react'

export function Delete()
{
    const[image,setImage]=useState('')
const[imgLink,setImgLink]=useState('')
    const data=new FormData()
    
    const submitImage=()=>{
        //const data=new FormData()
        data.append('file',image)
        data.append('upload_preset','project')
        data.append('cloud_name','dxizvwfqg')

        fetch('https://api.cloudinary.com/v1_1/dxizvwfqg/image/upload',{
            method:'post',
            body:data
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            console.log(data.url)
            setImgLink(data.url)
        }).catch((err)=>{
            console.log(err)
        })       
    }
        return (
                  <>
                  {/* <h1>Your Image</h1>
                  <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
                 {/* <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/>*/}
                  {/* <img src='' alt=''/>
                  <h2>Upload Image</h2>
                  <form onSubmit={this.onSubmit} >
                    <input type='file' onChange={this.captureFile} />
                    <input type='submit' />
                  </form> */} 

                    <div>
                        <div>
                            <input type='file' onChange={(e)=>{setImage(e.target.files[0])}}/>
                           <img src={imgLink} alt=''/>
                            

                            <button onClick={submitImage}>upload image</button>
                    
                            
                        </div>
                    </div>
                  </>
    
        );
}