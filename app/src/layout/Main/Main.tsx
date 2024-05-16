

import { HeaderComponent, SendMail } from "Components";
import FaqComponent from "Components/FaqComponent/FaqComponent";
import FooterComponent from "Components/FooterComponent/FooterComponent";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
export default function Main() {
    return (
        <Layout style={{ overflow: "hidden", background: 'black' }}>
            <Layout>
                <HeaderComponent />
                <Outlet />


                <div style={{ padding: '0 100px' }}>

                    <FaqComponent />
                    <SendMail />
                </div>

                <br /><br />
                <FooterComponent />
            </Layout>
        </Layout>
    );
}
