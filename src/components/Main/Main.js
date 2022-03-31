import React from "react";
import "./Main.css";
import cvfile from "../../assets/cv.pdf"

function Main() {
	return (
		<main>
			<section className='main__section'>
				<h3 className='main__section--title'>Profil</h3>
				<div className='main__content'>
					<p>
						En cours de formation
						<strong>Développeur Web et Mobile</strong>, je suis à la recherche
						d'un <strong>stage</strong> d'une durée de deux mois me permettant
						de mettre à profit mes connaissances en milieu{" "}
						<strong>professionnel</strong>
						ainsi que d'acquérir de plus amples compétences. Le stage se
						déroulera du
						<time datetime='2022-07-22'>22 Juillet</time> au{" "}
						<time datetime='2022-09-22'>22 Septembre</time>2022.
					</p>
				</div>
				<div className='main__content'>
					<h4>Mes Aptitudes :</h4>
					<ul className='main__content--list'>
						<li className='main__content--listItem'>
							<i className='fas fa-cogs'></i>Astucieux
						</li>
						<li className='main__content--listItem'>
							<i className='fas fa-search'></i>Curieux
						</li>
						<li className='main__content--listItem'>
							<i className='fas fa-border-all'></i>Autonome
						</li>
						<li className='main__content--listItem'>
							<i className='far fa-calendar-alt'></i>Organisé
						</li>
					</ul>
				</div>
				<div className='main__content'>
					<h4>Mes Centres d'Intérêts :</h4>
					<ul className='main__content--list'>
						<li>Musique : pratique de la MAO</li>
						<li>Nouvelles Technologies</li>
						<li>Jeux-Vidéos</li>
					</ul>
				</div>
			</section>

			<section className='main__section'>
				<h3 className='main__section--title'>Compétences</h3>
				<div className='main__content'>
					<p>
						De nature <strong>autodidacte</strong>, j'ai pu acquérir un panel
						varié de compétences. Mes expériences professionnelles m'ont apporté
						une grande <em>polyvalence</em> .
					</p>
					<p>Team-Player, j'aime communiquer et apprendre de mes collègues !</p>
				</div>
				<div className='main__content'>
					<h4>Mes Skills :</h4>
					<div className='double__list'>
						<ul className='main__content--list'>
							<li className='main__content--listItem'>
								<i className='fab fa-html5'></i>HTML5
							</li>
							<li className='main__content--listItem'>
								<i className='fab fa-css3-alt'></i>CSS3
							</li>
							<li className='main__content--listItem'>
								<i className='fab fa-react'></i>React
							</li>
							<li className='main__content--listItem'>
								<i className='fas fa-mobile'></i>Responsive
							</li>
						</ul>
						<ul className='main__content--list'>
							<li className='main__content--listItem'>
								<i className='fab fa-js'></i>JavaScript
							</li>
							<li className='main__content--listItem'>
								<i className='fab fa-git-alt'></i>Git
							</li>
							<li className='main__content--listItem'>
								<i className='fab fa-linux'></i>Linux
							</li>
							<li className='main__content--listItem'>
								<i className='fas fa-globe-europe'></i>Anglais
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className='main__section'>
				<h3 className='main__section--title'>Expérience</h3>
				<div className='main__content'>
					<h4>Formations :</h4>
					<ul className='main__content--list'>
						<li>Développeur Web et mobile :</li>
						<li>Formation OSENGO</li>
						<li className='main__content--sdy'>Inscrit depuis janvier 2022</li>
						<li className='main__content--sdy'>
							Développement des parties front-end et back-end d'une application
							web
						</li>
					</ul>
					<ul className='main__content--list'>
						<li>Intégrateur/Webmaster :</li>
						<li>Formation 3WAcademy</li>
						<li className='main__content--sdy'>Formation suivie en 2016</li>
					</ul>
				</div>
				<div className='main__content'>
					<h4>Carrière :</h4>
					<ul className='main__content--list'>
						<li>Agent de support technique</li>
						<li>Sitel et Zava (Londres, UK)</li>
						<li className='main__content--sdy'>
							Prendre en charge les demandes d'assistance des clients
						</li>
					</ul>
					<ul className='main__content--list'>
						<li>Webmaster Freelance</li>
						<li className='main__content--sdy'>
							Designer et réaliser des sites web, newsletters, rédaction
							d'articles pour le Web
						</li>
					</ul>
					<a className='btn__dl' href={cvfile} target="_blank" rel="noreferrer">
						<span>Voir mon CV</span>
					</a>
				</div>
			</section>

			<section className='main__section'>
				<h3 className='main__section--title'>Contact</h3>
				<div className='main__content'>
					<ul className='social__links'>
						<li className='social__items'>
							<a
								className='socials linkedin'
								target='_blank' rel="noreferrer"
								href='https://www.linkedin.com/in/8astien-cauquil/'
							>
								<i className='fab fa-linkedin'></i>
							</a>
						</li>

						<li className='social__items'>
							<a
								className='socials twitter'
								target='_blank' rel="noreferrer"
								href='https://twitter.com/8astien_c'
							>
								<i className='fab fa-twitter-square'></i>
							</a>
						</li>

						<li className='social__items'>
							<a
								className='socials email'
								target='_blank' rel="noreferrer"
								href='mailto:bastien.cauquil@pm.me'
							>
								<i className='fas fa-envelope-square'></i>
							</a>
						</li>

						<li className='social__items'>
							<a
								className='socials phone'
								target='_blank' rel="noreferrer"
								href='tel:0781069644'
							>
								<i className='fas fa-phone-square'></i>
							</a>
						</li>
					</ul>
				</div>

				<div className='main__content'>
					<figure>
						<figcaption className='caption'>
							Basé à Castres (Tarn, Occitanie), je suis également disponible en{" "}
							<strong>télétravail</strong>.
						</figcaption>
						<iframe
							title='iframe'
							src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12971.745603576746!2d2.2431698342511934!3d43.60388093370298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1644223470966!5m2!1sfr!2sfr'
							loading='lazy'
						></iframe>
					</figure>
				</div>
			</section>
		</main>
	);
}

export default Main;
