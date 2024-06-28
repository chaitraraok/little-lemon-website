import React from "react"
import small_logo from "../images/small_logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={small_logo} alt="Small logo" />
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Address: 23527 Calabasas Rd, Calabasas, CA 91302, United States</li>
                <li>Phone: +1 818-222-6062</li>
                <li>Email: littlelemon@gmail.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="instagram.com">Instagram</a></li>
                <li><a href="facebook.com">Facebook</a></li>
                <li><a href="twitter.com">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;