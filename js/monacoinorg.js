$(function() {
   $('select').change(function() {
    var val = $(this).val();

    switch (val) {
      case "ja":
        atxt = '<p>モナーコイン（モナコイン）は2013年12月に誕生した日本初の暗号通貨です<br>有名なアスキーアート、「モナー」をモチーフにしています</p><p align="left">モナーコインは誰かが管理・運営する中央集権型ではなく、各ユーザーのPCで実行されるクライアントプログラムによって維持される完全分散型の決済システムです</p><p align="left">暗号通貨は世界的に投機的な面が強い傾向にありますが、モナーコインはユーザーによる様々なサービスの開発や、神社の建立、語呂合わせの投げ銭等、他のコインではあまり見られない使われ方が定着するなど、コミュニティ主体で発展を続けている暗号通貨です</p>プログラムはMonacoinprojectにより開発されていますが、コインの発行や運営は行っていません<br>Monacoinprojectは現・元２ちゃんねる運営、および関連会社とは一切関係ありません';
        ttxt = '<div align="left">「マイニング」と呼ばれる特定の計算を繰り返すプログラムをユーザーが実行することにより、コインが発行されます<br>モナーコインの公開時点でMonacoinprojectは１枚もコインを持っておらず、開発者もユーザーと同じ条件でしかコインの入手は出来ないようになっています（これはブロックチェーンによって誰でも確認できます）</div>';
        break;
      case "en":
        atxt = '<p>Monacoin is the first cryptocurrency in Japan that was born in December 2013.<br>Monacoin community is the most active cryptocurrency users community in Japan .</p><p><div class="video-wrapper"><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/lIg0ub_VWjk" frameborder="0" allowfullscreen></iframe></div></div></p>';
        ttxt = "";
        break;
      default:
        atxt = "";
        ttxt = "";
        break;
    }
 
    //選択したvalue値をp要素に出力
    $("#abouttext").html(atxt);
    $("#tdtext").html(ttxt);
  });
});