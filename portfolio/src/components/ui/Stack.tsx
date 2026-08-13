import { useState, type ReactNode } from 'react'
import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react'

export type Photo = {
    src: string
    alt: string
    caption: string
}

type CardRotateProps = {
    children: ReactNode
    onSendToBack: () => void
    sensitivity: number
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [60, -60])
    const rotateY = useTransform(x, [-100, 100], [-60, 60])

    function handleDragEnd(_: unknown, info: PanInfo) {
        const dragged = Math.max(Math.abs(info.offset.x), Math.abs(info.offset.y))

        if (dragged > sensitivity) {
            onSendToBack()
        }

        // Always snap home — the card that got sent to back re-enters at centre.
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            className="absolute size-full cursor-grab active:cursor-grabbing"
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
        >
            {children}
        </motion.div>
    )
}

type StackProps = {
    cards: Photo[]
    /** Pixels the card must travel before it drops to the back of the stack. */
    sensitivity?: number
}

export default function Stack({ cards, sensitivity = 120 }: StackProps) {
    // Bottom of the stack first, top last — so the last entry renders on top.
    const [order, setOrder] = useState(() => cards.map((_, index) => index))

    function sendToBack(index: number) {
        setOrder((prev) => [index, ...prev.filter((i) => i !== index)])
    }


    // The root element IS the card box — the caption hangs off it absolutely so
    // it never affects how the box centres against neighbouring content.
    return (
        <div className="relative size-full perspective-[600px]">
            {order.map((cardIndex, position) => {
                const { src, alt } = cards[cardIndex]
                const depth = order.length - 1 - position

                return (
                        <CardRotate
                            key={cardIndex}
                            sensitivity={sensitivity}
                            onSendToBack={() => sendToBack(cardIndex)}
                        >
                            <motion.div
                                className="flex size-full items-center justify-center overflow-hidden rounded-2xl bg-surface shadow-card"
                                animate={{
                                    rotateZ: depth * -4,
                                    scale: 1 - depth * 0.06,
                                    y: depth * -8,
                                }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                style={{ zIndex: position }}
                            >
                                {src ? (
                                    <img
                                        src={src}
                                        alt={alt}
                                        draggable={false}
                                        className="pointer-events-none size-full select-none object-cover"
                                    />
                                ) : (
                                    <span className="select-none text-sm text-ink-muted">
                                        Photo coming soon
                                    </span>
                                )}
                            </motion.div>
                        </CardRotate>
                    )
                })}

            
        </div>
    )
}
