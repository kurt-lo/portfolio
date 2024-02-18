const Section = ({ children, title, className, ...props }) => {
    return (
        <section className={`py-[5rem] px-[1rem] ${className}`} {...props}>
            <div className="container mx-auto">
                <h1 className="text-2xl font-[700] pb-[1.5rem] text-center">{title}</h1>
                {children}
            </div>
        </section>
    )
}

export default Section