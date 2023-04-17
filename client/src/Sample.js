// import React, { Component } from 'react'
// //import {Buffer} from 'buffer';
// //import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
// //import getWeb3 from './utils/getWeb3'
// import ipfs from './ipfs'

// var fileBuffer

// class Sample extends Component {
  
//   constructor(props) {
//     super(props)

//     this.state = {
//       // ipfsHash: '',
//       // web3: null,
//       // buffer: null,
//       // account: null

//       ipfsHash:'',
//       storageValue:0,
//       web3:null,
//       buffer:null
//     }
//     this.captureFile = this.captureFile.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
  

//   // componentWillMount() {
//   //   // Get network provider and web3 instance.
//   //   // See utils/getWeb3 for more info.

//   //   getWeb3
//   //   .then(results => {
//   //     this.setState({
//   //       web3: results.web3
//   //     })
 
//   //     // Instantiate contract once web3 provided.
//   //     this.instantiateContract()
//   //   })
//   //   .catch(() => {
//   //     console.log('Error finding web3.')
//   //   })
//   // }

//   // instantiateContract() {
//   //   /*
//   //    * SMART CONTRACT EXAMPLE
//   //    *
//   //    * Normally these functions would be called in the context of a
//   //    * state management library, but for convenience I've placed them here.
//   //    */

//   //   const contract = require('truffle-contract')
//   //   const simpleStorage = contract(SimpleStorageContract)
//   //   simpleStorage.setProvider(this.state.web3.currentProvider)

//   //   var simpleStorageInstance

//   //   // Get accounts.
//   //   // this.state.web3.eth.getAccounts((error, accounts) => {
//   //   //   simpleStorage.deployed().then((instance) => {
//   //   //     this.simpleStorageInstance = instance
//   //   //     this.setState({ account: accounts[0] })
//   //   //     // Get the value from the contract to prove it worked.
//   //   //     return this.simpleStorageInstance.get.call(accounts[0])
//   //   //   }).then((ipfsHash) => {
//   //   //     // Update state with the result.
//   //   //     return this.setState({ ipfsHash })
//   //   //   })
//   //   // })
//   // }

//   captureFile(event) {
//     var fileBuffer

//     event.preventDefault()
//     const file = event.target.files[0]
//     const reader = new window.FileReader()
//     reader.readAsArrayBuffer(file)
   
//     // reader.onloadend = () => {

//     //   this.setState({ buffer: Buffer(reader.result) })
//     //   console.log('buffer', this.state.buffer)
//     // }

//     // reader.onload=function(){
//     //   var arrayBuffer=reader.result
//     //   var bytes=new Uint8Array(arrayBuffer)
//     //   console.log(bytes)
//     // }
//     reader.onload=function() {
//       var arrayBuffer=reader.result
//       fileBuffer=new Uint8Array(arrayBuffer)
//       console.log("Buffer:",fileBuffer)
//       ipfsUpload();
//         function ipfsUpload()
//       {
//         console.log("Uploading...");
//         ipfs.add(fileBuffer, (error, result) => {
//           if (error || !result) {
//             console.log("Error!");
//           }
//           else {
//             console.log("Success!");
//           }

//         });
//       }     
//     }
//   }
// //   onSubmit(event) {
// //     event.preventDefault()
// //   //ipfs.files.add(this.state.buffer, (error, result) => {
// //    ipfs.add(fileBuffer, (error, result) => {
// //        if(error) {
// //        console.log('error')
// //    }
// //    else{
// //      //this.simpleStorageInstance.set(result[0].hash, { from: this.state.account }).then((r) => {
// //       console.log('submitting')
// //         this.setState({ ipfsHash: result[0].hash })
// //        console.log('ipfsHash', this.state.ipfsHash)
// //    }
// //      })
// //   //})
// //  }


//   // onSubmit(event) {
//   //    event.preventDefault()
//   //  //ipfs.files.add(this.state.buffer, (error, result) => {
//   //   ipfs.add(this.state.bytes, (error, result) => {
//   //       if(error) {
//   //       console.log(error)
//   //       return true 
//   //   }
//   //     //this.simpleStorageInstance.set(result[0].hash, { from: this.state.account }).then((r) => {
//   //      console.log('submitting')
//   //        this.setState({ ipfsHash: result[0].hash })
//   //       console.log('ipfsHash', this.state.ipfsHash)
//   //     })
//   //  //})
//   // }

// //  

// onSubmit(event) {
//   event.preventDefault()
//   //ipfs.add(fileBuffer).then(result=>{
//     ipfs.add(fileBuffer=>{
//       if(error){
//         console.log(error)
//       }
//     else{
//       console.log("success")
//     }
//   });
  

  
// //   })
// }

  



//   render() {
//     return (
//               <>

//               <h1>Your Image</h1>
//               <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
//              {/* <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/>*/}
//               <img src='' alt=''/>
//               <h2>Upload Image</h2>
//               <form onSubmit={this.onSubmit} >
//                 <input type='file' onChange={this.captureFile} />
//                 <input type='submit' />
//               </form>
//               </>

//     );
//   }
// }

// export default Sample