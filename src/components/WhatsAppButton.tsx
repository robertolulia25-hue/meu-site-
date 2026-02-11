import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhatsAppButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/obrigado")}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-9 h-9"
        fill="white"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.746 3.072 9.382L1.062 31.26l6.076-1.952a15.914 15.914 0 008.866 2.696C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.316 22.612c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.826-6.804-8.064-7.118-.23-.314-1.932-2.572-1.932-4.904s1.222-3.48 1.656-3.958c.434-.478.948-.598 1.264-.598.314 0 .632.004.908.016.292.014.682-.11 1.068.814.39.94 1.33 3.252 1.448 3.49.118.238.196.516.04.83-.158.314-.236.51-.472.786-.236.276-.496.616-.708.826-.236.236-.482.492-.208.966.276.472 1.226 2.022 2.632 3.276 1.81 1.612 3.336 2.112 3.808 2.35.472.236.748.198 1.024-.12.276-.314 1.186-1.382 1.502-1.858.314-.478.632-.394 1.066-.236.434.158 2.748 1.296 3.22 1.532.472.236.786.354.904.55.118.196.118 1.134-.272 2.234z" />
      </svg>
    </motion.button>
  );
};

export default WhatsAppButton;
