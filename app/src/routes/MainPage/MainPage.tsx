
import { useAppDispatch, useAppSelector } from "store/hook";
import classes from "./MainPage.module.scss";
import { FC, useEffect } from "react";
import { Baner, News, SendMail, TestCard } from "Components";
import { fetchQuetions } from "store/reducers/producRedusers";
import { Button, Card, Col, Flex, Row, Statistic, StatisticProps, Typography } from "antd";
import { fetchNews } from "store/reducers/newsReduser";
import MyComponent from "Components/Test";
import { AliyunOutlined, CarOutlined, EnvironmentOutlined, RightOutlined, StockOutlined } from "@ant-design/icons";
import { foods } from "data/test/testData";
import FAQ from "Components/FAQ/FAQ";
import CountUp from "react-countup";


const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const { Title, Paragraph, Text, Link } = Typography;
const MainPage: FC = () => {
  const { data } = useAppSelector((state) => state.quetions)
  const news = useAppSelector((state) => state.news.data)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchQuetions({}))
    dispatch(fetchNews({}))
  }, [])
  return (
    <div className={classes.main}>
      <div className={classes.main_baner} style={{ background: 'url("https://mnogosushi.kg/static/assets/images/banner/banner_2.webp")center/cover' }}>
        <div className={classes.main_baner_tools}>
          <Typography>
            <h1 color="#ffff">Mnogosushi</h1>

            <p>
              Суши, роллы, пиццы на заказ онлайн в Бишкеке
            </p>
          </Typography>
          <Card className={classes.main_baner_tools_btn}>
            <Flex gap={16}>
              <Button icon={<CarOutlined />} className={classes.main_baner_tools_btn_b} type="primary">Доставка</Button>
              <Button icon={<EnvironmentOutlined />} className={classes.main_baner_tools_btn_b}>Подобрать</Button>
            </Flex>

          </Card>
        </div>
      </div>

      <div style={{ height: '85vh' }}></div>
      <br /><br />
      <div>
        <Typography>
          <Title>Вам может понравиться</Title>


        </Typography>
        <br />
        <div className={classes.main_list}>
          {foods.slice(0, 6).map((item) => <TestCard id={item.id} image={item.image} title={item.title} />)}
          <Button type="primary">Смотреть все</Button>

        </div>
      </div>
    


    </div >
  );
};

export default MainPage;
