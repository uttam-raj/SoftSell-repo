
import { MdOutlineFileUpload } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";
export const HowItWorks=()=>{
    return (
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step"><MdOutlineFileUpload size={32}/> <span>Upload Your License</span> </div>
          <div className="step"><AiFillDollarCircle size={32}/> <span>Get a Valuation</span> </div>
          <div className="step"><RiBankFill size={32}/><span>Get Paid</span> </div>
        </div>
      </section>
    );
  }
  
  