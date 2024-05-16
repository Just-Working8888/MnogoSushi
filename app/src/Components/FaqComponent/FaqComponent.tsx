import FAQ from "Components/FAQ/FAQ";
import { Card, Col, Flex, Row, Statistic, StatisticProps, Typography } from "antd";
import Title from "antd/es/typography/Title";
import CountUp from "react-countup";
import classes from './FaqComponent.module.scss'


const formatter: StatisticProps['formatter'] = (value) => (
    <CountUp end={value as number} separator="," />
);
function FaqComponent() {
    return (
        <div>
            <Typography>
                <Title>Часто задаваемые вопросы
                </Title>

            </Typography>
            <Card>
                <Flex gap={32} align="center">
                    <FAQ />
                    <div>
                        <Flex gap={32}>
                            <div className={classes.main_imges}>
                                <img height={200} width={300} src="https://www.rabstol.net/uploads/gallery/main/95/rabstol_net_sushi_18.jpg" alt="" />
                            </div>
                            <Card className={classes.Statistic}>
                                <Row gutter={16}>

                                    <Statistic title="Довольных Клиентов" value={112893} formatter={formatter} />

                                </Row>
                            </Card>
                        </Flex>
                        <br />
                        <Flex gap={32}>
                            <Card className={classes.Statistic}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic style={{color:'white'}} title="На рынке Кыргызстана" value={4} precision={2} formatter={formatter} />
                                    </Col>
                                </Row>
                            </Card>
                            <div className={classes.main_imges}>
                                <img height={200} width={300} src="https://rnr.ua/storage/posts/image/19169359846924198.jpg" alt="" />
                            </div>
                        </Flex>
                    </div>
                </Flex>

            </Card>
        </div>
    )
}

export default FaqComponent