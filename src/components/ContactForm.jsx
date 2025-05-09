
export const ContactForm =()=>{
    return(
        <section className="contact">
            <h2>Contact Form</h2>
            <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Company" required />

            <select required>
                <option value="">Select Licence Type</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Adobe">Adobe</option>
                <option value="Autodesk">Autodesk</option>
                <option value="other">other</option>
            </select>
            <textarea placeholder="Message" required></textarea>
            <button type="Submit" className="cta">Submit</button>
            </form>
        </section>
    )
}