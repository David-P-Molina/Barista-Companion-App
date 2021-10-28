const About = () => {
    return (
        <div>
                        <div className='roast-levels'>
            {/* source: https://howtostartanllc.com/coffee/coffee-roast-level-guide */}
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
                            <li>French</li>
                            <li>Italian</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='grind-size'>
                {/* source: https://coffeeaffection.com/coffee-grind-size-chart/ */}
                <h1>Grind Sizes</h1>
                <h3>Extra Fine</h3>
                <p>The extra-fine grind size has a texture like powder or flour.</p>
                <h3>Fine</h3>
                <p>Finely ground beans have a very smooth texture, approaching powder. This type of grind is also easy to find in pre-ground bags and is often labeled as espresso grind.</p>
                <h3>Medium Fine</h3>
                <p>Medium-fine beans have a texture just a little smoother than sand.</p>
                <h3>Medium</h3>
                <p>Medium grind is the most common grind size for pre-ground beans, with a texture like smoother sand.</p>
                <h3>Medium-Coarse</h3>
                <p>Medium-coarse beans have a texture like rough sand, between medium and coarse grind levels.</p>
                <h3>Coarse</h3>
                <p>Coarse beans have a texture similar to Kosher or sea salt, with large, even chunks.</p>
                <h3>Extra Coarse</h3>
                <p>Extra coarse beans are only slightly ground, often using the largest setting on a burr grinder. They have a very rough texture, and you can still see the shape of the original beans.</p>
            </div>
            <div className='coffee-blend-types'>
                <h1>Coffee Blend Types</h1>
                <h3>Single-Origin</h3>
                <p>Originating in a single location, whether that be a country, region, or farm, this coffee has very distinct flavors.</p>
                <h3>Blend</h3>
                <p>A mixture of coffee beans from different locations, Usually produces a more balanced flavor.</p>
                <h3>Espresso</h3>
                <p>Can be a Blend or Single-Origin Coffee, Usually a darer roast since they are easier to extract. Usually rich in oils which aid in richer crema.</p>
                <h3>Decaf</h3>
                <p>Any Coffee Type that has gone through the process of removing or lower the amount of caffeine in the final product.</p>
            </div>
            <div className='bloom-time'>
                {/* source: https://www.beanpoet.com/the-purpose-of-blooming-coffee/ */}
                <h1>What's a Bloom Time</h1>
                <p>Blooming coffee at the start of brewing can help your coffee achieve its full flavor and aroma. The purpose of blooming coffee is to draw trapped carbon dioxide gas out of the roasted coffee grounds. It’s a simple process, and if you want to avoid unnecessary sour notes in your brew, it’s 30 or 40 seconds well spent.</p>
            </div>
        </div>
    )
}

export default About
