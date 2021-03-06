import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DirectoryHero, ProfileCard } from '../../Styles.js';

const Directory = ({ profiles }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='Directory'>
			<DirectoryHero>
				<h2>
					Want to know what we work on here at Kenzie Academy? Take a look at some of our amazing students and the
					projects they've worked on!
				</h2>
			</DirectoryHero>
			<section className='students'>
				<div className='spotlightImgs'>
					<img src={require('../../assets/UXSpotlight.png').default} alt='UX Spotlight Portfolio' />
					<img src={require('../../assets/SESpotlight.png').default} alt='SE Spotlight Portfolio' />
				</div>
				<ul>
					{profiles.map((profile) => (
						<Link to={`/profile/${profile.id}`}>
							<ProfileCard key={profile.id}>
								<div className='img'>
									<img className='avatar' src={profile.image} alt={profile.name} />
								</div>
								<div className='info'>
									<div className='title'>
										<h3>
											{profile.name} - {profile.role} - {profile.cohort}
										</h3>
									</div>
									<br />
									<br />
									<div className='aboutInfo'>
										<p>{profile.about && profile.about.substring(0, 148)}</p>
									</div>
								</div>
							</ProfileCard>
						</Link>
					))}
				</ul>
			</section>
		</div>
	);
};

export default Directory;
