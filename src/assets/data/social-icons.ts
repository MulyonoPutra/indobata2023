import { pathAssets } from 'src/app/configs/path-assets';

export interface SocialIcons {
	id: string;
	src: string;
	alt: string;
	url: string;
}

export const socialIcons: SocialIcons[] = [
	{
		id: '1',
		src: pathAssets.iconTwitter,
		alt: 'Twitter',
		url: 'https://twitter.com/',
	},
	{
		id: '2',
		src: pathAssets.iconFacebook,
		alt: 'Facebook',
		url: 'https://facebook.com/',
	},
	{
		id: '3',
		src: pathAssets.iconInstagram,
		alt: 'Instagram',
		url: 'https://instagram.com/',
	},
	{
		id: '4',
		src: pathAssets.iconYoutube,
		alt: 'YouTube',
		url: 'https://youtube.com/',
	},
	{
		id: '5',
		src: pathAssets.iconLinkedin,
		alt: 'Linkedin',
		url: 'https://linkedin.com',
	},
];
