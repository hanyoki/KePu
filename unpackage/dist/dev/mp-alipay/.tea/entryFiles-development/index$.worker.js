if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=b19dd0d6a9bd454954ae3c14da7d5cdd40447fb6');
require('../../components/share-btn/share-btn?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/FamilyLife/FamilyLife?hash=4ea5262a4b69f71cddb36ee781f4e68ae3060226');
require('../../components/Technology/Technology?hash=61f4b818ece85166f1cb288a6a22a131df8e372d');
require('../../components/Beauty/Beauty?hash=4ea5262a4b69f71cddb36ee781f4e68ae3060226');
require('../../components/Animal/Animal?hash=4ea5262a4b69f71cddb36ee781f4e68ae3060226');
require('../../components/Game/Game?hash=4ea5262a4b69f71cddb36ee781f4e68ae3060226');
require('../../components/Life/Life?hash=4ea5262a4b69f71cddb36ee781f4e68ae3060226');
require('../../components/Interset/Interset?hash=61f4b818ece85166f1cb288a6a22a131df8e372d');
require('../../pages/index/index?hash=04a05501254be2e5cb47c1f983670d9d29901d3f');
require('../../pages/center/center?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/shoucang/shoucang?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/sorry/sorry?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ArticleDetail-Game/ArticleDetail-Game?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-Game/VideoDetail-Game?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-FamilyLife/VideoDetail-FamilyLife?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/ArticleDetail-FamilyLife/ArticleDetail-FamilyLife?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/ArticleDetail-Technology/ArticleDetail-Technology?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-Technology/VideoDetail-Technology?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/ArticleDetail-Beauty/ArticleDetail-Beauty?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-Beauty/VideoDetail-Beauty?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/ArticleDetail-Animal/ArticleDetail-Animal?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-Animal/VideoDetail-Animal?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/ArticleDetail-Life/ArticleDetail-Life?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-Life/VideoDetail-Life?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/ArticleDetail-Interset/ArticleDetail-Interset?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/VideoDetail-Interset/VideoDetail-Interset?hash=57ab9b3544a30a310491271d22fdf4c791282488');
require('../../pages/feedback/feedback?hash=af30089a14de5bba22f51cbb6b3d48bc536087f6');
require('../../pages/privacy/privacy?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/about/about?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}