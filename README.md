# Openfaln Datasource -  3 party plugin

[Openfalcon](https://github.com/open-falcon() is a system monitor solution made by xiaomi.

![](./img/grafana_demo.png)

## How to install?
* Please download the latest version of Grafana on the [github](https://github.com/grafana/grafana). (currently the latest one is tag -> v3.0-beta5)
* Finish the all setup up. (more info please refer the README.md in Grafana project.)
```
cd $GOPATH/src/github.com/grafana/grafana
go run build.go setup            (only needed once to install godep)
godep restore                    (will pull down all golang lib dependencies in your current GOPATH)
go run build.go build
```
```
npm install
npm install -g grunt-cli
grunt
```
* Checkout this plugin
```
cd $GRAFANA_PATH/public_gen/app/plugins/datasource
git clone https://github.com/masato25/grafana-openfalcon
```
* Start grafana-server
```
./bin/grafana-server
```
* if the installation is successed, You will see Openfalcon on the datasource list.
![](./img/openfalcon_datasource.png)
