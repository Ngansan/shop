import {memo} from "react"
import "./style.scss"
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <h1 className="footer__about__logo">My shop</h1>
                            <ul>
                                <li>Dia chi: Ky tuc xa khu B</li>
                                <li>Phone: 0522664217</li>
                                <li>Email: </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li><Link to="">Liên hệ</Link></li>
                                <li><Link to="">Thông tin về chúng tôi</Link></li>
                                <li><Link to="">Sản phẩm kinh doanh</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="">Thông tin tài khoản</Link></li>
                                <li><Link to="">Giỏ hàng</Link></li>
                                <li><Link to="">Danh sách ưa thích</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="footer__widget">
                            <h6>Khuyến mãi & ưu đãi</h6>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action="#">
                                <div className="input-group">
                                    <input type="text" name="" placeholder="Nhập email" />
                                    <button type="submit" className="button-submit">Đăng ký</button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                        <FaSquareFacebook/>
                                    </div>
                                    <div>
                                        <FaInstagramSquare/>
                                    </div>
                                    <div>
                                        <FaLinkedin/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
};

export default memo(Footer);