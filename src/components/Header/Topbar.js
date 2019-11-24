import React from 'react';

const Topbar = () => (
  <div className="top_bar">
	<a className="" href="/#directions">
		<div className="ph2_info">
			<i className="fas fa-home"></i>
			<strong>Visit our Location</strong>
			<span>223 Blanding Blvd, Orange Park</span>
		</div>
	</a>
	<a className="" href="tel:904-272-4329">
		<div className="ph2_info">
			<i className="fas fa-phone"></i>
			<strong>Call for Free Consultation</strong>
			<span>(904) 272-4329</span>
		</div>
	</a>
	<a className="" href="/#pricing-plans">
		<div className="ph2_info">
			<i className="fas fa-dollar-sign"></i>
			<strong>View our Savings Plans</strong>
			<span>Save up to 30%</span>
		</div>
	</a>
	<a className="" href="#">
		<div className="ph2_info">
			<i className="far fa-clock"></i>
			<strong>Office Hours</strong>
			<span>Mon - Sat &nbsp; 9AM - 9PM</span>
		</div>
	</a>
</div>
)

export default Topbar