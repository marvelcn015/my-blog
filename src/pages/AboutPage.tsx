import React from 'react';

function AboutPage() {
    return (
        <div className="container py-5">
            <header>
                <h1 className="text-center mb-4">個人履歷</h1>
            </header>
            <main>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="%PUBLIC_URL%/my.jpg" alt="照片" />
                    </div>
                    <div className="col-md-8">
                        <section className="mb-5">
                            <h2 className="mb-3 text-primary">企劃、策展與演講經歷</h2>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="mb-2">2019 未來領袖，魔術口才訓練營 / 總召&講師</li>
                                <li className="mb-2">2019 辦一場，能改變思維的分享講座 / 特邀講師</li>
                                <li className="mb-2">2020 未來領袖，魔術口才訓練營 / 總召&講師</li>
                                <li className="mb-2">2023 台積電青年築夢計畫_語您童行 / 複審入圍 (全國前16強)</li>
                                <li className="mb-2">2023 台積電青年築夢計畫_翻閱思考 / <span className="badge bg-primary">年度獲獎</span></li>
                                <li className="mb-2">語您童行 / 企劃監製&網管</li>
                                <li className="mb-2">翻閱思考 / 組織營運部PM&網管</li>
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h2 className="mb-3 text-primary">攝影</h2>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="mb-2">第三屆康堤盃 高中職攝影B組 / 最佳攝影獎</li>
                                <li className="mb-2">自由接案攝影師</li>
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h2 className="mb-3 text-primary">家教</h2>
                            <hr />
                            <h5 className="mb-3">數學</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">109會考 / A++ <span className="badge bg-primary">原始分數: 99/100</span></li>
                                <li className="mb-2">112學測 數B / 12級分 <span className="badge bg-primary">頂標</span></li>
                            </ul>
                            <h5 className="mb-3">英文</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">GEPT 中高級初試 ( L: 102, R: 114 )</li>
                                <li className="mb-2">112學測 / 14級分 <span className="badge bg-primary">PR93</span> + 英聽A</li>
                                <li className="mb-2">高中校內英語演講 第一名</li>
                                <li className="mb-2">2022臺師大英文辯論公共論壇 <span className="badge bg-primary">南區優勝</span></li>
                                <li className="mb-2">多場模擬聯合國經驗</li>
                                <li className="mb-2">市長語文獎</li>
                                <li className="mb-2">具1~2年家教以及升學補習班工作經驗</li>
                                <li className="mb-2">CWT 中檢中高級</li>
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h2 className="mb-3 text-primary">資訊</h2>
                            <hr />
                            <h5 className="mb-3">軟體</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <strong>動態語言</strong>
                                    <ul>
                                        <li>CPE 3/8 (with Java)</li>
                                    </ul>
                                </li>
                                <li className="mb-2">
                                    <strong>Frontend Framework (學習中...)</strong>
                                    <ul>
                                        <li>Figma to Code</li>
                                        <li>React</li>
                                        <li>Bootstrap 5</li>
                                        <li>AJAX, Axios</li>
                                    </ul>
                                </li>
                            </ul>
                            <h5 className="mb-3">硬體</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">熟悉PC規格與組裝</li>
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h2 className="mb-3 text-primary">吉他</h2>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="mb-2">能自己準備自彈自唱</li>
                                <li className="mb-2">基礎FingerStyle</li>
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h2 className="mb-3 text-primary">其他興趣</h2>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="mb-2">心理學 / 社會學</li>
                                <li className="mb-2">羽球</li>
                                <li className="mb-2">戴水肺潛水</li>
                                <li className="mb-2">五隻IKEA大鯊魚飼主</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutPage;