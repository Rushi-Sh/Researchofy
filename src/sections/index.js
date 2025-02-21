const HomePageContent = [
    {
        title: 'Research Paper Writing',
        text: 'Join us to write Conference Level Research Papers with expert guidance and support',
        image: '../../research1.png',
    },
    {
        title: 'Expert Consultation',
        text: 'Get personalized mentoring from PhD scholars and experienced researchers in your field',
        image: '../../research2.png',
    },
    {
        title: 'Publication Support',
        text: 'Receive end-to-end assistance from paper writing to journal submission and review handling',
        image: '../../research3.png',
    }
];

const FooterContent = [
    {
        section: "Quick Links",
        links: [
            { title: "Home", href: "/" },
            { title: "About Us", href: "/about-us" },
            { title: "Blog", href: "/blog" },
            { title: "Contact Us", href: "/contact-us" }
        ]
    },
    {
        section: "Our Services",
        links: [
            { title: "Research Writing", href: "/services/research" },
            { title: "Data Analysis", href: "/services/analysis" },
            { title: "Consulting", href: "/services/consulting" }
        ]
    },
    {
        section: "Projects",
        links: [
            { title: "Case Studies", href: "/projects/case-studies" },
            { title: "Publications", href: "/projects/publications" },
            { title: "Research Papers", href: "/projects/papers" }
        ]
    },
    {
        section: "Contact Us",
        details: {
            address: "Nirma University, S G Highway, Ahmedabad – 382481, Gujarat, India",
            phone: "+91 97394 63988",
            email: "researchofy25@gmail.com"
        }
    }
];

const Content = { HomePageContent, FooterContent };
export default Content;

