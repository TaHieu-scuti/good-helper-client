import React, { Component } from "react";
import { connect } from "react-redux";
import {
	FaInfo,
  } from "react-icons/fa";
 
class Content extends Component {
    render(){
        return(
            <div class="col-md-8 col-sm-12">
							<div class="tab-pane active container" id="c-profile">
								<div class="tr-single-box">
									<div class="tr-single-header">
										<h3><FaInfo /> Thông tin</h3>
									</div>
									<div class="tr-single-body">
										<div class="row">	
											<div class="col-lg-12 col-md-12 col-sm-12">
												<div class="form-group">
													<label> Họ và tên: </label>
													{this.props.user.first_name}
												</div>
											</div>
											<div class="col-lg-12 col-md-12 col-sm-12">
												<div class="form-group">
													<label> Email : </label>
													{this.props.user.email}
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-sm-12">
												<div class="form-group">
													<label>Số điện thoại : </label>
													{this.props.user.phone_number}
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-sm-12">
												<div class="form-group">
													<label>Giới tính : </label>
													{this.props.user.gender}
												</div>
											</div>

											{/* <div class="col-lg-12 col-md-12 col-sm-12">
												<div class="form-group">
													<label> Số chứng minh nhân dân : </label>
													{this.props.user.id_card_font}
												</div>
											</div> */}
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