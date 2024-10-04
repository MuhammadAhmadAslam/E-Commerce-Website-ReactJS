import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import HeaderDashed from "../components/HeaderDashed";
import { useNavigate } from "react-router-dom";
const AdminPanel = () => {
	const [Password, setPassword] = useState('');
	const [email, setEmail] = useState('')
	const navigate = useNavigate()
	const checkCredetinal = () => {
		if (email == "Hello Admin" && Password == "myE-Commerce123@") {
			alert('ok ki report hae')
			navigate('/dashboard/order/admin')
		}else{
			alert('sahi kar')
		}
	};




	return (
		<section>

		<div className="mt-5">

			<HeaderDashed head1="Log" head2="IN" />
		</div>
			<div className="d-flex align-items-center justify-content-center flex-column w-100 mt-5" style={{ height: "30vh" }} >
				<input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter A Email" className="md-w-full" style={{ width: "40%", height: "40px", outline: "none" }} />
				<br />
				<input type="text" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter A Password" style={{ width: "40%", height: "40px", outline: "none" }} />
				<br />
				<button onClick={checkCredetinal} style={{ border: "none", backgroundColor: "#3D3D3D", color: "white", padding: "7px", width: "80px" }}>Login</button>
			</div>
		</section>
	);
};

export default AdminPanel;
