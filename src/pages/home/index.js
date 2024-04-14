import { Card,Row,Col } from 'antd';
import { FaCalendar,FaUserFriends,FaAddressCard } from "react-icons/fa";
import { Badge } from 'antd';
import "./home.css"
import { useHistory } from 'react-router-dom';
export function HomePage(){
    const history=useHistory()
    return <>
        <Row justify={"center"} gutter={[16,8]}>
            <Col className='head'>
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="custom-card-container one">
                    <Row justify={"end"}>
                        <Badge count={"+99"}>
                            <a href="#" className="head-example" />
                        </Badge>
                    </Row>
                    <Row justify={"center"} align={"middle"} className='icon-container' >
                        <FaCalendar color='#2196f3' size={72}/>
                    </Row>
                    <div >
                        <div className="custom-card">
                            <h3 className='text-center'>my plannning</h3>
                        {/* <p>www.instagram.com</p> */}
                        </div>
                    </div>
                   
                </Card>
            </Col>
            <Col>
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="custom-card-container two">
                    <Row justify={"end"}>
                        <Badge count={27}>
                            <a href="#" className="head-example" />
                        </Badge>
                    </Row>
                    <Row justify={"center"} align={"middle"} className='icon-container' >
                        <FaUserFriends  color='#2196f3' size={72}/>
                    </Row>
                    <div > 
                        <div className="custom-card">
                            <h3 className='text-center'>Equipe</h3>
                        {/* <p>www.instagram.com</p> */}
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={24}></Col>
            <Col>
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="custom-card-container three">
                    <Row justify={"end"}>
                        <Badge count={"+99"}>
                            <a href="#" className="head-example" />
                        </Badge>
                    </Row>
                    <Row justify={"center"} align={"middle"} className='icon-container'>
                        <FaCalendar  color='#2196f3' size={72}/>
                    </Row>
                    <div >
                        <div className="custom-card">
                            <h3 className='text-center'>List of my Projects</h3>
                        {/* <p>www.instagram.com</p> */}
                        </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card onClick={()=>history.push("/client")} style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="custom-card-container four">
                <Row justify={"end"}>
                        <Badge count={"NEW"}>
                            <a href="#" className="head-example" />
                        </Badge>
                    </Row>
                    <Row justify={"center"} align={"middle"} className='icon-container'>
                        <FaAddressCard color='#2196f3' size={72}/>
                    </Row>
                    <div >
                        <div className="custom-card">
                            <h3 className='text-center'>Our clients</h3>
                        {/* <p>www.instagram.com</p> */}
                        </div>

                    </div>
                </Card>
            </Col>
        </Row>
        
    </>
}
export default HomePage