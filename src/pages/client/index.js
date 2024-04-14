import { Table } from 'antd'; 
import { useEffect, useState } from 'react';
import casual from 'casual-browserify'
import { Button } from 'antd';
import { Row, Col } from 'antd';
import "./client.css"
import { 
    FaInfoCircle,
    FaTrash,
    FaEdit,
    FaPlus
} from "react-icons/fa";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function generateData(length){
    return Array.from({ length  }, function(){
        return {
            name:casual.full_name,
            color:casual.rgb_hex,
            key:casual.unix_time
        }
    })
}
function displayColor(row){ 
    return <div className='color-box' style={{background:row.color }}></div>
}
function action(row){
    return <Row gutter={15}>
        <Col><FaInfoCircle className='icon'  color='#03a9f4' /></Col>
        <Col><FaTrash className='icon' color='#ff5722'  /></Col>
        <Col><FaEdit className='icon'  color='#4caf50'  /></Col> 
    </Row>
}
const columns = [
    {
        title:"Nom Client",
        dataIndex:"name",
    },
    {
        title:"Couleur",
        render:displayColor
    },
    {
        title:"Actions",
        render:action
    }
    
];
const tableConfig={
    columns,
    pagination:{
        pageSize: 5, // Number of items per page
        // total: dataSource.length, // Total number of items
        showSizeChanger: true, // Show options to change page size
        // showQuickJumper: true, // Show quick jumper input
    }
}
  
 

export function ClientPage(){
    const history=useHistory()
    const [data,setData]=useState([])
    useEffect(() => {
        console.log();
        setData(generateData(20))
    }, [])
    


    return <div className='bg-white h100 p-3'>
        <Row justify={"space-between"}>
            <h1>Liste des Clients</h1>
            <Button type="primary" onClick={()=>history.push("/add-client")} >
                <FaPlus color='white' size={12} style={{marginRight:".5em"}}/>
                Ajouter
            </Button>
        </Row>
        <Table {...tableConfig}    dataSource={data} />   
    </div>
}
export default ClientPage;
