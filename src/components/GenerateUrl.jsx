import { useNavigate} from "react-router-dom";
import Card from "./Card";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {toast} from "react-toastify";
import axios from "axios";
const GenerateUrl = ({pasteId}) => {

	const navigate = useNavigate();
	const handleCopy = () => {
		toast.success('URL copied to clipboard');

	}
	const onDeleteClick =  (id) => {
		const confirmDelete = window.confirm('Are you sure you want to delete this paste?');
		if (!confirmDelete) {
			return;
		}
		axios.delete(`http://localhost:3001/paste/${id}`)
			.then(res => {
				console.log('Paste deleted', res);
			})
			.catch(err => {
				console.log('Error deleting paste', err);
				})
		navigate('/')
		toast.success('Paste deleted successfully');
	}
	  return (
		  <>
	<div>
<Card>
		<p className="text-center text-2xl">Your URL is ready</p>
		<div className="flex justify-center mt-4">
			<div >
				<CopyToClipboard text={`http://localhost:3000/paste/${pasteId}`}>
					<button onClick={handleCopy} className=" inline bg-secondary-colour text-white rounded-lg px-4 py-2 hover:bg-tertiary-colour m-auto">Copy URL</button>
				</CopyToClipboard>
				<button onClick={() => onDeleteClick(pasteId)} className="inline m-3.5 bg-secondary-colour text-white rounded-lg px-4 py-2 hover:bg-tertiary-colour m-auto mt-4 p-8 ">Delete</button>
			</div>
		</div>
</Card>
	</div>
		  </>
  );
}
export default GenerateUrl;