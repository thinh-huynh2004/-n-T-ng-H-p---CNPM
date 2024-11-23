import './login.css';
import { Link } from 'react-router-dom';

function LoginInterface() {
    return (
        <div className="grid__full-width background">
            <div className="screen_left">
            </div>
            <div className="screen_right">
                <div className="login">
                    <div className="login_left">
                        <div className="login_left_contain_img">
                            <img src={require("./img/hcmut.png")} alt="" className="login_left_img" />
                        </div>
                        <p className="login_left_name">THƯ VIỆN BK</p>
                    </div>
                    <div className="login_right">
                        <p>Đăng nhập</p>
                        <ul className="input">
                            <li>Tên đăng nhập</li>
                            <li>
                                <input className="login_input" type="text" placeholder="Nhập tên đăng nhập"/>
                            </li>
                            <li>Mật khẩu</li>
                            <li>
                                <input type="password" className='login_input' placeholder='Nhập mật khẩu'/>
                            </li>
                            <li className="forget_pass">
                                <a href="">Quên mật khẩu</a>
                            </li>
                        </ul>
                        <div className="footer_login">
                            <Link to = "login">
                                <button className="login_button">Đăng nhập</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginInterface;