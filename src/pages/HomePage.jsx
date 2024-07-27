import PasteForm from "../components/PasteForm";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage =()=>{
	return(
		<div className='bg-background-colour h-screen' >
			<PasteForm/>
		</div>
	)
}
export default HomePage;