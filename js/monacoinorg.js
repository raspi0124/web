$(function() {
  $('select').change(function() {
    var val = $(this).val();
    setLang(val);
  });

  function setLang(val) {
    console.log("setLang: ", val);
    switch (val) {
      case "ja":
        atxt = '<p>モナーコイン（モナコイン）は2013年12月に誕生した日本初の暗号通貨です<br>有名なアスキーアート、「モナー」をモチーフにしています</p><p align="left">モナーコインは誰かが管理・運営する中央集権型ではなく、各ユーザーのPCで実行されるプログラムによって維持される完全分散型<font size="2">(*)</font>の決済システムです</p><p align="left">暗号通貨は世界的に投機的な面が強い傾向にありますが、モナーコインはユーザーによる様々なサービスの開発や、神社の建立、語呂合わせの投げ銭等、他のコインではあまり見られない使われ方が定着するなど、コミュニティ主体で発展を続けている暗号通貨です</p>プログラムはMonacoinprojectにより開発されていますが、コインの発行や運営は行っていません<br>Monacoinprojectは５ちゃんねる・２ちゃんねるの運営・関連企業とは一切関係ありません<br/>国内外の暗号通貨・ブロックチェーン関連の企業・団体とも今のところ関係はありません<br/><br/>* 0.16.2よりチェックポイントの配信が行われますが、ユーザーはこれを拒否することができます';
        ttxt = '<div align="left">「マイニング」と呼ばれる特定の計算を繰り返すプログラムをユーザーが実行することにより、コインが発行されます<br>モナーコインの公開時点でMonacoinprojectは１枚もコインを持っておらず、開発者もユーザーと同じ条件でしかコインの入手は出来ないようになっています（これはブロックチェーンによって誰でも確認できます）</div>';
        dtxt = '<div class="col-lg-8 col-lg-offset-2" style="margin-top:30px;">以前のバージョンからアップデートする場合は上書きインストールをしてください。<br>変更内容は<a href="https://github.com/monacoinproject/monacoin/blob/master-0.16/doc/release-notes-monacoin.md" target="_blank" >[こちら]</a>を参照してください。</div>';
        ltxt = '<div class="col-lg-8 col-lg-offset-2" >上記のクライアントはMonacoinproject以外の方が開発したものですが、同期が不要なのでお勧めです。</div>';
        break;
      case "en":
        atxt = '<p>Monacoin, conceived in the December of 2013, is the first alternative cryptocurrency developed in Japan. It is based on the popular ASCII art character, <a href="https://en.wikipedia.org/wiki/Shift_JIS_art#/media/File:Mona01.svg">Mona</a>.</p><p>Monacoin is not a payment system controlled by one single entity, but a fully distributed payment system preserved by everyone who uses it via client applications running on their computers.</p><p>While much of the world treats most cryptocurrencies as speculative ventures, Monacoin is a cryptocurrency popularized by the initiative of its community: it continues to be nurtured and built upon not by a core development team but by its enthusiastic user base. To give some examples, Monacoin users have brought up various kinds of Mona-based web applications and services, have erected shrines in appreciation of Monacoin, regularly <a href="https://en.wikipedia.org/wiki/Japanese_wordplay">play word games</a> when tipping others (known as "monage" (モナゲ, lit. "throwing mona")), and otherwise use the coin in ways users of most other coins would never have thought of.</p><p>Check out this video for more info (contributed by a Monacoin user).</p><div class="video-wrapper"><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/lIg0ub_VWjk" frameborder="0" allowfullscreen></iframe></div></div><br />While the main client has been developed by Monacoinproject, Monacoinproject has not, and will not, issue or otherwise manage any of the currency. Monacoinproject also has no relation to any current or previous members of 2channel (now 5channel) management nor its associated companies.';
        ttxt = '<div align="left">Through a process called "mining", coins are issued to users running programs to perform computational work.</br >Since Monacoin\'s launch, Monacoinproject has not set aside any coins for theirselves (known as "premining") - in other words, the developer of the coin and all of its users all have had the same conditions for obtaining coins from the very beginning (this can be confirmed by anyone by inspecting the blockchain).</div>';
        dtxt = '<div class="col-lg-8 col-lg-offset-2" style="margin-top:30px;">To update to a new version, please install the latest client over your previous installation.<br /><a href="https://github.com/monacoinproject/monacoin/blob/master-0.16/doc/release-notes-monacoin.md" class="btn btn-default btn-lg btn-download" target="_blank" >release notes</a></div></div>';
        ltxt = '<div class="col-lg-8 col-lg-offset-2">While the above clients have been developed by third parties (not Monacoinproject), they are recommended for those users who do not want to or cannot download a full copy of the blockchain.';
        break;
      case "hu":
        atxt = '<p>A Monacoin az első japán kriptopénz, amelyet 2013 decemberében hoztak létre. Szimbóluma egy népszerű ASCII-art karakter: <a href="https://en.wikipedia.org/wiki/Shift_JIS_art#/media/File:Mona01.svg">Mona</a>.</p><p>A Monacoint közvetlenül egyetlen intézet sem irányítja, működése a többi kriptopénzhez hasonlóan decentralizált, és maguk a felhasználók működtetik a Monacoin hálózatát.</p><p>A legtöbb mai kriptopénz spekulánsok által kerül kifejlesztésre, a Monacoint viszont a közössége tette nagyjá: nem egy fejlesztőcsapat építi fel, hanem maga a közösség fejleszti tovább. A közösség számos szoftvert és webalkalmazást épített a Monacoin köré, amelyek megáagyaztak a pénz sikerének, például <a href="https://en.wikipedia.org/wiki/Japanese_wordplay">szójátékok</a>, egymásnak történő adományozás a Monage bot segítségével, és számos más olyan módokon, ahogy más coinokat általában nem szoktak használni.</p><p>Nézd meg ezt a rövid videót, amelyet egy Monacoin felhasználó készített:</p><div class="video-wrapper"><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/lIg0ub_VWjk" frameborder="0" allowfullscreen></iframe></div></div><br />A fő klienst a Monacoinproject fejleszti, de sem ők, sem más szervezet sem felügyeli, bocsátja ki magát a coinokat, és nem is kontrollálja azokat semmilyen módon. A Monacoinproject nem áll kapcsolatban a jelenlegi, vagy korábbi tagokkal a 2channel (most 5channel) menedzsmetjével, vagy bármilyen vele kapcsolatban álló vállalattal.';
        ttxt = '<div align="left">A Monacoin bányászás során jön létre, ez a kifejezés azt takarja, hogy a coinok számítási feladatok elvégzésének eredményeként jönnek létre a felhasználóknál. </br >A Monacoin feljesztői nem bányásztak ki maguknak előre coinokat, ezért a fejlesztők sem rendelkeznek belőle extra tartalékokkal, ők is ugyanolyan szabályrendszer szerint juthatnak hozzá, mint bárki más. </div>';
        dtxt = '<div class="col-lg-8 col-lg-offset-2" style="margin-top:30px;">A legújabb kliens beszerzése érdekében töltsd le a legújabb változatot, és installáld a régi verzió fölé.<br /><a href="https://github.com/monacoinproject/monacoin/blob/master-0.16/doc/release-notes-monacoin.md" class="btn btn-default btn-lg btn-download" target="_blank" >release notes</a></div></div>';
        ltxt = '<div class="col-lg-8 col-lg-offset-2">A fenti klienseket harmadik szereplő hozta létre (nem a Monacoinproject), és azoknak ajánlott, akiknek nincs elég számítógépes kapacitásuk a teljes blokklánc letöltéséhez.';
        break;

       case "zh":
         atxt = '<p>萌奈币（Monacoin）是2013年12月发布的在日本第一出的加密货币。萌奈币基于有名的ASCII艺术角色“<a href="https://en.wikipedia.org/wiki/Shift_JIS_art#/media/File:Mona01.svg">Mona</a>”。</p><p>萌奈币不是被任何中央组织控制的。萌奈币是每个人电脑中运行的客户端软件维持的分散支付系统。</p><p>在表面上看加密货币的世界是投机冒险，但是萌奈币是社区推广的：萌奈币用户开发了各种的网上服务、修了萌奈币的神社、在投钱时用<a href="https://www.douban.com/group/topic/47761575/?type=like">双关语</a>，和从其他币用户看不到的使用方式。现在萌奈币的用户社区在继续开发萌奈币。</p><br />萌奈币的主客户端是Monacoinproject开发的，但是Monacoinproject完全不能创造或管理这个币。Monacoinproject和2channel（现在5channel）管理和关联公司没有关系。';

         ttxt = '<div align="left">“挖矿”（mining）是在用户电脑中运行特殊算法的程序来创造新的萌奈币。Monacoinproject没有先给他们自己任何币（叫premine）。开发者和用户必须用一样的方式来得到新的币。（你可以检查区块链来确认）</div>';
         dtxt = '<div class="col-lg-8 col-lg-offset-2" style="margin-top:30px;">如果你要更新客户端，请从以前的版本的地方上重新安装。<br /><a href="https://github.com/monacoinproject/monacoin/blob/master-0.16/doc/release-notes-monacoin.md" class="btn btn-default btn-lg btn-download" target="_blank">发布说明</a></div></div>';
         ltxt = '<div class="col-lg-8 col-lg-offset-2">上面的客户端是Monacoinproject以外开发的，但是它们不需要下载整个区块链。</div>';
         break;

      default:
        atxt = '';
        ttxt = '';
        dtxt = '';
        ltxt = '';
        break;
    }

    $("#abouttext").html(atxt);
    $("#tdtext").html(ttxt);
    $("#dltext").html(dtxt);
    $("#lltext").html(ltxt);
  }

  // Detect preferred language
  var langs = ["ja", "en", "hu", "zh"];
  var browserLangs = window.navigator.languages;

  var found = null;
  for (var i = 0; i < browserLangs.length; i++) {
    for (var j = 0; j < langs.length; j++) {
      if (browserLangs[i].match(langs[j])) {
        found = langs[j];
        break;
      }
    }

    if (found != null) break;
  }

  console.log(found);
  if (found == null) found = "ja";

  // Set language
  $('select').val(found);
  setLang(found);
});
