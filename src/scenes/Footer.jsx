import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="w-11/12 max-w-6xl mx-auto space-y-6">
        {/* Social Media Icons */}
        <div className="flex justify-center">
          <SocialMediaIcons />
        </div>

        {/* Footer Content */}
        <div className="md:flex items-center justify-between text-center">
          <h2 className="font-playfair font-semibold text-xl text-yellow-400 mb-2 md:mb-0">
            MOA DISASA
          </h2>
          <p className="font-playfair text-sm text-gray-400">
            ©{currentYear} MOA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
