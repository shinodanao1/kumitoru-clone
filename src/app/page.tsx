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
                    <div className="flex justify-end gap-x-8">
                        <Link href="">特徴</Link>
                        <Link href="">選ばれる理由</Link>
                        <Link href="">制作の流れ</Link>
                        <Link href="">料金プラン</Link>
                        <Link href="">制作実績</Link>
                        <Link href={""} className="flex items-center gap-2 bg-blue-500 text-white">
                            <Image src="https://files.svgcdn.io/material-symbols-light/docs-outline.svg" alt="ドキュメントのイメージ画像" width={28} height={28} />
                            <p>無料相談</p>
                        </Link>
                    </div>
                </div>
            </header>
            {/* メインセクション 1、2を横並び2,3を縦並びにする */}
            <section className="py-10 flex items-baseline">
                {/* 1 */}
                <div className="w-44 flex justify-center">
                    <Image
                        src="https://storage.googleapis.com/studio-design-asset-files/projects/7kadMmzW3G/s-108x665_v-fs_webp_1ae37481-905d-4f04-8997-946980c08d02_small.webp"
                        alt="scrollの画像"
                        height={123}
                        width={20}
                    />
                </div>
                {/* 2 */}
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 py-x bg-center bg-cover bg-center rounded-2xl bg-opacity-50 bg-[url(https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NXx8d2VifGVufDB8fHx8MTY0MjM2NzcxNA&ixlib=rb-1.2.1&q=80&w=1080)]" >
                        <div className="px-24 py-36 flex flex-col gap-y-8 max-w-full text-white">
                            {/* whitespace-pre-wrapだとgapで文字間開けられなかったので、ここだけh1に戻しました */}
                            <div className="text-4xl flex flex-col w-full gap-y-4">
                                <h1>初期費用無料</h1>
                                <h1>サブスクで高品質なホームページを提供</h1>
                            </div>
                            <p className="whitespace-pre-wrap">
                                {"私たちはお客様の力になることを目的としています。煩雑な手続きや処理はすべてこちらで代行します。\nまた、コンテンツに関してもこちらで意汲み取り、プロのデザイナーが制作する高品質なホームページを制作いたします。\nまずはお気軽に無料ホームページ制作相談をご利用ください。"}
                            </p>
                            <Link href={""}>
                                <button className="flex items-center gap-2 bg-blue-500">
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
                </div>
            </section>
        </div>
    )
}