
export default function Title({ animation, title, description }) {
    return (
        <div
            className="text-center mb-16"
            data-aos={animation}
            data-aos-duration="1500"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-sans">
                {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    )
}
