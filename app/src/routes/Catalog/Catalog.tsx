import { Avatar, Button, Card, Flex, Image, Input, Segmented, Typography } from "antd";
import classes from "./Catalog.module.scss";
import { FC, useState } from "react";
import { AppstoreOutlined, BarsOutlined, CarOutlined, EditOutlined, EnvironmentOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { foods } from "data/test/testData";
import Meta from "antd/es/card/Meta";



const Catalog: FC = () => {
    const [list, setList] = useState<string>('Kanban')
    const items: any = {
        "Kanban": foods.map((item) =>
            <Card
                key={item.id}
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={item.image}
                    />
                }

            >
                <Meta
                    title={item.title}
                    description="This is the description"
                />
                <br />
                <Button className={classes.list_add}>В корзину</Button>
            </Card>
        ),
        "List": foods.map((item) =>
            <Card style={{marginBottom:'1rem'}} type="inner" title={item.title} extra={<a href="#">More</a>}>

                <Flex gap={19}>
                    <Image height={100} src={item.image} />
                    <Meta

                        title={item.title}
                        description="This is the description"
                    />
                </Flex>

            </Card>


        )
    }
    return (
        <div className={classes.main}>

            <div className={classes.main_baner} style={{ background: 'url("https://mnogosushi.kg/static/assets/images/banner/Footers-bg.png")bottom/cover' }}>
                <div className={classes.main_baner_tools}>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />

                    <Typography>
                        <h1 color="#ffff">Mnogosushi</h1>
                    </Typography>
                </div>
            </div>
            <div style={{ height: '45vh' }}></div>

            <br /><br />
            <div className={classes.main_form}>
                <Input className={classes.main_form_inp} />
                <Segmented
                    onChange={(e: any) => setList(e)}
                    className={classes.main_form_inp}
                    style={{ background: "#e8e8e8a7" }}
                    size="large"
                    options={[
                        { label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined /> },
                        { label: 'List', value: 'List', icon: <BarsOutlined /> },
                    ]}
                />

            </div>
            <div className={list === 'List' ? '' : classes.list}>
                {items[list]}
            </div>
            <br /><br />
        </div>
    );
};

export default Catalog;
