import { Product } from 'src/app/modules/home/models/product';

export const products: Product[] = [
	{
		id: '1',
		name: 'Genteng Beton',
		images: '../../../../../assets/images/genteng1.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur adipis',
	},
	{
		id: '2',
		name: 'Genteng Beton',
		images: '../../../../../assets/images/genteng1.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur adipis',
	},
	{
		id: '3',
		name: 'Genteng Beton',
		images: '../../../../../assets/images/genteng1.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur adipis',
	},
	{
		id: '4',
		name: 'Genteng Beton',
		images: '../../../../../assets/images/genteng1.jpg',
		description: 'lorem ipsum dolor sit amet, consectetur adipis',
	},
];

export const product = [
	{
		id: '1',
		name: 'Concrete Mix',
		description:
			'A versatile concrete mix suitable for various construction projects.',
		category: 'General Purpose',
		ingredients: [
			'Portland cement',
			'Sand',
			'Gravel',
			'Water',
			'Additives',
		],
		features: [
			'High strength',
			'Excellent workability',
			'Durable',
			'Fast setting',
			'Suitable for both indoor and outdoor applications',
		],
		applications: ['Foundations', 'Slabs', 'Columns', 'Walls', 'Pathways'],
		technicalSpecifications: {
			'Compressive Strength': '30 MPa',
			'Setting Time': 'Approximately 2 hours',
			'Water-Cement Ratio': '0.45',
			Density: '2400 kg/m³',
			'Maximum Aggregate Size': '20 mm',
		},
		images: ['concrete1.jpg', 'concrete2.jpg', 'concrete3.jpg'],
	},
	{
		id: '2',
		name: 'Precast Concrete Pavers',
		description:
			'Durable and aesthetic concrete pavers for outdoor applications.',
		category: 'Pavers',
		ingredients: ['Concrete mix', 'Pigments', 'Additives'],
		features: [
			'Wide range of shapes and colors available',
			'High load-bearing capacity',
			'Low maintenance',
			'Resistant to weathering and staining',
		],
		applications: ['Patios', 'Driveways', 'Walkways', 'Pool decks'],
		technicalSpecifications: {
			Thickness: '60 mm',
			'Compressive Strength': '40 MPa',
			'Average Weight': 'Approximately 3.5 kg per paver',
			'Surface Finish': 'Smooth or textured',
		},
		images: ['pavers1.jpg', 'pavers2.jpg', 'pavers3.jpg'],
	},
	{
		id: '3',
		name: 'Fiber-Reinforced Concrete',
		description:
			'Concrete with added fibers for enhanced strength and durability.',
		category: 'Specialty Concrete',
		ingredients: [
			'Portland cement',
			'Sand',
			'Gravel',
			'Water',
			'Fibers (e.g., steel, synthetic)',
		],
		features: [
			'Increased crack resistance',
			'Improved impact resistance',
			'Enhanced durability',
			'Reduced shrinkage',
			'Suitable for high-performance applications',
		],
		applications: [
			'Bridges',
			'Tunnels',
			'Parking structures',
			'Industrial floors',
			'Precast elements',
		],
		technicalSpecifications: {
			'Compressive Strength': '40 MPa',
			'Fiber Type': 'Steel, Polypropylene, Glass, etc.',
			'Fiber Content': '0.5-2% by volume',
			'Water-Cement Ratio': '0.40',
			'Maximum Aggregate Size': '25 mm',
		},
		images: [
			'fiberconcrete1.jpg',
			'fiberconcrete2.jpg',
			'fiberconcrete3.jpg',
		],
	},
	{
		id: '4',
		name: 'Self-Leveling Concrete',
		description:
			'A pourable concrete mix that levels itself to create a smooth and flat surface.',
		category: 'Specialty Concrete',
		ingredients: [
			'Portland cement',
			'Fine aggregates',
			'Polymers',
			'Water',
		],
		features: [
			'Easy and quick to install',
			'Excellent flowability',
			'Eliminates the need for extensive leveling',
			'Suitable for large-area applications',
		],
		applications: [
			'Flooring',
			'Underlayment',
			'Renovations',
			'Commercial spaces',
		],
		technicalSpecifications: {
			Flowability: '350-500 mm',
			'Setting Time': 'Approximately 4-6 hours',
			'Compressive Strength': '25-30 MPa',
			'VOC Content': 'Low VOC emissions',
		},
		images: ['selfleveling1.jpg', 'selfleveling2.jpg', 'selfleveling3.jpg'],
	},
	{
		id: '5',
		name: 'Decorative Stamped Concrete',
		description:
			'Textured and patterned concrete to replicate the look of various materials.',
		category: 'Decorative Concrete',
		ingredients: ['Concrete mix', 'Coloring agents', 'Release agents'],
		features: [
			'Versatile patterns and designs',
			'Cost-effective alternative to natural stone or pavers',
			'Durable and long-lasting',
			'Low maintenance',
		],
		applications: [
			'Patios',
			'Pool decks',
			'Walkways',
			'Driveways',
			'Interior floors',
		],
		technicalSpecifications: {
			'Pattern Options': 'Various textures and designs',
			'Color Options': 'Wide range of colors',
			Thickness: 'Approximately 100-150 mm',
			'Compressive Strength': '25-30 MPa',
		},
		images: [
			'stampedconcrete1.jpg',
			'stampedconcrete2.jpg',
			'stampedconcrete3.jpg',
		],
	},
	{
		id: '6',
		name: 'Concrete Admixtures',
		description:
			'Chemical additives to improve concrete performance and workability.',
		category: 'Admixtures',
		ingredients: [
			'Superplasticizers',
			'Retarders',
			'Accelerators',
			'Air-entraining agents',
			'Water reducers',
		],
		features: [
			'Enhanced workability',
			'Reduced water content',
			'Improved strength development',
			'Controlled setting time',
			'Resistance to freeze-thaw cycles',
		],
		applications: [
			'Ready-mix concrete',
			'Precast concrete',
			'Shotcrete',
			'High-performance concrete',
		],
		technicalSpecifications: {
			'Dosage Range':
				'Varies based on the admixture type and desired effect',
			'Effect on Setting Time': 'Depends on the admixture and dosage',
			'Effect on Strength': 'Depends on the admixture and dosage',
			'Effect on Air Content': 'Varies based on the admixture',
		},
		images: ['admixtures1.jpg', 'admixtures2.jpg', 'admixtures3.jpg'],
	},
	{
		id: '7',
		name: 'Concrete Formwork',
		description:
			'Structures used to mold and support concrete until it hardens and gains strength.',
		category: 'Formwork',
		ingredients: ['Timber', 'Steel', 'Aluminum', 'Plywood', 'Plastic'],
		features: [
			'Strong and durable',
			'Reusable',
			'Flexible for various shapes and sizes',
			'Easy to assemble and dismantle',
			'Provides support during concrete placement',
		],
		applications: [
			'Building construction',
			'Bridge construction',
			'Tunnel construction',
			'Precast concrete production',
		],
		technicalSpecifications: {
			'Material Options': 'Timber, Steel, Aluminum, Plastic',
			'Size Options': 'Customizable based on project requirements',
			'Load-Bearing Capacity':
				'Varies based on formwork type and material',
			'Number of Reuses': 'Depends on formwork quality and maintenance',
		},
		images: ['formwork1.jpg', 'formwork2.jpg', 'formwork3.jpg'],
	},
	{
		id: '8',
		name: 'Concrete Sealers',
		description:
			'Protective coatings for concrete surfaces to enhance durability and appearance.',
		category: 'Surface Coatings',
		ingredients: [
			'Acrylic resins',
			'Silicones',
			'Epoxies',
			'Polyurethanes',
		],
		features: [
			'Seals and protects against moisture penetration',
			'Enhances color and sheen',
			'Provides resistance to stains and chemicals',
			'UV-resistant options available',
			'Easy to apply and maintain',
		],
		applications: [
			'Concrete floors',
			'Driveways',
			'Patios',
			'Garage floors',
			'Exposed aggregate surfaces',
		],
		technicalSpecifications: {
			'Finish Options': 'Gloss, Semi-Gloss, Satin, Matte',
			'Application Method': 'Roller, Brush, Sprayer',
			'Curing Time': 'Varies based on sealer type',
			'Coverage Area': 'Depends on product and surface porosity',
		},
		images: ['sealers1.jpg', 'sealers2.jpg', 'sealers3.jpg'],
	},
	{
		id: '9',
		name: 'Concrete Reinforcement',
		description:
			'Materials used to strengthen and reinforce concrete structures.',
		category: 'Reinforcement',
		ingredients: [
			'Steel bars (rebars)',
			'Wire mesh',
			'Fiber reinforcement',
			'Carbon fiber sheets',
		],
		features: [
			'Improves tensile strength',
			'Controls cracking and shrinkage',
			'Increases load-bearing capacity',
			'Enhances durability',
			'Suitable for both small and large-scale projects',
		],
		applications: [
			'Foundations',
			'Slabs',
			'Columns',
			'Beams',
			'Retaining walls',
		],
		technicalSpecifications: {
			'Rebar Size Options': 'Varies based on project requirements',
			'Wire Mesh Options': 'Various sizes and configurations',
			'Fiber Reinforcement Types': 'Steel, Polypropylene, Glass, etc.',
			'Carbon Fiber Sheet Thickness': 'Depends on structural needs',
		},
		images: [
			'reinforcement1.jpg',
			'reinforcement2.jpg',
			'reinforcement3.jpg',
		],
	},
	{
		id: '10',
		name: 'Concrete Curing Compounds',
		description:
			'Chemical compounds to promote proper curing and hydration of concrete.',
		category: 'Curing',
		ingredients: [
			'Wax-based compounds',
			'Acrylic compounds',
			'Silicate compounds',
			'Water-based compounds',
		],
		features: [
			'Retains moisture for optimal hydration',
			'Reduces surface cracks and shrinkage',
			'Improves concrete strength development',
			'Easy to apply and provides a protective layer',
		],
		applications: [
			'Slabs',
			'Walls',
			'Precast elements',
			'High-performance concrete',
		],
		technicalSpecifications: {
			'Curing Time': 'Varies based on product and ambient conditions',
			'Application Method': 'Spraying or roller application',
			'Coverage Area': 'Depends on product and surface porosity',
			'VOC Content': 'Low VOC emissions',
		},
		images: ['curing1.jpg', 'curing2.jpg', 'curing3.jpg'],
	},
];
