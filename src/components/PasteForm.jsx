import {useState} from "react";
import Card from "./Card";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import React from 'react'


const PasteForm = () => {
  const [paste, setPaste] = useState('');
	const [delay, setDelay] = useState('');
	const [pasteExpiryTime, setPasteExpiryTime] = useState('');
  const navigate = useNavigate();
	const url= process.env.DATA_API_URL;
  const handleSubmit = (e) => {
	  e.preventDefault();
	  axios.post(`${url}/Paste`, {paste, delay, pasteExpiryTime})
		  .then(res => {
			  console.log(res.data);
			  const pasteId= res.data._id;
			  console.log(pasteId);
			  toast.success('Paste added successfully');
			 navigate(`/paste/${pasteId}`);
		  })
		  .catch(err => {
			  console.log(err);
			  toast.error('Failed to add paste');
			  		  });
  };
  return (
	  <>
	  <div className="container m-auto max-w-6xl py-24">
		  <div className="xl:container container-lg m-auto ">
			  <Card >
				  <textarea className="bg-pink-50 w-full min-h-96 p-4 rounded-lg"
				            value={paste}
				            onChange={(e) => setPaste(e.target.value)}
				            placeholder="Pasted content goes here..."></textarea>
				  <div className="mt-4">
					  <label htmlFor="expiry" className= "block text-tertiary-colour">Choose Paste Expiry Time</label>
					  < select
						  id="expiry"
						  name="expiry"
						  value={delay}
						  onChange={(e) => setDelay(e.target.value)}
						  className="border rounded w-fit py-2 px-3 mt-4 text-white bg-secondary-colour hover:bg-tertiary-colour h-10 w-52"
						  required>
						  <option value="0">Select expiry time</option>
						  <option value="3">1 Minute</option>
						  <option value="1">1 hour</option>
						  <option value="2">2 hours</option>
						  <option value="24"> 1 day</option>
						  <option value="168">1 week</option>
					  </select>
				  </div>
				  {/*<div className="mt-4 ">*/}
					{/*  <Select */}
					{/*	  options={expiryOptions}*/}
					{/*	  value={pasteExpiryTime}*/}
					{/*	  onChange={(e) => setPasteExpiryTime(e.target.value)}*/}
					{/*  />*/}
				  {/*</div>*/}
				  <div className="flex justify-left mt-4">
				  <button onClick={handleSubmit} className="inline-block bg-secondary-colour text-white rounded-lg px-4 py-2 hover:bg-tertiary-colour m-auto mt-4">Submit</button>
				  </div>
			  </Card >
			  		  </div>
		  	  </div>
	  </>
  );
}
export default PasteForm;