
import { RiDoubleQuotesL } from "react-icons/ri";
export const Testimonials=()=>{
    return (
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-row">
        <div className="testimonial">
          <span className="quote-icon"><RiDoubleQuotesL size={32}/></span>
          <p>"SoftSell helped us monetize unused licenses effortlessly."</p>
          <span>- Jane Doe, CTO at TechFlow</span>
        </div>
        <div className="testimonial">
          <span className="quote-icon"><RiDoubleQuotesL size={32}/></span>
          <p>"Quick process and great support team!"</p>
          <span>- John Smith, IT Manager at CloudNova</span>
        </div>
        </div>
        
      </section>
    );
  }
  
 
  