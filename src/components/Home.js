const Home = () => {
    return (
        <div>
            Welcome
            <div className='roast-levels'>
                <h1>Roast Levels</h1>
                <ul>
                    <li>
                        <h3>Light Roast</h3>
                        <p>Intended to preserve a coffee bean’s natural aromas and flavors, light roasts represent the preferred choice of most of the specialty coffee community. They also tend to have a brighter flavor profile than darker roasts. With a dry, not oily, texture, these beans typically reach about 350 to 400 degrees Fahrenheit and just barely obtain the first-crack stage.</p>
                        <h5>Roasters typically refer to varying degrees of light roasts as:</h5>
                        <ul>
                            <li>Blonde</li>
                            <li>Light City</li>
                            <li>Half City</li>
                            <li>Cinnamon</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Medium Roast</h3>
                        <p>While medium roasts still preserve a coffee bean’s natural aromas and flavors, they usually replace the brightness produced in a light roast with a sweet caramelization created by a longer roast time. This longer roast time also reduces the acidity and bright notes typically found in light-roast coffees. These beans remain fairly dry and rarely look oily. Raised to temperatures of between 400 and 430 degrees Fahrenheit, they typically pass the first-crack stage while never fully reaching the second crack.</p>
                        <h5>Roasters typically refer to varying degrees of medium roasts as:</h5>
                        <ul>
                            <li>City</li>
                            <li>American</li>
                            <li>Breakfast</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Dark Roast</h3>
                        <p>At this level, the taste of the roast itself replaces the coffee bean’s naturally occurring aromas and flavors. This creates a bold, heavier flavor profile with low acidity. With an oily, dark brown appearance, these beans normally reach the second-crack stage at temperatures of between 430 and 450 degrees Fahrenheit.</p>
                        <h5>Roasters typically refer to varying degrees of dark roasts as:</h5>
                        <ul>
                            <li>Full City</li>
                            <li>Vienna</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='grind-size'>
                <h1>Grind Size</h1>
                <p></p>
            </div>
            <div className='coffee-blend-types'>
                <h1>Coffee Blend Types</h1>
                <p></p>
            </div>
            <div className='bloom-time'>
                <h1>What's a Bloom Time</h1>
                <p></p>
            </div>

        </div>
    )
}

export default Home
