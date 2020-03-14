const friends = {
  namespaced: true,
  state: {
    members: [
      {
        id: 1,
        name: '忍者セット',
        description: '天下をとるのはおれだ！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=忍者セット',
        color: 'red lighten-5',
        friends: [
          { name: '入道ロボ', color: 'cyan darken-3 white--text' },
          { name: 'サスケロボ', color: 'cyan darken-3 white--text' },
          { name: 'ガマロボ', color: 'cyan darken-3 white--text' },
          { name: '火トンロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 2,
        name: 'スポーツセット',
        description: 'めざせチャンピオン！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=スポーツセット',
        color: 'pink lighten-5',
        friends: [
          { name: 'すもうロボ', color: 'cyan darken-3 white--text' },
          { name: '先生ロボ', color: 'cyan darken-3 white--text' },
          { name: 'ガキ大将ロボ', color: 'cyan darken-3 white--text' },
          { name: 'サッカーロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 3,
        name: 'ファイアセット',
        description: '',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=ファイアセット',
        color: 'purple lighten-5',
        friends: [
          { name: 'ガリ勉ロボ', color: 'cyan darken-3 white--text' },
          { name: '野球ロボ', color: 'cyan darken-3 white--text' },
          { name: 'フットボールロボ', color: 'cyan darken-3 white--text' },
          { name: 'クイシンボ―ロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 4,
        name: 'わんぱくセット',
        description: '',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=わんぱくセット',
        color: 'deep-purple lighten-5',
        friends: [
          { name: 'ロボX', color: 'cyan darken-3 white--text' },
          { name: 'ロボZ', color: 'cyan darken-3 white--text' },
          { name: 'ドライブタマゴロー', color: 'cyan darken-3 white--text' },
          { name: 'ブンブンタマゴロー', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 5,
        name: 'スピードセット',
        description: 'おれが一番早いダッチ！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=スピードセット',
        color: 'indigo lighten-5',
        friends: [
          { name: 'モグラロボ', color: 'cyan darken-3 white--text' },
          { name: 'レーサーロボ', color: 'cyan darken-3 white--text' },
          { name: 'ライダーロボ', color: 'cyan darken-3 white--text' },
          { name: 'ジェットロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 6,
        name: 'タウンセット',
        description: 'みんなでつくろうすみよい町！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=タウンセット',
        color: 'blue lighten-5',
        friends: [
          { name: '出前ロボ', color: 'cyan darken-3 white--text' },
          { name: '駅弁ロボ', color: 'cyan darken-3 white--text' },
          { name: '牛乳ロボ', color: 'cyan darken-3 white--text' },
          { name: '焼きイモロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 7,
        name: 'トマランセット',
        description: '今日もはりきるダッチ！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=トマランセット',
        color: 'light-blue lighten-5',
        friends: [
          { name: 'ドーロローラーロボ', color: 'cyan darken-3 white--text' },
          { name: '消防ロボ', color: 'cyan darken-3 white--text' },
          { name: 'ジャングルロボ', color: 'cyan darken-3 white--text' },
          { name: '宇宙人ロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 8,
        name: 'パクパクセット',
        description: 'お母さんと遊べるダッチ！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=パクパクセット',
        color: 'cyan lighten-5',
        friends: [
          { name: 'コックロボ', color: 'cyan darken-3 white--text' },
          { name: '買物ロボ', color: 'cyan darken-3 white--text' },
          { name: 'おフロロボ', color: 'cyan darken-3 white--text' },
          { name: 'トイレロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 9,
        name: 'スポコンセット',
        description: 'いくぜ！！ダッシュダ！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=スポコンセット',
        color: 'teal lighten-5',
        friends: [
          { name: 'シャゲキロボ', color: 'cyan darken-3 white--text' },
          { name: 'スキーロボ', color: 'cyan darken-3 white--text' },
          { name: 'バーベルロボ', color: 'cyan darken-3 white--text' },
          { name: 'テニスロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 10,
        name: 'オービーセット',
        description: 'メチャンコがんばるダッチ！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=オービーセット',
        color: 'green lighten-5',
        friends: [
          { name: 'アイスホッケーロボ', color: 'cyan darken-3 white--text' },
          { name: 'ゴルフロボ', color: 'cyan darken-3 white--text' },
          { name: '料理ロボ', color: 'cyan darken-3 white--text' },
          { name: '信号ロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 11,
        name: 'ゴーゴーセット',
        description: 'どどーんとでっかく登場！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=ゴーゴーセット',
        color: 'light-green lighten-5',
        friends: [
          { name: 'ドライブロボ', color: 'cyan darken-3 white--text' },
          { name: 'スタンドロボ', color: 'cyan darken-3 white--text' },
          { name: '工事ロボ', color: 'cyan darken-3 white--text' },
          { name: 'ドロボーロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 12,
        name: 'ドカンチセット',
        description: 'パワフルロボダッチ大集合！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=ドカンチセット',
        color: 'lime lighten-5',
        friends: [
          { name: 'ダンプロボ', color: 'cyan darken-3 white--text' },
          { name: 'ショベルロボ', color: 'cyan darken-3 white--text' },
          { name: 'ブルロボ', color: 'cyan darken-3 white--text' },
          { name: 'クレーンロボ', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 13,
        name: 'ガスケツセット',
        description: 'ガソリンほっちいだっち！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=ガスケツセット',
        color: 'yellow lighten-5',
        friends: [
          { name: 'F-1 75', color: 'cyan darken-3 white--text' },
          { name: 'チャンピオンブガッティ', color: 'cyan darken-3 white--text' },
          { name: 'ロードプレーン', color: 'cyan darken-3 white--text' },
          { name: 'ジョニーウォーカー', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 14,
        name: 'リタイヤセット',
        description: '',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=リタイヤセット',
        color: 'amber lighten-5',
        friends: [
          { name: 'コブラ', color: 'cyan darken-3 white--text' },
          { name: 'F-1 Z', color: 'cyan darken-3 white--text' },
          { name: 'GT-Z', color: 'cyan darken-3 white--text' },
          { name: 'タルボトル', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 15,
        name: 'エンストセット',
        description: 'いけねー。エンジン忘れただっち！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=エンストセット',
        color: 'orange lighten-5',
        friends: [
          { name: 'モーガン', color: 'cyan darken-3 white--text' },
          { name: 'トーマス', color: 'cyan darken-3 white--text' },
          { name: 'メルセデス', color: 'cyan darken-3 white--text' },
          { name: 'ロードマン', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 16,
        name: 'ピカピカセット',
        description: '',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=ピカピカセット',
        color: 'deep-orange lighten-5',
        friends: [
          { name: 'ブリスコ', color: 'cyan darken-3 white--text' },
          { name: 'ランドジープ', color: 'cyan darken-3 white--text' },
          { name: 'パンサー', color: 'cyan darken-3 white--text' },
          { name: 'レーサー28号', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 17,
        name: 'ギンギンセット',
        description: 'おーっと。俺さまのお通りだー！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=ギンギンセット',
        color: 'brown lighten-5',
        friends: [
          { name: 'フェアレディZ', color: 'cyan darken-3 white--text' },
          { name: 'セリカ', color: 'cyan darken-3 white--text' },
          { name: 'トヨタ2000GT', color: 'cyan darken-3 white--text' },
          { name: 'ヨタ8', color: 'cyan darken-3 white--text' }
        ]
      },
      {
        id: 18,
        name: 'バリバリセット',
        description: 'ハチャメチャ冒険するだっち！！',
        imageSrc: 'https://dummyimage.com/128x128/777/fff.png&text=バリバリセット',
        color: 'blue-grey lighten-5',
        friends: [
          { name: 'ポルシェRS', color: 'cyan darken-3 white--text' },
          { name: 'ムスタングマッハ1', color: 'cyan darken-3 white--text' },
          { name: 'ジャガーE', color: 'cyan darken-3 white--text' },
          { name: 'アルファロメオ3プロト', color: 'cyan darken-3 white--text' }
        ]
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
}

export default friends
