
import React, { useState } from "react";
import { Form, Input, Button, Radio, Row, Col, Popover } from "antd";
import { ChromePicker } from "react-color";
import "./add.client.css"

export function AddClient(){
    const [form] = Form.useForm();
    const [color, setColor] = useState("#000000");
    const [visible, setVisible] = useState(false);

    const onFinish = (values) => {
        console.log("Received values:", values);
    };

    const handleColorChange = (color) => {
        setColor(color.hex);
        form.setFieldsValue({ color: color.hex }); // Update form field with selected color
    };

    const content = (
        <ChromePicker color={color} onChange={handleColorChange} />
    );

    const handleVisibleChange = (visible) => {
        setVisible(visible);
    };
    return <div className="container h100 p-3" >
        <Row style={{marginBottom:'1rem'}}>
            <h1>Nouveau Client</h1>
        </Row> 
        
        <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            prefix: "86",
        }}
        scrollToFirstError
        >
            <Row>
                <Col span={12}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item
                                name="firstName" 
                                label={
                                    <div style={{width:"150px"}} >
                                        Prénom
                                    </div>
                                }
                                rules={[
                                {
                                    required: true,
                                    message: "Veuillez saisir votre prénom!",
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="lastName" 
                                label={ 
                                    <div style={{width:"150px"}} >
                                        Nom
                                    </div>
                                }
                                rules={[
                                {
                                    required: true,
                                    message: "Veuillez saisir votre nom!",
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="address"
                                label={ 
                                    <div style={{width:"150px"}} >
                                        Adresse
                                    </div>
                                } 
                                rules={[
                                {
                                    required: true,
                                    message: "Veuillez saisir votre adresse!",
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label={ 
                                    <div style={{width:"150px"}} >
                                        E-mail
                                    </div>
                                }  
                                rules={[
                                {
                                    type: "email",
                                    message: "E-mail invalide!",
                                },
                                {
                                    required: true,
                                    message: "Veuillez saisir votre e-mail!",
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        
                    </Row>

                    <Row gutter={24}>
                        <Col span={10}>
                            <Form.Item
                                name="gender"
                                label="Sexe"
                                rules={[
                                {
                                    required: true,
                                    message: "Veuillez sélectionner votre sexe!",
                                },
                                ]}
                            >
                                <Radio.Group>
                                <Radio value="male">Homme</Radio>
                                <Radio value="female">Femme</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        
                        <Col span={14}>
                            <Form.Item
                                name="phoneNumber"
                                label="Numéro de téléphone"
                                rules={[
                                {
                                    required: true,
                                    message: "Veuillez saisir votre numéro de téléphone!",
                                },
                                ]}
                            >
                                <Input addonBefore="+33" style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="color"
                                label={ 
                                    <div style={{width:"150px"}} >
                                        Couleur préférée
                                    </div>
                                } 
                                rules={[
                                {
                                    required: true,
                                    message: "Veuillez sélectionner une couleur!",
                                },
                                ]}
                            >
                                <Popover
                                content={content}
                                trigger="click"
                                visible={visible}
                                onVisibleChange={handleVisibleChange}
                                >
                                <div
                                    style={{
                                    width: 36,
                                    height: 24,
                                    background: color,
                                    cursor: "pointer",
                                    }}
                                />
                                </Popover>
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row gutter={24} justify={"end"}>
                        <Col>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Enregistrer
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </Form>
    </div>
}
export default AddClient