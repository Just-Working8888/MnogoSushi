import React, { useState } from 'react';
import { Card, Image } from 'antd';
import AddRewue from 'Components/AddRewue/AddRewue';

const tabList = [
    {
        key: 'tab1',
        tab: 'Описание',
    },
    {
        key: 'tab2',
        tab: 'Отзывы',
    },
];

const contentList: Record<string, React.ReactNode> = {
    tab1: <p>Описание: Банановые молочные коктейли – вкусное и питательное блюдо, пользующееся большой популярностью среди любителей сладкого и здоровой еды.</p>,
    tab2: <AddRewue />,
};


const SingleProductCard: React.FC = () => {
    const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');


    const onTab1Change = (key: string) => {
        setActiveTabKey1(key);
    };


    return (
        <>
            <Card
                style={{ width: '100%' }}
                title={<div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <Image width={'100%'} height={'100%'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg'} />
                </div>}
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
            >
                {contentList[activeTabKey1]}
            </Card>
        </>
    );
};

export default SingleProductCard;