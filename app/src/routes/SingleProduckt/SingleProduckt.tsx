import React, { FC } from 'react'
import classes from './SingleProduckt.module.scss'
import { Flex, Typography } from 'antd'
import { SingleProductCard, SmallCart } from 'Components'

const SingleProduckt: FC = () => {
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
                        <h1 color="#ffff">Банановый коктейл</h1>
                        <p>каталог {'>'}товары{'>'}Банановый коктейл
                        </p>
                    </Typography>
                </div>
            </div>
            <div style={{ height: '65vh' }}></div>
            <Flex gap={10} justify='space-between'>
                <SingleProductCard />
                <div style={{ width: '100%' }}>
                    <SmallCart />
                </div>

            </Flex>
            <br /><br /><br />
        </div>
    )
}

export default SingleProduckt
