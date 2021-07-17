import React from 'react';
import { Carousel } from 'antd';

type Props = {
	landingImages: any | string[]
	landingLoading: boolean;
	ladingError: any;
}


function LandingPage({ landingImages, landingLoading, ladingError }: Props) {
	console.log(landingImages);

	return (
		<div className='container'>
			{landingLoading && <div> Loading...</div>}
			{ladingError && <div className='landing-error'>
				Unexpected error happened, please try reloading.
			</div>}

			<div className="overlay">
				<h1>Agata Marzec Arkitekt</h1>
				<p>Portfolio & services</p>
				<button> View projects</button>
			</div>

			<Carousel
				autoplay
				autoplaySpeed={5000}
				className='carousel'
				pauseOnDotsHover
				pauseOnHover={false}
				draggable
				infinite
				lazyLoad="progressive"
				easing="ease-out"
				adaptiveHeight
			>
				{landingImages?.length && landingImages[0].map((image: string, i: number) => {
					return (<div key={i} className='carousel-images'>
						<img src={image} alt="landing-images" />
					</div>)
				})}

			</Carousel>
		</div>
	);
}

export default LandingPage;