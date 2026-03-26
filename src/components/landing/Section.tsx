import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, vkContact, products, reviews }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {vkContact && (
        <motion.a
          href={`https://vk.com/${vkContact}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-9 h-9 rounded-lg bg-[#0077FF]/20 border border-[#0077FF]/40 flex items-center justify-center group-hover:bg-[#0077FF]/40 transition-colors">
            <Icon name="MessageCircle" size={18} className="text-[#0077FF]" />
          </div>
          <span className="text-base">ВКонтакте: <span className="text-white font-medium">@{vkContact}</span></span>
        </motion.a>
      )}
      {products && (
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group cursor-pointer hover:border-[#FF4D00]/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[#FF4D00] font-bold text-lg">
                  {product.price}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm md:text-base">{product.name}</h3>
                <p className="text-neutral-500 text-xs md:text-sm mt-1">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {reviews && (
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Icon key={s} name="Star" size={14} className="text-[#FF4D00] fill-[#FF4D00]" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">«{review.text}»</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon name="User" size={14} className="text-neutral-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{review.name}</p>
                  <p className="text-neutral-500 text-xs">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            onClick={() => window.open('https://vk.com/andreyka_bd', '_blank')}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
