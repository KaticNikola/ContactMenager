import React from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';


class AddContact extends React.Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}
	onSubmit =async (dispatch, e) => {
		e.preventDefault();
		const { name, email, phone } = this.state;
		//input validation
		if (name === "") {
			this.setState({ errors: { name: "Name is required " } })
			return
		}
		if (email === "") {
			this.setState({ errors: { email: "Email is required " } })
			return
		}
		if (phone === "") {
			this.setState({ errors: { phone: "Phone is required " } })
			return
		}
		const newContact = {
			name,
			email,
			phone
		}
		//make POST req
		const res = await axios.post("https://jsonplaceholder.typicode.com/users",newContact)
		
		dispatch({
			type: "ADD_CONTACT",
			payload: res.data
		})

		//clear input
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		})
		//redirect to home
		this.props.history.push("/");
	}
	// type>fn>setstate>value || change state on type
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	render() {
		const { name, email, phone, errors } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className='card mb-3'>
							<div className="card-header"> <span className="text-danger">Add</span>  Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									< TextInputGroup
										label='Name'
										name="name"
										value={name}
										placeholder="Enter Name..."
										onChange={this.onChange}
										error={errors.name} />
									<TextInputGroup
										label="Email"
										type="email"
										name="email"
										value={email}
										placeholder="Enter Email..."
										onChange={this.onChange}
										error={errors.email} />
									<TextInputGroup
										label="Phone"
										name="phone"
										value={phone}
										placeholder="Enter Phone..."
										onChange={this.onChange}
										error={errors.phone} />
									<input type="submit" value="Add Contact" className="btn btn-block btn-light" />
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		);
	}
}

export default AddContact;