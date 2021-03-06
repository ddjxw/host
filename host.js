var PROXY = {};
PROXY.direct = "DIRECT";
PROXY.goagent = "PROXY 127.0.0.1:8087";
PROXY.ssh = "PROXY 127.0.0.1:8123";
PROXY.jpkc = "PROXY 127.0.0.1:4080";
PROXY.adblock = "PROXY 127.0.0.1:8080";
PROXY.acc = PROXY['goagent'];
var DEFAULT = PROXY['direct'];

var ADBLOCK = {
  "domain": [
    'www.qq.com',
    '*.qq.com',
    '94.191.67.125',
    'tdatamaster.com',
    '*.anticheatexpert.com',
    '*.helpshift.com',
    'helpshift.com',
    '*.tencentcloudapi.com',
    'tencentcloudapi.com',
    '*.proximabeta.com',
    'proximabeta.com',
    '*.activision.com',
    'activision.com',
    '*.tencent-cloud.com',
    'tencent-cloud.com',
    '*.cloud.tencent.com',
    'cloud.tencent.com',
    '*.tencentgames.com',
    'tencentgames.com',
    '*.tencentcloudapi.com',
    'tencentcloudapi.com',
    '*.tencent.com',
    'tencent.com',
    '*.igamecj.com',
    'igamecj.com',
    '*.onezapp.com',
    'onezapp.com',
    '*.amazonaws.com',
    'amazonaws.com',
    '*.core.com',
    'core.com',
    '*.capcom.com',
    'capcom.com',
    '*.lag.com',
    'lag.com',
    '*.quantum.com',
    'quantum.com',
    'pubgmobile.jp',
    '*.pubgmobile.jp',
    'pubg.com',
    '*.pubg.com',
    'pubgameshowtime.com',
    'inappcheck.itunes.apple.com',
    'app-measurement.com',
    'configuration.ls.apple.com',
    'sg.tdatamaster.com',
    'platform-lookaside.fbsbx.com',
    'graph.facebook.com',
    'http://pbs.twimg.com/profile_images/1422247667699224579/pMQgfMpV_bigger.jpg',
    'pbs.twimg.com',
    'http://file.igamecj.com/1375135419/1038/dyncures/1.5.0.15331/1375135419_1038_1.5.0.15331_20210706111511_1386707539_dyncures.ifs',
    'file.igamecj.com',
    'http://file.igamecj.com/1375135419/1268/dyncures/1.5.0.15331/1375135419_1268_1.5.0.15331_20210706113215_1464028584_dyncures.ifs',
    'euspeed.igamecj.com',
    'http://cloud.gsdk.proximabeta.com:18081/?cmdid=1&appid=i1106545419',
    'cloud.gsdk.proximabeta.com',
    '5003-shadow.igamecj.com',
    'eu-mo.shadow.igamecj.com',
    'kj-se.shadow.igamecj.com',
    '2006-shadow.igamecj.com',
    'kj-se.shadow.igamecj.com',
    'eu-fra.shadow.igamecj.com',
    '5005-shadow.igamecj.com',
    'as-in.shadow.igamecj.com',
    '5004-shadow.igamecj.com',
    'me-du.shadow.igamecj.com',
    'sa-sap.shadow.igamecj.com',
    '2007-shadow.igamecj.com',
    'sa-sap-m.shadow.igamecj.com',
    'na-centra.shadow.igamecj.com',
    'na-east.shadow.igamecj.com',
    'me-du.shadow.igamecj.com',
    'as-mb.shadow.igamecj.com',
    'as-hk.shadow.igamecj.com',
    'na-west.shadow.igamecj.com',
    'http://file.igamecj.com/1375135419/1038/dyncures/1.5.0.15331/1375135419_1038_1.5.0.15331_20210706111511_1386707539_dyncures.ifs',
    'gateway.icloud.com',
    'napubgm.broker.amsoveasea.com',
    'nawzryhwatm.broker.amsoveasea.com',
    '129.226.3.30',
    'mgl.lobby.igamecj.com',
    'asia.csoversea.mbgame.anticheatexpert.com',
    'firebaseremoteconfig.googleapis.com',
    'fcmtoken.googleapis.com',
    'ios.bugly.qcloud.com',
    'firebaseinstallations.googleapis.com',
    'device-provisioning.googleapis.com',
    'weather-data.apple.com',
    'pandora.game.qq.com',
    'napubgm.broker.amsoveasea.com',
    '129.226.2.165',
    'nawzryhwatm.broker.amsoveasea.com',
    'pandora.game.qq.com',
    '180.163.25.202',
    'qos.gcloud.qq.com',
    'gsdk.qq.com',


    'pixel.quantserve.com',
    '.scorecardresearch.com',
    'adlog.com.com',
    'apex.com.com',
    '.imrworldwide.com',
    '.doubleverify.com',
    'dw.com.com',
    '.revsci.net',
    'tags.bluekai.com',
    'gscounters.gigya.com',
    'bid.openx.net',
    '.justtechjobs.com',
    '.intellitxt.com',
    'js.bizographics.com',
    'jlinks.industrybrains.com',
    '.qnsr.com',
    '.adnxs.com',
    'pagead2.googlesyndication.com',
    'avazudsp.net',
    'partner.googleadservices.com',
    '.doubleclick.net',
    'main.gslb.ku6.com',
    'lu.sogou.com',
    'inte.sogou.com'
  ],
  "shexp": [
    '*://images.sohu.com/cs/jsfile/js/ct.*',
    '*://readict.com/promotion/*',
    '*://www.iicdn.com/www/delivery/afr.php*',
    '*://duiwai.baidu.com/nocache/mp/*',
    '*://bc.ifeng.com/main/s*',
    '*://cpro.baidu.com/cpro/*',
    '*://sc.ifeng.com/js.ng/channel*',
    '*.alimama.com/alimama.php*',
    '*.alimama.cn/js/ac.js',
    '*://cdn.tanx.com/t/tanxclick.js',
    '*static.atm.youku.com/*.swf*',
    '*static.atm.youku.com/*.jpg*',
    '*d1.sina.com.cn/*.flv',
    '*.f4v?*&vidtp=*&igrft=*',
    '*f.youku.com/player/getFlvPath/fileid/*',
    '*/ikuadapter.swf',
    '*://connect.facebook.net/*',
    '*://platform.twitter.com/widgets.js',
    '*.tdimg.com/sales/*',
    '*.56imgs.com*/tuiguang*'
  ]
};
var GFW_LONGHTTP = {
  "domain": [
    'userstream.twitter.com',
    '.youtube.com',
    '.vimeo.com',
    '.blip.tv'
  ]
};
var GFW = {
  "domain": [
    '4bsd.biz',
    'tabsugar.com',
    'bitly.com',
    '.addthiscdn.com',
    '.disqus.com',
    '.ggpht.com',
    '.tv.com',
    'widgets.twimg.com',
    '.android-x86.org',
    '.rfa.org',
    '.cld.me',
    'mashable.com',
    '.nextmedia.com',
    '.appleactionews.com',
    '.tumblr.com',
    'mobileways.de',
    'helpdesk.lastpass.com',
    '.pixfs.net',
    '.pixnet.net',
    'blip.tv',
    '.scribd.com',
    '.voanews.com',
    '.android.com',
    '.gstatic.com',
    '.chromium.org',
    '.t66y.com',
    't66y.com',
    '.letscorp.net',
    'youtu.be',
    '.epfl.ch',
    '.snsanalytics.com',
    '.tweetmeme.com',
    'smf.is',
    'twitterfeed.com',
    '.twitterfeed.com',
    '.r246.jp',
    '.wordpress.com',
    'p.twimg.com',
    '.rfi.fr',
    'chromiumupdater.sytes.net',
    'wezone.net',
    'zh.wikipedia.org',
    'chinadigitaltimes.net',
    '.chinadigitaltimes.net',
    'bit.ly',
    '.googleapis.com',
    '.google.com',
    'analyticsrock.com',
    'sns.mx',
    'solidot.org.feedsportal.com',
    '.pocoo.org',
    '.linkedin.com',
    '.fnierdster.com',
    '.milewise.com',
    'picplz.com',
    't.co',
    'youtube.com',
    '.ytimg.com',
    'google.com',
    '.googleusercontent.com',
    '.googlepages.com',
    '.googlevideo.com',
    '.googlecode.com',
    '.appspot.com',
    '.blogspot.com',
    '.google-analytics.com',
    '.rene-liu.com',
    'rene-liu.com',
    '.4shared.com',
    '4shared.com',
    '.twitter.com',
    'twitter.com',
    'twitpic.com',
    'img.ly',
    'j.mp',
    'yfrog.com',
    '.facebook.com',
    'facebook.com',
    '.fbcdn.net',
    '.feedburner.com',
    'feedburner.com',
    'foursquare.com',
    'bullogger.com',
    '.bullogger.com',
    'diigo.com',
    '.diigo.com',
    'dropbox.com',
    'ht.ly',
    'hootsuite.com',
    '.hootsuite.com',
    'imageshack.us',
    'imdb.com',
    '.imdb.com',
    'mail-archive.com',
    '.mail-archive.com',
    'mobypicture.com',
    'ow.ly',
    'pastie.org',
    'plixi.com',
    '.plixi.com',
    'plurk.com',
    '.plurk.com',
    '.rapidshare.com',
    'rapidshare.com',
    'wp.me',
    'nyti.ms',
    '.googlesyndication.com',
    'page2rss.com',
    '.dhananjaynene.com',
    '.twbbs.org.tw',
    'llvm.org',
    '.llvm.org',
    '.tweetdeck.com',
    'thepiratebay.org',
    '.thepiratebay.org',
    'apigee.com',
    '.apigee.com',
    'cl.ly',
    'guao.cc',
    'vimeo.com',
    '.wdfiles.com',
    '.ohloh.net',
    '.googlelabs.com',
    '.creaders.net',
    'pulse.yahoo.com',
    '.blogger.com',
    '.google.com.hk',
    'go.redirectingat.com',
    'wmpsp.s3.amazonaws.com',
    '.facebook.net',
    '.faststone.org',
    'the-big-bang-theory.com',
    '.the-big-bang-theory.com',
    '.echofon.com',
    'goo.gl',
    'hackerne.ws',
    'friendfeed.com',
    '.friendfeed.com'
  ],
  "shexp": [
    '*://goo.gl/fb/*',
    '*posterous.com*',
    '*://www.python.org/download/*'
  ]
};
var ACC = {
  "domain": [
    's3.amazonaws.com',
    '.sencha.com',
    '.cloudfront.net',
    '.readability.com'
  ]
};
var DOCUMENT = {
  "domain": [
    'dx.doi.org',
    '.thescientificworld.co.uk',
    '.wiley.com',
    '.liebertonline.com',
    '.springerlink.com',
    '.aacrjournals.org',
    '.nature.com',
    '.redjournal.org',
    '.sciencedirect.com',
    '.metapress.com',
    '202.114.130.209',
    '.sciencemag.org'
  ]
};
var ALL = {
  "adblock": ADBLOCK,
  "ssh": GFW_LONGHTTP,
  "goagent": GFW,
  "acc": ACC,
  "jpkc": DOCUMENT
};


function FindProxyForURL(url, host) {
  var validate_domain = function (pattern) {
    return dnsDomainIs(host, pattern);
  };
  var validate_shexp = function (pattern) {
    return shExpMatch(url, pattern);
  };
  var validate_regexp = function (pattern) {
    return pattern.test(url);
  };
  var validate_dummy = function (pattern) {
    return false;
  };
  var proxy_name, proxy, category, rule_type, rules, validate_func, rule_num, rule;
  for (proxy_name in ALL) {
    proxy = PROXY[proxy_name];
    category = ALL[proxy_name];
    for (rule_type in category) {
      rules = category[rule_type];
      switch (rule_type) {
        case 'domain': 
          validate_func = validate_domain;
          break;
        case 'shexp':
          validate_func = validate_shexp;
          break;
        case 'regexp':
          validate_func = validate_regexp;
          break;
        default:
          validate_func = validate_dummy;
      }
      for (rule_num in rules) {
        rule = rules[rule_num];
        if (validate_func(rule)) {
          return proxy;
        }
      }
    }
  }
  return DEFAULT;
}