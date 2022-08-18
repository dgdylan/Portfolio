import React from "react"

const Navbar = () => {

    const linkClicked = () => {
        document.querySelector('#page-nav-toggle').checked=false
    }

    return (
            <div className="navbar">
                <div className="logo">
                    <div className="logo-text">Dylan Rambarran</div>
                    <svg
                        width={291}
                        height={18}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <rect
                            x={291}
                            y={17.999}
                            width={135.466}
                            height={17.687}
                            rx={5.751}
                            transform="rotate(-180 291 17.999)"
                            fill="#00626c"
                        />
                        <rect
                            x={143.828}
                            y={17.999}
                            width={40.138}
                            height={17.687}
                            rx={5.751}
                            transform="rotate(-180 143.828 17.999)"
                            fill="#05909a"
                        />
                        <rect
                            x={91.983}
                            y={17.999}
                            width={40.138}
                            height={17.687}
                            rx={5.751}
                            transform="rotate(-180 91.983 17.999)"
                            fill="#54c1cc"
                        />
                        <rect
                            x={38.466}
                            y={17.999}
                            width={38.465}
                            height={17.687}
                            rx={5.751}
                            transform="rotate(-180 38.466 17.999)"
                            fill="#8BF4FF"
                        />
                    </svg>
                </div>
                
                <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
                <label htmlFor="page-nav-toggle">
                <svg className="icon--menu-toggle" viewBox="0 0 60 30">
                    <g className="icon-group">
                    <g className="icon--menu">
                        <path d="M 6 0 L 54 0" />
                        <path d="M 6 15 L 54 15" />
                        <path d="M 6 30 L 54 30" />
                    </g>
                    <g className="icon--close">
                        <path d="M 15 0 L 45 30" />
                        <path d="M 15 30 L 45 0" />
                    </g>
                    </g>
                </svg>
                </label>

                <nav className="main-navigation">
                <ul>
                    <li><a onClick={linkClicked} href="/">Home</a></li>
                    <li><a onClick={linkClicked} href="#projects">Projects</a></li>
                    <li><a onClick={linkClicked} href="#about">About</a></li>
                    <li><a onClick={linkClicked} href="#0">Contact</a></li>
                </ul>
                </nav>
            </div>
        )
}

export default Navbar