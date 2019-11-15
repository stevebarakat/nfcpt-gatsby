import React from 'react';

const Topbar = () => (
  <div class="top_bar">
	<a class="" href="/#directions">
		<div class="ph2_info">
			<i class="fas fa-home"></i>
			<strong>Visit our Location</strong>
			<span>223 Blanding Blvd, Orange Park</span>
		</div>
	</a>
	<a class="" href="tel:904-272-4329">
		<div class="ph2_info">
			<i class="fas fa-phone"></i>
			<strong>Call for Free Consultation</strong>
			<span>(904) 272-4329</span>
		</div>
	</a>
	<a class="" href="/#pricing-plans">
		<div class="ph2_info">
			<i class="fas fa-dollar-sign"></i>
			<strong>View our Savings Plans</strong>
			<span>Save up to 30%</span>
		</div>
	</a>
	<a class="" href="#">
		<div class="ph2_info">
			<i class="far fa-clock"></i>
			<strong>Office Hours</strong>
			<span>Mon - Sat &nbsp; 9AM - 9PM</span>
		</div>
	</a>
</div>
)

export default Topbar