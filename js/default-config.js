// 公開用設定（クラブの公開情報のみ記載。個人名・個人の連絡先は記載しないこと）
// 手元だけ値を変えたい場合は .gitignore 対象の ./config.js で SITE_CONFIG を定義して上書きする
const DEFAULT_CONFIG = Object.freeze({
  clubName: 'みやまスポーツクラブ',
  clubShortName: 'みやまスポーツクラブ',
  address: '岡山県玉野市田井2-4464-10 玉野スポーツセンター内',
  tel: '0863-31-0888',
  telHours: '受付：火～土 9:00～19:00',
  venue: '玉野スポーツセンター',
  copyrightYear: '2026',
  // 問い合わせフォームの送信先。空なら newsEndpoint の GAS へ送り、どちらも無ければ送信せず完了表示のみ行う（デモ）
  formEndpoint: '',
  // お知らせの取得先・問い合わせの送信先（GAS の Webアプリの URL。末尾が /exec）。空の場合は js/data/news-data.js を表示する
  // config.js は .gitignore 対象で GitHub Pages には載らないため、公開サイトで使う URL はここに書く
  // （この URL はブラウザから誰でも見える値で、個人情報・秘密情報ではない。再デプロイで「新しいデプロイ」を作ると URL が変わるので注意）
  newsEndpoint: 'https://script.google.com/macros/s/AKfycbzPTwBei-KVbTxdJBNadQnGsQVCwHL4Y3Ca_baDI-WP8uKHgtNwT_mG9k15jtOIcVDx/exec',
});

if (typeof module === 'object' && module.exports) {
  module.exports = { DEFAULT_CONFIG };
}
