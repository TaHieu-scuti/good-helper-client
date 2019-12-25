import React, { Component } from "react";
 
class Content extends Component {
    render(){
        return(
            <div class="col-md-8 col-sm-12">
							<div class="tab-pane active container" id="c-profile">
								<div class="tr-single-box">
									<div class="tr-single-header">
										<h3><i class="ti-home"></i> Thông tin</h3>
									</div>
									<div class="tr-single-body">
										<div class="row">	
											<div class="col-lg-12 col-md-12 col-sm-12">
												<div class="form-group">
													<label> Họ và tên:</label>
													User
												</div>
											</div>
											<div class="col-lg-12 col-md-12 col-sm-12">
												<div class="form-group">
													<label> Email</label>
													email@gmail.com
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-sm-12">
												<div class="form-group">
													<label>Số điện thoại:</label>
													0123456789
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-sm-12">
												<div class="form-group">
													<label>Giới tính:</label>
													Name
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" class="btn btn-info btn-md full-width">Thay đổi<i class="ml-2 ti-arrow-right"></i></a>
							</div>
						</div>
        )
    }
}
export default Content;