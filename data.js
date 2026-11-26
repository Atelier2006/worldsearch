/* =====================================================================
 * アスユイ お気に入りワールド データ（自動生成）
 * VRChatのお気に入りグループ（通常4 + VRC+拡張3）から抽出・同期。
 * カテゴリ: 展覧会系 / パーティクル / 雑多 / 本当におすすめ / まだ行ってない / チルワ / ゲムワ
 * note = 各ワールドの説明欄（日本語。自由に書き換え可）
 * tags = 日本語のテーマタグ（検索・絞り込み用）
 * 2026-11-23: 調査済み595件（おすすめ/チルワ/ゲムワ/パーティクル/展覧会系/雑多）の note と tags を、
 * 訪問者の感想調査に基づく新説明文・新タグに更新。未調査の「まだ行ってない」98件は従来のまま。
 * 2026-11-23: カテゴリ再編版。レポートの再編提案に基づき67件のカテゴリを実態ジャンルへ移動（内訳はレポート参照）。
 * 2026-11-23: タグ正規化版（カテゴリ再編版がベース）。表記ゆれ・同義タグを統一表記に寄せた。
 * 2026-11-26: 全件見直し版。説明文と公式説明を突き合わせ、タグを124種に統合（似たタグの統合・付け漏れ・付け間違い）。
 *   説明文の末尾の残骸「（」「 -」を除去、調査メモ風の文（「情報が乏しい」「現地で確認を」など）を公式説明から書き直し、
 *   Quest対応/PC専用 のタグを説明文と一致させ、表記（PC専用・ヴェネツィア など）をそろえた。
 *   「日本」= 日本の文化・風景・実在の場所が題材のもの。「初心者向き」= VRChatを始めたばかりの人に勧めやすいもの。
 * 2026-11-26: note を「VRChatの公式説明（official）＋ X・紹介記事などの情報」をまとめた1つの文章に統一。
 *   公式にしかない操作方法・注意書き・規模などを note に取り込み、情報の少なかった人気ワールドは X の投稿や紹介記事も反映した。
 *   サイトでは official を別枠で表示しない（official は同期と見直し用に残す）。
 * 2026-11-26: 情報の少ないワールド218件を人気順に X・紹介記事で調べ、VRChatの公式データ（作者・公開年・対応機種）と合わせて
 *   全218件の note に追記（X・記事の情報あり114件、公式データのみ104件。内訳は review-2026-11-26.md）。
 *   217件の対応機種を公式データで確かめ、Quest対応/PC専用 タグを付け直した。
 * ===================================================================== */

window.CATEGORIES = [
  {
    "id": "exhibition",
    "name": "展覧会系",
    "icon": "🖼️",
    "desc": "美術館・ギャラリー・写真展・博物館など、じっくり鑑賞して回るワールド",
    "ready": true
  },
  {
    "id": "particle",
    "name": "パーティクル",
    "icon": "✨",
    "desc": "パーティクル・映像演出が魅力のワールド",
    "ready": true
  },
  {
    "id": "misc",
    "name": "雑多",
    "icon": "🗂️",
    "desc": "ジャンル問わずのお気に入り",
    "ready": true
  },
  {
    "id": "recommend",
    "name": "本当におすすめ",
    "icon": "⭐",
    "desc": "とにかくおすすめしたい珠玉のワールド",
    "ready": true
  },
  {
    "id": "todo",
    "name": "まだ行ってない",
    "icon": "🧭",
    "desc": "気になっている未訪問ワールド",
    "ready": true
  },
  {
    "id": "chill",
    "name": "チルワ",
    "icon": "🌙",
    "desc": "のんびり過ごせる癒やし・雰囲気系",
    "ready": true
  },
  {
    "id": "game",
    "name": "ゲムワ",
    "icon": "🎮",
    "desc": "みんなで遊べるゲーム系ワールド",
    "ready": true
  }
];

window.WORLDS = [
  {
    "id": "wrld_ff5c1306-8119-4449-94cc-9df5d424457f",
    "name": "琳派展 RIMPA Gallery",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 1253,
    "visits": 8760,
    "tags": [
      "アート・展示",
      "日本",
      "解説あり",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bf566f70-75af-4387-9056-badeb34a9ab3/1/256",
    "note": "『風神雷神図屏風』で知られる琳派の作品112点（国宝10点・重文21点）を集めた本格美術展。宗達から光琳、抱一へ受け継がれる流れを、風神雷神図の比較から辿れる構成で、解説は日英対応。日本の美術展ワールドの決定版です。",
    "official": "『風神雷神図屏風』で知られる江戸時代の芸術流派「琳派（りんぱ）」の作品、計112点（うち国宝10点、重要文化財21点、有形文化財1点）を展示しているギャラリーワールドです。解説は日本語と英語に対応しています。This exhibition features a total of 112 artworks from the Rimpa school, an Edo period art movement famous for the Wind God and Thunder God. The collection includes 10 National Treasures, 21 Important Cultural Properties, and 1 Tangible Cultural Property. Text available in Japanese and English."
  },
  {
    "id": "wrld_091ba623-fe09-4871-b755-1bbcd890632a",
    "name": "【写真展】Framed Echo",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 161,
    "visits": 1742,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0f96c528-c2ec-4832-88b8-a0ab6fddf9fc/1/256",
    "note": "リアルな風景写真と、その場所で録った環境音をセットで展示する藍香の写真展。写真だけでなく音でも場の空気を記録した実験的な試みで、作者も静かな環境での鑑賞を勧めています。定員20人、PC専用。",
    "official": "リアル写真×音をテーマにした藍香の写真展です。写真とともにその場所の音を記録しているため、静かな環境での鑑賞を推奨します。"
  },
  {
    "id": "wrld_c13d5b71-b6f5-485a-a5af-9a28b9a89bff",
    "name": "holoAquarium （Prod. by Amelia Watson）",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 18032,
    "visits": 134828,
    "tags": [
      "VTuber",
      "水族館",
      "解説あり",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8fbaeea9-59cc-46d7-822e-79f2fca66e50/1/256",
    "note": "Amelia Watsonがプロデュースした、ホロライブ・ホロスターズのメンバーをモチーフにした海の生き物が暮らす水族館。海と海洋保全への思いから生まれた作品で、日英の解説や海中トンネル、本人とのフォトスポットまで揃っています。ファンでなくても楽しめる完成度です。PC専用。",
    "official": "Inspired by Amelia's love for marine life and ocean conservation, explore the wonders of the ocean in a relaxing aquarium, populated by strange, fascinating and familiar marine life featuring all members of hololive and holostars, an unforgettable experience awaits you! Thank you for all the love and support over the years! Credits: Producer: Amelia Watson holoAquarium World Map: Seafoam Creature Modelers: Twi, stupah, joules, pyroxene, Gon, Slvan, ROOJINALD, Rei21, Priichu, Hask Scripting: nullrefrepro Translations: Gomadare, Yuri, arc_, tototo Project Manager: Henma"
  },
  {
    "id": "wrld_e556b391-4aa3-4516-8f95-d36c6278c0f6",
    "name": "Far Future Propulsion: Museum of Nuclear Starflight",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 50,
    "recommendedCapacity": 30,
    "favorites": 1212,
    "visits": 10030,
    "tags": [
      "アート・展示",
      "宇宙・空",
      "学習・教育",
      "SF・近未来",
      "一人でゆっくり",
      "博物館",
      "解説あり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ab3b161b-9f22-4430-94f3-689bb462f342/1/256",
    "note": "核分裂・核融合エンジンなど未来の宇宙推進コンセプトを、原寸大モデルで展示する博物館。KTurretが2026年に公開した作品で、プロジェクト・ダイダロス級の巨大船を間近で見上げるスケール感が圧巻です。解説は日英韓対応。宇宙工学好きに刺さる硬派な一作。PC専用。",
    "official": "한국어 KR, English EN,日本語 JP Support. Explore the future of space exploration with 1:1 scale models of theoretical and experimental nuclear fission and fusion engines. Special Thanks for Atomic Rockets / projectrho"
  },
  {
    "id": "wrld_bcbcc816-ec8b-4b1e-b38c-6ff675bd374e",
    "name": "幻想コモノ水族館",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 6,
    "favorites": 878,
    "visits": 7585,
    "tags": [
      "水族館",
      "チル",
      "海・水中",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bd704220-9e3f-4adb-9633-d3a4d8b60446/4/256",
    "note": "魚の代わりに日用品が泳ぐ、小さな変わり種水族館。30種超のコモノに、それっぽい図鑑風の説明まで付いた作り込みが楽しい。Quest・モバイル対応で、ゆったり癒されたいときに。",
    "official": "可愛い日用品が泳ぎ回る小さな水族館です。 おひとり様でも、ご友人連れでも、是非ゆったりとお過ごしください。 30種類を超える個性豊かなコモノたちがお待ちしております。 ＃幻想コモノ水族館"
  },
  {
    "id": "wrld_d7b67b97-39b0-4601-b5f0-e55965ced95a",
    "name": "アイドルアライブ メモリアルライブホール",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 60,
    "recommendedCapacity": 40,
    "favorites": 48,
    "visits": 559,
    "tags": [
      "ボードゲーム",
      "アート・展示",
      "公式コラボ",
      "アニメ・キャラ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f106cd01-6291-4525-b0ce-d54f19da810f/3/256",
    "note": "ボードゲーム『アイドルアライブ』の世界を紹介する記念館ワールド。アイドルの紹介、イベント記録、イラストや4コマ漫画、グッズを展示し、外伝ゲームのライブホールも再現。原作を知らない人の入口にも。PC専用。",
    "official": "ボードゲームからアイドルを生み出す「Projec-IDOL-A-LIVE」の今とこれからがすべてわかる！ アイドル紹介、イベント情報、各種グッズなど"
  },
  {
    "id": "wrld_4be28a75-1c7e-4062-9b2a-fd3b551c8ba9",
    "name": "Kokunの飯テロ写真館（建設中）",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 55,
    "visits": 1162,
    "tags": [
      "写真・撮影",
      "カフェ・飲食",
      "アート・展示",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_efae5bf0-231f-4195-a456-afa9bc7a12d4/4/256",
    "note": "作者が外食のたびに撮りためた料理写真だけを飾る、ゆるい飯テロ写真館。作者自身『インスタ映えを想定していないので散らかっている』と明記する脱力感が持ち味。Quest対応で、同作者の写真博物館シリーズの一角。",
    "official": "外食の時に撮った写真を飾っています。構造が微妙なので作り直すかもしれません。インスタ映えを想定していないので散らかっています。ご了承ください。"
  },
  {
    "id": "wrld_7cf0cf14-6789-4213-a40a-18edabdf5a1f",
    "name": "日本の近代古銭博物館/Museum of Modern Japanese Coins",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 556,
    "visits": 4617,
    "tags": [
      "アート・展示",
      "日本",
      "一人でゆっくり",
      "博物館",
      "学習・教育",
      "解説あり",
      "歴史"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d422b28f-a97f-4eef-b840-64c9fb678b90/6/256",
    "note": "日本の近代貨幣の一部を、写真と解説文で展示する小さな博物館。明治以降のコインを順に眺めながら、貨幣のデザインと歴史を辿れます。古銭好きはもちろん、歴史の勉強にも。",
    "official": "日本の近代に造られた貨幣の一部を展示した博物館です。今後別の言語も追加予定です。リアルギフト恵んでください（） This is a museum exhibiting some of the modern coins minted in Japan. Additional languages will be added in the future."
  },
  {
    "id": "wrld_a1c3007b-284f-427a-8d62-0336dd7344ff",
    "name": "Virtual Dragon Boat Race 2024_TAIWAN EXCELLENCE",
    "category": "game",
    "subtype": "展示ワールド",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 1203,
    "visits": 11433,
    "tags": [
      "公式コラボ",
      "乗り物",
      "フレンドと",
      "体験型",
      "スポーツ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_91dbf77d-74c5-402e-b8c6-19734b59b3fd/2/256",
    "note": "ベルリンの台湾EXPO出展作。台湾の端午節の伝統競技ドラゴンボートレースを、みんなで息を合わせて漕ぐ体験型アトラクションとして再現した公式テーマパークで、台湾の輸出振興ブランド『台灣精品（TAIWAN EXCELLENCE）』が2024年に公開しました。容量重め、PC専用。",
    "official": "Experience the Taiwan Excellence Virtual Theme Park at the Taiwan EXPO in Berlin! From June 10 to 12, 2024, we invite you to immerse yourself in the world of Virtual Dragon Boat Racing - a unique sport that embodies the spirit and culture of Taiwan."
  },
  {
    "id": "wrld_75cef04d-e90d-40b7-9836-ca8bb54bea26",
    "name": "いつか、不鮮明に思い出して。",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 360,
    "visits": 2413,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "一人でゆっくり",
      "ノスタルジー",
      "個展"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c9b13f65-e5ca-4adb-be7c-c02038a053e3/3/256",
    "note": "フォトコン受賞歴多数のRuriraによる、VRC一周年記念ギャラリー。不鮮明な記憶のような写真と好きなものを集めた展示で、タイトルと写真が重なって胸に沁みます。思い出に浸りたい夜に、一人で静かにどうぞ。",
    "official": "RuriraのVRC一周年を記念した第二ギャラリーです。 不鮮明な記憶のような写真と、好きだったものをまとめています。 感想は＃Rurira2ndGalleryでツイートをお願いいします。"
  },
  {
    "id": "wrld_1ef8aa55-5469-4866-b8db-8032c33baa24",
    "name": "星島工業工場見学",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7258,
    "visits": 42174,
    "tags": [
      "ホラー・不気味",
      "アート・展示",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ab9d78cd-f11b-4fba-87e4-52f032545ceb/2/256",
    "note": "架空企業『星島工業』の工場見学ワールド。クイズや体験でメタニウム製品を学ぶ真っ当な社会科見学……のはずが、読み進めるほど違和感が忍び寄る、じわじわ系コンセプトホラー。Quest対応。",
    "official": "メタニウム製品でメタバースをもっと便利に。星島工業とメタニウムについて遊んで学べるバーチャル工場見学ワールドです。実在の企業・団体とは一切関係ありません。ホラー要素を含みます。"
  },
  {
    "id": "wrld_1810309c-1a33-4055-b2ed-9d536227d816",
    "name": "ギミック展覧会-Red-",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3791,
    "visits": 28265,
    "tags": [
      "アート・展示",
      "ギミック",
      "アバター",
      "アバター試着"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9a7d5d9a-f334-49f7-a5c0-1e8292279910/5/256",
    "note": "多彩なクリエイターのワールド／アバターギミックを手に取って試せる展覧会。購入前に触って確かめ、新しい改変アイデアも見つかる場所。",
    "official": "様々なクリエイターの作った、ワールド/アバターギミックを手にとって試せるワールドです。"
  },
  {
    "id": "wrld_b4ef640a-744e-49e0-9cd9-42e5615de4d6",
    "name": "まめっ子モール2 PC 常設展示",
    "category": "misc",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 165,
    "visits": 2277,
    "tags": [
      "アバター",
      "アート・展示",
      "大容量注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_64f46bf3-dfd5-4409-87d7-b73c218c4a6c/1/256",
    "note": "人気アバター『まめひなた』対応の衣装や小物をショッピングモール形式で並べた『まめっ子モール2』のPC版常設展示。容量は大きいが、改変の参考探しに便利なテスト版ワールド。",
    "official": "tesuto mameko2"
  },
  {
    "id": "wrld_26139117-8bb4-43a4-a4ec-378c18f54937",
    "name": "URBAN TRAGEDY ｜ 2050",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 5389,
    "visits": 31781,
    "tags": [
      "アート・展示",
      "SF・近未来",
      "映画・映像",
      "英語のみ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5a95cf80-982b-4f4c-9842-dcaf3f2ab334/4/256",
    "note": "水没した2050年のロッテルダムを巡る、PCVR向けの没入型アニメーション。プレショー、タイムマシン、2050年のロッテルダムの3幕構成で、STARTボタンで始まる約20分の演出を通して、気候災害と都市崩壊の行く末を見届けます。後から来た人と一緒に見るときはRESETボタンで最初から。案内は英語のみ、PC専用です。",
    "official": "URBAN TRAGEDY ｜ 2050 ｜ A Virtual Voyage in Times of Cataclysm ｜ A PCVR Animation Demo ｜ An immersive educational experience ｜ Sequence 1: Preshow / Sequence 2: The Time Machine / Sequence 3: Urban Tragedy - Rotterdam City 2050 ｜ Instructions : Use the START button to activate the amination. In case you wish to synchronize the experience for users who have joined latter, use the RESET button - this will reset the animation and allow you to start again with your new guests ｜ Note: This experience was designed for PwC GMBH in Düsseldorf and was initially presented 13-09-2024 in Rotterdam （The Netherlands） and was used as an educational VR presentation for students. Produced by : vm-people（https://vm-people.de/）and Immersive-X （https://immersive-x.de/-Designed by VRium Creative Team-Niko∗ ＆ THE SHUSHU"
  },
  {
    "id": "wrld_53d04329-e780-4a88-9388-61d1c53892a2",
    "name": "キツネツキ制作物展示場 -kitsune_tsuki works exhibition-",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 40,
    "recommendedCapacity": 25,
    "favorites": 749,
    "visits": 5070,
    "tags": [
      "アート・展示",
      "アバター",
      "ホラー・不気味",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1e67a6fb-13dd-4176-9b03-fc2925c5f30b/4/256",
    "note": "『右近』の作者キツネツキの3D作品展示場。展示の半分はクトゥルフ神話の生物という偏りが魅力の、異形・人外アバターの美術館です。ホラーというより、不気味で美しい造形を眺める場所。",
    "official": "キツネツキの制作したアバターなどの3D作品を展示しています。 半分ぐらいクトゥルフ神話生物です This is an exhibition of avatars and other 3D works created by kitsune_tsuki. About half of them are creatures from the Cthulhu Mythos."
  },
  {
    "id": "wrld_dae998ae-ae72-456a-b228-980b0e0775e0",
    "name": "Exhibition: The day before the Summer begins.",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 12,
    "recommendedCapacity": 6,
    "favorites": 5634,
    "visits": 80651,
    "tags": [
      "アート・展示",
      "ストーリー",
      "イラスト",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0ba3beee-4fc5-49df-8a11-c7e63ebf0b88/2/256",
    "note": "『PROJECT: SUMMER FLARE』の前日譚を兼ねたコンセプトアート展。ヨツミフレームが本編公開（2021年）の約1年前、2020年に公開した作品です。NPCの案内で短い物語を体験し、本編の世界観とギミックに触れられます。日英対応で、VRでもデスクトップでも楽しめます。本編の前に訪れたい一館。PC専用。",
    "official": "A PROJECT: SUMMER FLARE episode. JA, EN, VR, Desktop supported. Made with Udon. Twitter: ＃PROJECT_SF ＃夏が始まる一日前"
  },
  {
    "id": "wrld_c868a85d-4eb6-476f-951f-eb3c7341a5a0",
    "name": "LC New Kyoto Branch",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 30,
    "recommendedCapacity": 15,
    "favorites": 7383,
    "visits": 76275,
    "tags": [
      "アート・展示",
      "ギミック",
      "フレンドと",
      "探索",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6df7eca5-e0f3-44da-98fe-66401df53acd/1/256",
    "note": "ヨツミフレームの実験施設ワールド。2022年7月の公開時にはMoguraVRでも紹介されました。『PROJECT: SUMMER FLARE』のアイテム展示や新作ゲームの展示に加え、アスレチックや地下の『視覚狂気』まで仕込まれた複合型。本編クリア後の訪問がおすすめです。PC専用。",
    "official": "An experimental World to exhibit something."
  },
  {
    "id": "wrld_fb9a56fe-5fda-4551-975b-b0b759b4f37e",
    "name": "VRC Museum",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 64,
    "recommendedCapacity": 16,
    "favorites": 7919,
    "visits": 48950,
    "tags": [
      "アート・展示",
      "絵画",
      "再現ワールド",
      "一人でゆっくり",
      "映画祭・受賞作",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f5056793-e4cb-4cc8-b211-afd32fac9106/2/256",
    "note": "印象派の巨匠モネの世界に浸る美術館ワールド。Design Team Ectiqueによる作品で、2024年のベネチア国際映画祭 Venice Immersive に選ばれました。作品展示だけでなく、絵画の風景やモネの庭園を再現した空間に入り込め、セーヌ川の絵は水に満たされた部屋に、草原の絵は仮想の太陽の下に飾られています。白内障を患ったモネの視界をなぞり、終盤に進むほど景色がぼやけていく演出も。有料エリアあり。PC専用。",
    "official": "VRC Museum Monet Exibition. This special exhibition allows you to fully enjoy the beautiful works of the Impressionist master Claude Monet, as well as recreated spaces of his paintings and the garden he spent time in, all in the virtual reality world."
  },
  {
    "id": "wrld_d3be89ff-4a41-4b06-b31c-1f04e4d93726",
    "name": "Beyond Reality: Alpha",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 417,
    "visits": 19366,
    "tags": [
      "アート・展示",
      "合同展",
      "フレンドと",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0d6c16ed-bdd3-4413-b3b0-df1a6668a3d8/2/256",
    "note": "複数のアーティストが運営するバーチャル展示ワールド。『PROJECT: SUMMER FLARE』のヨツミフレームのアカウントから2019年に公開された、いろいろな作家の作品を一度に巡れるグループ展タイプのギャラリーで、おすすめの展示ワールドとしてXで挙げられることも。軽量で入りやすく、VRアートの入口として気軽にどうぞ。PC専用。",
    "official": "Beyond Reality is a virtual exhibition world maintained by various artists."
  },
  {
    "id": "wrld_c6bd81af-2747-4eee-8f66-06db2eb8104e",
    "name": "VR Photo Exhibition \"Experiment 1\"",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1309,
    "visits": 8337,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "合同展",
      "一人でゆっくり",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6d7abfa0-c1c4-47cc-ad10-87e8bd5f4525/1/256",
    "note": "KAI-YOUがアート展特集で筆頭に推した合同写真展。写真1枚とその世界を再現した3D舞台がセットで展示される実験的エリア、正統派ギャラリー、白い撮影スタジオ風空間まで。『見せる場所も作品』な、写真展の新しい形です。容量約295MB。",
    "official": "合同写真展\"Experiment : 1\" 撮影された写真は「＃VR_EXPERIMENT_1」のハッシュタグをつけていただけると励みになります。"
  },
  {
    "id": "wrld_ed1acb6a-fc2e-4d07-8ce7-86c36420fe47",
    "name": "Anique Museum",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 9303,
    "visits": 95182,
    "tags": [
      "アート・展示",
      "期間限定",
      "解説あり",
      "アニメ・キャラ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0fb1a2a6-42d0-4d23-9b24-c3da3051e6d2/15/256",
    "note": "アニメ・マンガ・ゲームの期間限定展を入れ替え開催するデジタル美術館。lainの通学路再現やMEIKO展のフォトブースなど、作品世界に入り解説と写真を楽しめる。",
    "official": "Anique Museumは、デジタルとリアルを融合し、日本のアニメ、マンガ、ゲームコンテンツを幅広く展示するとともに、クリエイターとの積極的なコラボレーションを通じて新たな文化創造を育み、没入感とアクセス性に優れた体験を提供することを目指しています。 The Anique Museum aims to provide an more immersive experience by combining digital and physical. We will collaborate with a wide range of Japanese anime, manga, and game contents, and fostering new cultural creations through active collaboration with creators."
  },
  {
    "id": "wrld_6f56ecd3-7cea-485e-91c4-b8fec1b1ed06",
    "name": "A trip down tako lane",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 4071,
    "visits": 37921,
    "tags": [
      "アート・展示",
      "VTuber",
      "解説あり",
      "イラスト",
      "探索"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_24de82ec-91cb-42ee-9c20-3e3f3188fb05/2/256",
    "note": "ホロライブEN・一伊那尓栖がtakodachiへの感謝を込めた誕生日公開のギャラリー。本人の音声ガイドで愛着ある作品を巡り、立体絵や隠し要素も楽しめる。",
    "official": "I want to dedicate this to all the takodachis out there for your continuous support! Happy birthday to us! You will find a collection of some of my beloved pieces and a little story behind them! Hope you like it!"
  },
  {
    "id": "wrld_f89683af-3d31-45a9-89d1-f84e0858ae09",
    "name": "Gallery＆Cafe -しょくぱん展-",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 38,
    "visits": 464,
    "tags": [
      "写真・撮影",
      "カフェ・飲食",
      "アート・展示",
      "チル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6856f70f-9722-41fc-aaf0-def979fbae30/1/256",
    "note": "作者しょくぱんがVRChatで撮りためた写真を、パンを売るカフェの空間で展示するギャラリー＆カフェ。作品を眺めたあとはカフェでひと息つける、鑑賞と休憩が地続きの作り。定員80人、PC専用。",
    "official": "しょくぱんがこれまでVRChat内で撮影してきた写真を展示したワールドです。パンをついでに売っているカフェのイメージで作成いたしましたので、お気軽にどうぞ。"
  },
  {
    "id": "wrld_06192d66-7a5a-4402-bb7c-980a118a8e99",
    "name": "旅するハムと世界のカケラ展",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 164,
    "visits": 1422,
    "tags": [
      "フォトグラメトリ",
      "アート・展示",
      "VTuber",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f1abe779-cfc5-4007-bad3-3d12ae978eec/4/256",
    "note": "バーチャルハムスター『もちはむ』と『おじはむ』の世界2周目の旅で集めた品々を3Dスキャンして展示。各地のグルメが並び、写真では伝わらない存在感で一緒に旅する気分になれる。PC専用、随時更新。",
    "official": "バーチャルハムスター「もちはむ」と「おじはむ」の世界2周目の旅応援企画「旅するハムと世界のカケラ展」のワールドです。 2匹が世界で見て、感じてきたものを随時更新で展示しています！ トラベラー：もちはむ、おじはむ ワールド制作・管理：きんとと ロゴ制作：猫日和きゃりこ World Travel VTuber Mochihamu"
  },
  {
    "id": "wrld_4176b649-a55c-4089-a89c-4c361cbfdeed",
    "name": "Tribology World",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 2559,
    "visits": 18086,
    "tags": [
      "アート・展示",
      "学習・教育",
      "体験型",
      "解説あり",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d2cf4721-9095-442c-87bb-7c1a63f51c3f/1/256",
    "note": "摩擦・摩耗・潤滑の学問『トライボロジー』を、押して動かして学べる体験型ワールド。問題と解説をギミックで再現する『体験する教科書』で、カーリングゲームや歴史年表も。研究者制作、Quest対応。",
    "official": "トライボロジー（摩擦・摩耗・潤滑に関する学問分野）について、実際にモノを動かして体験したり、学べるワールドです。"
  },
  {
    "id": "wrld_85c49af8-389b-4089-adfe-f17b002e025e",
    "name": "VRC World Bakers Lab",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 60,
    "recommendedCapacity": 60,
    "favorites": 1676,
    "visits": 7868,
    "tags": [
      "アート・展示",
      "学習・教育",
      "一人でゆっくり",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f4636c46-f76b-45c5-b7fb-aebcc393dc77/3/256",
    "note": "Blender未経験者向けのワールド制作講座『VRCワールドベイカーズ』の学校ワールド。講堂や制作のコツが詰まった各部屋は教材であると同時に、カラフルな造形そのものも見ごたえがあります。ワールド作りを始めたい人の入口に。PC専用。",
    "official": "VRCワールドベイカーズは、３Dモデリングソフト「Blender」を触ったことのない人がVRChatのワールド作成をゼロから学ぶための学校です。 半年間をかけて、ゆっくりワールド作成のノウハウを学ぶことが出来ます。 ご興味のある方はリンクより公式のディスコードサーバーへご参加ください。 ディスコードサーバーリンク https://discord.gg/RndbRnmPWm"
  },
  {
    "id": "wrld_f7079878-2648-46f0-8162-d478c12be43d",
    "name": "Onnon_ToeiDogaStudio1956",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 60,
    "recommendedCapacity": 60,
    "favorites": 865,
    "visits": 12392,
    "tags": [
      "アート・展示",
      "日本",
      "公式コラボ",
      "アニメ・キャラ",
      "再現ワールド",
      "歴史"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7295f046-1876-49f8-af5b-95b0c6848abb/2/256",
    "note": "1956年の東映動画スタジオ一期棟を完全再現した、東映アニメーション公式アーカイブ。日本初の長編カラーアニメが生まれた制作現場を歩き、当時のアニメ制作を追体験できます。",
    "official": "1956年当時、東洋一を誇る最新最大のアニメーション制作スタジオ「東映動画スタジオ 」を再現! In 1956, Toei Animation Studio was the largest and most up-to-date animation production studio in the East （The metaverse project ONNON STUDIOS by Toei Animation）"
  },
  {
    "id": "wrld_a3721aaa-3c06-4ce2-9b70-390add2a85b1",
    "name": "VRChatここから始めました",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 48,
    "recommendedCapacity": 48,
    "favorites": 6217,
    "visits": 84207,
    "tags": [
      "アート・展示",
      "博物館",
      "日本",
      "フレンドと",
      "歴史",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_638dd25e-ecfa-47ca-8176-baddde275748/14/256",
    "note": "VRChat日本コミュニティの歴史を年表と関連オブジェクトで辿る、歴史博物館ワールド。てーくんが2023年に公開した作品で、Steamでのアーリーアクセス開始（2017年2月）からの出来事が円形ホールの外周に並び、入場時に自分がVRChatを始めた日を入れると、年表のその時代へ移動できます。中央には昔VRChatにあったものや話題になったものの展示も。年表はフォームから追加・修正を申請でき、MoguraVRでも記録活動として紹介されました。古参も新参も楽しめる、容量約49MBと軽量な一館です。Quest・iOS対応。",
    "official": "VisitorはTrustedに、TrustedはVisitorに、なってゆきます。 （技術担当：mameneko・kimkim0106）"
  },
  {
    "id": "wrld_27e68060-730a-439e-9332-acda8f5d3547",
    "name": "みんなの懺悔展",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 1524,
    "visits": 13424,
    "tags": [
      "アート・展示",
      "神社仏閣・宗教",
      "フレンドと",
      "ネタ・ミーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ccb85554-a7cd-4bf9-b47e-a59eaaf9d270/30/256",
    "note": "『あなたもしませんか？懺悔を…』みんなの懺悔が掲示された、教会風のゆるい展示ワールド。ユーン提督が2025年に公開した作品で、他人の懺悔を眺めて笑ったり頷いたり、自分の懺悔も残せる（？）集い場です。約20MBと軽量、定員80人。Quest対応。",
    "official": "あなたもしませんか？懺悔を...."
  },
  {
    "id": "wrld_88c5bb1e-29e4-4db3-b5bd-dad9f1da9b75",
    "name": "Once upon a time",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 15006,
    "visits": 126304,
    "tags": [
      "アート・展示",
      "ストーリー",
      "写真・撮影",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1947c01f-2bf7-41fd-b5ea-a5fe6806a990/2/256",
    "note": "本が刺さったトンネルを抜け、光る本に触れて童話の世界を巡る物語仕立てのワールド。各地で写真を撮ると、最後に自分たちの絵本が完成します。お題『童話』の7DaysWorldWorks参加作で、のちにQuest対応などの調整が加えられました。ホラー要素はありません。Quest対応。",
    "official": "7DaysWorldWorks参加作品。お題『童話』で制作し、その後期間外でQuest対応や調整などを行っています。ホラー要素はありません。"
  },
  {
    "id": "wrld_735065d0-d80d-42dd-920f-38c989b7fc6b",
    "name": "仮想映画ポスター1展示ワールド / Fiction Movie Poster",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 156,
    "visits": 2050,
    "tags": [
      "アート・展示",
      "映画・映像"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6ffd2825-8bb6-4bd4-a731-095f3ad23f93/1/256",
    "note": "実在しない映画のポスターを皆で作って展示する参加型企画の第1回ワールド。応募作は原則すべて展示され、予告編まで作られた作品もひとつあります。街頭ビジョンの広告は入るたびにランダムで選ばれ、人によって違うものが映る仕掛け。街から展示場へ進む導線も映画館気分です。",
    "official": "皆で作成した仮想の映画ポスターを展示したワールドです。 感想は ＃VRC仮想映画ポスター1 でつぶやいてもらえると嬉しいです！ 1つだけ予告編まで。。。？ 街頭ビジョンに映ってる広告はインスタンスに入ったときにランダムで選ばれます！ 人それぞれ違うものが表示されます。"
  },
  {
    "id": "wrld_20a3beaf-0bfb-4ead-93df-6b150296439c",
    "name": "Museum-of-Vrpainting",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 15506,
    "visits": 117337,
    "tags": [
      "アート・展示",
      "個展",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ce57cc62-fd30-42b4-9276-3e9c5eae103a/2/256",
    "note": "せきぐちあいみのVRペインティング個展。世界初のVR個展を目指したクラウドファンディングで目標の3倍を集め、2020年にVRChatで開かれた展示で、翌年にはヴェネチア国際映画祭のVR部門でも紹介されました。立体的な鳥や鳳凰を全方向から眺め、絵の中へ入って記念撮影もできます。順路を進むほど作品世界に没入する美術館。PC専用。",
    "official": "vr-painting"
  },
  {
    "id": "wrld_0ab57861-abb2-4802-8783-4ae089ea268b",
    "name": "Spatialography",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 40,
    "recommendedCapacity": 32,
    "favorites": 5083,
    "visits": 25459,
    "tags": [
      "アート・展示",
      "フォトグラメトリ",
      "技術デモ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c830c760-e305-4f81-8208-71d0c245835b/2/256",
    "note": "額縁に入れる風景、球体に閉じ込めた滝、ボクセル化する実景。フォトグラメトリと3DGS（ガウシアンスプラッティング）で記録した空間そのものを作品化した、VoxelKeiの実験展示です。オーランドの小路や蔵王の樹氷原、触れるガウシアンスプラッティングなども並びます。作者は3DGSをVRChatに持ち込むツール『Spatialograph Maker』も公開していて、CGWORLDでも紹介されました。VR推奨、やや重め。PC専用。",
    "official": "Spatialography is a coined term that links Spatial （denoting space） with -graphy （denoting modes of depiction）. Technologies such as photogrammetry and Gaussian splatting have brought new means to record and reconstruct real-world places. Just as photography and film evolved from mere documentation into expressive media, so too will media that handle space develop techniques that go beyond simple recording. This world exhibits a series of prototype works created with questions in mind: how can these techniques be used as modes of expression? which methods are suited to the format of space? is it possible to make works that seem to speak through space? Spatialography is not a single work title; rather, it is a term we use to denote the ongoing practice and inquiry of transforming recorded space into expressive form."
  },
  {
    "id": "wrld_50d9933b-070d-43f5-a6d0-90d603b05e36",
    "name": "ニコニコ動画の歩き方（仮）",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 1251,
    "visits": 12890,
    "tags": [
      "アート・展示",
      "日本",
      "ネタ・ミーム",
      "集会・交流",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f7073232-44f0-411d-9a86-ba1bd5498897/57/256",
    "note": "ニコニコ動画の歴史・解説・面白ネタをパネル展示で辿る、非公式ファンミュージアム。会場はVRCニコニコ集会の舞台そのもので、動画視聴や集会にも使えます。古参には懐かしく、知らない人には入門になる一作。Quest対応。",
    "official": "ニコニコ動画についての解説や面白いネタをパネル形式で紹介するワールドです。外観は「VRCニコニコ集会（vR）」の会場を使用しており、動画視聴やイベント会場に最適化されています。 個人製作の非公式ファンワールドです。"
  },
  {
    "id": "wrld_4c5aea6b-68a6-422a-ac54-09b3bd1c3faa",
    "name": "合同写真展「色撮りどりの世界」",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 60,
    "recommendedCapacity": 16,
    "favorites": 182,
    "visits": 1252,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "合同展",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_457f71e8-8834-4c4f-95e1-ada9791a90c7/2/256",
    "note": "46名の参加者が色をテーマに持ち寄った写真120点を展示する大規模な合同写真展。Rolca_Alの主催で2026年に開かれ、作家ごとに異なる色の捉え方を見比べながら、VR写真の多様な表現を一度に楽しめます。PC専用。",
    "official": "参加者46名で世界の色合計120点の写真を集めた合同展示です。"
  },
  {
    "id": "wrld_de49d135-807d-44c1-a990-6e22d9be5173",
    "name": "Eson's 2023 Virtual Photography Gallery",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 38,
    "visits": 567,
    "tags": [
      "写真・撮影",
      "個展",
      "アート・展示",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5f713942-c280-4818-a229-508773b07a54/2/256",
    "note": "バーチャルフォトグラファーEsonが2023年に撮影したVR写真から厳選して展示する個人ギャラリー。2026年に公開されたミニマルな展示空間で、作者はリアル写真展への出展も果たした実力派です。定員64人、PC専用。",
    "official": "This world contain's a selection of hand picked photos that I took during 2023. Enjoy!"
  },
  {
    "id": "wrld_abc83867-d06a-420c-b35b-730b3da7afe3",
    "name": "nSignature: エヌシグ",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 568,
    "visits": 3326,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "フレンドと",
      "アバター",
      "アバター試着"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9a4c8742-e236-48f7-bb1e-f44ccb34c65d/7/256",
    "note": "まめふれんず向けの衣装を、実際に確かめたり試着したりできるショールームワールド。BOOTHショップ『nSignature（エヌシグ）』の都会的でクールなコーデを、ブランドの世界観ごと楽しめます。お気に入り探しと撮影に。",
    "official": "まめふれんず向けBOOTHショップ \"nSignature（エヌシグ）\"で販売中の衣装を、実際に確かめたり、試着して楽しめる。ブランドの世界観を体験できるショールームワールドです。"
  },
  {
    "id": "wrld_def101e2-70bc-47f3-afa0-83098bb89f95",
    "name": "ClothGallery -ENCLO-",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2951,
    "visits": 23289,
    "tags": [
      "アート・展示",
      "アバター",
      "アバター試着",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ae9ae5df-9933-44d9-ad4e-9794e09d0e0c/10/256",
    "note": "BOOTH新作衣装10点を実物と同じ質感で間近に確かめられる、高級感ある総合展示ワールド。約2週間ごとに入れ替わり、制服などの企画展も開かれるため購入前の比較に役立つ。",
    "official": "アバター改変を楽しく、身近に。 総合的な衣装展示ワールド-ENCLO- 常に新しい衣装が展示されております。 展示依頼はXまたはDiscordよりお願い致します。【 7月10日~24企画展示中！】"
  },
  {
    "id": "wrld_d86df516-7fb5-4015-bbd4-0481cf0ba861",
    "name": "Virtual Hobby Festival 2026",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 7182,
    "visits": 70212,
    "tags": [
      "アート・展示",
      "期間限定",
      "写真・撮影",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ab9b2c12-900a-4ebe-ab2f-3d40241b4a20/2/256",
    "note": "ホビージャパン×V主催、全22社が集まった玩具の祭典（2026年3〜4月・17日間限定）。おもちゃサイズの視点で巨大なプラモやフィギュアの間を歩け、全フロア撮影OK。Quest対応。",
    "official": "Virtual Hobby Fes 2026 （バチャホビ2026）is a toy festival built on the concept of \"See, Learn, Touch, and Play!\" Come and enjoy your favorite hobbies in virtual space! バーチャルホビーフェス2026（バチャホビ2026）は、見る！知る！触れる！遊ぶ！をコンセプトとしたおもちゃの祭典です。バーチャル空間でホビーを楽しもう！"
  },
  {
    "id": "wrld_18820e1e-2f7c-4dde-b4bd-0c6038e26cd5",
    "name": "MarinWorldWorld",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 14012,
    "visits": 69040,
    "tags": [
      "水族館",
      "再現ワールド",
      "解説あり",
      "写真・撮影",
      "日本",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_af370478-ead5-4606-b47d-3814a778e661/4/256",
    "note": "福岡の水族館『マリンワールド海の中道』の公式ワールド。ゆにふらさんらクリエイターが館内と展示を忠実に再現したデジタルツインで、2025年の公開時にはMoguraVRでも紹介されました。美しい大水槽やショープール、バックヤード覗き、話しかけるとトリビアを教えてくれるざりがに君の案内とシュールな遊び心が同居し、自分のペースで学んで笑える水族館体験です。VRに不慣れな人向けの案内もあり。PC専用。",
    "official": ""
  },
  {
    "id": "wrld_a9f89a73-06df-4acf-b1a6-58ed26fc816f",
    "name": "にゃこみフォトグラワールド",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 17,
    "visits": 340,
    "tags": [
      "フォトグラメトリ",
      "アート・展示",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d7795620-84b2-4c58-a435-dd76e596f2f3/9/256",
    "note": "iPhone 15 ProとScaniverseで撮影した各地のフォトグラメトリを並べた展示ワールド。にゃこみが2025年に公開した作品で、対象物のそばに現地写真も添えられ、実物と3Dモデルの見比べができます。実在のモノの質感をVRで眺める記録展示。PC専用。",
    "official": "いろんなフォトグラを展示しています。時に現地写真も添えて。 Scaniverseを使用。iPhone 15 Proで撮影。"
  },
  {
    "id": "wrld_5eee9b86-8dd5-4c22-a779-174cccd61f5f",
    "name": "Tsukurunomori Avatars Garden",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1199,
    "visits": 10192,
    "tags": [
      "アバター",
      "アバター試着",
      "公式コラボ",
      "アート・展示",
      "チル",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e4eb4c79-8bf1-4725-8994-59da03c57116/1/256",
    "note": "ツクルノモリ公式アバター全27体を展示・試着できる公式ワールド。歴史コーナーやイベントスペースに加え、ベッドとミラーのあるチル空間も併設。ファンの拠点として使える場所です。",
    "official": "ツクルノモリ株式会社の公式アバターワールドです。 全27体の公式アバターを展示・試着いただけるほか、ツクルノモリVRの歩みを知る展示コーナーも併設。 開放的な庭園で、交流や試着、写真撮影をゆっくりとお楽しみください。 The official avatar world of Tsukurunomori. In addition to exhibiting and trying on all 27 official avatars, there is also an exhibition corner showing the history of Tsukurunomori VR. Please enjoy your time socializing, trying on avatars, and taking photos in this open garden."
  },
  {
    "id": "wrld_1bf99727-1caa-416f-863c-9e704c320c45",
    "name": "『Elychiffon写真展』2026/4",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 41,
    "visits": 564,
    "tags": [
      "写真・撮影",
      "個展",
      "アート・展示",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_659d14c7-000a-4ba1-b956-d073bdfc05c0/1/256",
    "note": "個人作家Elychiffonによる写真展の2026年4月版。ほぼ毎月新しい会期のワールドが公開される継続型の個展シリーズで、月ごとに展示が入れ替わります。定員64人。過去会期も別ワールドで公開中。Quest対応。",
    "official": "『Elychiffon写真展』2026/4 展示ワールドです！"
  },
  {
    "id": "wrld_32ea3f32-46f9-4c8f-ad67-c43945cab8fc",
    "name": "虚拟数码博物馆V1.1 Virtual Digital Product Museum",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6339,
    "visits": 43424,
    "tags": [
      "アート・展示",
      "博物館",
      "解説あり",
      "ノスタルジー",
      "歴史"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6068dadb-90a4-476b-9b1d-1d4d564cc9cc/7/256",
    "note": "そろばんからVRヘッドセットまで、古今東西のデジタル機器を時代ごとの展示室で辿る中国の仮想博物館。豊富なモデルと説明が好評で、懐かしの家電を眺めて思い出話に花が咲きます。現在はベータ版のため、不具合が残っている場合もあります。",
    "official": "《虚拟数码博物馆》是一个以消费类电子产品为主题的虚拟博物馆，目前已经开放游览中，正在 Beta 测试中，可能会有部分错误和问题，可以进群交流和反馈建议。 \"Virtual Digital Product Museum\" is a virtual museum with the theme of consumer electronics. It is currently open for tours and is in beta testing. There may be some errors and problems. You can join the QQ group to communicate and give feedback."
  },
  {
    "id": "wrld_eaa15880-e198-40d5-a7d2-41dfa3146d8f",
    "name": "完成しなかったものたち展",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2915,
    "visits": 19814,
    "tags": [
      "アート・展示",
      "入場時間制限",
      "解説あり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_88c08358-1c1e-4b9a-86df-bb2ab5851612/3/256",
    "note": "完成に至らなかったワールドの画像と、断念した理由や学びを展示する企画展。物悲しい草原から巨大な地下空間へ、跳ね橋を下ろしながら進みます。作り手なら共感せずにいられない内容です。入場は毎時5〜15分の10分間のみ（すでに誰かが中にいれば、いつでも入れます）。",
    "official": "完成しなかったワールドの思い出や学びを展示しています。毎時5～15分の10分間だけ入場可能です。（入場済のユーザがいればいつでも入場可能です）"
  },
  {
    "id": "wrld_37c10a9d-cd69-4a76-8447-b5c916ffaa22",
    "name": "Sushi Aquarium 淡水棟",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 22887,
    "visits": 212257,
    "tags": [
      "水族館",
      "解説あり",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2499a487-ec46-49d0-af5b-3c2e2cddf06e/4/256",
    "note": "川を遡る順路で世界の淡水魚44種を巡る水族館。イトウやピラルクの迫力、ウーパールーパーの仕草、桟橋から覗く大水槽まで、地域別の生態展示が楽しめます。いちばん奥のポータルから、姉妹館の『Sushi Aquarium 海洋棟』へ続けて巡れます。Quest対応。",
    "official": "世界の淡水魚などを展示している水族館ワールドです（展示数44種類）。kaiiiiiiiiiさんから公開されている続編ワールド「Sushi Aquarium 海洋棟」では海の生き物たちを展示しています。当ワールド内最奥にあるポータルより続けてご覧ください。 このワールドの建築物および魚類のモデルはkaiiiiiiiiiさんと共同で制作されました。"
  },
  {
    "id": "wrld_1946f92a-1bcf-4947-8c4d-99d8f77a2dbb",
    "name": "Sushi Aquarium 海洋棟",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 47428,
    "visits": 390226,
    "tags": [
      "水族館",
      "解説あり",
      "海・水中",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b360f855-3f02-43e5-8603-342f40fcf918/6/256",
    "note": "ジンベエザメが泳ぐ大水槽から深海展示まで、実在の海洋生物70種を解説付きで巡る本格水族館。魚の習性まで再現した動きと海中トンネルで、Questでも本物の水族館のような鑑賞ができます。最後のポータルから、姉妹館の『Sushi Aquarium 淡水棟』へ続けて巡れます。Quest対応。",
    "official": "魚を中心とした海洋生物を展示している水族館ワールドです。（現在展示数70種）long-potatoさんより公開されている続編ワールド「Sushi Aquarium 淡水棟」では世界各地の淡水魚を展示しております。当ワールドの最後にポータルを設置しておりますので続けてご鑑賞ください。ワールド及び魚類のモデルはlong-potatoさんと共同で制作されました。ごゆっくりお楽しみください。"
  },
  {
    "id": "wrld_c438719e-9be1-4c8f-b166-3a2a6fd21e98",
    "name": "SPring-8",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 70,
    "recommendedCapacity": 40,
    "favorites": 2495,
    "visits": 16507,
    "tags": [
      "再現ワールド",
      "学習・教育",
      "日本",
      "写真・撮影",
      "解説あり",
      "探索"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b2ce661b-f916-4c8f-9e31-563d61a6a745/5/256",
    "note": "兵庫県の大型放射光施設SPring-8の蓄積リング棟を原寸大で再現した非公式ワールド。周長1436mの巨大施設を自転車で巡る社会科見学ができます。専門外でも圧倒されるスケール感。解説と模型付き。",
    "official": "兵庫県にある大型放射光施設SPring-8の蓄積リング棟内を再現したワールドです。非公式です。"
  },
  {
    "id": "wrld_d772a63e-22b8-4cce-a49c-edd581320555",
    "name": "VRC地球生命史ミュージアム 新館 ［EN / JP］",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 5830,
    "visits": 24565,
    "tags": [
      "アート・展示",
      "博物館",
      "動物",
      "解説あり",
      "大容量注意",
      "学習・教育",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2b0e3b0a-0536-48c8-9085-3512783e7d30/1/256",
    "note": "地球46億年の生命史を時代順に辿る博物館の新館。クリエイティブ・コモンズで公開された古生物の3Dモデルを集め、前作の3倍ほどの規模に作り直されました。サカバンバスピスから恐竜の骨格、新生代の哺乳類まで、実物大のスケールに圧倒されます。日英対応。容量約1GBと大きいので事前ダウンロード推奨。PC専用。",
    "official": "【ワールド容量かなり大きいので事前ダウンロード推奨です】 クリエイティブ・コモンズ・ライセンスの元で配布されている古生物に関する3Dモデルを集めた博物館です。前作のフィードバックを受けて再構築し、3倍ほどに規模拡張させました。。英語対応も行っています。 English support is available !"
  },
  {
    "id": "wrld_fd78c898-0b00-4161-ae8f-7e2da2b43990",
    "name": "Shinji's Photo Gallery ＆ Home《突貫工事》",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 26,
    "visits": 521,
    "tags": [
      "写真・撮影",
      "ホームワールド",
      "アート・展示"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ccd7436e-3761-425d-aead-0c014a0f5064/3/256",
    "note": "正月休みのラスト3日間で作り上げたという、ノリと勢い100％の個人写真ギャラリー兼ホームワールド。写真は1・2階に展示され、3階には撮影スペースとチルスペースもあります。『突貫工事』の名の通り勢い重視の作りで、展示と自宅が同居する手作り感が魅力。容量約234MB。",
    "official": "思い立ったが吉日。ノリと勢い100％、ワールド制作知識0％で、正月休みのラスト三日間をフルに使って\"突貫工事\"でフォトギャラリー兼ホームワールド兼撮影ワールドを作ってみました！ 写真は1階と2階で展示、3階には撮影スペースとチルスペースがあります。2026/4/14 【更新】メインギャラリーの向かいにサブギャラリーを増築"
  },
  {
    "id": "wrld_3bf658ae-4836-4794-8388-9135feb32466",
    "name": "仮想写真研究所",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 60,
    "recommendedCapacity": 60,
    "favorites": 1623,
    "visits": 10492,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_15ecaeee-2040-436d-923e-054f813b215d/2/256",
    "note": "仮想写真を『写真』として成立させる展示の基準を目指した、写実的な写真展示室。額装の質感やライティングまで作り込まれ、現実の写真家からも作り込みを絶賛された本格派。期間展示もあるので、写真好きは定期チェックを。PC専用。",
    "official": "仮想写真研究所（Virtual Photography Lab）"
  },
  {
    "id": "wrld_03110bee-2e62-4790-8506-8f473fa4b494",
    "name": "RoomieTale バーチャルのくらし研究所ツアー （ アーカイブ ） Virtual LifeStyle Lab Tour （archive）",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 1512,
    "visits": 8938,
    "tags": [
      "アート・展示",
      "アーカイブ",
      "フレンドと",
      "一人でゆっくり",
      "大容量注意",
      "家・部屋"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fbfb27d5-692a-4103-83a6-329cfdc3a120/4/256",
    "note": "オカムラ主催の3D空間コンペの入賞作発表イベント（2024年7月15日）を残したアーカイブワールド。ホームワールドコンペの入賞作品の部屋の数々やクリエイターのフィーチャー展、メトロミューのパフォーマンスを、本をめくるように巡れます。バーチャルの『くらし』の提案が詰まった展示です。容量約610MBと重め。",
    "official": "RoomieTale バーチャルのくらし研究所ツアー （アーカイブ） 2024年7月15日に行われた３D空間コンペ入賞作品発表イベントのアーカイブワールドです。イベントの様子（Youtube）https://www.youtube.com/live/0d0wZZqFVl8?si＝uJEmd_FTFRe4QDlb ［コンテンツ］ ・RoomieTale ホームワールドコンペティション入賞者作品 ・RoomieTale フィーチャー展作品 ・MetroMew パフォーマンス RoomieTale Virtual LifeStyle Lab Tour （archive） Archived world of the event held on 15 July 2024 to present the winning entries of the 3D spatial competition. the event movie （Youtube）https://www.youtube.com/live/0d0wZZqFVl8?si＝uJEmd_FTFRe4QDlb ［Contents］ ・RoomieTale Homeworld Competition Winners' Works ・RoomieTale Feature Exibition ・MetroMew Performance"
  },
  {
    "id": "wrld_07e9d737-8957-4ac6-9128-8d08c05c4fc9",
    "name": "実写合成ミュージアム-RealPhotoFusionMuseum",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 21741,
    "visits": 113757,
    "tags": [
      "写真・撮影",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_29128513-9eb3-4bc1-add5-e7c1af10b3c7/9/256",
    "note": "渋谷など実写の写真の中に入り、アバター姿で記念撮影できるミュージアム。VRMVワールドも手がけるK1UCH1が2025年に公開した作品で、写真の中でもちゃんと影や奥行きが出るので、Xでは「VRでAR」のようだと話題になりました。設定不要でカメラを置くだけで映える一枚が撮れ、遠近法遊びやフレンドとの集合写真にも向きます。写真は随時追加予定。PC専用。",
    "official": "現実の写真の中に入れるワールドです。写真は随時追加予定。It's a world that puts you in the picture of reality."
  },
  {
    "id": "wrld_faf400ac-00b3-4b3d-aad5-0fca67e68a88",
    "name": "Petal One - Art Gallery",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 191,
    "visits": 2080,
    "tags": [
      "アート・展示",
      "一人でゆっくり",
      "ストーリー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8309f7a3-ba80-4638-bffc-57166d56ef1b/2/256",
    "note": "一輪のひなぎくと一人の人間をモチーフにした、英語圏作家Beigieのアートギャラリー。静かな空間に作品コレクションが並ぶ前編で、人気の後編『Petal Two』へ続く物語の始まりです。一人で静かに鑑賞したい人向け。",
    "official": "A daisy, a person, a collection of arts. Credits to friends : ＠chowchow0704 ＠shaefyr.vr ＠niem.vr ＠HakujaVR"
  },
  {
    "id": "wrld_aba119c0-9dcc-484d-8ac4-8343fc0b9fe7",
    "name": "個展「自由工芸展」",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 15,
    "recommendedCapacity": 12,
    "favorites": 412,
    "visits": 3765,
    "tags": [
      "アート・展示",
      "個展",
      "日本",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a67040a0-e786-4436-b45f-2dba528dc222/6/256",
    "note": "工芸作家・磁佑の第2回個展のVRChat会場。変形メカ『カニタマ』で知られる作家の工芸作品を、現実の根津の個展に先駆けてバーチャルで鑑賞できます。鑑賞後はラウンジで雑談も。伝統工芸とインターネット文化の融合です。",
    "official": "工芸作家磁佑第2回個展「自由工芸展」のVRChat会場です。展示を見た後に雑談もできるラウンジ完備。 現実会場での展示期間は4/11~4/19となります。詳細は作者Xをご覧ください Jiyu-2nd solo Exhibition:Jiyu kogei ten"
  },
  {
    "id": "wrld_ffb0af53-b42a-4250-a7f4-1198bf5366b2",
    "name": "VirtualFrogMuseum Keronmo",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 6851,
    "visits": 74053,
    "tags": [
      "アート・展示",
      "博物館",
      "解説あり",
      "動物",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4834e4ed-6b44-4e32-9eff-2946e67d078a/2/256",
    "note": "世界中のカエル約100種を、作者手作りのモデルとユーモラスな解説で紹介するカエル専門博物館。mozukuiが2024年に公開した作品で、手に取ると説明が出て、クリックで大きくなるギミックも。カエル好きにはたまらない一館です。Quest対応。",
    "official": "VirtualFrogMuseum Keronmo introduces approximately 100 types of frogs from around the world! I hope you'll have a great time."
  },
  {
    "id": "wrld_f5a298f6-83e6-45ee-be58-4fafbbd38139",
    "name": "Shader Fes 2019",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7014,
    "visits": 123454,
    "tags": [
      "アート・展示",
      "技術デモ",
      "解説あり",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f72701e9-9ad7-4d36-bb91-b68adf1fb7e0/1/256",
    "note": "100以上のシェーダー作品が集まった、2019年のシェーダーの祭典ワールド。2021年には200点超に規模を広げた『Shader Fes 2021』も開かれました。展示室はRGBAの4エリアに分かれ、美術館のような落ち着いた空間で『よくわからないけどすごい』表現の数々を巡れます。PC専用。",
    "official": "様々なクリエイターによる100以上のシェーダー作品を展示しています。Over 100 shader works by various creators are on display."
  },
  {
    "id": "wrld_dbe37582-aa96-43e9-a557-96cb955bd419",
    "name": "Artheum:ArtMuseum西洋絵画美術館 アルテウム v3.3",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 64,
    "recommendedCapacity": 8,
    "favorites": 7196,
    "visits": 36767,
    "tags": [
      "アート・展示",
      "絵画",
      "解説あり",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3e3b7287-b34f-432f-9b23-1556adf49730/11/256",
    "note": "古典から19世紀までの名画約150点を、原寸大・高精細で展示する西洋絵画美術館。全作品に解説と関連動画があり、ゴッホの『ひまわり』7作揃いなど現実では見られない並びも。並ばずに名画を独り占めできます。解説は日英中韓の4言語に対応しています。",
    "official": "【JP/EN/ZH/KO】古典絵画から19世紀頃までのパブリックドメインの絵画を原寸大で展示しています。 v1.0 2022/6/4 公開 v1.1 2022/7/4 絵画の増設、縮尺の修正、解説の修正、秘密の部屋の追加 v2.0 永久欠番 v3.0 2026/05/04 解説の大幅強化、一部高解像度化、デスクトップユーザー向け最適化、多言語対応（英語、中国語、韓国語） v3.1 2026/06/12 リニューアルおよび名称変更 v3.2 2026/06/21 ビデオプレイヤーをデフォルトローカル、グーバル切り替え機能を追加 v3.3 2026/07/03 軽微なバグの修正"
  },
  {
    "id": "wrld_8e355ba6-d97c-43ec-9fa3-9fb8dfdcd8ab",
    "name": "Kitsuneiro Small Exhibition",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 80,
    "recommendedCapacity": 24,
    "favorites": 4739,
    "visits": 29351,
    "tags": [
      "アート・展示",
      "イラスト",
      "日本",
      "個展",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e7bdedff-4d20-4aef-b5a7-a4b3336ae908/1/256",
    "note": "和風イラスト7点を巨大に展示。イラストレーターのキツネイロ本人が2023年に作った展示ワールドで、せっかくのVRだからと、奥行きが感じられるように作品を加工しています。平面なのに人物も建物も奥行きを持ち、角度で見え方が変わる、緻密な世界をVRで間近に味わう小さな展示会。PC専用。",
    "official": "キツネイロが制作したイラストの展示ワールドです / Kitsuneiro's Artwork Exhibition World"
  },
  {
    "id": "wrld_fddc2eff-c599-4168-ae32-7c9f78dba977",
    "name": "The Dinosaur Bone Gallery Museum.",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 7117,
    "visits": 59608,
    "tags": [
      "アート・展示",
      "博物館",
      "動物",
      "フレンドと",
      "映画祭・受賞作",
      "大容量注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_11175ac6-95b1-49da-8f0f-88104ea361f3/16/256",
    "note": "等身大の恐竜化石が並ぶ、暗い博物館を探索するワールド。すべて手作りの骨格は一部が生きているように動き、3階分の高さで現れる首長竜は圧巻です。2022年のヴェネツィア国際映画祭の選出作で、後から入った人がフレンドに合流できる仕掛けもあります。容量約533MBと大きめ。",
    "official": "A prehistoric Dinosaur Museum with everything handmade from scratch in SculptrVR, Masterpiece Studio Pro, Tiltbrush, Shapelabs and Blender for tidy up. Added Find my friends prefab, for help for late joiners to tours. I'm currently working on a new improved version of this for a standalone museum experience. Updated portals and entrance for the 79th Annual 2022 Venice Film Festival."
  },
  {
    "id": "wrld_942421ba-becf-4907-b56f-47070cc816cc",
    "name": "Exhibition: 1% of Virtuality",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 16259,
    "visits": 149033,
    "tags": [
      "アート・展示",
      "体験型",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_45facc62-59b1-490c-85bf-7f90b4b8452e/2/256",
    "note": "ヨツミフレームのメディアアート19点＋αを触って体験する展示。『PROJECT: SUMMER FLARE』などで知られる作者が2018年に公開した、仮想現実をテーマにした個展です。積む、立つ、見る位置で景色が変わり、近くのVRChat民まで可視化される常設展。PC専用。",
    "official": "1％ of Virtuality （\"1％の仮想\"） is a virtual private exhibition world with the theme of Virtual Reality."
  },
  {
    "id": "wrld_07848842-342e-4df1-9b5e-a5c305b49f8c",
    "name": "Pop ＆ Con Tilt Brush Museum",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1754,
    "visits": 14833,
    "tags": [
      "アート・展示",
      "絵画",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_77e2a3cf-28e0-4ade-baed-dda68f9406d2/1/256",
    "note": "韓国のVRアーティストJaehyuk LeeがTilt Brushで描いた3Dアートのギャラリー。VRChat配信者GreatMoonAromaの演出で、乗り物などを描いた立体的な筆致の中に入り込んで鑑賞できます。実在の個展から生まれた展示です。PC専用、容量大きめ。",
    "official": "This is gallery of tilt brush art by artist 'Jaehyuk Lee', directed by VRC streamer GreatMoonAroma. if you like 3d art. enjoy!"
  },
  {
    "id": "wrld_aa3990ff-7cd7-4ab0-be12-f91e735d7023",
    "name": "omochi museum",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1923,
    "visits": 17949,
    "tags": [
      "アート・展示",
      "演出・パーティクル",
      "体験型",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_edcae0d9-56e2-40c0-896d-872a4c9ea8d2/7/256",
    "note": "『CUE』などで知られるphi16の実験作を集めたミュージアム。2022年に公開され、シェーダーやパーティクル、インタラクティブなUIの試みを実際に触って体験できます。VRならではの表現の実験室のような展示です。PC専用。",
    "official": "omochi museum: An exhibition of interactive user interface design experiments"
  },
  {
    "id": "wrld_9ca01f09-cba6-4a88-925f-890832f3b20a",
    "name": "Kirie Shader Art Exhibition - 切り絵シェーダーアート展 -",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 978,
    "visits": 7566,
    "tags": [
      "アート・展示",
      "演出・パーティクル",
      "写真・撮影",
      "一人でゆっくり",
      "技術デモ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6006335d-3df9-4612-a5fc-7bfd8680e263/2/256",
    "note": "厚さ0の平面に無限の奥行きを作る『切り絵シェーダー』の作品39点を集めた常設アート展。角度で姿を変える表現の数々はVRでこそ。バーチャルライフマガジンでも紹介された、新しい表現の誕生を目撃できる展示です。PC専用。",
    "official": "切り絵シェーダーアート展のワールドです。不思議な作品をお楽しみください。 （ It's the World of Kirie Shader Art Exhibition. Enjoy the mysterious works of arts! ） ｜ 公式サイト https://onisawa-v.github.io/kirie/｜ バーチャルライフマガジン様に紹介頂きました！記事ページはこちら https://vr-lifemagazine.com/kirieshaderart/"
  },
  {
    "id": "wrld_faff0345-9772-4f9f-8dd4-43ed288d278e",
    "name": "Mofcosmos Space Illustration Gallery",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 592,
    "visits": 5568,
    "tags": [
      "アート・展示",
      "宇宙・空",
      "写真・撮影",
      "一人でゆっくり",
      "学習・教育",
      "解説あり",
      "イラスト"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_def452c9-2143-4bc9-b8b0-4ec7a5215a1f/2/256",
    "note": "宇宙機と宇宙施設を描いたイラスト34枚のギャラリー。全作品にモチーフの解説付きで、はやぶさやブラックホールなど宇宙の出来事を絵と一緒に学べます。VR宇宙博物館コスモリアに寄託している扉絵も展示。宇宙好きへの入口に最適です。",
    "official": "宇宙機や宇宙関連施設がテーマのイラストギャラリーです。現在34枚展示中、全てのイラストに解説がいれてあります。コスモリアに寄託している扉絵も追加しました。 This is a gallery of illustrations on the theme of spacecraft and space-related facilities."
  },
  {
    "id": "wrld_726ef015-f825-41e7-92bf-024d6d8a4009",
    "name": "exhibition / back seeing",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2848,
    "visits": 20163,
    "tags": [
      "アート・展示",
      "一人でゆっくり",
      "フレンドと",
      "体験型",
      "ネタバレ注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bd852516-d9b2-4bc6-bf14-8769a06ff94a/6/256",
    "note": "haruki_haruの体験型アート展『裏側の見方 展』。展示物の裏に回ると、紙の輪のくさりなど、予想を裏切るもう一つの顔が現れます。VRでしか成立しない仕掛けと建築の美しさが評判。ネタバレなしでどうぞ。",
    "official": "backside"
  },
  {
    "id": "wrld_99244962-4992-4a05-b42b-a2d597a14a2a",
    "name": "how to wrap fake",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 408,
    "visits": 3752,
    "tags": [
      "アート・展示",
      "一人でゆっくり",
      "少人数",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d84fa634-ca78-4464-93b4-632bf71b32bb/4/256",
    "note": "添えられた説明は『into（内側へ）』の一言だけという、定員16人の小さな展示ワールド。『Like a canvas』のharuki_haruが2024年に公開した作品で、何が起きるのかは、行って確かめるタイプです。PC専用。",
    "official": "into"
  },
  {
    "id": "wrld_36c8c2af-1b98-4395-8c0d-69d2348c5b9a",
    "name": "巨大数展 - Exhibition of Large Numbers -",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 996,
    "visits": 8642,
    "tags": [
      "アート・展示",
      "一人でゆっくり",
      "学習・教育",
      "フレンドと",
      "解説あり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ffec6f77-f546-49b6-83d4-1da4b1da041e/1/256",
    "note": "ただただ大きい数を考える展示。名前のある数から矢印表記、グラハム数、ふぃっしゅ数までを順に追う丁寧な解説で、数学が苦手でも楽しめたと評判。最初に自分の最大数を書く参加コーナーも。",
    "official": "ただただ大きい数について考える。 そんなロマン溢れる巨大数の世界をあなたも覗いてみませんか？"
  },
  {
    "id": "wrld_839d731f-5fa7-43b8-afac-541c076e21c9",
    "name": "蒼月美術館",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 235,
    "visits": 2762,
    "tags": [
      "アート・展示",
      "VTuber",
      "イラスト",
      "写真・撮影",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1a3afe4e-d39c-46c3-b93b-da8611eeccca/5/256",
    "note": "60名超のVTuberパネル、30枚以上の写真、15名のイラストレーター作品を集めた美術館。作者の初ワールドとは思えない物量で、『技術を感じるイラスト』と訪問記でも好評です。容量約360MBと重いので読み込みに余裕を。",
    "official": "初めてのワールド制作です。60名を超えるVTuberのパネル展示、30枚以上の写真、15名のイラストレーターによるイラスト展示！見づらい部分もあると思いますが、楽しんでくださいね！This is my first world creation. It features a panel exhibition of over 60 VTubers, more than 30 photos, and illustrations by 15 different artists! There might be some parts that are hard to see, but please enjoy!"
  },
  {
    "id": "wrld_1177972c-e9a0-4582-931e-220df1ac21f1",
    "name": "正方形に納まる世界、photo gallery -takakong-",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 64,
    "recommendedCapacity": 16,
    "favorites": 492,
    "visits": 4092,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "一人でゆっくり",
      "フレンドと",
      "個展"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2b40e6f0-13a7-4610-af72-6f1b797db6e7/3/256",
    "note": "スクエア写真専門フォトグラファーtakakongの個展。1:1の写真がモノトーンの静かな空間に並び、各作にタイトルと使用カメラ情報も。フレンド作品や実写スナップのコーナーもあり、写真好きが長居したくなるギャラリーです。",
    "official": "スクエアの良さが伝われば幸いです。 「＃正方形に納まる世界展」で感想とよかったと思った写真をツイートしてもらえると嬉しいです。"
  },
  {
    "id": "wrld_eac9cc8b-a51c-4156-a437-53372a07fa02",
    "name": "国宝『動植綵絵』展 / Japanese National Treasure \"Pictures of the Colorful Realm of Living Beings\" gallery",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2414,
    "visits": 9646,
    "tags": [
      "アート・展示",
      "日本",
      "絵画",
      "一人でゆっくり",
      "解説あり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a0016dbd-d21a-4996-9f8a-adf17fd3a204/1/256",
    "note": "伊藤若冲の国宝『動植綵絵』全30幅と『釈迦三尊像』、現実ではめったにそろわない計33幅が一堂に会する日本美術展。まず解説なしで作品と向き合う第一室、次に解説と読む第二室という本格構成で、高精細な絵を間近で鑑賞できます。PC専用。",
    "official": "江戸時代の日本画家・伊藤若冲の代表作『動植綵絵』および『釈迦三尊像』を展示したギャラリーワールドです。現実ではめったに揃うことのない33幅をお楽しみください。This is a gallery world showcasing Edo-period Japanese painter Ito Jakuchu's masterpieces: \"Colorful Realm of Living Beings\" and \"Sakyamuni Triad\". Enjoy the complete collection of 33 scrolls, an opportunity rarely available in reality. ∗Note: In-world descriptions are available in Japanese text only."
  },
  {
    "id": "wrld_b23addf0-097f-4be7-b19d-ac19a2570d7c",
    "name": "Costume Museum Entrance",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 2655,
    "visits": 21739,
    "tags": [
      "アート・展示",
      "アバター",
      "アバター試着",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3f9ca8aa-f23c-4b21-bdda-56df4662819f/3/256",
    "note": "人気アバター『桔梗』の衣装約120着を展示し、その場でワンクリック試着できる衣装ミュージアムの入口。価格や頒布先もその場で確認でき、改変初心者の衣装探しに最適。ここから全3会場へ。PC向け。",
    "official": "コスチュームミュージアムの入り口です。 コスチュームミュージアムの遊び方を確認することができます。 This is the Entrance for Costume Museum. The Costume Museum Entrance guide will help you explore the museum in the most beneficial manner. 코스튬 뮤지엄의 입구입니다. 코스튬 뮤지엄의 이용 방법을 확인할 수 있습니다."
  },
  {
    "id": "wrld_f158272c-7134-484b-8c21-aa09f0f2da7d",
    "name": "Record : Beyond the Lens",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 854,
    "visits": 6505,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "チル",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_00f26c18-4e03-4461-a2a7-f540ce83c84f/2/256",
    "note": "2025年3月の写真展を収めたギャラリーワールド。スナップ的な視点の写真を静かに眺める展示です。作者によると、現在は更新されていません。容量約212MB。",
    "official": "2025年6月現在こちらのワールドは更新されていません。 March exhibition-感想や好きな写真については「＃Record_BtL」を付けてXやBlueskyなどでポストして頂けると嬉しいです。"
  },
  {
    "id": "wrld_9f982dd8-144f-44a7-9752-8416dcbe572b",
    "name": "Like a canvas",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 1520,
    "visits": 12182,
    "tags": [
      "アート・展示",
      "ギミック",
      "一人でゆっくり",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1b0f8291-e6df-4d73-8f35-d25b7d8ac08d/4/256",
    "note": "『これは偽物？』――白いキャンバスに隠し仕掛けが潜む、haruki_haru作の小さなアートワールド。2024年に公開された作品で、触って、覗いて、仕掛けを見つける鑑賞体験。同作者の『小さな裏切者たち展』が好きな人におすすめです。Quest対応。",
    "official": "fake ?"
  },
  {
    "id": "wrld_253be946-b58a-49a5-9774-5901b7fd3447",
    "name": "Petal Two - Art Gallery",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1662,
    "visits": 13464,
    "tags": [
      "アート・展示",
      "自然・風景",
      "写真・撮影",
      "一人でゆっくり",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2d8283a7-0352-49d2-a394-0d30aaab9406/1/256",
    "note": "草原に点在する、屋外型アートギャラリー。Beigieが2025年に公開した作品で、足元のヒナギクをたどって3つの展示エリアを巡る開放的な構成に、実展示の再現やテーマ別ブース、撮影スポットも。白い壁の美術館とは違う、自然体でアートに触れる体験を。容量約320MBと重め、PC専用。",
    "official": "A daisy, a person, a grassfield, a collection of arts."
  },
  {
    "id": "wrld_eed0e817-8ae7-4435-97c2-3d4c84795d4b",
    "name": "Another Day 'PhotoGallery＋'",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 40,
    "recommendedCapacity": 25,
    "favorites": 486,
    "visits": 2990,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1ae21ca9-7e5a-418e-8473-0028f3f6a50f/3/256",
    "note": "ねおぽんずのフォトギャラリーに4つの企画展を組み合わせた複合展示ワールド。一人の作家の世界観をまとめて巡れるボリューム感が魅力です。容量約267MBと重めなので、読み込みに余裕を持ってどうぞ。",
    "official": "私、ねおぽんずのフォトギャラリーと４つの企画展からなる複合展示ワールドです。 感想は「＃NPGallery」か「＃VRC_AnotherDay」でXに投稿していただけると嬉しいです。"
  },
  {
    "id": "wrld_d6335c24-fc88-4754-b94a-8b9449277678",
    "name": "夢む -Hanae Art Gallery YUMEMU-",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 30,
    "recommendedCapacity": 20,
    "favorites": 4428,
    "visits": 22084,
    "tags": [
      "アート・展示",
      "海・水中",
      "個展",
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_65e40868-a238-489d-8877-0fa347f0f575/1/256",
    "note": "画家・中島華映の幻想的な水中アートを、海底の美術館で鑑賞するワールド。おぜき孝宏のサウンドデザインに包まれながら絵を体感でき、巨大な生き物が現れる演出もあります。夢の中を揺蕩うような空間です。",
    "official": "画家・中島華映の海底の美術館ワールド。 このワールドには巨大生物が登場する演出があります。 ワールドデザイン：かずたこ / サウンドデザイン：おぜき孝宏 / サウンドギミック：henomohesan ∗This world is the museum world of artist Hanae Nakajima. This world has a production in which giant creatures appear. World design: Kazutako / Sound design: Takahiro Ozeki / Sound gimmick: henomohesan ＃YUMEMU"
  },
  {
    "id": "wrld_10ffd05e-2023-4fe8-a4b4-70c27b00e489",
    "name": "Tokogrammetry Museum",
    "category": "recommend",
    "subtype": "ミュージアム",
    "capacity": 64,
    "recommendedCapacity": 64,
    "favorites": 2573,
    "visits": 12694,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "自然・風景",
      "日本",
      "フォトグラメトリ",
      "大容量注意",
      "解説あり",
      "博物館"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5ab6ccef-518d-4042-84d3-d8dabdedded3/4/256",
    "note": "全国で撮影した像や風景をフォトグラメトリと3DGSで立体化した巨大博物館。技術解説やクイズもあり、ゆっくり回れば1時間超。容量1.1GBと大きいので事前ダウンロード推奨。",
    "official": "フォトグラメトリと3DGSをぎっしり詰め込んだ巨大ミュージアム！ 圧倒的ボリュームに大満足間違いなし！ Photogrammetry ＆ 3DGS Museum."
  },
  {
    "id": "wrld_843b56c6-6c63-45fc-99ed-001ba7dde6a5",
    "name": "Patriki VR （ver.1.1）",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 50,
    "recommendedCapacity": 2,
    "favorites": 9124,
    "visits": 73480,
    "tags": [
      "アート・展示",
      "再現ワールド",
      "写真・撮影",
      "フレンドと",
      "街・都市"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_63313f6c-77ff-43ef-9f2d-ca350b8f997f/2/256",
    "note": "モスクワの『総主教の池』一帯を再現した、Organismの作者DrMorroによる散策ワールド。『Moscow Trip』シリーズの一作で、小説『巨匠とマルガリータ』の冒頭で主人公たちが出会ったベンチに座ったり、カフェ『マルガリータ』やグリボエードフ・クラブ、作者のギャラリーを訪ねたりできます。ガイド記事を片手に巡ると何倍も楽しめます。",
    "official": "Patriki VR is a small world from the 'Moscow Trip' series. I invite you to take a stroll through Patriarchs Ponds, one of the most recognizable corners of old Moscow. You can sit on the very bench where the heroes of 'The Master and Margarita' met at the beginning of the novel, visit a gallery featuring several exhibitions, stop by the old 'Margarita' cafe or Griboedov club. Enjoy your walk!"
  },
  {
    "id": "wrld_3cfe8c4f-594a-44a5-8eb7-ec85cd001016",
    "name": "合同ギャラリー：Np",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 576,
    "visits": 4369,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "一人でゆっくり",
      "フレンドと",
      "合同展"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bbe46992-ba54-4ef2-99a5-e0e38da6040e/3/256",
    "note": "12名のVRフォトグラファーを招いた合同写真展。各作家の『一番好きな一枚』と、主催者が設定したテーマで撮った写真が並ぶ、企画色の強い展示です。夜の落ち着いた空間で、1か月ほど誰でも個展を開ける企画展スペースもあります。",
    "official": "An Invitation gallery Featuring 12 photographers 12名のフォトグラファーさんをお呼びした合同写真展 ワールドです。夜の落ち着いた時間を過ごせる空間にしました。 ・常設展 各フォトグラファーさんの、 ［ 私が選んだ一番好きなお写真 と テーマを設定したお写真 ］ を展示しています。 ・企画展 1ヶ月を目安にお好きな期間、どなたでも個展を開催できます。 写真やイラストをワールドに展示したい方はお気軽にお声がけください。 X : ＠00rio0921 情報サイトはこちらですhttps://malleable-drip-17e.notion.site/An-Invitation-gallery-Np-300a28194d3680aca5fcc522cd66f3d1"
  },
  {
    "id": "wrld_ea538ac4-4d8c-4d37-a9f2-7965f09b76c2",
    "name": "写真が上手くなりたい人の写真展",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3387,
    "visits": 16624,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "学習・教育"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7cf1a453-51f5-4fae-984d-3d7d6dc30f55/2/256",
    "note": "本物そっくりのギャラリーでVRChatの写真を鑑賞できる、期間展示と常設展示からなる写真展。一周したあとボタンを調べると撮り方の解説が現れ、撮影ワールドや構図まで学べる二周目が楽しめます。Androidでは一部の仕掛けが動かない場合があります。",
    "official": "期間展示と常設展示からなるギャラリーです。一周見た後ボタンを調べて、ぜひ二周楽しんでいただけたら嬉しいです。androidの方は一部仕掛けの動作が保証されないかもです。"
  },
  {
    "id": "wrld_307a7199-5485-4538-8146-98b09cb6aa58",
    "name": "不定形な写真展",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 50,
    "recommendedCapacity": 16,
    "favorites": 1962,
    "visits": 16698,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "夜・夜景",
      "一人でゆっくり",
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_78a4d911-0229-4c32-a346-0289dac4fc0e/3/256",
    "note": "深夜のオフィスビルで開かれる写真展。現実の写真とVRChatの写真が並び、どちらがどちらか分からなくなる不思議な感覚が味わえます。ホラー要素はなし。静かな夜に、美しい写真を眺めて回る展示です。",
    "official": "深夜のオフィスビル リアルなのかVRなのか、作品なのか記録なのか、果たしてこの写真展は開催されてるのかされていないのか... R8 5/27 選抜したものにまた差し替え。"
  },
  {
    "id": "wrld_e216fb84-81b3-40f8-9716-7f22f6bb1500",
    "name": "Honda Motanion Lab",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 32,
    "recommendedCapacity": 30,
    "favorites": 3323,
    "visits": 20179,
    "tags": [
      "アート・展示",
      "乗り物",
      "公式コラボ",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_17ca8fc3-65da-433b-b852-4a6fba1553f0/3/256",
    "note": "未来のHondaの秘密研究所を舞台にした、Honda公式の体験ワールド。特別調査員としてカードキーで入り、名車バイクに跨ってエンジン音を聞いたり、CB1000 HORNETを自分好みにカスタムしたりして、多彩なフォトスポットで撮影できます。発売前のアバターギミックを先行して試着できるのもポイントです。",
    "official": "ここは未来のHondaの秘密研究所。 皆様はHondaの特別調査員として、ワールド内のバイクに触れながら「乗る」「カスタム」「写真撮影」といった体験をお楽しみいただけます。 エンジンをかけられるのはもちろん、様々な部位が実車さながらに駆動し、まるで本物のバイクが目の前にあるかのような感覚を体験できます。 また今後発売予定のアバターギミックを先行してご試着いただけます。 Welcome to Hondas secret mobility lab of the future. Youll be invited to join as a Honda field researcher. Interact with the motorcycles and enjoy experiences such as revving the powerful engines, customizing your motorcycle, and capturing photos. Start the engine, explore moving components, and experience the presence of a motorcycle that feels strikingly real. You can also preview upcoming avatar-based mobility features before their official release."
  },
  {
    "id": "wrld_5187ce2f-9863-44f8-b396-70fb981b84f0",
    "name": "体験作品「チュートリアリティ」",
    "category": "misc",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 4,
    "favorites": 1035,
    "visits": 6542,
    "tags": [
      "アート・展示",
      "体験型",
      "一人でゆっくり",
      "映画祭・受賞作",
      "VR推奨",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_366eac4a-100a-46a2-a1a5-9f31f2795373/2/256",
    "note": "3つのメタバースのチュートリアルを体験して『メタバースの常識』を探す、IVRC2024の受賞作品。設計思想の異なるVRChat・ツインバース・Idealterを巡る、常識を揺さぶる仕掛けだらけのコンセプト作で、初心者歓迎です（メタバース部門優秀賞・0b4k3賞）。VRモード専用で、動きは基本ローカルなので、全員そろってから一緒に進むのがおすすめ。PC専用。",
    "official": "「ようこそ、チュートリアリティへ。メタバース初心者のあなたを歓迎します。」 あなたは自分にとって最適なメタバースを探すため、異なる世界線・異なる設計思想の3つのメタバース、「VRChat」「ツインバース」「Idealter」それぞれのチュートリアルを体験する。 「メタバースの常識」を探そう。 //////////// VRモード限定（デスクトップモードでは動作しません）・基本ローカルなので全員で行動してください・全員そろってからの開始を強くおすすめします。IVRC2024メタバース部門 優秀賞（メタ・メタバース部門）/0b4k3賞"
  },
  {
    "id": "wrld_d4895750-8ca5-4870-8d3f-040cb10ec0b0",
    "name": "VRCおえかきミュージアム",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 50,
    "recommendedCapacity": 20,
    "favorites": 159,
    "visits": 3870,
    "tags": [
      "イラスト",
      "アート・展示",
      "集会・交流",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8cf0c294-c6c2-4d9d-8478-a2ca5fb13e44/7/256",
    "note": "VRChatユーザーが描いたイラストを集めた展示ワールド。毎月第1水曜日に集会が開かれ、描き手同士の交流の場にもなっている。専用のポータルワールドもあり、イラスト好きの定期巡回先に。",
    "official": "VRchatユーザーのイラスト作品などを展示するワールドです。毎月第１水曜日に集会を行っています。展示をご希望の方は公式ディスコードサーバーへ参加をお願いします。This is a world where VRchat users exhibit their illustrations and other works. Meetings are held on the first Wednesday of every month. If you wish to exhibit your work, please join the official discord server."
  },
  {
    "id": "wrld_4892f3f7-2ba0-47af-aad3-2e7a1b63d0e6",
    "name": "Re:collection - リコレクション -",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1931,
    "visits": 17118,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "一人でゆっくり",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1d2298ff-4cd9-41f0-b7b4-778e947170bd/2/256",
    "note": "16名のバーチャルフォトグラファーの作品を集めた常設の写真館。rocksuchが2021年に公開した、VRChatで撮られた写真を残すために生まれた展示で、各作品には撮影したワールドの情報も添えられています。水に沈むような建築も美しい一館です。2023年には新しいメンバーも加えた2号館『Re:collection2』も公開されました。PC専用。",
    "official": "Re:collection - リコレクション -"
  },
  {
    "id": "wrld_d4377961-6f88-46d1-9e03-04f0a7e63a8c",
    "name": "『一カ月展』",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 337,
    "visits": 2454,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "合同展",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_64380a97-92f2-48ae-9700-1292be1e8dd9/3/256",
    "note": "35名のフォトグラファーが『撮り始めの一カ月』と『今の一カ月』を並べた合同写真展。スイッチで写真を切り替えて上達の軌跡を見比べられます。各人のコメントも読み応えあり。写真を始めたばかりの人にこそ刺さります。",
    "official": "総勢35名のVRChatter及びVirtualPhotographerの「撮り始めの一カ月」と「今の一カ月」を記録した合同展示となります。感想はXにて＃VRC一カ月展でツイートいただけると嬉しいです。"
  },
  {
    "id": "wrld_2718702a-7d5c-4a90-b1f5-5f5253866ca9",
    "name": "Gallery 2718702a",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 40,
    "recommendedCapacity": 40,
    "favorites": 14746,
    "visits": 80643,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "体験型",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a6438f27-4d80-4201-ab41-3a476758d8bd/4/256",
    "note": "ただの写真展ではない。近づくと影が落ち、姿が映り込み、触れると質感まで返る仕掛け写真の常設展。『Eccentric Rooms』のsuzuki_iが2024年に開いたギャラリーで、常設展「額縁の庇護を逃れて」に加え、2階では入れ替わる企画展も楽しめます。おすすめの美術館・ギャラリーワールドとしてXで挙げられることも。PC専用。",
    "official": "常設展「額縁の庇護を逃れて」"
  },
  {
    "id": "wrld_91d659e5-6b5d-4b20-afbc-00458fd06213",
    "name": "- Realize- Youhei kuroinu Exhibition",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 276,
    "visits": 7207,
    "tags": [
      "アート・展示",
      "イラスト",
      "個展",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_27a0f9f5-c690-4833-92b2-c7028b5fa941/6/256",
    "note": "イラストレーター、クロイヌヨウヘイのVRChat二次創作イラスト『Realize』シリーズの個展。『もしアバターたちが意思を持って生きていたら』という空想から生まれた作品群で、各作品にはアバター名と背景のワールド名も記されています。VRChatの魅力を絵で味わえる展示です。",
    "official": "「Realize」はイラストレーターであるクロイヌヨウヘイのVRChatの二次創作イラストのシリーズです。もしアバター達が意思を持って生きていたら、そんな空想から作品は生まれました。アバターの名前と背景になっているワールドの名前も記載してあります。ぜひVRChatの魅力を楽しんでください。Realize\" is a series of VRChat illustrations by illustrator Youhei Kuroinu.The work was born from the vision of what it would be like if avatars lived with their own wills.The names of the avatars and the worlds in the background are also included.Please enjoy the magic of VRChat."
  },
  {
    "id": "wrld_3f454b44-6c61-484d-bd5b-0a5abfd5f3f2",
    "name": "フォトグラ携帯ゲーム機展示室（10/14Update）",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 2805,
    "visits": 18891,
    "tags": [
      "アート・展示",
      "フォトグラメトリ",
      "ゲーム",
      "写真・撮影",
      "ノスタルジー",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f69bfcf1-1848-4434-b1cf-0ef02c1665f9/12/256",
    "note": "実物の携帯ゲーム機をフォトグラメトリで取り込み、そのまま展示した博物館。バーチャルボーイやワンダースワンなど懐かしのハードを間近で眺められます。展示は随時追加中。Quest対応。",
    "official": "フォトグラメトリによってVRCに持ち込んだ、携帯ゲーム機たちを展示する博物館です。 2025/10/14 デジモンの写真、バーチャルボーイ本体、ワンダースワンカラーなどの箱を数点追加しました。"
  },
  {
    "id": "wrld_d9b3fd1c-a4ac-4671-8766-17cdb561732a",
    "name": "Exhibition / little traitors",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2383,
    "visits": 16628,
    "tags": [
      "アート・展示",
      "体験型",
      "フレンドと",
      "ネタ・ミーム",
      "映画祭・受賞作"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f61e5190-a06d-429c-8698-efa2961a5e43/5/256",
    "note": "『小さな裏切者たち 展』。全40点の絵のパネルを触ると、予想を小さく、時に大きく裏切る変化が起こります。ヴェネツィア国際映画祭でも紹介された名作展示。Global同期なのでフレンドと回るのがおすすめ。",
    "official": "lie?"
  },
  {
    "id": "wrld_fc3fd497-25b8-4949-9bf3-076b8967d832",
    "name": "Virtual Art gallery",
    "category": "exhibition",
    "subtype": "写真展",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 1527,
    "visits": 11629,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "ギミック",
      "フレンドと",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0ad84dc0-6821-4a1f-b584-7dc724566cc9/2/256",
    "note": "Uncle_BとGanna KamuiがVRChatで撮影した写真を展示する、ReCube制作のアートギャラリー。写真によってはUSEで中に入って自分も撮影でき、全作品を見終わるとギャラリーに変化が起こる仕掛けも。鑑賞後は設定の『art character』を押すとテレポートが使えるようになります。",
    "official": "Photographer : Uncle_B, Ganna Kamui Creator : ReCube 기분져아 take at the world with a camera. ・After watching, press setting（system） - art character to activate teleport ・감상끝나고 설정에 art character를 누르시면 텔레포트를 활성화 할수 있습니다. ・鑑賞終了後、設定に art character を押すとテレポートを有効にできます"
  },
  {
    "id": "wrld_ffc088ae-90df-439b-bc66-0003f8f3f6a7",
    "name": "town of connection",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 1460,
    "visits": 7871,
    "tags": [
      "アート・展示",
      "ギミック",
      "体験型",
      "一人でゆっくり",
      "フレンドと",
      "映画祭・受賞作",
      "大容量注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f6fe801b-5b08-475d-9ec3-896cacb534bb/6/256",
    "note": "『繋がり（因果関係）』がテーマの美術館。額縁に触れると絵の中のオブジェに何かが起き、やがて絵を飛び出して空間同士が繋がっていく。ヴェネツィア国際映画祭Best of Worlds選出の、ギミック満載の体験型アート。容量約578MBと重め。",
    "official": "causal relationship"
  },
  {
    "id": "wrld_32bfc2f2-724e-4875-ba56-0f2a175970b6",
    "name": "Eccentric Rooms",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 30,
    "recommendedCapacity": 15,
    "favorites": 17572,
    "visits": 163277,
    "tags": [
      "アート・展示",
      "ギミック",
      "体験型",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_566a3e2f-2e79-4900-9309-933fc34dab80/3/256",
    "note": "壁を歩き、小さな惑星を一周し、入れ子になった部屋で大きな自分と出会う。suzuki_iによる、重力と視点が崩れる風変わりな部屋を、フレンドと驚き合いながら巡る体験展示です。同期の不具合でしばらく非公開になっていましたが、作者が直し、部屋を1つ増やして再公開しました。PC専用。",
    "official": "Eccentric Rooms"
  },
  {
    "id": "wrld_9d3dad3f-f33a-41c7-a51f-69e3aa0f2aa8",
    "name": "Scale Journey",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 13979,
    "visits": 68539,
    "tags": [
      "アート・展示",
      "学習・教育",
      "解説あり",
      "一人でゆっくり",
      "宇宙・空",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3a51dc95-d78c-4f82-9a6b-e32f51921e58/9/256",
    "note": "等倍の日常から前へ進めば量子・細胞のミクロへ、後ろへ進めば宇宙の大規模構造へ。『Realtime Space Elevator』のS_朝霧が2025年に公開した、素粒子から宇宙まで40桁にわたるスケールの旅で、紹介動画がXで大きく広まりました。解説付きでスケールの変化を歩いて体感できる、VRならではの科学展示ワールド。作者いわく「体験しないと伝わらない類のワールド」です。PC専用。",
    "official": "素粒子から宇宙まで、スケールを旅するワールドです。 Created by S_Asagiri"
  },
  {
    "id": "wrld_3fa5b415-e447-4bc2-824a-b7ed450750fb",
    "name": "触れる仮想現実展:リアセンス",
    "category": "exhibition",
    "subtype": "アート・ギャラリー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7745,
    "visits": 38502,
    "tags": [
      "アート・展示",
      "体験型",
      "ギミック",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c70852b2-28db-45a6-af01-8f8c1d16c006/3/256",
    "note": "触れたり触れられたりする感覚（V感）を体験できる展示ワールド。もふもふのブラッシングや猫じゃらし、壁から出てくる腕のなでなでなど、『触れる仮想現実』をテーマにした展示が並びます。V感を育てる入門にも。",
    "official": "沢山のご来場ありがとうございます。 これからも展示物の追加やギミックの追加・調整を行う予定です。 何か不具合や疑問点を見つけた際はなんなりとお教えください。"
  },
  {
    "id": "wrld_aa79218d-57fd-4c8d-a5ee-79f4014047c0",
    "name": "SoundLab",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 12108,
    "visits": 95080,
    "tags": [
      "アート・展示",
      "ASMR・立体音響",
      "技術デモ",
      "チル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a30e1077-85e5-4581-8e32-3c5db3abd38b/5/256",
    "note": "聞く位置や環境で音が変わるWavePathSystemを体験できる音響実験室。反響や定位を試す展示に加え、曲がゆったり流れる個室もあり、技術検証とチルが両立する。",
    "official": "音響システムWavePathSystemとその他技術検証ワールドです。音の位置や反響をよりリアルに再現し、聞く位置や環境によって音が変化します。"
  },
  {
    "id": "wrld_b526c3e0-7c32-4774-931e-5dcbdd125794",
    "name": "Shader Fes 2021",
    "category": "exhibition",
    "subtype": "ミュージアム",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 26734,
    "visits": 252692,
    "tags": [
      "アート・展示",
      "技術デモ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_11b99f64-00ea-446b-8dd5-29f4caf4aa9d/2/256",
    "note": "80名のクリエイターによる200点超のシェーダー作品を4エリアで巡る大規模展示会。100点超を集めた2019年版に続く開催で、2021年12月の開場時にはMoguraVRでも紹介されました。床の傷や足音まで作り込まれた会場で、触れたり覗き込んだりすると反応する作品もあり、理解を超える不思議な表現の連続に驚かされます。高性能なPC推奨、PC専用。",
    "official": "様々なクリエイターによる200以上のシェーダー作品を展示しています。More than 200 shader works are on display."
  },
  {
    "id": "wrld_9ac9ed36-adb0-491a-8757-d250f21c9bcf",
    "name": "Eccentric Objects",
    "category": "exhibition",
    "subtype": "展示ワールド",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 5801,
    "visits": 48645,
    "tags": [
      "アート・展示",
      "ギミック",
      "体験型",
      "フレンドと",
      "ネタバレ注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e2077bb2-8bfc-4e84-ae44-35b1ea0f6c9a/5/256",
    "note": "『少し変わったオブジェクト』を集めた個展型ワールド。『Eccentric Rooms』と同じsuzuki_iが2023年に公開した作品で、その実態は、触って驚く謎ギミックのオンパレード。VRならではの仕掛けや、二人以上でないと分からない展示、視覚効果の強い展示もあるので、フレンドと一緒に、ネタバレなしでどうぞ。おすすめの美術館ワールドとしてXで挙げられることも。PC専用。",
    "official": ""
  },
  {
    "id": "wrld_dde0f69c-a09c-48dc-bbf7-e00a28f5ee87",
    "name": "遥か先の君へ。/To the One Waiting Beyond.",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 2016,
    "visits": 13595,
    "tags": [
      "パーティクルライブ",
      "チル",
      "音楽・ライブ",
      "宇宙・空",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4f2133c3-5165-4b3e-93e4-926bdefa83bf/5/256",
    "note": "夏の限定ライブイベント『SecretLIVE』へと続く、告知用のパーティクルライブ。ベンチに置かれた腕輪と『君の夢が、僕の生きる理由になったんだ』という言葉から始まる物語で、宇宙を舞台に本編への期待を膨らませる予告編的な一作です。",
    "official": "夏の限定ライブイベント「SecretLIVE」へ続く 告知用パーティクルライブワールド。 ベンチに置かれた腕輪と、その言葉が全ての始まりだった。「君の夢が、僕の生きる理由になったんだ」"
  },
  {
    "id": "wrld_fab25276-98ce-4320-84ca-1362cfb64abf",
    "name": "雲 - The Cloud We Chase",
    "category": "chill",
    "subtype": "幻想・風景",
    "capacity": 8,
    "recommendedCapacity": 2,
    "favorites": 8193,
    "visits": 86713,
    "tags": [
      "チル",
      "自然・風景",
      "日本",
      "写真・撮影",
      "フレンドと",
      "夏",
      "少人数",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_00d4d252-6da0-4640-8162-45b9c7ac7f33/1/256",
    "note": "入道雲と田んぼの一本道が広がる、夏の田舎の景観ワールド。セミの声と青空に包まれ、隠しスイッチの音楽ギミックも。PC専用・定員8人の少人数制で、フレンドとエモい写真を撮りたい日に。",
    "official": "Under the roof where we dream."
  },
  {
    "id": "wrld_2f1a7677-f023-4e82-acdf-c85ea1f79b82",
    "name": "陽だまりの向日葵/Sunflowers in a sunlit spot",
    "category": "chill",
    "subtype": "音楽ライブ",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2004,
    "visits": 18500,
    "tags": [
      "自然・風景",
      "チル",
      "写真・撮影",
      "一人でゆっくり",
      "夏",
      "夕暮れ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d40c3cb9-5e19-4e85-98e9-bb7df1f527ac/1/256",
    "note": "夕日に染まる向日葵畑と海を眺める、Pache1belの景観ワールド。2026年に公開された作品で、『目を覚まして、夕日以外のすべてを忘れてしまった』という一文の通り、静かに景色と音楽に浸るチルな時間が流れます。撮影地としても使われる美しさです。PC専用。",
    "official": "I opened my eyes and forgot everything except for the sunset.私は目を覚ましてすべてのことを忘れて、ただ夕日だけを見ました"
  },
  {
    "id": "wrld_8a8f04ba-1181-4a7e-aaf2-bdcd200852a5",
    "name": "Beside",
    "category": "particle",
    "subtype": "音楽ライブ",
    "capacity": 16,
    "recommendedCapacity": 1,
    "favorites": 6366,
    "visits": 47277,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "チル",
      "一人でゆっくり",
      "映画・映像",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_67ae638d-5aa5-461c-8f4f-3434bd2fca7a/2/256",
    "note": "ずっと真夜中でいいのに。『MIRROR TUNE』を題材にした、Apathy作のアニメーションワールド。2026年の年明けに公開され、夜の街を舞台に楽曲の世界を映像で辿る、シネマティックな1曲体験です。容量重め、PC専用。",
    "official": "Animation world: ZUTOMAYO - MIRROR TUNE (2025 HNY)"
  },
  {
    "id": "wrld_88c85201-35fa-4dad-87a9-eb6cfecd8987",
    "name": "Particle Live World Collection",
    "category": "particle",
    "subtype": "ポータル集",
    "capacity": 80,
    "recommendedCapacity": 8,
    "favorites": 9268,
    "visits": 69387,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "フレンドと",
      "ポータル",
      "初心者向き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_86c2efc2-a022-4289-8edd-2e178ce7e4d0/14/256",
    "note": "パーティクルライブやVRMVを巡るためのポータルハブ。日本語ガイドや初心者向け・おすすめ20選の導線があり、膨大なポータルから好みの1曲体験を探せます。何を見ればいいか分からない人の出発点に。",
    "official": "The hub features VRMVs, Animations and Music Experiences. このワールドはパーティクルライブワールドを巡るグループがまとめたデータを基に作成されました。"
  },
  {
    "id": "wrld_cd085851-4baf-4fb8-9a2a-e0e20f686502",
    "name": "Cycle of Life",
    "category": "particle",
    "subtype": "幻想・風景",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 9853,
    "visits": 84345,
    "tags": [
      "演出・パーティクル",
      "チル",
      "自然・風景",
      "フレンドと",
      "映画・映像",
      "体験型",
      "初心者向き",
      "映画祭・受賞作",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_dafeb754-646f-4d9d-a4bb-bf9ec28e04b8/2/256",
    "note": "不時着した惑星で、光る石を湖へ運ぶところから始まる約20〜30分の体験型シネマ。Karl Kroenenが2021年に公開し、同年のベネチア国際映画祭 Venice VR Expanded にも選ばれた作品です。ドローンに導かれ、荒地が緑と生命に満ちる星へ変わる様子は圧巻。台詞なしで誰でも楽しめ、フレンドと感動を共有したい一作。PC専用。",
    "official": "a cycle begins ... take the rock to the lake to link the cycle of life and fulfill your duty, the drone will guide you"
  },
  {
    "id": "wrld_9b4ebb1a-56a6-4c7a-9617-90113fa6d26b",
    "name": "雨催いの悼辞 - My tears will be rain",
    "category": "chill",
    "subtype": "幻想・風景",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 644,
    "visits": 5577,
    "tags": [
      "チル",
      "自然・風景",
      "一人でゆっくり",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_49e22ec1-6ac7-48b1-8769-06761c914b9a/1/256",
    "note": "故人を想う悼辞の言葉が添えられた、雨と植物に包まれた静かなワールド。喪失と祈りをテーマにした一作で、一人で静かに過ごしたいときに。",
    "official": "この期に及んで私は、本当はあの人が生きていて、明日にでも私のもとへひょっこり顔を出すんじゃないかと、そう思っているのです。"
  },
  {
    "id": "wrld_073eae65-fff8-4039-96bd-b4f3158826b8",
    "name": "[VRMV]One by One",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 732,
    "visits": 6310,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "自然・風景",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5061ead9-8e77-4651-ae20-60227fdbfbb7/3/256",
    "note": "KMNZ LIZが歌う『One by One』（作曲：KOTONOHOUSE＆Neko Hacker）のパーティクルライブ。VRChat4年目を記念して作られた楽曲を、あっぷるてぃーが演出しています。花畑の花に触れると始まり、花と雨のモチーフが柔らかな光で広がる一曲ものです。PC専用。",
    "official": "Music:One by One (feat. KMNZ LIZ) Direction:あっぷるてぃー/Appletea VRChat4年目を記念して制作した楽曲「One by one」のParticle Liveです。 花をインタラクトしたら始まります。"
  },
  {
    "id": "wrld_2d50c1ab-170b-41a0-9697-fa92aa0ab7a6",
    "name": "Summer Leap",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1436,
    "visits": 18166,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_425fb3b0-a367-4b8d-a7fa-80246423abed/1/256",
    "note": "2020年に公開された初期のVRライブワールド。Trance_Mode［JP］の作品で、定員80人と大人数で入れるので、みんなで集まって観るのに向いています。説明は『VRライブ』の一言だけで、曲は行ってからのお楽しみです。PC専用。",
    "official": "VRライブ"
  },
  {
    "id": "wrld_e6f93974-7a3e-487f-91c8-9ce5ee8c6fee",
    "name": "Miku EXPO Live",
    "category": "particle",
    "subtype": "音楽ライブ",
    "capacity": 80,
    "recommendedCapacity": 39,
    "favorites": 1083,
    "visits": 12212,
    "tags": [
      "音楽・ライブ",
      "チル",
      "フレンドと",
      "ボカロ",
      "集会・交流",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_74411054-bf20-41c7-aa72-56c9aab60404/8/256",
    "note": "初音ミク中心のVOCALOID映像約100本を、ホログラムステージで選んで上映できるライブ会場ワールド。MIKU3478が2026年に公開した作品で、本物のライブのようにみんなで集まって観るのが楽しく、イベント開催も。ボカロ好きの集まりにどうぞ。PC専用。",
    "official": "Welcome to Miku EXPO! There are nearly 100 VOCALOID virtual projections on the map, most of them featuring Hatsune Miku."
  },
  {
    "id": "wrld_798c944b-03ff-4edb-854a-4d96da5dfa80",
    "name": "Sky Ocean Planet",
    "category": "chill",
    "subtype": "幻想・風景",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 8502,
    "visits": 89123,
    "tags": [
      "海・水中",
      "宇宙・空",
      "チル",
      "一人でゆっくり",
      "探索",
      "海洋恐怖症注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_80f06c69-0de7-48c2-9eae-8a6db934fb3b/1/256",
    "note": "空と海に包まれた惑星を、透明な足場でゆっくり降りて潜っていく探索ワールド。ぴくせるpixelが2022年に公開した作品で、クジラや沈没船の浮かぶ透明な海から、光の届かない深海まで。水と宇宙がつながるような静かな没入体験を一人で。PC専用。",
    "official": "Sky Ocean Planet"
  },
  {
    "id": "wrld_c003d327-3128-4d73-8c0e-12dfe31a43c8",
    "name": "VRMV-下弦の月(JP/CN)",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 30,
    "recommendedCapacity": 20,
    "favorites": 878,
    "visits": 6383,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "一人でゆっくり",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a38c6f82-6181-43de-a2f3-eb52f33171d3/5/256",
    "note": "黒うさP『下弦の月』（歌：96猫・めらみぽっぷ）の非公式VRMV（制作：Fallen_ice）。切ないバラードに光の演出を重ねた、1曲にじっくり聴き入る鑑賞ワールドで、日本語と中国語に対応しています。一人で静かに浸りたいときに。",
    "official": "ここはVRMVワールドです(非公式)。音楽：下弦の月；作詞・作曲：黒うさP；歌：96猫、めらみぽっぷ；VRMV制作：Fallen_ice。"
  },
  {
    "id": "wrld_c9164f70-cb58-4bf7-9c44-f083f424ba81",
    "name": "ParticleLIve Fixer (フィクサー)",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4615,
    "visits": 37386,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cdea81df-2337-4647-902e-1c28c651e8f1/2/256",
    "note": "人気曲『フィクサー』のパーティクルライブ。黒と赤を基調にした劇的で濃密な光の演出が視界を覆う、初期から支持される定番作のひとつ。PC専用。",
    "official": "ParticleLIve Fixer"
  },
  {
    "id": "wrld_85571ac6-3e1f-4d5c-bdc6-eafb2f12e4b7",
    "name": "【VRMV】 STIGMA",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 80,
    "recommendedCapacity": 8,
    "favorites": 254,
    "visits": 1851,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5cce2bed-1914-4a25-a4c4-73b0988fd971/2/256",
    "note": "DUSTCELLの初期代表曲「STIGMA」を題材にしたVRMV。abcde_kindが2026年に公開した作品で、ダークで退廃的な原曲の世界観を、パーティクルとアニメーションで表現します。クレジット表示がローカルで3種からランダムに変わる仕掛けも。PC専用。",
    "official": "STIGMA - DUSTCELL クレジットはローカルでランダムに3種類から変わります"
  },
  {
    "id": "wrld_6a1f00c0-5eda-4a60-8876-f51b46c075cb",
    "name": "Disneyland Paris: Illuminations",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 8107,
    "visits": 72879,
    "tags": [
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと",
      "再現ワールド",
      "夜・夜景",
      "ファンメイド",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_49f13266-96c8-4a64-ba63-ad6b76258a16/1/256",
    "note": "ディズニーランド・パリの花火ショー『Disney Illuminations』をVRで再現。GuusDeKroonが2024年に公開した作品で、城へのプロジェクションと花火、光る耳のギミックまで。本家のショーは2025年に幕を下ろしたので、今ではVRで見られる貴重な再現です。定員80人で、フレンド大勢と見上げる夜のショータイムに。Quest対応。",
    "official": "Immerse yourself in a virtual recreation of the Disney Illuminations fireworks show from Disneyland Paris! This world features the iconic castle as the centerpiece."
  },
  {
    "id": "wrld_0aed64fa-b806-4278-aed5-0e34ce3ca2f1",
    "name": "BLUMEA...",
    "category": "particle",
    "subtype": "幻想・風景",
    "capacity": 80,
    "recommendedCapacity": 32,
    "favorites": 13948,
    "visits": 87723,
    "tags": [
      "演出・パーティクル",
      "宇宙・空",
      "写真・撮影",
      "アート・展示",
      "体験型",
      "一人でゆっくり",
      "点滅注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b0ec1e4d-84f5-447b-a030-1cb740a7ce82/2/256",
    "note": "1440光年先の星ブルメアが超新星爆発する瞬間を見届ける、約8分のSFインスタレーション。公開時はリアルタイムのカウントダウンに3,000人が集まった話題作です。閃光が強いので、光に弱い人は注意。PC専用。",
    "official": "A star has just been born tiny, fragile, but destined for an extraordinary future. That name, now etched in our memories, is Blumea. (EPILEPSY WARNING)"
  },
  {
    "id": "wrld_34693736-118a-4a1f-9b4d-95b866ed83a7",
    "name": "Astral Bounds",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 110880,
    "visits": 2184871,
    "tags": [
      "演出・パーティクル",
      "自然・風景",
      "海・水中",
      "チル",
      "探索",
      "ファンタジー",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9a679a4c-2f88-42d9-8043-e616fc2ff6bc/7/256",
    "note": "Vectriel作、世界の果てを守る壁に囲まれた幻想都市を探索するワールド。VRChat公式も『細部まで作り込まれた荘厳な世界。音をオンにして』と紹介した美しい建築で、隠しギミックを解放すると美しいパーティクル演出が姿を現し、クジラに乗れる場所もあります。所要10分〜2時間、Quest対応。フレンドと探索しながら演出を探すタイプです。",
    "official": "A wall to preserve the edge of the world from being filled up by reality. Recent Update: Made whales slightly easier to ride."
  },
  {
    "id": "wrld_18d86de9-ddf5-4d2e-9470-bf178f67ed56",
    "name": "Found Me",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 936,
    "visits": 23677,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "一人でゆっくり",
      "チル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e7ebca9e-a277-4287-a4ad-d10f38fd5579/6/256",
    "note": "Metric『Lost Kitten』に乗せて、ミニマルな文字と猫のアニメーションが流れる実験的VRMV。のちに『悲鳴』『青言葉』などの薄明の景観ワールドで知られるApathyが2023年に公開した小さな習作で、静かに1曲眺める一人鑑賞向きです。PC専用。",
    "official": "Animation World Music: Metric - lost kitten"
  },
  {
    "id": "wrld_dc1ab8bf-b7c7-4de7-9e92-e0b375b2676c",
    "name": "青言葉 - Words and her blue",
    "category": "chill",
    "subtype": "パーティクル",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 7885,
    "visits": 78161,
    "tags": [
      "チル",
      "学校",
      "フレンドと",
      "写真・撮影",
      "夕暮れ",
      "ノスタルジー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4034c553-e1f9-4757-b74c-36350730dd3a/2/256",
    "note": "夕暮れの教室で、みんなが思い思いに過ごすノスタルジックなチルワールド。Apathyが2025年に公開した、湾岸の街を見下ろす学校が舞台で、教室や廊下、屋上を歩けます。窓からちらりと見える街並みや屋上からの眺めが美しく、教卓の人形を使うとBGMの演出も。放課後の青い光の中で、少人数でゆっくり話したい夜に。容量約487MBと重いので読み込みには余裕を。PC専用。",
    "official": "Classroom in the evening when everyone is enjoying their life."
  },
  {
    "id": "wrld_d217cd82-3851-488b-b50b-f53e21765ec1",
    "name": "一千光年 VRMV 初音ミクバージョン",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 15,
    "favorites": 1120,
    "visits": 7838,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "フレンドと",
      "ファンメイド",
      "体験型",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_09e0c1d4-f2ca-4dff-a7ac-642d338f0189/2/256",
    "note": "いよわ『一千光年』の初音ミク版VRMV。Tsukarebitoが2026年に公開した作品で、ただ見るのではなく、ペンを持って自分が前へ走ることでMVの線が描かれていく参加型の演出が最大の特徴です。大人数で走れば線が絡み合う景色も圧巻。PC専用。",
    "official": "一千光年 issenkounen いよわ 初音ミクバージョン"
  },
  {
    "id": "wrld_0e476efb-330a-45df-89c8-d28bea253cc1",
    "name": "Dew",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 141,
    "visits": 1233,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bc317f7e-ba58-40da-853f-9d1bf1a3b9aa/2/256",
    "note": "『テーブルの上のドリンクは、飲みたい人がいるらしいので飲まないでください』という注意書きだけが添えられたVRMV。Uzaki（うざき）が2025年に公開した作品で、説明の少なさも含めて、行ってみてのお楽しみという一作です。PC専用。",
    "official": "テーブルの上のドリンクは飲みたい人がいるらしいので飲まないでください。"
  },
  {
    "id": "wrld_0ae7a021-ead5-4bf9-943c-16f85b2b926d",
    "name": "MANA's VR LIVE Portal World",
    "category": "particle",
    "subtype": "ポータル集",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 2382,
    "visits": 30354,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "音楽・ライブ",
      "ポータル",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7588894c-769e-4c20-bda3-9b4dcb868a14/6/256",
    "note": "いろいろなパーティクルライブへ飛べるポータルを集めた、ライブ巡りの出発点。おまけで作者MANA自身のパーティクルライブも見られます。『次に何を見よう』と迷ったら、まずここで好みの一作を探すのがおすすめ。",
    "official": "いろいろなパーティクルライブのワールドのポータルを置いたワールドです。おまけで私の作ったパーティクルライブが置いてあります。"
  },
  {
    "id": "wrld_de9ce32c-26a9-42ad-b66f-f2eee24887fe",
    "name": "パーティクルライブ全部見るPort",
    "category": "particle",
    "subtype": "ポータル集",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 10243,
    "visits": 68531,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "演出・パーティクル",
      "ポータル",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_340a5d99-d89a-417f-bcd1-afea2057338e/5/256",
    "note": "パーティクルライブとVRMVのポータルを約300集めた、音と光の玄関口。2018年から最新作まで、全部見るグループの記録をもとに厳選。何から見ればいいか迷ったら、まずここから好みの一作を探せます。",
    "official": "音と光、約300のポータル集です。VRCのパーティクルライブ、VRMV、Particle Animation、VR lightshowを全部見るグループへのお礼に。"
  },
  {
    "id": "wrld_2020eb60-3f60-4d4a-a50d-8c485f3252a8",
    "name": "【XRMV】CodeAnswer",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 108,
    "visits": 1045,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "軽量",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_542dc6e8-532f-43a6-b77b-a970662bfe97/1/256",
    "note": "2025年12月に公開された、『XRMV』と銘打つ新しい形式のMVワールド。ru--sanの作品で、最大60人、容量約24MBと軽量なので気軽に立ち寄れます。PC専用。",
    "official": "【XRMV】CodeAnswer"
  },
  {
    "id": "wrld_4054e5ee-1426-47e0-bb5e-62399b5f1071",
    "name": "【VRMV】デザイン【パーティクルライブ】",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 335,
    "visits": 2360,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "演出・パーティクル",
      "点滅注意",
      "ボカロ",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_05b08bc0-2845-4c78-9d02-e49dd9f2d24e/1/256",
    "note": "『デザイン feat. Miku』を題材にしたファンメイドのVRMV／パーティクルライブ。点滅や強い光、大量のパーティクルによる激しい演出が特徴なので、光の刺激に弱い人は注意。没入感の高い一曲ものを楽しみたい人向けです。",
    "official": "本ライブには点滅・強い光・大量のパーティクル演出が含まれます。原曲：「デザイン feat. Miku」。ファンメイド作品です。"
  },
  {
    "id": "wrld_c6959e8a-7a70-4a18-b88f-f55ea7faf442",
    "name": "『アルビレオ』 ~ 決して交わることのない二重星",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 1656,
    "visits": 14651,
    "tags": [
      "演出・パーティクル",
      "音楽・ライブ",
      "チル",
      "一人でゆっくり",
      "宇宙・空",
      "少人数"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d1caee56-c41f-45f4-9114-22e42438c49b/1/256",
    "note": "ロクデナシの楽曲「アルビレオ」をモチーフにした、二重星のように近づけない二人を描く小さなワールド（作者の処女作）。星空の空間に、ささやかなパーティクルライブも収録。定員8人で、曲の世界観に一人で静かに浸りたい人向け。",
    "official": "ロクデナシさんの楽曲『アルビレオ』をモチーフに制作したワールドです。簡単なパーティクルライブも作ってみたので良ければご覧ください。"
  },
  {
    "id": "wrld_ecc3e12e-9e41-4cc1-8fb8-d5873b06d265",
    "name": "world.execute(me);",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 4760,
    "visits": 70892,
    "tags": [
      "演出・パーティクル",
      "パーティクルライブ",
      "音楽・ライブ",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_43c745e5-6550-48c3-8136-9416bbc2a21d/1/256",
    "note": "Mili『world.execute(me);』を自作シェーダーのグリッチと歌詞演出で視覚化した、初期パーティクルライブの名作。STYLYアワード2019ファイナリスト、Mili公式許可作品。『見る』より『体感』する一作。",
    "official": "Shader visualization of World.Execute(me); by Mili"
  },
  {
    "id": "wrld_07ee8176-a235-4af7-ace3-161285fee446",
    "name": "祈りの固執 -The Persistence of Prayer",
    "category": "chill",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 831,
    "visits": 18337,
    "tags": [
      "チル",
      "VRMV",
      "パーティクルライブ",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ddfd12b2-31a3-4865-a1c9-e713fdd375b0/3/256",
    "note": "「祈り、願う」がテーマの静かなチルワールドに、ベランダで再生できるVRMVを併設。Manon（麦茶）が2024年に公開した作品で、一人でゆっくり祈るような時間を過ごしながら、光のパーティクル演出にも浸れる二面性のある一作です。PC専用。",
    "official": "祈り、願うchillワールドです、よかったらおいで。ベランダにVRMVがあります。"
  },
  {
    "id": "wrld_0f2e25a6-1c09-4f25-9fdb-2c8cd009edfd",
    "name": "Rain of you",
    "category": "particle",
    "subtype": "幻想・風景",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 15964,
    "visits": 222546,
    "tags": [
      "チル",
      "自然・風景",
      "海・水中",
      "写真・撮影",
      "一人でゆっくり",
      "雨",
      "電車・駅"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5061ff00-882b-4910-8789-3d3080426f12/2/256",
    "note": "雨の日に開く、海の見える駅。作者の作品が展示された駅舎で、景観の中にVRライブのような演出が溶け込むApathy作のワールド。雨上がりの早朝のような青い空気は写真撮影にも人気です。",
    "official": "The train station is opening on a rainy day, where I showed my artwork."
  },
  {
    "id": "wrld_86438af7-fb6d-4371-bf68-c336b65e715f",
    "name": "悲鳴 - For you who scream",
    "category": "particle",
    "subtype": "音楽ライブ",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 17585,
    "visits": 211350,
    "tags": [
      "チル",
      "音楽・ライブ",
      "自然・風景",
      "日本",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9e0dcf3b-ca72-43fd-ad63-d304418033b6/1/256",
    "note": "学校の裏の古い駐輪場から、富士山と麓の町並みを見晴らす景観ワールド。『僕が死のうと思ったのは』をイメージしたApathyの作品で、タイトルとは裏腹に、静けさと悲しさ、ほのかな暖かさが漂う薄明の情景が続きます。リアルに時間が流れていく冷たい空気が印象的で、駐輪場の裏の缶に触れると…というお楽しみも。一人で静かに浸りたい人に。PC専用。",
    "official": "Old Bicycle parking lot behind the school."
  },
  {
    "id": "wrld_d53bc575-ad36-4157-92bb-8a4a217e7845",
    "name": "Particle LiVE 《WAVE》",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 11601,
    "visits": 181853,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "初心者向き",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ea5cf4c0-9796-4a9f-acd3-298c6420c1f7/5/256",
    "note": "2019年の黎明期を代表するパーティクルライブ。Questに対応した初のパーティクルライブとして歴史に名を刻み、今も定番として愛される一作。容量約3MBと超軽量で、Quest単体でもみんなで鑑賞できます。",
    "official": "【Oculus Quest対応】パーティクルライブ《WAVE》"
  },
  {
    "id": "wrld_0eee8678-4110-4b3c-8034-2d100877ec5f",
    "name": "【VRMV】回る空うさぎ",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3073,
    "visits": 28012,
    "tags": [
      "VRMV",
      "演出・パーティクル",
      "音楽・ライブ",
      "一人でゆっくり",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_71576918-2d11-436e-97d0-e4cddd62d907/1/256",
    "note": "Orangestar『回る空うさぎ』の世界を描く、Coco_Mo17作目のVRMV。月と星降る空の幻想的な演出が『とっても綺麗』と紹介される一作です。容量約293MBと重いので、読み込みに余裕を持って。PC向け。",
    "official": "17作目"
  },
  {
    "id": "wrld_cf6ab04f-412f-4b9f-9ef1-6470afe5fc60",
    "name": "【VRMV】いますぐ輪廻",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 8353,
    "visits": 55795,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "ボカロ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6860442c-7b02-46c4-906d-ad0adc3b3fc9/3/256",
    "note": "なきそ feat.初音ミクの大ヒット曲『いますぐ輪廻』のVRMV。Coco_Moの16作目となるVRMVで、原曲MVの再現にオリジナルの演出も加え、Xでは常設のVRMVワールドの中でも最強の作品と評されました。疾走感のあるテクノと輪廻の歌詞世界を、MVの中に入り込んだような感覚で1曲まるごと体験できます。原曲MVは刺激的な表現を含むため、初見は心の準備を。PC専用。",
    "official": "16作目 いますぐ輪廻"
  },
  {
    "id": "wrld_1f522eeb-a6c4-45af-96c3-6c647fdf82e9",
    "name": "【VRMV】Pavlovian Love",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1418,
    "visits": 17147,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "一人でゆっくり",
      "ファンメイド",
      "ストーリー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0864fc57-3c80-4d1b-8b71-4216e8227b26/1/256",
    "note": "Coco_Moの15作目のVRMV。2025年に公開され、添えられた言葉は『ただ無垢な還元主義』の一節だけで、物語を感じさせる作りです。容量約121MBとやや重め。『いますぐ輪廻』など同作者のVRMVが好きなら押さえたい一作です。PC専用。",
    "official": "15作目 ただ無垢な還元主義"
  },
  {
    "id": "wrld_440f9450-34db-4509-abef-0a769279e98b",
    "name": "【VRMV】あけたらしめろよ星人",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1593,
    "visits": 17034,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "フレンドと",
      "ファンメイド",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5f1652f1-4d4d-4766-a341-69446835e4bf/1/256",
    "note": "人気VRMV作家Coco_Moの13作目。教室を舞台に猫耳キャラが登場する、コミカルでかわいい系のVRMVです。『こんなに何度も言われれば覚えるはずなのに！』という一言どおり、中毒性のある繰り返しが楽しい一作。PC専用。",
    "official": "13作目 こんなに何度も言われれば覚えるはずなのに！"
  },
  {
    "id": "wrld_45a11ca4-c025-48c8-a500-a1eca789832c",
    "name": "【VRMV】 TETORIS",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1131,
    "visits": 13945,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "ファンメイド",
      "軽量",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_64d2dfa8-536d-4534-8969-451523b8d3b8/5/256",
    "note": "モノクロでミニマルな世界観のVRMV『TETORIS』。syarotoが2025年に公開した作品で、容量約14MBと非常に軽く、サクッと1曲入り込めます。文字を使ったダークな演出が好きな人に。PC専用。",
    "official": "VRMV TETORIS"
  },
  {
    "id": "wrld_5349ea34-be00-4b98-9de7-e5fcc37c67fa",
    "name": "Battle Animation Particle Live Vol2「武装小惑星決戦」",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 35,
    "recommendedCapacity": 30,
    "favorites": 1816,
    "visits": 20702,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "VRMV",
      "フレンドと",
      "SF・近未来",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3e519cf6-7b9c-4554-a197-6895a37d17b8/7/256",
    "note": "パーティクルライブと戦闘アニメーションの融合第2弾。宇宙船内を舞台に、人型戦闘機が縦横無尽に戦い、歌詞が踊る熱い演出はロボットアニメ好き必見。Quest対応でこのクオリティと評判。見てもよし、合わせて踊ってもよし。",
    "official": "パーティクルライブと戦闘アニメーションの融合ワールドです！ 見るのもよし、合わせて踊ってみるのもよし、楽しんでくださいな！"
  },
  {
    "id": "wrld_1d725df2-8679-4f90-9f5a-b06febc8c8b0",
    "name": "Alternoise『現実譚』Particle Live",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 5694,
    "visits": 35583,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "VRMV",
      "フレンドと",
      "電車・駅",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_51250b30-adcc-4ed6-b880-83d7ac6e4d75/2/256",
    "note": "バーチャル3ピースバンドAlternoiseの1stアルバム『現実譚』を、走る電車の中から眺める約20分のパーティクルライブ。曲ごとに車窓の景色と光の演出が切り替わり、終演後は海辺を歩く余韻も。PC専用。",
    "official": "バーチャル３ピースバンドAlternoiseの1st Full Album 『現実譚』 リリースを記念し作られたパーティクルライブです。電車を通して各曲の世界観を表現した演出をご堪能ください。"
  },
  {
    "id": "wrld_79032971-f3eb-473b-a3c1-3e74e3e255f3",
    "name": "【VRMV】 命ばっかり",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 3826,
    "visits": 28774,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_19d505a5-96dd-4258-a6d4-42250c41f06f/1/256",
    "note": "ぬゆり『命ばっかり』の再現VRMV。『完成度が意味わからん位高い、本当にMVに入ってる感覚』と評される、MANA制作の没入型ミュージックビデオ体験です。",
    "official": "VRMV 命ばっかり"
  },
  {
    "id": "wrld_5126151e-171a-4d64-b654-9731f2919452",
    "name": "【VRMV】アイデア / 星野源 covered by 初音ミク",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1774,
    "visits": 13092,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "ファンメイド",
      "一人でゆっくり",
      "ボカロ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f463d834-59fa-4756-9d5b-9d6c7f15a204/1/256",
    "note": "星野源「アイデア」の一発撮りMV撮影現場を丸ごと再現したファンメイドVRMV。ボタンを押すと初音ミクが歌い踊り、本家MVのカメラワークや動きを3D空間で追体験できます。再現度の高さが評判で、原曲ファンほど発見が多い一作。PC推奨。",
    "official": "星野源の楽曲「アイデア」のMVを再現したファンメイドワールドです。初音ミクが歌って踊るMVの世界をお楽しみください。"
  },
  {
    "id": "wrld_e8860b9d-e370-4535-8cec-6bf8047d6e27",
    "name": "【particle/VRMV】Wonderland",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 1638,
    "visits": 12230,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "フレンドと",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_10d166e9-be79-4877-8cc5-cc51ede1f881/2/256",
    "note": "たなか＆Flehmannの「Wonderland」を、パーティクル作家ru--sanがVRMV化した作品。紹介サイトのおすすめまとめにも選ばれた、ファンタジックでポップな光の演出が特徴の1曲もの。みんなでワイワイ見るのにも向いた定員40人のワールドです。",
    "official": "Music:Wonderland たなか&Flehmann ParticleVRMV:ru--san"
  },
  {
    "id": "wrld_a50c9ef1-d7a4-4140-9b64-fb9d223359e9",
    "name": "讐復を能える。for VRChat",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 12,
    "recommendedCapacity": 1,
    "favorites": 5230,
    "visits": 30151,
    "tags": [
      "演出・パーティクル",
      "音楽・ライブ",
      "一人でゆっくり",
      "体験型"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5b310283-fc51-4df5-8e3e-41c121d73f87/7/256",
    "note": "アメリカ民謡研究会『讐復を能える。』のMV世界を歩いて巡る体験型ワールド。放送室から始まり、カメラを構えると映像が流れ出す“干渉”ギミックが独特です。アバターにカメラ系のギミックを入れていると、演出がうまく動かない場合があります。映像作家100人2025ノミネート作。",
    "official": "讐復を能える。/アメリカ実行委員会。アバター側にカメラを用いたギミックを導入している場合、ワールド演出に不具合が発生する可能性がございます。"
  },
  {
    "id": "wrld_1fab6c16-7c7a-4e5d-921e-d7a77d625b89",
    "name": "【VRMV】サクラんBEATS",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 30,
    "recommendedCapacity": 6,
    "favorites": 1031,
    "visits": 13836,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "自然・風景",
      "音楽・ライブ",
      "VR酔い注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_74bfa7bd-3859-4485-b90a-d8ca68bc209b/5/256",
    "note": "自作曲をパーティクルライブにした、夢を追うすべての人へ送る応援歌のVRMV。憧れと挫折と小さな希望を歌う1曲に、桜と光の演出が重なります。動きの多い演出なので、作者もVR酔いへの注意を呼びかけています。",
    "official": "自作曲をパーティクルライブ化。夢を追う人、追うのをやめた人、すべての人へ送る。憧れと挫折と小さな希望の歌。"
  },
  {
    "id": "wrld_696b82bb-1006-44a6-8f14-cc314335c893",
    "name": "Celeste -Particle live-",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 1020,
    "visits": 14269,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "チル",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_85068f56-89ef-421f-90f1-9c8d2660a87c/2/256",
    "note": "暗い部屋でレコードに触れると、曲とパーティクルが流れ出す小さな鑑賞ワールド。Norimaki_が2023年に公開した作品で、青い明かりの中で1曲をじっくり聴く、一人鑑賞向きの静かなライブです。PC専用。",
    "official": "暗い部屋です。レコードに触れると曲が再生されます。"
  },
  {
    "id": "wrld_8d9d0556-88ed-41f3-8703-de8d6bc6e013",
    "name": "【VRMV】蜜月アン・ドゥ・トロワ / Honey Moon Un Deux Trois",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3709,
    "visits": 31404,
    "tags": [
      "VRMV",
      "演出・パーティクル",
      "音楽・ライブ",
      "一人でゆっくり",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_511d9d6d-a229-47b7-8f8b-d0f90d2576cc/1/256",
    "note": "DATEKENの名曲を、もここ＆白咲ノアが自ら踊って作り上げた物語仕立てのVRMV。作者の11作目として2025年に公開されました。サンリオVfesでも披露された正統派MVで、手作りモーションのやわらかな動きが見どころ。1曲をじっくり味わう鑑賞向きです。PC専用。",
    "official": "11作目 蜂蜜酒を貴方に"
  },
  {
    "id": "wrld_f72d7139-dae8-4372-a28e-fb50ec161689",
    "name": "Everything Goes On",
    "category": "particle",
    "subtype": "ポータル集",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 3740,
    "visits": 47279,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "アニメ・キャラ",
      "フレンドと",
      "映画・映像",
      "ストーリー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4a23ad1b-94fb-4720-a84e-a16fc2e24bed/1/256",
    "note": "Porter Robinsonの『Everything Goes On』に、GyleとReddが映像をつけた鑑賞ワールド。ReddPandaが2022年に公開した作品で、星の守護者（Star Guardian）の切ない物語を、楽曲と同期する3Dアニメーションで辿ります。PC専用。",
    "official": "Porter Robinson - Everything Goes On Animation By Gyle and Redd"
  },
  {
    "id": "wrld_94394c3d-6955-4a55-a766-ad17da9db979",
    "name": "ParticleLiVE\"JITTER DOLL\"",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 1636,
    "visits": 24599,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "一人でゆっくり",
      "ボカロ",
      "フレンドと",
      "軽量"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_995c7619-9f3e-421b-ae04-18282ca54782/3/256",
    "note": "ボカロP・nikiの名曲「JITTER DOLL」を、パーティクル作家YORIMIYAが映像化した初期の名作。容量わずか約10MBと驚異的に軽く、ダークで疾走感のある楽曲世界を光の粒子で描きます。nikiファンの入門にもおすすめの一曲もの。",
    "official": "Music by \"niki\" Created by \"YORIMIYA\""
  },
  {
    "id": "wrld_4797adf6-f86c-4194-91ae-e298daf7add3",
    "name": "ParticleLiVE\"FACE\"",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 1599,
    "visits": 21007,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "一人でゆっくり",
      "ボカロ",
      "チル",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_97fbaed1-30cb-47f4-8ada-3ff6f5920d7b/2/256",
    "note": "nikiの楽曲「FACE」をYORIMIYAがパーティクルライブ化した一作。2022年に公開された、「子守唄 響く眠りにつくまで」という一節の通り、ダークで静謐な世界観を光で描く約10MBの軽量ワールドです。同じ作者の『グラーヴェ』や「JITTER DOLL」と続けて見るのもおすすめ。Quest対応。",
    "official": "\"子守唄 響く眠りにつくまで\" Music by niki Created by YORIMIYA"
  },
  {
    "id": "wrld_2d2e738a-b399-43dd-863e-779e30bd75bf",
    "name": "CQCQ -Particle Live-",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1769,
    "visits": 19584,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1548b3c0-31f7-46f5-b552-e9c032096e98/1/256",
    "note": "ロックバンド『神様、僕は気づいてしまった』の代表曲『CQCQ』を題材にした、2021年の初期パーティクルライブVRMV。PUNISHER_VRCの作品で、疾走感のあるバンドサウンドを光の演出で体感する1曲ものです。バンドのファンやVRMV入門に。PC専用。",
    "official": "神様、僕は気づいてしまった の「CQCQ」のVRMVです。CQCQ、聞こえますか"
  },
  {
    "id": "wrld_2cd55537-ba90-4f82-b28f-52b88f4c0536",
    "name": "マオ -Particle Live-",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 663,
    "visits": 8612,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_18ea60e3-c66e-4b8e-9df6-425f3b8cac2f/2/256",
    "note": "かいりきベア×まふまふの共作曲「マオ」をパーティクルライブ化したVRMV。『CQCQ』も手がけたPUNISHER_VRCが2021年に公開した作品で、ダークで中毒性のある原曲の世界観を、光とアニメーションの演出でVR空間に再現する一曲ものです。PC専用。",
    "official": "かいりきベアさんとまふまふさん共作の「マオ」のVRMVです。"
  },
  {
    "id": "wrld_6999f8d2-feb6-4d95-bfbd-05203632161a",
    "name": "Get Your Wish",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 12299,
    "visits": 165580,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "公式コラボ",
      "フレンドと",
      "軽量",
      "点滅注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_54794eed-f3e1-4f65-9174-9b9bbde2e67b/1/256",
    "note": "Porter Robinson本人との直接コラボで生まれた公式ワールド。Mochieが手がけた、2020年のアルバム『Nurture』からのシングル『Get Your Wish』の世界に入り込む音楽体験で、容量約11MBと驚くほど軽量です。光の点滅があるとの注意書きもあるので、苦手な人はご注意を。Porterファンなら一度は訪れたい、公認ならではの一作。PC専用。",
    "official": "Made in direct collaboration with Porter Robinson"
  },
  {
    "id": "wrld_6faa929b-7867-485b-b36a-04d141163202",
    "name": "Battle Animation Particle Live Vol1《VA1》",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 35,
    "recommendedCapacity": 30,
    "favorites": 5271,
    "visits": 52703,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "アニメ・キャラ",
      "SF・近未来",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_03941158-4718-4d43-87da-197c84ac0ee7/3/256",
    "note": "高速可変機VA1が楽曲『煉獄セレナーデ』に合わせて空を舞い戦う、戦闘アニメーション×パーティクルライブ。シン《symphony》が2023年に公開した作品で、楽曲は魔王魂。メカ戦闘のシナリオ演出をVRで浴びる一作です。Quest対応。",
    "official": "曲に合わせて戦闘する高速可変機、VariableAircraft1のVRMV！ 楽曲:煉獄セレナーデ 音楽:魔王魂"
  },
  {
    "id": "wrld_a1071eb7-e16c-4a52-bd6e-c0efdb1b5ea5",
    "name": "CUE[Archive]",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 18,
    "recommendedCapacity": 9,
    "favorites": 9356,
    "visits": 93311,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "音楽・ライブ",
      "一人でゆっくり",
      "アーカイブ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_36b66b47-7716-44dc-a559-c551f861edd7/2/256",
    "note": "0b4k3のXRライブ『CUE』を再構成した常設アーカイブ。単管と蛍光灯、水と布の地下空間が『ow (2022 edit)』に合わせて光り揺れる、GHOSTCLUB系の没入ライブ体験。いつでも一人で入れる名作。",
    "official": "Music: ow (2022-edit) Director / Composer: 0b4k3, Artist / Coding: phi16"
  },
  {
    "id": "wrld_3dcabc45-b66b-4d38-abaa-d2922ca4d678",
    "name": "Beyond a bit - 想像のちょっと先へ",
    "category": "particle",
    "subtype": "音楽ライブ",
    "capacity": 64,
    "recommendedCapacity": 64,
    "favorites": 198459,
    "visits": 3455480,
    "tags": [
      "演出・パーティクル",
      "VRMV",
      "音楽・ライブ",
      "宇宙・空",
      "映画祭・受賞作",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_831d3277-b373-4deb-bc6a-04a0227682e0/7/256",
    "note": "一粒の種の夢から星と生命が花開いていく、歩いて観察する幻想的な音楽体験ワールド。team:beyond_a_bitが2023年に公開した、サンリオVfes発の作品です。国際映画祭でも評価され、Xでも『おすすめを挙げるなら必ず名前が出る』と推されて、訪問は300万を超えました。Quest単体対応で、一人で静かに浸るのがおすすめ。",
    "official": "From a seed's dream, tailes unravel. Stars and lives blossom beyond our reach. Created by team:beyond_a_bit."
  },
  {
    "id": "wrld_1f40b1c1-ab04-4607-aba3-0a97b2378af2",
    "name": "砂の惑星 FANMADE in VRChat / Sand Planet unofficial VRMV",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 38,
    "recommendedCapacity": 19,
    "favorites": 3968,
    "visits": 32270,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "ファンメイド",
      "ボカロ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2e5d28ce-e15d-4734-8508-de978a7187f9/1/256",
    "note": "ハチ『砂の惑星』のMV行列の一員になって歩く、参加型VRMV。東大VRサークルUT-virtual制作・五月祭展示作で、定点カメラの自動撮影まで丁寧な作り。みんなで行進するのが楽しい。PC専用。",
    "official": "ハチの楽曲『砂の惑星』のMVを再現したものです。東京大学のVRサークルUT-virtualが制作し、第96回五月祭にて展示していました。"
  },
  {
    "id": "wrld_89e06b28-1431-4fc8-aa74-0cf6d3142894",
    "name": "MONDO GROSSO / FORGOTTEN",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 1,
    "recommendedCapacity": 1,
    "favorites": 6921,
    "visits": 27765,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "演出・パーティクル",
      "一人でゆっくり",
      "公式コラボ",
      "初心者向き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_336e5259-842c-4c1d-a0ef-7ba7aed8bf77/2/256",
    "note": "MONDO GROSSO feat.ermhoi『FORGOTTEN』の公式MVを、0b4k3監督のVR版で体験するVRMV。座って360度に包まれるスタイリッシュな演出は『VRMVの入口』と評される名作。終わりの浜辺の余韻までどうぞ。",
    "official": "Artist: MONDO GROSSO Vocal: ermhoi Director: 0b4k3 Visual Artist, Engineer: fotfla"
  },
  {
    "id": "wrld_9b313d06-ee33-4531-af12-c23626b146e9",
    "name": "ParticleLiVE《GURAVE》",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 2759,
    "visits": 42922,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3c9a3806-a4c9-4676-844b-ee07232c0cee/2/256",
    "note": "niki『グラーヴェ』のパーティクルライブ。VTuberのライブ制作や3Dスキャンも手がける依宮（YORIMIYA）が2020年に公開した、権利者の許諾を得て作られたQuest対応の最初期作品の一つです。容量わずか3MBと驚異的に軽く、定員60人でみんなで見られます。パーティクルライブの原点を体験できる一作。",
    "official": "Music by niki"
  },
  {
    "id": "wrld_a160ce14-ef91-451b-9255-c908cdd1dad2",
    "name": "[ParticleLive]TEMPLATE",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 5393,
    "visits": 38767,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "ファンメイド",
      "VTuber",
      "点滅注意",
      "VR酔い注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b492a40e-9ad5-4a52-96fb-b0dd8e63e622/1/256",
    "note": "星街すいせいの楽曲『TEMPLATE』を題材にしたファンメイドのパーティクルライブ。歌詞と光の演出が視界いっぱいに展開する、推しの曲の中に入り込むような鑑賞体験です。動きと光が強いので、酔いやすい人・光に敏感な人は注意。",
    "official": "本ワールドは星街すいせいの楽曲「TEMPLATE」のファンメイドパーティクルライブワールドです。酔いやてんかんなどもご注意ください。"
  },
  {
    "id": "wrld_c2ee9b12-ae71-432c-9128-95c6e1708227",
    "name": "[VRMV]アンダーマリン - Under Marine",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 1108,
    "visits": 10323,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "一人でゆっくり",
      "ファンメイド",
      "海・水中",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6ff60079-235f-4a16-80e0-9fb844d99c5b/7/256",
    "note": "Endorfin.の『アンダーマリン』を題材にした、K1UCH1初のパーティクルライブ。のちに『実写合成ミュージアム』や数々のVRMVを手がける作者の原点となる2025年の作品で、海の底へ沈んでいくような楽曲の世界を、光の粒子で潜っていく1曲もののVRMVです。最大16人、容量は約132MBと重め。PC専用。",
    "official": "My 1st Particle live world. Music: Endorfin. -「アンダーマリン」"
  },
  {
    "id": "wrld_46f5492c-b1ab-4fe6-ab42-3449b7b89918",
    "name": "六甲灯夜 -夜景音響-",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 80,
    "recommendedCapacity": 10,
    "favorites": 17419,
    "visits": 100248,
    "tags": [
      "パーティクルライブ",
      "乗り物",
      "夜・夜景",
      "写真・撮影",
      "フレンドと",
      "日本",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6a163bd2-c1c7-4815-9fb4-5c59d04d7272/1/256",
    "note": "現実の六甲山を舞台に、夜の峠をドライブで登り、山頂のイルミネーションと約7分のパーティクルライブへ至る体験型ワールド。道中で撮った写真がライブに流れる仕掛けや、たくさんの隠し要素も。PC専用、フレンドや大切な人とどうぞ。",
    "official": "現実の六甲山をモチーフにした、夜景×イルミ×ライブの体験型WORLD。今夜だけの響く夜景を、あなたの目で。沢山の隠し要素お楽しみください。"
  },
  {
    "id": "wrld_32f24b12-dee2-4297-a81c-06841765248c",
    "name": "PARTICLELIVE 【パノプティコン】",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1742,
    "visits": 19015,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "一人でゆっくり",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1dd48915-9689-4bb1-b391-2718dec93b5c/2/256",
    "note": "人気作家れみーとによるパーティクルライブ。幾何学的な光の演出で1曲の世界に没入するタイプで、VRMV巡りの定番の一つとして名前が挙がる作品です。短時間で気分転換したいときや、フレンドへのVRMV案内にも。",
    "official": "VRMV【パノプティコン】"
  },
  {
    "id": "wrld_46ed1f40-b5b2-44f6-89e1-1afc09747410",
    "name": "VRMV【週刊少年バイバイ】",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 375,
    "visits": 6950,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "パーティクルライブ",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d2d4ef3f-ae60-41a0-b98c-80c72472cd18/1/256",
    "note": "2020年公開の初期VRMVの一つ。「週刊少年バイバイ」を題材にしたパーティクルライブで、最大80人まで入れる大規模対応。れみーと制作で、フレンド大勢で一緒に見るのに向く一作です。PC専用。",
    "official": "本ワールドは「週刊少年バイバイ」のVRMVワールドです。"
  },
  {
    "id": "wrld_1368c6c7-d882-44c5-9134-2488fc5265a8",
    "name": "Reimhak's Virtual Live World v2",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1833,
    "visits": 26409,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "演出・パーティクル",
      "フレンドと",
      "初心者向き",
      "ボカロ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_773be417-f0f0-4d48-9b6f-144a9d2fa120/4/256",
    "note": "ダンサーがステージで踊る、最もスタンダードな形式のパーティクルライブを数曲まとめて楽しめるワールド。VRMVの第一人者Reimhakによる作品で、ボカロのなじみある曲と初音ミクの登場で、パーティクルライブ初心者にも一番とっつきやすい入門編です。PC専用。",
    "official": "Some Virtual Live placed in this World! Created by Reimhak"
  },
  {
    "id": "wrld_edb67ce3-c088-40f8-9e0f-871f65714c1b",
    "name": "[VRMV]うみなおし",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 48,
    "recommendedCapacity": 24,
    "favorites": 1476,
    "visits": 18343,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "ボカロ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_936b7bb2-fb2f-4caf-ba73-da4e9fdc1dee/2/256",
    "note": "MARETUの「うみなおし」を、VRMVの第一人者Reimhakが映像化した初期作。2020年に公開され、わずか約12MBと軽量ながら、MARETUらしいダークで中毒性のある楽曲世界をパーティクルで描きます。Reimhak作品巡りの起点にもなる一作です。PC専用。",
    "official": "うみなおし - MARETU / VRMV - Reimhak"
  },
  {
    "id": "wrld_24ee2e9f-fb41-411c-a1d1-4e7fbc4b9585",
    "name": "[VRMV]Anonymous fanfare",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 48,
    "recommendedCapacity": 24,
    "favorites": 1423,
    "visits": 15301,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "点滅注意",
      "ボカロ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f8dded83-db6a-48d3-a218-a6667f0c4c78/1/256",
    "note": "tsumikiの「Anonymous fanfare」をReimhakがVRMV化した初期作。2020年に公開され、アップテンポな楽曲に合わせた派手な演出が特徴ですが、強い光の点滅を含むため苦手な方はご注意を。Reimhakの作家遍歴を辿る一作としてもどうぞ。PC専用。",
    "official": "Anonymous fanfare - tsumiki / VRMV - Reimhak / WARNING: PHOTOSENSITIVITY / EPILEPSY SEIZURES."
  },
  {
    "id": "wrld_b26818da-5b7c-4dbc-9608-1b184210b843",
    "name": "ParticleLIve LUVORATORRRRRY",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 589,
    "visits": 6302,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c3c8502c-2a6f-4eda-b2ac-9d65a8062d7f/1/256",
    "note": "2021年公開、パーティクルライブ黎明期の一作。らいちちゃんの作品で、ネオンのタイポグラフィと幾何学的な光が疾走感のある演出を作ります。軽量でサクッと見られる、みんなでワイワイ見るタイプのライブです。PC専用。",
    "official": "ParticleLive LUVORATORRRRRY"
  },
  {
    "id": "wrld_afd31ae6-cc60-4de8-b27c-bff1e8243e87",
    "name": "ParticleLIve ECHO",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2897,
    "visits": 29358,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_759d41c2-662e-4734-8945-6dcf42fb0997/1/256",
    "note": "2020年、パーティクルライブ黎明期の作家らいちちゃんによる初期の名作『ECHO』。『花火』や『フィクサー』で知られる作者の原点的な一作で、今も訪れる人が絶えない定番です。",
    "official": "ParticleLive!!! ECHO"
  },
  {
    "id": "wrld_b1aa37c9-77dc-4653-816d-b54548e8fc09",
    "name": "[VRMV]ABLATION'S ECHO (Remake)",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1254,
    "visits": 10633,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "一人でゆっくり",
      "VR酔い注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f041b675-3482-4f5a-ae1e-a86e53226d4a/2/256",
    "note": "K1UCH1 feat. Lunonのオリジナル曲を、夜のビルの屋上で味わうパーティクルライブ。K1UCH1の3作目をリメイクした版で、星空と光の粒に合わせて歌詞が大きく浮かび、光のトンネルへ吸い込まれるような演出が見どころです。序盤はカメラの動きが速めなのでVR酔いに注意。PC専用、配信OK。",
    "official": "My 3nd Particle live world. (Remake) Music: ABLATION'S ECHO - K1UCH1 feat.Lunon"
  },
  {
    "id": "wrld_6691632b-92df-4b2f-b0c0-a1823dbc8fea",
    "name": "【パーティクルライブ】呼び込み商事テーマソング",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 880,
    "visits": 6475,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "視界ジャック強め",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_813ed1fd-9c22-4a97-97a6-b91d1556b7d2/2/256",
    "note": "Leafの楽曲に乗せたパーティクルライブ。にむさんが2026年に公開した作品で、作者が『視界ジャックきつめな場面があります』と予告するほど、視界いっぱいに広がる演出のあるタイプです。強い光や点滅が苦手な人は注意。Quest・iOS対応。",
    "official": "パーティクルライブです。視界ジャックきつめな場面があります。Music:Leaf"
  },
  {
    "id": "wrld_c7c96481-b753-4328-a3d6-c70b05d72532",
    "name": "MANA's Particle Live ナンセンス文学",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 4027,
    "visits": 42755,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "VRMV",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e40a54f3-1fa4-486d-9b71-0e3d10aaa6f7/2/256",
    "note": "初期パーティクルライブの名手MANAによる、Eve『ナンセンス文学』のパーティクルライブ。2020年に公開された作品で、文字と光が疾走するような演出で、文学的な歌詞の世界を全身で浴びる一作です。PC専用。",
    "official": "Particle Live ナンセンス文学 まな(MANA)が製作したパーティクルライブです。"
  },
  {
    "id": "wrld_854f1b5e-fb78-4e8f-9bb6-7ee36a88f8cd",
    "name": "PARTICLELIVE 【すきなことだけでいいです】",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 2116,
    "visits": 26449,
    "tags": [
      "パーティクルライブ",
      "VRMV",
      "音楽・ライブ",
      "一人でゆっくり",
      "VR酔い注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_43b5d18e-a056-45fc-8717-8e00584b99e5/1/256",
    "note": "れみーと作、約5分でサクッと見られる完成度の高いパーティクルライブ。作り込みの良さが紹介でも評判で、一人でもフレンドとでも気軽にどうぞ。演出の動きで少し酔う場合があるので、VR酔いが苦手な方は様子見から。",
    "official": "本ワールドは「れみーと」が作成したVRMV観賞用のワールドです。"
  },
  {
    "id": "wrld_1bba0674-4059-4fb8-903e-09977cf72b8e",
    "name": "Cinematic Neon Club LIVE WORLD _ LEve Future",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 921,
    "visits": 4404,
    "tags": [
      "音楽・ライブ",
      "パーティクルライブ",
      "演出・パーティクル",
      "フレンドと",
      "大容量注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_000dfc77-0d10-4e6a-9d86-95aad1a291bb/4/256",
    "note": "VR音楽ユニットCinematic Neon Clubの楽曲と演出を丸ごと体験する、5曲連続のライブワールド。静かな闇から始まり、ネオンのクラブへ膨らんでいく構成と映画級の映像演出が見どころ。容量約1.1GBと非常に重い、腰を据えて観るPC向け大作。",
    "official": "L Eve Future is a Cinematic Neon Club Live World"
  },
  {
    "id": "wrld_aa00d789-03b9-4e1b-93c0-7bd4a7369fc5",
    "name": "【VRMV】キスキツネ / HIMEHINA【ParticleLive】",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 713,
    "visits": 5126,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "VTuber",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1725eb35-d302-49bb-834b-f7864a2bf7df/1/256",
    "note": "HIMEHINAの楽曲「キスキツネ」のVRMV。ステア（stir）が2026年に公開した作品で、公式MVの流れを踏まえながらキャラクターをアレンジし、二人一組のペアダンスで魅せる可愛らしいパーティクルライブです。ヒメヒナファン必見の一作。PC専用。",
    "official": "ヒメヒナのキスキツネのVRMVです。歌唱：HIMEHINA 作詞：Gohgo 作曲：Kengo Minamida"
  },
  {
    "id": "wrld_d13027bc-fc2b-4422-a6f1-8fa232222446",
    "name": "The Edge",
    "category": "particle",
    "subtype": "パーティクル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 63782,
    "visits": 787189,
    "tags": [
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d7e021ff-ecd7-48a7-a97e-8c9143c5a77b/3/256",
    "note": "真っ暗な空間にネオンのパーティクルが音楽と同期して舞う、没入型ミュージックビジュアライザー。往年のMilkDropを思わせる光と闇のコントラストで、ビートに身を委ねたい夜に。海外メディアも注目の演出ワールド。",
    "official": "Patreon.com/MochieShaders"
  },
  {
    "id": "wrld_6909d0e8-cf53-4f0d-8dea-fd50b5c2113a",
    "name": "[VRMV] U [FAN MADE]",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 10375,
    "visits": 90394,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "ファンメイド",
      "フレンドと",
      "点滅注意",
      "アニメ・キャラ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b203574a-fdc1-4b89-9dcb-c53c079502df/1/256",
    "note": "映画『竜とそばかすの姫』の主題歌『U』のファンメイドVRMV（制作：Reimhak）。millennium parade × Belleの楽曲を光の演出で描いた2021年の作品ながら、今も色褪せない完成度で、映画を観ていなくても感動したという声が多数あります。光の明滅が強いので注意。PC専用。",
    "official": "『竜とそばかすの姫』の主題歌「U」で制作したファンメイドのパーティクルライブワールドです！ U - millennium parade / VRMV - Reimhak"
  },
  {
    "id": "wrld_8d73daf0-1b12-4a1e-bdcd-167db7289e69",
    "name": "VRMV [シャルル]",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 28,
    "recommendedCapacity": 14,
    "favorites": 4137,
    "visits": 64166,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "ボカロ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4f5a6587-8ab9-42e0-ba48-df073b57bb7b/3/256",
    "note": "バルーンの名曲『シャルル』のMVをVRで再現した、古参の定番VRMV。公開から年数が経っても訪れる人が絶えない、歌詞と光に包まれる鑑賞ワールドです。",
    "official": "シャルルのMV再現ワールドになります。"
  },
  {
    "id": "wrld_5ba0a512-7734-4d71-837d-d9b4b59b0018",
    "name": "Particle Live: ヒトリゴト",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 10391,
    "visits": 100720,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "アニメ・キャラ",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e9f198f6-6b3b-4ef2-8209-12e290b91d9f/1/256",
    "note": "ClariS『ヒトリゴト』（『エロマンガ先生』OP）を、パーティクルライブ作家・約束がワールド化した記念すべき10作目。可愛い世界観に光の演出が溶け込む、曲のファンも初めての人も楽しめる一作です。",
    "official": "約束の10作目ワールド化した！ 可愛い世界観、感謝の気持ちと大切な思いが溢れています！"
  },
  {
    "id": "wrld_59e5c557-f159-41f8-8581-54255c5fb50a",
    "name": "周波数0の合言葉 ~ particle live ~",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 4,
    "recommendedCapacity": 2,
    "favorites": 1437,
    "visits": 11673,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "フレンドと",
      "ファンメイド",
      "少人数",
      "VTuber",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_654bf498-de81-4609-be18-95ee6c37944d/1/256",
    "note": "バーチャルシンガー花譜の『周波数0の合言葉』を使ったパーティクルライブ。さぁもん：Dが2026年に公開した作品で、定員4人の小さな空間で、親しいフレンドとじっくり見るタイプです。同期のため、インスタンス主のスイッチ操作が必要な点に注意。花譜ファン必見の一作。PC専用。",
    "official": "vurtual singer 花譜さんの『周波数0の合言葉』を使ったパーティクルライブです。"
  },
  {
    "id": "wrld_f473bdea-ef31-4794-8a95-664ff04c193c",
    "name": "【VRMV】無意識レクイエム",
    "category": "particle",
    "subtype": "VRMV",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4600,
    "visits": 34047,
    "tags": [
      "VRMV",
      "ホラー・不気味",
      "演出・パーティクル",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_85b45c46-95bb-4266-8a50-47f6c34798e7/2/256",
    "note": "『わたしのこと、気づいてくれた？』――ホラーな気配をまとう、作者14作目のVRMV。東方アレンジサークル森羅万象の楽曲で、MVの再生数が1000万回を超えた『無意識レクイエム』を、『いますぐ輪廻』のVRMVも手がけるCoco_Moが2025年にVR化しました。気づかれたい“何か”と向き合うような、不穏で没入感のある鑑賞体験。容量379MBと重めなので読み込みに余裕を。PC専用。",
    "official": "14作目 わたしのこと、気づいてくれた？"
  },
  {
    "id": "wrld_6579ebee-0e8b-49fa-b9e7-20021c887f5e",
    "name": "Particle Live: 可愛くなりたい 1.4",
    "category": "particle",
    "subtype": "パーティクルライブ",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 6977,
    "visits": 82929,
    "tags": [
      "パーティクルライブ",
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c39edd03-0428-4c95-af28-0194b68e70f4/1/256",
    "note": "パーティクルライバー約束の7作目、『可愛くなりたい』の常設ライブワールド。サンリオVfesのチームディレクターも務める約束が2020年に公開した作品で、きらきら“かわいい”演出にダンスモーションと隠し要素もあり、フレンドと一緒に見て踊れる王道のパーティクルライブです。PC専用。",
    "official": "約束の7作目(可愛くなりたい)ワールド化しました！ 隠し要素もあり！"
  },
  {
    "id": "wrld_e7cadfb6-0e3b-4489-9398-fa4c5477a7f7",
    "name": "Walk",
    "category": "particle",
    "subtype": "音楽ライブ",
    "capacity": 16,
    "recommendedCapacity": 4,
    "favorites": 9414,
    "visits": 77452,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "チル",
      "一人でゆっくり",
      "映画・映像",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_92402615-1bf0-4a5d-b000-82c3f6fd3729/2/256",
    "note": "薄明の景観ワールドで知られるApathyによる、ヨルシカ『サン』を題材にしたアニメーションワールド。星空と文字の演出の中で楽曲の世界を歩く、静かに浸るタイプの1曲体験です。少人数での鑑賞がおすすめ。PC専用。",
    "official": "Animation world: Yorushika - sun (2024 HNY)"
  },
  {
    "id": "wrld_8bbb6f61-61cf-4243-a58e-2000f2740e2b",
    "name": "よるとうげ -Yorutouge-",
    "category": "particle",
    "subtype": "音楽ライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 76980,
    "visits": 364538,
    "tags": [
      "演出・パーティクル",
      "音楽・ライブ",
      "チル",
      "公式コラボ",
      "一人でゆっくり",
      "ボカロ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ead62acd-6833-43d8-841b-a3d84e4e3d8a/1/256",
    "note": "ボカロP・きくおの音楽世界を星くんと巡る公式体験ワールド。圧倒的なVFXで『この夜をこえる』没入感は、ファンならずとも衝撃級。容量が大きいのでPC推奨。Kikuoファンは必訪です。",
    "official": "-星くんが誘うKikuo音楽体験世界- この夜をこえよう。何度でもこの夜をこえよう。 #よるとうげ #yorutouge"
  },
  {
    "id": "wrld_8d3b76d6-f406-47cc-9b5b-70066b246db9",
    "category": "misc",
    "name": "Roux's Caravan ［South of Midnight］",
    "subtype": "夜・夜景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 5564,
    "visits": 44311,
    "tags": [
      "再現ワールド",
      "探索",
      "写真・撮影",
      "ファンメイド",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e86d8695-1bbc-43a0-b8c8-02778f2777da/3/256",
    "note": "ゲーム『South of Midnight』に登場するルーの馬車を再現したワールド。DarkBlade909が2025年に公開した作品で、小さな馬車の中は見た目に反して広く、所狭しと置かれたアンティークの品々を眺めるうちに不思議と温かい気持ちになれます。撮影地にも使われ、原作ファンの聖地巡礼にも。容量約319MB、PC専用。",
    "official": "Hm. Bigger on the inside. From South of Midnight"
  },
  {
    "id": "wrld_ad5c6b24-8659-4f3d-a271-7fd54150c0f6",
    "category": "chill",
    "name": "Eventide",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 10862,
    "visits": 95841,
    "tags": [
      "チル",
      "夕暮れ",
      "写真・撮影",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3d9ba406-5151-40f6-8b4e-67ab979f5523/1/256",
    "note": "『終わりの話、この夕暮れと』――夕暮れの光に包まれて静かに過ごすチルワールド。Kisukriが2026年に公開した、宵闇の迫る湖畔のベンチから遠くの街明かりと連峰を眺める小さな景観ワールドで、大画面の動画プレイヤーもあります。VR音楽ユニットYSSのMV撮影地にも使われた雰囲気の良さが持ち味で、写真を撮りながらのんびり過ごすのに向いています。PC専用。",
    "official": "終わりの話、この夕暮れと"
  },
  {
    "id": "wrld_0d847ad8-5d97-4f30-9f2f-54439caa01fc",
    "category": "chill",
    "name": "illuminant",
    "subtype": "自然・風景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7974,
    "visits": 85507,
    "tags": [
      "自然・風景",
      "写真・撮影",
      "チル",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9f7c60ad-7d46-4132-8e3a-2bae6161940e/1/256",
    "note": "ろうそくの暖色と青白い光の粒が水辺を漂う、洞窟の岩屋ワールド。『精霊の洞窟』と紹介される幻想的な景観で、水面の映り込みや白い花、天井の開けた一角の木々まで、静かに眺めて回る撮影・鑑賞向きの一作です。",
    "official": "Cave grotto"
  },
  {
    "id": "wrld_bd51a16b-1b06-4a3e-b1a1-436873454c19",
    "category": "misc",
    "name": "Experience",
    "subtype": "チル",
    "capacity": 60,
    "recommendedCapacity": 16,
    "favorites": 9168,
    "visits": 60206,
    "tags": [
      "チル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_80774cdc-a3bc-4b83-9662-a018f1c9759d/1/256",
    "note": "『Experience（体験）』とだけ名乗る、アルファ版（v1.02）のワールド。Nootauが2024年に公開した作品で、定員60人の広い空間を、多くの人がお気に入りに登録しています。何があるのかは、行って確かめるタイプの一作です。PC専用。",
    "official": "Alpha v1.02"
  },
  {
    "id": "wrld_10dc4379-e925-4b64-b347-9fe552e2fd4a",
    "category": "chill",
    "name": "Chasing Stars",
    "subtype": "夜・夜景",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 11340,
    "visits": 82726,
    "tags": [
      "チル",
      "宇宙・空",
      "夜・夜景",
      "睡眠・V睡",
      "電車・駅"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4d2c1c63-20d0-4b4b-9954-4cbfd0edbfd8/1/256",
    "note": "スカイランタンの灯りと月、満天の星空を静かに眺める夜のワールド。列車やホームの要素もあり、旅の途中で星を見上げるような気分で過ごせる。少人数でゆっくりしたい夜に。",
    "official": "If you turn on the sky lantern and look at it with the moon, it's pretty. スカイレランタンをつけ月と一緒に見たら綺麗です。스카이랜턴 버튼 키고 달이랑 같이 봐보세요.."
  },
  {
    "id": "wrld_6eb13a35-9efe-482d-9221-eb4111b9466c",
    "category": "game",
    "name": "SIAF TestWorld \"WIP\"",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 546,
    "visits": 2822,
    "tags": [
      "ゲーム",
      "乗り物",
      "一人でも",
      "飛行・フライト",
      "制作途中",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_21a91871-9716-4ddc-9b43-ce6653766c43/6/256",
    "note": "作者が新しく調整した航空機の性能やエフェクトを試せるテストワールド。YuGo0327_JPが2025年に公開した、SIAF系の機体を自由に飛ばして感触を確かめられる、航空ファン向けの実験場です。PC専用。",
    "official": "Welcome to the world! In this world, you can try out newly tuned effects and adjusted aircraft performance created by me. Please enjoy expressions and"
  },
  {
    "id": "wrld_38f5eba0-987d-421e-b24b-938edc846546",
    "category": "game",
    "name": "EDEN",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 3926,
    "visits": 38176,
    "tags": [
      "探索",
      "ストーリー",
      "海・水中",
      "やり込み",
      "一人でも",
      "高負荷",
      "映画祭・受賞作",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_115d6c7e-68af-432c-9a21-a784ee7e7d8c/8/256",
    "note": "生物圏を舞台にした海底探索アドベンチャー。Centauri（AltCentauri）が2020年に公開し、2021年のベネチア国際映画祭 Venice VR Expanded にも選ばれた作品で、一人でも、最大20人での協力プレイでも遊べます。移動アイテム『Bee』を強化しながら輪くぐりの試練をこなし、謎の生物が待つ深海へ向かう物語仕立ての本格派。プレイ時間は30分〜4時間ほどと長く、一人だと不穏なBGMが怖いほど。GPUへの負荷が高いので注意。PC専用。",
    "official": "EDEN - A storydriven adventure into the Eden Sphere, a full biosphere for the player to explore! （WARNING ｜ GPU INTENSIVE）LAST UPDATE : 7/26/2021"
  },
  {
    "id": "wrld_89a38c29-23e9-4141-a1c6-d349ab67c6e8",
    "category": "misc",
    "name": "面会室 VisitingRoom",
    "subtype": "電車・駅",
    "capacity": 16,
    "recommendedCapacity": 4,
    "favorites": 1700,
    "visits": 20025,
    "tags": [
      "再現ワールド",
      "少人数",
      "ロールプレイ",
      "写真・撮影",
      "軽量",
      "ネタ・ミーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ef49063d-9ad7-4bd3-b69b-5879d486a8c3/1/256",
    "note": "刑事施設の面会室を再現した、定員2人の小さなワールド。Kazane_vrが2026年に公開した作品で、ガラス越しに向かい合う構図が、面会ごっこやシチュエーション撮影、1対1の対話RPにぴったり。6MB台と軽量で、短時間のネタ訪問にも向きます。Quest対応。",
    "official": "Visitation Rooms at Police Stations and Detention Centers （Criminal Facilities）: These are rooms where visitors can meet with suspects or defendants w"
  },
  {
    "id": "wrld_3af72567-397b-40d9-9f4f-85a5a7d42549",
    "category": "exhibition",
    "name": "仮想図書館【Reliure】",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 886,
    "visits": 7744,
    "tags": [
      "図書館・本",
      "集会・交流",
      "一人でゆっくり",
      "アート・展示",
      "静かな空間",
      "作業用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c2839f81-9025-4657-939e-1adde7ba5647/1/256",
    "note": "本を通じた交流と、一人の静かな時間のための図書館ワールド。公募制の本棚展示や企画展示、本にまつわる3種類のイベントなどが開かれ、利用者の本が実際に並ぶ参加型の仕組みが特徴です。くつろげるスペースも多く、読書や作業、チルにも使えます。",
    "official": "本を通じた交流や一人の静かな時間に使える、図書館型のワールドです。 公募制の本棚展示や企画展示、本に関する3種類のイベントなど、様々な催しを実施しています。 ゆっくりできるスペースもたくさんご用意していますので、読書や作業、チルなど、ご自由にお使いください。"
  },
  {
    "id": "wrld_84318cd3-a946-45f5-b4dd-3a28cb7842a1",
    "category": "misc",
    "name": "白紙 - Canvas",
    "subtype": "アート・展示",
    "capacity": 7,
    "recommendedCapacity": 7,
    "favorites": 2077,
    "visits": 14247,
    "tags": [
      "お絵描き",
      "体験型",
      "アート・展示",
      "少人数",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_098c90cd-42cb-49e5-a46a-520d2daabbee/2/256",
    "note": "真っ白な世界にペンで色を塗ると、木や家具が姿を現し、モノクロの景色が鮮やかな風景へと変わっていく体験型アートワールド。『宵闇車両で終末を』など夜や終末のワールドで知られる浜名湖なこが2025年に公開した作品で、描くたびに世界が色づく気持ちよさが魅力。少人数でじっくり創作を楽しみたい人向けです。PC専用。",
    "official": "白い紙に世界を描け"
  },
  {
    "id": "wrld_317bddf0-d2b4-4a08-be8d-289176c838fd",
    "category": "misc",
    "name": "ボカロCDレンタル喫茶店",
    "subtype": "写真・撮影",
    "capacity": 28,
    "recommendedCapacity": 10,
    "favorites": 3561,
    "visits": 34432,
    "tags": [
      "音楽・ライブ",
      "ボカロ",
      "カフェ・飲食",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ba489fb5-badc-40d0-8a31-89d303f575b1/4/256",
    "note": "ボカロ曲が約2000曲そろう、もとはイベント用に作られたレンタルCD喫茶店。棚からCDを選んで聴けて、ボカロ好き同士の交流の場にもなっています。",
    "official": "ボカロ曲が2000曲くらい、、？（把握し切れてない）あります、 元々イベント用に作られたワールドなので、わからないこと、曲を追加してほしいなどは入口のグループポスターからディスコードに入り相談してみてください！ スライドフォトフレーム追加しました、皆様のココで撮られたお写真をXに上げてもらえるとこの"
  },
  {
    "id": "wrld_2e051a67-f58a-4257-bfb7-23f0f63a1669",
    "category": "chill",
    "name": "終端区域：第三重工業層",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1252,
    "visits": 11384,
    "tags": [
      "探索",
      "廃墟",
      "SF・近未来",
      "一人でゆっくり",
      "高負荷"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_12f56c83-f228-4a72-936a-c0e01139c561/13/256",
    "note": "投影された擬似晴天の下、分断された工業廃島群をジップラインで渡る探索ワールド。旧端末や特定の番号を受け付ける公衆電話など、物語の気配を残す仕掛けが点在する。環境により重い場合あり。",
    "official": "投影された擬似晴天の下に横たわる、分断された工業廃島群。一本のジップラインだけが二つの島を繋いでいる。各区画には旧世代端末《VizVid》《ImagePad》が未だ通電状態で残存。記録は更新されず、応答もない。 人影は確認されず。 稼働音だけが、停止できなかった機械群の鼓動として微かに響いている。君"
  },
  {
    "id": "wrld_1611ec65-15ed-4d25-bb40-9304e6dbbd3b",
    "category": "chill",
    "name": "Japan After School",
    "subtype": "学校",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 15374,
    "visits": 237537,
    "tags": [
      "ノスタルジー",
      "探索",
      "チル",
      "日本",
      "夏",
      "学校",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4081451e-c953-4de7-b0a3-8caf47e4b1fc/25/256",
    "note": "昭和レトロな小学校と小さな町を歩く、放課後の帰り道ワールド。駄菓子屋や食堂、神社に寄り道でき、高台から見下ろす町並みが美しいと評判。春夏秋冬の四季版があり、こちらは夏版。PC専用。",
    "official": "Japan After School 放課後の帰り道 夏 - Summer - 本体 ｜ 春・秋・冬は別ワールドになりました。"
  },
  {
    "id": "wrld_20f8e740-0f4f-4d2e-887b-514bf405c1ff",
    "category": "misc",
    "name": "終点のひとつ前／Before Goodbye",
    "subtype": "写真・撮影",
    "capacity": 30,
    "recommendedCapacity": 15,
    "favorites": 1198,
    "visits": 10407,
    "tags": [
      "電車・駅",
      "ノスタルジー",
      "探索",
      "レース",
      "写真・撮影",
      "夏",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4a1c9fc3-f309-4918-acfa-f3e8f2af048a/1/256",
    "note": "レーシング場に日本の自然と夏の要素、建物を詰め込んだ箱庭のような世界。_onioniが2026年に公開した作品で、徒歩の散策、レース、路面電車での遊覧と楽しみ方が多様。『また会えたね』の言葉が似合うノスタルジックな空気が漂います。PC専用。",
    "official": "また会えたね。 いつか思い出になる今日を、もう少しだけ。 Nice to see you again. Let's stay a little longer in this day that will someday become a memory"
  },
  {
    "id": "wrld_fe865eee-3a3d-4fe1-890c-5e4e0ec50649",
    "category": "misc",
    "name": "Just トークガン",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3624,
    "visits": 34831,
    "tags": [
      "集会・交流",
      "フレンドと",
      "軽量",
      "トークゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_373b13a1-bd27-4156-9a30-ab624c0d39c0/4/256",
    "note": "壁一面に並ぶトークガンを撃つと、会話の話題が飛び出す雑談支援ワールド。『話題出し』『セリフ読み』『王様ゲーム』『雑学』など用途別のトークガンがあり、ちょっとドキッとするお題が混ざっていることも。初対面のアイスブレイクにも、仲良し同士のネタ探しにも。Quest対応・約13MBと軽量。",
    "official": "大量のトークテーマガンが設置された、雑談向けワールドです。 「話題出し用」「セリフ読み用」「王様ゲーム用」「雑学」など、用途別のトークガンを多数用意しています。 ちょっとドキッとするテーマのトークガンが混ざっていることも？ なんとなく集まって、なんとなく話したい。 そんな時に気軽に使ってもらえたら嬉"
  },
  {
    "id": "wrld_17bdbeb5-a676-4f08-8b79-8b734e1bf4c3",
    "category": "game",
    "name": "EVEREST WALKING SIMULATOR",
    "subtype": "自然・風景",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 6531,
    "visits": 39081,
    "tags": [
      "再現ワールド",
      "一人でゆっくり",
      "フレンドと",
      "自然・風景",
      "探索",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_60094b5f-1cd1-4c6d-9916-7dac82a5c1ac/5/256",
    "note": "エベレストを実寸スケールで再現した登山シミュレーター。Theslythiefが2025年に公開してXで大きな話題になり、アップデートでベースキャンプや実際と同じ登山ルートも加わりました。見えているのに近づけない山の大きさは「脳がバグる」ほどで、苦行なのに光が美しいと評判です。登った高さと時間はオートセーブされるので、休みながら登れます。フレンドと一緒に出発するのがおすすめ。PC専用。",
    "official": "EVEREST WALKING SIMULATOR: A 1:1 scale world of Mt. Everest, the tallest mountain in the world. Created by: Theslythief ＆ SwaMusic"
  },
  {
    "id": "wrld_6b7cfe60-7607-4a76-b7dc-7d2490d5c907",
    "category": "misc",
    "name": "The Antikythera Mechanism",
    "subtype": "宇宙・空",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1594,
    "visits": 12470,
    "tags": [
      "宇宙・空",
      "体験型",
      "学習・教育",
      "一人でゆっくり",
      "映画祭・受賞作"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4ffc3728-597c-4a86-8c8b-e550b3514a2b/3/256",
    "note": "パンテオン風のホールの中央で、天文時計が実時間で惑星の位置を示し続ける。過去や未来の日付も入力でき、時空を超えた天体観測が楽しめる。ヴェネツィア国際映画祭のXR部門にも選出された、知的好奇心を刺激するワールド。",
    "official": "This astrological clock moves in real-time, showing the current planetary positions from a geocentric perspective. Input any date, past or future. App"
  },
  {
    "id": "wrld_df596eec-e84b-4e06-ac11-53f2d3d9b0d7",
    "category": "exhibition",
    "name": "capital city Karl-Balar",
    "subtype": "街・都市",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 5334,
    "visits": 28614,
    "tags": [
      "街・都市",
      "写真・撮影",
      "ファンタジー",
      "制作途中",
      "アバター",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b1ba1a87-b5d1-4ed0-8d04-b6d939506e58/1/256",
    "note": "サークル『第六製鉄部』の世界観を形にした、発達したスチームパンクの帝都。煙る工場と飛行船、近代的で整った帝都の街並みが勇壮です。同世界観アバターの展示・販売も。現在も拡張中の作り込み特化ワールド。PC専用。",
    "official": "帝都カール・バラル 議事堂公園周り サークル「第六製鉄部」の世界観を形にしたワールド第一弾です。 まだ完成状態ではありませんが「発達したスチームパンク」をコンセプトに作者脳内のイメージを放出した画作りに特化したワールドです。 同世界観のアバターの展示・販売も行っています。 Karl-Balar Im"
  },
  {
    "id": "wrld_2ee6899b-9110-47f7-99f6-e25559debc6b",
    "category": "misc",
    "name": "県立 方瀬高等学校 - Katase High-school",
    "subtype": "学校",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1906,
    "visits": 20436,
    "tags": [
      "日本",
      "学校",
      "ロールプレイ",
      "集会・交流",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_877490c2-28fb-4b2b-8bcb-6d7491b6e097/4/256",
    "note": "青春グループ『方瀬高校』の公式校舎ワールドで、バーチャル高校生・芳井はじめが通う高校でもあります。最寄り駅から坂道を歩いて校門へ向かう通学路の再現から始まり、教室にも入れます。文化祭などのイベント会場にもなる、学校生活ごっこや青春RPの拠点です。Quest対応。",
    "official": "VRChatで青春するグループ「方瀬高校」の校舎ワールドです。 バーチャル高校生、芳井はじめが通っている高校でもあります。"
  },
  {
    "id": "wrld_f29fc248-5999-42ca-9ec2-d18cc5616b92",
    "category": "misc",
    "name": "StormRiderRevival Fullride",
    "subtype": "乗り物",
    "capacity": 60,
    "recommendedCapacity": 60,
    "favorites": 728,
    "visits": 3894,
    "tags": [
      "再現ワールド",
      "アトラクション",
      "ファンメイド",
      "乗り物",
      "VR酔い注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_00c1ceb7-fc9b-4334-ab07-ad89fa7c510a/2/256",
    "note": "東京ディズニーシーで2016年に終了したアトラクション『ストームライダー』を、ファンが再現した搭乗体験ワールド。巨大なストームを消滅させるミッションに参加するシアタータイプのライドで、プレショーの再現や、隠れミッキー30個＋シークレット2個も探せます。本編フルライド版で、揺れが激しいためVR酔いに注意。",
    "official": "過去に存在したディズニーシーのアトラクション再現ワールドです！＊揺れの激しいアトラクションの為酔いやすいので注意してください！ ・巨大なストームを消滅させるミッションに参加するシアタータイプのライドアトラクションです！ ライド以外にもプレショーの再現ギミックや隠れミッキー30個＋シークレット2個、隠"
  },
  {
    "id": "wrld_966562e0-5c59-44c4-b69e-99c4519eb5a8",
    "category": "misc",
    "name": "FLASHING WARNING",
    "subtype": "ホラー・不気味",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 7175,
    "visits": 53346,
    "tags": [
      "リミナルスペース",
      "点滅注意",
      "ホラー・不気味",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2aeec0ac-89cb-4361-9f7c-5dd4ca8c2b5a/4/256",
    "note": "その名の通り、強い光の点滅が続くリミナルスペース系ワールド。xlxxlが2025年に公開した、『夢遊第六日』に着想を得た作品で、不穏で夢のような空間を進む体験です。点滅が非常に強いので、光に弱い人は入らないでください。Quest対応。",
    "official": "FLASHING WARNING! 点滅注意!Inspired by 夢遊第六日 ＠zNz1_o09z"
  },
  {
    "id": "wrld_27e8d086-7862-417e-9f3a-48d41e33b27c",
    "category": "misc",
    "name": "運命の路地裏 -A Fortune-Telling World-",
    "subtype": "チル",
    "capacity": 12,
    "recommendedCapacity": 6,
    "favorites": 17933,
    "visits": 361765,
    "tags": [
      "占い",
      "少人数",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_83d11480-ce03-4097-b348-298072adc516/3/256",
    "note": "路地裏の占い館でAIタロット占いが受けられるワールド。占えるテーマは日替わりで、1日1回無料。結果文はかなり読み応えがあると好評。利用には『信頼できないURLを許可』設定が必要。Quest対応。",
    "official": "その扉の先に、運命はすでに記されている。読むかどうかを決めるのは、あなた自身ーーーー。「運命の路地裏」では、AIが導くタロット占いを1日1回、無料で体験できます。さらに、占える内容は日替わりで変化。占いが好きな人も、ちょっとした刺激を探している人も大歓迎！占いシステムを動作させるため、設定から「信頼"
  },
  {
    "id": "wrld_e31f64ee-4d2a-4f61-b8a1-e52200f6fb02",
    "category": "misc",
    "name": "ペンの多い集会所の夜",
    "subtype": "チル",
    "capacity": 20,
    "recommendedCapacity": 14,
    "favorites": 875,
    "visits": 9022,
    "tags": [
      "お絵描き",
      "集会・交流",
      "夜・夜景"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_dda0ae15-5dbb-485e-824a-035e840dc95e/12/256",
    "note": "人気のお絵描き集会所の夜バージョン。ペンは太めで発光も強く調整されていて、暗い空間でも3Dアートが描きやすくなっています。BGMはプレイリストから選べ、大きな壁の裏には椅子で空を飛べる仕掛けも。夜の雰囲気の中で、描く人同士が集まって過ごせる場所です。",
    "official": "ペンの多い集会所の夜バージョンです。 ペンの太さが太めに調整されています。ペンの発光も強めです。多彩な表現が可能です。３Dアートも描きやすいです。椅子飛行は大きい壁の裏です。BGMはプレイリストから選べます。QvPens Art Studio"
  },
  {
    "id": "wrld_c1828717-a7b5-4738-9cd0-8f5fe2a45a08",
    "category": "misc",
    "name": "Prologue of NEONOSTALGIA",
    "subtype": "ノスタルジー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4794,
    "visits": 30331,
    "tags": [
      "SF・近未来",
      "ノスタルジー",
      "雨",
      "夜・夜景",
      "写真・撮影",
      "ロールプレイ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d16461fc-12f3-45d0-9c50-ebb881ac8e3f/2/256",
    "note": "無機質な研修室の扉を開けると、雨とネオンに濡れたレトロフューチャーな路地裏が広がります。クラゲが浮かぶ公衆電話ボックスなど撮影スポット満載で、RPイベントの拠点でもある世界観ワールド。VRフォトグラファーの撮影地にも使われていました。ただし2026年11月時点ではVRChatで見つからず、非公開になったか削除されたようです。PC向け。",
    "official": ""
  },
  {
    "id": "wrld_240299fa-7378-463b-a96b-74413aa20cb6",
    "category": "chill",
    "name": "追憶の原風景",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 9203,
    "visits": 64895,
    "tags": [
      "チル",
      "日本",
      "夏",
      "ノスタルジー",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_83ab12a5-8f67-45c3-b269-e2875253adf3/2/256",
    "note": "入道雲の空の下、神社と踏切、あぜ道と自転車が点々と続く、誰かの夏の記憶を歩くワールド。mackerel_misogiが2025年に公開した作品で、置かれた物から物語を想像する楽しさがあり、BGM『神様と出会った日に』（Nofu）がノスタルジーを深めます。一人で静かに浸りたい日に。PC専用。",
    "official": "BGM: 神様と出会った日に / Nofu"
  },
  {
    "id": "wrld_a231971b-3c5c-4a15-b620-0ab27625266a",
    "category": "misc",
    "name": "Dracula's Castle",
    "subtype": "ゲーム",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 12508,
    "visits": 130128,
    "tags": [
      "再現ワールド",
      "探索",
      "ファンメイド",
      "大容量注意",
      "ファンタジー",
      "アニメ・キャラ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_53ea8b4c-9a6c-474e-92e0-9122e810d8a4/6/256",
    "note": "Netflixアニメ『キャッスルヴァニア』のドラキュラ城を、ほぼ一から作り上げて忠実に再現したファンワールド。Taaaaannerが2021年から少しずつ作り進め、2024年に公開しました。ゴシックな城内を探索・撮影でき、VRフォトグラファーの撮影地にも選ばれていますが、容量は約363MBと非常に重いので読み込みには余裕を。PC専用。",
    "official": "A faithful fan-recreation of Dracula's Castle from Netflix's Castlevania. Almost entirely built from scratch and optimized for VRChat! ［No AI was used"
  },
  {
    "id": "wrld_0afe3342-05a1-4fbf-ad99-5ea1fb71ab7a",
    "category": "game",
    "name": "VUdon Vehicles - Desert （Open Alpha）",
    "subtype": "乗り物",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 20683,
    "visits": 153916,
    "tags": [
      "乗り物",
      "自然・風景",
      "フレンドと",
      "ゲーム",
      "探索",
      "制作途中"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3801ac3c-bb49-4357-9219-77fe6e462b84/1/256",
    "note": "アメリカの荒野をクラシックカーで走る、オープンワールド型ドライブワールド。多彩な車両は運転しやすくリアルで、『走るのが楽しくクオリティが高い』と評判。Open Alphaで進化中。容量大きめ。",
    "official": "A realistic open desert driving environment featuring a wide variety of vehicles and locations to visit. Please note: This world is currently in Open"
  },
  {
    "id": "wrld_95f6ad59-299d-4f52-a358-4c4f01b4906a",
    "category": "misc",
    "name": "Just ミーム",
    "subtype": "写真・撮影",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 13670,
    "visits": 74346,
    "tags": [
      "ネタ・ミーム",
      "写真・撮影",
      "ギミック",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_30a05e20-2407-420f-97ef-50a7d001db29/9/256",
    "note": "有名ネットミームの構図を再現して撮影できるワールド。プリセットを選び球体の中にカメラを固定するだけで、自分のアバターでミーム写真や動画が撮れる。70種以上収録、デスクトップでも撮影可。PC専用。",
    "official": "プリセットを選んで、球体の中にカメラを固定して撮影するだけ！誰でも簡単に自分のアバターで「ネットでよく見るアレ（ミーム）」になれちゃいます。「＃VRC_Just_Meme」を付けてポストしてくれたら嬉しいです！2026/05/02 4種追加しました。"
  },
  {
    "id": "wrld_fc89338d-13a0-4010-a1bb-e0c9383ff2fa",
    "category": "exhibition",
    "name": "Onnon_Nostalgia1999",
    "subtype": "アニメ・キャラ",
    "capacity": 50,
    "recommendedCapacity": 50,
    "favorites": 13929,
    "visits": 166649,
    "tags": [
      "ノスタルジー",
      "再現ワールド",
      "探索",
      "公式コラボ",
      "アニメ・キャラ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cf963172-1ccf-4527-b50e-e97c902a72ad/9/256",
    "note": "東映アニメーションとソニーのコラボによる、1999年7月のオタクの六畳間再現。東映アニメーションの新規事業ONN’ON STUDIOSが2023年に公開し、海外のアニメメディアでも話題になりました。手のひらサイズになって部屋を探索でき、フォトグラメトリで再現されたソニー製品や、『おジャ魔女どれみ』『銀河鉄道999』のポスターなど90年代アニメグッズがぎっしり。触ると動く小物もあります。Quest対応。",
    "official": "1999年7月のソニー製品やアニメグッズが並ぶオタク部屋 Otaku room with Sony products and anime goods in July 1999"
  },
  {
    "id": "wrld_acf20636-2acd-4054-9055-812fa69d9505",
    "category": "misc",
    "name": "旅するフクロウの本 Pocketale",
    "subtype": "写真・撮影",
    "capacity": 12,
    "recommendedCapacity": 2,
    "favorites": 395,
    "visits": 3568,
    "tags": [
      "ストーリー",
      "図書館・本",
      "写真・撮影",
      "チル",
      "探索",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b73d4187-1073-45e0-8943-954f2907bd63/7/256",
    "note": "『物語をポケットいっぱいに詰め込んで。今日もどこかでぶらり旅』と添えられた、旅するフクロウシリーズの一作。ApacheOwlが2025年に公開した作品で、本にまつわる小さな物語の世界を、写真を撮りながらゆっくり巡れます。Quest対応。",
    "official": "物語をポケットいっぱいに詰め込んで。今日もどこかでぶらり旅。"
  },
  {
    "id": "wrld_0173972b-ebca-4cc6-a8af-b6bbed7b042a",
    "category": "misc",
    "name": "-yuuri-記憶の彼方",
    "subtype": "ノスタルジー",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2425,
    "visits": 20326,
    "tags": [
      "ストーリー",
      "探索",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_caf81556-6c7b-4fd4-91fa-d9a49d431404/5/256",
    "note": "『いつか会えると信じて。』―記憶を巡る物語シリーズ『記憶のカケラ』の序章（ep.始まり）。o_ゆうり_oが2026年に公開した作品です。続きの『記憶のカケラ』もあわせてどうぞ。PC専用。",
    "official": "いつか会えると信じて。（ep.始まり）【ぜひ記憶のカケラも遊びに行ってみて下さい】"
  },
  {
    "id": "wrld_7dad4236-5d3a-4373-aff2-a97dcef95542",
    "category": "misc",
    "name": "A World Of My Own",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 2826,
    "visits": 21292,
    "tags": [
      "探索",
      "ギミック",
      "家・部屋",
      "ネタバレ注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_29f65cd1-2ae2-41ec-b51e-33dfcf79f877/4/256",
    "note": "1か月制作企画の出展作。アンティークな家を出た先で世界の印象が一変する仕掛けがあり、ネタバレ厳禁で勧められる探索ワールド。襟草たぬが2025年に公開した作品で、添えられた一言は「今日もどこかで世界は生まれ続けています」。家の中も外も作り込みが細かいので、まずは何も見ずに訪問を。PC専用。",
    "official": "今日もどこかで世界は生まれ続けています。 ＃1MonthWorldWorks 出展作品"
  },
  {
    "id": "wrld_5f9ac409-3459-4254-98fb-66c5cbdc23ac",
    "category": "misc",
    "name": "Kurotori Photo Studio［WIP］",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 12829,
    "visits": 272783,
    "tags": [
      "写真・撮影",
      "フォトスタジオ",
      "アバター"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9138153c-81d9-465d-8578-5962f05e89e9/3/256",
    "note": "ライティングを細かく調整しながら撮れる、シンプルなアバター撮影スタジオ。宣材写真のような一枚から、光と画角を詰めたこだわり撮影まで対応し、アバター販売用サムネイルの撮影地としても使われている。",
    "official": "ライティングを整えたシンプルなアバター撮影ワールドです。アバターをキレイに撮影したい人におすすめ。ここで撮影した写真はアバター販売のサムネイルに利用してもOKです。"
  },
  {
    "id": "wrld_297f348e-fcc6-4337-9d19-9eaa357e7e72",
    "category": "misc",
    "name": "Million Sky Highland",
    "subtype": "宇宙・空",
    "capacity": 50,
    "recommendedCapacity": 50,
    "favorites": 1287,
    "visits": 8737,
    "tags": [
      "宇宙・空",
      "学習・教育",
      "チル",
      "写真・撮影",
      "夜・夜景"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fa75eecc-ae90-414c-999c-b9a2c7fc0630/8/256",
    "note": "Gaia衛星のデータをもとに、1,000万を超える星が瞬く高原。星座線のないリアルな星空を、赤道儀式の望遠鏡で拡大して眺められます。月や土星、木星も見ごたえあり。星空案内イベントの会場にも使われる、本格派の天体観測ワールドです。",
    "official": "望遠鏡を使ったリアルな天体観測が楽しめます。一千万を超える星を描画し、望遠鏡で拡大するほど細かな星粒に。月や土星、木星も見ごたえがあります。 / Over 10-million stars from the Gaia star catalog fill the sky, with the Milky"
  },
  {
    "id": "wrld_51c5392a-4a8b-42fd-a61a-14a97a207b8f",
    "category": "misc",
    "name": "Frozen Signal",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 9313,
    "visits": 94064,
    "tags": [
      "探索",
      "SF・近未来",
      "雪・冬",
      "一人でゆっくり",
      "映画祭・受賞作",
      "ストーリー",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_507a1b36-5f18-4d75-b987-9248a197fe80/7/256",
    "note": "凍てついた静寂に佇む古い研究基地を探索する、SFアドベンチャー。応答し続ける謎の信号の正体に近づく物語体験で、ヴェネツィア国際映画祭Best of Worlds選出作。Quest対応。雪と星空の静けさに浸りたい人に。",
    "official": "In the frozen silence, an old research station still listens to the signals No one remembers who built it or what they were searching for, but somethi"
  },
  {
    "id": "wrld_020d2f7f-d586-4ded-8a70-d5245201a638",
    "category": "chill",
    "name": "陽射しの廃駅-Abandoned station in the sunshine",
    "subtype": "海・水中",
    "capacity": 15,
    "recommendedCapacity": 10,
    "favorites": 39327,
    "visits": 254831,
    "tags": [
      "廃墟",
      "電車・駅",
      "写真・撮影",
      "ノスタルジー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4dd0fc35-4447-47da-8705-8cc63bc14a6c/3/256",
    "note": "緑に飲み込まれた廃駅に、眩しい陽射しと舞い散る木の葉。時間が止まったような静けさとピアノのBGMが、寂しいはずの廃墟を温かくするHANI.作の景観ワールドです。水に浸かった線路の先には廃団地が続き、Xでは、かつての人の営みを閉じ込めた宝箱のような世界と紹介されています。撮影向き、少人数で静かに。PC専用。",
    "official": "BGM:sea no -足跡"
  },
  {
    "id": "wrld_8d7bcb31-88d3-4fa5-9288-e87b4d91b5f6",
    "category": "chill",
    "name": "Yayoi Rusted Train",
    "subtype": "自然・風景",
    "capacity": 36,
    "recommendedCapacity": 18,
    "favorites": 34508,
    "visits": 543078,
    "tags": [
      "チル",
      "電車・駅",
      "自然・風景",
      "一人でゆっくり",
      "写真・撮影",
      "廃墟",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1894faa2-ac3d-4b2a-bcf6-0ef9314e6ff2/1/256",
    "note": "草原にポツンと置き去りにされた、植物に侵食された廃電車のチルワールド。猫屋敷やよいが2020年に公開した作品で、車内まで草が生い茂り、風と雨音だけが聞こえる終末感が魅力です。車内の水たまりや吊り革、散らばる枕木を眺め、寝転んで空を見上げれば、文明の儚さと生命の力強さを味わえます。ASMR動画の撮影に使われたことも。PC専用。",
    "official": "古いさびた電車。BGM : 雨音の静か written by shimtone"
  },
  {
    "id": "wrld_0073106b-ad39-4dd4-abe6-42df6837fed3",
    "category": "misc",
    "name": "いなくなったフレンドを探すワールド",
    "subtype": "",
    "capacity": 1,
    "recommendedCapacity": 1,
    "favorites": 3528,
    "visits": 15655,
    "tags": [
      "ホラー・不気味",
      "一人専用",
      "探索",
      "ストーリー",
      "謎解き",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3fdc7118-32bd-48c7-8d6f-93323e90e0f0/2/256",
    "note": "消えたフレンドを探す、定員1名の一人専用探索ワールド。留奈が2024年に公開した作品で、「いなくなってしまった僕の大切なフレンドを探すお手伝いをしてください」という依頼から始まります。静かなはずの部屋で手がかりを追う、不穏な空気の物語で、Xでも「とてもよかった」と紹介されました。ホラー寄りの演出があります。PC専用。",
    "official": "いなくなってしまった僕の大切なフレンドを探すお手伝いをしてください ＃Lunar_NFH"
  },
  {
    "id": "wrld_eda2b55e-9f7e-402c-b3ce-af7eac14bd4d",
    "category": "chill",
    "name": "_Let Go / 手放す",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 9152,
    "visits": 45251,
    "tags": [
      "体験型",
      "ストーリー",
      "一人でゆっくり",
      "写真・撮影",
      "大容量注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fa2fa27d-936f-441b-b765-08744969503e/8/256",
    "note": "目覚めた白い部屋から始まる、小さな物語体験。散らばった『執着のかけら』をひとつずつ拾い集め、最後に手放すまでを辿ります。灯台や海辺、水に浸かる病室など、明るく静かな景色の中を一人で歩く、詩的な一作。容量約648MBと重め。",
    "official": "Gather the pieces of your obsession to finally let them go./目を覚ますと、白い部屋にいた。 散らばったかけらを、ひとつずつ拾い集めていく。 指先は、それを知っているような気がする。"
  },
  {
    "id": "wrld_07644d4f-ecca-4118-9833-528a5b1ca700",
    "category": "misc",
    "name": "黙示録教室 - Apocalypse Classroom",
    "subtype": "自然・風景",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 8351,
    "visits": 60397,
    "tags": [
      "写真・撮影",
      "廃墟",
      "学校",
      "チル",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2acc5a4d-1aab-455f-b2c6-c36f6617df7d/4/256",
    "note": "自然に還りつつある廃墟の教室を、朝・夕焼け・夜と光を切り替えて眺める景観ワールド。荒廃と明るい日差しのギャップが『エモい』と撮影勢に人気で、Art_Vin作。怖がらせるホラーではなく、静かに写真を撮りたい人向けです。",
    "official": "Apocalypse Classroom World."
  },
  {
    "id": "wrld_a76aa4f6-6ec0-449a-a1ae-89beecb48463",
    "category": "misc",
    "name": "山祇 -Yamatsumi-",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6984,
    "visits": 53802,
    "tags": [
      "日本",
      "神社仏閣・宗教",
      "廃墟",
      "写真・撮影",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d1775a78-1f2d-4eb3-8827-8f19d5225ad1/6/256",
    "note": "山中にひっそりと佇む廃神社のワールド。VRChatのフォトグラファーとしても活動するえこちん（ecochin）が2024年に公開した作品で、朽ちた社と山の静けさに、のる作のBGM『朱き山祇』が重なります。配信や撮影した写真の展示もOK。静謐な和の景観を一人で眺めたいときに。PC専用。",
    "official": "ワールドでの配信・撮影した写真の展示OKです。BGM「朱き山祇 by のる」"
  },
  {
    "id": "wrld_3073de19-9714-4fa6-9bb2-9f40c9d3325f",
    "category": "misc",
    "name": "仮想山 観心寺 The Japan Temple",
    "subtype": "自然・風景",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 3605,
    "visits": 66187,
    "tags": [
      "日本",
      "神社仏閣・宗教",
      "集会・交流",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_07a217b7-8a3a-4ebc-ad3a-8ddc08bf3a38/5/256",
    "note": "バーチャル僧侶が営む山あいのお寺。「バーチャル僧侶」として活動するいとよが2022年に公開し、希望者のお墓を建てる受付を始めたワールドで、J-CASTニュースでも「メタバースにお墓」として紹介されました。申請すると自分のお墓を建ててもらえ、生前葬や記念のお墓が100基以上並びます。VRならではの供養と交流の場です。Quest対応。",
    "official": "山の中の小さなお寺です。お墓を建てられます。Keso-zan KanShin-Temple The JP temple in the mountains.We build your grave.メタバース霊園"
  },
  {
    "id": "wrld_afc35c27-ed48-4be2-9643-345d7bf59b9a",
    "category": "exhibition",
    "name": "RIPPLE 2 （Exhibition）",
    "subtype": "宇宙・空",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 2441,
    "visits": 12208,
    "tags": [
      "アート・展示",
      "ASMR・立体音響",
      "音楽・ライブ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_306ae2f5-7ce6-4241-a4d3-f46b5692908c/1/256",
    "note": "普段はイベントのときしか開かないクラブ『RIPPLE 2』の常設展示版。中庭の立体音響のインスタレーションを抜けると、奥のホールに光の壁のクラブ空間が広がります。展示が再生されないときは、消火栓の『Resync』ボタンを。PC専用。",
    "official": "RIPPLE 2 （Exhibition） このワールドでは、クラブスペース「RIPPLE 2」の常設展示をご覧いただけます。展示は中庭と奥のホールの2か所で行われています。奥のエリアで展示が再生されない場合は、消火栓にある「Resync」ボタンを押してください。--- This world fea"
  },
  {
    "id": "wrld_679d9eee-f764-4849-810c-420a55199a4c",
    "category": "misc",
    "name": "美少女ゲームツクール2020 HD版 ADV-Maker 2020 HD Edition",
    "subtype": "学校",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 13391,
    "visits": 71496,
    "tags": [
      "写真・撮影",
      "ロールプレイ",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_960444f4-13e4-41a1-aff8-b6379e49b6c6/1/256",
    "note": "美少女ゲームの画面そのものになりきって撮影できるワールド。HD版はSDK3でUIをフルリメイクし、セリフ枠や選択肢風の演出で『自分がゲームの登場人物』のような一枚が撮れる。ネタ撮影にも強い。",
    "official": "お前が美少女ゲームになるんだよ！！ SDK3でUIがフルリメイクされ、画面もワイドに対応したHD版！または2020 Ace！ （元ネタ: 美少女ゲーマー集会 Farewell school） ＃美少女ゲームツクール2020"
  },
  {
    "id": "wrld_e7370567-0c86-4ea5-a658-2043034e1fd6",
    "category": "misc",
    "name": "［Tragedy］사랑은 내게 비극이어라",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 14929,
    "visits": 92401,
    "tags": [
      "音楽・ライブ",
      "映画・映像",
      "一人でも",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ca8b84de-e679-4cd6-9e7a-173ad3340428/3/256",
    "note": "韓国のシンガーソングライターGYE0M（겸）とのコラボで生まれた、音楽イメージのシネマティックワールド。별 보기の作品で、アーティストのステージ演出やアルバムアート、歌詞動画にも使う舞台として作られました。霧と苔に覆われた古代の石造建築、抱き合う石像、ピアノ。切ないピアノの旋律とともに一人で浸る鑑賞型です。PC専用。",
    "official": "Love is a tragedy to me. / with Music artist 'GYE0M' collaboration."
  },
  {
    "id": "wrld_83ca36bf-69f5-4c4d-bf0a-1d11a03ed2aa",
    "category": "misc",
    "name": "Subway",
    "subtype": "電車・駅",
    "capacity": 80,
    "recommendedCapacity": 32,
    "favorites": 20207,
    "visits": 231720,
    "tags": [
      "音楽・ライブ",
      "集会・交流",
      "電車・駅",
      "チル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e1c36591-1eb5-4d5d-b17f-3c7c55eb62cb/9/256",
    "note": "リアルな地下鉄の入口を抜けると広がるライブ会場型ワールド。タイルに反射する光と身体に響く重低音で、MV視聴や音楽鑑賞が『パブリック随一』と評される。ホラーではないので安心して滞在できる。PC専用。",
    "official": "Not horror world"
  },
  {
    "id": "wrld_bb19deaa-83ac-40df-bf41-6ade064cb921",
    "category": "game",
    "name": "残り火 / The Ember",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 461,
    "visits": 2521,
    "tags": [
      "ストーリー",
      "ゲーム",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cddd2aa0-3246-485f-9967-cd722bba6369/2/256",
    "note": "『あなたの旅路に、やわらかな風が吹きますように』と添えられた、物語体験型のゲームワールド。日英対応で、静かな旅の物語を一人でじっくり味わえます。",
    "official": "物語体験型ゲームワールド 『残り火』 あなたの旅路に、やわらかな風が吹きますように / An interactive narrative world \"The Ember\". May the wind be soft upon your path."
  },
  {
    "id": "wrld_de53549a-20cf-4c6f-abea-dcda197e1e16",
    "category": "recommend",
    "name": "ORGANISM （v1.5）",
    "subtype": "夜・夜景",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 119461,
    "visits": 915818,
    "tags": [
      "探索",
      "リミナルスペース",
      "SF・近未来",
      "廃墟",
      "VR酔い注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b31880e4-5d30-46a7-b6f6-1b4bf926947b/2/256",
    "note": "DrMorro作、VRChat史に残る謎の巨大探索ワールド。ソ連風の巨大な建物群から未来の廃墟、リミナルスペースへと続く空間を、謎解きも正解もないまま歩きます。VRChat公式も『必見』と紹介し、Xでは『VRChatを案内するなら真っ先に挙げる』という声も。所要1時間超。遠近感を狂わす演出があるのでVR酔いに注意。PC専用。",
    "official": "Attention visitors! there is no puzzles, and no definitive answer. You decide what an \"Organism\" is. 1.5- Boosty link added （check for some bonuses ）,"
  },
  {
    "id": "wrld_f1b460c8-4007-4ae4-8b1e-512e23101c53",
    "category": "chill",
    "name": "待合室-Matiaishitsu-",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 12,
    "favorites": 4435,
    "visits": 46259,
    "tags": [
      "電車・駅",
      "チル",
      "フレンドと",
      "一人でゆっくり",
      "SF・近未来",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d8db9791-dfd0-4b12-8f59-ec3932d35024/2/256",
    "note": "終末の気配が漂う、駅の待合室のワールド。電車くん太郎（Densha_Taro）が2025年に公開した、こぢんまりとした待合室で、作者は誰かを待ったりのんびりしたりするのに使ってほしいと紹介しています。建設中の巨大都市を望むホームと不穏な掲示物に満ちた待合室で、30分ごとに上空を巨大な月が通過します。動画プレイヤーもあり、フレンドとの待ち合わせや静かな滞在にも。PC専用。",
    "official": ""
  },
  {
    "id": "wrld_9936b6ff-e523-4066-9e40-a333320ff5d3",
    "category": "chill",
    "name": "New Generation / 新世代",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 47759,
    "visits": 457965,
    "tags": [
      "チル",
      "廃墟",
      "写真・撮影",
      "ギミック",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_21f602bd-53e6-4166-9005-8792856383d8/43/256",
    "note": "自然に還っていく書斎の遺構と森を巡る、滅びの美のチルワールド。差し込む光と水面のリアルさに感動の声多数。月のオブジェクトで夜モードに切り替えればピアノのある幻想的な夜景に。PC専用。",
    "official": "Anyway, time passes and generations change. ［ Special thanks to 'HANI.' ］"
  },
  {
    "id": "wrld_6c6dae9a-b166-49fd-9410-737fc8c1c3fe",
    "category": "chill",
    "name": "Paradisa",
    "subtype": "海・水中",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 25915,
    "visits": 206501,
    "tags": [
      "チル",
      "海・水中",
      "動物",
      "探索",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_abdd5731-ff8c-4b3a-a204-e243a7b1e4e9/4/256",
    "note": "Fins作『District Roboto』の世界の一角にある、猫たちの楽園の地中海風リゾート。Complex 7の外という設定で、カラフルな街のあちこちで猫たちがのんびり過ごし、サーフボードや凧揚げ、水泳、座礁船の探索も楽しめます。前作より小規模で高密度。PC向け。",
    "official": "A slice of District Roboto, Paradisa is a safe haven for cats located outside of Complex 7. Refreshing waves, surfing board, kites, far from the dark"
  },
  {
    "id": "wrld_a7464c28-ebaf-4463-994e-4e13f6144a0f",
    "category": "chill",
    "name": "消えたあなたと, 止まっている春が-Spring and you",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 51577,
    "visits": 543227,
    "tags": [
      "チル",
      "写真・撮影",
      "ストーリー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_723314cf-4623-4f36-b27b-e4ff0d87f4dd/1/256",
    "note": "草木に覆われた廃屋のアトリエで、止まった春の時間に浸るチルワールド。AREN作で、中央のキャンバスが物語を語り、光と影の美しさから写真や動画の撮影ワールドとしてもよく使われています。夜モードと屋根裏も。PC専用。",
    "official": "消えたあなた と, 止まっている春が-Spring and you"
  },
  {
    "id": "wrld_bc8b1fa6-fa58-41f2-ab85-377e9376dd4c",
    "category": "chill",
    "name": "スコフィドッグラン-Scofi's DogPark-",
    "subtype": "チル",
    "capacity": 60,
    "recommendedCapacity": 36,
    "favorites": 8569,
    "visits": 93212,
    "tags": [
      "チル",
      "動物",
      "フレンドと",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4198a949-4fc9-4cd1-bf15-46d54fbe3851/9/256",
    "note": "スコーンおおかみ『スコフィ』と触れ合えるドッグラン。撫でたり、お菓子をあげたり、一緒に走ったり。ウッドデッキにはミラーやペン、動画プレイヤーもあり、犬好きのフレンドとまったり過ごせます。定員60人。",
    "official": "ここはスコーンおおかみの\"スコフィ\"が暮らすワールドです。 スコフィを撫でたりお菓子をあげたり、一緒に走ったり！ ウッドデッキにミラー,QVPen,動画プレイヤーがあります。 This is a world where Scofi, the scone wolves, live.You can pe"
  },
  {
    "id": "wrld_fc811e6f-b3b9-481e-991e-77f061e0f5d8",
    "category": "chill",
    "name": "./ delusion",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 9511,
    "visits": 72199,
    "tags": [
      "写真・撮影",
      "チル",
      "海・水中",
      "一人でゆっくり",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8f72ad94-be78-4454-8d17-f9443b5ff39d/2/256",
    "note": "『光がきれいすぎる』と撮影勢に評判のフォトワールド。ふわふわ漂うクラゲや青い空間など、どこを切り取っても絵になるスポットだらけで、撮る場所に迷うほど。オリジナルBGMに浸りながら、長時間露光の撮影も楽しめます。",
    "official": "写真撮影にご利用ください。/ Original BGM By Xystran"
  },
  {
    "id": "wrld_9ceebde5-fadc-4279-9e4f-fb2d0db80e0c",
    "category": "chill",
    "name": "まろの港町 -Port town-［Night］",
    "subtype": "チル",
    "capacity": 64,
    "recommendedCapacity": 64,
    "favorites": 19645,
    "visits": 177110,
    "tags": [
      "夏",
      "海・水中",
      "街・都市",
      "チル",
      "点滅注意",
      "夜・夜景",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_560ebbce-f6fa-4013-ae5e-819deed85181/4/256",
    "note": "波の音が穏やかな、夏の夜の港町。1時間ごとに小・中・特大と量が変わる花火が夜空を彩り、写真映えも抜群と評判です。花火の時刻は別ワールド『まろの森（夏祭）』と連動していて、スケジュールボードで確認できます。音声ライブ配信にも対応。画面が強く光る場面があるので点滅注意。PC専用・容量約287MB。",
    "official": "【Season10】夏、海、お盆、花火、音声ライブ配信可（iwaSync, TopazChat）。1時間ごとに花火の量が「小・中・特大」の3段階でランダムに変化します。花火の打ち上げ時刻は別ワールド「まろの森（夏祭）」と連動してますのでスケジュールボードを確認してください。画面が一時的に強く光る場面"
  },
  {
    "id": "wrld_af4e67ae-bb39-48c1-acc9-ab98cd59c5d5",
    "category": "misc",
    "name": "神隠シンドローム -SpiritedAway Syndrome-",
    "subtype": "街・都市",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 14267,
    "visits": 133709,
    "tags": [
      "街・都市",
      "探索",
      "体験型",
      "乗り物",
      "日本",
      "ノスタルジー",
      "初心者向き",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9daac084-f18f-4e9d-bae2-05bc9f7bdab5/3/256",
    "note": "どこか懐かしい日本の街を歩く景観ワールド。Atto_あっとが2022年に公開した作品です。ホバーボードで移動でき、小道の先で『神隠し』に遭うと、少しだけ違う世界へ。怖さよりも不思議さが際立つ体験で、初心者ツアーの撮影地にも使われています。PC専用。",
    "official": "いつしか「神隠し症候群」と呼ばれるようになった。"
  },
  {
    "id": "wrld_64980b48-713e-4cc5-aa2e-31c5cad9ed36",
    "category": "chill",
    "name": "Deep Sea Train",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 14087,
    "visits": 159660,
    "tags": [
      "海・水中",
      "電車・駅",
      "チル",
      "動物",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b1c6ba5c-838f-4815-be9e-a8bb21de287d/1/256",
    "note": "深海を走る列車の車窓から、魚やウミガメ、マンタを眺めるチルワールド。懐かしいピアノBGMは切り替え可能で、深海の静寂に切り替えることも。プライベートで一人静かに過ごす時間が絶賛される。PC専用。",
    "official": "a dreamy train running deep into the sea"
  },
  {
    "id": "wrld_d389407f-b02f-446b-8096-12112be07a7f",
    "category": "game",
    "name": "RS COASTER SECTOR",
    "subtype": "乗り物",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 1404,
    "visits": 13758,
    "tags": [
      "アトラクション",
      "乗り物",
      "フレンドと",
      "VR酔い注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d621272d-779e-448a-a32f-3e6414f9b6d9/15/256",
    "note": "3種のジェットコースターと観覧車を備えた本格遊園地。王道の大型コースター『METEOR』、垂直を越える落下の『ORCA DIVE』、フライング姿勢で飛び回る『DOLPHIN'S LEAP』がそろい、『本物の遊園地に行った気分』との評判です。乗り物好きにはたまらない一方、VR酔いには要注意。",
    "official": "3種類のジェットコースターと観覧車に乗れる遊園地ワールドです！！！ 【1.METEOR】大規模な王道系コースター【2.ORCA DIVE】垂直越えの落下を味わえるコースター【3.DOLPHIN'S LEAP】フライング姿勢で飛び回るコースター"
  },
  {
    "id": "wrld_aac07023-7911-49a2-bb84-bd476856574f",
    "category": "misc",
    "name": "Howl's Moving Castle",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 10,
    "favorites": 5904,
    "visits": 56068,
    "tags": [
      "再現ワールド",
      "写真・撮影",
      "チル",
      "ファンメイド",
      "アニメ・キャラ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bd789535-4852-46ea-91c7-20bdae0c98eb/2/256",
    "note": "映画『ハウルの動く城』にインスパイアされたファンワールド。『Floor 13 - apartment』なども手がけるNIIINYが2025年に公開した作品で、動く城を中心に映画のさまざまな要素を再現しています。リアルタイムで昼と夜が移ろい、時間とともに変わる風景の美しさも見どころ。隠されたジブリのパンを集めるコレクション要素や、カカシのカブの姿も。城の中には入れません。ジブリ好きの撮影・散策に。PC専用。",
    "official": "Inspired by the Ghibli movie - Real-time Day/Night （＋日本語 language）"
  },
  {
    "id": "wrld_6f8cb07a-93c4-436c-b36d-7150c077da08",
    "category": "chill",
    "name": "Epilogue Sunset",
    "subtype": "夜・夜景",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 9678,
    "visits": 82575,
    "tags": [
      "チル",
      "夕暮れ",
      "自然・風景",
      "飛行・フライト",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b9255187-95e9-4c51-8c5e-795a6191650e/3/256",
    "note": "冷たくも心温まる夕日が広がる野原のワールド。Lavryouが2024年に公開した作品で、空を飛んで景色を眺めるも、花畑に寝転んで過ごすも自由。『見つけるべき何か』を匂わせる小さな秘密もあります。アバター撮影の背景にも使われ、静かな夕方を過ごしたいときに。PC専用。",
    "official": "Enjoy a cold but heartwarming sunset, fly through the sky or lay down on the vast field, the choice is yours. Or maybe there's something that you must"
  },
  {
    "id": "wrld_94d1bce9-7b9e-4c58-8277-0fe62b5770c2",
    "category": "misc",
    "name": "Submerge",
    "subtype": "海・水中",
    "capacity": 4,
    "recommendedCapacity": 2,
    "favorites": 48181,
    "visits": 620704,
    "tags": [
      "アトラクション",
      "海・水中",
      "少人数",
      "ホラー・不気味",
      "海洋恐怖症注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_618f8c41-3cbc-447c-8d56-801bb0783e5c/3/256",
    "note": "Fins作、潜水艦で深海へ潜る約20分のライド型アトラクション（Spookality 2019出展作）。静かな海底探索から、やがて暗い深海のドキドキへ。1〜2人用でプライベートインスタンス推奨、デートにも人気です。海洋恐怖症の人は注意。音を聞きながら最後までどうぞ。",
    "official": "Take a ride to the depths below, 1-2 player world, please use a private instance. - Spookality 2019 Updated for 2018 Unity. fixed FBT station"
  },
  {
    "id": "wrld_5d5108b3-c597-40de-b260-2adf02f3be7d",
    "category": "chill",
    "name": "The Nameless Theater",
    "subtype": "演出・パーティクル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 12651,
    "visits": 247828,
    "tags": [
      "映画・映像",
      "チル",
      "睡眠・V睡",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9f03f6ea-988a-4cfa-94d3-e1581c6f9837/9/256",
    "note": "LTCGIで音の響きまで映画館らしい、暗さを大切にしたシアターワールド。大きなスクリーンでフレンドと動画を観るのはもちろん、海を眺められる個室や寝室もあり、一人で静かに観たい夜にも向く。",
    "official": "LTCGI付きの映画館みたいなワールドです。シンプルな寝室とプロジェクターもあります。 イスのミラースイッチを右列に移動しました"
  },
  {
    "id": "wrld_002ea08e-5ab6-474e-89f1-9b2d375a7a88",
    "category": "chill",
    "name": "Mochi Earth",
    "subtype": "チル",
    "capacity": 15,
    "recommendedCapacity": 10,
    "favorites": 7676,
    "visits": 57095,
    "tags": [
      "チル",
      "自然・風景",
      "探索",
      "少人数",
      "大容量注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5ed72ae3-85ed-4b5b-a324-e95a53086bd5/4/256",
    "note": "広大な大自然を少人数で散策する、没入感たっぷりの景観ワールド。AnkoRomochi-JPが2024年に公開した作品で、美しい森やキャンプ場があり、歩いてみるとあちこちに発見があります。鳩のアバターで飛び回るのが楽しいという声も。定員15人。容量約504MBと非常に重いので、読み込みに余裕を持ってどうぞ。PC専用。",
    "official": "［Mochi Earth］ Immerse yourself in the vastness of nature. 広大な自然に囲まれて癒されよう！ちょっと重いかも！"
  },
  {
    "id": "wrld_d73718d3-e846-4960-bf5f-0b0a906d20f4",
    "category": "misc",
    "name": "Kingdom of Titania - 王都チタニア",
    "subtype": "街・都市",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 10807,
    "visits": 119835,
    "tags": [
      "探索",
      "ファンタジー",
      "街・都市",
      "謎解き",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_39d53bb0-9745-40f1-aeb2-d863cf5dfb76/1/256",
    "note": "モノレールで花畑、城下町、そして王都チタニアを巡る、広大なファンタジー観光ワールド。花之祭P（FlowersRite）が2020年に公開した、作者いわく自身最大のワールドです。中庭のMIDIピアノや謎解きもあり、一度の訪問では回りきれない密度で、街並みのどこを切り取っても絵になります。PC専用。",
    "official": "\"The last dream I had for the summer...\" MIDI piano added in courtyard area."
  },
  {
    "id": "wrld_8cd302c3-d0b7-4a16-a39b-6860c24ee0c2",
    "category": "chill",
    "name": "New Grass Station",
    "subtype": "自然・風景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 20715,
    "visits": 176583,
    "tags": [
      "電車・駅",
      "自然・風景",
      "宇宙・空",
      "チル",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9aaa3e26-da4b-4abe-bfd0-29c8feccb3a2/3/256",
    "note": "雲の上にそびえる駅ホームと、新しい生命の芽吹きを描く景観ワールド。機械と植物が同居する空気の澄んだ空間は、VRChat公式のドローン探索特集にも選出。空を飛ぶカメラで巡るのも楽しい。PC専用。",
    "official": "Hello! Welcome to NEWGRASS Station! This platform stands tall above the clouds, accompanied by the budding of new life, depicting a story about the bi"
  },
  {
    "id": "wrld_ddc945c1-aae9-412f-8915-f621651f5852",
    "category": "chill",
    "name": "Way to you / 君へ至る道",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 26598,
    "visits": 177754,
    "tags": [
      "写真・撮影",
      "自然・風景",
      "チル",
      "夜・夜景",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_15784fd2-6e37-4b93-968d-2458dfa9415c/11/256",
    "note": "幻想的な光と花に包まれた並木道と、提灯が灯る坂道の町を歩く景観ワールド。『Severance / 断絶』なども手がける_Harimの作品で、添えられた一言は「君に会いに行く道が、なんて美しいんだろう」。温かいオレンジ色の明かりと木漏れ日がノスタルジックで、まるでおとぎ話に迷い込んだような撮影散歩が楽しめます。PC専用。",
    "official": "The way I take to see you is so beautifully breathtaking. 君に会いに行く道が、なんて美しいんだろう"
  },
  {
    "id": "wrld_0735a97d-9c98-4fe4-bebb-3c70fde59983",
    "category": "misc",
    "name": "イベントキャスト募集場【掲載イベント随時募集中】",
    "subtype": "集会・交流",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 8835,
    "visits": 96464,
    "tags": [
      "集会・交流",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f344ffa8-83d2-4456-b20e-9e0e960e99aa/4/256",
    "note": "VRChatイベントの主催者とキャスト希望者をつなぐ、募集・交流ワールド。イベント紹介やキャスト募集のポスターが並び、合同説明会『イベキャス就活』も開催。『イベントに出てみたい』『キャストを探したい』双方の出会いの場です。PC専用。",
    "official": "イベント主催者とキャスト希望者をつなぐ、 VRChatイベント向けキャスト募集・交流ワールドです。 キャスト募集の相談、出演希望者との交流、 イベキャス就活イベントの開催などを目的としています。 「イベントに参加してみたい」 「キャストを探しているが、まず話してみたい」 そんな双方が、気軽に出会い・"
  },
  {
    "id": "wrld_963512ca-f96c-4e54-8cca-29a800576684",
    "category": "chill",
    "name": "_Unforgotten",
    "subtype": "",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 2849,
    "visits": 15795,
    "tags": [
      "廃墟",
      "学校",
      "夕暮れ",
      "探索",
      "チル",
      "大容量注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b670d454-8f75-4f19-a0ba-173e4021b4fa/2/256",
    "note": "黄昏に染まる廃校舎を歩く、静かな探索ワールド。『物語を想像できて印象深い』と評される余白の多い空間。約490MBとかなり重いのでダウンロードに注意。",
    "official": ""
  },
  {
    "id": "wrld_d8b48301-f025-48c9-9105-a2c84e08faa0",
    "category": "chill",
    "name": "Charlotte's Sunflower Island~ひまわり咲く癒しの港町",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 40,
    "favorites": 13733,
    "visits": 110228,
    "tags": [
      "夏",
      "自然・風景",
      "海・水中",
      "街・都市",
      "チル",
      "ファンタジー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_285b8539-9fe6-4179-bd00-17a3f80eb124/4/256",
    "note": "ひまわりが一年中咲く常夏の港町。空飛ぶクジラが歌い、波の上を電車が走る。青空カフェや灯台を巡りながら、アイスを片手にのんびり散策できる癒し系の景観ワールド。PC専用・容量約190MB。",
    "official": "ひまわりが一年中咲き誇る常夏の港町。涼しい海風に乗って、空飛ぶクジラが歌っているよ。波の上の電車、青空カフェ、灯台。アイスでも食べながら町を歩こう。明日もきっと、幸せな日。Many sunflowers are blooming in the harbor town. Whales are sing"
  },
  {
    "id": "wrld_7f0a9b5a-5a2f-4beb-bd26-2809a7bac8f9",
    "category": "chill",
    "name": "Ancient Cathedral",
    "subtype": "神社仏閣・宗教",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 8301,
    "visits": 68422,
    "tags": [
      "写真・撮影",
      "神社仏閣・宗教",
      "光の演出注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8cd61034-edde-41ef-b42d-9a287f03ef60/2/256",
    "note": "無数のろうそくの炎に照らされた、巨大な古の大聖堂。揺らめく炎のライティングが美しく、『光がめちゃくちゃ綺麗』『未レタッチでも綺麗すぎる』と撮影勢に評判の景観ワールドです。作者いわく少し未完成な部分も。一部に明るく光る演出があるので、光に弱い人は注意。PC向け。",
    "official": "An ancient cathedral with lots of flickering candles. Uses clustered forward shading （CBIRP） from z3y. The world is a bit unfinished but I can't get m"
  },
  {
    "id": "wrld_5acaa539-e70e-4cd3-a04e-3245e00f302d",
    "category": "misc",
    "name": "It's a Small World Showcase VRC",
    "subtype": "アニメ・キャラ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2641,
    "visits": 26613,
    "tags": [
      "再現ワールド",
      "アトラクション",
      "ファンメイド",
      "制作途中",
      "写真・撮影",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_45f95e36-5cab-4321-bf63-f12a3169ad6d/4/256",
    "note": "アナハイムのディズニーランド『イッツ・ア・スモールワールド』を1:1再現したファンメイドワールド。SpiralBrotherが2026年に公開した作品で、現在は外観と時計パレードのみ公開の制作途中ですが、再現度とライトアップは圧巻です。Quest対応。",
    "official": "Welcome world sailors, to the It's a Small World Showcase! A lifelike 1:1 replica of the famous \"it's a small world\" attraction at Disneyland in Anahe"
  },
  {
    "id": "wrld_5ac1eb74-1888-4552-9aab-6f2b6f19ac8e",
    "category": "particle",
    "name": "Half empty",
    "subtype": "演出・パーティクル",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 12155,
    "visits": 64630,
    "tags": [
      "演出・パーティクル",
      "ギミック",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2ba8b44f-a059-4aff-8d56-6707a054752a/2/256",
    "note": "腕を振れば、煙のようにふわりと流れが変わる――プレイヤーの動きに反応するインタラクティブなパーティクルを眺めるワールド。yuri_tsが2026年に公開した作品で、スーパーブルームで表情も一変し、時間を忘れて見入る美しさです。写真の撮影地にも選ばれています。PC専用。",
    "official": "風をつかまえたんだ"
  },
  {
    "id": "wrld_6607aee7-92f8-4f53-9afb-c349f14136be",
    "category": "misc",
    "name": "PSO2 Hub",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4320,
    "visits": 98203,
    "tags": [
      "集会・交流",
      "SF・近未来",
      "ファンメイド",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3630b876-49ef-46b2-b7c5-bbd1188ae73c/4/256",
    "note": "『ファンタシースターオンライン2』の世界観で集まれる、古くからある交流ハブワールド。Flashfire作で、のちにUdon対応に作り直されています。SFなモール風の空間で、PSO2ファン同士の待ち合わせやRPに。Quest対応。",
    "official": "Now powered with UDON"
  },
  {
    "id": "wrld_8bf975c4-2a47-4459-b203-2295950fc7b5",
    "category": "misc",
    "name": "Back to the Future The Ride",
    "subtype": "乗り物",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 15052,
    "visits": 228394,
    "tags": [
      "アトラクション",
      "映画・映像",
      "乗り物",
      "一人でも",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_11b1ae88-426e-40d6-a2fd-18a03dd92cff/2/256",
    "note": "1991年のユニバーサル・スタジオの名物ライドを再現したワールド。作りは簡素だが懐かしさで数分間楽しめる、と海外レビューで紹介される。一人でも複数人でも可。近年の別ワールド『BTTF the Ride』とは別物。PC専用。",
    "official": "Great Scott Relive the classic 1991 Universal Studios ride based on the popular movie, Back to the Future."
  },
  {
    "id": "wrld_218fceaf-e950-4d7f-bbe4-cecb68b8df18",
    "category": "misc",
    "name": "サマーウォーズ【OZ】summer wars",
    "subtype": "音楽・ライブ",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 14270,
    "visits": 103330,
    "tags": [
      "再現ワールド",
      "探索",
      "体験型",
      "飛行・フライト",
      "アニメ・キャラ",
      "ファンメイド",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_dbd49d81-a966-455c-b366-0cf54c1655a4/3/256",
    "note": "映画『サマーウォーズ』の仮想世界OZを、一からすべて再現したワールド。音楽も作者による自作アレンジです。序盤の飛行ギミックで自由に飛び回れ、2026年の大型更新では暗号解読や管理棟への潜入など体験ギミックが大幅に追加され、衝撃的と評判。Quest対応。",
    "official": "サマーウォーズの仮想世界【OZ】を一からすべて再現してみました。音楽も自作アレンジです.本家同様、大量のシステムで構築されてます。ぜひ体験してみてくださいね。"
  },
  {
    "id": "wrld_ecc56c7e-09f7-44ec-be4c-6982a2c604ef",
    "category": "misc",
    "name": "Just Zero Gravity Spaceship",
    "subtype": "宇宙・空",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 59686,
    "visits": 796101,
    "tags": [
      "宇宙・空",
      "体験型",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_77b8a72b-9052-4966-b134-2bd420b4b555/4/256",
    "note": "無重力の宇宙船の中をふわりと漂う体験ワールド。容量わずか約4MBと超軽量で、Questでもサクッと宇宙飛行士気分が味わえます。フレンドと無重力でふざけ合うだけでも楽しい、定番の宇宙船です。",
    "official": "Just Zero Gravity Spaceship"
  },
  {
    "id": "wrld_ff414a30-31e3-44bb-9c8e-3d721e895b0b",
    "category": "recommend",
    "name": "Complex 7",
    "subtype": "SF・近未来",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 96169,
    "visits": 553146,
    "tags": [
      "探索",
      "SF・近未来",
      "やり込み",
      "大容量注意",
      "映画祭・受賞作",
      "初心者向き",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bd96f8ce-be34-4e37-8cd7-9dfc2241b3e6/7/256",
    "note": "Fins作『District Roboto』の続編。7倍の広さになったロボットの街を歩き、NPCとの会話や収集要素、解放できるアバター、隠された秘密から世界の暗い歴史を読み解く超大作です。映画祭ノミネートの圧倒的なクオリティ。容量約668MB、PC専用。",
    "official": "The sequel to District Roboto, Complex 7 features a world 7 times larger, full of NPC, collectible, unlockable avatars, and hidden secrets. Discover t"
  },
  {
    "id": "wrld_29daf324-96f9-4ba3-a9ad-2a4012effeef",
    "category": "exhibition",
    "name": "Solar System",
    "subtype": "宇宙・空",
    "capacity": 80,
    "recommendedCapacity": 30,
    "favorites": 34993,
    "visits": 541877,
    "tags": [
      "宇宙・空",
      "学習・教育",
      "体験型",
      "一人でゆっくり",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e3edaa27-6365-4e55-a9c9-cdac5a1521be/4/256",
    "note": "太陽系の惑星を正確な大きさの比率で並べた、歩ける科学展示ワールド。VRChat公式のおすすめにも選ばれた『Exoplanet Journey』のNiko∗が2023年に公開した作品で、アートと科学の融合をうたっています。惑星の中に入って核やマントルを覗き、月や火星の地表に降り立ち、隕石衝突のアニメーションまで体験できます。Quest・iOS対応。",
    "official": "An interactive VR planetary showcase with dynamic spatial animations ｜ A captivating fusion of art and science ｜ An immersive educational experience ｜"
  },
  {
    "id": "wrld_c3cf550b-b987-45ef-8b96-cc61fa6c2fde",
    "category": "chill",
    "name": "Steps of Time / 時間の階段",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 48226,
    "visits": 325947,
    "tags": [
      "写真・撮影",
      "ノスタルジー",
      "チル",
      "電車・駅",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1cdc5ba7-95c4-4379-a3c4-816d579d34e1/5/256",
    "note": "水没した田舎町と線路、木漏れ日の森を巡る、懐かしさ濃縮の景観ワールド。透き通る水面と半壊の電車は新海誠映画のようだと評判で、時間帯切替で表情も変わる。写真撮影に最適。PC専用。",
    "official": "Time is art and masterpiece is you. （Time change updated）"
  },
  {
    "id": "wrld_f97a1f4c-daf1-4b12-88d4-25c14516b7a7",
    "category": "misc",
    "name": "ヴァリアライド-Varea'Ride-",
    "subtype": "乗り物",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 18253,
    "visits": 111956,
    "tags": [
      "アトラクション",
      "体験型",
      "アニメ・キャラ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_32b9920d-3286-48c1-a99a-2433fbf3a2c9/2/256",
    "note": "悪のVR怪人組織『悪役結社ヴァリアール』の世界を巡るライド型アトラクション。列に並んで装甲ビークルに乗り込み、物語の導入から本編までUSJ級の演出と没入感で楽しめます。ヴァリアールを知らなくても大丈夫。1回の乗車は1〜6人（最大8人）で、観光モードではコースを歩いて怪人を間近に見られます。PC専用。",
    "official": "悪のVR怪人組織『悪役結社ヴァリアール』。その世界に全身で没入できる珠玉の大迫力ライドアトラクションワールド。 ヴァリアールに関する事前知識不要。 装甲ビークルに搭乗し、いざ万魔殿の奥底へ！ 《乗員》1～6名（最大8名） Twitter ＠VRHeel"
  },
  {
    "id": "wrld_93fbc503-bc5b-4bc3-a4f7-7d289dc82740",
    "category": "game",
    "name": "Break the Glass !",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 86531,
    "visits": 1353813,
    "tags": [
      "フレンドと",
      "対戦",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a9918fe8-bb94-448f-b2f7-80a3a80222c3/4/256",
    "note": "バット、瓦投げ、バズーカ――あらゆる方法でガラスを割りまくる爽快ストレス発散ワールド。割れる音が気持ちいいと評判で、ビル破壊や対戦モードも追加。Quest対応・軽量で気軽に遊べます。",
    "official": "A world where you can break the glass （and some other things）using various methods If you wish to support me and get breaking glass prefab follow my b"
  },
  {
    "id": "wrld_df15c8a3-a14e-413f-a9ca-3d922d03f300",
    "category": "misc",
    "name": "ASTEROID FIELD...",
    "subtype": "自然・風景",
    "capacity": 50,
    "recommendedCapacity": 16,
    "favorites": 23015,
    "visits": 118598,
    "tags": [
      "SF・近未来",
      "宇宙・空",
      "探索",
      "ストーリー",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bc70224a-5332-403b-98e7-52ab232e22f8/11/256",
    "note": "2088年、失踪事件の謎を追うSFストーリーアドベンチャー。放棄された宇宙ステーションの各所でメッセージを拾い、最奥のムービー演出へ。作り込まれた船内と映画級の映像美が評判です。PC専用。",
    "official": "In 2088, a mysterious unknown star system is detected by Hexalab Industries. An exploration team sent there disappears without a trace. You take on th"
  },
  {
    "id": "wrld_a0158342-8008-4aed-b12f-7b113fe4703c",
    "category": "misc",
    "name": "Launch Experience of STS-134",
    "subtype": "宇宙・空",
    "capacity": 40,
    "recommendedCapacity": 40,
    "favorites": 954,
    "visits": 7149,
    "tags": [
      "宇宙・空",
      "再現ワールド",
      "体験型",
      "学習・教育",
      "ファンメイド",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a1e78de0-d231-4768-af49-6707170c43dd/1/256",
    "note": "エンデバー号の最後の打ち上げ（STS-134、2011年）を『見て、聞いて、体験する』ファンメイドの再現ワールド。katsuobusi24が2025年に公開した作品で、スペースシャトルの発射を間近で味わえる、宇宙開発ファン向けの体験です。PC専用。",
    "official": "- See, Hear, Experience the Space Shuttle Launch - The Space Shuttle Endeavour made its final launch （STS-134） on May 16, 2011. This is a Fan World, w"
  },
  {
    "id": "wrld_84f03063-6013-43f6-a827-995a512a617e",
    "category": "chill",
    "name": "春空の休息地 -BloomingSky Rest-",
    "subtype": "",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 41034,
    "visits": 385850,
    "tags": [
      "自然・風景",
      "動物",
      "写真・撮影",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_88a93db1-2bd3-4d54-aaa2-b98ea1106ee8/11/256",
    "note": "満開の桜と花畑、川と海と灯台まで広がる春の散策ワールド。『夏空の休息地』など「休息地」シリーズを手がけるレイリア（Leiria_vrc）が2025年に公開した、春の街とお花見の一作です。ジップラインで移動したり高台から桜を見下ろしたり、猫たちに会いながらのんびりお花見散歩ができ、ギミックもたくさん。写真撮影にも。Quest・iOS対応。",
    "official": "はるだー! さくらだー! ねこだー!"
  },
  {
    "id": "wrld_6ae24d40-2fa8-4e6e-88df-c979a5db7653",
    "category": "chill",
    "name": "星屑の原",
    "subtype": "音楽・ライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 44611,
    "visits": 376818,
    "tags": [
      "宇宙・空",
      "夜・夜景",
      "写真・撮影",
      "チル",
      "初心者向き",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_32fb6206-9db2-4f2e-8e5c-db6a7c4276c9/3/256",
    "note": "2つの彗星が流れる満天の星空と草原の景観ワールド。しーの（T_Shiino）作で、赤と青の彗星と流星雨に『君の名は。』を思い出したという声もある、ロマンチックな空は写真映えも抜群です。心を静かに満たしたい夜に。BGMは魔王魂。リメイク版の『星屑の原２』も公開されています。Quest対応・軽量で初心者にもおすすめ。",
    "official": "雨上がりは大気中の塵が少なくなって星空が良く見えるそうですね。 BGM:end of the day／written by:魔王魂 様"
  },
  {
    "id": "wrld_bc12ae9b-ffba-4d35-b7d8-83127649782a",
    "category": "misc",
    "name": "Hedonism",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 6092,
    "visits": 47129,
    "tags": [
      "体験型",
      "ギミック",
      "一人でゆっくり",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fc47a21b-1598-406c-b694-95213d23e0c8/3/256",
    "note": "監視カメラ越しの三人称視点でミニマルな空間を歩く、suzuki_i作の実験的ワールド。2022年に公開され、操作の向きまで監視カメラから見た方向に変わるので、自分の姿を客観視しながら謎を解いていきます。いつもの一人称から引き剥がされる感覚と、隠し部屋で視点が戻る瞬間の快感が忘れられません。デスクトップではF12キーにも秘密が。PC専用。",
    "official": "Pressing F12 in desktop mode breaks the screen."
  },
  {
    "id": "wrld_c330cf97-4ffb-40a9-b872-79a36905134d",
    "category": "chill",
    "name": "Music Stellar Lake",
    "subtype": "チル",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 23368,
    "visits": 265114,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "チル",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_429a3496-4794-4e8a-94e4-f0dd33eb9993/1/256",
    "note": "好きな曲をビデオプレイヤーで流すと、音の波形に反応して光のパーティクルが湖上に広がる音楽体験ワールド。m1chieが2021年に公開した作品で、写真の撮影地としても使われています。スケートで滑ったり空飛ぶクジラに乗ったり、フレンドの推し曲を囲む時間も格別。PC専用。",
    "official": "Have a special time with your favorite music."
  },
  {
    "id": "wrld_d3d063ab-74e0-4863-aeb0-797003f2a370",
    "category": "chill",
    "name": "流星群の終着駅-The last station of Meteor shower",
    "subtype": "電車・駅",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 20657,
    "visits": 221925,
    "tags": [
      "電車・駅",
      "宇宙・空",
      "夜・夜景",
      "チル",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a1a54c11-464c-46a5-b742-66b652c16165/2/256",
    "note": "満天の星空が水面に細かく映り込む、HANI.作の夜の終着駅。流星群の名の通り、神秘的な星景と静かな水辺が広がる景観ワールドで、『非現実的で神秘的な風景に感動した』との訪問記も。撮影にも。",
    "official": "流星群の終着駅-The last station of meteor shower"
  },
  {
    "id": "wrld_c4e61164-c854-42d3-a70c-17d0d68a141b",
    "category": "misc",
    "name": "Space Colony \"Island-4\"",
    "subtype": "自然・風景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 20788,
    "visits": 169669,
    "tags": [
      "SF・近未来",
      "宇宙・空",
      "探索",
      "乗り物",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_12b7fe43-0f05-47e3-ba49-aa38cbbbd17d/5/256",
    "note": "直径8km×長さ32kmの、恒星間航行用の円筒型スペースコロニーを丸ごと再現した超巨大ワールド（S_ASAGIRI制作）。曲面重力の大地を車や電車で巡るスケール感は圧巻で、すべて回るには数時間かかります。SFやガンダム好き必訪。PC向け。",
    "official": "恒星間航行用の密閉型スペースコロニーです。 /Created by S_ASAGIRI//コライダーまわりの不具合を修正"
  },
  {
    "id": "wrld_53125a74-a5c4-4e42-840e-373f390f844f",
    "category": "misc",
    "name": "漏水地区【盃市観光エリア１号】",
    "subtype": "夜・夜景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7560,
    "visits": 60113,
    "tags": [
      "SF・近未来",
      "街・都市",
      "探索",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7210689c-5244-4d1d-baed-e35ec3e49340/4/256",
    "note": "人工雨が降り注ぐ、未来の地下大都市を走り回るワールド。階層が連なる巨大ビル群と立体交差する通路の迫力が魅力で、素早く2回移動すると加速する仕掛けや多段ジャンプで自由に探索できます。アリーナやレストランもあり、椅子はジャンプ長押しで降りられます。PC専用、容量重め。",
    "official": "ふしぎ地中大都市での走行を楽しもう！！ 2度すばやく移動で加速、椅子はジャンプ長押しで降りる アリーナ内にてiwaSync3及びAudioLink使用 使用アセットは通路内の中央 Enjoy running in the mysterious underground metropolis! Move"
  },
  {
    "id": "wrld_7281543e-6888-4676-896a-fdd090552fc4",
    "category": "chill",
    "name": "Exoplanet Journey",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 20,
    "favorites": 225105,
    "visits": 12040400,
    "tags": [
      "宇宙・空",
      "チル",
      "探索",
      "フレンドと",
      "映画祭・受賞作",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ab2899ed-6a95-4d6b-b7d9-f87519bd1159/10/256",
    "note": "宇宙船に乗り、荒々しい地形から海の惑星まで5つの惑星を漂うチルな宇宙旅行。環境・音楽・映像はメニューで切替可能。ヴェネツィア国際映画祭選出作で、Questでも行ける本格派です。",
    "official": "Embark on a unique chillout journey to five extraordinary planets in the universe, from exploring rugged terrains to witnessing the raw power of natur"
  },
  {
    "id": "wrld_6e5a0cf2-9ea4-4ccd-a165-c4b53d2945d1",
    "category": "misc",
    "name": "Inokashira-kōen Station（井の頭公園駅）",
    "subtype": "電車・駅",
    "capacity": 80,
    "recommendedCapacity": 32,
    "favorites": 32992,
    "visits": 277140,
    "tags": [
      "再現ワールド",
      "電車・駅",
      "日本",
      "写真・撮影",
      "ファンメイド",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_501bcfbc-bf2e-4f8a-b6fd-e575a62ff5ac/6/256",
    "note": "京王井の頭線・井の頭公園駅を、ポスターのシワやエレベーターの傷まで再現したファンメイドワールド。線路に降りたりドローンで周辺を眺めたり、現実ではできない駅探索ができます。Quest対応。",
    "official": "Recreation of a railway station located in the city of Mitaka, Tokyo, Japan. 東京都三鷹市井の頭三丁目にある、京王電鉄井の頭線の井の頭公園駅の再現ワールドです。 Port to sdk3 and android versio"
  },
  {
    "id": "wrld_ef79bd19-f154-4bef-9839-369f36a8023a",
    "category": "misc",
    "name": "Deep.",
    "subtype": "チル",
    "capacity": 15,
    "recommendedCapacity": 15,
    "favorites": 10009,
    "visits": 66779,
    "tags": [
      "チル",
      "海・水中",
      "静かな空間",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6ffce690-59ee-45f5-865f-e1f3f3725034/2/256",
    "note": "深くまで、潜ってはいけない――静かな水の底へ降りていくようなチルのワールド。Sakana_Chanが2025年に公開した作品で、暗さと静けさの中、どこまで潜るかは自分次第という緊張感が漂います。PC専用。",
    "official": "Do not dive into deep."
  },
  {
    "id": "wrld_acc233af-f79c-4181-85b6-76493529c153",
    "category": "chill",
    "name": "雲海を越える道-Road over the sea of clouds",
    "subtype": "海・水中",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 3512,
    "visits": 30474,
    "tags": [
      "乗り物",
      "宇宙・空",
      "写真・撮影",
      "チル",
      "自然・風景"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_61c2af9d-79c9-4c95-86ac-7811336f5d5b/2/256",
    "note": "車かジップラインで雲海を越え、日の出を見に行く景観ワールド。初日の出配信のロケ地にも使われた、朝焼けと雲の海の絶景スポット。",
    "official": "雲海を越えて日の出を見に行きましょう。登る方法は車とジップラインの2種類があります。Let's go over the sea of clouds and see the sunrise. There are two ways to climb: car and zipline."
  },
  {
    "id": "wrld_2da2de70-6d8d-4940-b658-642f44ebdacd",
    "category": "misc",
    "name": "oz08c",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 10492,
    "visits": 71015,
    "tags": [
      "探索",
      "SF・近未来",
      "街・都市",
      "夜・夜景",
      "大容量注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c6148d4c-e2fe-42a8-883a-815d130d78f4/1/256",
    "note": "霧と青いネオンに沈む未来都市を歩く、Ozen制作の景観ワールド。『Freeze』などの都市ワールドも手がけるオーゼンOzenが2023年に公開した作品で、ビルの屋上の端から始まり、壊れた鉄骨から落ちた先にネオン広告だらけの街が広がります。広い街並みを彷徨う『都市を探索する』体験が主役で、撮影地にも使われています。容量約464MBと重いので注意。PC専用。",
    "official": "made by Ozen"
  },
  {
    "id": "wrld_d28c9785-f02c-4ced-937a-80e320c10c92",
    "category": "chill",
    "name": "Severance / 断絶",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 27477,
    "visits": 204750,
    "tags": [
      "写真・撮影",
      "日本",
      "自然・風景",
      "チル",
      "一人でゆっくり",
      "神社仏閣・宗教",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5c091cd3-e28f-4999-ad47-7400e8556bae/19/256",
    "note": "桜と古びた鳥居が佇む、朽ちた神域の景観ワールド。_Harim作で、滝の流れる大きな鳥居をくぐった先の景色は、Xでもぜひ VRモードで自分の目で確かめてほしいと勧められています。狐像に触れると昼夜が切り替わり、桜の舞い方まで変わります。高さ方向に展開するダイナミックな構成で、隠しスポット探しも楽しい撮影名所。PC専用。",
    "official": "A life severed from the world, lowering oneself. ［ bgm: \"Song of a Succubus\" https://www.youtube.com/＠NECORDMUSIC ］"
  },
  {
    "id": "wrld_ca2c5edc-b44b-4c68-863a-9a94b04889d5",
    "category": "recommend",
    "name": "District Roboto",
    "subtype": "街・都市",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 49481,
    "visits": 364446,
    "tags": [
      "探索",
      "SF・近未来",
      "やり込み",
      "写真・撮影",
      "動物",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5135c58b-40b1-4658-9e4a-23688058faba/3/256",
    "note": "Finsが2022年に公開した、『Stray』に着想を得たロボットたちの海辺の街を探索するワールド。居酒屋や海沿いの区画など生活感あふれる作り込みが圧巻で、街を歩き回るロボットのNPCも。隠れた子猫ロボット20体を全部集めると、ロボットのアバターがもらえます。隠し要素の攻略ガイドが記事になるほどの人気作で、続編『Complex 7』の原点です。PC専用。",
    "official": "Welcome to District Roboto! home to the unique and curious droids inhabitants, explore this humble district and maybe find your own little spot in thi"
  },
  {
    "id": "wrld_cb43c149-c9cb-4b9a-b228-ac8833cb69ff",
    "category": "recommend",
    "name": "Project Lost Worlds",
    "subtype": "宇宙・空",
    "capacity": 6,
    "recommendedCapacity": 6,
    "favorites": 33657,
    "visits": 280244,
    "tags": [
      "宇宙・空",
      "SF・近未来",
      "乗り物",
      "ストーリー",
      "映画・映像",
      "アトラクション",
      "少人数",
      "大容量注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_863a91d8-9341-4652-8d0c-8e51c81d6615/6/256",
    "note": "ロケット打ち上げから恒星間航行船、恐竜の惑星への降下までを描く、約1時間のSFライド映画。『District Roboto』のFinsが4年がかりで作った『Journey to Erios』編で、2024年のベネチア国際映画祭での先行上映を経て2026年に公開され、Xでは「VRChat史上最高峰」と評する声も。日本語字幕は最初に設定を。定員6人で途中参加はできず、容量も重めなので事前ダウンロード推奨です。PC専用。",
    "official": "PLEASE PRELOAD THE WORLD! Part One: Journey to Erios - Step aboard the ASTORIA and travel across the stars to Erios, one of the distant twin moons far"
  },
  {
    "id": "wrld_6642e15f-97b3-40e6-ba62-ee7dad48ded4",
    "category": "recommend",
    "name": "G-SHOCK THE RIDE",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 5284,
    "visits": 50201,
    "tags": [
      "ゲーム",
      "乗り物",
      "海・水中",
      "宇宙・空",
      "公式コラボ",
      "初心者向き",
      "アトラクション",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_81a1b351-dd5e-43fd-8e38-32448be7d6bd/2/256",
    "note": "G-SHOCKの耐久試験をライドで体験する、カシオ公式のワールド。とある研究所で『未来のG-SHOCK』を研究する開発者・伊部菊雄さんのもと、深海や宇宙、ハンマー試験を巡ります。視点固定ではなく動き回れるので、VR初心者にも勧めやすい一作。Quest対応。",
    "official": "The \"Unbreakable Watch\" G-SHOCK. In a certain laboratory, there is a suspicious man researching the \"G-SHOCK of the future\"-Kikuo Ibe, the developer o"
  },
  {
    "id": "wrld_aa762efb-17b3-4302-8f41-09c4db2489ed",
    "category": "recommend",
    "name": "PROJECT: SUMMER FLARE",
    "subtype": "",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 83168,
    "visits": 620422,
    "tags": [
      "ゲーム",
      "SF・近未来",
      "海・水中",
      "ストーリー",
      "ホラー・不気味",
      "夏",
      "VR酔い注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d82d4e33-15bb-4a97-8250-7cd527edef8e/1/256",
    "note": "ヨツミフレームが2021年に公開した長編ストーリーゲーム。穏やかな夏の水族館や神社から一転、不穏なSFアクションへと展開し、『夏に夏を壊せる』体験がXでも話題になりました。1〜2時間ほど飛んだり跳ねたりして動き回るので、VR酔いしやすい人は注意。精神的負荷の注意表示があり、チェックポイントも少なめです。物語の解説も多く書かれていて、フレンドと一緒に挑むのがおすすめ。",
    "official": "Break the Summer. Break the tower. Complete the Meridian Loop. A story about reality and humanity."
  },
  {
    "id": "wrld_99a1d43d-70f3-490d-b310-4aeac6d6be0a",
    "category": "recommend",
    "name": "迷った時のポータルワールド",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3577,
    "visits": 25427,
    "tags": [
      "集会・交流",
      "ポータル",
      "初心者向き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c7958f1f-c9c8-4e81-a122-c0b3ac260c33/2/256",
    "note": "行き先に困ったときの起点になるポータル集。作者が個人的に良かったワールドを、説明付きで集めています。随時更新。",
    "official": "ワールド探しに迷った時に活用してください 個人的に良かったワールドを全部説明付きで集めてます 随時更新予定"
  },
  {
    "id": "wrld_705a1c74-8123-4558-b639-f63bf47009b7",
    "category": "recommend",
    "name": "MameFriends World",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3120,
    "visits": 22935,
    "tags": [
      "アバター",
      "アート・展示",
      "写真・撮影",
      "集会・交流",
      "アバター試着",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a7b31677-7983-4339-82ca-8f8e716eee08/1/256",
    "note": "共通素体『まめふれんず』の公式ワールド。かめ山（kameyama）が2026年に公開したワールドで、サンプル試着と専用衣装展示に加え、カフェやフォトスポットも。柔らかな曲線の空間が世界観と統一され、紹介にも使いやすい。PC専用。",
    "official": "まめふれんずの公式ワールドです。サンプルアバターや衣装の展示を行っています。 This is the official Mame Friends world.Sample avatars and outfits are on display"
  },
  {
    "id": "wrld_e2288ae2-0028-44c6-8ed8-ec6bc8ade3e4",
    "category": "recommend",
    "name": "Monet Gallery モネ展",
    "subtype": "アート・展示",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 10069,
    "visits": 48460,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "チル",
      "自然・風景",
      "解説あり",
      "絵画",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d6adda16-e8dc-4c1f-9fc7-39ff5efd4a09/2/256",
    "note": "モネ69点すべてに解説付きで、並びから画風の変化まで追えるファン展。睡蓮に囲まれる一室やお気に入りの一枚との撮影も人気。じっくり見る美術館好き向き。Quest対応。",
    "official": "Welcome to \"Monet Gallery\". This is a fan world showcasing 69 works by the painter Claude Monet. _____『Monet Gallery モネ展』へようこそ。画家クロード・モネの作品69点が展示されたファ"
  },
  {
    "id": "wrld_e4b6c5d2-ec46-460a-9dca-045bb78ee5c9",
    "category": "recommend",
    "name": "Gogh Gallery ゴッホ展",
    "subtype": "アート・展示",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 8326,
    "visits": 53591,
    "tags": [
      "アート・展示",
      "夜・夜景",
      "チル",
      "絵画",
      "解説あり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2a0e9957-3a17-4c04-9254-3ce8830a1d7e/1/256",
    "note": "ゴッホ62点に生涯まで踏み込む詳しい解説付き。『星月夜』だけの一室や最期を見届ける演出は現実の美術館にない体験で、フレンドと語りながら回る声が多い。",
    "official": "This is a fan-made world showcasing 62 works by the artist Vincent van Gogh.__画家フィンセント・ファン・ゴッホの作品62点を展示したファンワールドです。すべての作品にキャプションを添えており、どなたでも気軽にお楽しみいただ"
  },
  {
    "id": "wrld_9df53d03-3915-4dc2-922c-26270841a5de",
    "category": "recommend",
    "name": "Exhibition: Seasonery",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6888,
    "visits": 31393,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "自然・風景",
      "イラスト",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2794cc42-a281-450d-86cf-6a7566145306/1/256",
    "note": "20名のイラストレーターによる四季のイラスト展。作品だけでなくメイキングや背景フォトブースもあり、ワールド自体の演出も作品の一部と評される。多言語対応、PC専用。",
    "official": "Multilingual support: JP, CN, EN 「四季」をテーマにしたイラスト展示会です。 20枚のイラストが紡ぐ、季節の様々な一面をぜひ楽しんでください！ An illustration exhibition themed around the \"Four Seasons.\" P"
  },
  {
    "id": "wrld_d141fbfd-9640-4c8e-afb1-027685ea68dd",
    "category": "recommend",
    "name": "What Is Virtual Art - Volume 1",
    "subtype": "アート・展示",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 9009,
    "visits": 43660,
    "tags": [
      "アート・展示",
      "演出・パーティクル",
      "ファンタジー",
      "体験型",
      "映画祭・受賞作"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c5c2293f-53ed-4426-86e0-b3e5c904ee3f/2/256",
    "note": "影絵・舞台美術・飛び出す絵本・コラージュをVRで再解釈する、4人のアーティストのグループ展。制作過程まで見せる展示が評価され、国際映画祭系でも注目された本格派です。所要60〜90分。日英中対応で、英語の音声ナレーションも付きました。PCVR向け。",
    "official": "Welcome to our group exhibition ［What Is Virtual Art - Volume 1］, available in English, Chinese and Japanese. 丨 20260327 English voice narration added"
  },
  {
    "id": "wrld_14514731-4c39-4730-b5df-e4a557d19aeb",
    "category": "recommend",
    "name": "Xで流れてきたワールドのポータルを追加していくワールド",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2107,
    "visits": 13410,
    "tags": [
      "ポータル",
      "集会・交流",
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_384ae231-2e3c-4f63-9f35-3df3b1159eca/2/256",
    "note": "Xで見かけて気になったワールドのポータルを集めた、行き先探しのためのワールドです。『今日はどこに行こう』と迷った時や暇つぶしに、ここから気になる一軒へ飛んでみてください。",
    "official": "自分用にXで見かけて気になったワールドのポータルを置いていってます。行く場所がないとき、暇なときなどにお使いください。 ｜ サムネイル：ChatGPT"
  },
  {
    "id": "wrld_78058ff3-2b50-4245-8da3-bb35bbadcad9",
    "category": "chill",
    "name": "激狭",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 3935,
    "visits": 143475,
    "tags": [
      "チル",
      "ノスタルジー",
      "睡眠・V睡",
      "フレンドと",
      "狭い部屋"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_050bc633-e3c7-461a-93c2-7eb4b66669cf/2/256",
    "note": "名前の通り、ワールドのほぼ全てが見渡せるほど激狭な一人暮らしの部屋。狭いのに動画プレイヤーやペンなど必要なものは全部あり、2〜3人で寄り合うと密度の高い賑やかさに。V睡にも使われる、妙に落ち着く狭さです。『80人入れたら作者までお知らせください』という遊び心も。",
    "official": "あなたの鼓動をもっと近くで感じるために、私は激狭物件に住み続けたいのです 80人入れたら作者までお知らせください RBS Sleepkit/YamaPlayer/ImagePad"
  },
  {
    "id": "wrld_f83e8289-20f4-42f8-8521-4851b3baea1e",
    "category": "recommend",
    "name": "MR Particle Live - 夏の魔法 / ∗Luna",
    "subtype": "音楽・ライブ",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 2194,
    "visits": 18446,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "ファンタジー",
      "夏",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1a1ab4e9-7993-4763-8437-62e87b5246f6/7/256",
    "note": "ひまわり畑と夏の部屋から始まる、MR疑似対応のパーティクルライブ。駅まで歩いて戻ると∗Luna『夏の魔法』の光の演出が始まります。感動したという声もある、夏の思い出のような一作です。",
    "official": "MRを疑似的に対応させたParticle Liveを作ってみました！｜曲：夏の魔法 - ∗Luna （使用許可頂いております）｜クレジット・使用アセットはサイトまで｜https://kzn.mn/mos"
  },
  {
    "id": "wrld_db0a4502-b097-4979-a7e2-16119cc5895a",
    "category": "recommend",
    "name": "水底の街夢の残響",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 18663,
    "visits": 95347,
    "tags": [
      "チル",
      "海・水中",
      "街・都市",
      "写真・撮影",
      "夜・夜景",
      "夕暮れ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f2db9489-ac42-40ae-b8a0-593ee028c2c4/2/256",
    "note": "夕暮れの街でマンホールを押すと、街全体が静かに水に沈むワールド。水没した街並みはロマンティックで癒やされると評判です。水中の景色は撮影にも人気。ただし水没後は重めなのでご注意を。",
    "official": "マンホールを押すと街が水に沈むギミックのあるワールドです。 Click the manhole to flood the street."
  },
  {
    "id": "wrld_c4d0ead5-5e21-4c6f-86bf-35a10a407256",
    "category": "recommend",
    "name": "Portal Fishing Ruins",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 16,
    "favorites": 7007,
    "visits": 72452,
    "tags": [
      "チル",
      "釣り",
      "海・水中",
      "夜・夜景",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2591a445-1a92-465b-92b4-3531413066a1/1/256",
    "note": "世界が沈んでからしばらく経った遺跡で、不思議な魚を釣るワールド。うたこ（utako）が2025年に公開した作品で、廃墟の池に糸を垂らしてワールドへのポータルを釣り上げるように遊べ、大学のVRChatサークルの集まりにも使われました。静かな水辺でのんびり過ごせ、動画プレイヤーやナイトモードのほか、204個ものポータルも。日本語・英語対応で、海外のフレンドとも一緒にどうぞ。Quest・iOS対応。",
    "official": "世界が沈んでからしばらく経った。不思議な魚が釣れるようになった。日本語-English Compatible. VideoPlayer, ImagePad, TextShareBoard, NightMode, 204 Portals."
  },
  {
    "id": "wrld_ecc29d21-e4c1-4a4a-ae48-46de7b7bc6b1",
    "category": "recommend",
    "name": "VR art 'New place'",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 35286,
    "visits": 240432,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "ファンタジー",
      "体験型",
      "絵画"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5c9449fc-02df-4e63-9a5e-7adceb19e7dc/2/256",
    "note": "Jaehyuk LeeのTilt Brush作品が並ぶ、VRChat配信者GreatMoonAroma演出のギャラリー。絵に触れるとその中へ入れる仕掛けが圧巻で、『VRでしかできない』と絶賛される名作です。全方位から眺め、好きな画角で撮る楽しみもあります。",
    "official": "This is gallery of tilt brush's art by artist 'Jaehyuk Lee', and directing by VRC streamer GreatMoonAroma. if you like 3d art. enjoy!"
  },
  {
    "id": "wrld_90a06e9c-e9e5-43a7-84c2-61ca0b4d51a1",
    "category": "recommend",
    "name": "Kohada Stadium",
    "subtype": "宇宙・空",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 10237,
    "visits": 58737,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "集会・交流",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a0dd2118-a01b-417e-a6ea-ea3a7bbc63f2/1/256",
    "note": "大規模音楽フェスのステージに立つ気分を味わえる、巨大スタジアム型ライブ会場。照明システム『KohadaLX』も作るこはだ（kohadachan）による、cluster版もある会場のVRChat版で、2025年に公開されました。DJイベントや歌配信の会場として実際に使われてきた実績があり、自分が主役のイベントや撮影にぴったりです。PC専用。",
    "official": "This is a world where anyone can experience the feeling of being the star of a large-scale music festival!"
  },
  {
    "id": "wrld_df24020d-d60c-404a-b20f-51b37220ee40",
    "category": "recommend",
    "name": "［Game］ Join Wars ［JP.EN.KR.CN］",
    "subtype": "ゲーム",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 11834,
    "visits": 149439,
    "tags": [
      "ゲーム",
      "カードゲーム",
      "デッキ構築",
      "集会・交流",
      "対戦"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_093dc0d6-b77a-4cd2-91b6-7b728247377a/9/256",
    "note": "Join戦争がテーマの1〜4人用デッキ構築カードゲーム。カード自体を改変して最強の1枚を育てるのが醍醐味で、奥の深さは折り紙付き。同時プレイで待ち時間も少なく、じっくり対戦したい人向けです。",
    "official": "【JP】1-4人用カードゲーム。VRChatの「Join戦争」がテーマの競技性が高い「デッキ構築再破壊」ゲーム。【EN】1-4 players card game. \"Deck-building ＆ re-destructing\" competitive card game about \"Joini"
  },
  {
    "id": "wrld_51ecc9d8-3944-4f9a-9723-7da0acd0fd25",
    "category": "recommend",
    "name": "LUMINARIUM",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 24,
    "favorites": 25456,
    "visits": 523338,
    "tags": [
      "チル",
      "海・水中",
      "図書館・本",
      "集会・交流",
      "夜・夜景",
      "初心者向き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cc3066d8-0379-4f5c-8352-dfb591fa3313/1/256",
    "note": "巨大水槽と天井までの本棚に囲まれた、大人の秘密基地のようなチルワールド。場所ごとに変わる音楽、クラゲ漂う夜の海を望むベッドルームも評判です。フレンドとゆっくり語らう夜にどうぞ。",
    "official": "\"Where words fail, music speaks\""
  },
  {
    "id": "wrld_663166d0-5e80-4643-9746-93b9558b89d1",
    "category": "recommend",
    "name": "Animation Live \"Escape\"",
    "subtype": "宇宙・空",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 7491,
    "visits": 77070,
    "tags": [
      "宇宙・空",
      "SF・近未来",
      "演出・パーティクル",
      "映画・映像",
      "音楽・ライブ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2e450045-f4f0-4a11-991b-7c845b4ded3a/4/256",
    "note": "S_ASAGIRI制作のモデルとアニメーションで、人工衛星の世界を映画のように巡るアニメーションライブ。精緻なモデルと演出が海外レビューでも好評です。短めなので、宇宙好きはサクッとどうぞ。",
    "official": "Models and Animation are Created by S_ASAGIRI."
  },
  {
    "id": "wrld_708b2410-d941-4e60-af20-c5d56b4d3c06",
    "category": "recommend",
    "name": "Exhibition: EXFLAT",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 14657,
    "visits": 73832,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "チル",
      "ファンタジー",
      "ストーリー",
      "イラスト",
      "個展"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b6b173a0-759f-4334-a57a-256cfae39bde/1/256",
    "note": "イラストレーターshi-roの連作イラストの世界を、3D空間として歩いて体感できる個展。物語を読みながら絵の世界に入り込む構成が絶賛される、VRならではの展示です。広いので時間に余裕を持ってどうぞ。",
    "official": "イラストレーターshi-roが紡いできた絵の世界をシームレスに体感できる展示ワールド。 様々なコンセプトを持った美しい空間を全身で体験しよう。 ＃EXFLAT"
  },
  {
    "id": "wrld_174340b7-4a99-4c30-96f6-f517c7d2f28d",
    "category": "recommend",
    "name": "星降る海【超かぐや姫！（非公式）】",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6218,
    "visits": 36203,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "海・水中",
      "写真・撮影",
      "夜・夜景",
      "ファンメイド",
      "アニメ・キャラ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ff737d8d-bef6-4e76-b2e5-70abdba35598/1/256",
    "note": "『超かぐや姫！』星降る夜のMV世界に入り込む非公式再現ワールド。光る鳥居と魚が泳ぐ幻想的な海を巡り、ミニライブチケット探しも楽しめる、作品ファンの撮影と周回に。",
    "official": "超かぐや姫！ 星降る夜のOfficialMVの再現ワールド！ ミニライブチケット探してみてください！ 写真沢山とれるようにしておいたので、楽しんでください！ Super Kaguya-hime! Step into the recreated world of the official Hoshif"
  },
  {
    "id": "wrld_1f69dd56-04c8-4e9d-8227-fc8c7c4d4401",
    "category": "recommend",
    "name": "白無垢世界、剣舞四季_SHIRO:FOUR_SEASONS",
    "subtype": "",
    "capacity": 60,
    "recommendedCapacity": 60,
    "favorites": 3767,
    "visits": 19247,
    "tags": [
      "日本",
      "演出・パーティクル",
      "アート・展示",
      "音楽・ライブ",
      "映画祭・受賞作",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bc0181dc-2f3d-4270-b565-e13950c59037/1/256",
    "note": "真っ白な舞台に、桜・紅葉・雪が光の粒で立ち現れる、カソウ舞踏団のVRシアトリカルショー『剣舞四季』。カソウ舞踏団はVRChat発のモーションアクター集団で、この公演はRaindance Immersive 2024のノミネート作です（VR JAPAN TOURS主催）。俳句と四季を舞で巡る、静かな和の舞台体験ができます。PC専用。",
    "official": "カソウ舞踏団 VRシアトリカルショー 剣舞四季 白無垢世界、剣舞四季_SHIRO:FOUR_SEASONS Raindance Immersive 2024 Nomination ［v1.1］"
  },
  {
    "id": "wrld_c3f22b48-6e76-4606-9415-6e6d5f0b1524",
    "category": "recommend",
    "name": "トーク特化型ラジオワールド ゆるざつ",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 8254,
    "visits": 78655,
    "tags": [
      "集会・交流",
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ccadaac1-dde2-45d8-ba7f-68c324866e99/3/256",
    "note": "話がしたいけど何を話せばいいか分からない人のための、ラジオブース付きトーク特化ワールド。中身のない妄想や日常の話など、答えの出ないお題がランダムに出るので、未経験でもMC気分でラジオ公開収録ごっこができます。パブリックでは知らない人の話を聞く楽しさも。ブースのパスコードは『日本で缶コーヒーが発売された年』です。",
    "official": "話がしたいけど何を話したらいいかわからない方にどうでもいい話をしてもらうラジオブース。 中身のない妄想、日常の話、 考えても答えが出ないそんなお題が用意されたワールドです。 ラジオごっこや配信などにお使いください。 ブースのパスコードは日本で缶コーヒーが発売された年の１９６９です。 お題はランダムで"
  },
  {
    "id": "wrld_a5e9ec13-36b1-4e63-ae0c-dab9023401f9",
    "category": "recommend",
    "name": "Avatar Testing Chamber",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 186940,
    "visits": 21802437,
    "tags": [
      "アバター",
      "写真・撮影",
      "演出・パーティクル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_67bfd973-e2fd-4780-84a7-1d999c7cbf19/12/256",
    "note": "改変アバターの最終確認に定番のテスト場。リアルタイムライトで発光や反射、身長、メッシュ表示まで一目でチェックでき、色背景での撮影やMMD確認もまとめてできる。",
    "official": "［Real-time light update］ Test your emissions, reflections, height, polygons/normals, and more! Video player with texture streaming, AudioLink, Light V"
  },
  {
    "id": "wrld_ab2c1526-c1b1-419d-b138-be32591e799f",
    "category": "recommend",
    "name": "VRC PIXELART EXHIBITION 2.0",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 4739,
    "visits": 23248,
    "tags": [
      "アート・展示",
      "写真・撮影",
      "ドット絵・2D",
      "チル",
      "合同展",
      "イラスト",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b685bf16-8ba6-4b72-b99b-46575d07abf9/1/256",
    "note": "114名のピクセルアーティストが集うドット絵の合同展示会。かくりてぃのワールドで2025年に開かれた第2回で、参加作家の新作も並び、Xでは「#vpe2_0」で感想が寄せられています。1点ずつ静かに巡る美術館のような体験で、撮影も可能。GIF作品はアンチエイリアスを切ると見やすいと案内されています。PC専用。",
    "official": "114名のPixelArtist達によるPixelartの合同展示会場です。"
  },
  {
    "id": "wrld_c82a5c14-97a5-4782-a034-d897d2d943a2",
    "category": "recommend",
    "name": "新宿ライブストリート / Shinjuku Live Street",
    "subtype": "街・都市",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 60536,
    "visits": 1374144,
    "tags": [
      "街・都市",
      "音楽・ライブ",
      "日本",
      "集会・交流",
      "写真・撮影",
      "初心者向き",
      "再現ワールド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c6b519ec-141a-4edb-83f3-2fc3dc39c2e1/5/256",
    "note": "再現度の高い新宿駅前で路上ライブができる、『VRChatで最も有名な路上ライブ専用ワールド』を目指す音楽特化ワールド。昼でも人が集まる賑わいがあり、弾き語りを歌う側にも聴く側にも出会いがあります。音楽好きなら気軽に参加を。",
    "official": "［ X -≻ ＃VRSJK ］ VRC新宿ワールドへようこそ！ VRChatで最も有名な路上ライブ専用ワールドを目指しています。 音楽が好きな方は、ぜひお気軽にご参加ください！ VRC신주쿠 월드입니다. VRChat에서 가장 유명한 버스킹 월드를 목표로 하고있습니다. 음악을 좋아하신다면"
  },
  {
    "id": "wrld_b5ed19cb-cf04-481c-833a-9833138ff668",
    "category": "recommend",
    "name": "VR宇宙博物館コスモリア Cosmoria［EN / JP / KR / zh-CN / zh-TW］",
    "subtype": "宇宙・空",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 57691,
    "visits": 277559,
    "tags": [
      "宇宙・空",
      "アート・展示",
      "博物館",
      "写真・撮影",
      "初心者向き",
      "解説あり",
      "学習・教育",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5bfcdfe1-3686-4729-b2a9-53c319384589/1/256",
    "note": "天文仮想研究所（VSP）が2023年に公開した、入場料を払ってもいいと評される本格的なVR宇宙博物館。数百を超える展示があり、実物大のロケットや月面の低重力、ブラックホールなど、触って学べる展示を何度でも巡れます。2026年7月の更新では実物大のISSを歩いて回れるようになり、Xでも話題に。5言語対応、無料、PC専用の大作です。",
    "official": "【COSMORIA: VR Museum of Space】［EN / JP / KR / zh-CN / zh-TW］"
  },
  {
    "id": "wrld_2e999ffe-0565-4169-9445-a76345ea0a3a",
    "category": "recommend",
    "name": "Undestined - yosumi （Music Experience World）",
    "subtype": "音楽・ライブ",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 24711,
    "visits": 116251,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "写真・撮影",
      "VRMV",
      "VTuber"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2c6f1049-55d3-4b72-997b-0c8407df8ad2/1/256",
    "note": "クリエイティブスタジオMIGIRIとバーチャルシンガーyosumiのコラボで生まれた、体験型のミュージックビデオ。歌に合わせて空間そのものが変形し、yosumiが目の前に現れます。立つ場所で音の聞こえ方も変わるので、歩いて見る角度を探すのも楽しみのひとつ。ワールド音量は80%以上がおすすめです。",
    "official": "クリエイティブスタジオMIGIRIとバーチャルシンガーyosumiのコラボレーションによる自主制作の体験型音楽ワールドです。 ワールド音量80％以上を推奨。Recommended: World Volume 80％ or higher"
  },
  {
    "id": "wrld_97366019-bb5d-4c2d-987d-b1d8b2481e32",
    "category": "chill",
    "name": "限界激狭睡眠部屋（Tiny bedroom）",
    "subtype": "",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2770,
    "visits": 79883,
    "tags": [
      "チル",
      "睡眠・V睡",
      "一人でゆっくり",
      "狭い部屋",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e00d0a4d-256f-4554-b85d-8b25dce78236/7/256",
    "note": "高さ方向にこだわった、限界まで狭い睡眠部屋。この狭さが落ち着くとV睡勢に紹介される一作で、ペンや動画プレイヤーなど寝る前の装備も一通り揃っています。Quest対応。",
    "official": "今回は高さ方向にこだわりました。Quest対応"
  },
  {
    "id": "wrld_b4eef105-5db1-4c1f-8800-a6e6de4a20e7",
    "category": "chill",
    "name": "こういう部屋に住みたい",
    "subtype": "チル",
    "capacity": 6,
    "recommendedCapacity": 2,
    "favorites": 9427,
    "visits": 181236,
    "tags": [
      "チル",
      "雪・冬",
      "一人でゆっくり",
      "睡眠・V睡",
      "家・部屋",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6f61b4e7-671d-466b-b24f-33ea377b5a6c/1/256",
    "note": "雪の降る高層マンションの一室で過ごす、狭くて生活感のあるチルワールド。『タイトル通り、こういう部屋に住みたい』と紹介される癒やしの空間で、冬の夜に一人でゆっくりするのにぴったり。Quest対応。",
    "official": "peak male happiness."
  },
  {
    "id": "wrld_13c49cf7-9fcb-46f5-9944-33f442d1955b",
    "category": "game",
    "name": "ロシアンセリフ読み",
    "subtype": "",
    "capacity": 40,
    "recommendedCapacity": 40,
    "favorites": 1367,
    "visits": 8192,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "トークゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d8c68a54-4bdd-40c5-9760-a1107267eb69/2/256",
    "note": "銃をUSEすると確率でセリフが当たる、ロシアンルーレット式のセリフ読みゲーム。収録セリフは180種で、当たった人はマイクを使ってワールド全体にそのセリフを読み上げます。フレンド同士で盛り上がれますが、セリフは何でも許せる人向けです。",
    "official": "銃をUSEすると確率で抽選されます。セリフは何でも許せる方向けです。（現在１８０種のセリフが収録）マイクをUSEするとワールド全体に聞こえます。"
  },
  {
    "id": "wrld_8713b920-64e3-409b-ae07-299256223872",
    "category": "todo",
    "name": "自由に成形できる雪だるまわーるど（Free molding of snowmen）",
    "subtype": "音楽・ライブ",
    "capacity": 20,
    "recommendedCapacity": 6,
    "favorites": 7756,
    "visits": 61014,
    "tags": [
      "雪・冬",
      "クラフト・建築"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_31f33e86-acaf-4ce4-abfd-81f1bb73dda2/5/256",
    "note": "雪だるまを作るワールドです。ある程度自由にメッシュ形状を変化させることができます。",
    "official": "雪だるまを作るワールドです。ある程度自由にメッシュ形状を変化させることができます。＿＿＿以降、使用素材の作者様（敬称略）＿＿＿ ＠Ai ／ ziston ／ ©アタラクシアプロジェクト ／ オリサム ／ なるか ／ みみー ／ ureishi ／ 甘野氷 ／ ESS Liblary ／ スズキサトシ"
  },
  {
    "id": "wrld_cb8a80b2-de72-49d2-ac5d-d750f948877e",
    "category": "todo",
    "name": "Sanrio VIRTUAL PURO MetaMog - Metamogphose Lab.",
    "subtype": "",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 26624,
    "visits": 378450,
    "tags": [
      "公式コラボ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_629607b8-b960-41af-a424-df7346ef21eb/4/256",
    "note": "バーチャル・サンリオピューロランドの『めたモグ（Metamogphose Lab.）』のワールド。",
    "official": "『めたモグ』Sanrio VIRTUAL PURO MetaMog - Metamogphose Lab."
  },
  {
    "id": "wrld_577c4af3-1de7-40f4-88ad-7bf10ab3a1ee",
    "category": "todo",
    "name": "TITANIC: Beyond Reality - Sinking Experience",
    "subtype": "夜・夜景",
    "capacity": 30,
    "recommendedCapacity": 25,
    "favorites": 16324,
    "visits": 302458,
    "tags": [
      "夜・夜景",
      "再現ワールド",
      "海・水中"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_211768ab-f084-40b7-a2cd-f802064948d2/9/256",
    "note": "RMSタイタニック号へようこそ！沈没を追体験できるワールド。",
    "official": "v1.4 ｜ Welcome aboard the RMS Titanic! Take a journey back in time and experience the glory of the legendary ship herself, and the fateful night that"
  },
  {
    "id": "wrld_3c3ccab6-8a26-44ef-979f-af8037ebd7a2",
    "category": "game",
    "name": "VERTEX: VRCBattleRoyale",
    "subtype": "ゲーム",
    "capacity": 72,
    "recommendedCapacity": 36,
    "favorites": 29578,
    "visits": 256485,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "シューター・FPS",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cd10bc3e-d174-4498-ae87-b756520c5612/2/256",
    "note": "最大18人で戦うVRバトロワFPS。メディアアーティストの坪倉輝明さんが約2年かけて作り、2022年に公開した作品で、3人1組・最大6チームに分かれ、9種類の武器を拾って撃ち合います。ルールはその場で決めるカジュアルさが売りで、アバターの飛行や分身も笑って許せばOKという緩さがギズモードでも紹介されました。観戦ドローンやビューイングもあり、見るだけ参加も楽しい。PC専用。",
    "official": "3人1チーム、最大18人で戦うVRバトロワFPSゲーム！ / VR Battle Royale FPS Game! Teams of 3 players battle in up to 6 teams of 18 players. --- 2025-04-14 v1.2.2 ＃VERTEXVRC"
  },
  {
    "id": "wrld_0815c129-feb3-46de-8363-618e36a5cd61",
    "category": "game",
    "name": "友谊鉴定 / Friendship Test / フレンド鑑定",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7137,
    "visits": 90277,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e3e9a1ba-effc-4370-ba8e-6b929ecb14d2/4/256",
    "note": "選ばれた1人の本心を、残り全員が『はい／いいえ』で当て続けるフレンド鑑定ゲーム。全問一致しないと脱落する厳しさが笑いを生み、長年の友人の意外な一面も見えてきます。2択で誰でも参加しやすい作り。",
    "official": "【中文】随机1人成为答题者，其余玩家猜测其真实想法。猜错直接淘汰！幸存者即为最佳默契好友！ 【EN】One random player becomes the answerer. The others guess their true choice. Guess wrong and you're e"
  },
  {
    "id": "wrld_e3918251-a780-4332-8c4f-cb6fc94c2b8b",
    "category": "todo",
    "name": "InsiderRussianRoulette",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2512,
    "visits": 26069,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c9083a4c-0673-413a-abe2-8c32f19544b3/2/256",
    "note": "2人で弾を仕込み合い、交互に互いのリボルバーを撃ち合う心理戦。 限られた情報を頼りに、弾の中身を推測して生き残れ。",
    "official": "2人で弾を仕込み合い、交互に互いのリボルバーを撃ち合う心理戦。 限られた情報を頼りに、弾の中身を推測して生き残れ。 A psychological duel: two players load the guns, then fire them at each other. Rely on limit"
  },
  {
    "id": "wrld_0b49ddf5-6d2a-485c-8b24-a4ddf68941a5",
    "category": "todo",
    "name": "The Mast - 日本語版",
    "subtype": "宇宙・空",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1706,
    "visits": 8895,
    "tags": [
      "宇宙・空",
      "ホラー・不気味",
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ad026e2a-bf3f-4368-ad62-3b5b53d83cc2/3/256",
    "note": "awesome-llama氏のゲームをもとにした『ザ・マスト』の日本語版。汚染されたオレンジ色の空の下に取り残された、孤独な研究基地を探索します。",
    "official": "『ザ・マスト』へようこそ （awesome-llama氏によるオリジナルゲームを基に制作） 汚染されたオレンジ色の空の下に取り残された、孤独な研究基地を探索しましょう。忘れ去られた道を辿り、廃墟となった施設をさまよい、放棄された研究施設の痕跡を見つけ出してください。新たなサウンドトラックと共に、この"
  },
  {
    "id": "wrld_25c9ff33-e6c6-4b0b-a868-fc7be4c29086",
    "category": "todo",
    "name": "LIMITLESS PT.1: ENTER THE VOID",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 192,
    "visits": 1489,
    "tags": [
      "アート・展示",
      "探索"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0f6b447b-1c94-41e0-970a-5a5bd12ba18b/2/256",
    "note": "Open Brushで描かれた、サイケデリックな探索ワールド。",
    "official": "A psychedelic exploration world created with Open Brush."
  },
  {
    "id": "wrld_5c54d2c6-d39b-45b4-87e7-cb954645eb15",
    "category": "todo",
    "name": "TANKI 格闘配信（FIGHT LIVE）",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1266,
    "visits": 33790,
    "tags": [
      "ボードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bb76abb0-950b-4c2d-8287-60f9922ebd2c/6/256",
    "note": "演出を強化したカスタム TANKI を用意しました。 自動で切り替わる観戦カメラもあります。",
    "official": "演出を強化したカスタム TANKI を用意しました。 自動で切り替わる観戦カメラもあります。 麻雀部屋と音声を遮断しているのでみんなで楽しく観戦ができます。 【配信にも対応】TANKIファイトライブ"
  },
  {
    "id": "wrld_ced67f49-ac16-453b-a013-51ca68872529",
    "category": "todo",
    "name": "VRマダミス ぼくらのペリン事件",
    "subtype": "ゲーム",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 790,
    "visits": 1977,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ab9402e3-fd2c-4557-ad3f-387be6e3864b/4/256",
    "note": "4人プレイ専用VRマダミス風ゲームワールドです． シェアハウスで生活していた4人の男は，一夜にして全員が被害者となり，全員が被疑者となった．昨日の夜に起こった事とは？",
    "official": "4人プレイ専用VRマダミス風ゲームワールドです． シェアハウスで生活していた4人の男は，一夜にして全員が被害者となり，全員が被疑者となった．昨日の夜に起こった事とは？ バグ報告や質問などお問い合わせは X（Twitter）: ＠Komota_category にお願いします． ご感想は ＃VRC_M"
  },
  {
    "id": "wrld_8dd51a2e-f2e3-4cdd-9be1-b625d545e8e0",
    "category": "todo",
    "name": "ひみつ道具ドボンクイズ",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1158,
    "visits": 10336,
    "tags": [
      "ゲーム",
      "クイズ",
      "パーティー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0c72bff0-82e0-4273-b026-ae7c777d422d/3/256",
    "note": "ドボンを引かないように本物のひみつ道具を選ぼう！作問機能もあります！是非オリジナルのひみつ道具を考えてフレンドと遊んでみてください！",
    "official": "ドボンを引かないように本物のひみつ道具を選ぼう！作問機能もあります！是非オリジナルのひみつ道具を考えてフレンドと遊んでみてください！"
  },
  {
    "id": "wrld_fa594071-2cbd-4128-950f-08085f1284c8",
    "category": "todo",
    "name": "AvatarTowerBattle",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 5823,
    "visits": 52582,
    "tags": [
      "ゲーム",
      "アバター"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e6210db7-8589-4893-9fda-071d6bb25f24/2/256",
    "note": "その場で自分のアバターの画像を積み上げていくゲームワールド。",
    "official": "AvatarTowerBattle is a gameworld where you build up pictures of your avatar on the spot. アバタータワーバトル !! - AvatarTowarBattle , AvaterTowerBattle , Avate"
  },
  {
    "id": "wrld_b18dd044-b010-4ef0-b0ac-cf624655a034",
    "category": "todo",
    "name": "Vket 2021 Vket Academy - Night",
    "subtype": "夜・夜景",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 488,
    "visits": 17690,
    "tags": [
      "夜・夜景",
      "宇宙・空",
      "アート・展示"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_658eea47-595e-4f10-b19e-7dc00101e86d/2/256",
    "note": "バーチャル空間最大のマーケット祭「バーチャルマーケット2021」の一般出展会場（12月開催）。",
    "official": "Join the world's largest market festival in the virtual space, held from Dec.4 through 19! Vket2021 Vket Academy - Night is an exhibition venue of Vke"
  },
  {
    "id": "wrld_2a1f8a35-fd52-4998-8a3f-ed4c4169fcf8",
    "category": "todo",
    "name": "Size Shibuya",
    "subtype": "チル",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 8736,
    "visits": 98279,
    "tags": [
      "チル",
      "街・都市"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6927ac7d-b2af-4a18-9057-3c04500fd38b/7/256",
    "note": "渋谷を再現したワールド。100mの巨人にも、1cmの小人にもなれる。",
    "official": "Welcome to the recreation of shibuya, in this place you can grow 100 meters or be a tiny person of 10cm, you can relax with your friends, and explore"
  },
  {
    "id": "wrld_b324cfad-7c01-47af-a33c-93c192be9df8",
    "category": "todo",
    "name": "投票ダービー - Voting Derby",
    "subtype": "ゲーム",
    "capacity": 50,
    "recommendedCapacity": 20,
    "favorites": 9934,
    "visits": 81742,
    "tags": [
      "ゲーム",
      "パーティー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_68742cf7-432f-45e9-a0e6-4b73acd48dc9/6/256",
    "note": "ほかの人の投票を推測して、パワーを発揮できそうなお馬さんに投票するパーティーゲーム。推奨5〜16人、所要8〜13分。VR・デスクトップ両対応。",
    "official": "他の人の投票を推測してパワーを発揮できそうなお馬さんに投票しよう！ ｜ 推奨人数：5～16人 ｜ 所要時間：8～13分 ｜ VR / デスクトップ 両対応"
  },
  {
    "id": "wrld_20637287-fbae-4407-8ada-3655e223f929",
    "category": "todo",
    "name": "はいぱーあびす -HyperAbyss-",
    "subtype": "乗り物",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1317,
    "visits": 14021,
    "tags": [
      "乗り物",
      "ゲーム",
      "飛行・フライト"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_91cc763a-ece8-4357-9ea1-6d191d6b5da5/7/256",
    "note": "戦闘機のタイムアタックワールドです。一度クリアすると同じ軌跡で飛ぶゴーストが表示されるようになったり、いろいろな驚きギミックが搭載されたタイムアタックが楽しめます！",
    "official": "戦闘機のタイムアタックワールドです。一度クリアすると同じ軌跡で飛ぶゴーストが表示されるようになったり、いろいろな驚きギミックが搭載されたタイムアタックが楽しめます！ This is a time attack world of fighter planes. Once cleared, you wi"
  },
  {
    "id": "wrld_6bfb2407-1f1d-411b-bb6b-ccd13288774a",
    "category": "recommend",
    "name": "NUCLEUS",
    "subtype": "ホラー・不気味",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 16000,
    "visits": 111146,
    "tags": [
      "ホラー・不気味",
      "リミナルスペース",
      "探索",
      "写真・撮影",
      "海・水中",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_69f36cdb-4a49-46af-92ad-9a754284ec6f/1/256",
    "note": "明るいプールではなく、薄暗く巨大な廃墟的ウォーターパークを探索するリミナル空間。MyroPがVRChatのAquaJamに合わせて2024年に公開した作品で、約1600m×600mの広さに巨大スライダーと3つの隠しエリアがあり、浮き輪で滑って部屋から部屋へ巡れます。静かな音と暗い水面が不気味さを高め、隠し部屋を探す撮影探索が楽しい。一通り巡るのに30分〜1時間半ほど。2026年には続編『NUCLEUS II』も公開されました。PC専用。",
    "official": "Explore a huge brutalist waterpark"
  },
  {
    "id": "wrld_9a835b03-886e-4ab6-8942-c2276a2935e8",
    "category": "todo",
    "name": "KASSEN",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 10969,
    "visits": 178982,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f4d84a07-2840-4fd8-a1b6-14fda33868cc/3/256",
    "note": "仲間と協力して敵を倒し、城を攻略しよう！ 映画「超かぐや姫！」に登場するゲームの再現ワールドです。",
    "official": "仲間と協力して敵を倒し、城を攻略しよう！ 映画「超かぐや姫！」に登場するゲームの再現ワールドです。 本ワールドは、超かぐや姫！のコミュニティガイドライン発表以前に制作されています。 A recreated game of KASSEN from the movie \"Cosmic Princess"
  },
  {
    "id": "wrld_1d8dd749-8b52-4dfa-b4b1-071e1b93c342",
    "category": "todo",
    "name": "VR Saber ｜ Open Beta ｜ Beat Saber",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 12,
    "favorites": 23584,
    "visits": 321897,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_df778941-9073-4df8-be71-8118704ec145/5/256",
    "note": "VRChat内で本格的なBeat Saberが遊べるワールド。BeatSaver連携・オンラインリーダーボード対応。",
    "official": "Accurate Beat Saber in VRChat that features full BeatSaver integration, online Leaderboard and optimized gameplay. VRChatでBeat Saberを忠実に再現。BeatSaverとの"
  },
  {
    "id": "wrld_98422193-2ddd-4af4-bd97-ab5609a46785",
    "category": "todo",
    "name": "BOMBERio",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 59216,
    "visits": 1203255,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5e5ca2ba-9b81-4c1a-a255-ee5e9ced9d5b/1/256",
    "note": "マルチプレイPvPゲーム。爆弾を撃ち合って相手を倒そう！",
    "official": "- Multiplayer PvP game - Shoot bombs at each other to defeat your opponents!"
  },
  {
    "id": "wrld_53020d30-2fc0-4bca-bcb8-d65cf1a62672",
    "category": "todo",
    "name": "カラオケ行こうよ Let's go to KARAOKE",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2873,
    "visits": 37527,
    "tags": [
      "音楽・ライブ",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4a5c2f6b-b304-4b49-a74a-bebcd6747d8e/16/256",
    "note": "3000曲ほどご用意しております。YamaPlayer、カラオケリンク（自動同期システム）、URLブックマーカー導入しました。",
    "official": "3000曲ほどご用意しております。YamaPlayer、カラオケリンク（自動同期システム）、URLブックマーカー導入しました。QV Pen。 ２Fが外の音は聞こえて向こうには聞こえない防音室になっており談話スペースになってます。 フレンドプロデュースのカラオケするワールドです。"
  },
  {
    "id": "wrld_e45ca27d-0e64-4d6a-8664-41213dc9c7e5",
    "category": "todo",
    "name": "CatsUdon TRPG Home",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 32,
    "favorites": 5908,
    "visits": 103909,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_11c43e21-2a5b-4a6c-9c15-61daea819a64/3/256",
    "note": "Ver 3.6.2. 汎用VRTRPGツール「CatsUdon」はTRPGを遊ぶためのダイスロール、キャラシー作成、駒作成などの色んな機能があります。",
    "official": "Ver 3.6.2. 汎用VRTRPGツール「CatsUdon」はTRPGを遊ぶためのダイスロール、キャラシー作成、駒作成などの色んな機能があります。「CatsUdon」のワールドクリエイト機能を作って好きなシーンを作成しましょ。 CatsUdon, a general-purpose VRTRPG"
  },
  {
    "id": "wrld_21bb75ba-60b6-4640-b4ca-0473f093c4db",
    "category": "todo",
    "name": "New Udon Bomb",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 29819,
    "visits": 333577,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_56468b3f-93d4-46ff-802a-f58d94a17009/1/256",
    "note": "Udonで作られた爆弾ゲームのワールド。説明はなく、行ってみてのお楽しみです。",
    "official": ""
  },
  {
    "id": "wrld_745dc432-6fd2-4200-8dc2-51885abfaa44",
    "category": "todo",
    "name": "現実",
    "subtype": "",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 3531,
    "visits": 24464,
    "tags": [
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_23f40b3a-2af4-445e-8e0a-40f4c832bd20/4/256",
    "note": "おかえり現実。それじゃあ落ちるわ、とポータルを出して消えるためだけに作ったワールドです。",
    "official": "おかえり現実。それじゃあ落ちるわ、とポータルを出して消えるためだけに作ったワールドです。ある意味ホラワ。プレイリストに現実実況チャンネルが入ってます。現実はぶん投げられます。みんなで現実の投げ方を競おう。最初にインスタンスへ入った際に大きな現実がどこかに飛んで行ってしまいますが、リセットボタンを押す"
  },
  {
    "id": "wrld_6db8f9b5-c7b7-417a-88c0-5da4b26553ad",
    "category": "todo",
    "name": "三つ巴の写真が撮れるワールド",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1371,
    "visits": 7518,
    "tags": [
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_119decae-c8d0-41e5-afd0-4a459d1f7cb7/5/256",
    "note": "三つ巴の写真が撮れるワールドです。このワールドは某作品とは一切関係ありません。",
    "official": "三つ巴の写真が撮れるワールドです。このワールドは某作品とは一切関係ありません。 個人で制作したワールドです。領域展開の吹き出し以外にも様々な漫画やネットミームの吹き出しを用意しているので自由に差し替えることができます。撮影は1人でも可能です。後からワールドに入ってきた人には撮影したものは同期されませ"
  },
  {
    "id": "wrld_097ec90d-f04c-46f3-81f2-fc4bf68bc2bb",
    "category": "game",
    "name": "Better UNO",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 243546,
    "visits": 8490140,
    "tags": [
      "ゲーム",
      "チル",
      "フレンドと",
      "初心者向き",
      "カードゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_50eda44e-1113-43a8-a5dc-e6ede6c2a66a/13/256",
    "note": "最大8人で遊べる自動化UNO。ルール説明が丁寧で初心者も入りやすく、PC・Quest・デスクトップ混在でも遊べます。くつろぎながらフレンドに+4を叩き込む、定番のカードゲームです。",
    "official": "Automatic UNO! Card game. Sit back, relax, and give your friends ＋4s! Supports Desktop and up to 8 players."
  },
  {
    "id": "wrld_e96ea6fc-f4e6-4f8b-9c24-dfacc9df6dbe",
    "category": "todo",
    "name": "JUST発進",
    "subtype": "宇宙・空",
    "capacity": 40,
    "recommendedCapacity": 10,
    "favorites": 4824,
    "visits": 26063,
    "tags": [
      "宇宙・空"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_75459aeb-0290-4cf9-89dd-63727debe630/3/256",
    "note": "主人公のように、あるいはモブ兵士のようにカタパルトから発進しましょう。",
    "official": "主人公のように、あるいはモブ兵士のようにカタパルトから発進しましょう。複数人で運用する場合は窓際の「管制室制御」ボタンを押してください。ハッシュタグ : ＃JUST発進 / Launch from the catapult like the protagonist or a generic sold"
  },
  {
    "id": "wrld_e2ab585d-cdaf-49c0-9c66-2512b8fba8a7",
    "category": "todo",
    "name": "議論の余地！！",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 487,
    "visits": 2792,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_05c11d0a-5956-4365-a4e2-0a3bdf14a1d7/1/256",
    "note": "二人以上で遊ぶゲームです。2枚のカードで作り上げたお題について議論して答えを見つけましょう！",
    "official": "二人以上で遊ぶゲームです。2枚のカードで作り上げたお題について議論して答えを見つけましょう！！"
  },
  {
    "id": "wrld_b09023cb-92b2-4180-8fcf-2948505f4a9e",
    "category": "todo",
    "name": "こまどラブレター",
    "subtype": "ゲーム",
    "capacity": 12,
    "recommendedCapacity": 4,
    "favorites": 694,
    "visits": 3569,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4daf730b-48d3-4abd-9258-c2f68bc75e71/3/256",
    "note": "カードゲームの『ラブレター』が遊べるワールドです。 ルール説明付きで、サクッと遊べる心理戦ゲームです。",
    "official": "カードゲームの『ラブレター』が遊べるワールドです。 ルール説明付きで、サクッと遊べる心理戦ゲームです。 プレイ報告や要望はぜひ\"＃こまどラブレター\"まで！"
  },
  {
    "id": "wrld_4adb757a-9776-44d3-a129-cd871c3ee71d",
    "category": "todo",
    "name": "Last One Running",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 8414,
    "visits": 62697,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e9007a3d-e614-4adb-8739-47c310508b9b/10/256",
    "note": "能力を持った戦車を操作して戦うターン制のPvPゲームワールドです。プレイ人数2~8、想定プレイ時間15分～25分。",
    "official": "能力を持った戦車を操作して戦うターン制のPvPゲームワールドです。プレイ人数2~8、想定プレイ時間15分～25分。＃VRC_LOR 最終更新:素材を拾えない不具合修正"
  },
  {
    "id": "wrld_5aa04247-47b3-4001-9049-2230e6fe421d",
    "category": "todo",
    "name": "DORO-K! （Thieves ＆ Police Officers）",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 745,
    "visits": 12071,
    "tags": [
      "ゲーム",
      "対戦",
      "パーティー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6a8a7be1-52d6-4b08-8275-ddd909404062/3/256",
    "note": "光学迷彩を使って、ドロケー（泥棒と警察の鬼ごっこ）を楽しむワールド。",
    "official": "光学迷彩でドロケーを楽しむワールドです！ Enjoy DORO-K （Thieves ＆ Police Officers） with \"magic cloak\"."
  },
  {
    "id": "wrld_408009d9-b175-47a3-a4ae-b21bb1998e2f",
    "category": "todo",
    "name": "かける！こわせる！QvPenのおうち",
    "subtype": "アート・展示",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 949,
    "visits": 9774,
    "tags": [
      "アート・展示"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e55de872-a19e-41d0-a139-d0332871e671/2/256",
    "note": "全部がQvPenでできたおうちです！もいだり、書いたり、遊んだりできます！",
    "official": "全部がQvPenでできたおうちです！もいだり、書いたり、遊んだりできます！［11.22 コライダー削除ボタンを追加しました］［11.23 いくつかのオブジェクトと世界一大きなペンと消しゴムを追加しました］［11.24 V睡したい方向けの要素を追加しました！］"
  },
  {
    "id": "wrld_6c72d197-6bb2-4e31-af6f-8d73683bfc80",
    "category": "todo",
    "name": "童祀廻堂-ライド型お化け屋敷-",
    "subtype": "ホラー・不気味",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 8407,
    "visits": 48832,
    "tags": [
      "ホラー・不気味",
      "乗り物",
      "日本"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9f270baa-2de6-4ad1-b1c4-7ba7ae0f2160/2/256",
    "note": "ライド型お化け屋敷を作ってみました。 遊園地にある和風のお化け屋敷がコンセプトです。",
    "official": "ライド型お化け屋敷を作ってみました。 遊園地にある和風のお化け屋敷がコンセプトです。 初めてのワールド作成ですので、自己責任でおこしください。 1周 6分ぐらい 2人乗りなので、並んでお待ち下さい。 I've created a ride-style haunted house. The conce"
  },
  {
    "id": "wrld_0bbac6e6-5c80-40c2-80dd-273e960ea814",
    "category": "todo",
    "name": "MELA - Memena's Lord Arena",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 23898,
    "visits": 1281709,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bd95fbaf-d263-4a63-b31a-cc4221e0d448/3/256",
    "note": "FF14やTONを参考にして作られたゲームワールド。",
    "official": "This is a game world that refers like FF14 and TON. Combine your skills, hone your techniques, defeat the BOSS and get rewards. Find your comrades, fo"
  },
  {
    "id": "wrld_e9fd4900-fe88-47d6-ba5b-777d284a11db",
    "category": "todo",
    "name": "カプセルBATTLE",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4854,
    "visits": 36614,
    "tags": [
      "ゲーム",
      "乗り物",
      "対戦"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_387222be-5994-48db-b11d-6b7a0c40791e/4/256",
    "note": "カプセルに乗り込んで、相手を吹き飛ばそう！",
    "official": "Get into the Capsule and blow away your opponents! A party game for 2 to 8 people!【Play with: Touch, Game Pad, Keyboard, VR Controller】 カプセルに乗り込んで相手を吹"
  },
  {
    "id": "wrld_e663070c-8ff9-454f-9ba6-3aead2dbcb36",
    "category": "game",
    "name": "VRメルヘン村",
    "subtype": "",
    "capacity": 80,
    "recommendedCapacity": 70,
    "favorites": 9973,
    "visits": 75980,
    "tags": [
      "再現ワールド",
      "アトラクション",
      "日本",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6d3a9a46-ca24-4343-81a4-eb41e1b4b95e/1/256",
    "note": "佐賀・武雄の実在テーマパークを3Dスキャンも交えて再現したワールド。元そば店主のVRクリエイター、VR蕎麦屋タナベ（tanabe）が2025年に公開した作品で、動く乗り物6種と、乗り物を吹っ飛ばす『蕎麦屋スイッチ』のカオスが名物です。夜に切り替えると一転ホラー気分に。Quest対応。",
    "official": "VRメルヘン村"
  },
  {
    "id": "wrld_d8353d19-51e1-45d6-b742-f41b5985618d",
    "category": "todo",
    "name": "謎解き脱出ノベルADV『メタゴンクエスト』/MetagonQuest",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1217,
    "visits": 4266,
    "tags": [
      "ゲーム",
      "謎解き",
      "ストーリー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1c533edb-e733-40ab-bd53-b02b6a829e94/2/256",
    "note": "記憶喪失と密室から始まり、謎のアプリの真相を追う脱出ゲーム×ノベルADV。日本語話者向けの謎解きワールドで、想定プレイ時間は2時間〜。",
    "official": "記憶喪失と密室。謎のアプリの真相を求めて冒険する、脱出ゲーム×ノベルADV/日本語話者向け謎解きワールド/動作はほぼグローバル/想定プレイ時間2時間～"
  },
  {
    "id": "wrld_acf351bf-e736-4893-aae0-a190439260dc",
    "category": "todo",
    "name": "謎解きワールド 『オモテウラ』",
    "subtype": "ゲーム",
    "capacity": 30,
    "recommendedCapacity": 20,
    "favorites": 6991,
    "visits": 49763,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f1110ef2-26c5-4ab4-9a66-b1aa9faff86a/1/256",
    "note": "進み方が２つある謎解きワールド。 君は謎を解くか、異変を見つけるか。",
    "official": "進み方が２つある謎解きワールド。 君は謎を解くか、異変を見つけるか。"
  },
  {
    "id": "wrld_0bf82d2d-3e65-4ce9-9a79-47e382e5c82c",
    "category": "todo",
    "name": "繫の形 / The Shape of Kizuna",
    "subtype": "ゲーム",
    "capacity": 9,
    "recommendedCapacity": 9,
    "favorites": 4262,
    "visits": 18826,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_20b1af6f-e795-4a35-966e-4c96dafff03b/3/256",
    "note": "2~9人用謎解きワールド。仲間とのきずなで乗り越えましょう。 不具合報告、ご意見、ご感想はもとねふ（＠motonefu）までお願いします。",
    "official": "2~9人用謎解きワールド。仲間とのきずなで乗り越えましょう。 不具合報告、ご意見、ご感想はもとねふ（＠motonefu）までお願いします。 一度ゲームを始めたら他のプレイヤーが入ってこられないようにしてください。 A puzzle-solving world for 2 to 9 players."
  },
  {
    "id": "wrld_1294af41-b46b-48af-8966-d043a105230b",
    "category": "todo",
    "name": "BAR雫",
    "subtype": "カフェ・飲食",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 874,
    "visits": 26391,
    "tags": [
      "カフェ・飲食",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b9d118ad-bfba-476a-a258-a42dbb26c47c/6/256",
    "note": "随時更新中のBARとなります。 集会などでご使用頂いて構いません。 要望などありましたら気軽にどうぞ。",
    "official": "随時更新中のBARとなります。 集会などでご使用頂いて構いません。 要望などありましたら気軽にどうぞ。 This is a BAR that is being updated as needed. You are welcome to use it for gatherings, etc. If y"
  },
  {
    "id": "wrld_c3a23abe-161b-4aed-b00a-2d5ae5a44fc5",
    "category": "todo",
    "name": "Monster Hunter VR Chat",
    "subtype": "",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 3144,
    "visits": 22792,
    "tags": [
      "ゲーム",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bb7413fd-884d-4704-b9b9-c1fccc1553bc/5/256",
    "note": "VRでモンハンを遊ぶのが夢だった制作者が、余暇に作り上げたワールド。",
    "official": "Playing MH in VR is always my ambition, develop the world in my past time probably make the world development very slow. However, please enjoy the wor"
  },
  {
    "id": "wrld_2d5ad267-6f65-46cc-8ce4-7dcce95f89af",
    "category": "todo",
    "name": "終末世界とバースデイ",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 776,
    "visits": 6765,
    "tags": [
      "海・水中",
      "ホラー・不気味"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_05ab79e2-82ff-4d92-8406-f1a078b15e3b/13/256",
    "note": "海は赤く、空は黄昏色で底知れず。 ここは役目を終えた世界が、 静かに内側へと重力とともに収束し、 祈りとともに折りたたまれ、祈りだけが形を保つ場所。",
    "official": "海は赤く、空は黄昏色で底知れず。 ここは役目を終えた世界が、 静かに内側へと重力とともに収束し、 祈りとともに折りたたまれ、祈りだけが形を保つ場所。 折りたたまれる世界の余白を、最後の光を探して漂おう。 終末した世界へ、ようこそ。 まっすぐ奥に進むと隠しボタンあり 【操作方法 / Controls】"
  },
  {
    "id": "wrld_583bdc81-8db0-4288-9949-47fb85560466",
    "category": "todo",
    "name": "CitytoCrush",
    "subtype": "街・都市",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 8527,
    "visits": 66369,
    "tags": [
      "街・都市",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9576c8d9-4799-4c24-8b8f-8bcaf0ba8421/2/256",
    "note": "手足の当たり判定をオンにして、建物を破壊しよう。",
    "official": "Active limbHitbox to destroy buildings.Enter the world already playing may cause laggy!!!!!!!. Instance owner should make sure limbcollideris on when"
  },
  {
    "id": "wrld_e7a7b516-2354-4bce-bbf0-6b71d657eff0",
    "category": "todo",
    "name": "Milya［paradox］",
    "subtype": "ホラー・不気味",
    "capacity": 12,
    "recommendedCapacity": 1,
    "favorites": 24948,
    "visits": 161292,
    "tags": [
      "ホラー・不気味",
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0ac875d3-ab5c-47f7-8797-9ea25be24ecb/2/256",
    "note": "日本語・英語対応。「死体はあなたの知覚を保持しない」",
    "official": "Supports English ＆ Japanese - Updated 2025/08/12 \"Corpses do not retain your perception.\" - A psychological metafictional horror - 日本語と英語対応 -「死体はあなたの認"
  },
  {
    "id": "wrld_ea66dee0-005e-43cf-b62d-a9931f30c7f7",
    "category": "todo",
    "name": "禁足地・宮野原 -sanctuary-",
    "subtype": "神社仏閣・宗教",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 2517,
    "visits": 36482,
    "tags": [
      "神社仏閣・宗教",
      "日本",
      "雪・冬"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_89d40ecb-105a-4624-975e-50a1c1fab487/3/256",
    "note": "『たぶん「あちら側」の場所』とだけ添えられた、雪の禁足地のワールド。",
    "official": "たぶん「あちら側」の場所"
  },
  {
    "id": "wrld_85c268aa-4059-46e7-b852-aab8d96b6ab9",
    "category": "todo",
    "name": "Dissociation",
    "subtype": "ホラー・不気味",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 5097,
    "visits": 71067,
    "tags": [
      "ホラー・不気味"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_747ed807-82ec-4b8b-bdc9-e029b19a22a1/1/256",
    "note": "精神科に掛かる直前に構想した、短いホラワみたいなものです。",
    "official": "精神科に掛かる直前に構想した、短いホラワみたいなものです。"
  },
  {
    "id": "wrld_85ea9341-60be-413e-964a-ab7d0c26af8c",
    "category": "game",
    "name": "楽しい面接会場【Japanese interview room】",
    "subtype": "日本",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3986,
    "visits": 46360,
    "tags": [
      "ロールプレイ",
      "ネタ・ミーム",
      "フレンドと",
      "集会・交流",
      "ギミック"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f38551f5-f7b6-4e7d-a3c6-f3bc08ec38e6/3/256",
    "note": "面接官と応募者に分かれて面接ごっこができる会場ワールド。不採用ボタンを押すと応募者が床ごと落ちる仕掛けで場が沸きます。待合の椅子や休憩室もあり、ネタ会場にも実際の面談・集会にも。落下ギミック注意。",
    "official": "面接会場。採用不採用のボタンがあります。不採用だと落ちます。休憩室と自動販売機あります。何かの面接をする際もそうじゃなくても使ってください。【注意】落下ギミックがあります。6/20ミニアップデート！ Interview venue. There are buttons for Hired and N"
  },
  {
    "id": "wrld_aa8390d4-da7e-4173-8401-88311ecbc180",
    "category": "todo",
    "name": "Epilogue. Chapter 1. （v 1.2）",
    "subtype": "ホラー・不気味",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 39890,
    "visits": 325490,
    "tags": [
      "ホラー・不気味",
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4b1dde88-0ebb-4d58-afd9-ec50433adc03/1/256",
    "note": "「Epilogue」はOrganismの前日譚にあたる物語。",
    "official": "\"Epilogue\" is the backstory of Organism. Here is the first chapter-The Story of the Man in the Hat"
  },
  {
    "id": "wrld_7954bf74-a725-491d-83a6-6e264f7da818",
    "category": "todo",
    "name": "BABEL!",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 15862,
    "visits": 176811,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_be840602-6e91-4853-b242-73962335db0e/3/256",
    "note": "建築＆シューティングのPvPゲーム！2〜20人用。",
    "official": "Shooting and Building PVP Game! For 2-20 Players. Support VR / Desktop / Quest. 建築系対戦シューティングゲームです。2～20人で遊べます。VR / デスクトップ / Quest対応！"
  },
  {
    "id": "wrld_c182398b-2539-4349-ab03-1fa720509df0",
    "category": "todo",
    "name": "脱出ゲーム Platform",
    "subtype": "電車・駅",
    "capacity": 8,
    "recommendedCapacity": 8,
    "favorites": 3540,
    "visits": 27098,
    "tags": [
      "電車・駅",
      "ゲーム",
      "謎解き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f27e6a49-0f1a-4d75-8e3f-3f3c41dae9d2/6/256",
    "note": "『偶然』に導かれたあなたは、罠の仕組まれたデスゲームから脱出できるのか？",
    "official": "『偶然』に導かれたあなたは、罠の仕組まれたデスゲームから脱出できるのか？/ 制限時間40分 / グローバル動作 / 途中参加不可 （2026/01/10 追記 アップデートにより解けなくなっていた問題のヒントを追加しました。/ 同期ずれしやすかった箇所を修正しました。）"
  },
  {
    "id": "wrld_0d333062-c99b-474f-91b4-cee7a28519cb",
    "category": "todo",
    "name": "Adopt A Furry !",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 22,
    "favorites": 47092,
    "visits": 4542619,
    "tags": [
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c6956a0c-7107-4c71-9ab2-e6265a7a6502/10/256",
    "note": "自分だけのファーリーを引き取ろう。とっても簡単！",
    "official": "Adopt your very own furry. It's easy! Come, fill out the application, and then pick out your preferred fuzzie. Pay the fee and be on your own. Leashes"
  },
  {
    "id": "wrld_262729a1-1eca-4f4a-b9ed-d00ffa663d6b",
    "category": "todo",
    "name": "WORLD OF THE SOUL",
    "subtype": "ゲーム",
    "capacity": 6,
    "recommendedCapacity": 6,
    "favorites": 50529,
    "visits": 398060,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_87bec047-3b8f-48d7-91df-9f2dde7ad8ea/4/256",
    "note": "2026/7/4 ABYSS STAGE UPDATE ソウルライクRPGワールドです。",
    "official": "2026/7/4 ABYSS STAGE UPDATE ソウルライクRPGワールドです。 プレイ人数：1～6人 セーブ機能あり Soul Like RPG World. Number of players: 1-6 Save function available. ＃WORLD_OF_THE_SOU"
  },
  {
    "id": "wrld_9157acd3-13e6-499a-9a72-ee044c3f9385",
    "category": "todo",
    "name": "脱出ゲーム「シロの謎クロの謎」",
    "subtype": "ゲーム",
    "capacity": 10,
    "recommendedCapacity": 4,
    "favorites": 2344,
    "visits": 15246,
    "tags": [
      "ゲーム",
      "謎解き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_34f63e2d-9bac-45c6-b386-e696045db716/3/256",
    "note": "白と黒、二つの部屋を行き来してすべての謎を解き明かす脱出ゲーム。制限時間60分、途中入場不可。",
    "official": "白と黒、二つの部屋を行き来して全ての謎を解き明かせ！/制限時間60分/途中入場不可"
  },
  {
    "id": "wrld_94b92258-abf1-40ad-8f4a-431407442d9d",
    "category": "todo",
    "name": "Just Do It !",
    "subtype": "",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 1790,
    "visits": 43277,
    "tags": [
      "アート・展示",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c99f1bcd-7970-4ce2-a838-db3afd8e2190/1/256",
    "note": "LaBeouf, Rönkkö & Turnerの作品『#INTRODUCTIONS』（2015）をもとにしたワールド。",
    "official": "From ＃INTRODUCTIONS （2015） by LaBeouf, Rönkkö ＆ Turner; https:／／vimeo.com／125095515exit CC-BY 2.0"
  },
  {
    "id": "wrld_0654140f-bb41-4b2d-bf79-1869f85b53bc",
    "category": "todo",
    "name": "Resereaの写真撮影用ワールドポータル",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 14070,
    "visits": 115268,
    "tags": [
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ca0882af-1c83-48a3-9409-19c058edb75c/2/256",
    "note": "お気に入りが溢れているので作ったワールドです。 ポータルをスイッチ表示式に変更しました。",
    "official": "お気に入りが溢れているので作ったワールドです。 ポータルをスイッチ表示式に変更しました。表示したいときは、壁のスイッチを操作してください（ローカル） If you want to view the portal, operate the switch on the wall. （Local） 最新更"
  },
  {
    "id": "wrld_2eeb28bc-fa49-4436-83f6-9e904ea64fc1",
    "category": "todo",
    "name": "Buckshot Roulette: Gmod port",
    "subtype": "夜・夜景",
    "capacity": 38,
    "recommendedCapacity": 12,
    "favorites": 17174,
    "visits": 193029,
    "tags": [
      "ゲーム",
      "対戦",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7f6daa76-03f5-4b4e-96fd-bdd8c8ac8d9f/1/256",
    "note": "緊張感と予測不能さが魅力の原作にインスパイアされた「Buckshot Roulette」の世界へ。",
    "official": "Step into Buckshot Roulette, Inspired by the tense and unpredictable gameplay of the original, this world is a VRChat remake of the Gmod map by Drowne"
  },
  {
    "id": "wrld_de1b95ae-0c16-4686-b84e-3559a0f44362",
    "category": "todo",
    "name": "転生したらタイトル作家だった件 ～7枚のカードで大ヒット小説タイトルを作る～",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 8,
    "favorites": 1261,
    "visits": 6539,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8b50b873-c4a5-4f42-bfdc-ed07c034b397/4/256",
    "note": "配られたカードでなろう小説のタイトル作成するゲームです。 11/16カード内容が他の人に見えないバグを修正しました。",
    "official": "配られたカードでなろう小説のタイトル作成するゲームです。 11/16カード内容が他の人に見えないバグを修正しました。11/18カード同期がうまくいかないバグを修正しました。11/19少人数時のリセット処理を軽くしました"
  },
  {
    "id": "wrld_a79e6d51-f035-465e-97c3-2c1b29f6fc77",
    "category": "todo",
    "name": "生活記憶力 Kioku",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 5532,
    "visits": 46575,
    "tags": [
      "ゲーム",
      "お絵描き",
      "パーティー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cca87ae4-05bb-4722-ae78-130e622b24fb/5/256",
    "note": "記憶を頼りにロゴなどの日常に潜むデザインをお絵描きするゲーム。最大8人まで。",
    "official": "記憶を頼りにロゴなどの日常に潜むデザインをお絵描きするゲーム。最大8人まで。VTuberぽんぽこちゃんねるでやっていたゲームが面白そうだったので作ってみました。 2024-01-26 : 書道システムアップデート＆お題変更"
  },
  {
    "id": "wrld_c7423848-bb22-4cba-9341-37d8b076b6fd",
    "category": "todo",
    "name": "Tanks!",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 65264,
    "visits": 717443,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_16bd0e8c-fa52-4ef3-9dac-a8cdef1f9559/2/256",
    "note": "戦いの時間だ！（2〜10人）",
    "official": "Time for battle! （2-10 players）"
  },
  {
    "id": "wrld_1442a6bf-d510-4fc6-9958-fc1530915d94",
    "category": "todo",
    "name": "LusterBullet",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 30,
    "favorites": 17068,
    "visits": 149585,
    "tags": [
      "ゲーム",
      "対戦",
      "シューター・FPS",
      "飛行・フライト"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a55343a6-cca9-4794-92f8-0cafd82dd47a/11/256",
    "note": "最大16人で戦う、高速飛行と二丁拳銃のPvPシューター『ラスターバレット』。",
    "official": "Ver2.6/最大16人対戦/高速飛行＆二丁拳銃PvP「ラスターバレット」/ Up to 16 players/high speed flight ＆ dual pistol PVP"
  },
  {
    "id": "wrld_9c4ae09d-f6cc-45d1-be63-b9a6b6df1fb9",
    "category": "todo",
    "name": "Magic Arena",
    "subtype": "ゲーム",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 54421,
    "visits": 690005,
    "tags": [
      "ゲーム",
      "ファンタジー",
      "対戦"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3d30fa8f-32e5-4470-b086-e61e89790105/7/256",
    "note": "魔法使いが集うアリーナ。武器は使わず、さまざまな魔法を駆使して勝利をつかむ対戦ワールドです。",
    "official": "ここは魔法使いが集うアリーナ. 武器は必要ありません. 様々な魔法を駆使し,勝利を手にしましょう. PvP game world where you fight other players with magic spells. （2-16 players, PCVR/Desktop/Android）"
  },
  {
    "id": "wrld_ac937ebc-9db6-4a14-a97a-1611fe0b5a10",
    "category": "todo",
    "name": "脱出ゲーム「DEADLOCK」",
    "subtype": "ゲーム",
    "capacity": 12,
    "recommendedCapacity": 6,
    "favorites": 3100,
    "visits": 17189,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0d89156b-9745-44db-94d4-d61ef8d2374d/1/256",
    "note": "鍵を入手して部屋から脱出せよ！ただし、鍵は部屋の外にあります /途中参加不可/制限時間60分 ＃VRC_DEADLOCK （2025/11/03 ワールド内のヒント・解説ギミックの不具合を修正）",
    "official": "鍵を入手して部屋から脱出せよ！ただし、鍵は部屋の外にあります /途中参加不可/制限時間60分 ＃VRC_DEADLOCK （2025/11/03 ワールド内のヒント・解説ギミックの不具合を修正）"
  },
  {
    "id": "wrld_44b5dde2-33c0-457a-b379-1b8dcbef0187",
    "category": "recommend",
    "name": "夢見の海窓 ~Dreaming Ocean~",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 476,
    "visits": 21074,
    "tags": [
      "チル",
      "海・水中",
      "街・都市",
      "夜・夜景",
      "睡眠・V睡"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_36e5aeab-9fe2-4207-b408-6e00182b9c7d/3/256",
    "note": "窓の外に都市と魚が漂う海を眺めてゆったり過ごせる、チル・睡眠向けの小さな部屋。静かに景色を眺めたい夜や、少人数で休息したいときに似合うワールド。",
    "official": "窓の外に広がる都市と魚を眺めながらゆったり過ごせるチル/睡眠ワールドです。YamaPlayer/QvPen/RTab/RBS ｜ This is a chill/sleep world where you can relax while gazing at the cityscape and fis"
  },
  {
    "id": "wrld_c2c5a78b-d84b-4073-8f6d-fbe36229fa61",
    "category": "chill",
    "name": "子どもと住む家 FamilyWithChildren",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1477,
    "visits": 23779,
    "tags": [
      "チル",
      "家・部屋",
      "ロールプレイ",
      "写真・撮影",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c8207c14-a1d2-40ba-8c7e-53d3074fa053/3/256",
    "note": "0〜3歳児と暮らす、子育て真っ最中のおうちを再現したワールド。おくるみに座れば赤ちゃんにもなれます。子ども部屋のある生活感たっぷりの空間で、小さいアバター同士のごっこ遊びや撮影に。左手のトリガーを2回押すとメニューが出ます。",
    "official": "絶賛子育て中のおうちです。子供の年齢は0~3歳児を想定しています。/左手トリガー2回押しでメニューが出ます。おくるみは座れるようになってるので赤ちゃんにもなれます"
  },
  {
    "id": "wrld_3d884169-dbf8-4ab0-bad4-5572aa8675d7",
    "category": "chill",
    "name": "été - SALON.",
    "subtype": "チル",
    "capacity": 42,
    "recommendedCapacity": 22,
    "favorites": 11399,
    "visits": 125477,
    "tags": [
      "チル",
      "写真・撮影",
      "街・都市",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8f0716df-a1e6-47eb-ba6e-c6b05368fbd0/1/256",
    "note": "初夏の光に包まれたヨーロッパ風の水辺の街並みを散策できるワールド。映画のような黒帯の演出で始まり、カフェテラスや隠れたゲストルームも。写真撮影と歓談に人気の、昼下がりの散歩が似合う場所です。PC専用。",
    "official": "緑豊かな木々と初夏の香りに包まれた、小さな街並みです。 ご歓談や写真撮影、あるいは何もせずとも、日差しを浴びてのんびりとお過ごしください。"
  },
  {
    "id": "wrld_f320bd05-d688-4cae-ad86-cd917eabfa32",
    "category": "chill",
    "name": "Mirage Letter",
    "subtype": "チル",
    "capacity": 64,
    "recommendedCapacity": 4,
    "favorites": 3161,
    "visits": 27515,
    "tags": [
      "チル",
      "写真・撮影",
      "自然・風景",
      "一人でゆっくり",
      "ストーリー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_000c3e1c-66c5-45f1-8118-0751814a8b11/1/256",
    "note": "丘の上の一軒家と、花と水面の光に包まれた小さな宮殿。手紙を読んでもうひとりのわたしに送ると、風景が変わり、やがて返事が届きます。静かに物語を味わう一人向けのチルワールド。PC専用。",
    "official": "丘の上の一軒家と、花と水面の光に包まれた小さな宮殿。そこには、もうひとりのわたしの気配がある。 / A solitary house upon a hill in Japan; a miniature palace engulfed in petals and aquatic glare. With"
  },
  {
    "id": "wrld_7d9a7c03-9e38-41e3-8cb5-2e3b4ba85874",
    "category": "chill",
    "name": "Aqua modern",
    "subtype": "チル",
    "capacity": 20,
    "recommendedCapacity": 15,
    "favorites": 3536,
    "visits": 109222,
    "tags": [
      "チル",
      "一人でゆっくり",
      "フレンドと",
      "静かな空間",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d8978139-c540-41b6-a8a7-54be8ab2dc81/3/256",
    "note": "青を基調にしたモダンな部屋で過ごすチルワールド。Ne_ひづきが2026年に公開した作品で、2階はミュートエリアになっているので、無言で静かにいたい時や、一人でぼんやりしたい夜にも向いています。Quest対応。",
    "official": "青いモダンな部屋です。2階はミュートエリアです｜modern chill room.The second floor is mute area."
  },
  {
    "id": "wrld_17937f22-0751-40f7-be2b-579e3c890dfd",
    "category": "chill",
    "name": "Life",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 5795,
    "visits": 228790,
    "tags": [
      "海・水中",
      "演出・パーティクル",
      "一人でゆっくり",
      "体験型",
      "アート・展示",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_18f00000-654f-4935-85be-956e1e9d8e55/2/256",
    "note": "『生きるとは』とだけ添えられた、海とパーティクルの演出で生きることを静かに問いかける体験型ワールド。ワールド素材の制作でも知られるぱんだ/graph*（pandagraphics）が2025年に公開した作品で、言葉が少ない分、受け取り方は人それぞれです。Quest対応。",
    "official": "生きるとは"
  },
  {
    "id": "wrld_3aca4c25-0692-4bf6-ab77-1a81104575c8",
    "category": "chill",
    "name": "深海のかくれべや -undersea hideout-",
    "subtype": "チル",
    "capacity": 5,
    "recommendedCapacity": 3,
    "favorites": 1263,
    "visits": 36254,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "一人でゆっくり",
      "少人数"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0d4b7f0d-19f8-41dc-97c7-cd2837026101/7/256",
    "note": "海中に沈んだ小さなお部屋にこもる、最大5人の少人数チルワールド。静かに過ごしたい時やV睡に。入口のドアを開ければ海の外へも出られます。販売ワールドが元になった、狭さが心地いい一軒。",
    "official": "海中に沈んだ小さなお部屋です。少人数で静かな時間を過ごしたいときに ／ 入口のドアを調べると・・・ ／ 販売ワールド「MoffConRoom」「水底 -Minasoko-」使用"
  },
  {
    "id": "wrld_59f25029-2229-40f5-a584-40cfefaae381",
    "category": "chill",
    "name": "The Chill Airbus",
    "subtype": "チル",
    "capacity": 64,
    "recommendedCapacity": 45,
    "favorites": 15723,
    "visits": 366881,
    "tags": [
      "チル",
      "乗り物",
      "集会・交流",
      "フレンドと",
      "飛行・フライト",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4b615d3f-1bbe-441b-a9cc-69f660b8314e/3/256",
    "note": "空の上を飛ぶエアバスA321の機内で過ごすチルワールド。ponluxime作で、入ると空港からの離陸アニメーションが流れ、ずっと聞こえるエンジン音が臨場感たっぷりです。プライベートジェットのような豪華な客室に、2つのベッドルームやビリヤード、動画プレイヤーやアーケードもあり、窓の外を眺めながらフレンドとまったり過ごせます。Quest・iOS対応。",
    "official": "A very cozy Airbus A321. Relax in the skies with VRChat Airlines in The Chill Airbus. Contains a Video Player, Pens, Stress toys, an Arcade, and two P"
  },
  {
    "id": "wrld_5a6529d8-8afd-4f93-9cc9-773c99486cad",
    "category": "chill",
    "name": "【半個室】焼き鳥と創作料理の大衆居酒屋柿",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 361,
    "visits": 6252,
    "tags": [
      "チル",
      "カフェ・飲食",
      "集会・交流",
      "フレンドと",
      "ロールプレイ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a3ce2ce5-6da8-40f1-b151-3e79d59768c6/7/256",
    "note": "半個室で落ち着いて飲める大衆居酒屋ワールド。かきぴーが2026年に公開した作品で、焼き鳥と創作料理を囲み、飲み放題2時間2000円〜と書かれたメニューを眺めながら、フレンドと居酒屋ごっこで盛り上がれます。PC専用。",
    "official": "飲み放題2h2000円~（生＋500円）"
  },
  {
    "id": "wrld_a948ed2e-2faf-41a1-8d8a-10aaf62dc657",
    "category": "chill",
    "name": "遠くで祭囃子の鳴る音が聞こえる - Spirit Horses",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 2593,
    "visits": 54359,
    "tags": [
      "チル",
      "夜・夜景",
      "日本",
      "夏",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_69734ada-498e-411c-ab91-a57de95fe453/3/256",
    "note": "遠くで祭囃子が聞こえる、夏の夜のワールド。セミの声と、近くないからこそ懐かしい祭りの気配に包まれて、ただ帰ってきたような気持ちで過ごせます。公式説明は『ただいま』の一言だけ。",
    "official": "ただいま"
  },
  {
    "id": "wrld_c8071a93-dd2a-4061-96dd-2eb415d692fe",
    "category": "chill",
    "name": "NPC.ASMR-w-",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 8285,
    "visits": 57498,
    "tags": [
      "チル",
      "アバター",
      "睡眠・V睡",
      "一人でゆっくり",
      "ASMR・立体音響",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_dd69bdcf-9abd-4f04-97bd-07a744a0dd0c/1/256",
    "note": "人気ワールド『NPC.ASMR』のアバター特盛版。多数のNPCアバターによる耳かきASMRや添い寝で癒やされる、Quest・iOS対応のV睡ワールド。テクスチャ圧縮でディテールは元版より控えめ。",
    "official": "多分、人気ワールドであろう［NPC.ASMR］のアバター特盛版です。極限までテクスチャ圧縮しているのでNPC.ASMRよりディテールが落ちてます。毎日、ASMRを聴きまくる時間がないのでプレイリストは不定期更新にします。"
  },
  {
    "id": "wrld_255b1ae8-f939-45dd-bcef-d49162fed3a7",
    "category": "chill",
    "name": "Aquarium in the Dark",
    "subtype": "自然・風景",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 5446,
    "visits": 98543,
    "tags": [
      "チル",
      "海・水中",
      "自然・風景",
      "睡眠・V睡",
      "一人でゆっくり",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_83364dc6-f0a0-4a5f-9db8-ca65d6c103cf/2/256",
    "note": "暗い水族館のような空間で魚を眺めながら落ち着ける、Quest対応の軽量な雰囲気ワールド。LoliKamiが2026年に公開した作品で、スリープ（ダーク）モード付きのベッドもあり、眺めて癒やされ、そのままVR睡眠にも向きます。",
    "official": "A optimized ambience world with fish to look at and a bed with Sleep（Dark） Mode."
  },
  {
    "id": "wrld_e9afc68c-16c5-4757-b99e-b2a85d4275b3",
    "category": "chill",
    "name": "宵闇車両で終末を - The Twilight Train",
    "subtype": "夜・夜景",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 4248,
    "visits": 54250,
    "tags": [
      "チル",
      "夜・夜景",
      "電車・駅",
      "写真・撮影",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5134c984-ae87-41f8-8b8f-4dc34385c3a5/1/256",
    "note": "暖かな灯りの夜行列車で、おだやかな終末を眺めるワールド。『夜の果てへの旅』『暗夜行路』など夜の街のワールドで知られる浜名湖なこが2026年に公開した作品です。走る車内の静けさと窓の外の闇の対比が美しく、写真撮影の行き先として繰り返し選ばれています。誰かと並んで座って、他愛ない話をする夜に。PC専用。",
    "official": "おだやかな終末"
  },
  {
    "id": "wrld_a3b0cbcb-5184-4762-8804-1a0b0d8bd5c7",
    "category": "chill",
    "name": "The colony - Junkyard",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2994,
    "visits": 19264,
    "tags": [
      "探索",
      "フレンドと",
      "写真・撮影",
      "ノスタルジー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d135e0c9-0521-4216-88c4-3cccbf92bc9c/2/256",
    "note": "9人の子どもたちの秘密基地。ガラクタの山に囲まれたジャンクヤードに、子どもだけの居場所があります。Glory Nyaが2026年に公開した作品で、少しミステリアスな空気の中、童心に帰ってフレンドと探検してみてください。PC専用。",
    "official": "The secret base of the nine children."
  },
  {
    "id": "wrld_1342e8b0-66bc-456b-83c4-3ee4c1ed6075",
    "category": "chill",
    "name": "VRC立しゅうまつ保育園",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 24,
    "favorites": 4554,
    "visits": 64928,
    "tags": [
      "チル",
      "学校",
      "ノスタルジー",
      "日本",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ac4f2948-5f9e-4c19-9725-bc87a2290a16/4/256",
    "note": "下駄箱や身長ラインまで再現された保育園で、園児気分に戻れるワールド。積み木やぬいぐるみ、懐かしい絵本がいっぱいで、小さいアバターで行くと没入感が増します。お布団でお昼寝も。Quest対応。",
    "official": "VRC立しゅうまつ保育園へようこそ！ カラフルな積み木やふわふわのぬいぐるみ、懐かしさあふれる絵本など、たくさんのオモチャをご用意しました！！ 友達と一緒に、笑顔が溢れる楽しい園児ライフを満喫してください！ Welcome to VRC Tate Weekend Preschool! We have"
  },
  {
    "id": "wrld_0070e9c7-e484-41fb-be92-a09355ece9cf",
    "category": "chill",
    "name": "溺死の夢 - Dream of Drowning",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 34567,
    "visits": 641422,
    "tags": [
      "チル",
      "睡眠・V睡",
      "海・水中",
      "一人でゆっくり",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_da7a0c0b-20c4-4cfa-9e5d-05f610426010/6/256",
    "note": "天窓から降る雨で水かさがゆっくり増し、穏やかに沈んでいく空間。約1時間で水位が最大になる設計は、眠りに落ちるまでの時間と寄り添うよう。睡眠とリラックスのための一作。",
    "official": "天窓から降る雨がゆっくりと水かさを増し、穏やかに沈んでいく空間。睡眠やリラックスにどうぞ。約一時間で水位が最大になります。Rain gently falls through the skylight, gradually raising the water level as you peaceful"
  },
  {
    "id": "wrld_a059f75e-ef98-42cb-84be-420e4564abdc",
    "category": "chill",
    "name": "-yuuri-夏空自然公園",
    "subtype": "チル",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 4025,
    "visits": 43433,
    "tags": [
      "チル",
      "自然・風景",
      "写真・撮影",
      "フレンドと",
      "夏"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_da4c718c-4a67-41b6-9a40-b472f4d7d6f2/5/256",
    "note": "夏空の下、かき氷など夏の楽しさをぎゅっと詰め込んだ自然公園。フレンドと夏らしい小物で遊べば、そのまま夏の思い出の1ページになります。青空と緑に包まれて、写真撮影やのんびり散歩にもどうぞ。出現してすぐは少し重めですが、中間エリアまで進むと軽くなります。",
    "official": "夏の楽しさをぎゅーっと詰め込みました！お友達と沢山の夏の思い出を作りましょー！【リスポーンすぐは少し重いかもしれませんが、中間エリアまで行くとワールド全体が少し軽くなります】【ギミック/各自QVペン完備】"
  },
  {
    "id": "wrld_bac95b22-4098-47da-8bd8-1cf2d6e2f8f0",
    "category": "chill",
    "name": "淡朝",
    "subtype": "チル",
    "capacity": 4,
    "recommendedCapacity": 4,
    "favorites": 4671,
    "visits": 135800,
    "tags": [
      "チル",
      "写真・撮影",
      "集会・交流",
      "睡眠・V睡",
      "一人でゆっくり",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5cf8280f-9e0e-4859-8a01-12e50173a42b/4/256",
    "note": "淡い朝の光の中で、少人数の雑談や小休憩、睡眠に使えるチルワールド。真菰あんこが2026年に公開した作品で、ペンやカメラも搭載し、写真を撮ったりアバターを眺めたりしながら、静かな朝の時間をゆっくり過ごせます。Quest対応。",
    "official": "少人数での雑談や小休憩、睡眠に。 Vizvid / RBS Sleep Kit 2 / QV Pen / Flip Camera / Avatar Sticker Camera"
  },
  {
    "id": "wrld_5c9922c8-be7b-4286-a5db-4a608a6c41ab",
    "category": "chill",
    "name": "MAME CAFE",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 141,
    "visits": 1967,
    "tags": [
      "チル",
      "カフェ・飲食",
      "アバター",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ed00145d-334d-47a1-b623-fd280407b5c0/4/256",
    "note": "まめふれんずサイズのちびっ子向けに作られた、まめふれが暮らすおうちカフェ（個人制作の非公式ワールド）。カウンター裏のQvPenや楽器、プールもあり、小さいアバター同士で集まるのにぴったりです。",
    "official": "まめふれがくらすおうちカフェ / まめふれんずサイズのちびっ子向けワールドです。QvPenはカフェカウンター裏のものがおすすめ。（個人的に制作した非公式ワールドです）7/10プールや小物追加 ＃ちょこのアトリエ"
  },
  {
    "id": "wrld_6a06bc98-fed3-49e3-9064-9502135e62ff",
    "category": "chill",
    "name": "蒼雨の寝室",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 4051,
    "visits": 151895,
    "tags": [
      "チル",
      "夜・夜景",
      "睡眠・V睡",
      "一人でゆっくり",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b7a26675-a4e9-47be-b1f9-3f0b8e3dfe21/1/256",
    "note": "蒼とネオンの街並みに雨が降る、少人数向けのチル＆睡眠ワールド。青く染まった夜の景色を眺めながら、雨音の中で静かに眠りにつけます。心音が聞こえる仕掛けや天井のモニターもある、雨と眠りのワールドで知られる作者の定番の寝室です。",
    "official": "蒼とネオンの街並みと雨がテーマの少人数向けchill＆睡眠用ワールドです。VIzvid/心音システム/天井モニター/imagePad/EventCalendar/joinログ/QVPen"
  },
  {
    "id": "wrld_07d5bfbf-2c76-483c-8cd6-02e4714dbb51",
    "category": "chill",
    "name": "星鯨の夢 ｜ - The Dream of Star Whale -",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 5,
    "favorites": 9131,
    "visits": 387285,
    "tags": [
      "チル",
      "睡眠・V睡",
      "夜・夜景",
      "海・水中",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4fb46d53-128d-4d94-b6e1-11206fff1651/3/256",
    "note": "星空の下で眠ることに特化した、V睡コンセプトのワールド。星鯨が泳ぐ夜の海と星空を眺めながら眠りにつけます。『おやすみ伝言板』もあり、少人数で静かに過ごしたい夜のための幻想的な空間です。",
    "official": "V睡特化をコンセプトとしたワールドです。 星空のもとで眠りにつこう。嫌なこともきっと忘れられるさ。 YamaPlayer / QVPen / RBS_SleepKit2 / FilpCamera/ おやすみ伝言板 / どこでもアニメーションシステム / Bed Barrier"
  },
  {
    "id": "wrld_eee60c94-2abc-421f-bdfb-98584186df09",
    "category": "chill",
    "name": "みなそこのアクアリウム",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 942,
    "visits": 18791,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0aea550b-b809-4bda-bf1a-a705e19cd322/1/256",
    "note": "水族館の大水槽をイメージした水中チルワールド。そいる。が2026年に公開した作品で、RBS SleepKit 2を備え、魚を眺めながらのんびり過ごしたり、そのままV睡したりできます。水の景色に静かに浸りたい夜にどうぞ。PC専用。",
    "official": "水族館の大水槽をイメージしたチルワールドです。RBS2もあるのでV睡にもどうぞ！"
  },
  {
    "id": "wrld_ca00e20e-f621-462b-9a9c-6ed116e143ce",
    "category": "chill",
    "name": "ガタゴト",
    "subtype": "",
    "capacity": 8,
    "recommendedCapacity": 8,
    "favorites": 2231,
    "visits": 33150,
    "tags": [
      "チル",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_82f89208-5f8a-48b6-bf9c-413de4acacc9/2/256",
    "note": "『どこかでガタゴト』とだけ添えられた、小さなチルワールド。ガオ5656が2026年に公開した作品で、どこからか聞こえる音に耳を澄ませながら、ぼんやり過ごしたい人に。PC専用。",
    "official": "どこかでガタゴト"
  },
  {
    "id": "wrld_768cf47e-e644-4eb7-bb9c-b99f63072f91",
    "category": "chill",
    "name": "すしづめ！",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 2,
    "favorites": 435,
    "visits": 12101,
    "tags": [
      "チル",
      "アバター",
      "フレンドと",
      "写真・撮影",
      "狭い部屋",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_01ba896b-8a5b-4253-910d-23e862d065a5/5/256",
    "note": "人が増えるほどギュウギュウになる、狭さが売りの小部屋ワールド。身長115cm以下の小さいアバター推奨で、ちびっ子同士が密集する光景自体が楽しい、ネタ寄りのチル空間です。『狭すぎてポータルを置けなかった』ほどの狭さ。",
    "official": "v1.2.1 人が増えるとすし詰めになります！身長115cm以下アバター推奨！狭すぎてポータル置けませんでした。 YamaPlayer / QvPen / Mirror / SleepKit2 / imagePad / FlipCamera / Audiolink / AudioReverbFilt"
  },
  {
    "id": "wrld_6a292d0d-ab43-4edc-a4b7-34dd309fcb92",
    "category": "chill",
    "name": "DeepSleep",
    "subtype": "チル",
    "capacity": 5,
    "recommendedCapacity": 5,
    "favorites": 613,
    "visits": 11678,
    "tags": [
      "チル",
      "睡眠・V睡",
      "フレンドと",
      "写真・撮影",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_732c89bd-d9e3-4460-999f-91cc856680e0/1/256",
    "note": "V睡のために作られたワールド。おじしが2026年に公開した作品で、各種ペンやカメラ、ビデオレター録画ギミックを備え、寝る前の書き置きや思い出の記録まで残せます。フレンドと静かに眠りにつきたい夜にどうぞ。Quest対応。",
    "official": "V睡用に作ったワールド。QvPen / UnyStyles / FlipCamera / ビデオレター録画ギミック / VizVid / ImagePad / Rtab /多機能ブランケット"
  },
  {
    "id": "wrld_a00efed1-8edc-4fbf-bdc4-c0d4da4c87c1",
    "category": "chill",
    "name": "修学旅行の夜 School trip night",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 7049,
    "visits": 135433,
    "tags": [
      "チル",
      "学校",
      "日本",
      "睡眠・V睡",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5b244bdc-6702-47e5-8bc4-2b4aaa74ecb5/2/256",
    "note": "アニメで見るような修学旅行の旅館の部屋を再現。並んだ布団でひそひそ話、自己紹介サイコロで話題作り、大量の枕投げから消灯してV睡まで。スイッチ式の肝試し要素もある、鉄板の夜。",
    "official": "大量のまくら投げ、動画プレイヤー、ミラー、V睡用ギミックあります！肝試し要素も？"
  },
  {
    "id": "wrld_d617a193-3a55-4f87-81c0-734b7f74f826",
    "category": "chill",
    "name": "KEROOM",
    "subtype": "チル",
    "capacity": 5,
    "recommendedCapacity": 3,
    "favorites": 350,
    "visits": 9286,
    "tags": [
      "チル",
      "睡眠・V睡",
      "フレンドと",
      "狭い部屋",
      "少人数",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e93ea4e1-02e6-46ec-9cdb-6368f7f5bf98/4/256",
    "note": "定員5人のせまい部屋でごゆるりと過ごすチルワールド。Kerorin2734が2026年に公開した作品で、暗めの紫の光に包まれた小空間は距離の近さが魅力。少人数で静かに話したり、そのまま眠ったりするのに向いています。PC専用。",
    "official": "せまいへやで ごゆるりと"
  },
  {
    "id": "wrld_4d353dc5-a983-4f11-96f8-e6752d627eb3",
    "category": "chill",
    "name": "群青星海",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 12788,
    "visits": 364019,
    "tags": [
      "チル",
      "海・水中",
      "夜・夜景",
      "一人でゆっくり",
      "睡眠・V睡",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ac42822c-84b7-4315-a5c6-9539b2129ec5/4/256",
    "note": "星と、波の音と。満天の星空が綺麗な孤島のチルワールドです。！すらいむ！が2026年に公開した作品で、ほぼ岩だけの小島に部屋が作られた、秘密基地のようなワクワク感があります。ワールドを暗くしたりカーテンで光を遮ったりとV睡に必要な機能もそろい、静かに過ごしたい夜や眠る前のひとときにぴったり。Quest・iOS対応。",
    "official": "星と、波の音と。"
  },
  {
    "id": "wrld_42db5622-5eea-47e7-bcbb-53888c514e0e",
    "category": "chill",
    "name": "使用、禁止。/Do Not Use.",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1260,
    "visits": 13810,
    "tags": [
      "チル",
      "ホラー・不気味",
      "リミナルスペース",
      "探索",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_914c2441-f42b-4bb3-9a86-2a4c08cc769a/3/256",
    "note": "ちょっと不気味なキッズスペースで過ごす、少し不穏なチルワールド。紹介では『慣れればチルできるかも』と評されるリミナルな一作です。隠しギミックには精神的に重いテーマを示唆する演出があるので、探索は心の準備を（直接的な描写やジャンプスケアはありません）。",
    "official": "第6作目。少し不穏なチルワです。隠しギミックに精神的に重いテーマを示唆する演出があります。直接的な描写・ジャンプスケアはありません。キッズスペースでゆっくりお休みください。今後も更新予定です。/ My sixth world. A slightly unsettling chill world.Co"
  },
  {
    "id": "wrld_2c8aa223-150b-4748-b244-ddaf2807b882",
    "category": "chill",
    "name": "Aquam",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 4224,
    "visits": 100264,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f62a3edc-b32a-4a9a-a0a6-c4307fc5e60b/1/256",
    "note": "水槽のある落ち着いた寝室で過ごす、静かなチルワールド。BaiMaoNyaが2026年に公開した作品で、泳ぐ魚を眺めながら横になれば、水のゆらぎに包まれて自然とまぶたが重くなります。一人で静かに眠りにつきたい夜のV睡や、少人数の雑談に。PC専用。",
    "official": "Calm bedroom with Aquarium"
  },
  {
    "id": "wrld_43f63fe5-8ca9-4506-8f28-65dcfd45faa0",
    "category": "chill",
    "name": "Rain / Noir",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 3494,
    "visits": 45417,
    "tags": [
      "チル",
      "夜・夜景",
      "カフェ・飲食",
      "写真・撮影",
      "フレンドと",
      "雨",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_db4f7d41-9f95-4fd3-9fb5-b8abaa65c10f/1/256",
    "note": "降りしきる雨と夜をモチーフにした、こぢんまりとしたBAR。窓を流れる雨とライティングの美しさが撮影派にも好評です。グランドピアノのあるステージも備えた大人の隠れ家で、Boothの『same不動産開発』で販売されているワールドでもあります。Quest対応。",
    "official": "降りしきる雨と夜がモチーフのこぢんまりとしたBARワールドです。Booth「same不動産開発」より2/6発売開始です。A cozy BAR world inspired by the night and the sound of pouring rain. Launching Feb 6th vi"
  },
  {
    "id": "wrld_ab7e34a4-43bc-4652-b75c-783ca7ca156d",
    "category": "chill",
    "name": "刻の花園 - Aeterna Garden -",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 25,
    "favorites": 2181,
    "visits": 18036,
    "tags": [
      "チル",
      "自然・風景",
      "写真・撮影",
      "長居できる",
      "作業用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_67ab16a5-c4f4-4716-b74f-7b691bab7a06/8/256",
    "note": "時間とともに景色が育っていく庭園。入ったときは静かな草原ですが、10分で巡る昼夜を繰り返すうちに花が咲き始め、40分たつと満開の花畑に蝶が舞い、空に虹がかかります。天気が変わる仕掛けも。作業や雑談をしながらじっくり待つほど良さが出る、長居向けの花畑です。",
    "official": "時間が経つにつれて、景色が育っていく庭園です。 入室した時は静かな草原ですが、10分で巡る昼夜を繰り返すうちに、少しずつ花が咲き始めます。 40分が経過することで、満開の花畑に蝶が舞い、空に虹がかかります。 分かりにくいですが天候が変わる仕組みも入っています。 おしゃべりのお供に景色の変化を楽しんだ"
  },
  {
    "id": "wrld_7b02fc2f-0fd2-41ac-aebe-cfde323e7cac",
    "category": "chill",
    "name": "Brassveil Express",
    "subtype": "電車・駅",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 5645,
    "visits": 59133,
    "tags": [
      "電車・駅",
      "集会・交流",
      "チル",
      "探索",
      "作業用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9b069f6a-087d-42bb-91b9-77d36aff0b3c/4/256",
    "note": "果てのない線路を走る巨大列車の一車両で作業や雑談ができるワールド。状態表示や昼夜・車窓の切り替えが便利で、列車の走行音も心地よい。『Echo Finch作戦』のログを追う小さな謎解きも。",
    "official": "果てのない線路を走り続ける巨大な列車「Brassveil Express」の一車両をモチーフとした作業ワールドです。アセット切り替えや定点カメラ視点など、作業・雑談・集会に幅広く使える機能を組み込んでいます。ワールドに保存された記録「Echo Finch作戦」のログを追うこともできます。 / / 誰"
  },
  {
    "id": "wrld_c0935fac-f9c4-4715-b1b1-b2fba3001ea0",
    "category": "chill",
    "name": "AQUA NEON NEST",
    "subtype": "チル",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 367,
    "visits": 6414,
    "tags": [
      "チル",
      "海・水中",
      "夜・夜景",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7ab0ba14-b26a-4cbd-96c2-ac6900f7969d/1/256",
    "note": "ネオンの光が揺らめく水中の巣のようなチルワールド。_KONJACが2025年に公開した作品で、定員20人のこぢんまりした空間で、青い光に包まれながら静かに過ごしたり、少人数でゆっくり語らったりするのに向いています。PC専用。",
    "official": "水中のチルワです。"
  },
  {
    "id": "wrld_16a353e7-2c59-415c-a6f1-201e33c89864",
    "category": "chill",
    "name": "青藍美術館 -Blue Museum-",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 4017,
    "visits": 42170,
    "tags": [
      "チル",
      "アート・展示",
      "海・水中",
      "カフェ・飲食",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_82c735f0-07c8-4c81-ae21-e3a7c14a0b57/2/256",
    "note": "泳ぐ魚と美術品を同時に眺められる、青の美術館。水のゆらぎとアートに囲まれながら、お酒を片手にゆったり過ごせます。展示ワールドを実際に巡った人のおすすめ集にも選ばれた、静かに長居できる一軒です。座った椅子は、ジャンプボタンの長押しで降りられます。",
    "official": "泳ぐ魚や美術品を眺めながら、お酒を飲んだり、ゆったり過ごせるワールドです。【SIT判定のある椅子は、JUMPボタン長押しで降りられます】It is a world where you can relax and drink alcohol while looking at swimming fish"
  },
  {
    "id": "wrld_1525e877-3120-4899-bcfe-4e82b317ad9b",
    "category": "chill",
    "name": "Autumn Midnight",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 35,
    "favorites": 35850,
    "visits": 1342894,
    "tags": [
      "チル",
      "夜・夜景",
      "睡眠・V睡",
      "フレンドと",
      "自然・風景",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b02fbb05-6326-439e-b444-755ac4a199a4/15/256",
    "note": "木の温もりと紅葉に包まれた、秋の夜のチルワールド。高台の窓からは星空と街の灯りが広がり、休憩スポットとミラーも充実。どこでも寝転べる居心地の良さが評判で、Boothでも販売されています。Quest対応。",
    "official": "A chill world wrapped in the warmth of wood and the colors of greenery and autumn leaves. Now available on Booth as Autumn Midnight. 木の温もりと緑や紅葉の彩りに包まれ"
  },
  {
    "id": "wrld_b6592e60-7b8f-454f-9f76-9e816d9f8dac",
    "category": "chill",
    "name": "放課後のロッカー",
    "subtype": "学校",
    "capacity": 60,
    "recommendedCapacity": 60,
    "favorites": 6517,
    "visits": 80266,
    "tags": [
      "学校",
      "日本",
      "フレンドと",
      "ロールプレイ",
      "少人数",
      "夕暮れ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_88993012-220b-44cd-9457-5e1c1b692a64/3/256",
    "note": "夕日の放課後の教室で、掃除用具入れのロッカーに二人で隠れるラブコメ的シチュエーションを体験できるワールド。ゼロ距離まで近づける設定で密着のドキドキ感が味わえ、大きな反響を呼んだ。",
    "official": "「！？」「どうしよう！誰か来る！」「とにかくこっち！」「ちょっ！こんな狭いところ」「いいから早く！」"
  },
  {
    "id": "wrld_568003b8-cb87-459b-ab4b-47a56d2b9e68",
    "category": "chill",
    "name": "Supercar Lounge",
    "subtype": "チル",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 1209,
    "visits": 87727,
    "tags": [
      "チル",
      "写真・撮影",
      "乗り物",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_87998165-e3e9-4c4a-bcee-f609ed64c662/4/256",
    "note": "McLaren P1を配した小さなガレージ兼ラウンジで過ごす、モダンで少しダークなチルワールド。Freewillpack76が2024年に公開した作品で、ポラロイドカメラでの撮影も楽しめます。車好き同士の雑談や、愛車とアバターの記念撮影にどうぞ。Quest対応。",
    "official": "Small garage / lounge featuring the beautiful McLaren P1, added Polaroid camera"
  },
  {
    "id": "wrld_42eacac1-5fa8-4fee-ac9a-874d16ec721c",
    "category": "chill",
    "name": "高速夜行バス・DigitalExpress号",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 6755,
    "visits": 73033,
    "tags": [
      "チル",
      "夜・夜景",
      "乗り物",
      "一人でゆっくり",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6f9dc139-9707-4bb0-8000-bb42c49d82bc/6/256",
    "note": "夜の高速道路を走る夜行バスの車内で過ごすチルワールド。道路を自動で生成し、14種類の車が自動運転で走る独自のシステムで、窓の外に車の流れが続きます。一人でぼんやり眺めるのも、大所帯で貸し切って旅気分を味わうのも楽しい、移動する小さな部屋です。",
    "official": "一人で夜行バスも、大所帯貸し切りで夜行バスも楽しいと思ったので作りました。 誰かと話すも良し、黙々と車の流れを見るも良し。 独自開発した道路自動生成システムと、道路交通・自動運転システムを搭載しています。 現在14種の車両が実装されています。 道路状況はやんわりと同期していますが、基本ローカルに近い"
  },
  {
    "id": "wrld_8f4aca21-893a-49e1-9ed4-7dc2704273f9",
    "category": "chill",
    "name": "淡夜 ~Awayo~",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 16,
    "favorites": 3195,
    "visits": 90489,
    "tags": [
      "チル",
      "夜・夜景",
      "海・水中",
      "街・都市",
      "睡眠・V睡",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0cdee8db-1ba4-4109-95b4-e786c3d31930/1/256",
    "note": "見上げる夜景と月、青く澄んだ水中都市を眺めるチルラウンジ。BARとしての一杯と、水の中にいるような静けさが同居する夜の隠れ家です。V睡にも。Quest・iOS対応。",
    "official": "見上げる夜景と月。青く澄んだ水中都市のチルラウンジです。 日常を忘れられる「落ち着く空間」をコンセプトに、静かに語り合えるBarカウンターと、そのままV睡できるスペースをご用意しました。 深海の底に沈む「淡夜」で、ゆったりとした優しい夜をお楽しみください。 Look up at the city n"
  },
  {
    "id": "wrld_011c24fb-c156-4d5b-a890-08aa69e4abdc",
    "category": "chill",
    "name": "Aquatic Wishes",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 21320,
    "visits": 209484,
    "tags": [
      "海・水中",
      "チル",
      "睡眠・V睡",
      "写真・撮影",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0eddf331-33f7-4e9c-9989-60926cfa6acd/4/256",
    "note": "マンタやクラゲが泳ぐ深海に潜る、水中都市風の景観ワールド。海底散歩道やスイミングで自由に漂い、カプセルの中でゆらゆら過ごす感覚が人気です。VR睡眠用のベッドも。電車に乗りたいときは、同じ作者の『Deep Sea Train』へ。PC専用。",
    "official": "Look At The Beautiful Deep Sea World. If you want to take the train of this world, go to Deep Sea Train World（Emperor AngelFish 90） （Double Saddle Fis"
  },
  {
    "id": "wrld_71400ac2-3dd8-4656-b094-2a406ff3ca1e",
    "category": "chill",
    "name": "～洞窟温泉～",
    "subtype": "チル",
    "capacity": 30,
    "recommendedCapacity": 16,
    "favorites": 3425,
    "visits": 49992,
    "tags": [
      "チル",
      "自然・風景",
      "日本",
      "温泉",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_89872b90-9045-40bc-8d02-fe856ab7c423/1/256",
    "note": "洞窟の中にひっそりと湧く隠れ家温泉。NOMAが2025年に公開した作品で、岩に囲まれた静かな湯で、フレンドと語らう夜にぴったりです。重く感じる時は赤い椅子のタブレットで軽量化設定もできます。Quest対応。",
    "official": "There is a tablet available at the red chair that allows for various settings, including World optimization. If you find it too heavy, please feel fre"
  },
  {
    "id": "wrld_8c412b77-b3ab-422b-b087-71150cad329b",
    "category": "chill",
    "name": "スナック惑星",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1082,
    "visits": 17762,
    "tags": [
      "ノスタルジー",
      "集会・交流",
      "カフェ・飲食",
      "音楽・ライブ",
      "フレンドと",
      "日本",
      "ボードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ffdded84-5f51-41de-bc28-a5a30061f07c/6/256",
    "note": "Moffco作、昭和のスナックを宇宙に持っていったような飲み屋ワールド。お酒やカラオケのステージで賑わう1Fと、ママの部屋で麻雀ができる2Fがあり、V睡できるベッドも備えています。フレンドと静かに語る夜にも、VR飲み会の会場にもどうぞ。",
    "official": "昭和のスナックです。お酒やカラオケステージ、タバコやおしぼりがある店内と2Fはママの部屋で麻雀TANKIが楽しめます。V睡できるベッドも備えます。Qvpenあります"
  },
  {
    "id": "wrld_b0748170-ed80-4544-8c0f-d5c9f8a1d764",
    "category": "chill",
    "name": "最終バス（LastBus）",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6362,
    "visits": 84763,
    "tags": [
      "チル",
      "集会・交流",
      "乗り物",
      "夜・夜景",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_66b3cb1f-c3ad-4f7c-8a45-6ce753218630/12/256",
    "note": "『次は終点、神保駅です』――終バスの車内で過ごすチルワールド。優先座席付近のスイッチを切り替えながら、夜の車窓と静かな車内で雑談や休息を。訪問・お気に入り数も多い人気作。",
    "official": "次は終点、神保駅です。優先座席付近に各種スイッチがあります。"
  },
  {
    "id": "wrld_a15406fa-dcf4-49ee-aec9-dc8ae3c2d8cd",
    "category": "chill",
    "name": "10円玉のしあわせ",
    "subtype": "チル",
    "capacity": 30,
    "recommendedCapacity": 30,
    "favorites": 8114,
    "visits": 83198,
    "tags": [
      "チル",
      "ノスタルジー",
      "日本",
      "海・水中",
      "写真・撮影"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c5a5abbc-89eb-4dbe-a380-554cc76637f1/1/256",
    "note": "海辺の駄菓子屋で10円玉を握りしめ、思い出の味をもう一度。目移りするほど種類豊富な駄菓子や土管のある空き地、青い空と海がエモいと評判。店の奥は動画や音楽でくつろげる空間。",
    "official": "10円玉握りしめて、 思い出の味をもう一度。 懐かしの駄菓子屋ワールドです。 / \"Clutching a 10-yen coin, relive the taste of childhood memories. Welcome to a nostalgic Japanese candy shop'"
  },
  {
    "id": "wrld_1d638943-9cea-44f3-b975-6c2b6f73bbbd",
    "category": "chill",
    "name": "Nocturnadia",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 12,
    "favorites": 20773,
    "visits": 191931,
    "tags": [
      "チル",
      "自然・風景",
      "音楽・ライブ",
      "カフェ・飲食",
      "夜・夜景"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_de6026a4-40a9-4eae-81f8-c325036b19e1/5/256",
    "note": "音楽と自然の孤島『ノクターナディア』。都会の夜景を遠くに望む庭園と温室のある秘密の花園で、ピアノやバーのある大人の夜を。ロマンチックな雰囲気で撮影にも人気です。",
    "official": "- ノクターナディア - Island of Music and Nature"
  },
  {
    "id": "wrld_15c2262b-349f-419b-bb65-5935118a3e9e",
    "category": "chill",
    "name": "違法操業マグロ漁船（Illegal Tuna Fishing Boat）",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 2356,
    "visits": 41146,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "フレンドと",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c65ee970-205b-4d16-94ea-7fe8bb9bfb2b/2/256",
    "note": "物騒な名前とは裏腹に、波音とソファのあるれっきとしたチル＆V睡ワールド。名前は作者の後輩の友人のアカウント名から来ていて、定員は『転覆寸前』の80人。ペンや動画プレイヤーも完備で、フレンドがよく寝落ちする居心地の良さです。狭めの船内が落ち着く人におすすめ。",
    "official": "後輩の友人のツイッターアカウント名に着想を得て製作しました。チルワールドだと自覚しています。上限人数は転覆寸前の80人です。"
  },
  {
    "id": "wrld_e8d77f32-e042-4982-ab00-207af45f1076",
    "category": "chill",
    "name": "天体観測部 / Astronomy Club",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 5,
    "favorites": 13958,
    "visits": 133462,
    "tags": [
      "チル",
      "宇宙・空",
      "学校",
      "ゲーム",
      "集会・交流",
      "やり込み",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3a2bcdb6-bcd5-4499-bbe6-2e340791001f/3/256",
    "note": "放課後の教室の窓の外が宇宙に繋がった天体観測部。流れ星を撮影して、動物モチーフの宇宙幽霊『アムア』全45種を召喚・収集できます。撫でると表情が変わるアムアに癒される、チル＆ゲーム。Quest対応。",
    "official": "天体観測部の教室を舞台に、星を観測してアムアという宇宙幽霊を召喚できる遊び場です。雑談の場としても気軽に利用できます。 Its a playground set in the classroom of an astronomy club, where you can observe the star"
  },
  {
    "id": "wrld_1e9f7aa0-366e-47f8-b22c-78f202a2ee29",
    "category": "chill",
    "name": "Snowpiercer",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 11107,
    "visits": 218308,
    "tags": [
      "チル",
      "電車・駅",
      "カフェ・飲食",
      "雪・冬",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_25599c4d-f3f7-45d5-bc51-40f74f186e6e/2/256",
    "note": "TRAIN SUITE 四季島に着想を得た、雪国を走る豪華列車のワールド。雪が落るCarmelが2024年に公開した作品で、心地よい車内でフレンドと乾杯したり動画プレイヤーを楽しんだり、疲れたら後部車両で休んだりできる、列車旅気分のチル空間です。PC専用。",
    "official": "Inspired by TRAIN SUITE 四季島（Toransuito Shikishima）,On this journey through the snowy country aboard the train, you can raise a toast with friends in t"
  },
  {
    "id": "wrld_e58fc9a8-65fc-469b-958c-e3c1f95da286",
    "category": "chill",
    "name": "独身寮",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3509,
    "visits": 134140,
    "tags": [
      "チル",
      "日本",
      "一人でゆっくり",
      "フレンドと",
      "睡眠・V睡",
      "家・部屋",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f56078a6-c4aa-4957-931e-b97b31fa7d23/1/256",
    "note": "秘密基地のようなワンルーム『独身寮』。k__keiが2025年に公開した作品で、ゲーミングPCやこたつ、ロフトベッドのある一人暮らしの部屋で、ベランダからは夜の街の音。誰かの暮らしに泊まるようなチルワールドです。Quest対応。",
    "official": "秘密基地のようなワンルーム おいしいたばこは吸えると思います"
  },
  {
    "id": "wrld_0cf0bd95-6460-402c-88c3-a2a1aab12156",
    "category": "chill",
    "name": "馬に揺られて",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 4,
    "favorites": 2135,
    "visits": 34807,
    "tags": [
      "チル",
      "夜・夜景",
      "睡眠・V睡",
      "一人でゆっくり",
      "乗り物"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d7090017-454e-46f4-86fb-511460c3c0ad/3/256",
    "note": "夜の森を進む馬車に揺られ、蹄の音と薪ストーブの火に癒やされるチルワールド。環境音やポスプロの調整メニュー、V睡ギミックも完備。屋根の上に登って星空を眺めるのもおすすめです。",
    "official": "蹄の音を聞きながらうとうとと。 メニューからカーテン、アバターライト、ポスプロ、環境音のON/OFFや調整ができます QVペン/V睡ギミック/YamaPlayerあり"
  },
  {
    "id": "wrld_41eee024-34ec-43cf-a2f8-2bc16e2896d0",
    "category": "chill",
    "name": "Dream Ocean",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 56401,
    "visits": 978778,
    "tags": [
      "チル",
      "海・水中",
      "夜・夜景",
      "写真・撮影",
      "フレンドと",
      "ホームワールド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_14b42dfd-e34a-4238-ad75-fa421c44e541/3/256",
    "note": "夜の湖畔にクラゲが漂い、空中を巨大なクジラが静かに泳ぐ夢のような海辺。MoguLiveのおすすめにも選ばれた幻想景観で、奥のコテージはホームワールドにも人気です。",
    "official": "Welcome to Dream Ocean. Your dreamy, cozy home world by the sea! Enjoy endless relaxing music and experience the perfect blend of high FPS and a beaut"
  },
  {
    "id": "wrld_efa50940-28f4-4d55-9168-873bf860f8d0",
    "category": "chill",
    "name": "多分、雨。",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 15,
    "favorites": 4626,
    "visits": 87829,
    "tags": [
      "チル",
      "写真・撮影",
      "図書館・本",
      "一人でゆっくり",
      "睡眠・V睡",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_353b6d73-2bbc-4a4d-b4c6-00baee74cee2/2/256",
    "note": "「静かに言葉と向き合いたかった」という一文が印象的な、雨の読書部屋。上下ミュートで動画が干渉せず、ロフトと鍵付きの奥部屋には青空文庫も。写真投稿も盛んな、言葉と雨音に浸るチルワールドです。",
    "official": "『俺はただ、静かに言葉と向き合いたかっただけ。』 メイン部屋は上下ミュート機能あり、違う動画を再生しても干渉しません。 奥の部屋もミュート機能、そしてロック機能、インターホン、カメラもついてます。 imagePad FlipCamera QvPen 青空文庫 『＃多分雨VRC で撮った写真ポストして"
  },
  {
    "id": "wrld_6e48ab76-2a6b-4eb6-8997-9ac70a8f48c8",
    "category": "chill",
    "name": "Sapphirae",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 26309,
    "visits": 151898,
    "tags": [
      "チル",
      "写真・撮影",
      "自然・風景",
      "演出・パーティクル",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b4207f84-a913-4ede-b333-c2a208f61297/3/256",
    "note": "Fins作、青が鮮やかな洋館のワールド。海と空のサファイアのような青をテーマに、扉の向こうにクラシックな部屋や幻想的な庭園が続き、2026年の公開時にはXで「信じられないほど美しい」と絶賛されました。藤の花、水に覆われた床と睡蓮、花の絵のアトリエなど、どこを切り取っても絵になる撮影向きの空間です。容量約393MBと重めなのでご注意を。PC専用。",
    "official": "Something once shaped by pressure, now to bloom like flowers. It does not ask to be admired, only to exist. 02/01/26 : HOTFIXED Massive Performance Is"
  },
  {
    "id": "wrld_3e49e7c3-da21-4239-bbfa-949363feabb8",
    "category": "chill",
    "name": "Realtime Space Elevator",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 11520,
    "visits": 127927,
    "tags": [
      "チル",
      "宇宙・空",
      "SF・近未来",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d2557330-b806-4a02-9767-14860ae019f4/4/256",
    "note": "実時間に合わせて上昇する軌道エレベーターで、宇宙ステーションや深宇宙ゲートを目指すチルな宇宙旅行。S_ASAGIRI制作で、重力の再現や展望スペースから見る地球が圧巻です。いったん離れても、次に新しいインスタンスを立てると前回の続きの高さから始まるので、少しずつ登る楽しみ方も。",
    "official": "実時間に合わせて動く軌道エレベータです。ゆったりお過ごしください。 ワールドをいったん離れても、次に新しいインスタンスを立てた時は前回最後にいた場所から始まります。 Created by S_ASAGIRI"
  },
  {
    "id": "wrld_8bf129ef-16e2-4872-82bb-28e1d414128f",
    "category": "chill",
    "name": "漫喫HOME",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 3,
    "favorites": 2608,
    "visits": 16378,
    "tags": [
      "チル",
      "宇宙・空",
      "図書館・本",
      "フレンドと",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_22c35463-9382-4ebd-9b0b-670f2c3e4b1a/2/256",
    "note": "宇宙が見える家で、漫画家や志望者の漫画が読める小さな漫画喫茶。ページめくりは同室で同期されるので、同じ漫画を読みながら語れます。毎月更新、新刊は机の上。PC専用。",
    "official": "毎月1日更新。2026/7/1更新。漫画家や漫画家志望者の漫画が読めるワールド。新刊は机の上です。ご寄稿くださる方は是非制作者のXまでご連絡ください。"
  },
  {
    "id": "wrld_5993198d-e869-414b-bf97-deb424bff63c",
    "category": "chill",
    "name": "Daybreak / 黎明",
    "subtype": "自然・風景",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 31324,
    "visits": 288918,
    "tags": [
      "チル",
      "自然・風景",
      "宇宙・空",
      "写真・撮影",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_73d1222f-a07d-44d8-b71e-da2f27ad3023/7/256",
    "note": "夜明けの光が差す花畑と、オーロラと星空が混ざる幻想的な空の景観ワールド。焚き火からミラーを出して眺める時間は格別で、海外レビューでも絶賛された美しさです。PC専用。",
    "official": "深まった闇は光を呑み込めず、かえってその光をいっそう鮮やかに浮かび上がらせる。The deepening darkness cannot swallow the light; rather, it only makes it shine more clearly."
  },
  {
    "id": "wrld_7b5d6275-e654-4838-b614-21568ddf5a08",
    "category": "chill",
    "name": "琥珀色ウェーブレット ~Amber Wavelet \"Kohaku_iro\"~",
    "subtype": "チル",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 9326,
    "visits": 243398,
    "tags": [
      "チル",
      "海・水中",
      "フレンドと",
      "動物",
      "少人数",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d034821a-0dc3-4de7-b506-048c9d636082/3/256",
    "note": "高級ホテルのスイートルームのような空間で、寄ってくる猫と静かに過ごせる8人までのチルワールド。puri_sanが2025年に公開した作品で、添えられた一言は「寝息が聞こえるほど近くに、猫の温もり」。湯気で曇るガラス風呂を手で拭うギミックや、ベッド前の動画プレイヤー、隠し要素探しも楽しい一作です。Quest対応。",
    "official": "寝息が聞こえるほど近くに、猫の温もり。あなただけのスイートルーム。HashTag ＃Kohaku_iro3D"
  },
  {
    "id": "wrld_95e21746-c50c-4b67-853e-da07f59ffbe4",
    "category": "chill",
    "name": "Fins Home",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 8,
    "favorites": 8207,
    "visits": 196707,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "一人でゆっくり",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_768dff28-1eda-4ee1-960e-dec35ca63ac6/3/256",
    "note": "Finsの物語の始まりの場所。頭上のガラス越しに魚が泳ぐ海中の小さな寝室で、ベッドに寝転べば幸せな気分で眠れる。2024年の公開時にはVRChat公式のXでも紹介されました。『District Roboto』などの過去作の遺物探しも楽しい、神秘的で綺麗な一部屋。PC専用。",
    "official": "A place where all the stories begin. A small, underwater-themed bedroom with basic necessities, you might found some relic from past adventures. May y"
  },
  {
    "id": "wrld_5f3ffd49-8ac4-4802-ac8e-7dc7163d1f24",
    "category": "chill",
    "name": "BarRoom",
    "subtype": "カフェ・飲食",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 11093,
    "visits": 475203,
    "tags": [
      "カフェ・飲食",
      "チル",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3e568501-6142-4e6f-a3fb-f70bce726011/5/256",
    "note": "自宅に本格的なBarがあるような、大人のプライベートラウンジ。大きなビデオプレイヤーで音楽や映画を流しながら、ゆったり語らう夜にぴったりです。寝室は声が外に漏れない仕様で、Quest対応。",
    "official": "お家でBarを楽しめるQuest対応ワールドです。寝室は中にいる人の声が外に聞こえなくなっています。VRCLightVolumesに対応させました。This is a Quest compatible world where you can enjoy a bar at home. The voic"
  },
  {
    "id": "wrld_63cbfc3b-3037-44c5-9739-b7284fda528d",
    "category": "chill",
    "name": "健全なお部屋2 / -SFW- ROOM2",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1423,
    "visits": 25698,
    "tags": [
      "チル",
      "ゲーム",
      "集会・交流",
      "フレンドと",
      "睡眠・V睡",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8caa12b1-20d0-48e3-9d22-f18c62db126b/4/256",
    "note": "『軽量で健全な空間で集まりたい』がコンセプトの、遊べるギミックが詰まったチル部屋。カニを茹でたり、フレンドを3000m先のゴールへ打ち出すフレンドランチャーやラジコンのコースで遊んだり。寝落ちした人はトングで防音室へ運べて、景色はリアルの時間と連動しています。Quest対応。",
    "official": "軽量で健全な空間で集まりたい！ をコンセプトに作りました！寝落ちした人はトングで防音室にGO！フレンドランチャーでフレンドを3000m先のゴールにシュゥゥゥット！？ラジコン＆コースや食べ物飲み物も完備！色々軽量化しておりますので比較的動作は軽いです、景色はリアル時間と連動してるよ！ご意見ご要望は【ふ"
  },
  {
    "id": "wrld_6dad9aca-5a51-43be-9835-39bc2211b50d",
    "category": "chill",
    "name": "Aerial Bloom",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 20,
    "favorites": 3731,
    "visits": 77119,
    "tags": [
      "チル",
      "夜・夜景",
      "睡眠・V睡",
      "フレンドと",
      "写真・撮影",
      "雪・冬"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_eaabf1c7-51ef-41bc-b554-60c98a9b4411/3/256",
    "note": "都会の夜景とオーロラを望む、静かな夜のチルワールド。上の階では夜景を眺めながらシーシャも楽しめ、ベッドルームからはオーロラが見えます。フレンドとじっくり話したい夜や、オーロラを見ながらのV睡に。",
    "official": "Please have a quiet night. 凛冽の空が映す、六花の幽舞は漆黒の天鵞絨に降り積もり、すべてを純白に染め上げる。凍てつく冬の微かな吐息に心を預け、刹那の佳景、君と過ごすこの時間を、心象のスノードームに閉じ込め、永遠を願う。【VRChat向けワールド】MellowRoundy /"
  },
  {
    "id": "wrld_2a996ce3-9d3b-442c-9edf-cb29904fe294",
    "category": "chill",
    "name": "Ataraxía~",
    "subtype": "チル",
    "capacity": 14,
    "recommendedCapacity": 3,
    "favorites": 3197,
    "visits": 84631,
    "tags": [
      "チル",
      "夜・夜景",
      "睡眠・V睡",
      "一人でゆっくり",
      "雨",
      "狭い部屋"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f25bf415-0324-416d-a57e-d5c64a164934/3/256",
    "note": "雨音に包まれる、かなり狭めの睡眠部屋。大きな窓からの夜景と低い天井が作るマニアックな落ち着きが好評です。カーテンを閉めて薄暗くすれば、そのままV睡にどうぞ。",
    "official": "small sleep room with rain, close the curtains and enjoy the dim≺3 下雨睡覺小房間 QvPen/VideoPlayer/NightMode/VRC Light Volumes"
  },
  {
    "id": "wrld_ad362dbe-ce43-4aab-95ce-bfb93b38eee6",
    "category": "chill",
    "name": "ゆうる〜む",
    "subtype": "チル",
    "capacity": 20,
    "recommendedCapacity": 5,
    "favorites": 54,
    "visits": 2153,
    "tags": [
      "チル",
      "睡眠・V睡",
      "演出・パーティクル",
      "一人でゆっくり",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_23900fe9-b89d-4465-9700-c76fb404f092/4/256",
    "note": "作者が初めて作ったチルワールド。Quest単体でもV睡しやすいシンプルなナイトモードやYamaPlayer、AudioLinkを備えた、素朴で居心地のいい手作りの部屋です。",
    "official": "初めて作ったワールドです。 チルワールドとしてお使いください Quest単機の方のV睡用のシンプルナイトモードを導入しています シンプルかつ便利にそんなワールドに仕上がりましたので、是非お越しください YamaPlayer／Audiolink／QVPen 26／03／25 パブリック化しました！あり"
  },
  {
    "id": "wrld_90178a33-0176-46ed-84dc-492d5aac137a",
    "category": "chill",
    "name": "音楽を聴く部屋",
    "subtype": "音楽・ライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4587,
    "visits": 117272,
    "tags": [
      "チル",
      "音楽・ライブ",
      "演出・パーティクル",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_82319573-b27b-4d8a-bf44-ee45aa3be6cd/6/256",
    "note": "好きな音楽を持ち寄って聴くことに特化した部屋。もくそんが2026年に公開した作品で、VizVidプレイヤーとAudioLink対応で、流す曲に合わせて光の演出が反応します。フレンドと推し曲を共有したり、一人でプレイリストに浸ったりする夜に。Quest対応。",
    "official": "VIZVID、Audiolink"
  },
  {
    "id": "wrld_4bfde0c0-9941-4fe0-aab8-7819c9ec7db6",
    "category": "chill",
    "name": "〜癒しなで〜ASMR room",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 12,
    "favorites": 31705,
    "visits": 830151,
    "tags": [
      "チル",
      "睡眠・V睡",
      "フレンドと",
      "ASMR・立体音響",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f05ff79e-aab4-485b-97ae-ff1a2a5cc6aa/12/256",
    "note": "ASMRイベント『癒しなで』の小物が並ぶ部屋。耳かきや焚き火、深海の音など多彩なASMRギミックで『力が抜けていく』と評判です。入口のドアからシアタールームへ移れて、動画鑑賞やシーシャも。ワールド音量は80%くらいがおすすめです。",
    "official": "ASMR用の小物がたくさん置いてあります 音の大きさはワールド音量で調整お願いします 80％くらいがおすすめです ASMRを楽しんでもらえたらうれしいです！ 入口のドアからシアタールームにワープできます"
  },
  {
    "id": "wrld_bb5f4a2b-647d-45a4-b0d0-6e7a25bbefdb",
    "category": "chill",
    "name": "Shukichi's Home vol.2",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 25,
    "favorites": 25,
    "visits": 4799,
    "tags": [
      "チル",
      "アバター",
      "演出・パーティクル",
      "フレンドと",
      "ホームワールド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7940a6e6-9b0a-44a0-b3de-5ca128785f79/3/256",
    "note": "作者しゅーきちが自分のホームとして作ったワールド。ミラーやAudioLink、LTCGI、アバターフィギュアまで置かれ、好きなものを詰め込んだ部屋でフレンドと過ごせます。",
    "official": "しゅーきちがホームワールドが欲しくて作ったとこです。ミラー, AudioLink, LTCGI, アバターフィギュア, UdonChipsあります。"
  },
  {
    "id": "wrld_ca0496ae-81d1-4b97-bcfd-00b12962edec",
    "category": "chill",
    "name": "Night on the Polar Express",
    "subtype": "夜・夜景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 21778,
    "visits": 504851,
    "tags": [
      "夜・夜景",
      "電車・駅",
      "乗り物",
      "雪・冬",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_702b26c9-4c6a-4210-b627-5f8a8b9d5aa8/14/256",
    "note": "雪原を走る蒸気機関車の中で、クリスマスの夜を過ごすワールド。Smokinbonesが約1年かけて作った思い入れの一作で、2025年の冬に公開されました。車両ごとに違う内装を巡り、屋根の上や最後尾テラスからオーロラを眺める贅沢なチルタイムを。VRフォトグラファーの撮影地にも選ばれています。Quest対応。",
    "official": "Ride on the Polar Express through the arctic on a peaceful Christmas night :3 This world was a passion project I've been working on for about a year,"
  },
  {
    "id": "wrld_7bb629cd-2416-46e3-9242-2c2eec705e90",
    "category": "chill",
    "name": "キロバイトのうみ - Sea of KB",
    "subtype": "海・水中",
    "capacity": 30,
    "recommendedCapacity": 30,
    "favorites": 24883,
    "visits": 1819278,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "夜・夜景",
      "軽量",
      "ホームワールド",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5b6501ac-5cce-4a28-a8b9-d35501c69c24/1/256",
    "note": "容量わずか0.54MBの超軽量な海辺。なのに焚き火、釣り、花火、動画、V睡用テントまで全部入りで『なぜ入るのか分からない』と驚かれる名作。Quest対応でホームワールドにも人気です。",
    "official": "キロバイトで構成された仮想の海辺。極限まで削られた容量の中に、必要なものは全て揃っています。"
  },
  {
    "id": "wrld_da64f96d-7b06-422e-a6bc-ffc937fee620",
    "category": "chill",
    "name": "ごろにゃんハウス",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 15052,
    "visits": 611638,
    "tags": [
      "チル",
      "写真・撮影",
      "フレンドと",
      "一人でゆっくり",
      "動物",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8a071cc6-c589-4268-9f5b-013fed8d9cd0/1/256",
    "note": "猫と人がごろごろくつろげるおうち。三色団子が2025年に、VRCに生息する猫たちのためにと寝床をたくさん用意して公開したワールドです。明るすぎない落ち着いた明かりと、クッションや寝床がいっぱいの部屋は、作業しながらおしゃべりしたり写真を撮ったりする普段使いに最適。Quest・iOS対応。",
    "official": "Cats! Fluffy beds await you, come relax!"
  },
  {
    "id": "wrld_f3afe6f8-b0c5-4f4c-aa66-8ff2b840d4af",
    "category": "chill",
    "name": "The Ring System",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 19229,
    "visits": 323365,
    "tags": [
      "チル",
      "宇宙・空",
      "SF・近未来",
      "演出・パーティクル",
      "睡眠・V睡"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cba0103b-c6f4-46c2-b679-2bf61113c75b/3/256",
    "note": "6万個以上の小惑星が巡る惑星の環を、宇宙船から眺めるチルワールド。あの物量なのに軽いと驚かれるシェーダーが自慢。環の形や空を変えたり、ベッドで星屑を眺めてV睡も。",
    "official": "6万以上の小惑星も超軽量に動かす特殊なシェーダー「nmAsteroidBelt」で作った環を眺めるテストワールド兼チルワールドです。土星風のリング以外にも色々な動きや見た目を試すことができます A shader test world with over 60,000 moving asteroids"
  },
  {
    "id": "wrld_bab19e31-eccb-4ded-b63e-ef716af869f1",
    "category": "chill",
    "name": "Stellix",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 24,
    "favorites": 14182,
    "visits": 455620,
    "tags": [
      "チル",
      "写真・撮影",
      "宇宙・空",
      "睡眠・V睡",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5f246f7c-c39a-4333-874b-f86ced8f307c/2/256",
    "note": "窓一面に青く輝く地球と月を眺められる、大人数向けの宇宙チルワールド（xpmmm制作）。ふかふかソファのシアタールームはミラーにも切り替えでき、宇宙を背景に集合写真も撮れます。奥のベッドでV睡も。左トリガーを2回押すとメニューのタブレットが出ます。PC専用。",
    "official": "Stellix by xpmmm ｜ The tablet can be brought up by pressing the left trigger twice. ｜ 左トリガー2回でMenuのタブレットが出せます. 描画がおかしくなる場合はGraphicsのForced Camera Near"
  },
  {
    "id": "wrld_35f9f22e-1603-4f92-bfea-5ecefe531d9e",
    "category": "chill",
    "name": "デザイナーズタワマン 【超かぐや姫！】",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7709,
    "visits": 111627,
    "tags": [
      "チル",
      "写真・撮影",
      "フレンドと",
      "再現ワールド",
      "ファンメイド",
      "アニメ・キャラ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7d8ed5bd-f3a0-48f5-8aea-fd613e91dd09/3/256",
    "note": "『超かぐや姫！』でかぐやと彩葉が暮らす家賃35万円のタワマンを再現した非公式ファンワールド。特徴的な小物で物語の空気感を味わえ、自分のアバターで劇中に立てる。Quest対応。",
    "official": "超かぐや姫!に出てくるかぐやと彩葉の住んでいるデザイナーズタワマンを再現したファンメイドの非公式ワールドです。 This is a fan-made, unofficial world recreating the designer tower apartment where Kaguya and"
  },
  {
    "id": "wrld_a2eb7ea5-5475-4490-90b2-375a5148d1be",
    "category": "chill",
    "name": "月夜見 - Cosmic Princess Kaguya【非公式】",
    "subtype": "チル",
    "capacity": 60,
    "recommendedCapacity": 40,
    "favorites": 17020,
    "visits": 234668,
    "tags": [
      "チル",
      "写真・撮影",
      "海・水中",
      "宇宙・空",
      "ファンメイド",
      "再現ワールド",
      "アニメ・キャラ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_770796a0-d6da-43af-bc17-cb281d7df61f/10/256",
    "note": "Netflix映画『超かぐや姫！』の月夜見（ツクヨミ）を再現した非公式ファンメイドワールド。本編のあの場所に入り込める再現度と、隠し要素を探す楽しさが作品ファンに人気です。",
    "official": "【非公式】Netflixアニメ映画『超かぐや姫！』のツクヨミ・シーンを再現したファンメイドワールドです。たとえ星降る海の中でも、この手を強く握りしめて。消えない願いは、街の光と共に輝き続ける。Though the starry sea is vast, our hands remain tightl"
  },
  {
    "id": "wrld_c40f5112-9b89-48ee-ac04-9e21699a4d32",
    "category": "chill",
    "name": "little dream of me",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 11409,
    "visits": 262882,
    "tags": [
      "チル",
      "カフェ・飲食",
      "写真・撮影",
      "睡眠・V睡",
      "ノスタルジー",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_eec570a6-ea30-4b58-b60b-a67bb0d3e9dd/8/256",
    "note": "元喫茶店の居抜きを住まいにした、雨の街を望むレトロなワールド。カウンターやプロジェクター、暖炉のあるベッドルームまで作り込みが細かく、『どこで撮っても絵になる』と評判の落ち着いた空間です。",
    "official": "喫茶店の居抜きです。一日の終わり、または始めに。"
  },
  {
    "id": "wrld_fd8029ba-55df-4292-bb1a-6ec34a36a6f6",
    "category": "chill",
    "name": "ランダムに特殊部隊が突入してくるチルワールド",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 8998,
    "visits": 85665,
    "tags": [
      "チル",
      "ゲーム",
      "フレンドと",
      "ネタ・ミーム",
      "シューター・FPS"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8b3965b9-899d-4bcc-a3cc-b2e22628913d/3/256",
    "note": "のんびりくつろいでいたはずが、ランダムな時間に窓ガラスを割って特殊部隊が突入してくる話題のチルワールド。4回に分けて来る部隊を武器庫の銃で全滅させると、ミサイルを撃ってくるヘリも帰っていきます。チルを取り返すまでのギャップの激しさはVRならでは。",
    "official": "ランダムな時間で特殊部隊が突入してきます。 4回に分けて突入してくるので全滅させて撤退させましょう！ ミサイル撃ってくるヘリは部隊が全滅すると帰っていきます"
  },
  {
    "id": "wrld_35021cf0-ac90-4a4e-bca4-d8d41bcab90e",
    "category": "chill",
    "name": "夏宵が、来る頃に。",
    "subtype": "夜・夜景",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 9401,
    "visits": 256739,
    "tags": [
      "夜・夜景",
      "海・水中",
      "演出・パーティクル",
      "一人でゆっくり",
      "夏",
      "夕暮れ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2c52833d-07f1-41e9-a559-adf637deaf38/2/256",
    "note": "夕焼けに照らされた小さな空間に、過ごすのに必要なものが揃った夏の宵のワールド。ぱんだ（graph）が2025年に公開した作品です。静かな夏の夜を、一人でゆっくり味わいたいときに。Quest・iOS対応。",
    "official": "夕焼けに照らされた小さな空間に、必要な物は揃っています。"
  },
  {
    "id": "wrld_8fa52e40-b576-4f89-a26b-65b1489d9ead",
    "category": "chill",
    "name": "シーシャを嗜むチルワ",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1402,
    "visits": 14507,
    "tags": [
      "チル",
      "夜・夜景",
      "占い",
      "睡眠・V睡",
      "カフェ・飲食"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ae6bdbdb-0f9c-43c5-95d7-b2fa98dc4d0d/3/256",
    "note": "ASMR機能のある本格シーシャを嗜める、大人のチルワールド。睡眠用ベッドやミュートエリアに加え、占いや麻雀パズル、ロシアンタコ焼きまで。煙と静けさに浸りたい夜に、少人数でどうぞ。",
    "official": "ASMR機能のある本格シーシャを置いています。 睡眠用ベッド nightモード イメージパッド yamaplayer QVペンを完備 ジョインログ 飲み物 麻雀パズル ベッド部屋にミュートエリアもあります ロシアンタコ焼きと占い付きが紅茶が入りました！ シーシャの使い方を動画プレイヤーに入れました"
  },
  {
    "id": "wrld_6995f83a-115a-4599-a8f7-2800fe356de7",
    "category": "chill",
    "name": "終末のご予定は？",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 9410,
    "visits": 126820,
    "tags": [
      "チル",
      "電車・駅",
      "海・水中",
      "睡眠・V睡"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_56fc0f93-cda1-4135-b92b-2e840167afac/5/256",
    "note": "海の上をどこまでも走る黄色い列車が舞台。終末と名乗りながら明るい世界で、ホームにしていた人もいる生活感のある車両です。昼夜切り替えや花火、食べ物・飲み物もいろいろあり、寝部屋にも使えます。",
    "official": "別ワールドの反対側になるイメージで作ったワールドです。 昼夜切り替え、花火onoff、食べ物や飲み物もいろいろあります。 寝部屋としても使えると思います。"
  },
  {
    "id": "wrld_89112876-1c0d-429b-8901-6003ceac8404",
    "category": "chill",
    "name": "群青コントレイル ~Blue Contrail ''Gunjo''~",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 32463,
    "visits": 415968,
    "tags": [
      "チル",
      "日本",
      "夜・夜景",
      "写真・撮影",
      "カフェ・飲食",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_869ee10d-57e4-464a-ab2d-01506659b973/3/256",
    "note": "日本のどこかにある高台の洋館で、移りゆく雨模様と遠くの街の灯りを眺めるチルワールド。紫陽花の庭とカフェ・ラウンジのあるロマンチックな雰囲気で、撮影スポットとしても人気です。",
    "official": "日本のどこかにある高台の洋館で、移りゆく雨模様と遠くの街の灯りを眺めながら、心ほどけるひとときをお過ごしください。 ｜ Hillside Manor - A Japanese Rainy Evening Retreat ｜ Hashtag : ＃Gunjo3D"
  },
  {
    "id": "wrld_73e096d7-dee6-4421-8815-30d53d83cc57",
    "category": "chill",
    "name": "ゆるっとキャンプ場-Virtual Camping Experience-",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 15246,
    "visits": 318212,
    "tags": [
      "チル",
      "夜・夜景",
      "自然・風景",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_27fb40e2-212d-4a8f-9058-88b6dabb9aa6/3/256",
    "note": "月明かりの湖畔で、テント設営からカレー作りまで楽しめる本格キャンプ体験。コインでギアを揃え、薪をくべ続ける焚き火の音はリアルと評判。虫の声を聞きながらのんびりどうぞ。PC専用。",
    "official": "テントの設営やキャンプギアの設置などちょっぴりリアルなキャンプ体験ができます。You can have a slightly more realistic camping experience by setting up a tent and setting up camping gear."
  },
  {
    "id": "wrld_389014f6-5b8f-42dd-a691-f1cd0b4a9f20",
    "category": "chill",
    "name": "まどろみ ～madoromi~",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 10943,
    "visits": 176467,
    "tags": [
      "チル",
      "一人でゆっくり",
      "睡眠・V睡",
      "夜・夜景",
      "夕暮れ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3103e34d-ba21-46e3-b37a-c1de3563d749/4/256",
    "note": "夕日の中でランタンが空を舞う様子を眺めてチルできるワールド。sakagutiが2025年に公開した作品で、コーヒーを淹れて振る舞えるギミックや、鳥居の見えるベッドルームもあり、広さの違う2つのスペースから好みの場所でまどろめます。Quest対応。",
    "official": "まどろみ ～madoromi~"
  },
  {
    "id": "wrld_0b386d98-fe4d-4a63-afc6-f055fd54c1f7",
    "category": "chill",
    "name": "白室に訪れる幻想樹 The Fantasia Tree Visiting the White Room",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 816,
    "visits": 10183,
    "tags": [
      "チル",
      "写真・撮影",
      "ファンタジー",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_483fb79a-d4e1-4035-aef6-9a7dca5b6845/2/256",
    "note": "真っ白な部屋に大きな幻想樹が現れ、静かな水面と空を泳ぐクジラが漂う幻想的なチルワールド。白に映える景色は撮影にも向いていて、静かに景色を眺めて過ごしたいときに。",
    "official": "白室に現れる幻想樹と静かな水の世界。 空を泳ぐクジラと幾何学構造体が漂う、チル＆撮影向けワールド。 ソロ・少人数での滞在におすすめ。"
  },
  {
    "id": "wrld_b5c47aab-a6ff-4240-8033-2995edb00eb6",
    "category": "chill",
    "name": "Aquarius",
    "subtype": "海・水中",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 174694,
    "visits": 2411750,
    "tags": [
      "海・水中",
      "チル",
      "写真・撮影",
      "フレンドと",
      "水族館"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bac6102a-ebd2-4bf2-a1b0-0510a2c8d9bd/3/256",
    "note": "Fins作の海中水族館。大パノラマの水槽をマンタやクジラが泳ぎ、その迫力と美しさは水族館系随一と評判です。バーや宿泊フロア、図鑑まであり、眺めて学んで長居できる一作。",
    "official": "Aquarius is a multi-biomes aquarium experience, come and gaze upon the marine life, and learn something new. Updated to support Red Sim's Light Volume"
  },
  {
    "id": "wrld_d10ac7c3-5ae1-4c29-b366-4ae6cb796219",
    "category": "chill",
    "name": "真夜中の標本 - Midnight Specimen -",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3568,
    "visits": 55561,
    "tags": [
      "チル",
      "夜・夜景",
      "カフェ・飲食",
      "音楽・ライブ",
      "睡眠・V睡",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0e84963e-5632-401a-be6f-d5ffaadd4de6/7/256",
    "note": "DJスペースのあるチルなカフェ＆バー。『Evermore - 彼方』も手がける_you5248が2025年に公開した作品で、LTCGIを使ったライティングと音の反響にこだわった真夜中の空間です。飲み物や食べ物の小物、ミラーや動画プレイヤー、床の照明スイッチもあり、語らった後は奥の静かな寝室でそのまま眠れます。音楽と夜の雰囲気を楽しみたい人に。Quest・iOS対応。",
    "official": "A chill café ＆ bar with a DJ space. Features atmospheric lighting using LTCGI and Light Volumes, plus a quiet sleep room with RBS SleepKit support./DJ"
  },
  {
    "id": "wrld_a347c49d-e9d7-49d6-bccc-fce77b8aee03",
    "category": "chill",
    "name": "超懐郷の秋澄む夜 -Nostalgic Autumn Night 2024-",
    "subtype": "夜・夜景",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 11339,
    "visits": 114541,
    "tags": [
      "夜・夜景",
      "ノスタルジー",
      "日本",
      "フレンドと",
      "温泉",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6d7d30c7-3977-4add-ad13-8168fb0c9977/5/256",
    "note": "満月に映えるトラス橋と川面の灯篭が美しい、秋の温泉旅館ワールドの夜バージョン。昼版は『本当に泊まりたい温泉旅館』と評される作り込みで、実際に焼けるBBQや打ち上げ花火と一緒に秋の夜長をゆっくり過ごせます。ナイトモードや花火はハンドメニュー（デスクトップはTabキー）から。PC専用。",
    "official": "夜とトラス橋とモダンな温泉！実際に焼けるBBQも！ ハンドメニューでナイトモードとか打ち上げ花火がオンオフできるよ！ ［HandMenu］VR:2Click LeftTrigger / Desktop:Tab Key"
  },
  {
    "id": "wrld_94a383c7-c74a-4c2d-a166-e31598d5ca3b",
    "category": "chill",
    "name": "いちまるはち",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 5,
    "favorites": 2601,
    "visits": 86758,
    "tags": [
      "チル",
      "ゲーム",
      "睡眠・V睡",
      "雨",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d070d2ae-ff36-42c4-b7cc-50a87ce7f32a/3/256",
    "note": "『アメと恋とゲーム』がテーマの小さなチルワールド。すぅ'ω'が2025年に公開した作品で、雨音を調整しながら、動画を見たり眠ったりできるSleep Mode付き。少人数で甘く静かな夜を過ごしたい時に。定員10人、PC専用。",
    "official": "アメと恋とゲーム Mirror / VizVid / QVPen / Sleep Mode 【3/8】雨音スライダー追加"
  },
  {
    "id": "wrld_3b24fdc5-b1e6-4ab7-ab6a-913be1092ef0",
    "category": "chill",
    "name": "SupersonicPrivateJet",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 23944,
    "visits": 802147,
    "tags": [
      "チル",
      "睡眠・V睡",
      "宇宙・空",
      "フレンドと",
      "乗り物",
      "飛行・フライト",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a0e9ee15-285d-4e7e-b683-b049033e1a7b/2/256",
    "note": "超音速プライベートジェットの機内で豪華な空の旅を楽しむワールド。大型ビデオプレイヤーやベッドルームを備え、飛行音を聞きながらのV睡にも使えると紹介されています。Quest対応。",
    "official": "Enjoy your supersonic journey through the skies."
  },
  {
    "id": "wrld_18930fde-634f-463d-a9df-4e61a35f4228",
    "category": "chill",
    "name": "Starlit Canopy",
    "subtype": "夜・夜景",
    "capacity": 20,
    "recommendedCapacity": 5,
    "favorites": 39102,
    "visits": 860116,
    "tags": [
      "チル",
      "夜・夜景",
      "自然・風景",
      "宇宙・空",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c21372ad-1f54-40dd-b16e-afbe327854e6/6/256",
    "note": "木々の隙間から降る星明かりが自然の屋根を作る、夜の森のワールド。민소담_が2025年に公開した作品で、HANI.への謝辞も添えられています。焚き火のある静かな空間で星空を眺めたり、アバター撮影の背景にしたりと、静かに過ごしたい夜に。訪問は80万超。PC専用。",
    "official": "나무 사이의 별빛이 만드는 자연의 지붕 ｜ A natural roof made by starlight between trees ｜ Thx to HANI."
  },
  {
    "id": "wrld_c9ec0f76-2745-4ea2-8a0e-83691361f6cf",
    "category": "chill",
    "name": "KASTEHELMI",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 20,
    "favorites": 12497,
    "visits": 230679,
    "tags": [
      "チル",
      "夜・夜景",
      "自然・風景",
      "フレンドと",
      "睡眠・V睡"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6b5e065c-6314-40af-ac1b-ae2afb43329e/4/256",
    "note": "湖のそばに建つ、白く静かな別荘のチルワールド。月光とランプの明かりが映える部屋、イルミネーションの庭、蛍の道の先の遺跡まで。焚き火を囲んだり、離れでしっとり話したり。ベッド・ペン・動画プレイヤー完備。",
    "official": "湖のそばに建つ、静かで落ち着いた小さな建物のチルワールドです。ベッド、ペン、vizvidプレイヤー完備。「かつてここには小さな神殿があったといいます。」 It is a small villa near the lake. Bed, QV pen, video player."
  },
  {
    "id": "wrld_3561853a-f983-423b-830c-41eecf3dbc4e",
    "category": "chill",
    "name": "ぷらね邸 - PLANETEI",
    "subtype": "チル",
    "capacity": 50,
    "recommendedCapacity": 50,
    "favorites": 34545,
    "visits": 579349,
    "tags": [
      "チル",
      "宇宙・空",
      "睡眠・V睡",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_07da7a4d-798d-4060-a6f7-e5041406a73f/4/256",
    "note": "リビングに本格プラネタリウム投影機がある家。フルスクラッチ再現の機械美と満天の星空を操作する楽しさ、暗闇に目が慣れる仕掛けまで話題のチルワールド。寝落ちにも人気です。",
    "official": "快適なリビングルームで、美しい星空とプラネタリウム投影機の機械美を心行くまでお楽しみください。 Relax in a cozy living room, where you can enjoy the beauty of the starry sky along with the intricate"
  },
  {
    "id": "wrld_c12009e7-0efa-41a9-a01d-7498769084a0",
    "category": "chill",
    "name": "VIRTUAL PURO RESIDENCE 401号室 / バッドばつ丸",
    "subtype": "",
    "capacity": 10,
    "recommendedCapacity": 8,
    "favorites": 2799,
    "visits": 81665,
    "tags": [
      "チル",
      "アニメ・キャラ",
      "フレンドと",
      "睡眠・V睡",
      "写真・撮影",
      "公式コラボ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bd3ab933-5022-42cb-a097-91e23aaf29f1/5/256",
    "note": "バッドばつ丸の部屋に住むように過ごせる、バーチャル・サンリオピューロランドのくつろぎレジデンス。はぴだんぶいのLo-Fiアレンジを聴きながら、レコードや寿司ギターなどの小ネタ探しを。フレンドとのんびりどうぞ。",
    "official": "Virtual Sanrio Puroland に素敵なレジデンスがオープンしたよ！ゆっくりとした時間が流れるお部屋で、お友達と夜通しおしゃべりしたり、ひとりでリラックスしたり、思い思いに過ごしてね！ / A lovely new residence has opened in Virtual Sa"
  },
  {
    "id": "wrld_e7804a7e-9e09-4ec9-bada-2470d89ca0ef",
    "category": "chill",
    "name": "東雲風船 - SHINONOME BALLOON -",
    "subtype": "チル",
    "capacity": 50,
    "recommendedCapacity": 20,
    "favorites": 57326,
    "visits": 696196,
    "tags": [
      "チル",
      "宇宙・空",
      "カフェ・飲食",
      "一人でゆっくり",
      "自然・風景"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_53869e46-7f61-4eed-a81e-9b843bc1bd44/7/256",
    "note": "明け方の空を静かに昇る熱気球のワールド。ゴンドラのカフェでコーヒーを飲み、気嚢内を上がればピアノのある不思議な部屋や隠し場所も。夜明けの絶景を一人で噛みしめたい人に。",
    "official": "明け方の空を旅する熱気球のワールドです。 「新しい世界に踏み出すときの高揚や不安、祈りのような想いを抱えて、熱を宿した気球は、風を感じながら夜明けの空を静かに昇っていきます。」"
  },
  {
    "id": "wrld_603b0786-4501-42a2-b696-daf2bc3f1baa",
    "category": "chill",
    "name": "Boat Inn",
    "subtype": "",
    "capacity": 14,
    "recommendedCapacity": 14,
    "favorites": 27148,
    "visits": 759570,
    "tags": [
      "チル",
      "睡眠・V睡",
      "夜・夜景",
      "フレンドと",
      "乗り物",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_eaaff155-c335-40ad-b170-fb8ac6588abd/2/256",
    "note": "夜の住宅街の水路をゆっくり進む小舟の宿。samemotoが2024年に公開した作品で、波の音と流れ星を眺めながら進み、船内には寝台列車のような秘密基地風の寝室も。少人数で静かにチルやV睡をしたい夜にどうぞ。Quest対応。",
    "official": "Boat Inn"
  },
  {
    "id": "wrld_5ecf1d09-9f98-4d54-afb2-91dab467d712",
    "category": "chill",
    "name": "屋根裏の寝床 - The Attic Bedroom",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4503,
    "visits": 259753,
    "tags": [
      "チル",
      "夜・夜景",
      "睡眠・V睡",
      "一人でゆっくり",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_07f5af8c-f600-4ce3-9798-85beb57f7814/3/256",
    "note": "街の夜景を望む屋根裏の寝床。すべての照明を自由に調光できるので、眠りにつく前の明るさにぴったり合わせられます。雨のギミックも加わり、静かな夜をのんびり過ごしたい人やV睡にどうぞ。",
    "official": "すべての照明は自由に調光できます。街の夜景と共にのんびりとお過ごしください。All lighting can be dimmed freely. Please relax and enjoy your time. v1.0.2 2025/10/02 雨ギミック追加など"
  },
  {
    "id": "wrld_c276f6ca-720b-4bf4-abbe-0b691d0aefcb",
    "category": "chill",
    "name": "深海住居区_B-37812",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 9830,
    "visits": 224042,
    "tags": [
      "チル",
      "海・水中",
      "SF・近未来",
      "睡眠・V睡",
      "カフェ・飲食",
      "ホームワールド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_79caf039-3917-494c-8794-5beb219b0a48/6/256",
    "note": "深海×近未来をテーマにした多機能ホームワールド。アラーム機能付きのV睡空間、秘密のBar、のんびりできる大広間を備え、深海の住人になった気分で長居できる、これから更新も予定される空間です。",
    "official": "深海×近未来をテーマにした多機能ホーム用ワールドです。V睡空間（アラーム機能有り）,秘密のBar,のんびりできる大広間。 その他機能はアップデート予定。 Themed around Deepsea × near-future, this is a multi-functional home worl"
  },
  {
    "id": "wrld_2fc4b16f-a2d3-45b6-a919-a36f257eb021",
    "category": "chill",
    "name": "大樹のそよ風（夜）",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 8,
    "favorites": 4539,
    "visits": 113832,
    "tags": [
      "チル",
      "自然・風景",
      "夜・夜景",
      "睡眠・V睡",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_74b65408-58eb-4672-ba51-83c47dbdc90a/3/256",
    "note": "巨大な大樹のツリーハウスで、焚き火の音と葉音、虫の声に包まれる夜のチルワールド。月と海を望む景色は「すべてが癒し」と評判で、気球で夜空へ出ることも。V睡や考え事をしたい夜におすすめです。",
    "official": "ワールド制作2作目です。 そよ風に揺れる大樹の葉音を聞きながらゆったりできるチルワールドの夜版です。 焚火の音を聞きながらお友達と談笑はいかがでしょうか？ Light Volumes対応しています。"
  },
  {
    "id": "wrld_9fb46a43-22d8-4b7f-b7d1-334158f144d8",
    "category": "chill",
    "name": "星蒼の安息地 -StarReverie Rest-",
    "subtype": "夜・夜景",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 15545,
    "visits": 85547,
    "tags": [
      "夜・夜景",
      "宇宙・空",
      "ファンタジー",
      "写真・撮影",
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5eeb0fd0-7584-4d3e-a7ad-e870b0d15142/2/256",
    "note": "青く光る星空と街灯に照らされた、幻想的な中世風の街並みを歩く安息地。空に浮かぶ月が写真に映えると評判の撮影向きワールドです。容量が大きいので読み込みには余裕を。",
    "official": "ほしぼしのはねやすめ"
  },
  {
    "id": "wrld_e16c5a30-5435-47f8-bf38-44385f6ac3a5",
    "category": "game",
    "name": "VR Narita Airport《NRT/RJAA》",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 30,
    "favorites": 13271,
    "visits": 280479,
    "tags": [
      "乗り物",
      "日本",
      "フレンドと",
      "一人でも",
      "飛行・フライト",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_847f0a00-ea70-42a6-b101-c350603df7ce/16/256",
    "note": "成田空港を再現したフライトシムワールド。11機の航空機から選んで自由に飛べ、編隊飛行やアクロバットも。武器はないのでのんびり空を楽しめます。操作は慣れれば簡単。Quest対応。",
    "official": "11airplanes! Let`s flight training!! formation＆acrobat Flight! 推奨ハッシュタグ「＃VRC_SSYWorld 」日本の成田空港を舞台に自由に飛びましょう！ 豊富な種類の機体を用意してます！武器はついていないのでのんびり飛べますよ～"
  },
  {
    "id": "wrld_790f6352-ad22-458f-828f-ca84728151ce",
    "category": "game",
    "name": "［GAME］ Neon Duel ［EN.JP］",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 16,
    "favorites": 11719,
    "visits": 259847,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "デッキ構築",
      "ローグライト",
      "やり込み"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fbad214d-1200-40e8-879d-1eb083b4bf5f/2/256",
    "note": "カードでデッキを構築し、4×4の盤面で1対1の高速バトルを繰り返すローグライト対戦ゲーム。考える構築パートと反射神経のデュエルが交互に来るのが癖になり、攻略記事が出るほどのやり込み勢も。2〜16人、基本無料。",
    "official": "【EN】 PvP High-speed roguelite action. Build your deck and defeat opponents in fast-paced duels. 2~16 players. 【JP】PvP高速ローグライトアクション。デッキを構築し、高速なデュエルで相手を"
  },
  {
    "id": "wrld_db6b6c18-3f07-4bc0-8223-834a3b1ced60",
    "category": "game",
    "name": "【中の人は？】ニセモノを動きだけで見分けろ！選手権！！",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2080,
    "visits": 8610,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "フルトラ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a3a86237-7426-491a-a28d-29ba0dd02740/1/256",
    "note": "ガイコツたちの動きだけを頼りに、どれがニセモノのフレンドかを当てるゲーム。動きの癖がバレて大盛り上がりします。3人以上推奨で、フルトラがあるとより楽しめます。遊び方は動画プレイヤーの元ネタ動画で確認できます。PC専用。",
    "official": "動きだけで、「どれがニセモノのフレンドか」を当ててもらうゲームです。３人以上推奨です～。 遊び方がわからない人は動画プレイヤーのプレイリストで元ネタ動画が見れます！"
  },
  {
    "id": "wrld_d5669806-037c-4199-a6e8-ca97e9273b29",
    "category": "game",
    "name": "謎解きワールド「Dungeon ＆ Particles」",
    "subtype": "アバター",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 599,
    "visits": 5467,
    "tags": [
      "謎解き",
      "ゲーム",
      "初心者向き",
      "一人でも",
      "演出・パーティクル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7535dd0b-a920-4edf-823a-bb5fa6cfb391/5/256",
    "note": "パーティクルを操って障害物を壊し、仕掛けを動かしながら進む謎解きダンジョン。設定すればアバターのパーティクルでも仕掛けを動かせます。難易度は非常に簡単で、想定クリア時間は約20分。同期がずれたときはリセットボタンを。謎解き入門や、短時間でサクッと遊びたいときに。",
    "official": "想定クリア時間：20分程度、難易度：非常に簡単 パーティクルを使って、障害物を壊し、仕掛けを動かして謎を解け！ワールドに備え付けられた物は勿論、アバターのパーティクルでも仕掛けを動かすことができます！（要設定）性質上、どうしても同期ズレが起こってしまいます。その場合はリセットボタンを活用してください"
  },
  {
    "id": "wrld_e070034f-da8c-4b00-b0f7-1fc66cf85d02",
    "category": "game",
    "name": "Magnetize",
    "subtype": "ゲーム",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 64099,
    "visits": 810813,
    "tags": [
      "ゲーム",
      "ノスタルジー",
      "一人でも",
      "フレンドと",
      "謎解き",
      "パズル",
      "映画祭・受賞作",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2aed45e1-e331-4610-90fb-7f3eeb33d3d3/7/256",
    "note": "磁力で物を操るパズルアドベンチャー。古びたテレビの部屋からゲームの世界へと夢のように空間が繋がる、Raindance最優秀没入ワールド受賞作です。所要30〜60分、Quest対応。",
    "official": "Best Immersive World, Raindance Immersive 2023. The air is thick with the scent of mothballs and old books. Sparse trinkets and treasures fill shelves"
  },
  {
    "id": "wrld_6a452567-b3d7-47ac-95ed-a179712662d9",
    "category": "game",
    "name": "【2人用】 マーダーミステリー「Move out!」【Android対応】",
    "subtype": "自然・風景",
    "capacity": 2,
    "recommendedCapacity": 2,
    "favorites": 4558,
    "visits": 18227,
    "tags": [
      "ゲーム",
      "謎解き",
      "フレンドと",
      "ロールプレイ",
      "2人専用",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7a70b53e-a127-403e-957e-caa53a4ad22a/4/256",
    "note": "明日が引っ越しなのに、部屋に死体が――。2人で遊ぶマーダーミステリーのワールドです。所要時間は約1時間で、途中からは参加できません。ワールド音量は60%以上がおすすめ。Android対応。",
    "official": "明日が引越しなのに、部屋に死体！？ 2人用マーダーミステリーがプレイできるワールドです。所要時間1時間程度。ワールド音量60％以上推奨。途中入場不可なので注意してください。 プレイ感想は「＃引越しマダミス」でお願いします！真相＆エンディング集をシナリオ作者のBooth（森の月shop：https:/"
  },
  {
    "id": "wrld_66f6b5fa-33f6-42a2-9f8a-099d887cb9e9",
    "category": "game",
    "name": "Meta Deck's ~Where to find your favorite~",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4832,
    "visits": 231654,
    "tags": [
      "チル",
      "ゲーム",
      "一人でも",
      "フレンドと",
      "カードゲーム",
      "ボードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8a733500-be36-4183-aef5-b684697ec73a/1/256",
    "note": "毎日でもガチャを引きたい人のために作られた、コレクションカードゲーム『MetaDeck's』で遊べるワールド。カードの種類は今後も増える予定です。チルしてもよし、麻雀してもよしの、ゆるい空気の遊び場です。",
    "official": "日頃ソシャゲでガチャを引けていない、そんなあなたへ。ここはMetaDeck'sが遊べる『みんなの引きたい想い』からできたワールド。MetaDeck'sとは、みんなが毎日ガチャを引きたいという想いからできたコレクションカードゲーム!!今後もカードの種類は増える予定!!Chillしてよし、麻雀してもよし"
  },
  {
    "id": "wrld_6cdbc2d1-dcfa-4b00-b003-b532200cdeed",
    "category": "game",
    "name": "Submarina: The Descent",
    "subtype": "海・水中",
    "capacity": 10,
    "recommendedCapacity": 8,
    "favorites": 10011,
    "visits": 129072,
    "tags": [
      "ゲーム",
      "海・水中",
      "一人でも",
      "フレンドと",
      "探索",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_484004b4-69cc-4b64-b99f-d17831bf08a5/1/256",
    "note": "レーザー銃を手に深海へ潜る、採掘×PvEアクション。jackburfyが2026年に公開した作品で、Xでは、VRChatでサブノーティカのような遊びができると驚かれました。素材を持ち帰って装備を強化するほど深く潜れますが、倒れると収穫をロストする緊張感も。ソロや少人数でじっくり潜りたい人におすすめ。最大10人、Quest・iOS対応。",
    "official": "Grab your laser and dive into the deep. Mine valuable resources, battle sea creatures, return to base with your haul, and upgrade your gear so your cr"
  },
  {
    "id": "wrld_edfe25fd-c303-4591-b96f-5c7205ad66a2",
    "category": "game",
    "name": "一致するまで寝れまテン",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 18628,
    "visits": 165961,
    "tags": [
      "ゲーム",
      "協力",
      "フレンドと",
      "初心者向き",
      "パーティー"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_31fa1fa1-cc75-43fb-9764-5a5514a6f5f8/3/256",
    "note": "お題への回答が全員一致すればクリアの協力パーティーゲーム。2〜10人・30分〜が目安で、大人数ほど難しく、世代や価値観のズレが笑いになります。フレンドの『普通』をどれだけ読めるかが勝負です。",
    "official": "お題に対して全員の回答が一定回数揃えばクリア！な協力ゲームです。共感性や想像力が試されます。 プレイ人数：2～10人、プレイ時間：30min ～"
  },
  {
    "id": "wrld_3cfe4f7e-920e-4bd9-8d55-54c54abf8415",
    "category": "game",
    "name": "夜更かしの部屋 Mahjong ＆ Sleep",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 530,
    "visits": 12632,
    "tags": [
      "チル",
      "睡眠・V睡",
      "フレンドと",
      "海・水中",
      "ボードゲーム",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ed5112b6-e69f-4de3-b0f1-d483f3bebaf2/2/256",
    "note": "麻雀TANKIが2台ある夜更かしの部屋。くもくも_が2026年に公開した作品で、2階にはV睡スペース、寝落ちした人を助ける救済バットなど夜更かし支援ギミックも。麻雀をして、そのまま寝落ちできるチル＆睡眠ワールドです。PC専用。",
    "official": "TANKI2台 2FにV睡スペースあり 寝落ち救済バット・ QVpen・ WavePathSystem搭載"
  },
  {
    "id": "wrld_951f34c1-9e3d-45b9-8c7b-d062aa0f46db",
    "category": "game",
    "name": "ネルフランド（α）",
    "subtype": "ゲーム",
    "capacity": 30,
    "recommendedCapacity": 15,
    "favorites": 10471,
    "visits": 69007,
    "tags": [
      "ゲーム",
      "カジノ・メダル",
      "ファンメイド",
      "再現ワールド",
      "フレンドと",
      "アニメ・キャラ",
      "制作途中"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_95e40ec1-faf9-490c-bb12-8f1db85e1c5d/2/256",
    "note": "エヴァのパチンコで遊べるファンメイドワールド。他にもミニゲームや景品がいろいろ用意されています。α版で仮アセット中心の作りですが、エヴァ×パチンコという組み合わせ自体が目当てになる人向け。容量約255MBと重めです。",
    "official": "エヴァのパチンコで遊べるファンメイドのゲームワールド 他にもミニゲームや景品がいろいろ α版なのでだいたい仮アセット"
  },
  {
    "id": "wrld_49e97e53-1fd8-404a-823d-4c1c3978412a",
    "category": "game",
    "name": "Drum Hero v0.24.x",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 71231,
    "visits": 1701412,
    "tags": [
      "ゲーム",
      "音楽・ライブ",
      "一人でも",
      "フレンドと",
      "音ゲー・リズム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_82207ce0-9506-407c-b44c-2c6ef4a685a0/20/256",
    "note": "2000曲以上の有名曲をドラムで叩く、本格派のリズムゲーム。Clone Heroに着想を得た作品で、奥から流れてくるノーツを叩くたびにコントローラーが震え、Xでは「思ったより演奏感がある」という声も。難易度はEasyからExpertまで、Proモードは体力勝負のガチ仕様です。見た目のカスタマイズや記録の保存にも対応し、一人でスコアを詰めるも、最大8人で一緒に叩くも自由。Quest対応。",
    "official": "2000＋ Songs ｜ PCVR / Quest / Desktop ｜ 1 - 8 Player Co-op ｜ Customization ｜ Persistence ｜ Drum Hero is a rhythm game inspired by Clone Hero but adapte"
  },
  {
    "id": "wrld_c16e4dee-d149-4116-adbc-16bc30b664b0",
    "category": "game",
    "name": "Idle Home",
    "subtype": "チル",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 124727,
    "visits": 7873891,
    "tags": [
      "ゲーム",
      "一人でも",
      "チル",
      "放置・育成",
      "やり込み",
      "英語のみ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5c39de9f-10ae-4e03-8619-0abc89ee6d6a/2/256",
    "note": "ドラゴンを倒して育ち、転生を繰り返して強くなる周回型の放置RPG。Maki Maki作で、VRChat公式のXでも紹介された、訪問780万超の大人気作です。ガチャやペット、転生後に解放される要素などシステムが山ほどあり、Xでは放置で鍵を貯めてガチャを回す稼ぎ方や、ペットを育てて転生を速める進め方が飛び交う一方、「いまだに攻略が分からない」という声も。日本語説明がないので、最初はガイド片手にどうぞ。Quest対応。",
    "official": "Idle game. 放置ゲーの勇者に転生してしまった"
  },
  {
    "id": "wrld_ddc96fe8-3ab5-4e8d-98ce-3a95cf9d4199",
    "category": "game",
    "name": "凸凸デコレーション!!～DecoDecoDecoration!!～",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2930,
    "visits": 24443,
    "tags": [
      "ゲーム",
      "アート・展示",
      "一人でも",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_18f6da90-5968-4ec0-af70-cd79f4462497/4/256",
    "note": "実在しないギャルゲーを、VRChatの中に本当に作ってしまった狂気のワールド。架空の作品が実在する不思議な感覚を味わえる、メタで実験的な一作。",
    "official": "架空のギャルゲーを架空でなくした狂気のワールド。その狂気に触れてもあなたは存在を否定することが出来ますか？"
  },
  {
    "id": "wrld_c0bd0503-5945-42c7-8c85-ffcf55e3d277",
    "category": "game",
    "name": "Life or Coin",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 1471,
    "visits": 7023,
    "tags": [
      "ゲーム",
      "フレンドと",
      "対戦",
      "ボードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_83b30c3d-7e9e-4ee1-afc3-ef4da0f0be06/7/256",
    "note": "作者オリジナルのボードゲーム『Life or Coin』を遊べるワールド。ルールは簡単で、2〜5人・1回10〜15分ほどでサクッと遊べます。",
    "official": "オリジナルボードゲーム「Life or Coin」で遊べるワールドです！簡単ルールでサクッと遊べます！プレイ時間10-15分、人数2-5人。2026/7/2 ターンエンド時に音声が同期されない不具合を修正しました。This is a world where you can play the orig"
  },
  {
    "id": "wrld_a039c3da-3cf5-4fb8-ac48-81b33ad3fa03",
    "category": "game",
    "name": "VRC Rogue ver0.3 Android版リリース！ENDLESSモード実装！",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 12,
    "favorites": 2614,
    "visits": 17221,
    "tags": [
      "ゲーム",
      "ノスタルジー",
      "一人でも",
      "ローグライト",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_96712698-2a47-44cc-84f7-82dce6ea5bbb/4/256",
    "note": "元祖ローグライク『Rogue』をVR向けにリファインした、自動生成ダンジョンRPG。AUTOモードでも進められ、ハイスコアを競えます。動かないときはOWNER RESETを。Quest対応。",
    "official": "【動かない時はOWNER RESET】誰もが知ってるローグライク、その元祖RogueをVR向けにリファイン！AUTOでも進める自動生成ダンジョンRPG。ハイスコアやクリアはXにシェアしてね。＃VRC_Rogue ver0.3.2:同期をまた修正！リザルトに階数追加。今後サウンド、システム改良等を実施"
  },
  {
    "id": "wrld_ae001ea3-ed05-42f0-adf2-3d47efd10a77",
    "category": "game",
    "name": "FISH !",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 23,
    "favorites": 164020,
    "visits": 12558766,
    "tags": [
      "ゲーム",
      "一人でも",
      "チル",
      "釣り",
      "やり込み"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_32c72b6b-2d1b-4d19-8fba-581735500ad2/5/256",
    "note": "竿を育ててレアな魚を釣りまくる、本格派の釣りゲーム。2万種以上の魚と図鑑埋めがあり、ボートで島や砂漠など複数のエリアを巡れます。2026年2月の公開から約2週間で訪問144万を超えてXのトレンドに入り、攻略記事も多数。気づけば数時間溶けるやり込み系で、基本は一人で黙々と、たまにフレンドと渦周回も。少しホラーな要素もあります。",
    "official": "［Enjoy a full progression system and catch over 20000＋ unique fish! ］·［ CATCH ≻ SELL ≻ UPGRADE! ］·［Start Fishing and become the strongest Angler!］FISH"
  },
  {
    "id": "wrld_89fb02ff-fd0c-41e5-90f9-53fd5390cdd5",
    "category": "game",
    "name": "ライノシティの亡霊 / The Phantom of RhinoCity",
    "subtype": "ゲーム",
    "capacity": 8,
    "recommendedCapacity": 1,
    "favorites": 6909,
    "visits": 20557,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "ストーリー",
      "謎解き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_40570c90-0c82-4c29-904e-78fb7891b0a8/2/256",
    "note": "探偵の助手として街『ライノシティ』を捜査する、フルボイスの本格探索アドベンチャー。選択で結末が変わる全5エンディングで、クリアまで約3時間。シナリオの良さで評判の名作です。少人数で腰を据えてどうぞ。",
    "official": "君が決める、 君だけが救える。 探偵の助手として街を探索する。本格アドベンチャーゲームワールド。"
  },
  {
    "id": "wrld_e851ae68-784b-41f4-977a-7753d778fde9",
    "category": "game",
    "name": "Navy Blue",
    "subtype": "電車・駅",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 16614,
    "visits": 145143,
    "tags": [
      "ゲーム",
      "対戦",
      "乗り物",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0e968135-30be-41b3-bbe1-4cafe3bb70e6/3/256",
    "note": "軍艦を操って戦う、VRChat初の艦隊戦ゲーム。『VRChat BattleField』なども手がけるとみー（Tommy）作で、Patreon限定の先行公開を経て2025年に一般公開されました。駆逐・巡洋・戦艦から艦を選べば最大24人の大海戦に。魚雷を抱えて突っ込む駆逐艦が楽しいという声もあり、本家World of Warshipsよりずっとシンプルで、カジュアルに海戦ごっこが楽しめます。ゲーム系の集まりでもよく遊ばれています。Quest対応。",
    "official": "総員、戦闘配置！ カジュアルに遊べる、World of Warshipsのような艦隊戦ゲームです。 Action stations! Casual naval shooter game like World of Warships. ［24Players, Desktop / Android com"
  },
  {
    "id": "wrld_002856e4-68d1-4110-b53c-721af3384aca",
    "category": "game",
    "name": "taktie's Gun Dynamics【体験版 / Trial】",
    "subtype": "ゲーム",
    "capacity": 48,
    "recommendedCapacity": 48,
    "favorites": 35359,
    "visits": 444723,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "シューター・FPS",
      "体験版"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a0b274c9-13ca-4e9f-a5d0-5777b6ec8640/8/256",
    "note": "リアルな銃器操作で知られる『Gun Dynamics』の体験版ワールド。本編と違い二丁持ちができた版として知られます。今から入るなら、チーム戦や改造システムが揃った本編版がおすすめです。",
    "official": "リアル重視な射撃、戦闘を楽しめます。 Xで「＃TGD_VRC」を付けてフィードバックをよろしくお願い致します！！ Desktop user: F key to Reload. デスクトップの方は、「Fキー」で銃のリロードが可能です。 2026-04-19のアップデート：新武器 P90 追加"
  },
  {
    "id": "wrld_9a51b365-d6cc-42e6-901a-54ceb46b94ef",
    "category": "game",
    "name": "Super Tower Defense",
    "subtype": "ゲーム",
    "capacity": 30,
    "recommendedCapacity": 15,
    "favorites": 148933,
    "visits": 3534570,
    "tags": [
      "ゲーム",
      "協力",
      "フレンドと",
      "初心者向き",
      "タワーディフェンス",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ce3b61c0-4a9f-4d16-b1c1-d2ba307cd5ee/13/256",
    "note": "6種類のタワーを配置して、押し寄せる車の波からハートを守る協力タワーディフェンス。DragonCookieが2021年に公開した作品で、アップデートでタワーごとに固有の強化が加わり、車を過去へ送り返すタワーまであります。全50ウェーブ＋エンドレスで、配置と強化を相談しながら長く遊べます。ルールが分かりやすく作りも丁寧で、おしゃべりしながら遊ぶのにぴったりと紹介されています。Quest対応。",
    "official": "A highly polished, easy to understand Tower Defense game made for VRChat. Place down towers to stop the Cars from reaching your hearts. Both Desktop a"
  },
  {
    "id": "wrld_f13cb3f3-aec3-4d63-a919-90c0157d54e1",
    "category": "game",
    "name": "ヴィランの最終弁論~悪役の独白作成ゲーム~",
    "subtype": "ゲーム",
    "capacity": 14,
    "recommendedCapacity": 14,
    "favorites": 1166,
    "visits": 4908,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "カードゲーム",
      "トークゲーム",
      "軽量"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6ae8926a-4785-4292-bef2-2f6776f8e1d5/3/256",
    "note": "カードを並び替えて悪役の最期の独白を作る言葉遊びゲーム。いちばん『許したくなる』独白を作った人の勝ち。大喜利感覚でフレンドと盛り上がれる、軽量22MBのカードゲーム。",
    "official": "カードを並び替えてヴィランの独白を作るゲームです。 お好きなアバターをヴィランとして、最も許したくなる独白を作った人が勝ちです。"
  },
  {
    "id": "wrld_585b32dd-0655-4b90-80c3-ded809094cd3",
    "category": "game",
    "name": "ぶいちゃパーティー CUBEver",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 11268,
    "visits": 725361,
    "tags": [
      "ゲーム",
      "一人でも",
      "初心者向き",
      "やり込み",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_69f1548d-1f7f-45f7-91a8-0bb941257311/9/256",
    "note": "今はなき東方のブラウザゲームをイメージした、コマンド選択式のRPG。職業を選んでダンジョンを進み、レベル上限の先は転生でさらに強くなるやり込み型です。パチンコも遊べます。操作はクリック中心で初心者でも簡単、約12MBと軽くQuest・iOS対応。一人でも黙々と遊べます。",
    "official": "やりこみ要素が多い、コマンドRPGで遊べるiOS対応軽量ゲームワールドです！今はもう無くなってしまった、某東方のブラウザゲームをイメージして作成しています。パチンコもあ～るよ"
  },
  {
    "id": "wrld_47a121bc-3881-40f6-9b5d-475c8b779a23",
    "category": "game",
    "name": "CAN'T STOP!",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1807,
    "visits": 13438,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "ボードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b3b46568-b533-4dc9-b961-fb854cda9027/7/256",
    "note": "4つのサイコロで11本のレーンを進み、先に3レーン制覇を目指すボードゲーム。欲張るとバーストする、引き際の見極めが熱いチキンレース。2〜4人用。",
    "official": "4つのサイコロを使って11本のレーンを進み、先に3レーン制覇を目指す！運とリスク管理の駆け引きが魅力の戦略ゲーム／ Use four dice to advance along 11 lanes, aiming to conquer three lanes first! A strategic ga"
  },
  {
    "id": "wrld_1fa414c2-b535-44c0-93f3-b8e3e83e7d5b",
    "category": "game",
    "name": "GameMusicQuiz",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 8437,
    "visits": 70169,
    "tags": [
      "ゲーム",
      "音楽・ライブ",
      "ノスタルジー",
      "フレンドと",
      "クイズ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_14203cb3-d66a-4aad-b61f-5662b31c2d79/3/256",
    "note": "流れるゲームBGMがどのソフトの曲か当てる音楽クイズ。Hitorinoyoruが2026年に公開した作品で、レトロゲームに偏った約1400問から、難易度や回答時間を選んで出題できます。正解を競いつつ『この曲いいよね』と語らうのが楽しい、ゲーム音楽好きの集まりに。PC専用。",
    "official": "レトロゲームに偏った音楽クイズがランダムで出題されるワールド。 1400問ほどあります。 retro video game music quiz"
  },
  {
    "id": "wrld_34b77016-f281-44b5-bcf4-152f0b200490",
    "category": "game",
    "name": "北風を追いかけて",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 409,
    "visits": 3960,
    "tags": [
      "チル",
      "海・水中",
      "乗り物",
      "一人でも",
      "自然・風景",
      "探索"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_57f015a0-3681-43a6-adf3-0fc614e8ccf6/5/256",
    "note": "霧に包まれた浜辺から始まる、長い徒歩とバイクの旅。北風の聴こえる方向を目指して進む、静かで没入感のある移動系チルワールドです。ワールド内の曲はすべて作者セリアの自作曲。退出時の位置は保存されますが、リスポーンするとリセットされるので注意。",
    "official": "霧に包まれた浜辺で長い長い徒歩旅・バイク旅ができます。北風の聴こえる方向へ進んでください。ワールド退出時に位置情報が保存されますが、リスポーンでリセットされますのでご注意。なお、ワールド内楽曲は全てセリアの自作曲です。"
  },
  {
    "id": "wrld_c8401de9-ab65-41f8-9a1d-bb34cb9a9e8b",
    "category": "game",
    "name": "Udon Chicken Horse",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 38183,
    "visits": 447829,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8748abb2-81db-4f00-a3bc-722b5379dca5/3/256",
    "note": "足場やトラップを置いてコースを作り、誰より早くゴールを目指す2〜4人対戦。まかん｜coffeeによる『Ultimate Chicken Horse』へのリスペクト作で、遊んだ人が「アルチキそのまますぎて面白かった」と言うほどの再現度です。置いた足場は次のラウンドにも残るので、自分に有利に、他人には意地悪に置くほど後半はカオスで盛り上がります。ルール把握に1戦使うつもりで。Quest対応。",
    "official": "Multiplayer PvP game （2~4） - Create a path that gives you an advantage and reach the goal faster than anyone else!"
  },
  {
    "id": "wrld_9a17a599-e79d-4b12-b9fb-3bc3fc95fcdc",
    "category": "game",
    "name": "Fujino-GT",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 35,
    "favorites": 4991,
    "visits": 66980,
    "tags": [
      "乗り物",
      "チル",
      "写真・撮影",
      "フレンドと",
      "レース",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1853ad39-8381-4755-b467-3380ee9268f0/13/256",
    "note": "『日本のモータースポーツにもっと活気を』という思いで作られた、GTカーの雰囲気を味わうレース＆チルのサーキットワールド。走行ガイドもあり、本気のタイムアタックも、夕焼けを背景にした撮影や観戦も自由。走る人も撮る人も楽しめます。Quest・iOS対応。",
    "official": "日本のモータースポーツにもっと活気を！｜走行ガイド設置｜GTカーの「雰囲気を楽しむ」ことを重視したレース＆チルワールドです。｜写真を撮りたい人も、走行感を味わいたい人も、FujinoGTで自由な時間をお過ごしください｜＃FujinoGT｜ChikuwaVehicleSystem2 v2.35｜QVペ"
  },
  {
    "id": "wrld_544e7879-d870-42a2-9c7a-99eb95a8e62f",
    "category": "game",
    "name": "NeoWorlds",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 68431,
    "visits": 743253,
    "tags": [
      "ゲーム",
      "ノスタルジー",
      "フレンドと",
      "一人でも",
      "ドット絵・2D",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_099180d0-9656-460d-8db7-3b937a734976/20/256",
    "note": "自分のアバターがドット絵に変身する、古いオンラインゲーム風のワールド。Widget365作で、2024年の公開時には「VRChatを越えた何か」とXで大きな話題になりました。8bit時代のクォータービューRPGのような2Dの街をフレンドと歩き、ミニゲームで稼いだコインで家具を買って自宅を飾れます。揺れものやアバターのギミックもドット絵に反映され、ハロウィンなど期間限定のイベントも。デスクトップモード推奨で、身長2mを超えるアバターは見切れることがあります。",
    "official": "NeoWorlds transforms you and your friends into pixelated sprites! Explore rich environments, play minigames to earn coins, and buy furniture to decora"
  },
  {
    "id": "wrld_46f3001d-5e7c-4cda-b68b-0d683211ee45",
    "category": "game",
    "name": "ChickenTopia",
    "subtype": "チル",
    "capacity": 30,
    "recommendedCapacity": 8,
    "favorites": 39786,
    "visits": 702948,
    "tags": [
      "チル",
      "ゲーム",
      "一人でも",
      "フレンドと",
      "放置・育成",
      "動物",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8b0b050b-52df-4a91-9b52-fbd619bdc044/1/256",
    "note": "ニワトリを育てる居心地のいい牧場ワールド。ローポリのアバターや素材で知られるMankeyが2024年に公開しました。種をあげて卵を集め、育てたニワトリを売ってレアな卵を狙います。王冠を被せたり軍団を作ったりと、ゆるく戯れるのも楽しみ方のひとつ。軽量で、Quest対応。",
    "official": "A cozy world to raise some chickens! ~ Feed the chickens seeds to get regular eggs, raise your chickens and sell regular chickens to get rare eggs! ~"
  },
  {
    "id": "wrld_241bfaf5-8c8e-4805-8c33-8f6087e65eaf",
    "category": "game",
    "name": "Rhapsody ep.2 - Scherzando",
    "subtype": "",
    "capacity": 6,
    "recommendedCapacity": 3,
    "favorites": 966,
    "visits": 7960,
    "tags": [
      "謎解き",
      "ストーリー",
      "一人でも",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f9b47212-c0b9-4b51-a5ca-4b6ecf25f707/2/256",
    "note": "音楽をテーマにした連作ストーリーの第2話『Scherzando（戯れるように）』。MinaFrancescaが2026年に公開した、ゴシックな殺人ミステリー×ARGの謎解きアドベンチャーです。定員6人、PC専用。前作『Grave』からどうぞ。",
    "official": "Rhapsody ep.2 - Scherzando"
  },
  {
    "id": "wrld_b999a5e6-5ea9-4120-bd88-f8db385bbca6",
    "category": "game",
    "name": "Rhapsody ep.1 - Grave",
    "subtype": "ファンタジー",
    "capacity": 6,
    "recommendedCapacity": 3,
    "favorites": 9794,
    "visits": 43468,
    "tags": [
      "ゲーム",
      "ファンタジー",
      "一人でも",
      "ストーリー",
      "謎解き",
      "大容量注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f801cc2d-3a76-4af1-b589-7b12fca6a00a/3/256",
    "note": "崩壊したダークファンタジー世界を巡る、謎解き＆アクションアドベンチャーの連作第1話。MinaFrancescaが2024年に公開した作品で、スキルツリーで剣技と魔法を育て、広大な荒廃世界と滅んだ都を探索します。容量約1GBと非常に重い、腰を据えて遊ぶPC専用の大作。",
    "official": "Rhapsody ep.1 - Grave"
  },
  {
    "id": "wrld_a0ca6745-dadc-4358-9d93-272af449a73e",
    "category": "game",
    "name": "Danmazma9000",
    "subtype": "ホラー・不気味",
    "capacity": 17,
    "recommendedCapacity": 17,
    "favorites": 2086,
    "visits": 11821,
    "tags": [
      "ゲーム",
      "アニメ・キャラ",
      "ホラー・不気味",
      "ストーリー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_de1379e7-3536-4a79-86fe-665139435f90/3/256",
    "note": "週刊連載されたVRアニメの世界に入り、登場人物の一員として悪霊と戦うゲーム×アニメ×アドベンチャー。全5話フルボイス。PC専用。",
    "official": "ゲーム×アニメ×アドベンチャーワールド。物語の登場人物となって主人公たちと一緒に悪霊と戦え！世界初の週刊連載VRアニメアドベンチャー！毎週月曜夜9時（日本時間）最新話更新！ / A Game × Anime × Adventure world. Step into the story as a he"
  },
  {
    "id": "wrld_828f50ea-6db7-467a-8188-01af61dca6e6",
    "category": "game",
    "name": "Jigsaw Puzzles Udon",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 2707,
    "visits": 58958,
    "tags": [
      "ゲーム",
      "協力",
      "フレンドと",
      "集会・交流",
      "パズル",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3f9c61ef-e340-42c7-a827-d0e8879ae9b7/2/256",
    "note": "フレンドと一緒にジグソーパズルを組み立てるワールド。gamerpuppyが2021年に公開した作品で、その場で撮った写真をパズルにすることもでき、200ピース超の大作にも挑戦できます。Quest対応。",
    "official": "gamerpuppy's Jigsaw Puzzle World! Put together jigsaw puzzles with your friends! 12 images, 200＋ pieces"
  },
  {
    "id": "wrld_1b393079-93ba-4370-9c51-fe26cfd090c5",
    "category": "game",
    "name": "PaperVRC Prototype",
    "subtype": "",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 22315,
    "visits": 170261,
    "tags": [
      "ゲーム",
      "フレンドと",
      "写真・撮影",
      "初心者向き",
      "ギミック",
      "ネタ・ミーム",
      "軽量"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7494509e-5704-44e2-95bd-f1d631887181/3/256",
    "note": "入るとアバターがペーパーマリオみたいにペラペラの紙姿になるギミックワールド。トコトコ歩く姿がかわいいと話題で、フレンド同士で紙になって写真を撮るだけでも楽しい、軽量な小ネタワールドです。",
    "official": "man i love paper mario"
  },
  {
    "id": "wrld_eeea5afd-a21b-4d04-aae7-59b177387487",
    "category": "game",
    "name": "Tank Combat Simulator ｜ TCS ｜ UPD Helicopters",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1155,
    "visits": 12659,
    "tags": [
      "ゲーム",
      "チル",
      "協力",
      "フレンドと",
      "乗り物"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ab972499-f99c-43cd-992f-d25aa20ae2ab/1/256",
    "note": "戦車でフレンドと協力して敵を撃破していく戦闘シミュレーター。アップデートでヘリコプターも加わりました。戦車ワールドの中では人気のある一作です。",
    "official": "This is a interactive battle game where you can work with you friends to destroy the ememy. Fly helicopters, fire tanks, and shot guns to destroy the"
  },
  {
    "id": "wrld_b6712de0-16a7-475d-bfa5-844849276a0d",
    "category": "game",
    "name": "Voxel Phone",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 20,
    "favorites": 8159,
    "visits": 61901,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "お絵描き",
      "VR推奨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e1191f2d-cd0e-466f-889f-110a01bf20d1/6/256",
    "note": "お題をブロック（ボクセル）で作って次の人に伝える、Gartic Phoneの立体版のような伝言ゲーム。絵心がなくても勝ち負けがなくても盛り上がり、完成した力作は保存もできます。みんなで眺めて笑うパーティーゲーム。VR推奨。",
    "official": "お題をブロックで作ってそれが何かを当てるゲームです。複数回プレイ時に前の作品が残る不具合を修正しました。"
  },
  {
    "id": "wrld_ad6e67b7-4ba4-4ac7-84fd-ae3e31067761",
    "category": "game",
    "name": "お気持ちツイートバトル Okimochi Tweet Battle",
    "subtype": "ゲーム",
    "capacity": 50,
    "recommendedCapacity": 10,
    "favorites": 12754,
    "visits": 83107,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "トークゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_27e44310-c502-4407-88c1-5b6454c015a6/3/256",
    "note": "Xの『お気持ちツイート』風の文面を組み合わせて、最強のお気持ちを作る3〜5人用のゲーム。カードゲーム『オジサンメッセージ』のパロディで、笑いと修羅場が共存する危険な面白さです。作者も『喧嘩やグループ崩壊の責任は取りません』と念を押すほどなので、遊ぶ相手は冗談の通じるフレンドに。",
    "official": "「オジサンメッセージ」のパロディゲームです。 対象人数3-5人 このゲームにて発生した喧嘩、お塩、グループ崩壊の責任は一切取りません。冗談の通じるフレンドと遊んでね。"
  },
  {
    "id": "wrld_4fa2282b-47c2-45d2-986d-d711ab9030f4",
    "category": "game",
    "name": "フレンド解像度チェック",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 13233,
    "visits": 99333,
    "tags": [
      "ゲーム",
      "フレンドと",
      "初心者向き",
      "トークゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_465296fc-9042-4c5c-8b0e-73c97bf1781b/4/256",
    "note": "フレンドの2択回答をみんなで予測するコミュニケーションゲーム。選ばれた1人の答えを外すと脱落、最後まで当て続けた人の勝ちです。質問は簡単でサクサク進み、『あの人ならこっち』という読み合いが盛り上がります。Quest対応。",
    "official": "フレンドの回答を予測するゲームワールドです。ランダムに選ばれた１人が先に10問の質問に答えます。残りの参加者は選ばれた１人がどちらの回答をしたかを予測します。予測を外した人はその時点で脱落となり、最も多く回答を予測できた人の勝利です。"
  },
  {
    "id": "wrld_de716924-2f58-4f6f-9631-f52fc96ab01a",
    "category": "game",
    "name": "トークゲーム【すこスコア!】",
    "subtype": "ゲーム",
    "capacity": 30,
    "recommendedCapacity": 12,
    "favorites": 5162,
    "visits": 33682,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "集会・交流",
      "トークゲーム",
      "軽量"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6d3e2f97-ddb9-4ce8-9441-8916efc6aae7/3/256",
    "note": "みんなの『好き』を当て合うトークゲーム。親の好きを書いて一致度で得点、ニアミス賞のような柔軟な採点も楽しい、会話が主役の2〜12人向けゲームです。容量約9MBと軽いのも魅力。",
    "official": "好きを見抜くトークゲーム「すこスコア!」が遊べるワールドです。 プレイ人数 2~12人。感想は＃すこスコア へ。"
  },
  {
    "id": "wrld_e4908cea-023b-4749-9ad7-a898b12996e7",
    "category": "game",
    "name": "Test Pilots",
    "subtype": "ゲーム",
    "capacity": 44,
    "recommendedCapacity": 16,
    "favorites": 485757,
    "visits": 17876432,
    "tags": [
      "ゲーム",
      "乗り物",
      "フレンドと",
      "初心者向き",
      "飛行・フライト"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2b167073-abc0-4b14-b8e5-2c59463996ae/23/256",
    "note": "VRChatで飛行機が飛ぶ文化が生まれた元祖ワールド。戦闘機からヘリ、水上機、気球まで20種以上の乗り物を乗り比べられます。まずここで飛んでみる、航空入門の定番です。",
    "official": "For those who love flying."
  },
  {
    "id": "wrld_0679be89-ab9d-46c3-b5f5-b7ed05a78022",
    "category": "game",
    "name": "Aircraft Carrier Jets: F-14",
    "subtype": "乗り物",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 216137,
    "visits": 6875526,
    "tags": [
      "乗り物",
      "ゲーム",
      "対戦",
      "フレンドと",
      "飛行・フライト",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9163ee63-177a-420b-a023-dfef508b2c8b/26/256",
    "note": "空母からF-14トムキャットなどの艦載機を飛ばせる、Zweikaku作の空戦ワールド。地上基地もあり、ミサイルを撃ち合うドッグファイトも楽しめます。VRChat公式のXでも紹介され、訪問は680万超。本格シミュレーターより気軽なアーケード寄りの操縦感で、居合わせた人と編隊飛行したり空戦したりして何時間も過ごせる、という声も。飛行機好きのフレンド同士でどうぞ。Quest対応。",
    "official": "Aircraft Carrier Jets: F-14 ｜ Dominate the skies with the Iconic Tomcat and more."
  },
  {
    "id": "wrld_aeba3422-1543-4e6f-bd9d-0f41ddc5c4f8",
    "category": "game",
    "name": "VR Poker",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 24,
    "favorites": 55494,
    "visits": 2046286,
    "tags": [
      "ゲーム",
      "カフェ・飲食",
      "フレンドと",
      "対戦",
      "カードゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f48bcb8e-e85a-4e4f-a1ce-3868c0311b8c/2/256",
    "note": "チップ管理も配札も半自動の、本格テキサスホールデムワールド。Nex1942作で、2026年2月の公開から1年足らずで訪問200万を超えました。1ゲーム約1分と回転が速く、トーナメントも楽しめます。用語は多めなので、最初は常連に教わりながらがおすすめ。Quest対応。",
    "official": "A Texas Hold'em world for poker, chat ＆ drink."
  },
  {
    "id": "wrld_7a84ca42-09ab-427b-bcc0-eba659373d97",
    "category": "game",
    "name": "君って...",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 6535,
    "visits": 41098,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "集会・交流",
      "トークゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2d23c7d8-954c-4797-a821-63c3036c1512/7/256",
    "note": "フレンド1人がお題になり、みんながその人について匿名で答えるパーティークイズ。回答へのグッド／バッド評価でコマが進みます。仲の良いフレンド同士ほど盛り上がる、3〜10人向け。Quest対応。",
    "official": "【プレイ人数 3~10人】 あなたがお題のパーティークイズゲームワールド！ 「君ってこうだよね」と確信をつくか、気に入られるような回答をして評価を稼ごう！ 【v0.04 05/12更新】"
  },
  {
    "id": "wrld_94028898-f92c-4565-9900-4a676d1bad77",
    "category": "game",
    "name": "VRBricks",
    "subtype": "",
    "capacity": 80,
    "recommendedCapacity": 32,
    "favorites": 65609,
    "visits": 1111504,
    "tags": [
      "ゲーム",
      "フレンドと",
      "一人でも",
      "クラフト・建築",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3b90a6f5-2fc2-4f5b-82d2-9b4dfacb5110/3/256",
    "note": "レゴのようなブロック200種超で何でも作れるサンドボックス。Yuiko作で、2024年の公開直後にVRChat公式のクロスプラットフォーム注目ワールドに選ばれました。20色以上のブロックを128×128の盤面に組み、色の塗り替えや取り消し、セーブにも対応。動画プレイヤーやスピーカー、ミラー、照明になる特殊ブロックもあり、一人で黙々と大作を作るのも、フレンドと共同建築するのも楽しめます。UIに慣れるまでが少し大変です。Quest対応。",
    "official": "A creative sandbox world where you can build anything out of plastic bricks."
  },
  {
    "id": "wrld_7f92b9b6-f609-45f9-b0e1-483f2e2f8d80",
    "category": "game",
    "name": "8番マグロ",
    "subtype": "",
    "capacity": 12,
    "recommendedCapacity": 12,
    "favorites": 4715,
    "visits": 63552,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "異変探し",
      "謎解き",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_80fd33c7-b3d7-498c-9e8a-99b1e19fcbf9/3/256",
    "note": "『8番出口』系の間違い探し脱出ゲーム。Coicoi0055が2025年に公開した作品で、マグロの住民が通勤に使う駅の地下通路で、全15個の異変を見つけて進みます。驚かし要素は本家より控えめで理不尽な謎もなく、雑談しながら遊べると好評（ただし一つだけ大きなびっくりがあるので油断は禁物）。続編の『8番マグロTHE・HORROR』もあります。14MBと軽量で、定員12人。一人でも挑戦でき、短時間でサクッと遊べます。Quest対応。",
    "official": ""
  },
  {
    "id": "wrld_bbb295d1-8f7b-4a61-9826-9a84a5fa53f4",
    "category": "game",
    "name": "Just 5000兆円 宝くじ",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 8,
    "favorites": 152,
    "visits": 4106,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "ネタ・ミーム",
      "軽量",
      "カジノ・メダル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_dd15a324-9f8c-4bb7-a2b7-c1cd178087c3/1/256",
    "note": "宝くじで5000兆円の大当たりを狙うだけの、超軽量3.9MBネタワールド。Shijima Mei VFJが2026年に公開した作品で、当たるか当たらないかは運次第。フレンドとの暇つぶしや、ワールド巡りの箸休めにどうぞ。PC専用。",
    "official": "宝くじで5000兆円を当てましょう！"
  },
  {
    "id": "wrld_5a528c03-01f5-4399-8f0d-cbcc5c305a57",
    "category": "game",
    "name": "VRWare",
    "subtype": "ゲーム",
    "capacity": 80,
    "recommendedCapacity": 30,
    "favorites": 61134,
    "visits": 686791,
    "tags": [
      "ゲーム",
      "フレンドと",
      "対戦",
      "初心者向き",
      "パーティー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a65e1549-f8fd-43f7-93cd-beaa700a638e/8/256",
    "note": "『メイドインワリオ』風のミニゲームを次々にこなしてクリア数を競う、テンポ最速のパーティゲーム。作者のHaï~が2009年にGarry's Mod向けに作った『GarryWare』の続編です。1回約10分でサクッと盛り上がれます。これはPC版で、Quest版は別のワールドになっているのでご注意を。",
    "official": "Challenge your friends to a series of fast-paced minigames!次々と出されるミニゲームでフレンドと挑戦！"
  },
  {
    "id": "wrld_a7684a86-e2af-47df-8ff1-80bc137973e4",
    "category": "game",
    "name": "The Beyblade Pitstop",
    "subtype": "チル",
    "capacity": 50,
    "recommendedCapacity": 25,
    "favorites": 6412,
    "visits": 68628,
    "tags": [
      "チル",
      "ゲーム",
      "集会・交流",
      "フレンドと",
      "対戦",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0d57be38-8b29-4d2f-ab34-8b2d54114df8/11/256",
    "note": "ベイブレードがテーマの、まったり過ごせるハングアウトワールド。JtheDuelistが2026年に公開した作品で、63種類のベイから選んでフレンドと対戦でき、熱くなるのも、ベイを回しながらゆるく集まるのもどちらでも。Quest・iOS対応。",
    "official": "Welcome to The Beyblade Pitstop- A chill, Beyblade-themed hangout world! Here, you can battle Beyblades against your friends using any of the 63 beys"
  },
  {
    "id": "wrld_038969d5-1a77-43d9-a435-ad1e9bf12542",
    "category": "game",
    "name": "おえかき探偵 -Drawing Detective-",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 35242,
    "visits": 329620,
    "tags": [
      "チル",
      "ゲーム",
      "フレンドと",
      "初心者向き",
      "お絵描き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5177bd2d-bec5-43bc-aaaf-0688d4e25c8f/11/256",
    "note": "お題の絵を描いて当て合う、2〜16人の鉄板パーティゲーム。mikinel作で、ゲーム系の集まりやおもてなしイベントで繰り返し遊ばれ、誰かを案内するときは必ず連れて行くという人もいます。3つのお題から描けるものを選べるし、文字数ヒントもあるので絵心がなくても大丈夫。1回10分から、Quest対応。",
    "official": "お題を選んで絵を描いて、何を描いているか当てよう! プレイヤー人数 : 2~16"
  },
  {
    "id": "wrld_b3a73b43-a0e5-4835-91f1-2dfd75a11fcc",
    "category": "game",
    "name": "Just 100の質問",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 9660,
    "visits": 72569,
    "tags": [
      "ゲーム",
      "集会・交流",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "トークゲーム",
      "軽量"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f54426ce-566b-4569-9284-dc7329035df7/5/256",
    "note": "ぽこピーでおなじみの『100の質問』にみんなで答えていくワールド。1問3〜5秒のテンポで進むので、初対面同士の自己紹介にも、配信の企画にも使いやすい交流ゲームです。約2.3MBと超軽量で、サクッと始められます。",
    "official": "ぽこピーでおなじみの「100の質問」ができるワールドです。 合計100個の質問が出題されるので、 1問3~5秒くらいでテンポよく回答していってください。 フレンドとの交流や配信･動画撮影に使っていただけたら幸いです。"
  },
  {
    "id": "wrld_9907d48d-47e6-4139-b859-297396ed0f13",
    "category": "game",
    "name": "A Game About Crates",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 45452,
    "visits": 3295968,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "放置・育成"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b2786230-7ccc-4a90-84b6-e95f6a4e18fa/2/256",
    "note": "巨大企業CRATE社の社員として、ひたすら箱を開けて数字を増やしていく2026年の大ヒット放置ゲーム。アップグレードや昇進、ガチャで桁が跳ね上がる快感と、雑談しながら進められる居心地の良さが人気です。進行は保存されます。",
    "official": "VERSION 1.4.4 - You are an employee of the CRATE Mega Corporation - your task? Open More Crates. Upgrades, Promotions with a side of Gambling and NUMB"
  },
  {
    "id": "wrld_17ba579c-19c3-4644-8753-ab51e4e87ae0",
    "category": "game",
    "name": "Armored Udon Universal Edition WIP",
    "subtype": "ゲーム",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 5890,
    "visits": 32984,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "SF・近未来",
      "制作途中"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6e03ea8c-fd60-45ea-9614-44ae3330c56b/6/256",
    "note": "アーマード・コア風の高速メカアクション。自機をカスタマイズして最大3対3で戦うチーム対戦ゲームです。VR／Desktop両対応、VRでは視点切替も可能。メカ好きのフレンドとどうぞ。開発中版。",
    "official": "8/5 ミサイルの同期を改善しました。 ＡCライクなハイスピードアクション×メカカスタマイズゲームワールド 最大3対3でチーム対戦ができます。 VR、Desktop両対応 ３人称視点と１人称視点を選択可能（VRのみ） Armored core like high speed shooting gam"
  },
  {
    "id": "wrld_0e0f81ba-833e-4abb-a4c6-ec3c4fd0f11d",
    "category": "game",
    "name": "掘りほりほりっく（DigDig Holic）",
    "subtype": "自然・風景",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 7502,
    "visits": 60849,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "クラフト・建築",
      "放置・育成",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e72dee03-801c-4f75-b70d-0b6929139ad0/2/256",
    "note": "洞窟に潜って鉱石を掘り、お気に入りのツルハシを作る採掘＆クラフトゲーム。掘る→作る→また潜る作業ループがクセになると評判で、進行は自動セーブ。一人でコツコツ派にも。最大10人、Quest対応。",
    "official": "〈2026/04/10アップデート〉アーリーアクセス中！ 最高にハマれる採掘＆クラフトゲームが登場！ 洞窟に潜り、鉱石を掘り、お気に入りのツルハシを作ろう！進行状況は自動セーブです！ 【対応】 PC/Desktop/Quest 日本語/English【してるよ！】 不具合があったらリジョインか立て直"
  },
  {
    "id": "wrld_14750dd6-26a1-4edb-ae67-cac5bcd9ed6a",
    "category": "game",
    "name": "Prison Escape",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 18,
    "favorites": 298246,
    "visits": 39476392,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "集会・交流",
      "ロールプレイ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_90027981-6a50-4097-86e7-d7ea62050a14/13/256",
    "note": "Ostinyo作、囚人と看守に分かれて戦う脱獄ゲーム。隠し通路やアイテムで逃げるか、巡回と監視で阻止するかはプレイヤー次第で、洗濯室で火事を起こして看守の気をそらしたり、火災報知器で独房を早く開けたりする作戦も。ロールプレイの掛け合いも自然と生まれ、Xでは日本語の簡易説明書も共有されています。Quest対応、大人数でどうぞ。",
    "official": "Join the fight between Prisoners and Guards in this VR prison! Plot your escape with friends or keep the prisoners in line!"
  },
  {
    "id": "wrld_12c623b1-b3f1-4728-9f13-5f2a06f756b4",
    "category": "game",
    "name": "Shooting Showtime/シューティング・ショータイム",
    "subtype": "ゲーム",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 1540,
    "visits": 8243,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "シューター・FPS",
      "アトラクション"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_09469325-1596-4d17-ba4a-cc7104b231f1/5/256",
    "note": "5ステージを進みながら的を撃つ、遊園地のシューティングライドのようなアトラクション型ワールド。大人数でワイワイ乗れる、賑やかな一作。",
    "official": "5つのステージで構成される舞台でより多くのスコアを獲得する、「シューティングライド」型アトラクションです。"
  },
  {
    "id": "wrld_236bb7cd-dca2-44a2-9542-3b965e15d37d",
    "category": "game",
    "name": "RESONARK 4 ELVES Pt.1 - v4.1.12",
    "subtype": "ゲーム",
    "capacity": 28,
    "recommendedCapacity": 14,
    "favorites": 62293,
    "visits": 691805,
    "tags": [
      "ゲーム",
      "アバター",
      "一人でも",
      "音ゲー・リズム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c013f9ca-8a92-4b49-afbc-0bf8002aaf27/2/256",
    "note": "六角形の楽器を触って弾いて奏でる、本格VRリズムゲーム。septem47が2020年から続けているシリーズの最新作で、VRChat公式にも紹介されました。新曲は定期的に追加され、Zekkさんら作曲者本人がXで追加を告知することも。最大2人、チュートリアル付きで初心者も入りやすく、高難易度は判定厳しめでやり込み派も満足。腕は疲れるのでいい運動にも。日英対応、Quest対応。",
    "official": "Rhythm game world for PCVR ＆ Desktop ＆ Android （Quest） ｜ Language: 日本語, English ｜ Player: 1-2"
  },
  {
    "id": "wrld_69c41e95-1539-426a-a321-34412e0b021e",
    "category": "game",
    "name": "GIGAS -OLYMPUS-",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 20,
    "favorites": 91058,
    "visits": 2518385,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "集会・交流",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6993e606-ec95-447e-9b4f-c631ce29435c/8/256",
    "note": "キャンディちゃん作、巨人になったVRユーザー1人と最大30人の人間チームが戦う非対称バトル。人間側は走ってボタンを踏んで大砲を撃つだけと単純で、巨大化したフレンドを見るだけでも大盛り上がりです。VRChat公式も紹介し、アップデート『OLYMPUS』ではポセイドンとギガントマキアの2体が加わりました。日英対応・クロスプラットフォームで、イベントや大人数の集まりに最適。",
    "official": "An asymmetrical PvP game in which a gigantic VR player battles a team of human players."
  },
  {
    "id": "wrld_ac9b8b31-4d19-487f-9f4b-8c5487ca0be4",
    "category": "game",
    "name": "VRC脳カベ",
    "subtype": "ゲーム",
    "capacity": 64,
    "recommendedCapacity": 16,
    "favorites": 2442,
    "visits": 14818,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "初心者向き",
      "フルトラ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b9c8fb8a-770a-48e0-9c2a-a0370fa578ed/8/256",
    "note": "迫る壁の穴にぴったりのポーズを決めて通り抜ける、往年のバラエティ番組の名物コーナーを再現。全30ステージ、失敗すればプールへ落下。フルトラ推奨、Quest対応。",
    "official": "あの往年のバラエティー番組のコーナーがVRChatにやってきた！？ ステージは全30種、定期的なステージ追加アップデート予定"
  },
  {
    "id": "wrld_d980ac70-30b8-4a1e-8d7d-9cf2e383b208",
    "category": "game",
    "name": "≺Chill ＆ Work≻COUNT YOUR KARMA - お゛まえらの業をかそ゛えろ Ver.1.3.3",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 3280,
    "visits": 66550,
    "tags": [
      "チル",
      "ゲーム",
      "一人でも",
      "放置・育成",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ae89c05a-c80d-4ef7-868f-7e91fd60fca4/1/256",
    "note": "石を叩いて『業（カルマ）』を稼ぐクリッカー系ワールド。ポイントで設備や装備を整え、労働と放置で延々と増やしていく。Quest対応で一人作業チルにも最適なシュールな一作。",
    "official": "［JP/EN］ オッオッ おまえらの業をかぞえるのに丁度いいなんかができたぞ。これあ 白い海に囲まれたクリッカーワールドだ。 鋲で岩を叩き、業（krm）を増やしていけ。設備を買って自動化し、倍率上げて、グングンな。 Alright, I made the perfect little thing f"
  },
  {
    "id": "wrld_3dab5fe1-0500-4dce-a291-a37922331c30",
    "category": "game",
    "name": "Barrage TD",
    "subtype": "ゲーム",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 24717,
    "visits": 283656,
    "tags": [
      "ゲーム",
      "協力",
      "一人でも",
      "フレンドと",
      "タワーディフェンス",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6170d2e9-898f-433f-b52a-7bb33a50a021/8/256",
    "note": "タワーを設置するだけでなく、自分も盤上に降りて銃で戦えるタワーディフェンス。Tricky_Hunter作で、置いたタワーから自分で撃って守れるのが新しいと紹介され、小さくなったフレンドがかわいいという声も。最大10人で協力して防衛でき、ソロでも遊べます。難易度選択やスコアランキングもあり、どこまでスコアを伸ばせるか競えます。Quest対応。",
    "official": "Tower Defense with team play and the ability to take control of the towers. Become a miniature on the game board and fight the hoards alone or with up"
  },
  {
    "id": "wrld_613cefd3-ab36-404d-ac62-64d1b750657c",
    "category": "game",
    "name": "Udon Chips casino",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6214,
    "visits": 124332,
    "tags": [
      "ゲーム",
      "フレンドと",
      "集会・交流",
      "パーティー",
      "カジノ・メダル",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5013c185-bcd3-4bf8-ab10-266ffc643bf8/3/256",
    "note": "VRChat内通貨ギミック『Udon Chips』の機能を詰め込んだ、Quest対応のカジノワールド。チップを賭けて遊ぶカジノゲームをフレンドとワイワイ楽しめます。訪問数も多い定番どころです。",
    "official": "Udon Chipsの機能を詰め込んで Quest対応したワールド"
  },
  {
    "id": "wrld_09e6752e-f412-4794-8c07-92d65af0f759",
    "category": "game",
    "name": "Victory of Round -v2.50-",
    "subtype": "ゲーム",
    "capacity": 14,
    "recommendedCapacity": 10,
    "favorites": 63272,
    "visits": 1099479,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "初心者向き",
      "ローグライト",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_574b498c-46ba-4733-abfa-d2eb06f83f59/11/256",
    "note": "2〜10人で戦うローグライト対戦シューティング。負けた人だけが強化カードを積める仕組みで、負け続けるほど強くなって逆転できるのが快感。2024年の人気投票でも上位の名作。PC専用。",
    "official": "Not supported on mobile devices. 携帯端末には対応していません This is a rogue light shooting PvP world for 2 to 10 players! Ricochets? Explosions? Anything goes! 2人"
  },
  {
    "id": "wrld_cfa96a21-5d1c-4fd8-9f07-6677142acbd7",
    "category": "game",
    "name": "超能力な麻雀部屋",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2737,
    "visits": 18781,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "ボードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_25b3fcd9-1c69-474e-8c2d-fa66559f0411/2/256",
    "note": "超能力を使って盤面をかき回す、普通じゃない麻雀が打てる部屋。能力の追加や観戦機能など、作者の気まぐれで今もアップデートが続く対戦ワールド。",
    "official": "超能力を使った麻雀ができます。気まぐれでアプデします。9/28 能力追加。観戦機能追加。"
  },
  {
    "id": "wrld_8f4e0bbb-72e2-4fc5-9b1b-2ca9e2c22a46",
    "category": "game",
    "name": "ひまわりを採取して街を作るゲームワールド",
    "subtype": "ゲーム",
    "capacity": 22,
    "recommendedCapacity": 12,
    "favorites": 1461,
    "visits": 11032,
    "tags": [
      "ゲーム",
      "フレンドと",
      "一人でも",
      "クラフト・建築",
      "やり込み",
      "大容量注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0623f393-f4d7-4295-a862-ed71b5539cca/3/256",
    "note": "ひまわりを採取して家を買って、また採取して…を繰り返す街作りゲーム。集めたひまわりで家を増やし、自分だけの街を育てていく。定員22人。容量650MBと重めなので読み込みに注意。",
    "official": "ひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家を買ってひまわりを採取して家"
  },
  {
    "id": "wrld_5992ac87-4df8-4fb5-8a6c-e29688135aca",
    "category": "game",
    "name": "Into the Unknown",
    "subtype": "",
    "capacity": 80,
    "recommendedCapacity": 60,
    "favorites": 29133,
    "visits": 789848,
    "tags": [
      "ゲーム",
      "謎解き",
      "一人でも",
      "協力",
      "ストーリー",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4da1ba36-8cec-42c5-8189-db6d25ad77d1/5/256",
    "note": "FloatLab Industriesの実験塔を起点に、複数のワールドを巡って謎を解く大型ARGのハブ。2026年春にVRChatで開かれたイベント『Venture into the (Un)known』の入口で、100人以上が制作に関わりました。消えたVRRatを探す物語を、一人で探索しても、フレンドと協力しても進められます。手がかりを集めてフィナーレを目指す、謎解き好き向けの長編体験。Quest対応。",
    "official": "FloatLab Industries: Experimental Tower A"
  },
  {
    "id": "wrld_41efe3b1-9931-40ab-a15d-6946d22481b5",
    "category": "game",
    "name": "SlashCo VR",
    "subtype": "ホラー・不気味",
    "capacity": 8,
    "recommendedCapacity": 8,
    "favorites": 103556,
    "visits": 5027455,
    "tags": [
      "ホラー・不気味",
      "ゲーム",
      "協力",
      "フレンドと",
      "謎解き",
      "点滅注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ce8cec04-e6b6-4caa-bc29-f1ad4739c7af/7/256",
    "note": "発電機を回してヘリで脱出を目指す、協力型のステルスホラー。Dead by DaylightやAlien Isolationに着想を得て、Mantibroら3人が2024年にオープンベータとして公開し、今もアップデートが続いています。マップと怪物は毎回ランダムで、Xでは「DbDのキラーがNPCになった感じ」と紹介されました。日本語対応で、日本でも初心者向けの集会が開かれるほどの人気です。暗闇と怪物の襲撃に絶叫しながらも、フレンドと一緒なら笑いに変わります。大きな音や点滅、汚い言葉を含むので注意。",
    "official": "4/14/26 - v0.8.53｜ A Survival Stealth Horror Co-op game. WARNING: Contains loud sounds, flashing images and profanity. VRC Group ≻ SLASH.3139"
  },
  {
    "id": "wrld_7760a184-3236-4520-8fce-d62beba43f29",
    "category": "game",
    "name": "Blind Shot",
    "subtype": "チル",
    "capacity": 25,
    "recommendedCapacity": 25,
    "favorites": 13612,
    "visits": 203898,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "初心者向き",
      "パーティー",
      "シューター・FPS",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_11b8c1d5-9003-4258-92c8-9dc91763ba5f/3/256",
    "note": "相手の姿が見えない状態で撃ち合う、シンプル極まる2人以上用の対戦ゲーム。RaptorGamezが2026年に公開した作品で、見えないからこそ勘と音と度胸が頼り。勝ってコインを稼ぎ、ガチャで銃を手に入れる要素も。短時間でワイワイ盛り上がる、フレンド同士のネタ対戦に。Quest対応。",
    "official": "A simple 2＋ Player game where you shoot without seeing your opponents. Win Games, Earn Coins, and Gamble for Guns."
  },
  {
    "id": "wrld_c094b642-6d21-4456-a566-9c476261cf65",
    "category": "game",
    "name": "カチカンドッチ！？",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4354,
    "visits": 26825,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "トークゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_75437236-8e4f-465a-8347-71a3d2290f7e/8/256",
    "note": "価値観や賛否が分かれそうな質問が143問用意された話題提供系パーティーゲーム。フレンド同士で答えを比べれば価値観の違いで盛り上がるはず。",
    "official": "【122問ー≻139問ー≻現在143問】話題提供系のワールドです！価値観・賛否が分かれそうな質問を集めました！フレンドと行ってみよう！"
  },
  {
    "id": "wrld_1c54f22a-e833-4bfe-96b0-c62de84c3a2c",
    "category": "game",
    "name": "よくわからんが 犯人はお前だ!!",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4143,
    "visits": 19447,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "トークゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bf13ab10-d7a2-4e74-8bad-c86e39f72cc7/4/256",
    "note": "3人以上で遊ぶ、架空の事件名をみんなで作り上げる言葉遊びのパーティーゲーム。88hatiwaReが2026年に公開した作品で、定員32人と大人数でも遊べます。Quest対応。",
    "official": "3人～からプレイできるパーティーゲームです。架空の事件名を作り上げましょう。"
  },
  {
    "id": "wrld_642dd26e-224d-46db-ac38-d8840a8d49fa",
    "category": "game",
    "name": "偉人カードバトル",
    "subtype": "ゲーム",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 6651,
    "visits": 35297,
    "tags": [
      "ゲーム",
      "フレンドと",
      "対戦",
      "パーティー",
      "カードゲーム",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a2322ad8-581b-45cd-84e1-b76f797b4d37/2/256",
    "note": "偉人のパーツを組み合わせて最強のキメラ偉人を生み出す『ソクラテスラ』ライクなカードバトル。2〜6人で笑いながら戦えるパーティーゲームです。容量約8MBと軽く、Quest対応。",
    "official": "Quest対応しました！「ソクラテスラ」ライクなゲームができるワールドです。プレイ人数2-6人。"
  },
  {
    "id": "wrld_29d35561-c034-4917-89f0-2f0c39c4f79f",
    "category": "game",
    "name": "8番地下通路 8 Exit Underground passage",
    "subtype": "ホラー・不気味",
    "capacity": 30,
    "recommendedCapacity": 16,
    "favorites": 9014,
    "visits": 100609,
    "tags": [
      "ゲーム",
      "ホラー・不気味",
      "フレンドと",
      "一人でも",
      "異変探し",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c455c159-f3b1-4000-9f02-885521e0ad93/4/256",
    "note": "KOTAKE CREATE『8番出口』をリスペクトした異変探しワールド。異変があれば引き返し、なければ進むというルールで、30種の異変を見抜きながら8番出口を目指します。結構難しいので、フレンドと協力すると盛り上がります。ホラー要素は少しだけ。Quest対応。",
    "official": "KOTAKE CREATE様制作、8番出口をリスペクトしたワールドです。全部で30個の異変があります。暗い地下通路の一本道にある異変を探してみてください。ホラー要素は少しあります。 オブジェクトは全てグローバルで動作します。This world is a tribute inspired by ga"
  },
  {
    "id": "wrld_fcf1632a-d411-4b77-b77e-84454d80687e",
    "category": "game",
    "name": "Sarutori_Bowling",
    "subtype": "ゲーム",
    "capacity": 50,
    "recommendedCapacity": 50,
    "favorites": 4830,
    "visits": 32995,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "パーティー",
      "スポーツ",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_93552d93-c97a-4c87-be62-3862416b07c6/6/256",
    "note": "ボウリング好きが本気で作ったボウリングワールド。どの環境でもフックボールが投げられる本格派で、スコアを競い合えます（VRで投げるときは、目線の中心あたりにボールが転がります）。定員50人と大人数対応、Quest・iOS対応で誰とでも遊びやすい一軒です。",
    "official": "PC＆Quest単機＆iOS 対応 ボウリング好きが本気で作ったボウリングワールド 全てのプラットフォームでフックボールが投げられます VRで投げる際は目線の中心ぐらいにボールが転がります ボーリングではなくボウリングです"
  },
  {
    "id": "wrld_d335c270-5571-464a-95a7-7662a65cc503",
    "category": "game",
    "name": "Triangular",
    "subtype": "ゲーム",
    "capacity": 10,
    "recommendedCapacity": 5,
    "favorites": 1061,
    "visits": 8767,
    "tags": [
      "ゲーム",
      "謎解き",
      "フレンドと",
      "一人でも",
      "パズル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_df0c540e-b91b-4b20-abfd-f649ddad5500/1/256",
    "note": "五感をフル活用するパズル謎解き。リズムゲーム『Stellar Conductor』なども手がけるたけすぴおんが2022年に公開した作品で、3つのレベルを解き進め、セクションごとにトロフィーがもらえます。想定30分〜1時間、最大10人・推奨2〜5人。言語を問わないので誰とでも遊べます。PC専用。",
    "official": "［Any Languages OK］Solve puzzles and riddles. ／about 30 min to complete 3 levels."
  },
  {
    "id": "wrld_50a4de63-927a-4d7e-b322-13d715176ef1",
    "category": "game",
    "name": "Elite's RNG Land",
    "subtype": "宇宙・空",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 33338,
    "visits": 1759341,
    "tags": [
      "ゲーム",
      "宇宙・空",
      "一人でも",
      "放置・育成",
      "やり込み",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_72b45fac-670d-4d71-9b66-94277c7baa73/19/256",
    "note": "オートロールでオーラをガチャし続ける、運試しの極致のようなワールド。Eliteiment作で、2025年の登場以来、新マップや新オーラ、ハロウィンイベントなどの大型アップデートが続いています。レアオーラは1/数億級、進行はセーブされるので長く通うほど沼り、Xではレアオーラを引いた報告が飛び交います。関連ワールドと繋がる謎解き要素もあり、一人で黙々と回したい人に。Quest対応。",
    "official": "Reach for the stars as you put your luck to the ultimate test. Roll for Auras of various chances and display your luckiness to your friends with hundr"
  },
  {
    "id": "wrld_08c1e227-dc22-433d-90c6-37f29534497a",
    "category": "game",
    "name": "テストビルドなんてしてないよ / We Didn't Build ＆ Test This World ［JP/EN］",
    "subtype": "ゲーム",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 12424,
    "visits": 93869,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "カードゲーム",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7353f9de-a45f-4e98-bc09-7270c8dab12c/3/256",
    "note": "アナログカードゲーム『テストプレイなんてしてないよ』のオマージュワールド。条件を満たせば勝ち、踏めば負けという理不尽なカードの応酬が笑いを生む、2〜10人のカジュアルなパーティーゲームです。軽量で、Quest対応。",
    "official": "『テストプレイなんてしてないよ』というアナログカードゲームをオマージュしたゲームワールドです。2~10人で遊べます。バグ報告や感想お待ちしてます。 This is a game world that pays homage to the analog card game ［We Didn't Pla"
  },
  {
    "id": "wrld_d1fb2521-2a83-49a3-849a-47ed423a7dad",
    "category": "game",
    "name": "VIPPON GRAND PRIX",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 28,
    "favorites": 8888,
    "visits": 93418,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "トークゲーム",
      "集会・交流",
      "VR推奨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6a242364-034f-47d9-8dfa-80875e12d5fa/3/256",
    "note": "TV番組『IPPONグランプリ』風の採点大喜利ワールド。フリップを手に持って自分の間で回答を出せるのが本家らしく、絵で答える人も続出します。お題はプリセット60問で持ち込み不要。回答者2人以上・司会1人・審査員1人以上の、4人以上で遊べます。VR向け。",
    "official": "面白い答えでVIPPON獲得を目指せ！｜ 【VR向け】大喜利ができるワールドです。 プレイ必要人数: 回答者（2名以上推奨）＋進行（1名）＋審査員（1名以上） ＝ 4名以上. 60個のプリセット問題を収録しています。推奨タグ: ＃VIPPONグランプリ"
  },
  {
    "id": "wrld_fe0f5b02-339f-468b-91c0-a7220df73a6a",
    "category": "game",
    "name": "Just教習 V2",
    "subtype": "学校",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 9658,
    "visits": 72434,
    "tags": [
      "ゲーム",
      "学校",
      "乗り物",
      "日本",
      "フレンドと",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_28bc8fac-1983-479c-98e6-7033e47f8172/3/256",
    "note": "自動車教習所をまるごと再現したワールド。教習車に乗り、信号や一時停止、クランクやS字カーブの難所まで本物同様に体験できます。免許前の予習にも、免許持ちの『初心に帰る』ドライブにも。フレンドと巡るのも楽しい。PC専用。",
    "official": "2024/11/14 CVS2 update! 道路交通法第六章第一節第八十四条 自動車及び原動機付自転車（以下「自動車等」という。）を運転しようとする者は、公安委員会の運転免許（以下「免許」という。）を受けなければならない。"
  },
  {
    "id": "wrld_f557959f-6fde-4164-be36-31f1d40bb9a5",
    "category": "game",
    "name": "Zombie Survival",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 10,
    "favorites": 268919,
    "visits": 6280921,
    "tags": [
      "ゲーム",
      "協力",
      "一人でも",
      "フレンドと",
      "シューター・FPS",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_df9776f3-2f5a-467a-9a50-35ed8f1112e6/15/256",
    "note": "押し寄せるゾンビを銃でなぎ倒し、稼いだお金で武器と能力を強化していく協力シューター。Teal作で、ラウンドを重ねるほどゾンビが強くなり、ボスラッシュモードも加わりました。怖さはほぼなく爽快感重視。エンドレスに続き、Xでは1人で60ラウンド超えを報告する人もいるので、時間に余裕がある時にどうぞ。訪問は600万超、日本語対応。1人でも、フレンドとでも。Quest対応。",
    "official": "v3.5o｜日本語対応しました｜New BOSS RUSH Mode!｜Defeat hordes of zombies to survive! They grow stronger, but you may increase your odds using new weapons, upgrade"
  },
  {
    "id": "wrld_1137cf02-7bcc-42f0-9b9a-74c4ecb3d21b",
    "category": "game",
    "name": "Naruto Skyline",
    "subtype": "夜・夜景",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 7320,
    "visits": 73120,
    "tags": [
      "乗り物",
      "夜・夜景",
      "日本",
      "フレンドと",
      "大容量注意",
      "レース",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0d00e2d3-c315-4947-9595-a4d3534725b0/4/256",
    "note": "徳島・鳴門の峠道『ナルトスカイライン』を再現した夜のバーチャルサーキット。ishが2022年に公開した作品で、車好き同士の走行会やタイムアタックに。容量約583MBとかなり重いので、読み込みには余裕を持って。PC専用。",
    "official": "Nsuka is a virtual circuit known as 'Naruto Skyline' in Naruto city, Tokushima, Japan. Its reading is \"enu suka\". This is a map port and credits to Ta"
  },
  {
    "id": "wrld_7a7c4dc4-16f8-4eab-8d47-486e12d2c797",
    "category": "game",
    "name": "クミンの勇者冒険 v1.3",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 35223,
    "visits": 491767,
    "tags": [
      "ゲーム",
      "一人でも",
      "放置・育成",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_62a66fc9-ddb7-4589-8e28-0db9224cd060/3/256",
    "note": "キャラを選んで敵を倒し続け、強化とガチャで最強を目指す放置系クリッカー。自動攻撃でまったり放置もでき、止め時が分からなくなる中毒性が評判です。1人で黙々とどうぞ。Quest対応。",
    "official": "This is an afk game. And offers a few other games. Surrounded by mattresses, it looks like a secret base that you can make your home. My Twitter: ＠Heh"
  },
  {
    "id": "wrld_2a3df68a-86a8-4949-86a3-f4cac379ac0a",
    "category": "game",
    "name": "裏六甲-UraRokkou-",
    "subtype": "乗り物",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 5228,
    "visits": 72364,
    "tags": [
      "乗り物",
      "ゲーム",
      "フレンドと",
      "夜・夜景",
      "レース",
      "大容量注意",
      "日本",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9eaac6d4-f960-4b72-8b7e-a246e31ca759/4/256",
    "note": "照明のない真っ暗な夜の峠を、車やバイクで駆け抜けるドライブワールド。G線上のハッチが2024年に公開した作品で、コースのマップはgobeyond_fpsによるもの。作者いわく「VRCはレースゲームです」。カーブの多い難コースにはタイムアタックもあり、腕に自信のある人向け。車種も豊富です。容量約544MBと重め、PC専用。",
    "official": "Riding cars ＆ motorcycles on Touge. UraRokkou map made by ＠gobeyond_fps Powerd by CHIKUWA VEHICLE SYSTEM 2"
  },
  {
    "id": "wrld_e2a6c155-629c-4253-97c2-19bf6f1ca43f",
    "category": "game",
    "name": "Strategic Battlefront - Early Access",
    "subtype": "ゲーム",
    "capacity": 30,
    "recommendedCapacity": 30,
    "favorites": 14564,
    "visits": 208528,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "シューター・FPS",
      "やり込み",
      "制作途中"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_eface5d5-e4a3-4edc-81cd-af4ded52f84a/1/256",
    "note": "70種以上の武器とステータス割り振りでビルドを組む、本格スケールのチームFPS（アーリーアクセス）。ゲームモードは10種類以上あり、攻略記事が何本も書かれるほど奥が深い作りです。まずは射撃訓練場で武器を試すのがおすすめ。腰を据えて遊ぶFPS好き向け。",
    "official": "Full-Scale VR FPS World Enters Early Access! Over 70 unique weapons. A fully customizable stat system. More than 10 diverse game modes. Everything is"
  },
  {
    "id": "wrld_f94dbbb7-4be3-4833-82bd-24b403567788",
    "category": "game",
    "name": "アバター面接会場",
    "subtype": "ゲーム",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 3585,
    "visits": 31595,
    "tags": [
      "ゲーム",
      "アバター",
      "一人でも",
      "異変探し",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_33ff8004-43da-4da9-af0f-8d9256a61e13/7/256",
    "note": "アバターたちの面接官になり、登場するNPCアバターがオリジナルか改変かを見抜く観察ゲーム。髪や衣装の変化から分かりにくいものまで。スタンプ判定式で一人で黙々と遊べる。PC専用、320MBと重め。",
    "official": "【アバター面接官として着任された皆様へ】 本日よりあなたには、アバターたちの「面接官」をお願いしたいと思います。 まずは、机の上にある∗∗【業務用バインダー】∗∗を確認してください。 そこに、やるべきことがすべて書かれています。"
  },
  {
    "id": "wrld_c4cb4e91-8d34-467f-873d-bbe72b92d21a",
    "category": "game",
    "name": "Overseer",
    "subtype": "ゲーム",
    "capacity": 12,
    "recommendedCapacity": 6,
    "favorites": 48022,
    "visits": 634719,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "パーティー",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_100de8e0-64b8-4868-9e95-c78ca6ea78e6/3/256",
    "note": "1人の監視者に見つからないよう、NPCの群れに紛れてコインを集めるかくれんぼゲーム。『Price Guess』なども手がけるJarが2021年に公開した作品です。4人以上・1試合約10分で、NPCの動きを真似る演技力と度胸が試されます。フレンド同士でどうぞ。Quest対応。",
    "official": "Beware the Overseer! Blend in. Steal coins. Run away."
  },
  {
    "id": "wrld_451d1c67-015b-4765-8940-d5c7ddd2dc81",
    "category": "game",
    "name": "JELLY JELLY CAFE VRChat支店",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 4950,
    "visits": 42005,
    "tags": [
      "ゲーム",
      "カフェ・飲食",
      "フレンドと",
      "パーティー",
      "ボードゲーム",
      "公式コラボ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e8430066-5649-49d8-a262-5218ba6a7474/5/256",
    "note": "実在のボードゲームカフェ『JELLY JELLY CAFE』のVRChat支店。アブラカザームやカタカナーシなど6種のボードゲームがテーブルごとに用意され、大人数でも分かれて遊べます。カードのシャッフルと片付けのボタンはテーブルの下に。Quest対応。",
    "official": "ボードゲームカフェ「JELLY JELLY CAFE」のVRChat支店です！カードシャッフル＆お片付けボタンはテーブル下にございます。ハッシュタグは ＃ジェリカフェVR"
  },
  {
    "id": "wrld_e8db4bf4-9da9-4dd4-9dc3-1cd56820f038",
    "category": "game",
    "name": "Tiharuum - ちはるーむ",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 67861,
    "visits": 3711874,
    "tags": [
      "チル",
      "ゲーム",
      "集会・交流",
      "フレンドと",
      "アバター",
      "ホームワールド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a1489a9c-dced-49d2-b267-9a1d643c45be/18/256",
    "note": "料理からゲームまで何でも揃う、普段使いの万能ホームワールド。料理やケーキ作り、オリジナルの動画タブレット、拡張メニューの30種以上のゲーム、アバター展示まであり、動作がとても軽くて長居しやすい定番の一軒です。フレンドとまったりするのに最適。",
    "official": "色んな人が普段使いしやすいワールドを目指して作りました！オリジナルで使いやすい動画タブレット、拡張メニューに30以上のゲーム、料理ギミック、アバター展示もあります。動作負荷も非常に軽いです。（更新日:26/05/11）"
  },
  {
    "id": "wrld_3a0d59d1-389a-4ed7-98d4-79303b277b9f",
    "category": "game",
    "name": "Dark Scanner",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 28,
    "favorites": 6891,
    "visits": 74076,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "探索",
      "チル",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_13eae77c-b9e2-427f-83a7-1c28424598bf/7/256",
    "note": "『Scanner Sombre』に着想を得た、真っ暗な地下道をスキャナーで照らした点の集まりだけを頼りに進む探索ワールド。宝石集めのゴールもあり、ホラー演出はないので怖さが苦手でも大丈夫です。推奨1〜10人、30分〜2時間。Quest対応。",
    "official": "The Timer Update! Explore the inky black halls with only your scanner to guide you. Powered by Udon, inspired by Scanner Sombre. Recommended 1 - 10 pl"
  },
  {
    "id": "wrld_3dd9347c-bf35-4f2d-9f85-4c337c3a1e14",
    "category": "game",
    "name": "POLYGONIA FOREST OF AMESHINOGI",
    "subtype": "自然・風景",
    "capacity": 30,
    "recommendedCapacity": 15,
    "favorites": 3619,
    "visits": 30006,
    "tags": [
      "自然・風景",
      "一人でも",
      "フレンドと",
      "探索",
      "やり込み",
      "制作途中",
      "動物"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2ae6f97e-ba80-44ee-a64f-902182a4fa32/7/256",
    "note": "惑星ポリゴニア『アメシノギの森』の第一調査拠点。森の生物を観察して図鑑を埋めていく探索ワールドで、まだ開発中のため図鑑には空きがあります。容量約135MB、定員30人。",
    "official": "［WIP］ 惑星ポリゴニア \"アメシノギの森\" 第一調査拠点 調査中のため図鑑に空きあり（固着生物20/21、動点生物17/18）"
  },
  {
    "id": "wrld_c9b1166e-7b15-4400-b23f-c76cff2ba336",
    "category": "game",
    "name": "脱出ゲーム「人生逆転クルーズからの脱出」",
    "subtype": "ゲーム",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 5498,
    "visits": 24386,
    "tags": [
      "ゲーム",
      "フレンドと",
      "協力",
      "謎解き",
      "ストーリー",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_23359d02-17ad-4f14-aeb0-078905507f64/1/256",
    "note": "豪華クルーズを舞台に、制限時間60分で謎を解く本格脱出ゲーム。解くほどにストーリーが動き、ドキドキの展開は必見と評判です。難易度は高めなので、フレンドと協力して挑戦を。途中参加不可・PC専用。",
    "official": "あなたは、余興「人生逆転クルーズ」をクリアし、残りの人生を遊んで過ごすことができるのか！？/ 制限時間60分 / グローバル動作 / 途中参加不可 ＃VRC_人生逆転"
  },
  {
    "id": "wrld_09b0087a-9a0f-4999-8786-7bab7ab993d9",
    "category": "game",
    "name": "Silverstone F1",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4629,
    "visits": 53805,
    "tags": [
      "ゲーム",
      "フレンドと",
      "レース",
      "乗り物",
      "再現ワールド",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3c65eec5-d246-49cb-b70e-8b1406c7e838/2/256",
    "note": "F1のシルバーストン・サーキットを再現したドライビングワールド。Aiden1408が2025年に公開した作品で、モデルはすべてAssetto Corsa由来です。定員32人、容量約208MBとやや重め。PC専用。",
    "official": "All models from Assetto corsa"
  },
  {
    "id": "wrld_e775c4e9-cb26-4f9b-9670-85a3d28abcc1",
    "category": "game",
    "name": "SakuraYuki Island",
    "subtype": "チル",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 427,
    "visits": 8468,
    "tags": [
      "チル",
      "写真・撮影",
      "自然・風景",
      "乗り物",
      "一人でも"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_302d8d40-1054-4909-af33-1892e5c06d9c/6/256",
    "note": "南太平洋に浮かぶ小さな島『桜雪島』。旧軍の飛行場跡を私物化した娯楽施設という設定の、チル＆撮影ワールドです。空戦用ではないので射撃はできません。",
    "official": "注意！本土は設定上のみ存在し実装はしていません。 桜雪島は南太平洋に浮かぶとても小さな島。 大戦中は迎撃機の出撃拠点として使われましたが現在は役目を終え私物化された娯楽目的の施設になっています。 写真などをXでツイートする際、タグ「＃桜雪島」を付けてもらえると嬉しいです！（本ワールドは空戦等を行うワ"
  },
  {
    "id": "wrld_66c742e9-ff23-460b-b71f-84549fe4b6f5",
    "category": "game",
    "name": "『かわうち』ボードゲームワールド",
    "subtype": "自然・風景",
    "capacity": 80,
    "recommendedCapacity": 4,
    "favorites": 7324,
    "visits": 54110,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "ボードゲーム",
      "デッキ構築"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f631455d-eb42-41c2-9b7b-dbdeb95277f0/6/256",
    "note": "TDMボドゲ同好会による、引っ越し先の島でかわいいケモノたちと誰より早くおうちを建てるボードゲーム。2〜4人・30分以上。カードの組み合わせを見つけるのが楽しい一方、ルール量は多めなので経験者と一緒だとスムーズです。日英対応。",
    "official": "（JP/EN）『かわいい子たちとおうちを建てるゲーム』島のかわいい子たちと共に誰よりも早くお家を建てよう！ プレイ人数:2～4 プレイ時間:30分以上 ｜ ＃かわうち created by TDMボドゲ同好会 ｜ Kawauchi （Kawaii ko tachi to ouchi wo tater"
  },
  {
    "id": "wrld_a61cdabe-1218-4287-9ffc-2a4d1414e5bd",
    "category": "game",
    "name": "Terrors of Nowhere",
    "subtype": "ホラー・不気味",
    "capacity": 19,
    "recommendedCapacity": 16,
    "favorites": 121672,
    "visits": 6751351,
    "tags": [
      "ホラー・不気味",
      "ゲーム",
      "協力",
      "フレンドと",
      "サバイバル",
      "点滅注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e64ab59f-00e8-4704-a561-98d0ea69c76c/33/256",
    "note": "ランダムな怪物とランダムな舞台で3分間生き残る、最大16人のサバイバルホラー。敵は140種以上、特殊ラウンドも豊富で、仕組みを理解するほど沼ります。重いワールドで、点滅やジャンプスケアもあります。フレンド＋かグループで、悲鳴を上げながらどうぞ。PC専用。",
    "official": "Friends＋ or Group heavily recommended. ｜（HEAVY WORLD）This world contains flashing lights and jumpscares.｜ A chaotic udon survival game. Supports 16 pl"
  },
  {
    "id": "wrld_9d74f118-b1ae-4b2d-956e-e1ea32ca44e4",
    "category": "game",
    "name": "ユーロアの隠れ家 Euroa's Hideout",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 29331,
    "visits": 385106,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fb9c00bc-fcff-4f4c-82df-3b61e2b9d44d/33/256",
    "note": "ワールドギミック100種が部屋中に詰まったゲーセンのようなワールド。ボドゲやイライラ棒、アスレまで一人でもみんなでも遊び尽くせます。UdonChipsのギャンブルにハマる人も。Quest対応。",
    "official": "楽しいワールドギミックがなんと100種類！ 一人でゆっくり遊んだり、みんなとワイワイ遊んだり！ 初心者さんでも遊びやすいギミックをたくさん用意してます！いつでも遊びに来てください！"
  },
  {
    "id": "wrld_96f36201-f31d-49c3-baf9-dc17748e1bae",
    "category": "game",
    "name": "8番チルワ 8 exit chill world",
    "subtype": "チル",
    "capacity": 20,
    "recommendedCapacity": 16,
    "favorites": 2430,
    "visits": 37315,
    "tags": [
      "チル",
      "ゲーム",
      "フレンドと",
      "異変探し",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f07dc91b-0274-4d06-8f1c-0a7e5791fb2a/8/256",
    "note": "『8番出口』風の異変探しが楽しめるチルワールド。異変は全30種、ホラー要素はほぼ無いので、普段のチルや雑談の場所としても使える。Quest対応。",
    "official": "8番出口のような遊びが出来るチルワールドです。全部で30個の異変があります。異変探しをしなくても、普通にチルワとしてもご利用頂けます。 ホラー要素はほとんどありません。 オブジェクトは全てグローバルで動作します。Its a chill world where you can enjoy gamepl"
  },
  {
    "id": "wrld_97a05df7-86de-4bf4-bd26-24dacedd50ce",
    "category": "game",
    "name": "Trash Compactor",
    "subtype": "電車・駅",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 129219,
    "visits": 9623755,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "サバイバル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_715f4677-1e6c-4853-940d-e1d84febedab/4/256",
    "note": "1人が大砲で車やピアノを撃ち込み、ほかの全員をゴミ圧縮機に落とそうとする非対称サバイバル。『Meat Grinder』『Thermal Treatment』に続く作品で、不安定な足場の上で3分耐えれば生存者側の勝ちです。公式ジャムの受賞作で、短時間でワッと盛り上がれます。",
    "official": "A sequel to Meat Grinder ＆ Thermal Treatment. Survive high-velocity props thrown by a fellow player on unstable platforms. Models ＆ textures by Chim-C"
  },
  {
    "id": "wrld_0ed69379-d849-4d58-a0c3-d6bcbcadbe48",
    "category": "game",
    "name": "MedalGameWorld",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 21558,
    "visits": 450400,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "カジノ・メダル",
      "長居できる"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d559291e-d660-4ce0-a0af-f01e03f77ceb/12/256",
    "note": "メダルゲーム17機種が遊べるワールド。目玉は最大2000倍の『FUJISAAAN!!』で、メダルは保存されるから通ってランク上げも。攻略記事が出るほど奥が深く、時間が溶けるのでご注意を。一人でも黙々と遊べます。",
    "official": "メダルゲームが遊べるワールドです。現在17機種で遊べます。メダルを増やしてランクを上げよう！"
  },
  {
    "id": "wrld_653dabc5-4958-4d66-95de-62cd964a2397",
    "category": "chill",
    "name": "Forest Environment",
    "subtype": "自然・風景",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 8587,
    "visits": 68165,
    "tags": [
      "自然・風景",
      "写真・撮影",
      "高負荷",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d2353d4d-1e83-4eee-b1a4-3df3ff3e3da9/2/256",
    "note": "フォトリアルな森を丸ごと歩ける環境ワールド。NatureManufactureの自然アセット『Forest Environment - Dynamic Nature』を使った景観で、ギミックよりも景色そのものを味わうタイプです。容量約383MB、高スペックPC推奨。PC専用。",
    "official": "Required HIGH PERFORM ｜ Forest Environment ｜ By NatureManufacture ｜ Quest not compatible ｜ Ko-Fi : Maxime66410 ｜ vrcpicture.com"
  },
  {
    "id": "wrld_362befbb-f431-4c46-a4c5-5d631c7420eb",
    "category": "recommend",
    "name": "NUCLEUS II",
    "subtype": "ホラー・不気味",
    "capacity": 80,
    "recommendedCapacity": 20,
    "favorites": 7166,
    "visits": 73392,
    "tags": [
      "ゲーム",
      "海・水中",
      "リミナルスペース",
      "探索",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fa554a7f-33b8-477b-afcf-02426154a525/1/256",
    "note": "前作で探索した巨大なブルータリズムのウォーターパークから、今度は『家に帰る』番。MyroPが2026年7月に公開した『NUCLEUS』の続編で、前作よりずっと物語性が増し、Xでは、VRChatのリミナル系として全てが最高峰のクオリティと評されました。スライダーや浮き輪で巡るリミナルスペース探索で、ホラー演出はないのに不気味です。アイテム全回収なら2時間超。自動チェックポイントや合流・テレポート機能、明るさ調整、VR酔い対策まであるのも親切。PC専用。",
    "official": "Part II : You finished exploring the brutalist waterpark, now it's time to go home..."
  },
  {
    "id": "wrld_8843035e-1e79-4280-80a4-9cca37af1122",
    "category": "todo",
    "name": "Imitated Amaurot 2024",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 30,
    "favorites": 7373,
    "visits": 57812,
    "tags": [
      "ゲーム",
      "ファンメイド",
      "再現ワールド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_74a23017-77eb-47bd-8077-5aa5d46d22bd/12/256",
    "note": "背景モデルはほぼすべてフルスクラッチで作ったファンメイドの二次創作ワールドです/ BGMもゲーム内音源を使用していません/ 制作期間は２ヶ月程度 !",
    "official": "背景モデルはほぼすべてフルスクラッチで作ったファンメイドの二次創作ワールドです/ BGMもゲーム内音源を使用していません/ 制作期間は２ヶ月程度 !This world does not use ripped data! made with blender/substance painter/fre"
  },
  {
    "id": "wrld_99924ad6-6bb9-479c-8835-282f0a634f60",
    "category": "exhibition",
    "name": "［JP］NDC Library",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 14835,
    "visits": 120632,
    "tags": [
      "図書館・本",
      "チル",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c3e9ecf4-4b82-4cf1-9765-fadc7fc69ebb/5/256",
    "note": "青空文庫の16,377冊を日本十進分類法どおりに並べた図書館。ねむり木が2023年に公開した作品で、本を手に取って実際に読め、検索機で探すこともできます。Xでは「実際に読める本がある図書館」と驚かれ、本格的な図書館ワールドとして評価されています。白を基調とした静かな空間で、本棚を眺めて本と出会う体験を再現。Quest対応。",
    "official": ""
  },
  {
    "id": "wrld_3712146c-5c0b-48cf-80b8-792824b84eea",
    "category": "misc",
    "name": "朱鷺ヶ谷神経科前バス乗り場",
    "subtype": "ホラー・不気味",
    "capacity": 32,
    "recommendedCapacity": 20,
    "favorites": 3348,
    "visits": 24229,
    "tags": [
      "ホラー・不気味",
      "ストーリー",
      "一人でも",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_656a7604-94ec-4f88-b0be-4b9939fe6380/3/256",
    "note": "閉鎖された精神科病院前のバス停を巡る、約15分のサイコホラー（7Days WorldWorks参加作）。驚かし演出はなく、物語を見られる6か所のポイントで、案内役のAI音声が静かに狂っていきます。作者は『ホラーワールドではありません』としていますが、内容はれっきとしたホラーです。一部のギミックは壊れています。PC専用。",
    "official": "1/13ギミック修正しました。7Days WorldWorks参加作品。 （ホラーワールドではありません。） ワールド内に物語が視聴できるポイントが6箇所あります。 使用素材：VOICEVOX冥鳴ひまり。 一部ギミックが壊れています。"
  },
  {
    "id": "wrld_ce3d5b50-b247-4442-9078-758ca0127bce",
    "category": "chill",
    "name": "Thad Recursive Room",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 27754,
    "visits": 254098,
    "tags": [
      "写真・撮影",
      "探索",
      "フレンドと",
      "体験型",
      "アート・展示",
      "映画祭・受賞作"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2788572f-b07d-4ec7-a4d5-6722fa2e32f3/2/256",
    "note": "部屋の中に同じ部屋があり、その中の自分がまた部屋にいる。再帰構造でスケール感が狂う不思議な体験ワールド。ヴェネツィア国際映画祭のWorlds Gallery選出作で、大小アバター撮影にも。",
    "official": "A room in a room in a room. And it comes with toys!"
  },
  {
    "id": "wrld_d7067277-4ee9-4706-9582-0b103dbacbe1",
    "category": "chill",
    "name": "深海のすみか - deep sea apartment",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 3900,
    "visits": 67370,
    "tags": [
      "チル",
      "海・水中",
      "写真・撮影",
      "一人でゆっくり",
      "睡眠・V睡",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c97e9c3b-93c8-4434-8287-986bb6395343/2/256",
    "note": "海底に暮らすように過ごせる、静かなアパートメント。gat8が2026年に公開した作品で、大きな窓の外では魚や海の植物が漂い、薄暗い室内から眺めていると時間がゆっくり流れます。深海の静けさに浸りたい夜のチルや撮影にどうぞ。Quest対応。",
    "official": "海底の静かな時間"
  },
  {
    "id": "wrld_cf570793-4fd0-4225-ada6-faf1094551cf",
    "category": "game",
    "name": "フライングサーカス/FlyingCircus",
    "subtype": "ゲーム",
    "capacity": 48,
    "recommendedCapacity": 24,
    "favorites": 4083,
    "visits": 27322,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "スポーツ",
      "飛行・フライト",
      "VR酔い注意",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0bd67353-dd8e-4c01-b91e-56ba1cf232da/3/256",
    "note": "『蒼の彼方のフォーリズム』の空中競技を再現。2人でブイを巡って得点を競い、相手の背中タッチや場外も。視線で旋回、両手で加減速する操作は爽快だがVR酔い注意。Quest・iOS対応。",
    "official": "蒼の彼方のフォーリズムに出てくる架空のスポーツ、フライングサーカスができるワールドです。VR/Desktop"
  },
  {
    "id": "wrld_358c8602-a6fd-430c-9d56-b9c1e90971aa",
    "category": "game",
    "name": "Realtime Farm / リアルタイム農業ワールド - リアルVRChat2",
    "subtype": "",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 4796,
    "visits": 115351,
    "tags": [
      "ゲーム",
      "チル",
      "一人でも",
      "協力",
      "放置・育成",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_34a75db3-fd65-493d-b769-b7a2b1f32986/5/256",
    "note": "現実の時間と連動して作物が育つ農業ワールド。奈良阪某（narazaka）がエイプリルフール企画として2025年に公開したもので、ニンジンは本当に現実の時間どおりに育ち、芽が出るまで約1週間、収穫までは約4か月かかります。何もない畑にペンで絵を描いて遊ぶ人も。気長に通うスローライフ系で、27MBと軽量、定員24人。Quest対応。",
    "official": "リアル時間で農業が出来るワールドです。リアル。"
  },
  {
    "id": "wrld_bbff4698-e33b-4003-b200-942c4b1da2d4",
    "category": "exhibition",
    "name": "AI年表歴史館 β版 / AI Timeline History Museum / AI年表历史馆",
    "subtype": "アート・展示",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 247,
    "visits": 5757,
    "tags": [
      "アート・展示",
      "博物館",
      "学習・教育",
      "フレンドと",
      "歴史",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ea432253-2039-4069-a904-4ef44af573d9/3/256",
    "note": "2015年から現在までのAIの歴史を年表でたどる博物館ワールド（β版）。生成AIブームの流れを一望でき、『あの頃のAI』を思い出せます。推奨身長は1.5m程度。Quest対応・日英中3言語対応で、AIに興味がある人の社会科見学にどうぞ。",
    "official": "2015年から今までのAIの歴史をたどるワールドです（β版）。あの頃のAIを思い出せます。推奨身長は1.5m程度です。 A world that traces the history of AI from 2015 to today （beta）. Come and remember the AI "
  },
  {
    "id": "wrld_0efc115f-0ab6-450e-84dd-c8f2ff7cf020",
    "category": "exhibition",
    "name": "VRC「飛行」展",
    "subtype": "宇宙・空",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 83,
    "visits": 1780,
    "tags": [
      "博物館",
      "アート・展示",
      "一人でゆっくり",
      "飛行・フライト",
      "動物",
      "制作途中"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d38834b4-541b-433a-8ef7-c161ffbb590e/3/256",
    "note": "飛行機に限らず『飛行するもの』なら何でも集める博物館ワールド。展示はChapter制で、まずは空を飛ぶ生き物を集めたChapter1が公開されています。自分のペースで眺めて回れる展示です。",
    "official": "飛行するものならなんでも集める博物館ワールドです。 制作が長くなりそうなのでChapter1:生物を公開します。"
  },
  {
    "id": "wrld_e7532ea3-c11a-4dcd-867e-2cb7ddd41cfd",
    "category": "exhibition",
    "name": "【日本人向け】ギリシャ・ローマ神話博物館",
    "subtype": "アート・展示",
    "capacity": 50,
    "recommendedCapacity": 40,
    "favorites": 1815,
    "visits": 12287,
    "tags": [
      "アート・展示",
      "学習・教育",
      "解説あり",
      "博物館",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1fbc18b2-0eab-44b8-9f60-8827039137c3/3/256",
    "note": "ギリシャ・ローマ神話を、名画と彫刻と日本語解説でたどる博物館。創世からトロイ戦争、ローマ建国、星座の由来までを絵と物語で網羅します。神話入門に最適な本格展示。Quest対応。",
    "official": "様々な文化・価値観に影響を及ぼし、今や生活の一部にも溶け込んでいるギリシャ・ローマ神話、しかしながらその内容について詳しく知る人は少なく、多くの場合星座や惑星の名前の由来となった神話、という程度の認識にとどまっています。そこで本ワールドでは神話全体を絵や彫刻などを通して語ることで、まとまった原典の無"
  },
  {
    "id": "wrld_9e12cd38-f0ff-4580-8a65-575c1f0c3bf2",
    "category": "exhibition",
    "name": "ボタン展~Exhibition of Buttons",
    "subtype": "アート・展示",
    "capacity": 40,
    "recommendedCapacity": 10,
    "favorites": 2653,
    "visits": 35309,
    "tags": [
      "アート・展示",
      "体験型",
      "フレンドと",
      "ネタ・ミーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c607a965-6d7a-48d4-8b97-e858a432e7c0/2/256",
    "note": "暮らしのボタンから普段は押せないボタンまで、34種類のボタンを集めた展示会。全部実際に押せて、動作音まで確認できます。つい連打したくなる、ストレス解消にもなる小さな博物館。Quest対応。",
    "official": "くらしのボタンから普段は絶対に押せないボタンなど、様々なボタンをポチポチできます。You can press all kinds of buttons, from everyday buttons to ones you'd never get to press in real life!"
  },
  {
    "id": "wrld_d85b9a76-857e-4a44-b713-433ca8a774a7",
    "category": "exhibition",
    "name": "選挙制度博物館－Japan Election Museum－",
    "subtype": "アート・展示",
    "capacity": 64,
    "recommendedCapacity": 8,
    "favorites": 192,
    "visits": 2403,
    "tags": [
      "アート・展示",
      "博物館",
      "学習・教育",
      "日本",
      "一人でゆっくり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9408a943-c7f7-4f18-9db9-316cc91ea448/6/256",
    "note": "日本の選挙制度の過去・現在・未来を展示でたどる学習系ミュージアム。博物館ワールドの訪問記で知られる作者による制作で、社会科見学気分で選挙の仕組みを学べます。投票前に一度どうぞ。",
    "official": "日本の選挙の過去・今・未来について紹介した展示ワールドです。 ワールド内の注意事項をよく読んでご使用ください。 アバターの利用規約等は十分注意してください。This world was created under experts supervisions, in compliance with an"
  },
  {
    "id": "wrld_b94cf643-d2ef-4504-9537-56d27b0dc5a2",
    "category": "exhibition",
    "name": "MRVR Headset Museum ｜ VRヘッドセット美術館",
    "subtype": "アート・展示",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 3951,
    "visits": 53074,
    "tags": [
      "アート・展示",
      "VR推奨",
      "歴史",
      "博物館",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f044bba8-f017-48ca-8533-faa2be4660f4/8/256",
    "note": "24台のVRヘッドセットを、年表と3Dモデルで展示する美術館。VRChatのワールド紹介でも知られるミスターVRが2026年に公開した作品で、Meta QuestシリーズからApple Vision Pro、往年のOculus Riftまで並び、手に取って被ると視野角を疑似体験できます。未発売の機種も見比べられます。Quest対応。",
    "official": "Experience the VR headsets you've been curious about! 24 models, from the popular Meta Quest series to Apple Vision Pro and the classic Oculus Rift. Y"
  },
  {
    "id": "wrld_2b995c65-2a33-48b0-be6e-47cd20f6992d",
    "category": "exhibition",
    "name": "Back To The Experience",
    "subtype": "アート・展示",
    "capacity": 40,
    "recommendedCapacity": 10,
    "favorites": 5152,
    "visits": 56637,
    "tags": [
      "アート・展示",
      "ストーリー",
      "映画祭・受賞作",
      "体験型"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8e6307c1-ffd4-4704-b257-b17d5938b47a/2/256",
    "note": "数十人のVRクリエイターの思い出を、一人の主人公の物語に編んだ展示型の体験。1時間弱で多彩な世界を巡り、VRChat文化と創作への情熱に触れられます。始めたばかりの人に向けた、ここでの暮らし方の紹介も。日英中対応、Venice Immersive出展作。",
    "official": "Shared memories from VRC players. Lifestyle showcases for newcomers. 丨Available in English, Chinese and Japanese."
  },
  {
    "id": "wrld_67b96381-eda4-4d4f-963f-433eb067ecca",
    "category": "exhibition",
    "name": "Dangotaso Art Exhibition",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1267,
    "visits": 8849,
    "tags": [
      "アート・展示",
      "日本",
      "体験型",
      "一人でゆっくり",
      "イラスト",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_68783342-423b-44fc-9502-64d96e92e80a/1/256",
    "note": "イラストレーター・だんごたその『和風×現代』な世界をそのまま街にした体験型ギャラリー。いちょう舞うレトロなお江戸に、動くイラストやアニメーションが展示され、作品世界の中に入って鑑賞できます。PC専用。",
    "official": "和風×現代コンセプトの展示ワールドです。 イラストレーターだんごたそが描く、和風×現代をコンセプトにしたイラスト＆アニメーションをお楽しみいただけます。 This is an exhibition world of Japanese style x modern concept. You can e"
  },
  {
    "id": "wrld_42f8e9a7-2368-4aa8-b1a9-17c1cfbc1e99",
    "category": "exhibition",
    "name": "Kawagoe KoEdo",
    "subtype": "写真・撮影",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 2021,
    "visits": 25015,
    "tags": [
      "アート・展示",
      "フォトグラメトリ",
      "日本",
      "再現ワールド",
      "写真・撮影",
      "大容量注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bf11ae6a-de60-4c71-970c-06569e24a7a7/5/256",
    "note": "埼玉県川越『小江戸』の蔵造りの町並みを、川越市の許可を得たフォトグラメトリで記録したデジタルアーカイブ。富士山を丸ごと再現した『Mount Fuji』なども手がける龍 lilea（藤原龍）が2021年に公開し、MoguraVRでも紹介されました。時の鐘を眺め、焼きおにぎりやお団子、扇子などを手に持って、食べ歩き気分で散策と自撮りが楽しめます。cluster版もあります。容量約640MBと大きめ、PC専用。",
    "official": "Digital Archive of \"Little Edo\" in Kawagoe, Japan. How about a virtual sightseeing tour? You can also enjoy eating and walking around."
  },
  {
    "id": "wrld_2692d7f4-f640-41fe-83e2-dfd2c3c249eb",
    "category": "exhibition",
    "name": "VR南極博物館-VR Antarctic Museum",
    "subtype": "アート・展示",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 444,
    "visits": 5226,
    "tags": [
      "アート・展示",
      "博物館",
      "学習・教育",
      "フレンドと",
      "解説あり"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4fa70754-7d3c-4ec8-ba4e-c98f64082888/10/256",
    "note": "実在の南極キャンプ『ユニオングレイシャー』を再現した博物館ワールド。南極の自然や観測の情報がボードでしっかり学べ、『勉強になった』と評判です。英語対応。PC版のほかQuest専用版も別にあります。",
    "official": "To all of you living in English-speaking countries, thank you for your patience! The VR Antarctic Museum is finally available in English! 南極に行ってみたいですか"
  },
  {
    "id": "wrld_e9406ca2-40d1-4e46-a4d4-1e7f22c8575f",
    "category": "exhibition",
    "name": "Cookie Museum クッキーで見る世界の歴史",
    "subtype": "アート・展示",
    "capacity": 64,
    "recommendedCapacity": 64,
    "favorites": 1233,
    "visits": 12045,
    "tags": [
      "アート・展示",
      "ネタ・ミーム",
      "学習・教育",
      "フレンドと",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6bedc640-35ee-4c8b-95aa-f052ea943242/2/256",
    "note": "チョコチップクッキーで世界の歴史の『重み』を体験する、ネタ系ミュージアム。数学とユーモアで知られるYM（ワイエム）が2023年に公開したポスター展示で、真面目な歴史とお菓子の落差が笑いを誘います。フレンドとツッコミながら巡るのがおすすめ。Quest対応。",
    "official": "チョコチップクッキーで歴史の重みを体験しましょう。（1/29軽量化アップデート）"
  },
  {
    "id": "wrld_7d840cb4-dc41-4b35-be38-c5be96c9b15c",
    "category": "chill",
    "name": "Just 歯車＆蒸気エンジン/Just Gear ＆ SteamEngine",
    "subtype": "チル",
    "capacity": 64,
    "recommendedCapacity": 64,
    "favorites": 351,
    "visits": 5083,
    "tags": [
      "アート・展示",
      "睡眠・V睡",
      "写真・撮影",
      "一人でゆっくり",
      "ギミック"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6f8a3e6b-35c3-4e02-92a3-b5af739e0fcd/3/256",
    "note": "歯車と蒸気エンジンを実際に動かして眺められる、触れる機械の観察ワールド。地下でV睡している間に巨大歯車がゆっくり回り、一周したら記念撮影を。メカ好きとスチームパンク好きに刺さる、滞在型の展示です。",
    "official": "歯車や機構、蒸気エンジンを実際に動かして観察してみよう！ 地下でV睡して巨大歯車を一周させよう！（自動保存） 歯車が一周したら写真に撮って ＃JustGear タグで投稿しよう！ Let's actually operate and observe gears, mechanisms, and st"
  },
  {
    "id": "wrld_f0c226d2-b47e-42b8-bdf1-f24b384641cc",
    "category": "exhibition",
    "name": "VRC地球生命史ミュージアム ほ乳類館 ［JP/EN］",
    "subtype": "アート・展示",
    "capacity": 50,
    "recommendedCapacity": 16,
    "favorites": 5239,
    "visits": 57311,
    "tags": [
      "アート・展示",
      "博物館",
      "動物",
      "学習・教育",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6e8e3d4d-5794-49b9-b23c-68d1e1c6ef3e/7/256",
    "note": "Sketchfabなどでクリエイティブ・コモンズのもと公開された哺乳類の3Dモデル150種以上を、9つの展示室に集めた博物館。哺乳類の進化から特徴、多様性までを日英両対応で学べます。生成AIを使ったコンテンツも含まれます。PC専用で、じっくり見て回りたい一館です。",
    "official": "sketchfabを主にCCライセンス下で公開されている哺乳類の3Dモデルを収集、9つの展示室で150種以上を展示しています。哺乳類の進化からその特徴、多様性までを幅広く学べる博物館ワールドです。 当ワールドは生成AIを使用したコンテンツが含まれます。"
  },
  {
    "id": "wrld_6250673d-994f-4a34-ad5d-96b77df6f4b0",
    "category": "exhibition",
    "name": "Spacecraft Museum",
    "subtype": "宇宙・空",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 815,
    "visits": 14347,
    "tags": [
      "アート・展示",
      "宇宙・空",
      "博物館",
      "一人でゆっくり",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f9e23f35-4f9c-4a7d-88ea-a20bb1262227/3/256",
    "note": "宇宙機をテーマにした美術館ワールド。whiteflareが2019年に公開した古参の展示で、容量約42MBと軽めなので気軽に覗けます。Quest・iOS対応。",
    "official": "Spacecraft Museum 宇宙機美術館"
  },
  {
    "id": "wrld_7e2e6fc6-0a0b-4665-a5f8-0ce67cbd52d8",
    "category": "particle",
    "name": "星降る海 - Particle Live",
    "subtype": "神社仏閣・宗教",
    "capacity": 4,
    "recommendedCapacity": 2,
    "favorites": 4825,
    "visits": 34939,
    "tags": [
      "パーティクルライブ",
      "音楽・ライブ",
      "一人でゆっくり",
      "ファンメイド",
      "アニメ・キャラ",
      "点滅注意",
      "一人専用",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_eccfbbb8-4355-4c19-a72e-01ace0e6c2e7/1/256",
    "note": "『超かぐや姫！』の楽曲『星降る海』（Aqu3ra／月見ヤチヨ cv.早見沙織）のファンメイド・パーティクルライブ。竹林の鳥居をくぐると始まる約4分のひとり用で、曲のあとはワールドを自由に巡れます。もう一度見るときはリジョインを。強い点滅あり。PC専用。",
    "official": "「星降る海」Aqu3ra / 月見ヤチヨ （cv. 早見沙織） 『超かぐや姫！』より。ファンメイドのパーティクルライブです。約4分・ひとり用・PC専用。強い光の点滅を含みます。竹林の鳥居をくぐると始まります。曲のあとはワールドを自由に巡れます。もう一度見るときはリジョインしてください。 A fan-"
  },
  {
    "id": "wrld_927a0969-6965-44df-b805-80189ba14fd5",
    "category": "particle",
    "name": "パリピ砲なワールド \"水没都市\"",
    "subtype": "街・都市",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 145,
    "visits": 1247,
    "tags": [
      "街・都市",
      "演出・パーティクル",
      "フレンドと",
      "ネタ・ミーム",
      "視界ジャック強め",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bf7b83de-6371-4546-827b-03ccc8022677/1/256",
    "note": "水没都市を舞台にしたパリピ砲系ワールド。ぎどちゃが2026年に公開した作品で、重低音に合わせた視界ジャックやビームなど過激な演出が特徴のジャンルです。推奨はDesktop、VRでも一応見られます。人を選ぶ刺激の強さが魅力。PC専用。",
    "official": "パリピ砲なワールドです。推奨はDesktopですが、VRでも一応見れます。"
  },
  {
    "id": "wrld_b7fc2cb4-4224-456c-83dc-7a535758adbc",
    "category": "particle",
    "name": "Pipe Dream",
    "subtype": "",
    "capacity": 12,
    "recommendedCapacity": 8,
    "favorites": 890,
    "visits": 8758,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "フレンドと",
      "再現ワールド",
      "技術デモ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_68dcd21c-f1d7-4d6e-bfb9-cdd1debdaf8c/2/256",
    "note": "Animusicの有名デモ『Pipe Dream』をVRChatに再現したワールド。2001年にSIGGRAPHで上映され、のちにGPUのデモにもなった名作を、양카（YangCar）が2026年に再現しました。パイプから飛び出す金属球が弦や打楽器を正確に打ち鳴らし、軽快な曲を奏でます。球の行方を目で追うのが楽しい、眺める音楽機械。最大12人、PC専用。",
    "official": "Recreation of the Animusic's famous tech demo 'Pipe Dream'"
  },
  {
    "id": "wrld_c811d2e4-187d-4478-8b14-9854055e9c66",
    "category": "particle",
    "name": "［VRMV］world.execute（me）",
    "subtype": "音楽・ライブ",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 998,
    "visits": 7000,
    "tags": [
      "VRMV",
      "音楽・ライブ",
      "演出・パーティクル",
      "一人でゆっくり",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_301a45cb-f467-4c11-8f60-0806dfc3fa05/2/256",
    "note": "Mili『world.execute(me);』を、本人の許可を得てシェーダーで視覚化したファンメイドVRMV。グリッチと歌詞の演出がプログラミング的な楽曲世界と完璧に噛み合い、『観るより体感する』と評された名作。1曲じっくりどうぞ。",
    "official": "Fan made VRMV.Shader visualization of World.Execute（me）;by Mili"
  },
  {
    "id": "wrld_fc4ce424-f461-40dc-ab0b-8341bbe0d7d5",
    "category": "particle",
    "name": "タソガレアフター - Particle LIVE -",
    "subtype": "夜・夜景",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 627,
    "visits": 4593,
    "tags": [
      "夜・夜景",
      "音楽・ライブ",
      "演出・パーティクル",
      "一人でゆっくり",
      "夕暮れ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cb7af978-4e43-48cb-bf98-25502af43f3d/2/256",
    "note": "コヤニスカッチの楽曲『タソガレアフター』を題材に、夕暮れの和室で音楽と光に浸るパーティクルライブ。窓の向こうの景色と差し込む夕陽が曲とともに移ろい、好きな場所から眺められます。この夕暮れが原曲に出会うきっかけになれば、という作者の思いが込められた一作。Quest対応。",
    "official": "夕暮れの和室で、音楽と光に浸るひととき。 『タソガレアフター』の世界観を、空間と演出で楽しむ音楽ワールドです。 窓の向こうの景色と、部屋に差し込む夕陽。 曲とともに移りゆく表情を、あなたの好きな場所でお楽しみください。 この夕暮れが、原曲に出会うきっかけになれば幸いです。 原曲：コヤニスカッチ（みこ"
  },
  {
    "id": "wrld_f5a94039-4e01-4cdf-ac66-078ebc9f86ad",
    "category": "particle",
    "name": "VRMV［脳漿炸裂ガール］",
    "subtype": "音楽・ライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2866,
    "visits": 18275,
    "tags": [
      "VRMV",
      "演出・パーティクル",
      "音楽・ライブ",
      "フレンドと",
      "ボカロ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7e4f9506-0a01-40f2-9b21-66ac8becec7f/6/256",
    "note": "れるりりの超高速ボカロ曲『脳漿炸裂ガール』（初音ミク＆GUMI）のVRMV。言葉が怒涛のように押し寄せる原曲の疾走感を、VRのパーティクル演出で浴びる一作です。1万人訪問を記念して、ロビーには原作MVを再現したVRMVも。お気に入り率の高さも目立つ人気作です。",
    "official": "【VRMV】脳漿炸裂ガール - れるりりfeat.初音ミク＆GUMI / Brain Fluid Explosion Girl - rerulili feat.miku＆gumi 10,000人visit記念にロビーに原作を再現したvrmvを公開しました"
  },
  {
    "id": "wrld_4e99e929-3441-4278-b6eb-84d4f21e48ba",
    "category": "particle",
    "name": "［VRMV］Reply",
    "subtype": "音楽・ライブ",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 3672,
    "visits": 29888,
    "tags": [
      "VRMV",
      "演出・パーティクル",
      "音楽・ライブ",
      "視界ジャック強め",
      "フレンドと",
      "アニメ・キャラ",
      "点滅注意",
      "VR酔い注意",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ef91a4b3-a1e9-42d1-807e-8af3a072ad8f/3/256",
    "note": "『超かぐや姫！』の楽曲『Reply』（kz）の非公式ファンメイドVRMV。スタートした瞬間、視界いっぱいにツクヨミの世界が広がり、自分のアバターで踊ることもできます。重い演出と点滅あり、PC向け。酔いやすい方は注意。",
    "official": "本ワールドは『超かぐや姫！』の楽曲「Reply」の非公式ファンメイドVRMVワールドです。負荷の重い演出が多い為必要に応じてグラフィック設定などを見直した上でお楽しみください。 また、酔いやてんかんなどもご注意ください。 Reply - kz（livetune） / かぐや（cv.夏吉ゆうこ） fr"
  },
  {
    "id": "wrld_f7e7431e-5453-4b59-80de-aa5240b0ad33",
    "category": "particle",
    "name": "バーチャル河川敷夏祭り 2025 Archive",
    "subtype": "写真・撮影",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 2142,
    "visits": 23408,
    "tags": [
      "写真・撮影",
      "音楽・ライブ",
      "日本",
      "演出・パーティクル",
      "フレンドと",
      "夏",
      "アーカイブ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fccae672-90b8-40bd-9b4e-5af9b78ca062/1/256",
    "note": "2025年夏に二夜開催された『バーチャル河川敷夏祭り』の会場アーカイブ。公式テーマソングのParticleLive『Daybreak Dream』が見られるほか、郷愁のある河川敷の祭り会場は写真撮影にも最適。あの夏の余韻に浸れます。",
    "official": "2025年8月30日~31日に開催されたバーチャル河川敷夏祭りの会場です。 公式テーマソングのParticleLive「Daybreak Dream」が視聴可能です。写真撮影にご利用下さい。"
  },
  {
    "id": "wrld_93c13c2e-9b06-4091-95c3-36a81103a8e3",
    "category": "particle",
    "name": "［VRMV］彼方へ、名もなき海辺より",
    "subtype": "音楽・ライブ",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 9066,
    "visits": 74440,
    "tags": [
      "VRMV",
      "パーティクルライブ",
      "海・水中",
      "チル",
      "フレンドと",
      "夕暮れ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ecfbaa33-608c-4435-be51-0dc9bc0a9385/10/256",
    "note": "月乃・打打だいずの楽曲を、海辺を舞台に体験するVRMV。『実写合成ミュージアム』のK1UCH1がワールドを手がけ、2026年7月の海の日にプレミア公開されました。海を漂うボトルになる視点演出が見どころで、夕日へ移る景色と光の粒が美しい。ライブ後はそのままチルできる、二度おいしい一作です。PC専用。",
    "official": "そんな海がー私は、 ＃VR彼海"
  },
  {
    "id": "wrld_b04952d1-05c0-47e2-97aa-53d298bd0c06",
    "category": "particle",
    "name": "ブルーアンビエンス x ParticleLive",
    "subtype": "音楽・ライブ",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 234,
    "visits": 2338,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "パーティクルライブ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ce987c6e-4078-4ca4-8ba6-314105fc643e/2/256",
    "note": "Mrs. GREEN APPLE「ブルーアンビエンス」を題材にした、ふーみき二周年記念のパーティクルライブ。青い照明とネオンに包まれた空間で、爽やかな原曲の世界観を光の演出で味わえます。PC専用。",
    "official": "ふーみき二周年記念パーティクルライブ Music: ブルーアンビエンス / Mrs. GREEN APPLE バグやご意見などがあれば、 X（旧Twitter）：＠Fukou_VRC までお気軽にDMしてください"
  },
  {
    "id": "wrld_f52da313-d9fc-42e2-82fd-4f17d9236ce5",
    "category": "recommend",
    "name": "Nel Blu",
    "subtype": "宇宙・空",
    "capacity": 6,
    "recommendedCapacity": 3,
    "favorites": 13652,
    "visits": 251324,
    "tags": [
      "ストーリー",
      "宇宙・空",
      "夜・夜景",
      "ギミック",
      "謎解き",
      "少人数",
      "映画祭・受賞作",
      "初心者向き",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_81489d5d-de6b-49d9-86f4-a35fb783765a/3/256",
    "note": "水辺の町と天の川を眺める夜から始まる、約1時間・最大6人の物語体験。Finsがベネチア国際映画祭のために1か月で作り、Venice Immersiveに選ばれた実験的な作品で、2026年11月に拡張版として公開されました。進むごとに景色とギミックが移り変わり、灰色の日常から宇宙へ憧れた子ども時代の記憶を辿ります。Xでは、久々にVRChatで泣きかけたという感想も。青い星空と水面の反射を眺める静かな余白も美しい。PC専用。",
    "official": "1-hour narrative experience ｜ Venice Immersive Nominee ｜ Expanded VRChat Version ｜ Designed for up to 6 players. 1時間のナラティブ体験｜Venice Immersive ノミネート作品｜"
  },
  {
    "id": "wrld_63a3921b-4412-4858-ae96-d38a7edc95d0",
    "category": "misc",
    "name": "TARTARUS",
    "subtype": "海・水中",
    "capacity": 16,
    "recommendedCapacity": 6,
    "favorites": 20736,
    "visits": 254635,
    "tags": [
      "ホラー・不気味",
      "乗り物",
      "海・水中",
      "フレンドと",
      "アトラクション",
      "海洋恐怖症注意",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_82ca72eb-3664-4ac2-ba74-41d935b777fa/5/256",
    "note": "水深8,000mの研究所を目指し、さらに深い深淵へ潜る約20分の深海ホラーライド。テーマパーク級の乗り場から海底エレベーターに乗り、巨大な窓の向こうの発光生物と異変を見届けます。座席は6席（立ち乗りならそれ以上も可）。日英対応、PC専用。",
    "official": "人類は、深海の最深部を「HADAL（冥府）」と呼んだ。 そこが世界の底であり、それ以上深い場所など存在しないと信じていた。 もし冥府の底に広がる深淵があるならば、その場所を目にした人類は誰もがこう呼ぶだろう。 TARTARUS - 奈落の深淵 座席6席／立ち乗りなら6人以上も可 （所要時間：約20分"
  },
  {
    "id": "wrld_842cfe2c-9d82-446e-ba30-40d5a34ad282",
    "category": "misc",
    "name": "Binaural ASMR Room",
    "subtype": "チル",
    "capacity": 12,
    "recommendedCapacity": 12,
    "favorites": 30983,
    "visits": 360454,
    "tags": [
      "ASMR・立体音響",
      "体験型",
      "フレンドと",
      "VR推奨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_05aad297-9677-468f-8471-95a387a2bd82/4/256",
    "note": "バイノーラル録音のASMRアイテムで遊べる小さな部屋。作者のおすすめは2人以上で、ASMRギミックはVRモードでのみ動きます。耳元で囁いたり音を鳴らしたりして、フレンドと音の近さを試す体験型ワールドです。",
    "official": "［Autonomous Sensory Meridian Response］ Try playing with two or more people. 2人以上で遊んでみてね。ASMR用音源アイテムが購入可能になりました。現在VRモードのみでASMRギミックは動作します。"
  },
  {
    "id": "wrld_a48e00a2-7a2e-45fd-ab52-0f4c8225fcbb",
    "category": "game",
    "name": "Sim Pool!",
    "subtype": "演出・パーティクル",
    "capacity": 60,
    "recommendedCapacity": 16,
    "favorites": 4186,
    "visits": 62790,
    "tags": [
      "海・水中",
      "技術デモ",
      "フレンドと",
      "夏",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e9442b9b-db91-42fe-9cae-c08b6a36f33f/7/256",
    "note": "GPUで最大100万粒子の水をリアルタイム計算する、技術デモ兼プールワールド。misha_mが2026年に公開した、BOOTHで頒布されている流体システム『VRCFluid』の体験ワールドで、VRChatでは使えないコンピュートシェーダーの代わりに描画の仕組みで水を計算しています。水鉄砲やスライダーで水と戯れられ、水はプールの外へも流れ出します。粒の細かさは4段階（6.4万〜100万粒子）から選択可。PC専用。",
    "official": "A pool party where the water is a real-time GPU simulation: up to 1M SPH particles to splash, shoot and swim in. Water guns, slides and floats; pick a"
  },
  {
    "id": "wrld_ef8f14e9-203b-4a1a-bb3e-60552a805c4c",
    "category": "misc",
    "name": "MintPunk Photo Stage",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4392,
    "visits": 27220,
    "tags": [
      "写真・撮影",
      "フォトスタジオ",
      "SF・近未来",
      "アバター",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9f54a4e0-58cd-4eef-9337-f484102237a1/1/256",
    "note": "BOOTH衣装『MintPunk』の世界観で撮れる、ネオンパンクな撮影専用ステージ。衣装を手がけるYaokiSubが2026年に公開したワールドで、衣装の試着リンクもあり、ストリート系コーデの宣材写真やポートレート撮影に。PC専用。",
    "official": "The stage for my outfit photo XD Try the oufti from this link: https://booth.pm/zh-cn/items/8240035"
  },
  {
    "id": "wrld_7ea2806a-5824-4e5e-98ab-1069109eaab3",
    "category": "misc",
    "name": "少女レイ A Girl Ray by ケセドCHESED",
    "subtype": "海・水中",
    "capacity": 60,
    "recommendedCapacity": 30,
    "favorites": 4257,
    "visits": 53570,
    "tags": [
      "VRMV",
      "ファンメイド",
      "ボカロ",
      "写真・撮影",
      "軽量"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d24a6d9f-68c9-448f-84de-63f820c644e2/3/256",
    "note": "みきとP『少女レイ』のMVを、ケセドCHESEDが全て自前モデリングで再現したワールド（145作目）。容量わずか5MBと超軽量で、動画プレイヤーには様々な『少女レイ』も。曲の世界に入って撮影したいファンに。",
    "official": "145作目は『少女レイ』のMVを再現したワールド。使用アセットはQvPen、動画プレーヤーだけ。すべてモデリング・Animation制作しました。動画プレイリストにはいろんな『少女レイ』が入ってますよ。容量５MB。"
  },
  {
    "id": "wrld_748d5dcf-1843-429f-b09c-6051752e8526",
    "category": "misc",
    "name": "バーチャル広島駅 2.u",
    "subtype": "アート・展示",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 6207,
    "visits": 206937,
    "tags": [
      "公式コラボ",
      "電車・駅",
      "再現ワールド",
      "日本",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_25785cc3-60aa-48b1-ba5e-63f118e3fd6f/7/256",
    "note": "JR西日本公式のバーチャル広島駅がVRChatに開業。『終電後の、誰も知らない広島駅』をテーマに、無人の列車からホーム、コンコースへと進む没入型の駅空間。創作展示やイベントの場としても使える、もう一つの広島駅です。",
    "official": "JR西日本グループのメタバース空間である「バーチャル広島駅 2.u」は、「終電後の、誰も知らない広島駅」をテーマにした没入型ワールドです。リアルに再現された駅構造と、VRならではの幻想的な演出が融合し、「見たことのない広島駅」を体験できます。 さらに、本ワールドは単なるバーチャル空間ではなく、「創作"
  },
  {
    "id": "wrld_48f70688-a7a8-4252-b695-e891f845a129",
    "category": "chill",
    "name": "時の残響－Echoes of Time",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 38334,
    "visits": 242733,
    "tags": [
      "廃墟",
      "海・水中",
      "写真・撮影",
      "SF・近未来",
      "電車・駅",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_78faeabd-38ea-4240-a429-8e930aaab58a/2/256",
    "note": "水没した巨大な工場廃墟に陽光が差し込む、HANI.作の景観ワールド。2025年に公開され、作者自身は夏のように涼しく、少し寂しい世界と紹介しています。水の下で眠る鉄道車両、水中を進むと変わる色彩、外に浮かぶ文明の欠片まで、滅びと自然美が同居する撮影スポットで、Xでも写真がよく投稿されています。PC専用。",
    "official": ""
  },
  {
    "id": "wrld_03b5b90d-6bc0-4dcb-aad0-b3a87cce925f",
    "category": "chill",
    "name": "-yuuri-空の向こうで",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 2018,
    "visits": 33924,
    "tags": [
      "チル",
      "探索",
      "一人でゆっくり",
      "写真・撮影",
      "宇宙・空"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8bccae27-b916-4698-9752-1ba5ae0f39c2/2/256",
    "note": "空をテーマにしたゆうり氏の風景ワールドで、世界のどこかに大切な手紙と花が置いてあるという。小さな探し物と静かな景色を楽しむ、一人でゆっくり巡りたいチル寄りのワールド。",
    "official": "ワールドのどこかに大切な手紙と花が置いてあります。その花に触れて外にでると...。「明日は晴れるといいな」"
  },
  {
    "id": "wrld_43cb662d-56cd-4efd-b18f-f9f1225ea7ad",
    "category": "misc",
    "name": "Waves ＃256",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3066,
    "visits": 28744,
    "tags": [
      "音楽・ライブ",
      "ASMR・立体音響",
      "技術デモ",
      "体験型",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c02fa98c-539a-47a6-a38b-57aedc268877/5/256",
    "note": "GPUで最大256音源を同時に鳴らす立体音響の実験ワールド。音のオーブの間を歩くと、位置によって楽曲の聞こえ方が変わります。BPMやピッチの調整も可能。音響アーティストの作品です。PC専用。",
    "official": "GPU-powered spatial audio system このワールドでは通常の制限を超えて、仮想的に256個の音源を同時に鳴らすことができます。GPUがすべての音源の立体音響効果を並列に計算し、最終的に1つのAudioSourceから出力されます。 In this world, beyon"
  },
  {
    "id": "wrld_4837b182-4e8e-47f5-8f56-9ee88f2d9da5",
    "category": "chill",
    "name": "Cave Aquarium",
    "subtype": "チル",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 10366,
    "visits": 193923,
    "tags": [
      "水族館",
      "チル",
      "自然・風景",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_614ac504-8b24-46e4-a38b-cc979fb1941b/5/256",
    "note": "BOOTHショップ『kai 9』と『NewRarity』のコラボで作られた、洞窟の中に広がる水族館。青い光に照らされた岩壁と泡の音に包まれ、階段を下ればいくつもの大水槽が待っています。魚のカスタムもでき、海底にいるような静けさの中で、一人でも誰かとでも癒やされます。Quest対応。",
    "official": "BOOTHショップ『kai 9』と『NewRarity』のコラボサンプルワールドになります。 洞窟の中の水族館をイメージした巨大水槽の展示ワールドになります。 This is a collaboration sample world created by the BOOTH shops kai 9 "
  },
  {
    "id": "wrld_5d46d718-2732-4c1f-81c2-38fdaf6e79a6",
    "category": "misc",
    "name": "Create Your World ～部屋作りの出来るワールド～",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 6,
    "favorites": 2304,
    "visits": 33706,
    "tags": [
      "クラフト・建築",
      "家・部屋",
      "チル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5fbf0634-4249-45d4-b045-5ddec099f8f9/6/256",
    "note": "自分で部屋づくりができる創作系ワールド。がみてゃが2026年に公開した作品で、家具や内装を自由に組み合わせて、自分だけの空間を作って過ごせます。PC専用。",
    "official": "Create Your World"
  },
  {
    "id": "wrld_95cfe576-75e9-43d1-9af6-b4c785b85d26",
    "category": "recommend",
    "name": "ぽこピープラネタリア / PokoPeaPlanetaria",
    "subtype": "宇宙・空",
    "capacity": 9,
    "recommendedCapacity": 9,
    "favorites": 3976,
    "visits": 40015,
    "tags": [
      "宇宙・空",
      "演出・パーティクル",
      "映画・映像",
      "体験型",
      "VTuber",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8de5547f-f8ff-40e8-a9fc-e821a1a06ed0/2/256",
    "note": "ぽこピーと一緒に宇宙を冒険する、約35分のイマーシブ映画館。VRChat版は360度映像ではなく、自分が物語の中にいる立体視の体験として作り込まれています。笑える掛け合いと迫力が魅力で、字幕は5言語に対応。有料チケット制、PC専用。",
    "official": "ぽこピープラネタリアとは？ VR体験の新しいカタチとしてデザインされたイマーシブ映画館です。 観客のあなたも物語のすぐそばへ。ぽこピーと一緒に冒険の世界へ没入する、新しい映像体験をお届けします。 ----- Subtitles：日本語 / English / 한국어 / 简体中文 / 繁體中文 / "
  },
  {
    "id": "wrld_7bab7a3f-7766-4bfc-a53f-77f6660bde73",
    "category": "recommend",
    "name": "iMARINE VR LIVE 2026 vol.2",
    "subtype": "音楽・ライブ",
    "capacity": 40,
    "recommendedCapacity": 30,
    "favorites": 470,
    "visits": 9485,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "海・水中",
      "期間限定",
      "公式コラボ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5b9954e8-1d01-42e3-8df6-980955570682/2/256",
    "note": "『海物語』のマリンちゃんから生まれたアイマリンの、完全没入VRライブ第2弾。0b4k3×Gugenkaの映像による公演で、2026年11月21・22日に各日3回開催されました。後夜祭は複数インスタンス同期のDJ/VJイベント。無料、PCVRのみ。",
    "official": "2026年5月に大盛況で幕を閉じたVR LIVEの第2弾となる「iMARINE VR LIVE 2026 vol.2」の開催が決定！ 0b4k3 × Gugenkaがタッグを組んだ映像を初披露！ 2026年11月21日（土）、22日（日）の2日間、各日3回公演でお届けします。 【DAY1】11月21"
  },
  {
    "id": "wrld_87133884-b305-4d98-9604-20ffa5f89c9c",
    "category": "recommend",
    "name": "FZMZ Point Zero",
    "subtype": "",
    "capacity": 40,
    "recommendedCapacity": 35,
    "favorites": 7927,
    "visits": 110521,
    "tags": [
      "音楽・ライブ",
      "アート・展示",
      "写真・撮影",
      "演出・パーティクル",
      "SF・近未来",
      "映画祭・受賞作",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7fb3acfc-af41-40c1-93ef-a148c4f92b4a/3/256",
    "note": "アバターバンドFZMZの公式ワールド。メンバー像との撮影スポットや楽器に触れるブース、意味深な数字の仕掛けまで、世界観を隅々まで探索できる。ヴェネツィア国際映画祭XR部門選出。PC専用・無料。",
    "official": "FZMZ （ファゾムズ） official VR world https://fzmz.jp/"
  },
  {
    "id": "wrld_d6c5aca3-a19d-41d0-a0f7-5175bb5d38dd",
    "category": "recommend",
    "name": "portal world",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 563,
    "visits": 3770,
    "tags": [
      "集会・交流",
      "チル",
      "ポータル",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_20a81058-6425-4ea8-a0ef-86edef3add19/8/256",
    "note": "作者さんかくけいの『みんなありがとうねほんまにBIGLOVE』という言葉が添えられた、温かい雰囲気のポータルワールド。2026年に公開され、次のワールド探しの入口にどうぞ。PC専用。",
    "official": "みんなありがとうねほんまにBIGLOVE"
  },
  {
    "id": "wrld_7ca23e3f-2757-40ef-afea-c8b6c9fe2e15",
    "category": "recommend",
    "name": "二次創作MV - あの夏が飽和する。 -",
    "subtype": "写真・撮影",
    "capacity": 12,
    "recommendedCapacity": 12,
    "favorites": 4742,
    "visits": 40696,
    "tags": [
      "写真・撮影",
      "音楽・ライブ",
      "夏",
      "ノスタルジー",
      "映画・映像",
      "ファンメイド"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1bccbc98-5d60-41dc-aef8-64fde5468f54/2/256",
    "note": "カンザキイオリの名曲『あの夏が飽和する。』をもとに、VRChatで撮影・編集した映画風の二次創作MVを上映するワールド。原曲ファンがMVの世界に入って浸れる一作です。作者自身の解釈を含むので、苦手な人は注意。",
    "official": "こちらは、カンザキイオリ様の「あの夏が飽和する。」をもとに、VRChatでの撮影と編集を通して映画風に描いた二次創作MVを上映するワールドです。 注意：自己解釈が含まれます、苦手な方は注意してください。"
  },
  {
    "id": "wrld_ff3daa0e-0620-44a1-b15c-ce0f9b9bb7d4",
    "category": "recommend",
    "name": "Project ［ latent ］ // archive_",
    "subtype": "",
    "capacity": 65,
    "recommendedCapacity": 65,
    "favorites": 15227,
    "visits": 90066,
    "tags": [
      "音楽・ライブ",
      "演出・パーティクル",
      "アート・展示",
      "SF・近未来",
      "アーカイブ",
      "映画・映像",
      "VTuber",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ae3f40b7-7426-40b8-998f-2cce31452bc4/1/256",
    "note": "VEE所属・月白 累の単独ライブ「latent」を再構成したアーカイブ体験。2026年3月に映像配信なし・定員70名で開かれたVRChat限定ライブを、企画・空間設計を担ったMIGIRIが常設ワールドとして公開しました。実験室のような箱庭空間で歌とポエトリーリーディングを至近距離で観測でき、初回は入場制限に達した熱狂作。ロンドンの映画祭Raindance Immersiveにも選ばれています。PC専用。",
    "official": "In Project ［ latent ］ // archive_, Geppaku Luis singing figure and the spatial structure of Hakoniwa are reconstructed within a VR environment and pla"
  },
  {
    "id": "wrld_ea519d64-1ae6-4d52-b06f-9cc4c3d8f320",
    "category": "recommend",
    "name": "Nemuarium（水族館）",
    "subtype": "海・水中",
    "capacity": 8,
    "recommendedCapacity": 4,
    "favorites": 7283,
    "visits": 56751,
    "tags": [
      "海・水中",
      "アート・展示",
      "チル",
      "写真・撮影",
      "水族館"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a45c271a-9213-4b42-a7fc-744606bf2b53/1/256",
    "note": "エリアごとに海や深海、磯の生き物まで見られる水族館。現実では地上に出せない深海生物を一挙に見られ、水槽に手を入れるようなVRならではの近さも楽しい。雰囲気の良さで癒やされる展示ワールド。",
    "official": "たくさんの方に多くの生き物を知ってほしいと思い制作しました。現実に存在し実際には見ることが難しい生き物も展示しているので是非ご覧ください！皆様のご来館をお待ちしております！Welcome to Nemuarium Aquarium!"
  },
  {
    "id": "wrld_f432252a-cd39-4e58-be2a-780cb5f3518d",
    "category": "recommend",
    "name": "リルレオぐみ！集会教室ワールド",
    "subtype": "学校",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 52,
    "visits": 3750,
    "tags": [
      "学校",
      "集会・交流",
      "アバター",
      "写真・撮影",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_7e4553c5-d512-4fe1-bbfe-2b5239447c06/1/256",
    "note": "アバター「リルレオ」のファン集会用に作られた教室ワールド。蒼天ひなたが2026年に公開した作品で、教室という懐かしい空間で、リルレオ好き同士が集まって交流や撮影を楽しむための場所です。小規模な集会にちょうどいい一作。Quest対応。",
    "official": "リルレオぐみ！集会教室ワールド"
  },
  {
    "id": "wrld_6f65d2fc-0598-414c-8e10-6f7b54139c55",
    "category": "todo",
    "name": "【PvP】Avatar Gimmick Shooting",
    "subtype": "写真・撮影",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 565,
    "visits": 3800,
    "tags": [
      "ゲーム",
      "アバター",
      "対戦",
      "シューター・FPS"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8d37e2ac-8824-4a25-9898-3ed0b4f1c8f1/3/256",
    "note": "武器ギミックを買ったものの、なかなか使う機会がない...」そんな悩みを解決するために制作したワールドです。",
    "official": "武器ギミックを買ったものの、なかなか使う機会がない...」そんな悩みを解決するために制作したワールドです。お気に入りのギミックのお披露目や試し撃ち、フレンドとの対戦・撮影など、気兼ねなく武器を扱える場所としてご活用ください。 推奨人数:4人～ バグが起きた場合インスタンスを立て直してください。 イベ"
  },
  {
    "id": "wrld_37aeeeee-51a3-4f91-b5b7-92fac7afc7ba",
    "category": "todo",
    "name": "MF文庫Jライブラリー 【VirtualSanrioPuroland】",
    "subtype": "図書館・本",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 1329,
    "visits": 12596,
    "tags": [
      "図書館・本",
      "公式コラボ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a92385ce-abd1-42d4-a662-23ca60f7e56c/2/256",
    "note": "バーチャルサンリオピューロランドにあるMF文庫Jのライブラリー。",
    "official": "MFbunkoJ Library【VirtualSanrioPuroland】"
  },
  {
    "id": "wrld_3d6c9459-c83e-446f-885e-a728bbed339f",
    "category": "todo",
    "name": "［OPEN BETA］ Ashpoint: Zero",
    "subtype": "街・都市",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 4078,
    "visits": 77288,
    "tags": [
      "街・都市",
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e8fd6db6-408d-4d27-8909-172c4aad278f/3/256",
    "note": "襲撃・回収・戦闘・脱出。VRChat向けに作られたPvE脱出シューター（オープンベータ）。",
    "official": "ASHPOINT ZERO: RAID · LOOT · FIGHT · EXTRACT A PVE extraction shooter built for VRChat. Gear up in the bunker, deploy into the city and fight your way"
  },
  {
    "id": "wrld_36c86f5e-0bf3-4f12-8279-975b941e7fff",
    "category": "todo",
    "name": "SharkCage",
    "subtype": "海・水中",
    "capacity": 16,
    "recommendedCapacity": 8,
    "favorites": 2510,
    "visits": 40984,
    "tags": [
      "海・水中",
      "ホラー・不気味"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a9a905cc-d52e-4b88-8a15-5b8f3c194c40/2/256",
    "note": "ケージの中に入り、海の生き物達を観察できるワールドです。 是非深海の様子を楽しんでください。",
    "official": "ケージの中に入り、海の生き物達を観察できるワールドです。 是非深海の様子を楽しんでください。 ケージ内でのフィッシュウォッチングはルートがあり全３ルートになります。 サメや海洋恐怖症の方はお気を付けください。 苦手な方は船の上から巨大画面でケージ内を見る事も出来ます。"
  },
  {
    "id": "wrld_92315630-d276-4279-ae21-8a52884de0f8",
    "category": "todo",
    "name": "ZOMBIE ESCAPE：ROOFTOP EXODUS",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 5863,
    "visits": 89108,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_53803ca1-9703-4a96-afe0-b301cd3d6f18/1/256",
    "note": "最大32人で遊べる、ゾンビから逃げ切るFPS。",
    "official": "Zombie escape FPS for up to 32 players. Pick your weapons, race across the rooftops and open the way. Board the heli before time runs out to survive, "
  },
  {
    "id": "wrld_67b78fcc-e213-4c58-9ce5-3752e8fc198a",
    "category": "todo",
    "name": "Escape from Azkaban ［RIDE］EN / JP",
    "subtype": "乗り物",
    "capacity": 24,
    "recommendedCapacity": 6,
    "favorites": 11470,
    "visits": 90995,
    "tags": [
      "乗り物"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_dfccd66f-202f-45bd-9445-fb4c016e944f/3/256",
    "note": "闇の帝王が再び力を強める時代。声を上げた者が送られるアズカバンからの脱出を描くライドアトラクション。日英対応。",
    "official": "It's the height of the Dark Lord's second rise to power, anyone who dares to speak out finds themselves locked away, if they're lucky... But you still"
  },
  {
    "id": "wrld_7ad335f5-bcf6-4864-9d69-30eec2a544e0",
    "category": "todo",
    "name": "鉄オタ御殿～model train room～",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 124,
    "visits": 2726,
    "tags": [
      "チル",
      "電車・駅"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2ac0ecf7-be1d-4e75-9e45-2446fbc78874/16/256",
    "note": "近所のマンションの屋上には、オーナーが建てた趣味部屋がある。中には趣味の鉄道模型や鉄道グッズが所狭しと並んでいるらしい。",
    "official": "近所のマンションの屋上には、オーナーが建てた趣味部屋がある。中には趣味の鉄道模型や鉄道グッズが所狭しと並んでいるらしい。 誰が呼んだか鉄オタ御殿。あのマンションって重さで屋根落ちないのかな？"
  },
  {
    "id": "wrld_ed400654-9993-480d-9a58-90c08ef9cc03",
    "category": "todo",
    "name": "3DScan MakerFaireTokyo2026 有明GYM-EX（ジメックス）",
    "subtype": "写真・撮影",
    "capacity": 26,
    "recommendedCapacity": 26,
    "favorites": 173,
    "visits": 991,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "フォトグラメトリ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6d8a4b2f-b8b1-4274-8c94-4ac3dd148fef/2/256",
    "note": "2026年9月5・6日に開催された、MakerFaireTokyo2026の会場を記録したフォトグラメトリのワールドです。",
    "official": "2026/9/5-6に開催された、MakerFaireTokyo2026のフォトグラワールドです. 国際展示場駅から会場までを生成しました. 勇者技研研究所のファイバリオンの出展の記録として、 一般来場者が入る直前に撮影。DJI Osmo 360とSony α7R とiPhone17Proを用いて、"
  },
  {
    "id": "wrld_093e3b71-560b-4381-9d10-4bd231a19796",
    "category": "todo",
    "name": "バーチャル北陸",
    "subtype": "写真・撮影",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 2735,
    "visits": 25794,
    "tags": [
      "写真・撮影",
      "集会・交流",
      "日本"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_365ed958-d6b6-4882-ac7b-6b3cfca422d9/8/256",
    "note": "北陸（新潟、富山、石川、福井）の魅力が詰まったワールドです。観光地や美味しいグルメをバーチャルで体感してみてください！",
    "official": "北陸（新潟、富山、石川、福井）の魅力が詰まったワールドです。観光地や美味しいグルメをバーチャルで体感してみてください！ 毎月第4土曜開催 VRC北陸集会もよろしくね［個人制作のワールドであり、各自治体等との関わりはありません］"
  },
  {
    "id": "wrld_4c7f72ff-49c0-4820-9bfa-c25a4f254790",
    "category": "todo",
    "name": "ROGUE PUTT",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 271,
    "visits": 4007,
    "tags": [
      "ゲーム",
      "スポーツ",
      "ローグライト"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_b43ab9e0-e05d-4302-ba06-0517ad04bee0/2/256",
    "note": "打って、強化して、18ホールを生き残れ！パターゴルフ×ローグライク 11/14 VIVEコントローラーでプレイできないに対応しました。",
    "official": "打って、強化して、18ホールを生き残れ！パターゴルフ×ローグライク 11/14 VIVEコントローラーでプレイできないに対応しました。ボールが途中で打てなくなるのを対応しました。 ＃ローグパット ＃ROUGEPUTT"
  },
  {
    "id": "wrld_00af63db-ae07-4959-9caf-8307d1ef7362",
    "category": "todo",
    "name": "チルとは労働の対価である。",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 1990,
    "visits": 28346,
    "tags": [
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_600a4709-f78f-43e0-be3d-a4505660e33b/2/256",
    "note": "汗水垂らしてお金を稼いでチルワールドを完成させよう。働かざる者休むべからず。",
    "official": "汗水垂らしてお金を稼いでチルワールドを完成させよう。働かざる者休むべからず。"
  },
  {
    "id": "wrld_cfca3594-6771-4d25-a8a9-dab242a07530",
    "category": "todo",
    "name": "JOINのたびにガチャ演出がはじまるワールド",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 614,
    "visits": 18878,
    "tags": [
      "ゲーム",
      "集会・交流"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e80eac07-0d1e-48a5-b41e-41528e39a287/4/256",
    "note": "冒険者ギルド風のワールドです。JOINしたりJOINされたりすると通知でガチャ風の演出が始まります。",
    "official": "冒険者ギルド風のワールドです。JOINしたりJOINされたりすると通知でガチャ風の演出が始まります。ほとんどが低レアリティですが高レアが発生すると目立ちます。運試しに是非お立ち寄りください。 お借りしたBGM BGM:Village_Fete / PeriTune（https://peritune."
  },
  {
    "id": "wrld_0520e927-f4ef-4de3-ba42-45b97118cdec",
    "category": "todo",
    "name": "8番水族館-Aquarium No.8-",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1020,
    "visits": 15583,
    "tags": [
      "海・水中",
      "ゲーム",
      "異変探し",
      "水族館"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8aa662a4-6648-405b-8949-883a762cc0b7/7/256",
    "note": "ゆるくて変わった海の生き物たちが暮らす、不思議な水族館へようこそ！ よーく観察しながら、異変を見つけて出口を目指そう！",
    "official": "ゆるくて変わった海の生き物たちが暮らす、不思議な水族館へようこそ！ よーく観察しながら、異変を見つけて出口を目指そう！ あなたは無事に水族館から出られるかな？ Welcome to a mysterious aquarium where quirky and unusual sea creature"
  },
  {
    "id": "wrld_454441bc-bc3b-469a-bb76-365b57428d35",
    "category": "todo",
    "name": "VRC謎解きワールド『一本道』",
    "subtype": "ゲーム",
    "capacity": 8,
    "recommendedCapacity": 1,
    "favorites": 92,
    "visits": 1810,
    "tags": [
      "ゲーム",
      "謎解き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bb457283-d1a1-4693-9ea8-2fdfe89dfd40/1/256",
    "note": "どこまで行っても一本道？という謎解きワールド。難易度は簡単で、推奨1人、全4問・想定10〜30分。検索せずに解けます。",
    "official": "どこまで行っても一本道？/難易度:簡単/推奨人数1人/全4問/想定クリア時間10分～30分/QVペン以外ローカル/何でも許せる人向け/検索なし"
  },
  {
    "id": "wrld_d5768b43-bbe6-4c4b-a6a3-42010a6c7144",
    "category": "todo",
    "name": "謎解きゲーム アンサーパネル",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1440,
    "visits": 11382,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_32bf28b9-4e27-473d-b297-8690a494467d/2/256",
    "note": "パネルを使って解答をする謎解きゲームです。 グローバル対応なので、みんなでワイワイ遊べます。",
    "official": "パネルを使って解答をする謎解きゲームです。 グローバル対応なので、みんなでワイワイ遊べます。 【難易度：やや簡単】【知識：ほぼ不要】【クリアタイム目安：20～60分】【ギミック：グローバル】【ヒント：全問完備】【 ＃VRC_アンサーパネル 】"
  },
  {
    "id": "wrld_37f05874-1257-4aa1-a8d9-42caa443bf97",
    "category": "todo",
    "name": "［JP/EN］ yourself -riddle world-",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3648,
    "visits": 43962,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_033ca013-80ad-442f-8258-0cca274a4d91/1/256",
    "note": "日本語・英語対応の謎解きワールド。想定プレイ時間約約2時間。難易度は中級者〜を想定しています。",
    "official": "日本語・英語対応の謎解きワールド。想定プレイ時間約約2時間。難易度は中級者〜を想定しています。3人以上の多人数推奨。 Language: JP / EN - Cooperative Riddle World - Difficulty: Intermediate to Advanced - Estim"
  },
  {
    "id": "wrld_6f1a2ed1-da9b-44f7-baed-bd2d11642e16",
    "category": "todo",
    "name": "３の倍数と３のつく数で奈落に落ちる階段",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 611,
    "visits": 11010,
    "tags": [
      "ゲーム",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5d9a1463-1650-4248-ae6d-b75454475fb4/2/256",
    "note": "299の段までたどり着けますか？",
    "official": "299の段までたどり着けますか？"
  },
  {
    "id": "wrld_8434c2c3-5e97-460d-91d1-1c449bc03e8e",
    "category": "todo",
    "name": "謎解きワールド『ミノタウロスの鏡』",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 220,
    "visits": 2712,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c5748b14-424a-408e-a0af-10f077d2eb1d/4/256",
    "note": "短編謎解きワールドです。鏡を動かして光線を反射させ、的に当てて迷宮を攻略しましょう。",
    "official": "短編謎解きワールドです。鏡を動かして光線を反射させ、的に当てて迷宮を攻略しましょう。動作はローカルです。想定プレイ時間は5分～ ＃VRC_M_Mirror"
  },
  {
    "id": "wrld_35d0c0a9-60f9-4e67-8b12-8039339ede82",
    "category": "todo",
    "name": "ムーンパレス",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 793,
    "visits": 9293,
    "tags": [
      "ファンメイド",
      "再現ワールド",
      "ネタバレ注意"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_30f65fcf-0194-4973-8fed-e100f0894a1c/3/256",
    "note": "ファミレスを享受せよの二次創作ファンメイドワールドです。モデルはすべてフルスクラッチ。",
    "official": "ファミレスを享受せよの二次創作ファンメイドワールドです。モデルはすべてフルスクラッチ。一部要素に微ネタバレあり、プレイ後に来ることをおすすめします。 Enjoy the Diner / Fanmade / Spoilers"
  },
  {
    "id": "wrld_c077aa49-4820-472d-ace5-c11368f1e3f4",
    "category": "todo",
    "name": "Project Aincrad 1.6.4",
    "subtype": "ゲーム",
    "capacity": 50,
    "recommendedCapacity": 20,
    "favorites": 172187,
    "visits": 2668612,
    "tags": [
      "ゲーム",
      "アート・展示"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_c404c651-bb7a-463e-b2ae-a07ab16d13e4/37/256",
    "note": "ArgusVRCチームが継続的に更新している、ソードアート・オンラインの再現ワールド。",
    "official": "Actively maintained recreation of Sword Art Online in VRChat, made by the ArgusVRC team."
  },
  {
    "id": "wrld_b6c0e9e9-6f64-4d79-ac61-b4a54ec736b4",
    "category": "todo",
    "name": "StrategoHex",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 4,
    "favorites": 211,
    "visits": 1686,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1ce2f41a-9dd7-4438-ad66-1fa161ad59c7/3/256",
    "note": "2-8人で遊べる、ちょっと変わった盤上陣取りゲームのワールドです。",
    "official": "2-8人で遊べる、ちょっと変わった盤上陣取りゲームのワールドです。 World featuring a slightly unconventional board game where 2 to 8 players compete to control territory."
  },
  {
    "id": "wrld_25e938a8-3b23-4d6b-a9c2-10e28cb4970b",
    "category": "todo",
    "name": "Bullet Time Agent",
    "subtype": "電車・駅",
    "capacity": 10,
    "recommendedCapacity": 6,
    "favorites": 35006,
    "visits": 163446,
    "tags": [
      "電車・駅",
      "ゲーム",
      "SF・近未来"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e29bae3f-466c-424e-8225-4904b3920987/1/256",
    "note": "8時間以上遊べる、没入型のアクションアドベンチャー。",
    "official": "An immersive action-adventure with over 8 hours of gameplay. Take on intense bullet hell combat, punch and fight robots, and tackle platforming challe"
  },
  {
    "id": "wrld_d358c59c-c4a6-4d6b-91c0-92ec5c3f3631",
    "category": "todo",
    "name": "REMEET -会えてないフレンドに会うための家-",
    "subtype": "チル",
    "capacity": 2,
    "recommendedCapacity": 2,
    "favorites": 2305,
    "visits": 22269,
    "tags": [
      "チル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_72ec775a-7605-409f-ba83-b15d027ab8d7/9/256",
    "note": "フレンドになったはいいけど会えてない人に会うために作りました。",
    "official": "フレンドになったはいいけど会えてない人に会うために作りました。 VRC外でフレンドになった人や昔にフレンドになってそれっきりという人、フレンドのフレンドなのであんまりじっくり話せてないなって人とお話しできるきっかけのワールドになってほしいです。＃REMEET_VRC"
  },
  {
    "id": "wrld_78e0d513-97bf-4f17-898b-316332b9aaa1",
    "category": "todo",
    "name": "【フレカ】俺のフレンドをカードにしたもので決闘するゲムワ",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 165,
    "visits": 3244,
    "tags": [
      "ゲーム",
      "カードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d9e94b89-6ea0-4935-9b2e-f5abbc65df83/4/256",
    "note": "フレンドをカードにして決闘するカードゲームのワールド。デッキの保存にも対応しています。",
    "official": "26/11/22 デッキ保存機能を追加しました。"
  },
  {
    "id": "wrld_c14f9df3-bb86-4587-a635-094dc922c13b",
    "category": "todo",
    "name": "フォトグラメトリ置き場 photogrammetry",
    "subtype": "写真・撮影",
    "capacity": 64,
    "recommendedCapacity": 32,
    "favorites": 282,
    "visits": 6013,
    "tags": [
      "写真・撮影",
      "アート・展示",
      "ノスタルジー",
      "フォトグラメトリ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_4010e558-d576-4cda-9f35-bde456c5264b/1/256",
    "note": "iPhoneアプリ『Scaniverse』で撮影したフォトグラメトリを並べたワールド。『第2回 レトロゲーム博物館計画』の資料展示会までの記録で、キャプションは後日追加予定とのことです。",
    "official": "キャプションなどはまた付けます。 「第2回 レトロゲーム博物館計画 資料展示会まで i phone アプリscanverseで撮影/Unity2022"
  },
  {
    "id": "wrld_d5c7df06-9b19-4e33-9f12-4169cfc9a060",
    "category": "todo",
    "name": "Just ガチャ",
    "subtype": "",
    "capacity": 12,
    "recommendedCapacity": 8,
    "favorites": 1429,
    "visits": 15611,
    "tags": [
      "ゲーム",
      "カジノ・メダル",
      "やり込み"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_285cf301-bb2b-4ced-a9a5-bc3641430fad/4/256",
    "note": "ガチャを回して「VRCのどこかで見た事のあるもの」のフィギュアをゲットしましょう。",
    "official": "ガチャを回して「VRCのどこかで見た事のあるもの」のフィギュアをゲットしましょう。 フィギュアをゲットすると、机の上にディスプレイされて図鑑も解放されます、コンプリートを目指しましょう。（全29種＋α） 2024/12/08 景品・ギミックを追加しました。"
  },
  {
    "id": "wrld_0c893838-48d6-4174-8c98-5bd84b73ae4f",
    "category": "todo",
    "name": "タイタンクラッシュ -TITAN CRASH- Ver.2.1",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 7320,
    "visits": 52478,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_74456f82-3810-4d20-bf68-4e5202bdb959/1/256",
    "note": "タイタンクラッシュは2人以上で遊べるパーティバランスゲームです！巨人の足下にブロックを沈めて、巨人を倒したら負け！",
    "official": "タイタンクラッシュは2人以上で遊べるパーティバランスゲームです！巨人の足下にブロックを沈めて、巨人を倒したら負け！どのブロックを沈めるか考えながら生き残りを目指そう！ // Ver.2.0 ポーズコピー機能追加 // Titan Crush is a party balance game for t"
  },
  {
    "id": "wrld_7b01db21-f17b-4654-8a64-e9c2c7229d52",
    "category": "todo",
    "name": "Blocked",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1198,
    "visits": 10720,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_0779b533-e6f4-426b-a5ea-671d8bb3c67d/1/256",
    "note": "貴方は【とある理由】によってクリアを阻まれてしまいます。原因を潰してクリアを目指しましょう。",
    "official": "貴方は【とある理由】によってクリアを阻まれてしまいます。原因を潰してクリアを目指しましょう。全１問の謎解きワールド。動作はグローバル。途中参加は不可です。クレジット 【VRC向け】iwaSync3 メディアプレイヤー by Hoshino Labs. https://booth.pm/ja/item"
  },
  {
    "id": "wrld_2435bf0e-62f4-4918-ad9a-806d1bc571ad",
    "category": "todo",
    "name": "陰謀論大喜利ボドゲ『陰謀論 in 暴論』",
    "subtype": "ゲーム",
    "capacity": 12,
    "recommendedCapacity": 8,
    "favorites": 1282,
    "visits": 8496,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a44054e3-b8ad-4022-acd3-047f7482bd1a/8/256",
    "note": "陰謀論を題材にした大喜利ボードゲーム。2つのお題を組み合わせて、それっぽい陰謀論をでっち上げろ！",
    "official": "陰謀論を題材にした大喜利ボードゲーム。2つのお題を組み合わせて、それっぽい陰謀論をでっち上げろ！人数:2人~ 所要時間:30分~1時間 PC/Android/iOS「『地球温暖化』は国が維持している。実は『医学』の発展のために？」（ディープブラック編には、政治・社会問題・陰謀論などのセンシティブな題"
  },
  {
    "id": "wrld_6242967c-d00a-4988-a396-c73161306b63",
    "category": "todo",
    "name": "VRC Strikers!!",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 5490,
    "visits": 52070,
    "tags": [
      "ゲーム",
      "スポーツ",
      "対戦"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_202baa5c-bf07-4ff8-8e9b-f9112ed25655/6/256",
    "note": "チーム対戦のスポーツゲームを楽しもう！",
    "official": "Enjoy Team Sport Game! ＃VRC_Strikers"
  },
  {
    "id": "wrld_2be3830f-90cc-4687-9696-b3f34f339b60",
    "category": "todo",
    "name": "次世代生命科学研究所からの脱出",
    "subtype": "",
    "capacity": 10,
    "recommendedCapacity": 5,
    "favorites": 3226,
    "visits": 28273,
    "tags": [
      "ゲーム",
      "謎解き"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9c455ed2-d388-45a1-b40f-24c968e3fec6/2/256",
    "note": "閉鎖予定の研究施設「次世代生命科学研究所」に関する奇妙な噂がネット上で拡散していた。",
    "official": "閉鎖予定の研究施設「次世代生命科学研究所」に関する奇妙な噂がネット上で拡散していた。 深夜に搬出される大型コンテナ。行方不明になった研究員。工事中のはずなのに稼働している設備。だが、施設側は一切の取材を拒否。 好奇心に背中を押されて、記者であるあなたは閉鎖当日、工事関係者に紛れて研究施設へと忍び込ん"
  },
  {
    "id": "wrld_314d9a11-c2a6-477b-866c-0f820124a80e",
    "category": "todo",
    "name": "【CBS対応】地下労働場",
    "subtype": "",
    "capacity": 30,
    "recommendedCapacity": 30,
    "favorites": 4805,
    "visits": 73733,
    "tags": [
      "ゲーム",
      "カジノ・メダル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_309cc4cf-337f-4ff3-ba90-c5041fea6474/3/256",
    "note": "【CBS対応】［カジノLU］を含む、CBS導入ワールドで利用可能なポイントを獲得できるワールドです！",
    "official": "【CBS対応】［カジノLU］を含む、CBS導入ワールドで利用可能なポイントを獲得できるワールドです！お友達と一緒にポイントを稼いじゃおう！！滞在人数によって自動獲得金額が変わります！！＃カジノLU"
  },
  {
    "id": "wrld_d048292b-42ad-4204-9372-0103d9a46f71",
    "category": "todo",
    "name": "Gion Street - 祇園通り日本",
    "subtype": "街・都市",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 49353,
    "visits": 629014,
    "tags": [
      "街・都市",
      "神社仏閣・宗教",
      "日本"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_862a00d2-1f1e-4492-9c46-5f0a7be67ec0/7/256",
    "note": "Light Volume OK - 次回の祇園通りワールド恒例・大晦日カウントダウン花火イベントは、2027年12月31日に開催されます！",
    "official": "Light Volume OK - 次回の祇園通りワールド恒例・大晦日カウントダウン花火イベントは、2027年12月31日に開催されます！ 午前0時ちょうど、天から駆け降りる神秘の馬が、午（うま）年の幕開けを華やかに告げます！ イベントは23時50分（10分前）から始まりますので、どうぞお見逃しなく"
  },
  {
    "id": "wrld_40c48562-6608-413b-a7d2-8bd3b4a07d6c",
    "category": "todo",
    "name": "100番出口VRC -EXIT No.100- Ver1.2",
    "subtype": "ホラー・不気味",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 4687,
    "visits": 72967,
    "tags": [
      "ゲーム",
      "異変探し"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_ede790a0-9ff6-41ca-b269-804291a863ca/1/256",
    "note": "『8番出口』系の異変探しワールド『100番出口』。ホラー要素はありません。",
    "official": "＃100番出口VRC -- NO-HORROR 8/29Update"
  },
  {
    "id": "wrld_3248488d-e38c-40c2-ae62-d227be1fb824",
    "category": "todo",
    "name": "終末メディエーター",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 228,
    "visits": 2487,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_29c394ee-ad91-4cb3-b656-97ad6a78e9b8/1/256",
    "note": "オリジナルソロボードゲーム『終末メディエーター』 あなたは終末計画を進める黒幕組織の指導者。",
    "official": "オリジナルソロボードゲーム『終末メディエーター』 あなたは終末計画を進める黒幕組織の指導者。 ゾンビを利用して人類を追い詰め、世界を陥落させろ。 ただし、人類を滅ぼすだけでは終わらない。 最後は自ら育てたゾンビを殲滅し、世界を手にするまでが計画だ。 人類にも、ゾンビにも勝たせるな。 終末を、描き出せ"
  },
  {
    "id": "wrld_4488462e-6370-4000-9c0e-132f5c644e90",
    "category": "todo",
    "name": "3D-VRC Tech Demo（Beta v0.6）",
    "subtype": "音楽・ライブ",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 780,
    "visits": 12574,
    "tags": [
      "技術デモ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1a31c9b4-5e57-4ab9-a378-467c9298c871/2/256",
    "note": "VRChatで立体映像を見せる技術デモ（ベータ版 v0.6）。ProTV対応のQuest版も更新。",
    "official": "3D-VRC Tech Demo（Beta v0.6）（New Quest Update with ProTV）（Quest fix coming soon!） Note: to fully experience this world a VR headset is needed."
  },
  {
    "id": "wrld_014d362b-164b-4b91-b628-a68f5ea0d5b7",
    "category": "todo",
    "name": "pix2pix - Deep Learning in VRC",
    "subtype": "演出・パーティクル",
    "capacity": 80,
    "recommendedCapacity": 40,
    "favorites": 234,
    "visits": 2756,
    "tags": [
      "演出・パーティクル",
      "技術デモ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2959248a-a655-4873-a1b0-e011dc2fcb54/2/256",
    "note": "画像変換AI「pix2pix」をシェーダーだけでVRChat内に実装したワールド。",
    "official": "Pix2Pix implementation inside a shader for VRChat"
  },
  {
    "id": "wrld_008259d0-8985-48e7-9d1e-e1ec2bcb433a",
    "category": "todo",
    "name": "いろいろフォトワールド",
    "subtype": "写真・撮影",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 3966,
    "visits": 36482,
    "tags": [
      "写真・撮影",
      "ネタ・ミーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_889b9c57-7321-441b-95d9-652eb35b5c70/5/256",
    "note": "前後に配置された画像に合わせて、ネットミームやゲームのワンシーンを再現した、おもしろ写真を撮ることができるワールドです。",
    "official": "前後に配置された画像に合わせて、ネットミームやゲームのワンシーンを再現した、おもしろ写真を撮ることができるワールドです。VR・デスクトップのどちらでも撮ることができます。クエストに対応しています。"
  },
  {
    "id": "wrld_7b417d22-e016-45dc-b80d-c604200eb80c",
    "category": "todo",
    "name": "【2人用】 マーダーミステリー「Super ＆ Market!」【Android対応】",
    "subtype": "自然・風景",
    "capacity": 2,
    "recommendedCapacity": 2,
    "favorites": 2637,
    "visits": 20014,
    "tags": [
      "ゲーム",
      "謎解き",
      "ロールプレイ",
      "2人専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f0e8e64c-0ffe-44b3-bfa0-a92662fa02a0/8/256",
    "note": "近所のスーパーに、なんと死体が！？2人用マーダーミステリーがプレイできるワールド2作目です。",
    "official": "近所のスーパーに、なんと死体が！？2人用マーダーミステリーがプレイできるワールド2作目です。前作未プレイでも問題ありません。所要時間1時間程度。ワールド音量60％以上推奨。途中入場不可なので注意してください。 プレイ感想は「＃スーパーマダミス」でお願いします！真相＆エンディング集をシナリオ作者のBo"
  },
  {
    "id": "wrld_9dbfe869-a96d-42de-9460-0acdabb361b1",
    "category": "todo",
    "name": "忌避展 -The Avoidance Museum-",
    "subtype": "アート・展示",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 2553,
    "visits": 26367,
    "tags": [
      "アート・展示",
      "体験型"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e623756a-6dac-4d87-a4a1-0e8d6bcdc27c/1/256",
    "note": "『忌避（きひ）』――不快なものや危険を避けようとする心理や行動をテーマにした、空間の展示。",
    "official": "「忌避（きひ）」は、不快なものや避けるべき状況を避けようとすることを意味し、生物が危険から身を守る行動や、人間が不快な感情を避ける心理的な反応 An exhibition of spaces you instinctively want to avoid."
  },
  {
    "id": "wrld_9ce2b063-3d70-498f-b904-28ef45294fd4",
    "category": "todo",
    "name": "Answer Impostor 〜フレンド擬態クイズ〜",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 6009,
    "visits": 96122,
    "tags": [
      "ゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f654049e-a083-44d6-9f7c-0c569740f6e0/7/256",
    "note": "「質問の答え」から中の人を当てる、みんなで遊ぶ推理パーティーゲームです。",
    "official": "「質問の答え」から中の人を当てる、みんなで遊ぶ推理パーティーゲームです。回答者はA〜Eのブースに隠れて質問に回答。予測者はその回答を手がかりに、誰がどのブースにいるかを当てます。 A multiplayer guessing party game where you figure out who's"
  },
  {
    "id": "wrld_1165b4bd-cbd3-4727-b3eb-7ed44fb7bf1a",
    "category": "chill",
    "name": "さよならを言いたくて",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 1296,
    "visits": 29233,
    "tags": [
      "チル",
      "自然・風景",
      "ストーリー",
      "一人でゆっくり",
      "夏",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e188c799-7611-4a5f-a029-af80cbb1e1d3/2/256",
    "note": "『さようなら』を言えなかったあの人へ捧げる、夏の病室のワールド。大神白狼_が2026年に公開した作品で、賑やかに過ごす場所ではなく、別れの記憶に静かに向き合う物語寄りの一軒です。Quest対応。",
    "official": "「さようなら」を言えなかったあの人へ。夏の病室のワールドです。"
  },
  {
    "id": "wrld_83fc4aa3-b698-4748-9c63-acebcea439b9",
    "category": "chill",
    "name": "DreamyRoom",
    "subtype": "チル",
    "capacity": 80,
    "recommendedCapacity": 80,
    "favorites": 2103,
    "visits": 105711,
    "tags": [
      "チル",
      "海・水中",
      "写真・撮影",
      "自然・風景",
      "睡眠・V睡",
      "温泉",
      "夕暮れ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_1a5f66a9-ddf7-4da7-ba35-eae7f234b79c/5/256",
    "note": "夕暮れの鏡のような海に浮かぶ杉の小屋で、実在の山並みを眺めて過ごすチルワールド。AlanBackerが2026年に公開した作品で、温泉や広いデッキに加え、海底へ泳いだり雨風を呼んだりもできます。映画ラウンジや撮影スタジオも完備。Quest・iOS対応。",
    "official": "A cedar cabin on a mirror sea at golden hour, ringed by real mountains, with baked true reflections. Swim down to the seabed （jump at the deck edge or"
  },
  {
    "id": "wrld_cc3694fd-3b86-4649-afc1-fb899bbfd24c",
    "category": "chill",
    "name": "Evermore - 彼方",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 15560,
    "visits": 362806,
    "tags": [
      "チル",
      "夜・夜景",
      "雪・冬",
      "睡眠・V睡",
      "フレンドと",
      "自然・風景",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a2ef7d6e-3e8f-45a0-9b19-2cdf5913400d/2/256",
    "note": "雪山の頂上から雲海と満天の星空を眺める、幻想的なキャンプワールド。『真夜中の標本』も手がける_you5248が2026年に公開した作品で、添えられた一言は「あの日々には、もう手が届かない。それでも、ここからはずっと見えている」。マッチで火をつける焚き火や昼夜切り替え、歩く猫も。動画プレイヤーやベッドもあり、チルにもV睡にも。Quest・iOS対応。",
    "official": "あの日々には、もう手が届かない。それでも、ここからはずっと見えている。/Those days are out of reach now. Even so, from here they are always in sight."
  },
  {
    "id": "wrld_064b489b-f89b-4cb4-8ad4-4fcc52243ac4",
    "category": "chill",
    "name": "Black Cove",
    "subtype": "チル",
    "capacity": 12,
    "recommendedCapacity": 12,
    "favorites": 4598,
    "visits": 154544,
    "tags": [
      "チル",
      "夜・夜景",
      "宇宙・空",
      "集会・交流",
      "ギミック"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_2159abee-6eba-44ba-aa80-e461a170919c/3/256",
    "note": "ボタンを押すと部屋が機械的に分解され、寝室・ラウンジ・月面・工場の4つの雰囲気に組み替わるチルワールド。作り物と分かっていても窓の景色が本物に感じられる、不思議な没入感が体験記でも話題です。",
    "official": "A cozy chill world with 4 different vibes. Hit the button, and watch the space mechanically tear down and reassemble. 4つの部屋があるチルワールドです。ボタンを押して空間を物理的に再"
  },
  {
    "id": "wrld_6821c4de-cd7c-4959-a556-08012dfee29a",
    "category": "chill",
    "name": "RE:Factory Aquarium",
    "subtype": "海・水中",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 215,
    "visits": 14908,
    "tags": [
      "チル",
      "海・水中",
      "アート・展示",
      "睡眠・V睡",
      "雨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_fe405632-046f-4b9b-a30b-72042af0be43/4/256",
    "note": "大きなアクアリウムのある、モダンインダストリアル調のチルワールド。晴れと雨を切り替えられ、入口から外にも出られます。動画プレイヤーやSleepKit 2も備えています。",
    "official": "大きなアクアリウムが置かれたモダンインダストリアル調の落ち着いた雰囲気のチルワです。天候は晴と雨を切り替えられます。一応入口から外にも出られます。動画プレイヤー（yamaplayer） / QVpen / imagepad / RBSsleepkit2"
  },
  {
    "id": "wrld_364d6e7f-96a2-48ae-bfdd-a756a903183b",
    "category": "chill",
    "name": "魚と、共に。",
    "subtype": "チル",
    "capacity": 12,
    "recommendedCapacity": 12,
    "favorites": 4910,
    "visits": 256019,
    "tags": [
      "チル",
      "海・水中",
      "睡眠・V睡",
      "一人でゆっくり",
      "狭い部屋",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_8caa50a8-5e27-47c9-ad02-66004b5c379b/4/256",
    "note": "水槽に囲まれたくて作られた、かなり狭い小さな部屋。marukuroが2026年に公開した作品で、青く暗い光の中で魚を眺めながら眠りにつける、定員12人のこぢんまりした水族館チルです。Light Volumesでアバターも綺麗に映ります。Quest対応。",
    "official": "水槽に囲まれたくて作りました。かなり狭いです/VRC Light Volumes導入済"
  },
  {
    "id": "wrld_434bd14e-4fac-4add-b859-a4eda3143e74",
    "category": "chill",
    "name": "蒼霖",
    "subtype": "チル",
    "capacity": 10,
    "recommendedCapacity": 10,
    "favorites": 1601,
    "visits": 175707,
    "tags": [
      "チル",
      "一人でゆっくり",
      "睡眠・V睡",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_aea506d7-f381-434d-afe5-a3a44d776470/5/256",
    "note": "『静かにゆったり過ごせるくつろぎの空間』という作者の言葉どおりのチルワールド。えびさんが2026年に公開した作品で、賑やかさより静けさを求める夜に。PC専用。",
    "official": "静かにゆったり過ごせるくつろぎの空間"
  },
  {
    "id": "wrld_47ccd61e-86cd-41b3-88df-77577fe65f96",
    "category": "chill",
    "name": "Gardenia Blue",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 10180,
    "visits": 375425,
    "tags": [
      "チル",
      "写真・撮影",
      "海・水中",
      "睡眠・V睡",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5db2cdc9-c03b-4e5c-85dc-be488e8ca747/17/256",
    "note": "透き通る青い海と波の音に包まれる南国リゾート。iochiMochiMochiが2026年に公開した作品で、カフェバーでコーヒーを淹れたり、海に入って小魚と泳いだり。ベッドルームや動画プレイヤー、スリープキットも揃う、贅沢なチル空間です。デスクトップではTキーでタブレットを呼び出せます。PC専用。",
    "official": "青い空と海があります。 YamaPlayer / QvPen / FlipCamera / RBS SleepKit 2（デスクトップのタブレット呼び出しはTキーです）"
  },
  {
    "id": "wrld_4e162934-d9a9-4c40-9ece-2a83505c44d1",
    "category": "chill",
    "name": "Justピタゴラスイッチ Marble Machine",
    "subtype": "チル",
    "capacity": 64,
    "recommendedCapacity": 64,
    "favorites": 1139,
    "visits": 17832,
    "tags": [
      "チル",
      "アート・展示",
      "フレンドと",
      "ギミック"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_9b343fff-b5b0-4062-ac2a-957d75bab7bf/3/256",
    "note": "科学館にあるようなピタゴラ装置（マーブルマシン）が部屋中を巡るワールド。転がる白い球には実際に乗れて、一人称視点で装置の中を進む体験もできます。眺めているだけでも飽きません。作者のアバターや衣装の展示、寝る判定を切り替えられるベッドやナイトモードもあります。",
    "official": "科学館によくあるピタゴラスイッチ的なものを再現してみました。英語ではMarbleMachineと言うようです。わたしが作ったアバターと衣装も展示しています。ベッドは寝る判定OnOffスイッチ付きです。9/17 NightMode追加しました。"
  },
  {
    "id": "wrld_59316374-7807-45e8-b7d9-d860eb63e18a",
    "category": "chill",
    "name": "レベル４特殊収容室［Level4 Container］",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 961,
    "visits": 12933,
    "tags": [
      "チル",
      "ホラー・不気味",
      "SF・近未来",
      "写真・撮影",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_28f82a5e-432d-4f33-be72-7831b24bec71/1/256",
    "note": "怪異を収容するための特殊な檻のような施設。壁一面に光るお札と結界が張り巡らされ、サイバーパンクなオカルト空間で過ごせます。用意されているのは動画プレイヤーとペンと時計だけ。PC専用。",
    "official": "「来訪者」を収容するための特殊施設。 彼らの要望により最低限のものは用意されている。"
  },
  {
    "id": "wrld_26009b91-9add-46d5-bec5-d7c54c08ede1",
    "category": "chill",
    "name": "でけぇ水槽がある部屋",
    "subtype": "チル",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 597,
    "visits": 25927,
    "tags": [
      "チル",
      "海・水中",
      "集会・交流",
      "フレンドと"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f260b4b9-f0a1-4d08-bb0d-703466e039c7/5/256",
    "note": "部屋を囲むでっかい水槽が主役のチルワールド。廊下の奥のはしごからは水槽の中にも入れます。動画やミラー、ペン、ベッド、お酒、少し内容を変えたトークガンまであり、魚を眺めながらフレンドと雑談したり、魚好き同士で集まったりするのにどうぞ。",
    "official": "デカい水槽に囲まれた部屋です フレンドとの雑談や魚が好きな人におススメ トークガンは少し内容を変えてます。 動画、ミラー、QVpen、ベッド、酒、バット、火災報知器あります。"
  },
  {
    "id": "wrld_37144a50-ad40-4f0e-b0f3-ae8d4f7b938c",
    "category": "game",
    "name": "VRCテニスガーデン -VRC TennisGarden-",
    "subtype": "ゲーム",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 4057,
    "visits": 70221,
    "tags": [
      "ゲーム",
      "対戦",
      "一人でも",
      "初心者向き",
      "スポーツ",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_cef2d6b7-695c-49ff-8756-9b7789e4065d/7/256",
    "note": "必殺技100種をセットして戦う超次元テニス。NPC対戦があり一人でも遊べ、軌道ガイドや壁打ち練習で初心者も安心。ダブルスや技名読み上げ付き観戦モードも。PC専用、定員20人。",
    "official": "必殺技テニスが楽しめるワールドです。好きな技をセットして超次元テニスをしよう！ ダブルスや通常テニス、NPC対戦も！ \"PCVROnly\" 日本語/English/한국어/简体中文/繁體中文"
  },
  {
    "id": "wrld_f97ad04b-958d-4f8e-8df1-06eacdf84417",
    "category": "game",
    "name": "SoulLink -ソウルリンク- VR Card Duel",
    "subtype": "ゲーム",
    "capacity": 30,
    "recommendedCapacity": 30,
    "favorites": 3216,
    "visits": 91814,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "カードゲーム",
      "デッキ構築",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_64f9513b-91df-4d47-8684-6a662e704d6d/7/256",
    "note": "5つの種族と数百種類のカードを組み合わせ、自分だけのデッキで挑むVRカードデュエル。チュートリアルやCPU戦、友人戦、ランクマッチまで揃った本格派の対人カードゲームで、UIとルール説明は9言語に対応しています。Quest対応。",
    "official": "SoulLink VR CARD DUEL 5種族と数百種類のカードを組み合わせて戦おう！ チュートリアル・CPU戦・友人戦・ランクマッチを搭載。マスターランクを目指そう！ UI・ルール・カード説明は9言語対応。VR／デスクトップ、PC／Questで遊べます。 ランクマッチは同じインスタンス内で行い"
  },
  {
    "id": "wrld_319e09af-64a6-4984-ae03-6e54cd028b1a",
    "category": "game",
    "name": "【トーク型ゲームワールド】脳内ランキング",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 2216,
    "visits": 32920,
    "tags": [
      "ゲーム",
      "チル",
      "フレンドと",
      "パーティー",
      "トークゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_914219e8-e919-4e42-85ba-cf74ab1cdf2b/5/256",
    "note": "出題者が頭の中で決めた『一番〜〜な人は？』のランキングをヒントに、本当のお題を推理するトーク型ゲーム。最大16人、途中参加・退出も自由で、初対面の人が多いとき向けの【EX】ジャンルもあります。フレンド同士の意外な一面が見えて盛り上がります。",
    "official": "「一番～～な人は？」 出題者が作ったランキングから、本当のお題を見抜け！ 最大16人で遊べるトーク型パーティーゲーム。 はじめましての人が多い場合でも遊べる【EX】ジャンルあり！途中参加・退出自由！＃VRC_脳内ランキング"
  },
  {
    "id": "wrld_99907368-1097-4a1e-a847-947bb12854cb",
    "category": "game",
    "name": "slayTheUdon",
    "subtype": "ゲーム",
    "capacity": 12,
    "recommendedCapacity": 6,
    "favorites": 14451,
    "visits": 269204,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "カードゲーム",
      "デッキ構築",
      "ローグライト"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_485e786f-81bd-4872-a78c-e549fee8cb1c/4/256",
    "note": "『Slay the Spire』風のデッキ構築カードバトルをUdonで再現したワールド。定員4人の少人数制で、説明文なしでも公開直後から訪問が急増した話題作です。カードを集めて塔を登る、ローグライク好き向けの一作。",
    "official": "slayTheUdon"
  },
  {
    "id": "wrld_d1d2318c-5144-4902-a774-876f45c06804",
    "category": "game",
    "name": "Price Guess",
    "subtype": "ゲーム",
    "capacity": 24,
    "recommendedCapacity": 12,
    "favorites": 82263,
    "visits": 1410866,
    "tags": [
      "ゲーム",
      "フレンドと",
      "集会・交流",
      "初心者向き",
      "クイズ",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a609d023-b4f0-45b3-b923-7ff9ac9e0de1/6/256",
    "note": "画面に出る商品の値段を当てる、全10問のクイズゲーム。『Overseer』なども手がけるJar作で、人数制限なしで遊べます。絶妙に分からない出題が続き、大人数でワイワイ言いながら考えるのが一番楽しい作りで、バーチャル番組の企画で使われたことも。短時間でも盛り上がる鉄板ネタです。Quest対応。",
    "official": "Guess the price of that stuff! Game for any number of players!"
  },
  {
    "id": "wrld_0d8e96f5-7aa1-443d-a414-9a153b87c1d6",
    "category": "game",
    "name": "PixelWorld",
    "subtype": "チル",
    "capacity": 18,
    "recommendedCapacity": 12,
    "favorites": 9627,
    "visits": 1541851,
    "tags": [
      "チル",
      "ゲーム",
      "一人でも",
      "放置・育成",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_40b77e14-4217-4b8d-8e17-8a0ec64e9ced/7/256",
    "note": "白を基調にした静かな空間で、自分のペースでくつろげるチル＆放置系ワールド。動画を見ながら進められる放置ゲームと、小さな物語も入っています。1人でも遊べるワールド特集にも載った、待機や作業の合間に置いておける場所です。Quest対応で、誰かと静かに過ごしたいときにも。",
    "official": "A quiet, relaxing world where you can unwind at your own pace. It features an idle game you can enjoy while watching videos, along with a small story "
  },
  {
    "id": "wrld_a83aec00-b372-46a0-8e3c-2b99d2038ed2",
    "category": "game",
    "name": "［WIP］Guess That Booth",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 10,
    "favorites": 4012,
    "visits": 34166,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "初心者向き",
      "クイズ",
      "制作途中",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_94003989-5af8-4626-83ee-7d1424a7a050/2/256",
    "note": "BOOTHで販売中の商品の価格を当てるクイズゲーム。ほぼ人数制限がなく大人数でワイワイ遊べる。Android・iOS・PC対応、定員32人。開発中（WIP）のため内容は更新されていく。",
    "official": "This World is still Working in Progress / このワールドまだ開発中です / VRChatterのみんなさんたぶん普段からBooth使ってるよね？Booth詳しいよね？じゃあ、Boothの商品価格当てられる？ このゲームは、Boothの商品価格を予想するゲーム！"
  },
  {
    "id": "wrld_0f953b7d-74e9-49d4-9655-16c819f8a711",
    "category": "game",
    "name": "HEADON -ヘッドン-",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 16,
    "favorites": 371,
    "visits": 4961,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "パーティー",
      "演出・パーティクル"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_a35a2d9e-d68f-4e47-be5b-8afea18ba4c2/1/256",
    "note": "突進で相手を吹っ飛ばすPvPバトルロワイヤル。2人から遊べ、チャージして体当たりするだけのシンプルなルールで誰でもすぐ楽しめる、パーティクル演出つきの対戦ゲームです。パーティクルが重いときは、オーラを黄色に統一すると軽くなります。",
    "official": "PvP バトルロワイヤル 2人～ 突進で相手を吹っ飛ばし、最後の1人になるまで戦おう！ パーティクルが重いときはオーラ（黄）で統一すると幾分かマシだと思います"
  },
  {
    "id": "wrld_9d010e4e-28cc-45e9-96bb-53158e6d5d5e",
    "category": "game",
    "name": "お嬢様ボードゲーム_ojou",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 1278,
    "visits": 8367,
    "tags": [
      "ゲーム",
      "パーティー",
      "フレンドと",
      "初心者向き",
      "ボードゲーム",
      "トークゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_d94877b4-d836-4298-b4c6-3dfd6528389e/7/256",
    "note": "出た場面に合わせてお嬢様言葉で喋る、シンプルなボードゲーム。すごろくを進めながら、どんな場面でも品よくお嬢様らしく振る舞えるかが試される。定員32人で大人数でも遊べる。",
    "official": "場面に合わせてお嬢様言葉で喋る簡単ボードゲームですわ！2022.06.17 新規カード多数追加しましたわ。"
  },
  {
    "id": "wrld_96a3dbd6-15f6-4eb4-98c3-b9c7f993ff83",
    "category": "game",
    "name": "Ludo",
    "subtype": "チル",
    "capacity": 16,
    "recommendedCapacity": 10,
    "favorites": 47929,
    "visits": 1287528,
    "tags": [
      "チル",
      "ゲーム",
      "フレンドと",
      "一人でも",
      "ボードゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_bfa54815-12c6-435e-bca5-4627de73b5fa/3/256",
    "note": "世界的なボードゲーム『ルドー』をそのまま遊べるワールド。サイコロを振って自分のコマを先にゴールさせた方が勝ち。CPU対戦もあるので一人でも、フレンドと4人対戦でも。Quest対応。",
    "official": "ボードゲームのLudoをプレイできるワールドです。友達と一緒に遊んでみてください。CPUと対戦もできます。 This is a world where you can play the board game Ludo. Try playing with your friends. You can a"
  },
  {
    "id": "wrld_6475f4ee-380e-4ad3-a85a-c459986548e3",
    "category": "game",
    "name": "CRUSH FACTORY IDLE",
    "subtype": "チル",
    "capacity": 24,
    "recommendedCapacity": 24,
    "favorites": 12733,
    "visits": 2697491,
    "tags": [
      "ゲーム",
      "一人でも",
      "フレンドと",
      "放置・育成",
      "やり込み",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_aac0e7f9-972e-42ae-a908-3bd85e4cb89b/1/256",
    "note": "鉱石を砕いて稼いで強化し、プレステージとアセンションで高みを目指す放置系ゲーム。torikyattが2026年に公開した作品で、育てばAUTOでほぼ放置周回も可能なので、チルや作業の横で進めるのに最適。攻略記事が出るほど奥の深い一作です。日英対応、PC専用。",
    "official": "v1.0.11｜ 鉱石を砕き、稼ぎ、強化し、プレステージでさらなる高みへ。 Crush ore, earn, upgrade, and Prestige your way to greater heights. 日本語 / English QVpen / YamaPlayer / RBS Sleep"
  },
  {
    "id": "wrld_4cc9519e-21c7-49db-a012-d5bf65f3dd49",
    "category": "game",
    "name": "シンプルパターゴルフ コース1",
    "subtype": "",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 1645,
    "visits": 12177,
    "tags": [
      "ゲーム",
      "フレンドと",
      "初心者向き",
      "一人でも",
      "スポーツ",
      "軽量",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_17e11e79-3d5f-4439-8a95-0d76b54de87e/2/256",
    "note": "その名の通りシンプルなパターゴルフのコース1。kei4470が2025年に公開した作品で、軽量で入りやすく、コース2〜4まで続編も公開中。フレンドと気軽にラウンドを回れる入門向けゴルフです。Quest対応。",
    "official": "9/3 コース１ アップロード 9/10 コース２ アップロード 9/17 コース３ アップロード 9/26 コース4"
  },
  {
    "id": "wrld_07ee4e44-940f-4405-a398-e969114a0164",
    "category": "game",
    "name": "TonboWerewolf - トンボ人狼",
    "subtype": "ゲーム",
    "capacity": 40,
    "recommendedCapacity": 20,
    "favorites": 8452,
    "visits": 183827,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_5963965b-28d0-41db-ba7c-b28192c30449/2/256",
    "note": "VRChatで遊ぶ、純粋な人狼ゲーム。占い師や霊媒師のほか、猫又や狂信者などモダンな役職まで全47種があり、役職の説明はマスタールームで確認できます。システムが分かりやすく初心者でも入りやすく、話し合いの推理に集中できるのが魅力。フレンド同士の定期戦にも人気です。5〜20人、Quest対応。",
    "official": "Japanese styled werewolf game!（jinro） ｜ 人狼ゲームをVRChatで遊ぼう。猫又や狂信者など、モダンな役職も使用可能。 ｜ 各種役職の説明はマスタールームを参照。 特殊役職の一部は、他の人狼ゲームと異なる挙動をもつため、必ずご確認ください ｜ タグ: ＃Tonb"
  },
  {
    "id": "wrld_36a4f752-6e45-4c37-9eed-279525f3e8c8",
    "category": "game",
    "name": "taktie's Gun Dynamics【FULL RELEASE】",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 32,
    "favorites": 36071,
    "visits": 984736,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "シューター・FPS",
      "VR推奨"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_6e761114-7e99-4855-b693-1d1f2f9e6742/8/256",
    "note": "マガジン交換まで自分の手で操作する、リアル重視のチーム対戦VR FPS。HUDなしの硬派な作りで、仲間と連携する緊迫感のある戦闘が楽しめます。初心者はまずチームデスマッチから。デスクトップでも遊べ（Fキーでリロード）ますが、本領はVRです。",
    "official": "リアルな銃器操作を再現したチーム対戦型VR FPS。仲間と連携しながら、緊迫感のある戦闘を楽しめます。 Xで「＃TGD_VRC」を付けてフィードバックをよろしくお願い致します！！ Desktop user: F key to Reload. デスクトップの方は、「Fキー」で銃のリロードが可能です。"
  },
  {
    "id": "wrld_7e2871b3-add3-4f91-8269-d4b84dd1069a",
    "category": "game",
    "name": "大富豪が遊べるワールド【Cyeber Daifugo Arena】",
    "subtype": "ゲーム",
    "capacity": 16,
    "recommendedCapacity": 16,
    "favorites": 3633,
    "visits": 49029,
    "tags": [
      "ゲーム",
      "フレンドと",
      "対戦",
      "カードゲーム"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_f9e81620-5bc8-4a4d-a782-066d4d84cc9a/5/256",
    "note": "2〜5人でトランプの大富豪が遊べるワールド。サイバーなアリーナで、基本ルールに加えてローカルルールやレートシステムも楽しめます。日英対応。",
    "official": "【BOOTHにて本ワールドの大富豪ギミックを販売中!!】 2~5人で大富豪が遊べるワールドです！ 基本ルールに加え、ローカルルールも多数搭載してます。 レートシステムも実装してます！勝ちまくってレートを上げよう!! 言語は日本語と英語に対応してます。 ［We plan to sell the \"Da"
  },
  {
    "id": "wrld_4f7dcdbf-bc92-4563-b307-080c136248cf",
    "category": "game",
    "name": "Bump n' Bash: Round 2 バンプ・バッシュ 2",
    "subtype": "宇宙・空",
    "capacity": 80,
    "recommendedCapacity": 64,
    "favorites": 5727,
    "visits": 161287,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "パーティー",
      "宇宙・空",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_67e82dad-1919-4c34-9b68-d9122d791b51/15/256",
    "note": "フレンドを殴って吹っ飛ばす、スマブラ風パーティーファイターの第2弾。MintyMimixが2026年に公開した作品で、ダメージがたまるほど遠くへ飛ばされるルールに、さまざまなアイテムや陣取り・ボス戦などのモードも。最大64人、15以上のステージと12種のモードで大人数ほどカオスに盛り上がります。前作は日本の交流イベントでも遊ばれました。練習場で試し撃ちもでき、Quest・iOS対応。",
    "official": "（Release v2.1.9.10）Send your foes flying across soaring skies, erupting volcanoes, and even deep space with a well-timed punch in this platform fighte"
  },
  {
    "id": "wrld_8b9b3207-02ee-468e-b301-be6212447813",
    "category": "game",
    "name": "魚げっさー",
    "subtype": "ゲーム",
    "capacity": 32,
    "recommendedCapacity": 16,
    "favorites": 11898,
    "visits": 121280,
    "tags": [
      "ゲーム",
      "フレンドと",
      "パーティー",
      "初心者向き",
      "クイズ"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_42cfe478-2076-43ac-b0af-64779b083e3e/9/256",
    "note": "魚の頭だけを見て全長を予想する、オモコロチャンネルの動画『魚の長さ当てゲーム』が元ネタのお手軽ゲーム。知識の差がほとんど出ないので誰でも対等に盛り上がれ、『伸びろー！』と叫ぶ一体感が楽しい一作です。1ゲーム約5分、最大8人。",
    "official": "魚の頭から、魚の長さを予想するお手軽ゲームワールドです！ 1ゲーム約5分、最大8人。 オモコロチャンネルの「魚の長さ当てゲーム」という動画が元ネタです。 ＃魚げっさー ＃UoGuessr"
  },
  {
    "id": "wrld_1af128b8-27fe-4492-a862-264ea4228970",
    "category": "game",
    "name": "【バーチャルライフVR】何でもできる第二の人生 Ver0.3.3",
    "subtype": "",
    "capacity": 20,
    "recommendedCapacity": 20,
    "favorites": 11284,
    "visits": 162854,
    "tags": [
      "ゲーム",
      "フレンドと",
      "探索",
      "ロールプレイ",
      "対戦",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_86b19c1c-2f68-4aed-964a-6b7fe9d14159/6/256",
    "note": "VRChatの中にもうひとつの人生を作る、GTA風オープンワールド生活シム。働いて稼いで車を買うもよし、犯罪を重ねて警察に追われるもよし。資産トップは市長になれる、自由度自慢の大規模ワールド。PC専用。",
    "official": "ここでは、銃を撃ったり走り回ったり食事をしたり警察に追われたり...本物の人生のように何でもできるワールドです。GTAをモチーフにして作られています。バグ報告、ご意見はこちら公式XのDMまで ＠vrc_vlv"
  },
  {
    "id": "wrld_457d691a-ccaf-46e5-9978-70171cd502c2",
    "category": "game",
    "name": "JUST 七並べ",
    "subtype": "ゲーム",
    "capacity": 25,
    "recommendedCapacity": 16,
    "favorites": 1812,
    "visits": 24467,
    "tags": [
      "ゲーム",
      "対戦",
      "フレンドと",
      "初心者向き",
      "カードゲーム",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_98af7cd0-f50c-4dbf-a4ec-f8627e3d76ea/4/256",
    "note": "トランプの七並べをVRChatで。手札を直接つかんでステージ中央へ投げて出す、シンプルで分かりやすいカードゲームです。CPUで人数調整もでき、最大8人。Quest対応。",
    "official": "トランプゲームの七並べができるワールドです。手札をつかみ、ステージ中央にブン投げて提出。 VR・単機・デスクトップ対応。【対応ルール】ジョーカー（0～2枚）／ジョーカー＋手札のセット出し／AKリンク／AKトンネル／不死身のジョーカー 【プレー人数】最大8人（3人以上推奨） CPUで人数調整できます。"
  },
  {
    "id": "wrld_9a40fa71-41e0-42c5-ab73-f0e23e49cfb5",
    "category": "game",
    "name": "箱庭鉄道2（非電化）RBUR Train Simulator",
    "subtype": "電車・駅",
    "capacity": 20,
    "recommendedCapacity": 10,
    "favorites": 869,
    "visits": 14145,
    "tags": [
      "電車・駅",
      "ゲーム",
      "乗り物",
      "一人でも",
      "フレンドと",
      "高負荷",
      "PC専用"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_3c496469-689f-4ec7-9bbb-9a7daa57e13a/7/256",
    "note": "RBURシステムで自分で列車を運転できる箱庭鉄道の第2弾、非電化路線版。sinhy99が2026年に公開した作品で、円環状の線路を4種類の列車が走る前作『VRC箱庭鉄道』に続くシリーズです。景色を眺めながらのんびり運転できますが、車両を増やすと重くなる重量級ワールドなので、スペックに注意。PC専用。",
    "official": "A drivable railway world powered by the RBUR system. Compared to the original \"Hakoniwa Railway,\" this version focuses more on the scenery. Please not"
  },
  {
    "id": "wrld_1af53798-92a3-4c3f-99ae-a7c42ec6084d",
    "category": "game",
    "name": "Massive Medal Pusher / クソでっけぇプッシャーゲーム",
    "subtype": "チル",
    "capacity": 60,
    "recommendedCapacity": 20,
    "favorites": 52592,
    "visits": 4491740,
    "tags": [
      "チル",
      "ゲーム",
      "フレンドと",
      "一人でも",
      "カジノ・メダル",
      "Quest対応"
    ],
    "thumb": "https://api.vrchat.cloud/api/1/image/file_e4b3423d-4f15-46ee-94a4-46c7362f4feb/5/256",
    "note": "とにかくクソでっけぇメダルプッシャー。りくち作で、特殊メダルやフィーバー、インスタンス共通のジャックポット、グローバルランキングまであり、大型アップデートで抽選機や実績も増え続けています。眺めながら雑談したり、オートで放置したり、台の中に入ったり。気づけば1時間溶ける中毒性で、Xでは「#でかプ」の愛称でジャックポットの報告が飛び交います。訪問は440万超。広いので大人数の集まりにも。日英対応、Quest対応。",
    "official": "【ENG / JP】【Ver.5.6.0】 SO MASSIVE!!!! Massive local medals - global leaderboards ＆ instance-wide features await! でっけえ！！！！ メダルは負荷を考慮して非同期です。。"
  }
];
