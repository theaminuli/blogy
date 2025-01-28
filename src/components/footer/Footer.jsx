import Copyright from "./Copyright";

const Footer = () => {
    return (
        <footer className="pt-20">
            <div className="container mx-auto py-4 text-center text-gray-600 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center mr-20">
                    <h3 className="font-bold mb-2">Blogy</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold mb-2">Quick Links</h3>
                    <a href="#home" className="block py-2">
                        Home
                    </a>
                    <a href="#about" className="block py-2">
                        About
                    </a>
                    <a href="#contact" className="block py-2">
                        Contact
                    </a>
                </div>
                <div className="text-center">
                    <h3 className="font-bold mb-2">Legal Stuff</h3>
                    <a href="#privacy" className="block py-2">
                        Privacy Policy
                    </a>
                    <a href="#terms" className="block py-2">
                        Terms & Conditions
                    </a>
                    <a href="#cookies" className="block py-2">
                        Cookies Policy
                    </a>
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;