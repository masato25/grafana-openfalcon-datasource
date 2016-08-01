# Open-Falcon plugin for Grafana

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


### Method 1: Building from Source

```
git clone https://github.com/grafana/grafana
git checkout v3.0-beta7
```

#### Building Backend
```
cd $GOPATH/src/github.com/grafana/grafana
go run build.go setup            (only needed once to install godep)
godep restore                    (will pull down all golang lib dependencies in your current GOPATH)
go run build.go build
```

#### Building Frontend
```
npm install
npm install -g grunt-cli
grunt
```

#### Checkout the plugin
```
cd $GRAFANA_PATH/public_gen/app/plugins/datasource
git clone https://github.com/hitripod/grafana-openfalcon-datasource openfalcon
```

### Start grafana-server
```
./bin/grafana-server
```

### Method 2: Using grafana-cli

`grafana-cli plugins install grafana-openfalcon-datasource`

#### Checkout the plugin

```
cd /var/lib/grafana/plugins
git clone https://github.com/hitripod/grafana-openfalcon-datasource grafana-openfalcon-datasource
```

#### Update the plugin information

Add the following into `$GRAFANA_PATH/conf/defaults.ini`:
```
[plugin.openfalcon]
path = /var/lib/grafana/plugins/grafana-openfalcon-datasource
```

## After Installation
If the installation is successful, Open-Falcon datasource would be shown as follow:
![](https://raw.githubusercontent.com/hitripod/kordan.common.store/master/images/open-falcon/grafana_plugin_1.png)
