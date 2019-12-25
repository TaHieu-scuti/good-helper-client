import React, { Component } from "react";
import Sidebar from './Sidebar';
import Content from './Content'
 
class Profile extends Component {
    render(){
        return(
            <div id="main-wrapper">
                <section class="tr-single-detail gray-bg">
				<div class="container">
					<div class="row">
                    <Sidebar />
                    <Content />
                    </div>
                    </div>
                    </section>
            </div>
        )}
}
export default Profile;