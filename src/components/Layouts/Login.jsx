import React, { Component } from 'react';
import image from '../../assets/img/logo.png';

class Login extends Component {
    render(){
      return (
        <div id="main-wrapper">
          <section>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="modal-body">
                    <div className="social-login center-tr">
                      <img src={image} className="default-logo" alt="drizvato" />
                    </div>
                    <div className="login-form">
                  
                      <form>
                      <h4 className="modal-header-title">Đăng nhập</h4>
                        <div className="form-group css">
                          <label>Email</label>
                          <div className="input-with-icon">
                            <input type="text" className="form-control" placeholder="Email" />
                            <i className="ti-user" />
                          </div>
                        </div>
                        <div className="form-group css">
                          <label>Password</label>
                          <div className="input-with-icon">
                            <input type="password" className="form-control" placeholder="*******" />
                            <i className="ti-unlock" />
                          </div>
                        </div>
                        <div className="form-group css">
                          <button type="submit" className="btn btn-primary btn-md full-width pop-login">Đăng nhập</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>	
        </div>
      );
    }
}

export default Login;