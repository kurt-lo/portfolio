const Card = ({ cardTitle, description, code, githubLink, githubIcon, live, liveLink, liveIcon, children }) => {
    return (
        <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <p>{description}</p>
            <div className="flex gap-[.5rem]">
                {children}
            </div>
            <div className="card-actions justify-end pt-[.5rem]">
                <a href={githubLink} target="_blank" className="flex items-center gap-[.3rem]">
                    <span className="font-[500]">{code}</span>
                    {githubIcon}
                </a>
                <a href={liveLink} target="_blank" className="flex items-center gap-[.3rem]">
                    <span className="font-[500]">{live}</span>
                    {liveIcon}
                </a>
            </div>
        </div>
    )
}

export default Card