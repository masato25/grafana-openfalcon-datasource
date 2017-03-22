# Open-Falcon plugin for Grafana v4.x

## Attention!
This plugin `will not compatible on old version v3.x` (on v3.x you can user offcial version of query module from open-falcon).
We did some new feature on v4.x version, so you have use the custom build up version of query that build by me.
the repo url is here: https://github.com/masato25/open_lambda_query, if you meet any problem on setup or how to use it, please feel free to contact me. ^_^ enjoy

## About this plugin

[Open-Falcon](https://github.com/open-falcon/open-falcon) is an open-source, enterprise-level, and large-scale service monitoring system and time series database. It's initially released by Xiaomi SRE team in 2015 and heavily used in Xiaomi. Open-Falcon is now one of the most popular monitoring system in China internet companies:

- www.mi.com
- www.meituan.com
- www.Xunlei.com
- www.Baidu.com
- www.ksyun.com
- www.douban.com
- www.fastweb.com.cn
- www.ganji.com
- www.upyun.com
- www.xiaojukeji.com
- www.iqiyi.com

More Info:

- Full company list: https://github.com/XiaoMi/open-falcon/issues/4
- Release: https://github.com/open-falcon/of-release
- Documentation: http://book.open-falcon.org

## Installation

```
cd $grafanav4.path/data/plugins
git clone https://github.com/masato25/grafana-openfalcon-datasource
cd grafana-openfalcon-datasource
git checkout v0.2
```

### Start grafana-server
```
./bin/grafana-server
```


## After Installation
If the installation is successful, Open-Falcon datasource would be shown as follow:
![](https://raw.githubusercontent.com/hitripod/kordan.common.store/master/images/open-falcon/grafana_plugin_1.png)
