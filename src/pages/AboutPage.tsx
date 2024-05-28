import React from 'react';
import Header from './components_AboutPage/Header';
import Section from './components_AboutPage/Section';
import UnorderedList from './components_AboutPage/UnorderedList';

function AboutPage() {
    return (
        <div className="container py-5">
            <Header title="個人履歷" />
            <main>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src={require('../assets/S__87580677.jpg')} width={'300px'} alt="照片" />
                    </div>
                    <div className="col-md-8">
                        <Section title="企劃、策展與演講經歷">
                            <UnorderedList
                                items={[
                                    '語您童行 / 企劃監製&網管',
                                    '翻閱思考 / 組織營運部PM&網管',
                                    '2023 台積電青年築夢計畫_翻閱思考 / ',
                                    '2023 台積電青年築夢計畫_語您童行 / 複審入圍 (全國前16強)',
                                    '2020 未來領袖，魔術口才訓練營 / 總召&講師',
                                    '2019 未來領袖，魔術口才訓練營 / 總召&講師',
                                    '2019 辦一場，能改變思維的分享講座 / 特邀講師'
                                ]}
                                hasBadge
                                badgeText={['', '', '年度獲獎', '', '', '', '']}
                            />
                        </Section>

                        <Section title="攝影">
                            <UnorderedList
                                items={[
                                    '第三屆康堤盃 高中職攝影B組 / 最佳攝影獎',
                                    '自由接案攝影師',
                                ]}
                            />
                        </Section>

                        <Section title="家教">
                            <h4 className="mb-3">數學</h4>
                            <UnorderedList
                                items={[
                                    '109會考 / A++ ',
                                    '112學測 數B / 12級分 ',
                                ]}
                                hasBadge
                                badgeText={['原始分數: 99/100', '頂標']}
                            />
                            <h4 className="mb-3">英文</h4>
                            <UnorderedList
                                items={[
                                    'GEPT 中高級初試 ( L: 102, R: 114 )',
                                    '112學測 / 14級分 ',
                                    '高中校內英語演講 第一名',
                                    '2022臺師大英文辯論公共論壇 / ',
                                    '多場模擬聯合國經驗',
                                    '市長語文獎',
                                    '具1~2年家教以及升學補習班工作經驗',
                                    'CWT 中檢中高級',
                                ]}
                                hasBadge
                                badgeText={['', '全國PR93', '', '南區優勝', '', '', '', '']}
                                badgeColor="primary"
                            />
                        </Section>

                        <Section title="資訊">
                            <h4 className="mb-3">軟體</h4>
                            <UnorderedList items={['CPE 3/8 (with Java)', '_']} />
                            <h6 className="mb-3">Frontend Framework (學習中...)</h6>
                            <UnorderedList items={['Figma to Code', 'React', 'Bootstrap 5', 'Axios', '']} />
                            <h4 className="mb-3">硬體</h4>
                            <UnorderedList items={['熟悉PC規格與組裝']} />
                        </Section>

                        <Section title="其他興趣">
                            <UnorderedList
                                items={[
                                    '心理學 / 社會學',
                                    '羽球',
                                    '戴水肺潛水',
                                    '基礎FingerStyle (吉他)',
                                    '五隻IKEA大鯊魚飼主',
                                ]}
                            />
                        </Section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutPage;