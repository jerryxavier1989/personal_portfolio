import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							
							<div className="work-title">Cornier Generator</div>
							<div className="work-subtitle">
								Service engineer
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>

						<div className="work">
							
							<div className="work-title">Shymas Honda</div>
							<div className="work-subtitle">
								Marketing executive
							</div>
							<div className="work-duration">2017 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
