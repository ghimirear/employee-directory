import react from "react";
// import footer.css from same folder
import './index.css';
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="copyright">
                            <p>Copyright © {year}  All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;