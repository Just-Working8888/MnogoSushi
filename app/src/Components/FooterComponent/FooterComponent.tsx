import { FC } from "react"
import classes from './FooterComponent.module.scss'
import MainBtn from "Components/MainBtn/MainBtn"
import data from '../../data/test/footerItems.json'
import { Link } from "react-router-dom"
import { FilePdfOutlined, InfoCircleOutlined, VideoCameraOutlined, YoutubeOutlined } from "@ant-design/icons"
import Logo from "Components/Logo/Logo"
import { Button, Flex, Input, Tag } from "antd"


const FooterComponent: FC = () => {

    return (
        <footer className={classes.footer}>
            <div className={classes.footer_top}>
                <div className={classes.footer_top_contact}>
                    <div>    <Logo /></div>
                    <div>
                        {/* <h1>8 800 841-95-95</h1> */}
                        <h2>Служба поддержки</h2>
                    </div>
                    <div>
                        <h1>support@sport.ru</h1>
                        <h2>Служба поддержки</h2>
                    </div>
                </div>
                <div className={classes.footer_top_nav}>

                    <h1>Вакансии</h1>
                    <h1>Блог</h1>
                    <h1>Акции</h1>
                    <MainBtn title="Предложить  идею" />

                </div>
            </div>
            {/* <div className={classes.footer_main}>
                <div className={classes.footer_top_contact}>
                    <div>    <Logo /></div>
                    <div>
                        <h1>8 800 841-95-95</h1>
                        <h2>Служба поддержки</h2>
                    </div>
                    <div>
                        <h1>support@sport.ru</h1>
                        <h2>Служба поддержки</h2>
                    </div>
                </div>
                {
                    data.map((item, index) => <div key={index} className={classes.footer_main_col}>
                        <h1>{item.title}</h1>
                        <div>
                            {item.items.map((item, index) => <Link key={index} to={item.href}><h2>{item.title}</h2></Link>)}
                        </div>
                    </div>)
                }


            </div> */}
            {/* <Flex>
                <div className={classes.footer_main_col}>
                    <h1>Подпишитесь на нашу рассылку</h1>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <Input />
                            <Button type="primary">принять</Button>
                        </div>

                    </div>
                </div>
             
                <div>
                    Мы принимаем способы оплаты:
                    <Flex>
                        <Tag className={classes.paymant}>
                            <img src="https://mnogosushi.kg/static/assets/images/small/Visa.png" alt="visa" />
                        </Tag>
                        <Tag className={classes.paymant}>
                            <img src="https://mnogosushi.kg/static/assets/images/logo/mbank.png" height="40px" alt="mbank" />
                        </Tag>
                        <Tag className={classes.paymant}>
                            <img src="https://mnogosushi.kg/static/assets/images/logo/optima.webp" height="40px" alt="optima" />
                        </Tag>
                        <Tag className={classes.paymant}>
                            <img src="https://mnogosushi.kg/static/assets/images/small/Mastercard.png" alt="mastercard" />
                        </Tag>
                        <Tag className={classes.paymant}>
                            <img src="https://mnogosushi.kg/static/assets/images/small/GooglePay.png" alt="googlepay" />
                        </Tag>
                    </Flex>
                </div>
            </Flex> */}

            <div className={classes.footer_bot}>
                <ul>
                    <li><FilePdfOutlined />PDF  презентация</li>
                    <li><VideoCameraOutlined />Видео инструкция </li>
                    <li><InfoCircleOutlined />FAQ</li>
                    <li><YoutubeOutlined />Мы на YouTube</li>
                    <li>Политика конфиденциальности </li>
                    <li>Лицензионное соглашение</li>
                </ul>
                <p>Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",</p>
                <div>
                    beka
                    {/* <img src={gostLogo} alt="" /> */}
                    <h1>Разработка платформы</h1>
                </div>
            </div>
        </footer>
    )
}
export default FooterComponent