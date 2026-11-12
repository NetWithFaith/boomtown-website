export const business = {
    name: 'BoomTown Restaurant & Coffee Shop PHC',
    shortname: 'BoomTown',
    tagline: 'A restaurant and coffee shop in New GRA, Port Harcourt.',
    addressLines: ['15C Omerelu Street', 'New GRA', 'Port Harcourt, Rivers State, Nigeria'],
    phoneDisplay: '+234 809 400 0060',
    phoneHref: 'tel:+2348094000060',
    
socials: [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/theboomtownphc'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/boomtownphc/'
    }
],

};

   export const mapQuery = encodeURIComponent(
        'BoomTown Restaurant & coffee Shop, 15C Omerelu Street, New GRA, Port Harcourt, Rivers, Nigeria'
    );

    export const mapLinks = [
        { label: 'Home', href: '#top'},
        { label: 'About', href: '#about'},
        { label: 'Menu', href: '#menu'},
        { label: 'Gallery', href: '#gallery'},
        { label: 'Contact', href: '#contact'},
    ];
 export const mapLocations = {
  view: 'https://maps.app.goo.gl/wate76wsp5eMGmQH7',
  embed: `https://maps.google.com/maps?q=${mapQuery}&output=embed`
};

    export const menuCategories = [
        {
            title: 'Food',
            blurb: 'The plates people gather around.',
            image: '/images/menu-food.jpg',
            imageAlt: 'Photo of a prepared meal at BoomTown' 
        },
        {
        title: 'Coffee',
            blurb: 'A quiet cup taken slowly.',
            image: '/images/BoomTown Café Latte and Chocolate Cake.png',
            imageAlt: 'Photo of coffee at BoomTown' 
        },
        {
        title: 'Drinks',
            blurb: 'Something to pour and share.',
            image: '/images/menu-drinks.jpg',
            imageAlt: 'Photo of drinks at BoomTown' 
        },
        {
        title: 'Desserts',
            blurb: 'The part of the meal people linger over.',
            image: '/images/menu-desserts.jpg',
           imageAlt: 'Photo of a dessert at BoomTown' 
        }
    ];

    export const experienceItems = [
    { title: 'A restaurant', text: 'Sit down and share a meal.'}, 
     { title: 'A coffee shop', text: 'Stop in for a cup.'},
      { title: 'In New GRA', text: 'On Omerelu Street, Port Harcourt.'}
    ];

    export const galleryPhotos = [{ src: '', alt: 'Placeholder for a wide photo of the dining room', shape: 'col-span-2 row-span-2' },
	{ src: '', alt: 'Placeholder for a close-up of food', shape: '' },
	{ src: '', alt: 'Placeholder for a photo of a table set for a meal', shape: 'row-span-2' },
	{ src: '', alt: 'Placeholder for a photo of a cup of coffee', shape: '' },
	{ src: '', alt: 'Placeholder for a photo of people sharing a meal', shape: 'col-span-2' },
	{ src: '', alt: 'Placeholder for a photo of the entrance on Omerelu Street', shape: 'col-span-2' }
];

    export const hours = [
  { day: 'Monday', time: '8:00 AM – 11:00 PM' },
  { day: 'Tuesday', time: '8:00 AM – 11:00 PM' },
  { day: 'Wednesday', time: '8:00 AM – 11:00 PM' },
  { day: 'Thursday', time: '8:00 AM – 11:00 PM' },
  { day: 'Friday', time: '8:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 11:00 PM' }
];
