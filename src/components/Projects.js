import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { First } from "react-bootstrap/esm/PageItem";
import { CodeProjectCard } from "./CodeProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/sokoban.jpg";
import projImg2 from "../assets/img/amazonia.png";
import projImg3 from "../assets/img/JSCalculator.png";
import projImg4 from "../assets/img/Mathroom.png";
import projImg5 from "../assets/img/NathanNBD.png";

export const Projects = () => {
	const projects = [
		{
      title: "Sokoban",
      description: "A 2D puzzle game made with pure Java.",
      imgUrl: projImg1,
      link: "https://github.com/7nathanabaya7-cmyk/Sokoban",
    },
    {
      title: "Amazonia",
      description: "A simple html-css website I made to practice and develop my styling skills.",
      imgUrl: projImg2,
      link: "https://github.com/7nathanabaya7-cmyk/Amazonia",
    },
    {
      title: "JSCalculator",
      description: "A simple calculator made with JavaScript.",
      imgUrl: projImg3,
      link: "https://github.com/7nathanabaya7-cmyk/JSCalculator",
    },
    {
      title: "Mathroom",
      description: "My first ever full stack application written with ReactJS and SpringBoot using a REST API.",
      imgUrl: projImg4,
      link: "https://github.com/7nathanabaya7-cmyk/Mathroom",
    },
    {
      title: "NathanNBD",
      description: "A simple ATM Machine with a working database coded in Visual Studio.",
      imgUrl: projImg5,
      link: "https://github.com/7nathanabaya7-cmyk/Mathroom",
    },
	];

	return(
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
					<h2>Projects</h2>
					<p>
            Throughout my journey of becoming a Software Engineer, I have made many projects and completed certificates. In this section, you will be able to see the projects that I have completed and the certificates that I have achieved.
					</p>
					<Tab.Container id="projects-tabs" defaultActiveKey={First}>
						<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
							<Nav.Item>
								<Nav.Link eventKey="first">Projects</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Certificates</Nav.Link>
							</Nav.Item>
						</Nav>
						<Tab.Content>
							<Tab.Pane eventKey={"first"}>
								<Row>
									{
										projects.map((project, index) => {
											return(
												<p>
													<CodeProjectCard 
                            key={index}
                            {...project}
                            />
												</p>
											)
										})
									}
								</Row>
							</Tab.Pane>
							<Tab.Pane eventKey={"second"}>
								Under Construction...
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
					</Col>
				</Row>
			</Container>
      <img className="background-image-right" src={colorSharp2} />
		</section>
	)
}