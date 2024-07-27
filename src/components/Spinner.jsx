import {ClipLoader} from "react-spinners";

const Spinner = ({loading}) => {
	const override = {
		display: 'block',
		margin: '100px auto'

	}
	return(
		<ClipLoader color= '#123abc'
		            loading={loading}
		            cssOverride={override}
		            size={150} />
	);
}
export default Spinner;