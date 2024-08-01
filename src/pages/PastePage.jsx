import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from  "../components/Spinner"
import GenerateUrl from "../components/GenerateUrl";



const PastePage = () => {
	const [paste, setPaste] = useState('');
	const [error, setError] = useState('');
	const {id } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const url= process.env.DATA_API_URL;
	useEffect(() => {
		axios.get(`${url}/paste/${id}`)
	.then(res => {
			console.log(res.data);
			if (res.data === null) {
				navigate("*");
				return;
			}
			setPaste(res.data);
			setLoading(false);
		})
			.catch(err => {
				navigate("*");
			})
	}, [id]);

	return (
	<div className='bg-background-colour h-screen' >
		{loading ? <Spinner loading={loading} /> :
		<div className="container m-auto max-w-6xl py-24">
			<div className="xl:container container-lg m-auto ">
				<div className="bg-pink-50 w-full min-h-96 p-4 rounded-lg">
					<p>{paste.paste}</p>
				</div>
			</div>
			<GenerateUrl pasteId={paste._id} />
		</div>
		}
	</div>
  );
};
export default PastePage;