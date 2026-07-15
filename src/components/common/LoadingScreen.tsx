import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-maroon-gradient flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-noise opacity-20" />
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/50 flex items-center justify-center mb-6 shadow-luxury"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-gold/30"
        />
        <span className="font-display text-4xl text-gold mt-1">
          R
        </span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display text-cream text-lg tracking-wide"
      >
        Radha Enterprises
      </motion.p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
        className="h-[2px] bg-gold mt-4 rounded-full"
      />
    </motion.div>
  );
}
