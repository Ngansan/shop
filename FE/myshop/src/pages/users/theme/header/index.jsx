import {Children, memo, useState} from "react"
import "./style.scss"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { formatter } from "utils/fomater";
import { CiShoppingCart } from "react-icons/ci";
import { ROUTERS } from "utils/router";



const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        }
        ,
        {
            name: "Sản phẩm",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Cá",
                    path: "",
                },
                {
                    name: "Tôm",
                    path: "",
                },
                {
                    name: "Rau",
                    path: "",
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.HOME,
        }
    ])
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top__left">
                            <ul>
                                <li>
                                    <IoMail/>
                                    ngan@gmail.com
                                </li>
                                <li>
                                    mien phi ship don tu {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top__right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <FaSquareFacebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaInstagramSquare/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaLinkedin/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaTwitter/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaRegUser/>
                                    </Link>
                                    <span>Dang nhap</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 ">
                        <div className="header__logo">
                            <h1>My Shop</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className= {menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {
                                                            menu.child.map((childItem, childkey) => (
                                                                <li key={`${menuKey}-${childkey}`}>
                                                                    <Link to={childItem.path}> {childItem.name}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 ">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formatter(2000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}></Link>
                                    <CiShoppingCart/> <span>5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        
        </>


    )
};

export default memo(Header);