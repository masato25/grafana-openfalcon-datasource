System.register(['./datasource', './query_ctrl'], function(exports_1) {
    var datasource_1, query_ctrl_1;
    var OpenfalconConfigCtrl, OpenfalconQueryOptionsCtrl, AnnotationsQueryCtrl;
    return {
        setters:[
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            }],
        execute: function() {
            OpenfalconConfigCtrl = (function () {
                function OpenfalconConfigCtrl() {
                }
                OpenfalconConfigCtrl.templateUrl = 'partials/config.html';
                return OpenfalconConfigCtrl;
            })();
            OpenfalconQueryOptionsCtrl = (function () {
                function OpenfalconQueryOptionsCtrl() {
                }
                OpenfalconQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
                return OpenfalconQueryOptionsCtrl;
            })();
            AnnotationsQueryCtrl = (function () {
                function AnnotationsQueryCtrl() {
                }
                AnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
                return AnnotationsQueryCtrl;
            })();
            exports_1("Datasource", datasource_1.OpenfalconDatasource);
            exports_1("QueryCtrl", query_ctrl_1.OpenfalconQueryCtrl);
            exports_1("ConfigCtrl", OpenfalconConfigCtrl);
            exports_1("QueryOptionsCtrl", OpenfalconQueryOptionsCtrl);
            exports_1("AnnotationsQueryCtrl", AnnotationsQueryCtrl);
        }
    }
});
//# sourceMappingURL=module.js.map