import Link from "next/link";

export default function Toppage() {
    return (
        <div>
            {/* header */}
            <section className="p-10">
                <header className="flex items-center justify-between">
                    {/* 左のロゴ */}
                    <div className="flex items-center">
                        <img src="https://storage.googleapis.com/studio-design-asset-files/projects/7kadMmzW3G/s-2400x579_v-frms_webp_a8d3e5b1-8df1-4d11-b494-e7259b9dffb6_small.webp" className="w-[160px] h-auto" />
                    </div>
                    {/* 右のメニュー */}
                    <div className="flex justify-end space-x-8">
                        <a href="">特徴</a>
                        <a href="">選ばれる理由</a>
                        <a href="">制作の流れ</a>
                        <a href="">料金プラン</a>
                        <a href="">制作実績</a>
                        <a href={""} className="flex items-center gap-2">
                            <img src="https://files.svgcdn.io/material-symbols-light/docs-outline.svg" width={28} height={28} />
                            <p>無料相談</p>
                        </a>
                    </div>
                </header>
            </section>
            {/* メインセクション */}
            <section className="pt-10">
                {/* []を使わないで　scrollの文字をメイン画像と横を少し被らせて表示させる方法がわかりませんでした */}
                <div className="w-[90%] h-[533px] relative bg-cover bg-center ml-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NXx8d2VifGVufDB8fHx8MTY0MjM2NzcxNA&ixlib=rb-1.2.1&q=80&w=1080')" }}>
                    <div className="w-[1294px] h-[273px] px-24 py-36 flex flex-col max-w-full text-white">
                        <p className="text-4xl">
                            初期費用無料
                            <br />
                            サブスクで高品質なホームページを提供
                        </p>
                        <p>
                            私たちはお客様の力になることを目的としています。煩雑な手続きや処理はすべてこちらで代行します
                            <br />
                            また、コンテンツに関してもこちらで意汲み取り、プロのデザイナーが制作する高品質なホームページを制作いたします。
                            <br />
                            まずはお気軽に無料ホームページ制作相談をご利用ください。
                        </p>
                        <a href={""} className="flex items-center gap-2">
                            <img src="https://files.svgcdn.io/material-symbols-light/docs-outline.svg" width={28} height={28} />
                            <p>無料相談</p>
                        </a>
                    </div>
                </div>
            </section>
            <div className="w-[10%] flex justify-center ">
                <img
                    src="https://storage.googleapis.com/studio-design-asset-files/projects/7kadMmzW3G/s-108x665_v-fs_webp_1ae37481-905d-4f04-8997-946980c08d02_small.webp"
                    height={123}
                    width={20}
                    className="items-center"
                />
            </div>
        </div>
    )
}