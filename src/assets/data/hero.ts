import { Hero } from 'src/app/core/domain/hero';

export const hero: Hero[] = [
	{
		id: '1',
		title: 'Indobata',
		description:
			'Welcome to Indobata, a leading provider of high-quality concrete products for construction projects of all sizes. With over 20 years of experience in the industry, we have earned a reputation for excellence, reliability, and innovation.',
		images: ['../../../assets/images/hero-images.webp'],
	},
	{
		id: '2',
		title: 'Professional Concrete Manufacturing',
		description: `Our comprehensive range of concrete products includes Paving Blocks, Concrete Roof Tiles,
        Pressed Bricks, Disability Tiles, Concrete Pipes, Rosters, and Kerbstones, all of which are manufactured
        using the latest technology and the highest quality materials. We take great pride in our commitment to
        sustainability and environmental responsibility, and all of our products are designed to meet the
        highest standards for safety, durability, and performance.`,
		images: ['../../../assets/images/about-section-1.webp', '../../../assets/images/about-section-2.webp'],
	},
];
