import React, { useState, useEffect } from "react";
import { Select } from "antd";
import gsap from 'gsap';
import logo from '../../images/logo.png';

type Props = {
	isOpened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Nav({ isOpened, setOpened }: Props) {
	const { Option } = Select;
	const [duration, setDuration] = useState(0.2)

	useEffect(() => {
		window.onresize = () => {
			if (window.matchMedia('(min-width: 1024px)').matches) {
				setOpened(true)
			}
		}

		if (window.matchMedia('(min-width: 1024px)').matches) {
			setOpened(true)
			setDuration(1)
		} else {
			setDuration(0.2)

		}


	}, [])

	useEffect(() => {
		gsap.fromTo(
			'.nav-ul-li',
			{ opacity: 0, x: 100 + '%' },
			{ opacity: 1, x: 0 + '%', stagger: 0.1, duration: duration }
		);
	}, [isOpened])

	function handleChange(value: string) {
		//TODO setLang(value)
	}

	return (<>

		<nav className={`nav ${isOpened ? 'nav-open' : 'nav-closed'}`}>
			<ul className='nav-ul'>
				<li className='logo'>
					<img src={logo} alt="Logo" />
				</li>
				<li className='nav-ul-items'>
					<li className='nav-ul-li'>Home</li>
					<li className='nav-ul-li'>Projects</li>
					<li className='nav-ul-li'>About me</li>
					<li className='nav-ul-li'>Contact me</li>
					<li className='nav-ul-li'>
						<Select className='nav-ul-li-select' defaultValue="en" style={{ width: 120 }} onChange={handleChange}>
							<Option value="en">English</Option>
							<Option value="pl">Polish</Option>
						</Select>
					</li>
				</li>
			</ul>
		</nav>
	</>
	)


}