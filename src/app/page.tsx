import Image from "next/image";
import Link from "next/link";

export default function TopPage() {
    return (
        <div>
            {/* header */}
            <header className="px-10 py-10">
                <div className="flex items-center justify-between">
                    {/* 左のロゴ */}
                    <div>
                        <Image src="https://storage.googleapis.com/studio-design-asset-files/projects/7kadMmzW3G/s-2400x579_v-frms_webp_a8d3e5b1-8df1-4d11-b494-e7259b9dffb6_small.webp" alt="kumitoruのロゴ画像" width={160} height={60} className="w-[160px]" />
                    </div>
                    {/* 右のメニュー */}
                    <div className="flex items-center gap-x-8 font-medium">
                        <Link href="">特徴</Link>
                        <Link href="">選ばれる理由</Link>
                        <Link href="">制作の流れ</Link>
                        <Link href="">料金プラン</Link>
                        <Link href="">制作実績</Link>
                        <Link href={""} className="flex items-center gap-2 bg-blue-500 text-white rounded-md">
                            <button className="flex items-center px-4 py-4">
                                <Image src="https://files.svgcdn.io/material-symbols-light/docs-outline.svg" alt="ドキュメントのイメージ画像" width={28} height={28} />
                                無料相談
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
            {/* メインセクション 1、2を横並び2,3を縦並びにする */}
            <section className="py-10 flex items-end">
                {/* 1 */}
                <div className="w-44 flex justify-center -mt-28">
                    <Image
                        src="https://storage.googleapis.com/studio-design-asset-files/projects/7kadMmzW3G/s-108x665_v-fs_webp_1ae37481-905d-4f04-8997-946980c08d02_small.webp"
                        alt="scrollの画像"
                        height={123}
                        width={20}
                    />
                </div>
                {/* 2 */}
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 py-x bg-center bg-cover rounded-2xl bg-opacity-50 bg-[url(https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NXx8d2VifGVufDB8fHx8MTY0MjM2NzcxNA&ixlib=rb-1.2.1&q=80&w=1080)]" >
                        <div className="px-24 py-36 flex flex-col gap-y-8 max-w-full text-white">
                            <div >
                                <h1 className="text-4xl flex flex-col w-full whitespace-pre-wrap leading-relaxed font-black">
                                    {"初期費用無料\nサブスクで高品質なホームページを提供"}
                                </h1>
                            </div>
                            <p className="whitespace-pre-wrap">
                                {"私たちはお客様の力になることを目的としています。煩雑な手続きや処理はすべてこちらで代行します。\nまた、コンテンツに関してもこちらで意汲み取り、プロのデザイナーが制作する高品質なホームページを制作いたします。\nまずはお気軽に無料ホームページ制作相談をご利用ください。"}
                            </p>
                            <Link href={""} className="">
                                <button className="flex items-center gap-2 bg-blue-500 px-4 py-4 rounded-md font-medium">
                                    <Image src="https://files.svgcdn.io/material-symbols-light/docs-outline.svg" alt="ドキュメントのイメージ画像" width={28} height={28} />
                                    無料相談
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* 3 News */}
                    <div className="flex items-center gap-x-10 px-24 py-10">
                        <p>News</p>
                        {/* 日付 */}
                        <Link href="" className="text-gray-500">
                            2024.03.31
                        </Link>
                        <p>プロダクトリニューアルを行います。</p>
                    </div>
                    <hr />
                </div>
            </section>
            <section>
                <div className="flex items-start justify-center pt-10">
                    <p className="text-8xl text-gray-300 -mt-8">"</p>
                    <h1 className="whitespace-pre-wrap text-2xl font-black">
                        {"「ホームページを作りたいけど、よく分からない。」\n「初期費用が高い。」「いいサイトが出来ない。」\n分からなくても構いません。すべてお任せください。"}
                    </h1>
                </div>
                <div className="flex items-center gap-x-10 pt-10 font-bold">
                    <div className="bg-orange-100 rounded-2xl text-orange-600 px-12 py-10">
                        <h2 className="text-lg">相談は完全無料</h2>
                        <p className="text-sm pt-2 whitespace-pre-wrap">
                            {"お問い合わせ・相談の段階では一才お代\nをいただきません。\nサイト制作自体を検討している段階でも\n構いませんので、気になることなどあれ\nば気楽にご相談ください"}
                        </p>
                    </div>
                    <div className="bg-yellow-100 rounded-2xl px-12 py-10">
                        <h2 className="text-orange-600 text-lg">全てをお任せ</h2>
                        <p className="text-yellow-600 text-sm pt-2 whitespace-pre-wrap">
                            {"よく分からない、お任せしたいというお\n客様の場合、ご要望を汲み取って最適な\n形に仕上げさせていただきます。\n面倒なやり取りや、専門的な手続きなど\nは全てこちらで負担いたします。"}
                        </p>
                    </div>
                    <div className="bg-green-100 rounded-2xl px-12 py-10">
                        <h2 className="text-orange-600 text-lg">初期費用が無料</h2>
                        <p className="text-green-600 text-sm pt-2 whitespace-pre-wrap">
                            {"依頼する際は初期費用がある程度必要で\nすが、それでは負担が大きくなってしま\nいます。そこで、気軽にホームページ制\n作の依頼ができるように初期費用は頂い\nていません。"}
                        </p>
                    </div>
                    <div className="bg-blue-100 rounded-2xl px-12 py-10">
                        <h2 className="text-orange-600 text-lg">業界トップクラスのデザイン</h2>
                        <p className="text-blue-600 text-sm pt-2 whitespace-pre-wrap">
                            {"無駄な工程を削減し、相場よりも格安の\n料金で業界トップクラスのデザインを実\n現しています。\nお客様のご要望・イメージに寄り添う形\nでデザインさせて頂きます。"}
                        </p>
                    </div>
                </div>
                <div className="py-32 -rotate-2">
                    <h1 className="text-3xl text-center text-orange-500 underline decoration-4 decoration-yellow-400">高いクオリティのホームページを、安価に作成できます</h1>
                </div>
                <div>
                    <Link href={""} className="flex flex-col items-center">
                        <button className="border bg-white border-blue-500 z-10 rounded-md text-sm text-blue-500 font-bold p-2">１〜３営業日内に返信いたします</button>
                        <div className="flex bg-blue-500 px-20 py-4 -mt-4 rounded-md">
                            <div className="mt-6 flex">
                            <Image src="https://files.svgcdn.io/material-symbols-light/docs-outline.svg" alt="ドキュメントのイメージ画像" width={28} height={28} />
                            <button className="text-white text-xl font-bold">無料相談はこちら</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="pt-20">
                <div className="bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1504610926078-a1611febcad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MjR8fGJsYWNrfGVufDB8fHx8MTY0MjQ3MzgyNw&ixlib=rb-1.2.1&q=80&w=1080)]">
                    <div className="text-white">
                        <h1 className="text-center pt-10 text-3xl font-black">私たち選ばれる、3つの理由</h1>
                        <hr className="w-24 h-2 mx-auto mt-2"/>
                        <div className="flex justify-center gap-x-10 pt-10">
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8ZGVzaWdufGVufDB8fHx8MTY0Mjc3NTQ3Mw&ixlib=rb-1.2.1&q=80&w=1080"
                                    width={340}
                                    height={200}
                                    alt="デザインの画像"
                                    className="rounded-md"
                                />
                                <h2 className="font-bold pt-4">格安なのに最高品質のデザイン</h2>
                                <p className="whitespace-pre-wrap pt-4">{"私たちは、ノーコードでサイトを制作しています。\nそのため、無駄な工数を発生させず、安く提供してい\nます。"}</p>
                            </div>
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTl8fGN1c3RvbWVyfGVufDB8fHx8MTY0Mjc3NjI1Mg&ixlib=rb-1.2.1&q=80&w=1080"
                                    width={340}
                                    height={200}
                                    alt="提案の画像"
                                    className="rounded-md"
                                />
                                <h2 className="font-bold pt-4">お客様のご要望を「汲み取り」ます</h2>
                                <p className="whitespace-pre-wrap pt-4">{"何よりもお客様のご要望を最重視しています。お任せ\nしたい、デザインに拘りたい、記事を更新したい、な\nどお客様ごとのニーズをヒアリングでお聞きし、ご要\n望を汲み取ります。"}</p>
                            </div>
                            <div>
                                <Image
                                    src="https://images.unsplash.com/photo-1639111503666-56295742ed85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mjh8fHBjJTIwd2hpdGV8ZW58MHx8fHwxNjQyNzc2MzU2&ixlib=rb-1.2.1&q=80&w=1080"
                                    width={340}
                                    height={200}
                                    alt="パソコンの画像"
                                    className="rounded-md"
                                />
                                <h2 className="whitespace-pre-wrap font-bold pt-4">{"サブスクリプションだから\n制作から保守管理まで全てお任せ"}</h2>
                                <p className="whitespace-pre-wrap pt-4">{"お客様の負担を極力減らすため、当社では面倒な雑務\nや細々とした作業を引き受けています。\nそのため。お客様は煩わしいことでお時間を奪われる\nことはありません。"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}